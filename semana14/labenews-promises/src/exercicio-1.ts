import axios from 'axios';
const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';


//                  *Exercício 1*

//Vamos começar fazendo uma função nomeada simples que retorne todos os assinantes da nossa aplicação. Ela deve ser assíncrona, porque utiliza o async para fazer a comunicação com o banco de dados. Além disso, por ora, inidique que ela vai retornar um array de "qualquer coisa".
//a. Qual endpoint você deve utilizar para isso?
//Devo utilizar o endpoint GET - /subscribers/all

//b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
//Utilizando uma Promise tipada como 'any'.

//c. Implemente uma função nomeada que faça o que foi pedido.
async function getSubscribers(): Promise<any> {
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