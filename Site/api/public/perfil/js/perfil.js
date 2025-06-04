var signos = [];
var albuns = [];
var musicas = [];
var eras = [];
var avatares = [];

function carregarPagina() {
    validarSessao()
    avatarSelecionado()
}

function obterDadosPerfil() {
    var idUsuarioVar = sessionStorage.ID_USUARIO
    fetch("/usuarios/buscarDados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idUsuarioServer: idUsuarioVar
        })
    })
        .then(function (resposta) {
            if (!resposta.ok) {
                console.warn('Resposta com erro. Status:', resposta.status);
                if (resposta.status === 403) {
                    console.log('oiii – usuário não encontrado ou inválido');
                }
                return;
            }

            resposta.json().then(json => {
                sessionStorage.MUSICA_FAVORITA_USUARIO = json.NomeMusica;
                sessionStorage.ALBUM_FAVORITO_USUARIO = json.NomeAlbum;
                sessionStorage.ERA_FAVORITA_USUARIO = json.NomeEra;
                sessionStorage.SIGNO_USUARIO = json.NomeSigno;

                carregarPerfil();
            });
        })
}

function buscarDadosPerfil() {
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
                            fetch('/eras/buscar')
                                .then(function (response) {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok ' + response.statusText);
                                    }
                                    return response.json();
                                })
                                .then(function (resposta) {
                                    var erasVetor = [];
                                    for (let i = 0; i < resposta.labels.length; i++) {
                                        erasVetor.push({
                                            nome: resposta.labels[i],
                                            id: resposta.data[i]
                                        });
                                    }
                                    eras = erasVetor;
                                    plotarEras(eras);
                                })
                                .catch(function (err) {
                                    console.error("Erro ao buscar os dados:", err);
                                    cardMensagem.style.display = "block";
                                    mensagem_erro.innerHTML = "Não foi possível carregar as eras. Tente novamente mais tarde.";
                                });
                        })
                        .catch(function (err) {
                            console.error("Erro ao buscar os dados:", err);
                            cardMensagem.style.display = "block";
                            mensagem_erro.innerHTML = "Não foi possível carregar as músicas. Tente novamente mais tarde.";
                        });
                })
                .catch(function (err) {
                    console.error("Erro ao buscar os dados:", err);
                    cardMensagem.style.display = "block";
                    mensagem_erro.innerHTML = "Não foi possível carregar os álbuns. Tente novamente mais tarde.";
                });
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
            cardMensagem.style.display = "block";
            mensagem_erro.innerHTML = "Não foi possível carregar os signos. Tente novamente mais tarde.";
        });
}

function validarSessao() {
    var b_usuario = document.getElementById("b_usuario")
    b_usuario.innerHTML = `${sessionStorage.NOME_USUARIO} ${sessionStorage.SOBRENOME_USUARIO}`
    avatarSelecionado()
}

