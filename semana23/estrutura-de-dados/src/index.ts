/* Exercício 1 */

//6. criando a linked list em si
class LinkedList{
    //7. indicar qual o começo da lista
    public start: LinkedListNode | null = null;
    
    /* 10. Agora, implemente o método que adiciona um elemento ao final da lista */
    public addToTail(value: any): void {
        /* 10.1 - criando nó */
        const newNode = new LinkedListNode();
        /* 10.2 - atribuindo valor */
        newNode.value = value;

        /* Se o node vier com valor nulo, cria-se um novo nó(??) */
        if (this.start === null) {
            this.start = newNode
            return
        }
        
        /* pegando a propriedade start pra iniciar o nó */
        let node = this.start;
        while(node.next !== null){
            node = node.next
        }
        
        node.next = newNode
    }
};

//1. classe que indica cada nó da nossa linked list
class LinkedListNode {
    public value: any;

    //2. apontador p/ proximo nó da linked list. começa como nulo pois ainda não está conectado em nenhum lugar
    public next: LinkedListNode | null = null;    
};

//3. criando nós da linked list
// const firstNode = new LinkedListNode();
// const secondNode = new LinkedListNode();

//4. atribuindo valores para os nós
// firstNode.value = 5;
// secondNode.value = 13;

//5. fazendo um nó apontar para o outro
// firstNode.next = secondNode;

//8. criando uma lista-ligada
//const list = new LinkedList();

//9. indicando o elemento inicial e pronto!, criamos nossa lista ligada:
//list.start = firstNode;


/* ... e um método que imprima todos elementos presentes nela. */
function search(list: LinkedList, value: any): LinkedListNode | null {

    /* nós da linked list */
    let node: LinkedListNode | null = list.start

    /* o node precisa ser diferente de nulo porque eu busco um valor; o valor dele precisa ser igual ao que to bucando, ou seja, enquanto o node.value for diferente do value, quero que ele continue iterando sobre a lista */
    while (node !== null && node.value !== value) {

        /* enquanto não achar o que to procurando, passo para o próximo nó */
        node = node.next
    }

    /* se achei, ele retorna o elemento da lista */
    return node
};