var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idusuario, primeiro_nome, email from usuario where email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(primeiroNome, sobrenome, dtNascimento, cpf, email, senha, nickname, estado) {
    var instrucaoSql = `
        insert into usuario (primeiro_nome, sobrenome, dtNascimento, cpf, email, senha, nickname, fkEndereco) VALUES ('${primeiroNome}', '${sobrenome}',  '${dtNascimento}', '${cpf}', '${email}', '${senha}', '${nickname}', '${estado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};