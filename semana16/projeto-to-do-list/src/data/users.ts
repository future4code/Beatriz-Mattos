import { db } from './dataSetup';

const usersTable = "ToDoListUsers";

export const createUser = async (name: string, nickname: string, email: string): Promise<void> => {
    const id = (new Date()).getTime();
    await db()
        .insert({
            id: id.toString(),
            name,
            nickname,
            email
        })
        .into(usersTable);
};

export const getUserById = async (id: string): Promise<any> => {
    const result = await db()
        .select("*")
        .from(usersTable)
        .where({ id })

    return result[0];
};

export const updateUser = async (id: string, name?: string, nickname?: string): Promise<void> => {
    await db()
        .update({
            name,
            nickname
        })
        .where({ id })
        .into(usersTable);
};