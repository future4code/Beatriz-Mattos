import axios from 'axios';
const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

//                  *Exercício 4*
//Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.
//a. Qual é o tipo dessa função? Por quê?
//A função é do tipo PUT, que é utilizada para quando queremos adicionar algo à API

//b. Implemente a função solicitada
async function createNews(title: string, content: string, date: number): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
        title,
        content,
        date
    });
}

const test = async (): Promise<void> => {
    try {
        await createNews("Yog-Sothoth se aproxima da Terra", "Y'AI'NG'NGAH! Abra a janela e ouça os primeiros sussurros.", 1593127559000);
        const returnAllNews = await axios.get(`${baseUrl}/news/all`)
        console.log(returnAllNews);
    } catch (err) {
        console.log(err)
    }
}

test();