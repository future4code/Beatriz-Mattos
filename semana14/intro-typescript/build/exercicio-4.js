const array = [
    { autor: 'Bia', texto: 'Estou aprendendo TypeScript!' },
    { autor: 'Gato gordo', texto: 'Tenho fome...' },
    { autor: 'Astrid', texto: 'Boa noite a todos' },
    { autor: 'Velho enfezado', texto: 'Quero café... éééé!!!!!' },
    { autor: 'Cobra', texto: 'Sssssss!' }
];
function postFiltrado(arr, autor) {
    const filtro = arr.filter(post => (post.autor === autor));
    return filtro;
}
console.log(postFiltrado(array, 'Bia'));
//# sourceMappingURL=exercicio-4.js.map