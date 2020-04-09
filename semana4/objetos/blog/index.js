const arrayPosts = [];
//global

// const objetoPost = {
//     titulo: document.getElementById("titulo-post").value,
//     autor: document.getElementById("autor-post").value,
//     conteudo: document.getElementById("conteudo-post").value
// }

// function onChangeCapturarValores(ev) {
//     objetoPost.titulo = document.getElementById("titulo-post").value;
//     objetoPost.autor = document.getElementById("autor-post").value;
//     objetoPost.conteudo = document.getElementById("conteudo-post").value;
// }

function criarPost(ev) {
    const objetoPost = {
        titulo: document.getElementById("titulo-post").value,
        autor: document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value
    }

    objetoPost.titulo = document.getElementById("titulo-post").value;
    objetoPost.autor = document.getElementById("autor-post").value;
    objetoPost.conteudo = document.getElementById("conteudo-post").value;

    arrayPosts.push(objetoPost);
    console.log(arrayPosts);    
    limparCampos();

    const conteudoBlog = document.getElementById("conteudo-blog");
    
    conteudoBlog.innerHTML += "<h3>" + objetoPost.titulo + "</h3>";
    conteudoBlog.innerHTML += "<em>" + objetoPost.autor + "</em>";
    conteudoBlog.innerHTML += "<p>" + objetoPost.conteudo + "</p>"; 
}


function limparCampos() {
    document.getElementById("titulo-post").value = '';
    document.getElementById("autor-post").value = '';
    document.getElementById("conteudo-post").value = '';
}