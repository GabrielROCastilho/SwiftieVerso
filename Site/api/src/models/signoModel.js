var database = require("../database/config")

function buscar() {
    var instrucaoSql =
    `
    select nome_signo as Nome, idSigno as IdSigno from signo order by nome_signo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};