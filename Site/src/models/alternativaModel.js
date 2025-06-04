var database = require("../database/config")

function buscar(idPergunta) {
    var instrucaoSql =
    `
    select a.idAlternativa as Id, 
    a.letra as Letra, 
    a.texto as Texto 
    from alternativa a 
    inner join pergunta p on p.idPergunta = a.fkPergunta where p.idPergunta = ${idPergunta};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};