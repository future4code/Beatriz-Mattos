function criarTarefa() {
    const meuInput = document.getElementById("meu-input");
    const diaSemana = document.getElementById("dia-semana");

    if (meuInput.value === "") {
        alert("Ops, tarefa vazia :(");
    } else {
        switch (diaSemana.value) {
                case "domingo":
                    document.getElementById("tarefa-domingo").innerHTML += "<li>" + meuInput.value + "</li>";
                    break;

                case "segunda":
                    document.getElementById("tarefa-segunda").innerHTML += "<li>" + meuInput.value + "</li>";
                    break;

                case "terca":
                    document.getElementById("tarefa-terca").innerHTML += "<li>" + meuInput.value + "</li>";
                    break;
                
                case "quarta":
                    document.getElementById("tarefa-quarta").innerHTML += "<li>" + meuInput.value + "</li>";
                    break;
                
                case "quinta":
                    document.getElementById("tarefa-quinta").innerHTML += "<li>" + meuInput.value + "</li>";
                    break;
                
                case "sexta":
                    document.getElementById("tarefa-sexta").innerHTML += "<li>" + meuInput.value + "</li>";
                    break;
                
                case "sabado":
                    document.getElementById("tarefa-sabado").innerHTML += "<li>" + meuInput.value + "</li>";
                    break;

                default:
                    console.log("")
        }
    }

}
