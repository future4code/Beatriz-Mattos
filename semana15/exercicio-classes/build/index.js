"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value) {
        this.balance++;
        console.log('Saldo atualizado com sucesso');
    }
    getName() {
        return this.name;
    }
}
const createAccount = new UserAccount("458.653.268-80", "Beatriz", 23);
console.log(createAccount.getName());
//# sourceMappingURL=index.js.map