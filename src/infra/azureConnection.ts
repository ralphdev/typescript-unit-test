import { WebApi, getBearerHandler } from "azure-devops-node-api";

export class AzureConnection {

    private connection: WebApi;

    constructor(private orgUrl: string, private token: string){

        if(!token){
            throw new Error('Token Requerido')
        }

        this.connection = new WebApi(orgUrl, getBearerHandler(token))
    }

    async connect(): Promise<WebApi> {

        //Verificacion de la conexion
        await this.connection.getCoreApi();
        return this.connection;
    }

    getConnection(): WebApi {
        return this.connection;
    }
}

export class ConnectionError extends Error {

    constructor(message:string){
        super(`Azure DevOps Connection Error: ${message}`);
        this.name = 'ConnectionError'
    }
}
