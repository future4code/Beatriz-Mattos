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

desafioJogo();

function desafioJogo() {
   if (confirm("Quer iniciar uma nova rodada?")) {
      
      for (let i=0; i<2; i++) {
         const cartaUsuario = comprarCarta();
         const cartaComputador = comprarCarta();

         somaUsuario += cartaUsuario.valor;
         somaComputador += cartaComputador.valor;
                  
         maoUsuario.push(cartaUsuario);
         maoComputador.push(cartaComputador);
      }

         alert("Suas cartas são " + maoUsuario[0].texto + " e " + maoUsuario[1].texto + ". A carta revelada do computador é " +maoComputador[0].texto+ ". Deseja comprar mais uma carta?");
         
         if (alert === "Ok"){
            const cartaUsuario = comprarCarta();
            const cartaComputador = comprarCarta();

            somaUsuario += cartaUsuario.valor;
            somaComputador += cartaComputador.valor;
                     
            maoUsuario.push(cartaUsuario);
            maoComputador.push(cartaComputador);

            alert("Suas cartas são " + maoUsuario[2].texto + " e " + maoUsuario[3].texto + ". As cartas do computador são " + maoComputador[2].texto+ " e " + maoComputador[3] + ". A pontuação do computador é " + somaComputador);
         }

   } else {
      console.log("O jogo acabou.")
   }
}   



    // while (pontosUsuario <= 21 || pontosComputador <= 21) {
         //    cartasUsuario.push(carta.texto);
         //    pontosUsuario += carta.valor;
         //    cartasComputador.push(carta.texto);
         //    pontosComputador += carta.valor;
         // }