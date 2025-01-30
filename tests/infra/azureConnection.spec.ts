import { AzureConnection } from "@/infra/azureConnection";

describe('AzureConnection', () => {

  it('debe lanzar error si el token está vacío', () => {
    // Act & Assert
    expect(() => new AzureConnection('url-valida', '')).toThrow();
  });
});
