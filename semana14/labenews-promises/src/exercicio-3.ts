import axios from 'axios';
const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

//                  *Exercício 3*

//Agora, vamos melhorar um pouco a nossa função, criando uma tipagem que represente os assinantes da nossa aplicação. No nosso caso, eles possuem um id, name e email.
//a. Se apenas trocarmos o retorno da função para: Promise<User[]> , teremos algum erro de tipagem?
//

//b. Na aula, comentamos que sempre fazemos um mapeamento do resultado de uma Promise, caso seja inidicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso.
//O 'data' que volta do axios tem tipo 'any', logo mapear o resultado recebido serve para garantir que devolveremos o que a função indica. 

//c. Reimplemente a função, corretamente.
type User = {
    id: string,
    name: string,
    email: string
}

const getSubscribers = async (): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data.map((res: any) => {
        return ({
            id: res.id,
            name: res.name,
            email: res.email,
        });
    });
};

const test = async (): Promise<void> => {
    try {
        const allSubscribers: any[] = await getSubscribers();
        console.log(allSubscribers)
    } catch (err) {
        console.log(err)
    }
}

test();