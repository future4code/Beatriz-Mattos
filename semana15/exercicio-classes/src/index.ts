import * as fs from 'fs';
import * as moment from 'moment';

                            //Exercícios\\
//1) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
//resposta: No corpo da classe contém uma função chamada constructor, que recebe como parâmetros os atributos dessa classe, referenciados pela keyword 'this', e a criação de novas instâncias é feita com a keyword 'new'.

//2) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf, dataDeNascimento ou idade, etc que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//resposta: Após criar a instância abaixo e rodar com o npm run start, a frase foi impressa uma única vez.

//3) Como conseguimos ter acesso às propriedades privadas de uma classe?
//resposta: acessando por dentro da classe, ou tornando todos os atributos privados e controlando o acesso por métodos públicos (getter p/ pegar o atributo e setter p/ definir).

//4) Com os métodos fornecidos pela classe, seria possível imprimir alguma das propriedades da classe no terminal? Se sim, realize a impressão.
//feito abaixo.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    //private transactions: Transaction[];
  
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
        return this.balance
      }
  
      public addBalance(value: number): void {
        this.balance ++
        console.log('Saldo atualizado com sucesso')
      }

    public getName(): string {
        return this.name
    }
  
  }

  const createAccount: UserAccount = new UserAccount("458.653.268-80", "Beatriz", 23)

  console.log(createAccount.getName());