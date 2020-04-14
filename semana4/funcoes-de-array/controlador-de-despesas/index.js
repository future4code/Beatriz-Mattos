const arrayDespesa = [];
let somaDespesa = 0;

function cadastrarDespesa(ev) {
    
    const objetoDespesa = {
        valor: document.getElementById("valor-despesa").value,
        tipo: document.getElementById("select-controlador-despesas").value,
        descricao: document.getElementById("descricao-despesa").value, 
    }

    if (objetoDespesa.valor === "" || objetoDespesa.tipo === "" || objetoDespesa.descricao === "") {
        alert("Ops, esqueceu um campo em branco!");
    
    }
    
    let somaDespesa = somaExtrato(Number(objetoDespesa.valor));
    const elementoExtrato = document.getElementById("extrato-despesas");
    elementoExtrato.innerHTML = "<h2>Extrato</h2> \n <h3>Valor total:</h3> " + somaDespesa;

    const areaMostraDespesa = document.getElementById("area-despesas-detalhadas");
    areaMostraDespesa.innerHTML += "<strong>Despesa:</strong> <p>Valor: " + objetoDespesa.valor + "</p>" + "<p>Tipo: " + objetoDespesa.tipo + "</p>" + "<p>Descrição: " + objetoDespesa.descricao + "</p>";
    
    arrayDespesa.push(objetoDespesa);
}

function limparFiltros() {
    document.getElementById("valor-despesa").value = "";
    document.getElementById("select-contolador-despesas").value = "";
    document.getElementById("descricao-despesa").value = "";
}

function filtrarDespesas() {
    const areaMostraDespesa = document.getElementById("area-despesas-detalhadas");
    areaMostraDespesa.innerHTML = "";
    
    const tipoDespesa = document.getElementById("select-despesas-detalhadas").value;
    const valorMinimo = Number(document.getElementById("valor-minimo").value);
    const valorMaximo = Number(document.getElementById("valor-maximo").value);
    
    const novoArrayFiltrado = arrayDespesa.filter(objeto => objeto.tipo === tipoDespesa && objeto.valor >= valorMinimo && objeto.valor <= valorMaximo);
    
    for (let i = 0; i < novoArrayFiltrado.length; i++) {
        areaMostraDespesa.innerHTML += "<strong>Despesa:</strong> <p>Valor: " + novoArrayFiltrado[i].valor + "</p>" + "<p>Tipo: " + novoArrayFiltrado[i].tipo + "</p>" + "<p>Descrição: " + novoArrayFiltrado[i].descricao + "</p>";
    }
}

function somaExtrato(valor) {
    somaDespesa += valor;

    return somaDespesa; 
}