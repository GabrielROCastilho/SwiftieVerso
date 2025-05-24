function obterDadosPerfil(){

}

function carregarQuizzes() {
    document.querySelectorAll('.btn-areas div').forEach(div => {
        div.classList.remove('ativo');
    });

    document.querySelectorAll('.btn-areas div')[1].classList.add('ativo');
    conteudo.innerHTML = `Oii`
}