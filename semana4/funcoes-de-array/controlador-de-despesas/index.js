const arrayDespesa = [];
const arrayFiltro = [];


const objetoDespesa = {
    valor: document.getElementById("valor-despesa").value,
    tipo: document.getElementById("select-controlador-despesas").value,
    descricao: document.getElementById("descricao-despesa").value;
}


if (valor === ""){
    alert("Esqueceu de digitar o valor!")
} else if (tipo === "") {
    alert("Esqueceu de selecionar o tipo!")
} else if (descricao === "") {
    alert("Esqueceu de digitar a descrição!")
}



function cadastrarDespesa(){
    const valorDespesa = document.getElementById("valor-despesa").value;
    const tipoDespesa = document.getElementById("select-controlador-despesas").value;
    const descricaoDespesa = document.getElementById("descricao-despesa").value;
    const areaMostraDespesa = document.getElementById("area-despesas-detalhadas").value;
    areaMostraDespesa.innerHTML += "<p>Despesa:</p> <p>Valor: " + valorDespesa + "</p>" + "<p>Tipo: " + tipoDespesa + "</p>" + "<p>Descrição: " + descricaoDespesa + "</p>"

    arrayDespesa.push(objetoDespesa);

    objetoDespesa.valor = document.getElementById("valor-despesa").value;
    objetoDespesa.tipo = document.getElementById("select-contolador-despesas").value;
    objetoDespesa.descricao = document.getElementById("descricao-despesa").value;
    return filtrarDespesas();
}


function filtrarDespesas() {

}


function limparCampos() {
 
}
