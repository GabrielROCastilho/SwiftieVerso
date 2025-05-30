var desempenhoModel = require("../models/desempenhoModel");

function cadastrar(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;

    if (pontuacao == undefined) {
        res.status(400).send("A pontuação está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("O fkQuiz está undefined!");
    }

    desempenhoModel.cadastrar(pontuacao, fkUsuario, fkQuiz)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar
};