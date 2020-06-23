//                  *Exercício 1*

//a) Como fazemos para acessar os parâmetros passados na linha de comando para o node?
//resposta: Acessamos argumentos passados aos nossos scripts através do process.argv;

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."

function retornaDados(nome: string, idade: number): string {
    return nome + idade
}

const nome: string = process.argv[2];
const idade: number = Number(process.argv[3]);

//const mensagem: string = `Olá, ${nome}! Você tem ${idade} anos.`

//console.log(mensagem)

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const mensagem2: string = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos, você terá ${idade + 7}.`

console.log(mensagem2)