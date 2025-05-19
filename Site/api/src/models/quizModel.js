function cadastrar(resposta) {
    var instrucaoSql = `
        insert into resposta (primeiro_nome, sobrenome, dtNascimento, cpf, email, senha, nickname, fkEndereco) VALUES ('${primeiroNome}', '${sobrenome}',  '${dtNascimento}', '${cpf}', '${email}', '${senha}', '${nickname}', '${estado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};