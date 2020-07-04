import * as fs from 'fs';

export class JSONFileManager {
    private fileName: string = "data.json";

    public readDatabase(): any {
        try {
            return JSON.parse(fs.readFileSync(`./${this.fileName}`).toString())
        } catch (error) {
            return []
        }
    }

    public writeToDatabase(data: any): void {
        try {
            const dataAsString: string = JSON.stringify(data, null, 2);
            fs.writeFileSync(`./${this.fileName}`, dataAsString);
        } catch (error) {
            console.log("Falha em organizar a base de dados.");
        }
    }
}