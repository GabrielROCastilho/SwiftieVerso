// sessão
function validarSessao() {
    // Recupera os dados do usuário que foram salvos no sessionStorage no momento do login.
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    // Encontra o elemento HTML com id="b_usuario", que será usado para exibir o nome do usuário na página.
    var b_usuario = document.getElementById("b_usuario");

    // Verifica se o usuário está com a sessão ativa (ou seja, os dados existem).
    if (email != null && nome != null) {
        // Exibe o nome do usuário na interface.
        b_usuario.innerHTML = nome;
    } else {
        // Se não houver dados, redireciona o usuário para a página de login.
        window.location = "../login.html";
    }
}

function limparSessao() {
    // Remove todas as informações salvas na sessão do navegador (como email e nome).
    sessionStorage.clear();
    //Redireciona para a página de login.
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

// Esconde a div_aguardar após o carregamento terminar.
function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

