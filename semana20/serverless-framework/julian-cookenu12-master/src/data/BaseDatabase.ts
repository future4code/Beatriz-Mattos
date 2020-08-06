import knex from "knex";
import Knex from "knex";

/* Classe que realiza a conexão com o banco, utilizando knex */
export abstract class BaseDataBase {
    private static connection: Knex | null = null;
    protected getConnection(): Knex {
        if (BaseDataBase.connection === null) {
            BaseDataBase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                },
            })
        }
        return BaseDataBase.connection;
    }

    /* Método estático de destruir a conexão, para desativar os endpoints uma vez que eles já foram executados p/ não gerar problemas dependendo do tamanho da aplicação */
    public static async destroyConnection(): Promise<void> {
        if (BaseDataBase.connection) {
            await BaseDataBase.connection.destroy();
            BaseDataBase.connection = null;
        }

        BaseDataBase.destroyConnection();
    }
}