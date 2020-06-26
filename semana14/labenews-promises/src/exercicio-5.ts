import axios from 'axios';
const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

//                  *Exercício 5* (a concluir)
//Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa mensagem como notificação para todos os usuários. A princípio, não utilize o Promise.all
//a. O que aconteceria se fizéssemos a requisição dentro de um forEach? É recomendável utilizá-lo nesse caso?
//As funções de array não são muito compatíveis com funções assíncronas, por isso quando estivermos iterando um array, o ideal não é usar forEach e sim um 'for of', ou 'for let i = 0'...

//b. Implemente a função solicitada
type User = {
    id: string,
    name: string,
    email: string
}

const sendNotifications = async (users: User[], message: string): Promise<void> => {
    const promiseArray: Promise<any>[] = [];
    for (const user of users) {
        await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message: message,
        });
    }

    console.log("Todas as notificações foram enviadas.");
};

const getSubscribers = async (): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data
}

const test = async (): Promise<void> => {
    try {
        const allSubscribers: User[] = await getSubscribers();
        console.log(allSubscribers)
        const notifications = await sendNotifications(allSubscribers, 'Veja essa notícia: Yog-Sothoth se aproxima da Terra');
        console.log(notifications);
    } catch (err) {
        console.log(err)
    }
}

test();