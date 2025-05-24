function obterDadosGraficos() {
    fetch('/graficos/signos')
        .then(function (response) {
            return response.json();
        })
        .then(function (resposta) {
            plotarGraficoSignos(resposta.labels, resposta.data);
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
        });

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

    fetch('/graficos/albuns')
        .then(function (response) {
            return response.json();
        })
        .then(function (resposta) {
            plotarGraficoAlbuns(resposta.labels, resposta.data);
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
        });
}

function carregarDashboards() {
    document.querySelectorAll('.btn-areas div').forEach(div => {
        div.classList.remove('ativo');
    });

    document.querySelectorAll('.btn-areas div')[0].classList.add('ativo');
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
        ``
}

function estatisticaGeral() {
    document.querySelectorAll('.botoes-estatisticas button').forEach(button => {
        button.classList.remove('ativo-estatistica');
    });
    document.querySelector('.botoes-estatisticas button:last-child').classList.add('ativo-estatistica');

    estatisticas.innerHTML =
        `
    <div class="card-dashboard">
        <h2>Os Swifties são, em sua maioria, dos signos de...</h2>
        <canvas id="signos"></canvas>
    </div>
    <div>
        <div class="card-dashboard">
            <h2>Top 5 eras favoritas dos swifties</h2>
            <canvas id="eras"></canvas>
        </div>
        <div class="card-dashboard">
            <h2>Top 5 álbuns favoritos dos swifties</h2>
            <canvas id="albuns"></canvas>
        </div>
    </div>
    `
    obterDadosGraficos();
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
    console.log(labels, data)
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
    console.log(labels, data)
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