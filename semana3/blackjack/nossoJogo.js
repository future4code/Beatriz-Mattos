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
let carta;

function iniciarJogo() {
   console.log("Bem-vindo ao jogo de Blackjack!");

   if (confirm("Quer iniciar uma nova rodada?")){
      console.log("Vamos sortear uma carta!");

      for (let i=0; i<2; i++);
      let carta = comprarCarta();
      console.log("Usuário cartas: "+cartasUsuario.valor+", pontuação: "+pontosUsuario.carta);
      console.log("Computador cartas: "+cartasComputador.valor+", pontuação: "+pontosComputador.carta);

         while (pontosUsuario <= 21 || pontosComputador <= 21) {
            cartasUsuario.push(carta.texto);
            pontosUsuario.push(carta.valor);
            cartasComputador.push(carta.texto);
            pontosComputador.push(carta.valor);
         }
            if (pontosUsuario > pontosComputador){
               console.log("O usuário venceu!");
            }
               else if (pontosComputador > pontosUsuario) {
                  console.log("O computador venceu!");
               }
                  else if (pontosUsuario === pontosComputador){
                     console.log("Temos um empate!");
                  }

   } else {
      console.log("O jogo acabou.");
   }

} 