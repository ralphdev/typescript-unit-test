import { jest } from '@jest/globals';
import './infra/azureConnection.spec';

jest.setTimeout(15000); // Timeout global de 15 segundos

beforeEach(() => {
    console.log('[Inicio] Ejecutando todas las pruebas...');
});

afterAll(() => {
    console.log('[Fin] Pruebas completadas');
});