function carregarPerfil() {
    var signo = sessionStorage.SIGNO_USUARIO
    var album = sessionStorage.ALBUM_FAVORITO_USUARIO
    var musica = sessionStorage.MUSICA_FAVORITA_USUARIO
    var era = sessionStorage.ERA_FAVORITA_USUARIO
    var nome = sessionStorage.NOME_USUARIO
    var sobrenome = sessionStorage.SOBRENOME_USUARIO

    if (signo != 'undefined' && album != 'undefined' && musica != 'undefined' && era != 'undefined') {
    conteudo.innerHTML = `
    <div class="profile-container">
        <h1>Seu Perfil</h1>

        <div class="profile-header">
            <a href="#" class="mudar_foto_perfil" onclick="mudarAvatarPerfil()">
                <div class="imagem-perfil" id="avatar-imagem-perfil">
                    <span class="avatar-placeholder">👤</span>
                </div>
            </a>
            <div>
                <h2>${nome} ${sobrenome}</h2>
                <span>Sempre no lugar certo, na hora certa</span>
            </div>
        </div>

    <div class="profile-info">
        <div class="info-item">
            <div class="info-label">Seu Signo</div>
            <h2 class="info-input">${signo}</h2>
        </div>

        <div class="info-item">
            <div class="info-label">Álbum Favorito</div>
            <h2 class="info-input">${album}</h2>
        </div>

        <div class="info-item">
            <div class="info-label">Música Favorita</div>
            <h2 class="info-input">${musica}</h2>
        </div>

        <div class="info-item">
            <div class="info-label">Era Favorita</div>
            <h2 class="info-input">${era}</h2>
        </div>
            <button class="btn-perfil" onclick="editarPerfil()">Editar Perfil</button>
        </div>
    </div>
        `
        avatarSelecionado()
    } else {
    conteudo.innerHTML =
        `
    <div class="profile-container">
        <h1>Seu Perfil</h1>

        <div class="profile-header">
            <a href="#" class="mudar_foto_perfil" onclick="mudarAvatarPerfil()">
                <div class="imagem-perfil" id="avatar-imagem-perfil">
                    <span class="avatar-placeholder">👤</span>
                </div>
            </a>
            <div>
                <h2>${nome} ${sobrenome}</h2>
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

            <div id="cardMensagem">
                <span id="mensagem_erro"></span>
                <span id="mensagem_certo"></span>
            </div>

                <button class="btn-perfil" onclick="salvarPerfil()">Salvar Perfil</button>
            </div>
    </div>
    `
        buscarDadosPerfil()
    }
    avatarSelecionado()
}

function avatarSelecionado() {
    const avatarSelecionado = sessionStorage.AVATAR_USUARIO;
    const avatarPerfilNavegacao = document.getElementById("avatar-imagem-navegacao");
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
        if (avatarPerfilNavegacao) {
            avatarPerfilNavegacao.style.backgroundImage = `url('../imagens/avatares/${imagem}')`;
            avatarPerfilNavegacao.innerHTML = '';
        }

        if (avatarPerfil) {
            avatarPerfil.style.backgroundImage = `url('../imagens/avatares/${imagem}')`;
            avatarPerfil.innerHTML = '';
        }
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
            input.value = musica.id;
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

function plotarEras(eras) {
    var optionsEras = '';
    var eraDiv = document.getElementById("era_favorita");
    for (var i = 0; i < eras.length; i++) {
        optionsEras += `
            <input type="radio" id="era-${eras[i].id}" name="era" class="era-option" value="${eras[i].id}">
            <label for="era-${eras[i].id}" class="era-label">${eras[i].nome}</label>
        `;
    }
    eraDiv.innerHTML = optionsEras;
}

function salvarPerfil() {
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    var signoVar = document.getElementById("slc_signo").value;
    var albumFavoritoVar = document.getElementById("slc_album").value;
    var musicaFavoritaVar = document.getElementById("musica_favorita").value;;
    var eraFavoritaInput = document.querySelector('input[name="era"]:checked');
    var eraFavoritaVar = eraFavoritaInput ? eraFavoritaInput.value : "";
    console.log(idUsuarioVar, signoVar, albumFavoritoVar,)

    if (signoVar == null || albumFavoritoVar == null || musicaFavoritaVar == null || eraFavoritaVar == null) {
        document.getElementById("cardMensagem").style.display = "block";
        document.getElementById("mensagem_erro").innerText = "Por favor, preencha todos os campos.";
        return;
    }

    fetch("/usuarios/atualizar", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuarioVar,
            signoServer: signoVar,
            albumFavoritoServer: albumFavoritoVar,
            musicaFavoritaServer: musicaFavoritaVar,
            eraFavoritaServer: eraFavoritaVar
        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {
                document.getElementById("cardMensagem").style.display = "block";
                document.getElementById("mensagem_certo").innerText = "Perfil atualizado com sucesso! Recarregue a página para que as alterações sejam salvas!";
                setTimeout(() => document.getElementById("cardMensagem").style.display = "none", 5000);
            } else {
                throw "Houve um erro ao tentar atualizar o perfil.";
            }
        })
        .catch(function (erro) {
            console.error("#ERRO:", erro);
            document.getElementById("cardMensagem").style.display = "block";
            document.getElementById("mensagem_erro").innerText = "Erro na atualização. Tente novamente.";
        });
}
