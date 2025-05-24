var database = require("../database/config")

function buscar() {
    var instrucaoSql =
    `
    select nome_album as Nome, idAlbum as IdAlbum from album order by nome_album;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};