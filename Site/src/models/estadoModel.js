var database = require("../database/config")

function buscar() {
    var instrucaoSql =
    `
    select nome as Nome, idEstado as IdEstado from estado;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};