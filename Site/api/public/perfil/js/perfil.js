var signos = [];
var albuns = [];
var musicas = [];

function obterDadosPerfil() {
    fetch('/signos/buscar')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function (resposta) {
            var signoVetor = [];
            for (let i = 0; i < resposta.labels.length; i++) {
                signoVetor.push({
                    nome: resposta.labels[i],
                    id: resposta.data[i]
                });
            }
            signos = signoVetor;
            plotarSignos(signos);
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = "Não foi possível carregar os avatares. Tente novamente mais tarde.";
        });

    fetch('/albuns/buscar')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function (resposta) {
            var albumVetor = [];
            for (let i = 0; i < resposta.labels.length; i++) {
                albumVetor.push({
                    nome: resposta.labels[i],
                    id: resposta.data[i]
                });
            }
            albuns = albumVetor;
            plotarAlbuns(albuns);
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = "Não foi possível carregar os álbuns. Tente novamente mais tarde.";
        });

    fetch('/musicas/buscar')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function (resposta) {
            for (let i = 0; i < resposta.labels.length; i++) {
                musicas.push({
                    nome: resposta.labels[i],
                    id: resposta.data[i]
                });
            }
            filtrarMusicas();
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = "Não foi possível carregar as músicas. Tente novamente mais tarde.";
        });
}

function carregarPerfil() {
    document.querySelectorAll('.btn-areas div').forEach(div => {
        div.classList.remove('ativo');
    });

    document.querySelectorAll('.btn-areas div')[3].classList.add('ativo');
    
    conteudo.innerHTML =
        `
    <div class="profile-container">
        <h1>Seu Perfil</h1>

    <div class="profile-header">
        <div class="imagem-perfil" id="avatar-imagem-perfil">
            <span class="avatar-placeholder">👤</span>
        </div>
        <div>
            <h2 id="b_usuario1"></h2>
            <span>Sempre no lugar certo, na hora certa</span>
        </div>
    </div>

    <div class="profile-info">
        <div class="info-item">
            <div class="info-label">Seu Signo</div>
            <select id="slc_signo" class="info-input"></select>
        </div>

        <div class="info-item">
            <div class="info-label">Álbum Favorito</div>
            <select id="slc_album" class="info-input"></select>
        </div>

        <div class="info-item">
            <div class="info-label">Música Favorita</div>
            <input type="text" id="musica_favorita" class="info-input" placeholder="Digite sua música favorita da Taylor Swift" oninput="filtrarMusicas()" autocomplete="off">
            <ul id="sugestoes_musicas" class="dropdown-lista oculto"></ul>
        </div>

        <div class="info-item">
            <div class="info-label">Era Favorita</div>
            <div class="era-favorita" id="era_favorita"></div>
        </div>

        <div id="cardErro" style="display: none; color: red; margin: 10px 0;">
            <span id="mensagem_erro"></span>
        </div>

            <button class="btn-save" onclick="salvarPerfil()">Salvar Perfil</button>
        </div>
    </div>
    `
    nomeUsuario()
    avatarSelecionado()
    obterDadosPerfil()
}

function nomeUsuario() {
    var b_usuario1 = document.getElementById("b_usuario1")
    b_usuario1.innerHTML = `${sessionStorage.NOME_USUARIO} ${sessionStorage.SOBRENOME_USUARIO}`
}

function avatarSelecionado() {
    const avatarSelecionado = sessionStorage.AVATAR_USUARIO;
    const avatarPerfil = document.getElementById("avatar-imagem-perfil");
    let imagem = "";

    if (avatarSelecionado == 10) {
        imagem = "aaron.png";
    } else if (avatarSelecionado == 5) {
        imagem = "andrea.png";
    } else if (avatarSelecionado == 7) {
        imagem = "austin.png";
    } else if (avatarSelecionado == 13) {
        imagem = "becky.png";
    } else if (avatarSelecionado == 3) {
        imagem = "benjamin.png";
    } else if (avatarSelecionado == 12) {
        imagem = "cobra.png";
    } else if (avatarSelecionado == 11) {
        imagem = "corcunda.png";
    } else if (avatarSelecionado == 9) {
        imagem = "jack.png";
    } else if (avatarSelecionado == 1) {
        imagem = "meredith.png";
    } else if (avatarSelecionado == 2) {
        imagem = "olivia.png";
    } else if (avatarSelecionado == 6) {
        imagem = "scott.png";
    } else if (avatarSelecionado == 8) {
        imagem = "selena.png";
    } else if (avatarSelecionado == 4) {
        imagem = "travis.png";
    }

    if (imagem !== "") {
        avatarPerfil.style.backgroundImage = `url('../imagens/avatares/${imagem}')`;
        avatarPerfil.innerHTML = '';
    } else {
        avatarPerfil.style.backgroundImage = '';
        avatarPerfil.innerHTML = '<span class="avatar-placeholder">👤</span>';
    }
}

function plotarSignos(signos) {
    var optionsSignos = '<option value="">Selecione um signo</option>';
    for (var i = 0; i < signos.length; i++) {
        optionsSignos += `<option value="${signos[i].id}">${signos[i].nome}</option>`;
    }
    document.getElementById("slc_signo").innerHTML = optionsSignos;
}

function plotarAlbuns(albuns) {
    var optionsAlbuns = '<option value="">Selecione um álbum</option>';
    for (var i = 0; i < albuns.length; i++) {
        optionsAlbuns += `<option value="${albuns[i].id}">${albuns[i].nome}</option>`;
    }
    document.getElementById("slc_album").innerHTML = optionsAlbuns;
}

function filtrarMusicas() {
    const input = document.getElementById("musica_favorita");
    const lista = document.getElementById("sugestoes_musicas");
    const filtro = input.value.toLowerCase();

    lista.innerHTML = "";

    const filtradas = musicas.filter(m => m.nome.toLowerCase().includes(filtro));

    if (filtro.length === 0 || filtradas.length === 0) {
        lista.classList.add("oculto");
        return;
    }

    filtradas.slice(0, 10).forEach(musica => {
        const li = document.createElement("li");
        li.textContent = musica.nome;
        li.onclick = () => {
            input.value = musica.nome;
            lista.classList.add("oculto");
        };
        lista.appendChild(li);
    });

    lista.classList.remove("oculto");
}
document.addEventListener("click", (e) => {
    if (!document.getElementById("musica_favorita").contains(e.target) &&
        !document.getElementById("sugestoes_musicas").contains(e.target)) {
        document.getElementById("sugestoes_musicas").classList.add("oculto");
    }
});