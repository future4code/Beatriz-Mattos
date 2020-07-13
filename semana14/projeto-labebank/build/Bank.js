"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const Account_1 = require("./Account");
const Transaction_1 = require("./Transaction");
const JSONFileManager_1 = require("./JSONFileManager");
const moment = require("moment");
class Bank {
    constructor() {
        this.fileManager = new JSONFileManager_1.JSONFileManager;
        this.accounts = [];
        const fileData = this.fileManager.readDatabase();
        this.accounts = fileData.map((item) => {
            const transactions = item.transactions.map((transaction) => new Transaction_1.Transaction(transaction.value, transaction.description, transaction.date));
            return new Account_1.Account(item.name, item.cpf, item.birthDate, item.currentBalance, transactions);
        });
    }
    createAccount(name, cpf, birthDate) {
        const duplicateAccount = this.accounts.find((account) => { return account.getCpf() === cpf; });
        if (duplicateAccount) {
            throw new Error("CPF informado já possui uma conta cadastrada.");
        }
        const birthDateAsObject = moment(birthDate, "DD/MM/YYYY");
        const age = moment().diff(birthDateAsObject, "years");
        if (age < 18) {
            throw new Error("Usuário deve ser maior de idade.");
        }
        this.accounts.push(new Account_1.Account(name, cpf, birthDate));
        this.fileManager.writeToDatabase(this.accounts);
    }
    getCurrentBalance(name, cpf) {
        const userAccount = this.accounts.find((account) => { return account.getCpf() === cpf && account.getName() === name; });
        if (userAccount) {
            return userAccount.getCurrentBalance();
        }
        else {
            throw new Error("Usuário não encontrado.");
        }
    }
    addBalance(name, cpf, value) {
        const date = moment().format("DD/MM/YYYY");
        const description = "Depósito de dinheiro";
        this.accounts.forEach((account) => {
            if (account.getCpf() === cpf && account.getName() === name) {
                account.addTransaction(new Transaction_1.Transaction(value, description, date));
            }
        });
        this.fileManager.writeToDatabase(this.accounts);
    }
    payBill(cpf, value, description, date = moment().format("DD/MM/YYYY")) {
        value = Number(value);
        this.accounts.forEach((account) => {
            const dateAsObject = moment(date, "DD/MM/YYYY");
            if (account.getCpf() === cpf &&
                value < account.getCurrentBalance() &&
                dateAsObject.diff(moment(), "days") >= 0) {
                account.addTransaction(new Transaction_1.Transaction((value * -1), description, date));
                this.fileManager.writeToDatabase(this.accounts);
                console.log("Sucesso!");
            }
        });
    }
    updateBalance() {
        this.accounts.forEach((account) => {
            account.calculateBalance();
        });
        this.fileManager.writeToDatabase(this.accounts);
    }
    makeTransfer(depositaryName, depositaryCpf, recipientName, recipientCpf, value) {
        const depositaryAccount = this.accounts.find((account) => { return account.getCpf() === depositaryCpf && account.getName() === depositaryName; });
        const recipientAccount = this.accounts.find((account) => { return account.getCpf() === recipientCpf && account.getName() === recipientName; });
        if (!depositaryAccount || !recipientAccount) {
            throw new Error("Contas não encontradas");
        }
        if (depositaryAccount.getCurrentBalance() < value) {
            throw new Error("Saldo insuficiente");
        }
        this.accounts.forEach(account => {
            if (account.getCpf() === depositaryCpf && account.getName() === depositaryName) {
                account.addTransaction(new Transaction_1.Transaction(value * -1, "Transferência entre contas"));
            }
            if (account.getCpf() === recipientCpf && account.getName() === recipientName) {
                account.addTransaction(new Transaction_1.Transaction(value, "Transferência entre contas"));
            }
        });
        this.fileManager.writeToDatabase(this.accounts);
    }
}
exports.Bank = Bank;
