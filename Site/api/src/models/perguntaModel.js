var database = require("../database/config")

function buscar(idQuiz, idPergunta) {
    var instrucaoSql =
    `
    select p.pergunta as Pergunta, 
           p.idPergunta as Id
    from pergunta p 
    inner join quiz q on p.fkQuiz = q.idQuiz where q.idQuiz = ${idQuiz} and p.idPergunta = ${idPergunta};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};