import { BaseDataBase } from '../data/BaseDatabase'
import { USER_ROLES } from '../services/Authenticator';

export class UserDatabase extends BaseDataBase {
  private static TABLE_NAME = 'User'

  /* Queries que se comunicam com a tabela de usuários no banco de dados */
  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        name,
        email,
        password,
        role
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  // public async deleteUser(id: string): Promise<void> {
  //   await this.getConnection().raw(`
  //   DELETE FROM ${UserDatabase.TABLE_NAME}
  //   WHERE id = "${id}"
  // `)
  // }
}

