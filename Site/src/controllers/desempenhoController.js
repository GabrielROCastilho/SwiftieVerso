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

function buscar(req, res) {
    var fkQuiz = req.body.fkQuizServer
    var fkUsuario = req.body.fkUsuarioServer

    desempenhoModel.buscar(fkUsuario, fkQuiz)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);
                    res.json(resultadoAutenticar[0]);
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarDadosUsuario(req, res){
    var fkQuiz = req.body.idQuizServer
    var fkUsuario = req.body.idUsuarioServer

    desempenhoModel.buscarDadosUsuario(fkQuiz, fkUsuario)
    .then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

            if (resultadoAutenticar.length == 1) {
                console.log(resultadoAutenticar);
                res.json(resultadoAutenticar[0]);
            } else if (resultadoAutenticar.length == 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    cadastrar,
    buscar,
    buscarDadosUsuario
};