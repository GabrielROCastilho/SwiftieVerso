var database = require("../database/config")

function buscar() {
    var instrucaoSql =
    `
    select idQuiz as IdQuiz, titulo as Titulo, descricao as Descricao, nivel_dificuldade as NivelDificuldade from quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};