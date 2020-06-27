import * as fs from 'fs';
import * as moment from 'moment';
import { Account, ExtractItem } from './types';

const createAccount = (name: string, birthDateString: string, cpf: string) => {
    const birthDate = moment(birthDateString, "DD/MM/YYYY");
    const today = moment();
    const currentAge = today.diff(birthDate, "years");

    if(currentAge < 18) {
        console.log("Usuário deve ser maior de idade para ter uma conta.")
        return;
    }

    const usersFilePath = "/Users/Elza Penha/Desktop/Beatriz-Mattos/semana14/projeto-labebank/users.json";
    const usersFileData: Buffer = fs.readFileSync(usersFilePath);
    const usersString: string = usersFileData.toString();

    const users: Account[] = JSON.parse(usersString);

      const foundUser = users.find((user: Account) => {
        return user.cpf === cpf
    })

    if(foundUser !== undefined) {
        console.log("Já existe um usuário com esse cpf.")
        return;
    }

    users.push({
        name: name,
        birthDate: birthDateString,
        cpf: cpf,
        currentBalance: 0,
        extract: []
    });

    console.log(users)

    const usersStringified = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, usersStringified);
};

const name = process.argv[2];
const date = process.argv[3];
const cpf = process.argv[4]

createAccount(name, date, cpf);