"use strict";
function retornaDados(nome, idade) {
    return nome + idade;
}
const nome = process.argv[2];
const idade = Number(process.argv[3]);
const mensagem2 = `Olá ${nome}! Você tem ${idade} anos. Em sete anos, você terá ${idade + 7}.`;
console.log(mensagem2);
//# sourceMappingURL=exercicio-1.js.map