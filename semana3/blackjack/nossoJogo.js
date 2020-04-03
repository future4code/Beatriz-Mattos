/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 // obs.: entrega incompleta do projeto //

iniciarJogo();

let pontosUsuario = 0;
let pontosComputador = 0;
let cartasUsuario = [];
let cartasComputador = [];

function iniciarJogo() {
   console.log("Bem-vindo ao jogo de Blackjack!");
   if (confirm("Quer iniciar uma nova rodada?")) {
      while (usuario <= 21 || computador <= 21) {
         let carta = comprarCarta();
         cartasUsuario.push(carta.texto);
         pontosUsuario.push(carta.valor);
         let carta = comprarCarta();
         cartasComputador.push(carta.texto);
         pontosComputador.push(carta.valor);
      }
       {
         

      }
   } else {
      console.log("O jogo acabou.");
   }
}