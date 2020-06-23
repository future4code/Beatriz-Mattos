//                  *Resoluções e respostas do exercício 4*

//Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.
type redeSocial = {
    autor: string,
    texto: string
}

//a) Crie um array com 5 objetos deste tipo de posts;
const array: redeSocial[] = [
    { autor: 'Bia', texto: 'Estou aprendendo TypeScript!' },
    { autor: 'Gato gordo', texto: 'Tenho fome...' },
    { autor: 'Astrid', texto: 'Boa noite a todos' },
    { autor: 'Velho enfezado', texto: 'Quero café... éééé!!!!!' },
    { autor: 'Cobra', texto: 'Sssssss!' }
]

//b) Crie uma função que receba dois parâmetros: um array de posts e um autor. Ela deve devolver todos os posts deste autor;
function postFiltrado(arr: redeSocial[], autor: string): redeSocial[] {
    const filtro = arr.filter(post => (post.autor === autor))
    return filtro
}

console.log(postFiltrado(array, 'Bia'))