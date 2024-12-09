const request = require('supertest');
const app = require('../../index');
const db = require('../../models/db');

// Mock para simular a resposta do banco de dados
jest.mock('../../models/db');

describe('GET /measures', () => {
  test('Deve retornar medidas com sucesso', async () => {
    db.query.mockResolvedValueOnce([[{ id: 1, device_id: 123, created_at_mili: 1729984980000 }]]);
    
    const response = await request(app).get('/measures/measures?deviceId=123');
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual([{ id: 1, device_id: 123, created_at_mili: 1729984980000 }]);
  });

  test('Deve retornar erro 400 para deviceId inválido', async () => {
    const response = await request(app).get('/measures/measures?deviceId=abc');
    
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.msg).toBe('deviceId inválido');
  });

  test('Deve retornar erro 404 quando nenhum dado é encontrado', async () => {
    db.query.mockResolvedValueOnce([[]]);
    
    const response = await request(app).get('/measures/measures?deviceId=999');
    
    expect(response.status).toBe(404);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Nenhum dado encontrado');
  });
});

describe('GET /history', () => {
  test('Deve retornar histórico com sucesso', async () => {
    db.query.mockResolvedValueOnce([
      [{ Nitrogen: 10, device_id: 123, created_at_mili: 1729984980000 }]
    ]);
    
    const response = await request(app).get('/measures/history?deviceId=123');
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual([
      { Nitrogen: 10, device_id: 123, created_at_mili: 1729984980000 }
    ]);
  });

  test('Deve retornar erro 400 para deviceId inválido', async () => {
    const response = await request(app).get('/measures/history?deviceId=abc');
    
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.msg).toBe('deviceId inválido');
  });
});
