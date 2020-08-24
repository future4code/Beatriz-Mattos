import { BaseDataBase } from "./BaseDatabase";

export class UsersRelationDatabase extends BaseDataBase {
    private static TABLE_NAME = "users_relation";

    public async followUser(userId: string, userToFollowId: string): Promise<void> {
        await this.getConnection()
        .insert({
            user_id: userId,
            user_to_follow: userToFollowId
        })
        .into(UsersRelationDatabase.TABLE_NAME);
    };

    public async unfollowUser(userId: string, userToUnfollowId: string): Promise<void> {
        await this.getConnection()
        .delete()
        .from(UsersRelationDatabase.TABLE_NAME)
        .where({
            user_id: userId,
            user_to_follow: userToUnfollowId
        })
    };
}