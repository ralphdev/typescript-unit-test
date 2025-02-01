import { AzureConnection, ConnectionError } from "@/infra/azureConnection";
import { AZURE_URL, AZURE_TOKEN } from "@/utils/Constants";
import { WebApi, getBearerHandler } from "azure-devops-node-api";

jest.mock('azure-devops-node-api', () => ({
  WebApi: jest.fn().mockImplementation(() => ({
    getCoreApi: jest.fn()
  })),
  getBearerHandler: jest.fn()
}));

describe('AzureConnection', () => {

  let azureConnection: AzureConnection;

  beforeEach(() => {
    azureConnection = new AzureConnection(AZURE_URL, AZURE_TOKEN);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('Debe lanzar error si el token está vacío', () => {
    expect(() => new AzureConnection(AZURE_URL, '')).toThrow('Token Requerido');
  });

  it('Debe llamar a getCoreApi al conectar', async () => {
    const getCoreApiSpy = jest.spyOn(azureConnection.getConnection(), 'getCoreApi');
    await azureConnection.connect();
    expect(getCoreApiSpy).toHaveBeenCalled();
  });

  /* it('Debe crear una instancia de AzureConnection con token válido', async() => {
    const azureConnection = new AzureConnection(AZURE_URL, AZURE_TOKEN);
    await azureConnection.connect();
    const connection = azureConnection.getConnection();
    expect(connection).toBeDefined();
    expect(connection).toBeInstanceOf(WebApi);
  }); */

  it('Debe lanzar ConnectionError con mensaje personalizado', () => {
    const errorMessage = 'Custom error message';
    const connectionError = new ConnectionError(errorMessage);
    expect(connectionError).toBeInstanceOf(Error);
    expect(connectionError.message).toBe(`Azure DevOps Connection Error: ${errorMessage}`);
    expect(connectionError.name).toBe('ConnectionError');
  });
});
