import * as fs from 'fs';
//                  *Exercício 3*

//Crie uma aplicação Node que receba uma string representando o nome do arquivo da lista de tarefas e uma string representando uma nova tarefa, em seguida o programa deve adicionar a nova tarefa em um arquivo que tenha o nome da lista de tarefas. Para isso, crie um arquivo chamado tarefas.txt

const arquivoTarefas: string = 'tarefas.txt';
const dadoRecebido: string = process.argv[2];

try {
    fs.appendFileSync('tarefas.txt', 'e estudar node.js');
    console.log('Tarefa adicionada com sucesso!')
}
catch {
    console.log('Não foi possível enviar sua tarefa para o arquivo.')
}