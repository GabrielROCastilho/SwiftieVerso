var perguntas = []

function obterDadosQuiz(id){
    var idQuizVar = id

    // Buscar perguntas pelo id do quiz
    fetch("/perguntas/buscar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idQuizServer: idQuizVar
        })
    })
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(function (resposta) {
        var perguntasVetor = [];
        for (let i = 0; i < resposta.pergunta.length; i++) {
            perguntasVetor.push({
                pergunta: resposta.pergunta[i],
                id: resposta.id[i]
            });
        }
        perguntas = perguntasVetor;
        plotarPerguntas(perguntas);
    })
    .catch(function (err) {
        console.error("Erro ao buscar os dados:", err);
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = "Não foi possível carregar as eras. Tente novamente mais tarde.";
    });
}

function plotarPerguntas(perguntas){
    conteudo.innerHTML = ''
    for(var i = 0; i < perguntas.length; i++){
        conteudo.innerHTML += 
        `
        <div id="perguntaDaQuestaoAtual" class="padding-8">
            <span id="spanQuestaoExibida" class="text-bold">${perguntas[i].pergunta}</span>
        </div>
        `
        var idPerguntaVar = perguntas[i].id
        var alternativas = []

        // Buscar alternativas pelo id do da pergunta
        fetch("/alternativas/buscar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                idPerguntaServer: idPerguntaVar
            })
        })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function (resposta) {
            var alternativasVetor = [];
            for (let i = 0; i < resposta.id.length; i++) {
                alternativasVetor.push({
                    id: resposta.id[i],
                    letra: resposta.letra[i],
                    texto: resposta.texto[i]
                });
            }
            alternativas = alternativasVetor;
            plotarAlternativas(alternativas);
        })
    }
}

function plotarAlternativas(alternativas) {
    for(var i = 0; i < alternativas.length; i++){
        conteudo.innerHTML += 
        `
        <p>Alternativa ${i + 1}: ${alternativas[i].texto}</p>
        `
    }
}

// conteudo.innerHTML = `
// <div id="pontuacaoEJogo">
//     <button id="btnIniciarQuiz" onclick="iniciarQuiz()">INICIAR QUIZ</button>

//     <!-- Div que mostra a pontuação -->
//     <div id="pontuacao" class="flex-colunar width-fit-content border-primary">
//         <!-- Div que exibe os erros e acertos atualizados automaticamente -->
//         <div id="pontuacaoDuranteJogo" class="flex-colunar padding-8">
//             <span class="width-fit-content">Quantidade de acertos: <span id="spanCertas"></span></span>
//             <span class="width-fit-content">Quantidade de erros: <span id="spanErradas"></span></span>
//         </div>
//         <!-- Mostra a pontuação e uma mensagem final personalizada -->
//         <div id="pontuacaoFinalJogo" class="flex-colunar padding-8">
//             <span id="pontuacaoFinal" class="width-fit-content">Pontuação Final:
//                 <span id="spanPontuacaoFinal">***</span>
//             </span>
//             <span id="msgFinal" class="width-fit-content">***</span>
//         </div>
//     </div>

//     <!-- Div que mostra as questões e as alternativas -->
//     <div id="jogo" class="width-fit-content flex-colunar border-secondary">
        
//         <!-- Div que exibe qual questão está sendo mostrada -->
//         <div id="infoQuestao" class="padding-8">
//             <span>Questão atual: <span id="spanNumeroDaQuestaoAtual"></span> de <span id="qtdQuestoes"></span>
//                 questões.</span>
//         </div>

