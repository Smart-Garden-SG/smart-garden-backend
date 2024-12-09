const request = require("supertest");
const app = require("../../index");
const db = require("../../models/dbTest");

beforeAll(async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS tb_measures (
      id INT AUTO_INCREMENT PRIMARY KEY,
      device_id INT,
      value FLOAT,
      created_at_mili DATETIME
    )
  `);
});

beforeEach(async () => {
  await db.query(`DELETE FROM tb_measures`);
  await db.query(`
    INSERT INTO tb_measures (device_id, value, created_at_mili)
    VALUES (1, 25, '2024-10-01 10:00:00')
  `);
});

afterAll(async () => {
  await db.query(`DROP TABLE IF EXISTS tb_measures`);
  await db.end();
});

describe("GET /measures", () => {
  it("Deve retornar todas as medições sem filtros", async () => {
    const response = await request(app).get("/measures");
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveLength(1);
    expect(response.body.data[0]).toEqual({
      device_id: 1,
      value: 25,
      created_at_mili: "2024-10-01T10:00:00.000Z",
    });
  });
});
