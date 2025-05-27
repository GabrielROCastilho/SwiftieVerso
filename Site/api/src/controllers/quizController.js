var quizModel = require("../models/quizModel");

function buscar(_, res){
    quizModel.buscar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const IdQuiz = resultado.map(registro => registro.IdQuiz)
                const Titulo = resultado.map(registro => registro.Titulo);
                const Descricao = resultado.map(registro => registro.Descricao);
                const NivelDificuldade = resultado.map(registro => registro.NivelDificuldade);

                res.json({
                    id: IdQuiz,
                    titulo: Titulo,
                    descricao: Descricao,
                    nivelDificuldade: NivelDificuldade
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