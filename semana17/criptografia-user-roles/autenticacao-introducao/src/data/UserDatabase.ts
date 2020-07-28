import knex from "knex";
import { BaseDataBase } from "./BaseDataBase";
import { USER_ROLES } from "../services/Authenticator";

export class UserDatabase extends BaseDataBase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  });

  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string,
    role: USER_ROLES
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
        role
      })
      .into(UserDatabase.TABLE_NAME);

    BaseDataBase.destroyConnection();
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    BaseDataBase.destroyConnection();

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    BaseDataBase.destroyConnection();

    return result[0];
  }

  public async deleteUser(id: string): Promise<void> {
    await this.getConnection().raw(`
      DELETE FROM ${UserDatabase.TABLE_NAME}
      WHERE id = "${id}"
    `)
  }
}
