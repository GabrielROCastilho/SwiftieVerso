-- ESTADO
insert into estado (nome, sigla) values ('São Paulo', 'SP');

-- CIDADE
insert into cidade (nome, fkEstado) values ('São Paulo', 1);

-- ENDERECO
insert into endereco (fkCidade, fkEstado) values (1, 1);

-- USUARIO
insert into usuario (primeiro_nome, sobrenome, cpf, dtNascimento, email, senha, nickname, fkEndereco) values ('Gabriel', 'Castilho', 52437201866, '2004-05-20', 'gabrielcastilho08@gmail.com', 'root', 'ts1fan', 1);

-- QUIZ
insert into quiz (nivel_dificuldade, numero_questoes, descricao) values (5, 10, 'Quiz sobre a infância da Taylor');

-- DESEMPENHO
insert into desempenho (fkUsuario, fkQuiz, pontucao) values (1, 1, 10);

-- MUSICA
insert into musica (nome, duracao) values ('Treacherous', 4.02);

-- ALBUM PERSONALIZADO
insert into album_personalizado (nome, qtd_musica, duracao, fkUsuario) values ('The Tortured Gabriel', 1, 4.02, 1);

-- COMPOSIÇÃO
insert into composicao (fkAlbumPersonalizado, fkMusica) values (1, 1);
