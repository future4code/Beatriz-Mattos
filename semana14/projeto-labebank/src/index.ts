import * as fs from 'fs';
//import { Account } from './types'

const createAccount = (name: string, birthDate: string, cpf: string) => {
    const usersFilePath = "/Users/Elza Penha/Desktop/Beatriz-Mattos/semana14/projeto-labebank/contas.json";
    const usersFileData: Buffer = fs.readFileSync(usersFilePath);
    const usersString: string = usersFileData.toString();
    console.log(usersString)

}