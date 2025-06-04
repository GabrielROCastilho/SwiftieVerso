var perguntaModel = require("../models/perguntaModel");

function buscar(req, res){
    var idPergunta = req.body.numeroDaQuestaoServer;
    var idQuiz = req.body.fkQuizServer;

    perguntaModel.buscar(idQuiz, idPergunta)
        .then(function (resultado) {
            if (resultado.length > 0) {
                const Pergunta = resultado.map(registro => registro.Pergunta);
                const Id = resultado.map(registro => registro.Id)

                res.json({
                    pergunta: Pergunta,
                    id: Id
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