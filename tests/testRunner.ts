import { jest } from '@jest/globals';

jest.setTimeout(15000); // Timeout global de 15 segundos

beforeEach( () => {
    console.log('[Inicio] Ejecutando todas las pruebas...');
});

afterAll( () => {
    console.log('[Fin] Pruebas completadas');
});

import './infra/azureConnection.spec';
