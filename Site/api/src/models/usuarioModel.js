var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idusuario, primeiro_nome, sobrenome, fkAvatar from usuario where email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(primeiroNome, sobrenome, dtNascimento, cpf, email, senha, nickname, estado, avatar) {
    var instrucaoSql = `                
        INSERT INTO usuario (
            primeiro_nome, sobrenome, dtNascimento, cpf, email, senha, nickname, fkEstado, fkAvatar
        ) VALUES (
            '${primeiroNome}', '${sobrenome}', '${dtNascimento}', '${cpf}', '${email}', '${senha}', '${nickname}', ${estado}, ${avatar}
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(idUsuario, signo, albumFavorito, musicaFavorita, eraFavorita){
    var instrucaoSql = `
        -- Pega o idSigno com base no nome do signo
        SET @idSigno := (SELECT idSigno FROM signo WHERE nome_signo = '${signo}');

        -- Pega o idAlbum com base no nome do album
        SET @idAlbum := (SELECT idAlbum FROM album WHERE nome_album = '${albumFavorito}');

        -- Pega o idEra com base no nome da era
        SET @idEra := (SELECT idEra FROM era WHERE nome_era = '${eraFavorita}');
        
        update usuario set fkSigno = @idSigno, fkAlbumFavorito = @idAlbum, 
                           fkEraFavorita = @idEra, 
                           musica_favorita = '${musicaFavorita}'
                        where idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    atualizar
};