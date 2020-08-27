/* Exercício 1 */

//1. classe que indica cada nó da nossa linked list
class LinkedListNode {
    public value: any;

    //2. apontador p/ proximo nó da linked list. começa como nulo pois ainda não está conectado em nenhum lugar
    public next: LinkedListNode | null = null;    
};

//3. criando nós da linked list
const firstNode = new LinkedListNode();
const secondNode = new LinkedListNode();

//4. atribuindo valores para os nós
firstNode.value = 5;
secondNode.value = 13;

//5. fazendo um nó apontar para o outro
firstNode.next = secondNode;

//6. criando a linked list em si
class LinkedList{
    //7. indicar qual o começo da lista
    public start: LinkedListNode | null = null;

    /* 10. Agora, implemente o método que adiciona um elemento ao final da lista */
    public addToTail(value: any): void {
        /* 10.1 - criando nó */
        const newNode = new LinkedListNode()
        /* 10.2 - atribuindo valor */
        newNode.value = value;

        /* 10.3 - pegando a propriedade start pra iniciar o nó*/
        let node = this.start
        while(node.next !== null){
            node = node.next
        }

        node.next = newNode
    }
};

//8. criando uma lista-ligada
const list = new LinkedList();

//9. indicando o elemento inicial e pronto!, criamos nossa lista ligada:
list.start = firstNode;

console.log(list);




/* e um método que imprima todos elementos presentes nela. */
