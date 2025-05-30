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

    var questaoHTML = ''
    var alternativasHTML = ''

    for (let i = 0; i < questao.length; i++) {
        questaoHTML = `<h1>${questao[i].pergunta}</h1>`

        for (let j = 0; j < questao[i].alternativas.length; j++) {
            alternativasHTML += `<input type="radio" name="alternativa" value="${questao[i].alternativas[j].id}"/>${questao[i].alternativas[j].texto}`;
        }
    }

    while (numeroDaQuestao > 10) {
        numeroDaQuestao -= 10;
    }

    if (numeroDaQuestao < qtdDePerguntas) {
        console.log('Entrou aqui -> primeiro if')
        conteudo.innerHTML = `
        <div class="container_questao">
            <div class="questao">
                ${questaoHTML}
                <div class="input_alternativas">
                    ${alternativasHTML}
                </div>
                <button onclick="salvarResposta(${numeroDaQuestao})">Próxima Pergunta</button>
            </div>
        </div>
        `
    } else if (numeroDaQuestao == qtdDePerguntas) {
        console.log('Entrou aqui -> segundo if')
        conteudo.innerHTML = `
        <div class="container_questao">
            <div class="questao">
                ${questaoHTML}
                <div class="input_alternativas">
                    ${alternativasHTML}
                </div>
                <button onclick="calcularPontuacao()">Finalizar Quiz</button>
            </div>
        </div>
        `
    }
}

function salvarResposta(numeroDaQuestao) {
    console.log('Entrou aqui -> salvar')
    var numeroQuestao = numeroDaQuestao
    var opcoes = document.getElementsByName('alternativa');
    var selecionado = null;

    for (var i = 0; i < opcoes.length; i++) {
        console.log('Entrou no for')
        if (opcoes[i].checked) {
            selecionado = opcoes[i].value;
            console.log('Entrou no if -> ', selecionado, numeroQuestao)
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
                exibirResultado(pontuacaoVar)
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

function exibirResultado(pontuacaoVar) {
    var pontuacao = 0
    for (var i = 0; i < pontuacaoVar.length; i++) {
        pontuacao += pontuacaoVar[i]
    }
    conteudo.innerHTML =
        `
        <h1>Sua pontuação é de ${pontuacao}</h1>
        <button onclick="retornarQuizzes()">Retornar à area principal</button>
    `
}

function retornarQuizzes() {
    conteudo.innerHTML = 'Retornando'
    setTimeout(() => {
        window.location = "./index.html";
    }, 2000);
}