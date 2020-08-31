import { BaseDataBase } from "./BaseDatabase";

export class FeedDatabase extends BaseDataBase {
    public async getFeed(userId: string): Promise<any> {
        const result = await this.getConnection().raw(`
        SELECT Recipe.recipe_id, title, description, created_at, User.id, User.name
        FROM Recipe
        JOIN users_relation
        ON users_relation.user_to_follow = Recipe.author_id
        AND users_relation.user_id = '${userId}'
        JOIN User
        ON Recipe.author_id = User.id
        `);

        return result[0];
    };
};