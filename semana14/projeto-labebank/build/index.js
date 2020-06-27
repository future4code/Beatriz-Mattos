"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
const createAccount = (name, birthDateString, cpf) => {
    const birthDate = moment(birthDateString, "DD/MM/YYYY");
    const today = moment();
    const currentAge = today.diff(birthDate, "years");
    if (currentAge < 18) {
        console.log("Usuário deve ser maior de idade para ter uma conta.");
        return;
    }
    const usersFilePath = "/Users/Elza Penha/Desktop/Beatriz-Mattos/semana14/projeto-labebank/users.json";
    const usersFileData = fs.readFileSync(usersFilePath);
    const usersString = usersFileData.toString();
    const users = JSON.parse(usersString);
    const foundUser = users.find((user) => {
        return user.cpf === cpf;
    });
    if (foundUser !== undefined) {
        console.log("Já existe um usuário com esse cpf.");
        return;
    }
    users.push({
        name: name,
        birthDate: birthDateString,
        cpf: cpf,
        currentBalance: 0,
        extract: []
    });
    console.log(users);
    const usersStringified = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, usersStringified);
};
const name = process.argv[2];
const date = process.argv[3];
const cpf = process.argv[4];
createAccount(name, date, cpf);
