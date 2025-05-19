var database = require("../database/config");

function listar() {
    const query = `SELECT idPergunta, pergunta FROM pergunta;`;
    return database.executar(query);
}

module.exports = {
    listar
};
