import { db } from "./dataSetup";
import moment from "moment";

const tasksTable = "ToDoListTasks";

export const createTask = async (
    title: string,
    description: string,
    limitDate: moment.Moment,
    creatorUserId: string
): Promise<void> => {
    const id = new Date().getTime();
    await db()
        .insert({
            id,
            title,
            description,
            limit_date: limitDate.format("DD/MM/YYYY"),
            creator_user_id: creatorUserId
        })
        .into(tasksTable);
};