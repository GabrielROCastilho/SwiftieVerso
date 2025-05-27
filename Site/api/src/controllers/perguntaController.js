var perguntaModel = require("../models/perguntaModel");

function buscar(_, res){
    perguntaModel.buscar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const pergunta = resultado.map(registro => registro.Pergunta);
                const quiz = resultado.map(registro => registro.Quiz);

                res.json({
                    labels: pergunta,
                    data: quiz
                });
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscar
};