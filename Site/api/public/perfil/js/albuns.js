function obterDadosPerfil(){

}

function carregarAlbuns() {
    document.querySelectorAll('.btn-areas div').forEach(div => {
        div.classList.remove('ativo');
    });

    document.querySelectorAll('.btn-areas div')[2].classList.add('ativo');
    conteudo.innerHTML =
        `
    <div class="container-album">
        <h2>🎵 Criar Novo Álbum</h2>
        <h3>Não limite sua criatividade</h3>
        <div class="campos-album">
            <div class="campo-album">
                
            </div>
        </div> 
    </div>  
    `
}