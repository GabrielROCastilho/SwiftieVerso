// async transforma a função em assíncrona, ou seja, permite o uso de await dentro dela
// await pausa a execução da função até que a Promise (como fetch) retorne uma resposta
async function obterDadosQuiz(id) {
    const idQuizVar = id;
    const questoes = [];

    // Inicia um bloco de tratamento de erros. Se algo der errado dentro do try, o catch será executado
    try {
        // Espera a resposta usando await
        const respostaPerguntas = await fetch("/perguntas/buscar", {
            // Envia uma requisição POST para buscar todas as perguntas desse quiz
            method: "POST",
            // Content-Type: application/json informa que o corpo da requisição está em JS
            headers: { "Content-Type": "application/json" },
            //O corpo (body) envia o ID do quiz em formato JSO
            body: JSON.stringify({ idQuizServer: idQuizVar })
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
            questoes.push({
                pergunta: textoPergunta,
                alternativas: alternativas
            });
        }

        plotarQuestoes(questoes);

    } catch (err) {
        console.error("Erro ao buscar os dados:", err);
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = "Não foi possível carregar as eras. Tente novamente mais tarde.";
    }
}


function plotarQuestoes(questoes) {
    let mensagem = '';

    for (let i = 0; i < questoes.length; i++) {
        mensagem += `<h1>${questoes[i].pergunta}</h1>`;

        for (let j = 0; j < questoes[i].alternativas.length; j++) {
            mensagem += `<p>${questoes[i].alternativas[j].letra}) ${questoes[i].alternativas[j].texto}</p>`;
        }
    }

    conteudo.innerHTML = mensagem;
}


// conteudo.innerHTML = `
// <div id="conteudo">
//   <div id="pontuacaoEJogo">
//     <button id="btnIniciarQuiz" onclick="iniciarQuiz()">INICIAR QUIZ</button>

//     <div id="pontuacao" style="display: none">
//       <div id="pontuacaoDuranteJogo">
//         Acertos: <span id="spanCertas"></span> |
//         Erros: <span id="spanErradas"></span>
//       </div>
//       <div id="pontuacaoFinalJogo">
//         Pontuação Final: <span id="spanPontuacaoFinal">***</span><br />
//         <span id="msgFinal">***</span>
//       </div>
//     </div>

//     <div id="jogo" style="display: none">
//       <div id="infoQuestao">
//         Questão <span id="spanNumeroDaQuestaoAtual"></span> de <span id="qtdQuestoes"></span>
//       </div>
//       <div id="perguntaDaQuestaoAtual">
//         <span id="spanQuestaoExibida"></span>
//       </div>
//       <div id="opcoes"></div>
//       <div id="botoes">
//         <button onclick="submeter()" id="btnSubmeter">Submeter resposta</button>
//         <button onclick="avancar()" id="btnProx" disabled>Avançar</button>
//         <button onclick="tentarNovamente()" id="btnTentarNovamente" disabled>Tentar novamente</button>
//       </div>
//     </div>
//   </div>
// </div>

// `

// // variáveis globais
// let numeroDaQuestaoAtual = 0
// let pontuacaoFinal = 0
// let tentativaIncorreta = 0
// let certas = 0
// let erradas = 0
// let quantidadeDeQuestoes = listaDeQuestoes.length

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