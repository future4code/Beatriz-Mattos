/* Exercício 1 */

class LinkedListNode {
    public value: any;

    //apontador p/ proximo nó da linked list. começa como nulo pois ainda não está conectado em nenhum lugar
    public next: LinkedListNode | null = null;    
};

//criando nós da linked list
const firstNode = new LinkedListNode();
const secondNode = new LinkedListNode();

//atribuindo valores para os nós
firstNode.value = 5;
secondNode.value = 13;

//fazendo um nó apontar para o outro
firstNode.next = secondNode;