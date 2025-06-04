function obterDadosGraficosGeral() {
    fetch('/graficos/signos')
        .then(function (response) {
            return response.json();
        })
        .then(function (resposta) {
            plotarGraficoSignos(resposta.labels, resposta.data);
            fetch('/graficos/albuns')
                .then(function (response) {
                    return response.json();
                })
                .then(function (resposta) {
                    plotarGraficoAlbuns(resposta.labels, resposta.data);
                    fetch('/graficos/avatares')
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (resposta) {
                            var nomesAvatares = [];
                            var qtdDeUsuarios = [];
                            var idsAvatares = [];

                            for (var i = 0; i < resposta.length; i++) {
                                nomesAvatares.push(resposta[i].NomeAvatar);
                                qtdDeUsuarios.push(resposta[i].QtdDeUsuarios);
                                idsAvatares.push(resposta[i].IdAvatar);
                            }

                            plotarKpiAvatares(nomesAvatares, qtdDeUsuarios, idsAvatares);
                            fetch('/graficos/eras')
                                .then(function (response) {
                                    return response.json();
                                })
                                .then(function (resposta) {
                                    plotarGraficoEras(resposta.labels, resposta.data);
                                })
                                .catch(function (err) {
                                    console.error("Erro ao buscar os dados:", err);
                                });
                        })
                        .catch(function (err) {
                            console.error("Erro ao buscar os dados:", err);
                        });
                })
                .catch(function (err) {
                    console.error("Erro ao buscar os dados:", err);
                });
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
        });
}

function obterDadosGraficosPessoal() {
    var idUsuarioVar = sessionStorage.ID_USUARIO
    var quizzes = []
    var pontuacoesUsuario = []
    var pontuacoesTotais = []
    var titulos = []

    fetch("/graficos/desempenhoquizzesporusuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idUsuarioServer: idUsuarioVar
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (resposta) {
            for (var i = 0; i < resposta.length; i++) {
                pontuacoesUsuario.push(Number(resposta[i].PontuacaoUsuario))
                pontuacoesTotais.push(Number(resposta[i].PontuacaoTotalEsperada))
                quizzes.push(Number(resposta[i].IdQuiz))
                titulos.push(resposta[i].TituloQuiz)
            }
            plotarKpisDesempenho(pontuacoesUsuario, pontuacoesTotais, quizzes, titulos);
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
        });
}

function carregarDashboards() {
    conteudo.innerHTML =
        `
    <div class="container-estatistica">
        <div class="botoes-estatisticas">
            <button class="ativo-estatistica" onclick="estatisticaPessoal()">Pessoal</button>
            <button onclick="estatisticaGeral()">Geral</button>
        </div>
        <div class="estatisticas" id="estatisticas"></div>
    </div>
    `
}

function estatisticaPessoal() {
    // Seleciona todos os botões dentro do conteiner 'botoes-estatisticas' -> antes do forEach
    // Depois do forEach -> Percorre todos eles e garante que nenhum deles fique com a classe "ativo" antes de ser escolhido 
    document.querySelectorAll('.botoes-estatisticas button').forEach(button => {
        button.classList.remove('ativo-estatistica');
    });
    // Pega o primeiro botão dentro desse container e adiciona  classe "ativo" a esse primeiro botão, deixando ele selecionado
    document.querySelector('.botoes-estatisticas button:first-child').classList.add('ativo-estatistica');

    // Pelo meu design, o primeiro botão dentro da div "botoes-estatística" é o que possui a função "estatisticaPessoal", ele pega esse botão (first-child)
    // Entretanto, se quisessemos pegar um botão que não é o primeiro (first-child), nem o último (last-child), podemos pegá-los de duas maneiras...
    //1. Pegar pelo nome do onclick do botão: document.querySelectorAll('.botoes-estatisticas button.esttisticaPessoa')
    //2. Pegar pelo índice do botão: document.querySelectorAll('.botoes-estatisticas button')[0]

    estatisticas.innerHTML =
        `
        <div class="kpi-dashboard-pessoal" id="kpi_performance_geral"></div>
        <div class="kpi-grid">
            <div class="kpi-small" id="media_por_quiz"></div>

            <div class="kpi-small" id="total_de_quizzes"></div>

            <div class="kpi-small" id="quiz_com_maior_pontuacao"></div>
        </div>
        `
    obterDadosGraficosPessoal();
}

