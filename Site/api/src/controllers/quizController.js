function cadastrar(req, res) {
    var resposta = req.body.repostaServer;


    if (resposta == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    quizModel.cadastrar(resposta)
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
}