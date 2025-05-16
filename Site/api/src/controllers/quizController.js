function cadastrar(req, res) {
    var primeiroNome = req.body.primeiroNomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var dtNascimento = req.body.dtNascimentoServer;
    var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var estado = req.body.estadoServer;
    var senha = req.body.senhaServer;
    var nickname = req.body.nicknameServer;

    if (primeiroNome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (dtNascimento == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nickname == undefined) {
        res.status(400).send("Seu nickname está undefined!");
    }

    usuarioModel.cadastrar(primeiroNome, sobrenome, dtNascimento, cpf, email, senha, nickname, estado)
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