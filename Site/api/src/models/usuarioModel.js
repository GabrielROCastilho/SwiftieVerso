var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
    select primeiro_nome as PrimeiroNome, sobrenome as Sobrenome, idUsuario as IdUsuario, fkAvatar as FkAvatar from usuario where email = '${email}' AND senha = '${senha}';
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

function atualizar(idUsuario, signo, albumFavorito, musicaFavorita, eraFavorita) {
    var instrucaoSql = `        
        update usuario set fkSigno = ${signo}, fkAlbumFavorito = ${albumFavorito}, 
                           fkEraFavorita = ${eraFavorita}, 
                           fkMusicaFavorita = ${musicaFavorita}
                        where idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDados(idUsuario) {
    var instrucaoSql = `
    select e.nome_era as NomeEra,
        a.nome_album as NomeAlbum,
        m.nome as NomeMusica,
        s.nome_signo as NomeSigno,
        u.fkAvatar as FkAvatar
    from usuario u
    inner join era e on u.fkEraFavorita = e.idEra
    inner join musica m on u.fkMusicaFavorita = m.idMusica
    inner join album a on u.fkAlbumFavorito = a.idAlbum
    inner join signo s on u.fkSigno = s.idSigno 
    where u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    autenticar,
    cadastrar,
    atualizar,
    buscarDados
};