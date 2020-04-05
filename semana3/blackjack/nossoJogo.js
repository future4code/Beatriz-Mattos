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

let maoUsuario = [];
let maoComputador = [];
let somaUsuario = 0;
let somaComputador = 0;

iniciarJogo();

function iniciarJogo() {
   console.log("Bem-vindo ao jogo de Blackjack!");

   if (confirm("Quer iniciar uma nova rodada?")) {
      console.log("Vamos sortear uma carta!");

      for (let i=0; i<2; i++) {
         const cartaUsuario = comprarCarta();
         const cartaComputador = comprarCarta();

         somaUsuario += cartaUsuario.valor;
         somaComputador += cartaComputador.valor;
                   
         maoUsuario.push(cartaUsuario);
         maoComputador.push(cartaComputador);
      }

      console.log("Usuário cartas: " + maoUsuario[0].texto + " e " + maoUsuario[1].texto + ", pontuação: " + somaUsuario);
      console.log("Computador cartas: " + maoComputador[0].texto + " e " + maoComputador[1].texto + ", pontuação: " + somaComputador);

      if (somaUsuario > somaComputador) {
         console.log("O usuário venceu!");
      } else if (somaComputador > somaUsuario) {
         console.log("O computador venceu!");
      } else if (somaUsuario === somaComputador) {
         console.log("Temos um empate!");
      }

   } else {
      console.log("O jogo acabou.");
   }
}