import * as fs from 'fs';
import * as moment from 'moment';

                            //Exercícios\\
//1) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
//resposta: No corpo da classe contém uma função chamada constructor, que recebe como parâmetros os atributos dessa classe, referenciados pela keyword 'this'.

//2) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf, dataDeNascimento ou idade, etc que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

class UserAccount {
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