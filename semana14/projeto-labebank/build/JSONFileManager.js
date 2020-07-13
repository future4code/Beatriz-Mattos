"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFileManager = void 0;
const fs = require("fs");
class JSONFileManager {
    constructor() {
        this.fileName = "data.json";
    }
    readDatabase() {
        try {
            return JSON.parse(fs.readFileSync(`./${this.fileName}`).toString());
        }
        catch (error) {
            return [];
        }
    }
    writeToDatabase(data) {
        try {
            const dataAsString = JSON.stringify(data, null, 2);
            fs.writeFileSync(`./${this.fileName}`, dataAsString);
        }
        catch (error) {
            console.log("Falha em organizar a base de dados.");
        }
    }
}
exports.JSONFileManager = JSONFileManager;
