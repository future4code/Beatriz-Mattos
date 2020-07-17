import * as fs from "fs";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Mission } from "./Mission";

export class FileManager {
    constructor(private filePath: string) {}

    public setFilePath(path: string): void {
        this.filePath = path;
    }

    public writeFile(data: any): void {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }

    public readFile(): any {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }

    public registerInJSON(classInstance: Student | Teacher | Mission) {
        let classInstances: (Student | Teacher | Mission)[] = [];

        try {
            classInstances = this.readFile();
        }
        catch(err) {
            if(err) {
                this.writeFile(classInstances);
            }
        }
        classInstances.push(classInstance);
        return this.writeFile(classInstances);
    }
}
