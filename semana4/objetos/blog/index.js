const objetoPost = {
    titulo: document.getElementById("titulo-post").value,
    autor: document.getElementById("autor-post").value,
    conteudo: document.getElementById("conteudo-post").value
}

const arrayPosts = [];


function onChangeCapturarValores(ev) {
    objetoPost.titulo = document.getElementById("titulo-post").value;
    objetoPost.autor = document.getElementById("autor-post").value;
    objetoPost.conteudo = document.getElementById("conteudo-post").value;
}

function criarPost(ev) {

    limparCampos();

    // const objetoPermanente = {
    //     titulo: "",
    //     autor: "",
    //     conteudo: ""
    // }

    // objetoPermanente.titulo = objetoPost.titulo;
    // objetoPermanente.autor = objetoPost.autor;
    // objetoPermanente.conteudo = objetoPost.conteudo;

    // arrayPosts.push(objetoPermanente);

    arrayPosts.push(objetoPost);

    for (let i = 0; i < arrayPosts.length; i++) {
        const conteudoBlog = document.getElementById("conteudo-blog");
        conteudoBlog.innerHTML += "<h3>" + arrayPosts[i].titulo + "</h3>";

        conteudoBlog.innerHTML += "<em>" + arrayPosts[i].autor + "</em>";

        conteudoBlog.innerHTML += "<p>" + arrayPosts[i].conteudo + "</p>";
    }
    
}

function limparCampos() {
    document.getElementById("titulo-post").value = '';
    document.getElementById("autor-post").value = '';
    document.getElementById("conteudo-post").value = '';
}