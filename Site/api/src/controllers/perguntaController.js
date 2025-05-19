var perguntaModel = require("../models/perguntaModel");

function buscarPergunta(req, res) {
    perguntaModel.listar()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error("Erro ao buscar perguntas:", erro);
            res.status(500).json({ erro: "Erro ao buscar perguntas" });
        });
}

module.exports = {
    buscarPergunta
};
