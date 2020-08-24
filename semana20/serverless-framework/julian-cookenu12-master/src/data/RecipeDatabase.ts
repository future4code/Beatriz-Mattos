import { BaseDataBase } from '../data/BaseDatabase';
import moment from 'moment';

export class RecipeDatabase extends BaseDataBase {
  private static TABLE_NAME = 'Recipe'

  public async createRecipe(
    recipe_id: string,
    author_id: string,
    title: string,
    description: string,
    created_at: string = moment().format("YYYY-MM-DD"),
  ): Promise<void> {
    await this.getConnection()
      .insert({ recipe_id, author_id, title, description, created_at })
      .into(RecipeDatabase.TABLE_NAME);
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(RecipeDatabase.TABLE_NAME)
      .where({ id });

    BaseDataBase.destroyConnection();

    return result[0];
  }

  public async getRecipeById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(RecipeDatabase.TABLE_NAME)
      .where({ recipe_id: id })

    BaseDataBase.destroyConnection()

    return result[0]
  }
}
