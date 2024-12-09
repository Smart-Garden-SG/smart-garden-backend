const request = require('supertest');
const app = require('../../index');
const db = require('../../models/db');

// Mock para simular a resposta do banco de dados
jest.mock('../../models/db');

describe('Eventos Controller', () => {
  it('deve deletar o evento com sucesso', async () => {
    const desc = 'High-P Fertilizer';
    const device_id = 2;

    db.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const response = await request(app).delete(`/events/${encodeURIComponent(desc)}?device_id=${device_id}`);
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Evento deletado com sucesso');
  });

  it('deve retornar erro 404 se o evento não for encontrado', async () => {
    const desc = 'Nonexistent Event';
    const device_id = 9999;

    db.query.mockResolvedValueOnce([{ affectedRows: 0 }]);

    const response = await request(app).delete(`/events/${encodeURIComponent(desc)}?device_id=${device_id}`);
    
    expect(response.status).toBe(404);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Evento não encontrado');
  });

  it('deve retornar erro 500 se falhar ao deletar evento', async () => {
    const desc = 'Evitar adubos ricos em Nitrogênio (Excesso detectado)';
    const device_id = 8;

    db.query.mockRejectedValueOnce(new Error('Erro no banco'));

    const response = await request(app).delete(`/events/${encodeURIComponent(desc)}?device_id=${device_id}`);
    
    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Erro ao deletar evento');
  });
});
