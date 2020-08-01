import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
    private static BAND_DB_NAME: string = "Band";

    public async registerBand(
        id: string,
        name: string,
        music_genre: string,
        responsible: string
    ) {
        try {
            await this.getConnection()
                .insert({ id, name, music_genre, responsible })
                .into(BandDatabase.BAND_DB_NAME)
        } catch (err) {
            throw new Error(err.sqlMessage || err.message)
        }
    };

    //public async bandDetails()
};