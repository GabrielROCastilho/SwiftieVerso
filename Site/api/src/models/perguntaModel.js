var database = require("../database/config")

function buscar() {
    var instrucaoSql =
    `
    select pergunta as Pergunta, fkQuiz as Quiz from pergunta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};