//         <!-- Grupo de 4 opções de resposta -->
//         <div id="opcoes" class="flex-colunar padding-8">
//             <span>
//                 <input type="radio" id="primeiraOpcao" name="option" class="radio" value="alternativaA" />
//                 <label for="primeiraOpcao" class="option" id="labelOpcaoUm"></label>
//             </span>
//             <span>
//                 <input type="radio" id="segundaOpcao" name="option" class="radio" value="alternativaB" />
//                 <label for="segundaOpcao" class="option" id="labelOpcaoDois"></label>
//             </span>
//             <span>
//                 <input type="radio" id="terceiraOpcao" name="option" class="radio" value="alternativaC" />
//                 <label for="terceiraOpcao" class="option" id="labelOpcaoTres"></label>
//             </span>
//             <span>
//                 <input type="radio" id="quartaOpcao" name="option" class="radio" value="alternativaD" />
//                 <label for="quartaOpcao" class="option" id="labelOpcaoQuatro"></label>
//             </span>
//         </div>

//         <!-- Botões de ação -->
//         <div id="botoes" class="flex-colunar padding-8">
//             <button onclick="submeter()" id="btnSubmeter">Submeter resposta</button>
//             <button onclick="avancar()" id="btnProx" disabled>Avançar para próxima questão</button>
//             <!-- <button onclick="finalizar()" id="btnConcluir" disabled>Finalizar Quiz</button> -->
//             <button onclick="tentarNovamente()" id="btnTentarNovamente" disabled>Tentar novamente</button>
//         </div>

//     </div>
// </div>
// `

// function plotarPerguntas(perguntas) {
    
// }

// // Array com todas as perguntas e alternativas
// const listaDeQuestoes = [

//     {
//         pergunta: "Qual mês tem 30 dias?",
//         alternativaA: "Janeiro",
//         alternativaB: "Dezembro",
//         alternativaC: "Junho",
//         alternativaD: "Agosto",
//         alternativaCorreta: "alternativaC"
//     },

//     {
//         pergunta: "Quantas horas tem em um dia?",
//         alternativaA: "30 horas",
//         alternativaB: "38 horas",
//         alternativaC: "48 horas",
//         alternativaD: "24 horas",
//         alternativaCorreta: "alternativaD"
//     },

//     {
//         pergunta: "Qual destes números é ímpar?",
//         alternativaA: "Dez",
//         alternativaB: "Doze",
//         alternativaC: "Oito",
//         alternativaD: "Onze",
//         alternativaCorreta: "alternativaD"
//     }

// ]

// // variáveis globais    
// let numeroDaQuestaoAtual = 0
// let pontuacaoFinal = 0
// let tentativaIncorreta = 0
// let certas = 0
// let erradas = 0
// let quantidadeDeQuestoes = listaDeQuestoes.length
// // let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

// // Esconde as partes do quiz até o usuários clicar em "Iniciar"
// function onloadEsconder() {
//     document.getElementById('pontuacao').style.display = "none"
//     document.getElementById('jogo').style.display = "none"
// }

// // Mostra o quiz e carrega a primeira questão
// function iniciarQuiz() {
//     document.getElementById('pontuacao').style.display = "flex"
//     document.getElementById('jogo').style.display = "flex"
//     document.getElementById('btnIniciarQuiz').style.display = "none"

//     document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

//     preencherHTMLcomQuestaoAtual(0)

//     btnSubmeter.disabled = false
//     btnProx.disabled = true
//     // btnConcluir.disabled = true
//     btnTentarNovamente.disabled = true
// }

// // // Preenche textos e alternativas com os dados da questão atual
// function preencherHTMLcomQuestaoAtual(index) {
//     habilitarAlternativas(true)
//     const questaoAtual = listaDeQuestoes[index]
//     numeroDaQuestaoAtual = index
//     console.log("questaoAtual")
//     console.log(questaoAtual)
//     document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
//     document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
//     document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
//     document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
//     document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
//     document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
// }

// // Verifica se o usuário marcou uma resposta
// // Chama a função checarResposta()
// function submeter() {
//     const options = document.getElementsByName("option"); // recupera alternativas no html

//     let hasChecked = false
//     for (let i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             hasChecked = true
//             break
//         }
//     }

