var quizzes = []

function obterDadosQuizzes() {
    fetch('/quizzes/buscar')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function (resposta) {
            var quizzesVetor = [];
            for (let i = 0; i < resposta.id.length; i++) {
                quizzesVetor.push({
                    id: resposta.id[i],
                    titulo: resposta.titulo[i],
                    descricao: resposta.descricao[i],
                    nivelDificuldade: resposta.nivelDificuldade[i]
                });
            }
            quizzes = quizzesVetor;
            plotarCards(quizzes);
        })
        .catch(function (err) {
            console.error("Erro ao buscar os dados:", err);
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = "Não foi possível carregar as perguntas desse quiz. Tente novamente mais tarde.";
        });
}

function carregarQuizzes() {
    obterDadosQuizzes()
    plotarCards()
}

function plotarCards(quizzes) {
    for (var i = 0; i < quizzes.length; i++) {
        conteudo.innerHTML =
        `
        <div class="card" id="card">
            <h2 class="quiz-title">${quizzes[i].titulo}</h2>
            <p class="quiz-desc">${quizzes[i].descricao}</p>
            <p><strong>Dificuldade:</strong> ${quizzes[i].nivelDificuldade}</p>
            <p><strong>Quantidade de questões:</strong>15</p>
            <button class="btn" onclick="obterDadosQuiz(${quizzes[i].id})">Iniciar Quiz</button>
        </div>
        `
    }
}