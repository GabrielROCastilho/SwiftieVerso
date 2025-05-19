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
insert into endereco (fkEstado) values (1);

-- SIGNO
insert into signo (nome_signo) values ('Áries'),
									  ('Touro'),
									  ('Gêmeos'),
									  ('Câncer'),
									  ('Leão'),
									  ('Virgem'),
									  ('Libra'),
									  ('Escorpião'),
									  ('Sagitário'),
									  ('Capricórnio'),
									  ('Aquário'),
									  ('Peixes');

-- ERA
insert into era (nome_era) values ('Taylor Swift'),
								  ('Fearless'),
								  ('Speak Now'),
								  ('Red'),
								  ('1989'),
								  ('reputation'),
								  ('Lover'),
								  ('folklore'),
								  ('evermore'),
								  ('Midnights'),
								  ('The Tortured Poets Department');

-- ALBUM
insert into album (nome_album) values ('Taylor Swift'),
									  ('Fearless'),
									  ('Speak Now'),
									  ('Red'),
									  ('1989'),
									  ('reputation'),
									  ('Lover'),
									  ('folklore'),
									  ('evermore'),
									  ('Midnights'),
									  ('The Tortured Poets Department');

-- USUARIO
insert into usuario (primeiro_nome, sobrenome, dtNascimento, cpf, email, senha, nickname, fkEndereco) values ('Gabriel', 'Castilho', '2004-05-20', 52437201866, 'gabrielcastilho08@gmail.com', 'badliar2004', 'ts1fan', 1);

-- QUIZ
insert into quiz (nivel_dificuldade, numero_questoes, descricao) values (1, 0, 'Conhecimentos Gerais da Loirinha');

-- PERGUNTA
insert into pergunta (pergunta, nivel_dificuldade, fkQuiz) values ('Qual o nome do documentário de Taylor Swift lançado na Netflix em 2020?',          3, 1),
																  ('Em que ano Taylor Swift lançou seu primeiro álbum?',                                2, 1),
																  ('Qual é o nome da cidade natal de Taylor Swift?',                                   4, 1),
																  ('Qual foi o primeiro álbum de Taylor Swift a ganhar o Grammy de Álbum do Ano?',    2, 1),
																  ('Em qual álbum está a música "All Too Well"?',                                     1, 1),
																  ('Quantos álbuns regravados ("Taylor''s Version") Taylor Swift lançou até 2024?',  3, 1),
																  ('Qual música contém o verso "Darling I''m a nightmare dressed like a daydream"?',  2, 1),
																  ('Qual o nome do álbum lançado por surpresa em julho de 2020?',                     2, 1),
																  ('Qual ator aparece no clipe de "The Man" dirigido por Taylor Swift?',              3, 1),
																  ('Qual é o nome da turnê que celebra todas as eras da carreira de Taylor Swift?',   1, 1);

-- ATUALIZANDO O QUIZ
update quiz set nivel_dificuldade = round((select avg(nivel_dificuldade) from pergunta where fkQuiz = 1)), numero_questoes = (select count(*) from pergunta where fkQuiz = 1) where idQuiz = 1;

-- ALTERNATIVA
insert into alternativa (letra, texto, fkPergunta) values
-- P1
 ('A', 'Folklore: The Long Pond Studio Sessions',      1),
 ('B', 'Miss Americana',                               1),
 ('C', 'The Eras Tour',                                1),
 ('D', 'Taylor Swift: Reputation Stadium Tour',        1),
-- P2
 ('A', '2006',                                         2),
 ('B', '2004',                                         2),
 ('C', '2008',                                         2),
 ('D', '2010',                                         2),
-- P3
 ('A', 'Nashville, Tennessee',                         3),
 ('B', 'Austin, Texas',                                3),
 ('C', 'Wyomissing, Pensilvânia',                      3),
 ('D', 'Reading, Pensilvânia',                         3),
-- P4
 ('A', 'Fearless',                                     4),
 ('B', 'Red',                                           4),
 ('C', '1989',                                          4),
 ('D', 'Speak Now',                                    4),
-- P5
 ('A', 'Fearless',                                     5),
 ('B', 'Speak Now',                                    5),
 ('C', 'Red',                                           5),
 ('D', 'Evermore',                                     5),
-- P6
 ('A', '2',                                            6),
 ('B', '3',                                            6),
 ('C', '4',                                            6),
 ('D', '5',                                            6),
-- P7
 ('A', 'Style',                                        7),
 ('B', 'Blank Space',                                  7),
 ('C', 'Wildest Dreams',                               7),
 ('D', 'I Know Places',                                7),
-- P8
 ('A', 'Folklore',                                     8),
 ('B', 'Evermore',                                     8),
 ('C', 'Lover',                                        8),
 ('D', 'Fearless (Taylor''s Version)',                 8),
-- P9
 ('A', 'David Harbour',                                9),
 ('B', 'Idris Elba',                                   9),
 ('C', 'Tom Hiddleston',                               9),
 ('D', 'Aaron Paul',                                   9),
-- P10
 ('A', 'Reputation Stadium Tour',                     10),
 ('B', 'The Eras Tour',                               10),
 ('C', 'Red Tour',                                     10),
 ('D', 'Speak Now World Tour',                        10);

-- DESEMPENHO
insert into desempenho (fkUsuario, fkQuiz, pontuacao) values (1, 1, 0);

-- RESPOSTA
insert into resposta (resposta, correta, fkDesempenho, fkPergunta, fkAlternativa) values ('A', true, 1, 1, 1),
																						 ('B', false, 1, 2, 6),
																						 ('C', true, 1, 3, 11),
																						 ('A', true, 1, 4, 13),
																						 ('A', false, 1, 5, 19),
																						 ('C', true, 1, 6, 22),
																						 ('B', true, 1, 7, 26),
																						 ('A', true, 1, 8, 29),
																						 ('B', false, 1, 9, 34),
																						 ('B', true, 1, 10, 38);

-- ATUALIZANDO O DESEMPENHO
update desempenho set pontuacao = (select count(*) from resposta where correta = true and fkDesempenho = 1) where idDesempenho = 1;

-- MUSICA
insert into musica (nome, duracao_musica) values ('Treacherous', 4.02);

-- ALBUM PERSONALIZADO
insert into album_personalizado (nome, qtd_musica, duracao_album, fkUsuario) values ('The Tortured Gabriel', 1, 4.02, 1);

-- COMPOSIÇÃO
insert into composicao (fkAlbumPersonalizado, fkMusica) values (1, 1);

