-- ESTADO
insert into estado (nome, sigla) values ('Acre', 'AC'),
										('Alagoas', 'AL'),
										('Amapá', 'AP'),
										('Amazonas', 'AM'),
										('Bahia', 'BA'),
										('Ceará', 'CE'),
										('Distrito Federal', 'DF'),
										('Espírito Santo', 'ES'),
										('Goiás', 'GO'),
										('Maranhão', 'MA'),
										('Mato Grosso', 'MT'),
										('Mato Grosso do Sul', 'MS'),
										('Minas Gerais', 'MG'),
										('Pará', 'PA'),
										('Paraíba', 'PB'),
										('Paraná', 'PR'),
										('Pernambuco', 'PE'),
										('Piauí', 'PI'),
										('Rio de Janeiro', 'RJ'),
										('Rio Grande do Norte', 'RN'),
										('Rio Grande do Sul', 'RS'),
										('Rondônia', 'RO'),
										('Roraima', 'RR'),
										('Santa Catarina', 'SC'),
										('São Paulo', 'SP'),
										('Sergipe', 'SE'),
										('Tocantins', 'TO');

-- ENDERECO
insert into endereco (fkCidade, fkEstado) values (1, 1);

-- USUARIO
insert into usuario (primeiro_nome, sobrenome, dtNascimento, cpf, email, senha, nickname, fkEndereco) values ('Gabriel', 'Castilho', '2004-05-20', 52437201866, 'gabrielcastilho08@gmail.com', 'root', 'ts1fan', 1);

-- QUIZ
insert into quiz (nivel_dificuldade, numero_questoes, descricao) values (5, 10, 'Quiz sobre a infância da Taylor');

-- DESEMPENHO
insert into desempenho (fkUsuario, fkQuiz, pontucao) values (1, 1, 10);

-- MUSICA
insert into musica (nome, duracao_musica) values ('Treacherous', 4.02);

-- ALBUM PERSONALIZADO
insert into album_personalizado (nome, qtd_musica, duracao_album, fkUsuario) values ('The Tortured Gabriel', 1, 4.02, 1);

-- COMPOSIÇÃO
insert into composicao (fkAlbumPersonalizado, fkMusica) values (1, 1);

