import axios from 'axios';
const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

//                  *Exercício 2*
//Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando arrow function. 
//a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
//Na função nomeada assíncrona, o 'async' vem no início; na arrow function assíncrona o 'async' precisa ser atribuído à uma variável.

//b. Implemente a função solicitada, usando arrow function
const getSubscribers = async(): Promise<any> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    console.log(users.data)
}

const test = async () => {
    try {
        const subscribers = await getSubscribers();
    } catch (err) {
        console.log(err)
    }
}

test();