function estatisticaGeral() {
    document.querySelectorAll('.botoes-estatisticas button').forEach(button => {
        button.classList.remove('ativo-estatistica');
    });
    document.querySelector('.botoes-estatisticas button:last-child').classList.add('ativo-estatistica');

    estatisticas.innerHTML =
        `
    <div class="cards-dashboard">
        <div class="card-dashboard">
            <h2>Os Swifties são, em sua maioria, dos signos de...</h2>
            <canvas id="signos" class="dashboard-signos" width="700" height="700" style="width: 100%; max-width: 700px; height: auto;"></canvas>
        </div>
        <div class="kpi-dashboard">
            <h2>Ícones mais utilizados</h2>
            <div id="icones_mais_utilizados"></div>
        </div>
    </div>
    <div class="cards-dashboard">
        <div class="card-dashboard">
            <h2>Top 5 eras favoritas dos swifties</h2>
            <canvas id="eras" width="550" height="250"></canvas>
        </div>
        <div class="card-dashboard">
            <h2>Top 5 álbuns favoritos dos swifties</h2>
            <canvas id="albuns" width="550" height="250"></canvas>
        </div>
    </div>
    `
    obterDadosGraficosGeral();
}

function plotarKpisDesempenho(pontuacoesUsuario, pontuacoesTotais, quizzes, titulos) {
    var pontuacaoUsuario = 0
    var pontuacaoGeral = 0
    var quantidadeDeQuizzes = quizzes.length
    var desempenho = 0
    var status = ''
    var mediaPorQuiz = 0
    var melhorDesempenho = ''

    var maiorPontuacao = -1
    var indiceMelhorQuiz = -1

    for (var i = 0; i < pontuacoesUsuario.length; i++) {
        pontuacaoUsuario += pontuacoesUsuario[i]
        if (pontuacoesUsuario[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoesUsuario[i]
            indiceMelhorQuiz = i
        }
    }

    for (var i = 0; i < pontuacoesTotais.length; i++) {
        pontuacaoGeral += pontuacoesTotais[i]
    }

    desempenho = (pontuacaoUsuario * 100) / pontuacaoGeral
    mediaPorQuiz = pontuacaoUsuario / quantidadeDeQuizzes

    if (desempenho < 40) {
        status = 'Pois trate de estudar mais 😤'
    } else if (desempenho >= 40 && desempenho < 50) {
        status = 'Uma recuperaçãozinha resolve 🫠'
    } else if (desempenho >= 50 && desempenho < 60) {
        status = 'Passou de ano 🥵'
    } else if (desempenho >= 60 && desempenho < 80) {
        status = 'Um swiftie digno de respeito 🫡'
    } else if (desempenho >= 80 && desempenho < 100) {
        status = 'Uau! Merece até uma carteirinha de swiftie 🪪'
    } else if (desempenho == 100) {
        status = 'Sabe mais dela do que ela mesma 😮‍💨'
    }

    if (indiceMelhorQuiz >= 0 && titulos[indiceMelhorQuiz]) {
        melhorDesempenho = titulos[indiceMelhorQuiz]
    }

    kpi_performance_geral.innerHTML =
        `
        <div class="icon icon-award">🏆</div>
        <div class="kpi-title" style="font-size: 40px;">Performance Geral</div>
        <div id="performance-percentage" class="kpi-value" style="font-size: 40px;">${desempenho.toFixed(0)}%</div>
        <div id="total-points" class="kpi-subtitle" style="font-size: 15px; color: white;">${pontuacaoUsuario} de ${pontuacaoGeral} pontos</div>
        <div id="status-badge" class="status-badge" style="font-size: 18px;">${status}</div>
    `

    media_por_quiz.innerHTML =
        `
    <div class="icon icon-trend">📈</div>
    <h3>Média por Quiz</h3>
    <div id="average-score" class="kpi-value" style="font-size: 40px;">${mediaPorQuiz.toFixed(1)}</div>
    `

    total_de_quizzes.innerHTML =
        `
    <div class="icon icon-chart">📊</div>
    <h3>Total de Quizzes</h3>
    <div id="total-quizzes" class="kpi-value" style="font-size: 40px;">${quantidadeDeQuizzes}</div>
    `

    quiz_com_maior_pontuacao.innerHTML =
        `
    <div class="icon icon-target">🎯</div>
    <h3>Melhor Quiz</h3>
    <div id="best-quiz" class="kpi-value" style="font-size: 35px;">${melhorDesempenho}</div>
    `
}

function plotarKpiAvatares(nomesAvatares, qtdDeUsuarios, idsAvatares) {
    var imagens = []
    for (var i = 0; i < nomesAvatares.length; i++) {
        if (idsAvatares[i] == 10) {
            imagens.push("aaron.png");
        } else if (idsAvatares[i] == 5) {
            imagens.push("andrea.png");
        } else if (idsAvatares[i] == 7) {
            imagens.push("austin.png");
        } else if (idsAvatares[i] == 13) {
            imagens.push("becky.png");
        } else if (idsAvatares[i] == 3) {
            imagens.push("benjamin.png");
        } else if (idsAvatares[i] == 12) {
            imagens.push("cobra.png");
        } else if (idsAvatares[i] == 11) {
            imagens.push("corcunda.png");
        } else if (idsAvatares[i] == 9) {
            imagens.push("jack.png");
        } else if (idsAvatares[i] == 1) {
            imagens.push("meredith.png");
        } else if (idsAvatares[i] == 2) {
            imagens.push("olivia.png");
        } else if (idsAvatares[i] == 6) {
            imagens.push("scott.png");
        } else if (idsAvatares[i] == 8) {
            imagens.push("selena.png");
        } else if (idsAvatares[i] == 4) {
            imagens.push("travis.png");
        }
    }

    var conteudo = ''
    for (var i = 0; i < imagens.length; i++) {
        conteudo += `
        <div class="avatar">
            <p>Usuários: <b>${qtdDeUsuarios[i]}</b></p>
            <img src="../imagens/avatares/${imagens[i]}" class="img-dashboard"></img>
        </div>
        `;
    }

    icones_mais_utilizados.innerHTML = `
    <div class="div-avatares">
        ${conteudo}
    </div>
    `
}

var graficoSignos = null;
function plotarGraficoSignos(labels, data) {
    var ctx = document.getElementById('signos').getContext('2d');
    if (graficoSignos !== null) {
        graficoSignos.destroy();
    }

    graficoSignos = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: labels,
            datasets: [{
                axis: 'x',
                label: 'Distribuição dos signos',
                data: data,
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(245, 99, 132)',
                    'rgb(235, 159, 64)',
                    'rgb(225, 205, 86)',
                    'rgb(77, 192, 192)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            indexAxis: 'y',
        }
    });
}

var graficoEras = null;
function plotarGraficoEras(labels, data) {
    var ctx = document.getElementById('eras').getContext('2d');
    if (graficoEras !== null) {
        graficoEras.destroy();
    }

    graficoEras = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                axis: 'x',
                label: 'Distribuição das eras',
                data: data,
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgb(245, 99, 132)',
                    'rgb(235, 159, 64)',
                    'rgb(225, 205, 86)',
                    'rgb(77, 192, 192)',
                    'rgb(52, 162, 235)'
                ],
                borderWidth: 3,
            }]
        },
        options: {
            indexAxis: 'y',
        }
    });
}

var graficoAlbuns = null;
function plotarGraficoAlbuns(labels, data) {
    var ctx = document.getElementById('albuns').getContext('2d');
    if (graficoAlbuns !== null) {
        graficoAlbuns.destroy();
    }

    graficoAlbuns = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                axis: 'x',
                label: 'Distribuição dos álbuns',
                data: data,
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgb(245, 99, 132)',
                    'rgb(235, 159, 64)',
                    'rgb(225, 205, 86)',
                    'rgb(77, 192, 192)',
                    'rgb(52, 162, 235)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            indexAxis: 'y',
        }
    });
}