//     if (!hasChecked) {
//         alert("Não há alternativas escolhidas. Escolha uma opção.")
//     } else {
//         btnSubmeter.disabled = true
//         btnProx.disabled = false

//         habilitarAlternativas(false)

//         checarResposta()
//     }
// }

// // Ativa ou desativa os radio buttons
// function habilitarAlternativas(trueOrFalse) {
//     let opcaoEscolhida = trueOrFalse ? false : true

//     primeiraOpcao.disabled = opcaoEscolhida
//     segundaOpcao.disabled = opcaoEscolhida
//     terceiraOpcao.disabled = opcaoEscolhida
//     quartaOpcao.disabled = opcaoEscolhida

// }

// // Avança para a próxima questão ou finaliza o jogo
// function avancar() {
//     btnProx.disabled = true
//     btnSubmeter.disabled = false

//     desmarcarRadioButtons()

//     if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
//         preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
//     } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
//         alert("Atenção... a próxima é a ultima questão!")
//         preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
//     } else {
//         finalizarJogo()
//     }
//     limparCoresBackgroundOpcoes()
// }

// // Recarrega a página
// function tentarNovamente() {
//     window.location.reload()
// }

// // Marca resposta correta com classe CSS verde
// // Resposta errada com classe CSS vermelha
// // Atualiza pontuação
// function checarResposta() {
//     const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
//     const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

//     const options = document.getElementsByName("option"); // recupera alternativas no html

//     let alternativaCorreta = null // variável para armazenar a alternativa correta

//     options.forEach((option) => {
//         if (option.value === respostaQuestaoAtual) {
//             console.log("alternativaCorreta está no componente: " + alternativaCorreta)
//             alternativaCorreta = option.labels[0].id
//         }
//     })

//     // verifica se resposta assinalada é correta
//     options.forEach((option) => {
//         if (option.checked === true && option.value === respostaQuestaoAtual) {
//             document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
//             pontuacaoFinal++
//             certas++
//             document.getElementById("spanCertas").innerHTML = certas
//             numeroDaQuestaoAtual++
//         } else if (option.checked && option.value !== respostaQuestaoAtual) {
//             const wrongLabelId = option.labels[0].id

//             document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
//             document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
//             tentativaIncorreta++
//             erradas++
//             document.getElementById("spanErradas").innerHTML = erradas
//             numeroDaQuestaoAtual++
//         }
//     })
// }

// // Remove classes visuais de certo/errado
// function limparCoresBackgroundOpcoes() {
//     const options = document.getElementsByName("option");
//     options.forEach((option) => {
//         document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
//         document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
//     })
// }

// // Desmarca todas as opções
// function desmarcarRadioButtons() {
//     const options = document.getElementsByName("option");
//     for (let i = 0; i < options.length; i++) {
//         options[i].checked = false;
//     }
// }

// // Mostra mensagem final com base na porcentagem de acertos
// function finalizarJogo() {
//     let textoParaMensagemFinal = null
//     let classComCoresParaMensagemFinal = null
//     const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

//     if (porcentagemFinalDeAcertos <= 0.3) {
//         textoParaMensagemFinal = "Parece que você não estudou..."
//         classComCoresParaMensagemFinal = "text-danger-with-bg"
//     }
//     else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
//         textoParaMensagemFinal = "Pode melhorar na próxima, hein!"
//         classComCoresParaMensagemFinal = "text-warning-with-bg"
//     }
//     else if (porcentagemFinalDeAcertos >= 0.9) {
//         textoParaMensagemFinal = "Uau, parabéns!"
//         classComCoresParaMensagemFinal = "text-success-with-bg"
//     }

//     textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos) * 100) + "% das questões."


//     document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
//     document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal)
//     document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

//     document.getElementById('jogo').classList.add("text-new-gray")

//     btnProx.disabled = true
//     btnSubmeter.disabled = true
//     // btnConcluir.disabled = true
//     btnTentarNovamente.disabled = false

// }