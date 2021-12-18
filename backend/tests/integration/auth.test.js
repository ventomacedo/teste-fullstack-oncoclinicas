const { it, describe, expect } = require("@jest/globals");
const request                  = require("supertest");

const app   = require('../../src/app');

describe('Authentication', () => {
    
    it('should register user', async () => {
        const response = await request(app)
            .post("/api/v1/usuarios")
            .send({ 
                name:     "Vento Macedo",
                email:    "vento@teste.com.br", 
                password: "123456" 
            });
        expect(response.status).toBe(200);
        done();
    });

    it('should authenticate with valid credentials', async () => {
        const response = await request(app)
            .post("/api/v1/login")
            .send({ 
                email:    "vento@teste.com.br", 
                password: "123456" 
            });

        expect(response.status).toBe(200);
        done();
    });
    
});