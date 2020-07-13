import { Account } from './Account';
import { Transaction } from './Transaction';
import { JSONFileManager } from "./JSONFileManager"
import * as moment from "moment";

export class Bank {
    private fileManager: JSONFileManager = new JSONFileManager;
    private accounts: Account[] = [];

    constructor() {
        const fileData: any = this.fileManager.readDatabase();
        this.accounts = fileData.map(
            (item: any) => {
                const transactions = item.transactions.map(
                    (transaction: any) => new Transaction(
                        transaction.value,
                        transaction.description,
                        transaction.date
                    )
                )
                return new Account(
                    item.name,
                    item.cpf,
                    item.birthDate,
                    item.currentBalance,
                    transactions
                )
            }
        )
    }

    createAccount(name: string, cpf: string, birthDate: string): void {
        const duplicateAccount: Account | undefined = this.accounts.find(
            (account) => { return account.getCpf() === cpf }
        )

        if (duplicateAccount) {
            throw new Error("CPF informado já possui uma conta cadastrada.");
        }

        const birthDateAsObject = moment(birthDate, "DD/MM/YYYY");
        const age = moment().diff(birthDateAsObject, "years");

        if (age < 18) {
            throw new Error("Usuário deve ser maior de idade.");
        }

        this.accounts.push(
            new Account(name, cpf, birthDate)
        )
        this.fileManager.writeToDatabase(this.accounts);
    }

    getCurrentBalance(name: string, cpf: string): number {
        const userAccount: Account | undefined = this.accounts.find(
            (account) => { return account.getCpf() === cpf && account.getName() === name }
        )

        if (userAccount) {
            return userAccount.getCurrentBalance()
        } else {
            throw new Error("Usuário não encontrado.")
        }
    }

    addBalance(name: string, cpf: string, value: number): void {
        const date: string = moment().format("DD/MM/YYYY")
        const description: string = "Depósito de dinheiro"

        this.accounts.forEach(
            (account) => {
                if (account.getCpf() === cpf && account.getName() === name) {
                    account.addTransaction(
                        new Transaction(
                            value,
                            description,
                            date
                        )
                    )
                }
            }
        )
        this.fileManager.writeToDatabase(this.accounts);
    }

    payBill(cpf: string, value: number, description: string, date: string = moment().format("DD/MM/YYYY")): void {
       value = Number(value);
       this.accounts.forEach(
            (account) => {
                const dateAsObject = moment(date, "DD/MM/YYYY")

                if (
                    account.getCpf() === cpf &&
                    value < account.getCurrentBalance() &&
                    dateAsObject.diff(moment(), "days") >= 0
                ) {

                    account.addTransaction(
                        new Transaction(
                            (value * -1),
                            description,
                            date
                        )
                    )

                    this.fileManager.writeToDatabase(this.accounts)
                    console.log("Sucesso!")

                } 
            }
        )
    }

    updateBalance() {
        this.accounts.forEach(
            (account) => {
                account.calculateBalance()
            }
        )

        this.fileManager.writeToDatabase(this.accounts);
    }

    makeTransfer(
        depositaryName: string,
        depositaryCpf: string,
        recipientName: string,
        recipientCpf: string,
        value: number
    ): void {
        const depositaryAccount: Account | undefined = this.accounts.find(
            (account) => { return account.getCpf() === depositaryCpf && account.getName() === depositaryName}
        )

        const recipientAccount: Account | undefined = this.accounts.find(
            (account) => { return account.getCpf() === recipientCpf && account.getName() === recipientName }
        )

        if(!depositaryAccount || !recipientAccount){
            throw new Error("Contas não encontradas")
        }

        if (depositaryAccount.getCurrentBalance() < value) {
            throw new Error("Saldo insuficiente")
        }

        this.accounts.forEach(
            account => {
                if(account.getCpf() === depositaryCpf && account.getName() === depositaryName) {
                    account.addTransaction(
                        new Transaction (
                            value * -1,
                            "Transferência entre contas"
                        )
                    )
                }

                if(account.getCpf() === recipientCpf && account.getName() === recipientName) {
                    account.addTransaction(
                        new Transaction (
                            value,
                            "Transferência entre contas"
                        )
                    )
                }
            }
        )
        this.fileManager.writeToDatabase(this.accounts)
    }
}