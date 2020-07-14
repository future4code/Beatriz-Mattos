import { db } from './DataSetup';

const userTableName = "User";

const createUser = async (id: string, email: string, password: string) => {
  await db()
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};