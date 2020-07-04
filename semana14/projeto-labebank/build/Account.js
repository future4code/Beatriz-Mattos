"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const moment = require("moment");
class Account {
    constructor(name, cpf, birthDate, currentBalance = 0, transactions = []) {
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.currentBalance = currentBalance;
        this.transactions = transactions;
        this.getCpf = () => this.cpf;
        this.getName = () => this.name;
        this.getBirthDate = () => this.birthDate;
        this.getCurrentBalance = () => this.currentBalance;
        this.getTransactions = () => this.transactions;
    }
    addTransaction(transaction) {
        this.transactions.push(transaction);
    }
    calculateBalance() {
        this.currentBalance = 0;
        this.transactions.forEach((transaction) => {
            const today = moment();
            const dateAsObject = moment(transaction.getDate(), "DD/MM/YYYY");
            const difference = today.diff(dateAsObject, "days");
            if (difference >= 0) {
                this.currentBalance += transaction.getValue();
            }
        });
    }
}
exports.Account = Account;
