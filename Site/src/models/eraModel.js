var database = require("../database/config")

function buscar() {
    var instrucaoSql =
    `
    select nome_era as Nome, idEra as IdEra from era order by nome_era;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};