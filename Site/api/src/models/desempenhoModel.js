var database = require("../database/config")

function cadastrar(pontuacao, fkUsuario, fkQuiz) {
    var instrucaoSql = `                
        insert into desempenho (pontuacao, fkUsuario, fkQuiz) values (${pontuacao}, ${fkUsuario}, ${fkQuiz})
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar
};