import { Transaction } from './Transaction';

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
      public getBalance(): number {
      //Aqui deve ser inserida a lógica de pegar saldo do usuário
      }
  
      public addBalance(value: number): void {
      //Aqui deve ser inserida a lógica de adicionar saldo 
        console.log('Saldo atualizado com sucesso')
      }
  
  }