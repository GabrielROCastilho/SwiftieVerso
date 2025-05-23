var database = require("../database/config")

function buscar() {
    var instrucaoSql =
    `
    select nome_avatar as Nome, idAvatar as IdAvatar from avatar;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};