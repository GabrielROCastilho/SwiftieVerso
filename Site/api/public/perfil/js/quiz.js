function obterDadosQuiz(idQuiz) {
    sessionStorage.ID_QUIZ = idQuiz
    var idQuizVar = idQuiz
    fetch("/quizzes/buscarNumeroDePerguntas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idQuizServer: idQuizVar,
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(json => {
                    sessionStorage.NUMERO_QUESTOES = json.NumeroDePerguntas;
                    sessionStorage.ID_MINIMO = json.IdMinimo;
                    var numeroDaQuestao = Number(json.IdMinimo);
                    proximaPergunta(null, numeroDaQuestao)
                });
            } else {
                resposta.text().then(texto => {
                    document.getElementById("cardMensagem").style.display = "block";
                    document.getElementById("mensagem_erro").innerText = "Erro ao carregar seus dados";
                    finalizarAguardar();
                });
            }
        })
}

function plotarQuestao(questao, numeroDaQuestaoVar) {
    var qtdDePerguntas = sessionStorage.NUMERO_QUESTOES
    var numeroDaQuestao = numeroDaQuestaoVar
    var qtdDePerguntasDiminuidas = 0

    var questaoHTML = ''
    var alternativasHTML = ''

    for (let i = 0; i < questao.length; i++) {
        questaoHTML = `<h1>${questao[i].pergunta}</h1>`

        for (let j = 0; j < questao[i].alternativas.length; j++) {
            alternativasHTML += `              
            <div class="alternativa">
                <input type="radio" name="alternativa" value="${questao[i].alternativas[j].id}" id="alt${questao[i].alternativas[j].id}"/>
                <label for="alt${questao[i].alternativas[j].id}">${questao[i].alternativas[j].texto}</label>
            </div>
        `
        }
    }

    while (numeroDaQuestao > qtdDePerguntas) {
        numeroDaQuestao -= 10
        qtdDePerguntasDiminuidas += 10
    }

    if (numeroDaQuestao < qtdDePerguntas) {
        conteudo.innerHTML = `
        <div class="container_questao">
            <div class="questao">
                ${questaoHTML}
                <div class="input_alternativas">
                    ${alternativasHTML}
                </div>
                <button class="btn-proxima" onclick="salvarResposta(${numeroDaQuestao + qtdDePerguntasDiminuidas})">Próxima Pergunta</button>
            </div>
        </div>
        `
    } else if (numeroDaQuestao == qtdDePerguntas) {
        conteudo.innerHTML = `
        <div class="container_questao">
            <div class="questao">
                ${questaoHTML}
                <div class="input_alternativas">
                    ${alternativasHTML}
                </div>
                <button onclick="salvarUltimaResposta(${numeroDaQuestao + qtdDePerguntasDiminuidas})" class="btn-proxima">Finalizar Quiz</button>
            </div>
        </div>
        `
    }
}

function salvarResposta(numeroDaQuestao) {
    var numeroQuestao = numeroDaQuestao
    var opcoes = document.getElementsByName('alternativa');
    var selecionado = null;

    for (var i = 0; i < opcoes.length; i++) {
        console.log('Entrou no for')
        if (opcoes[i].checked) {
            selecionado = opcoes[i].value;
            proximaPergunta(selecionado, numeroQuestao)
            break;
        }
    }
}

async function proximaPergunta(selecionado, numeroDaQuestao) {
    var alternativaSelecionadaVar = selecionado
    var fkQuizVar = sessionStorage.ID_QUIZ
    var usuarioVar = sessionStorage.ID_USUARIO
    var numeroDaQuestaoVar = numeroDaQuestao

    if (alternativaSelecionadaVar != null) {
        fetch("/respostas/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                alternativaSelecionadaServer: alternativaSelecionadaVar,
                usuarioServer: usuarioVar,
                fkQuizServer: fkQuizVar
            }),
        })
        numeroDaQuestaoVar += 1
    }
    const questao = [];

    // Inicia um bloco de tratamento de erros. Se algo der errado dentro do try, o catch será executado
    try {
        // Espera a resposta usando await
        const respostaPerguntas = await fetch("/perguntas/buscar", {
            // Envia uma requisição POST para buscar todas as perguntas desse quiz
            method: "POST",
            // Content-Type: application/json informa que o corpo da requisição está em JS
            headers: { "Content-Type": "application/json" },
            //O corpo (body) envia o ID do quiz em formato JSO
            body: JSON.stringify({ numeroDaQuestaoServer: numeroDaQuestaoVar, fkQuizServer: fkQuizVar })
        });

        // Verifica se a resposta do servidor foi bem-sucedida (status 200). Se não for, lança um erro
        if (!respostaPerguntas.ok) throw new Error("Erro ao buscar perguntas");

        // Converte o conteúdo da resposta (JSON) para um objeto JavaScript
        const dadosPerguntas = await respostaPerguntas.json();

        // Percorre cada pergunta retornada
        for (let i = 0; i < dadosPerguntas.pergunta.length; i++) {
            // Salva o ID e o texto da pergunta at
            const idPergunta = dadosPerguntas.id[i];
            const textoPergunta = dadosPerguntas.pergunta[i];

            // Para cada pergunta, envia nova requisição para buscar suas alternativ
            const respostaAlternativas = await fetch("/alternativas/buscar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Passa o idPergunta como corpo do PO
                body: JSON.stringify({ idPerguntaServer: idPergunta })
            });

            // Verifica se a resposta foi ok
            if (!respostaAlternativas.ok) throw new Error("Erro ao buscar alternativas");

            // Converte as alternativas recebidas para um objeto JavaScript
            const dadosAlternativas = await respostaAlternativas.json();

            // Cria um array alternativas para armazenar as alternativas da pergunta
            const alternativas = [];

            // Cada alternativa recebe seu ID, letra (ex: A, B, C) e o texto
            for (let j = 0; j < dadosAlternativas.id.length; j++) {
                alternativas.push({
                    id: dadosAlternativas.id[j],
                    letra: dadosAlternativas.letra[j],
                    texto: dadosAlternativas.texto[j]
                });
            }

            // Adiciona um objeto com a pergunta e suas alternativas ao array quest
            questao.push({
                pergunta: textoPergunta,
                alternativas: alternativas
            });
        }

        plotarQuestao(questao, numeroDaQuestaoVar);

    } catch (err) {
        console.error("Erro ao buscar os dados:", err);
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = "Não foi possível carregar as eras. Tente novamente mais tarde.";
    }
}

