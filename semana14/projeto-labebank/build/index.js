"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
const bank = new Bank_1.Bank();
const action = process.argv[2];
switch (action) {
    case 'createAccount':
        bank.createAccount(process.argv[3], process.argv[4], process.argv[5]);
        console.log("Conta criada com sucesso!");
        break;
    case 'getCurrentBalance':
        console.log(bank.getCurrentBalance(process.argv[3], process.argv[4]));
        break;
    case 'addBalance':
        bank.addBalance(process.argv[3], process.argv[4], Number(process.argv[5]));
        console.log("Sucesso!");
        break;
    case 'payBill':
        bank.payBill(process.argv[3], Number(process.argv[4]), process.argv[5], process.argv[6]);
        break;
    case 'updateBalance':
        bank.updateBalance();
        break;
    case 'makeTransfer':
        bank.makeTransfer(process.argv[3], process.argv[4], process.argv[5], process.argv[6], Number(process.argv[7]));
        break;
    default:
        console.log("Operação inválida.");
        break;
}
