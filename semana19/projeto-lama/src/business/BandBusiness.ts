import { IdGenerator } from "../services/IdGenerator";
import { BandDatabase } from "../data/BandDatabase";
import { RegisterBandDTO } from "../model/Band";

export class BandBusiness {
    async register(band: RegisterBandDTO) {
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const bandDatabase = new BandDatabase();
        await bandDatabase.registerBand(id, band.name, band.music_genre, band.responsible);
    };

    async getBandById(id: string) {
        const bandDatabase = new BandDatabase();

        return await bandDatabase.getBandById(id);
    };

    async getBandByName(name: string) {
        const bandDatabase = new BandDatabase();

        return await bandDatabase.getBandByName(name);
    };
};