function salvarUltimaResposta() {
    var opcoes = document.getElementsByName('alternativa');
    var alternativaSelecionadaVar = null;
    var fkQuizVar = sessionStorage.ID_QUIZ
    var usuarioVar = sessionStorage.ID_USUARIO

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            alternativaSelecionadaVar = opcoes[i].value;
            break;
        }
    }

    fetch("/respostas/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            alternativaSelecionadaServer: alternativaSelecionadaVar,
            usuarioServer: usuarioVar,
            fkQuizServer: fkQuizVar
        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {
                calcularPontuacao()
            } else {
                resposta.text().then(texto => {
                    document.getElementById("cardMensagem").style.display = "block";
                    document.getElementById("mensagem_erro").innerText = "Erro ao carregar seus dados";
                    finalizarAguardar();
                });
            }
        })
}

function calcularPontuacao() {
    var fkQuizVar = sessionStorage.ID_QUIZ
    var fkUsuarioVar = sessionStorage.ID_USUARIO

    fetch("/respostas/calcular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fkQuizServer: fkQuizVar,
            fkUsuarioServer: fkUsuarioVar
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(json => {
                    sessionStorage.PONTUACAO = json.Pontuacao;
                    var pontuacao = sessionStorage.PONTUACAO
                    adicionarDesempenho(pontuacao)
                });
            } else {
                resposta.text().then(texto => {
                    document.getElementById("cardErro").style.display = "block";
                    document.getElementById("mensagem_erro").innerText = "Usuário ou senha inválidos.";
                    finalizarAguardar();
                });
            }
        })
        .catch(function (erro) {
            document.getElementById("mensagem_erro").innerText = "Erro ao conectar com o servidor.";
            document.getElementById("cardErro").style.display = "block";
            finalizarAguardar();
        });
}

function adicionarDesempenho(pontuacao) {
    var pontuacaoVar = 0
    for (var i = 0; i < pontuacao.length; i++) {
        pontuacaoVar += pontuacao[i]
    }
    console.log(pontuacaoVar)

    var fkQuizVar = sessionStorage.ID_QUIZ
    var fkUsuarioVar = sessionStorage.ID_USUARIO

    fetch("/desempenhos/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pontuacaoServer: pontuacaoVar,
            fkUsuarioServer: fkUsuarioVar,
            fkQuizServer: fkQuizVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                exibirResultado()
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

    return false;
}

function exibirResultado() {
    var fkQuizVar = sessionStorage.ID_QUIZ;
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    console.log(fkUsuarioVar);

    fetch("/desempenhos/buscar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkUsuarioServer: fkUsuarioVar,
            fkQuizServer: fkQuizVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                resposta.json().then(json => {
                    sessionStorage.NUMERO_ACERTOS = json.NumeroAcertos;
                    sessionStorage.TOTAL_PERGUNTAS = json.TotalPerguntas;

                    var numeroAcertos = Number(json.NumeroAcertos);
                    var totalPerguntas = Number(json.TotalPerguntas);
                    var desempenho = ((numeroAcertos * 100) / totalPerguntas).toFixed(0);

                    conteudo.innerHTML =
                        `
                    <div class="container_pontuacao">    
                        <div class="cards">
                            <div class="kpi-card">
                            <div>
                                <div class="kpi-icon">🏆</div>
                                <h3 class="kpi-title">Sua Pontuação</h3>
                                <div class="kpi-value">${numeroAcertos}/${totalPerguntas}</div>
                                <p class="kpi-subtitle">Parabéns!</p>
                            </div>
                        </div>
                            <div class="kpi-card">
                                <div class="kpi-icon">✅</div>
                                <h3 class="kpi-title">Acertos</h3>
                                <div class="kpi-value">${desempenho}%</div>
                                <p class="kpi-subtitle">Muito bem!</p>
                            </div>
                        </div>
                        <div>
                            <button class="btn-salvar-quiz" onclick="retornarQuizzes()">Retornar ao menu inicial</button>
                        </div>
                    </div>
                    `;
                });
            } else {
                throw "Houve um erro ao carregar os dados!";
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar desempenho: ", erro);
        });
}

function retornarQuizzes() {
    conteudo.innerHTML = `
    <h2 class="aviso-retorno-quiz">Retornando...</h2>
    `
    setTimeout(() => {
        window.location = "./index.html";
    }, 2000);
}