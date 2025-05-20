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
insert into usuario (primeiro_nome, sobrenome, dtNascimento, cpf, email, senha, nickname, fkEndereco, fkSigno, fkEraFavorita, fkAlbumFavorito) values ('Gabriel', 'Castilho', '2004-05-20', 52437201866, 'gabrielcastilho08@gmail.com', 'badliar2004', 'ts1fan', 1, 2, 6, 3),
																																					  ('Joaquim', 'Souza', '2007-01-06', 03629758410, 'ycavalcanti@gmail.com', 'xuFEq4Vj$*', 'vmartins', 11, 12, 11, 1),
																																					  ('Francisco', 'Mendes', '1989-07-28', 84127935600, 'lavinia62@lopes.com', 'Y&9Tu(jPDJ', 'pietrogoncalves', 27, 4, 5, 6),
																																					  ('Thiago', 'Castro', '2000-11-14', 97863214050, 'carlos-eduardo27@uol.com.br', 'bZ*uFyAt)6', 'jda-costa', 18, 2, 1, 7),
																																					  ('Pietro', 'Fogaça', '1984-08-12', 94156083748, 'bpinto@ig.com.br', 's1tpPpw)&r', 'da-cunhaolivia', 19, 3, 5, 8),
																																					  ('Juliana', 'Lima', '1994-06-08', 53710294860, 'bernardo11@uol.com.br', 'ICfB4Kgd_#', 'oda-mota', 16, 2, 2, 2),
																																					  ('Ryan', 'Martins', '2002-06-04', 58219637021, 'juan64@hotmail.com', '#O8(A)AmfP', 'ogoncalves', 27, 7, 1, 4),
																																					  ('Enzo', 'Vieira', '1990-08-11', 53746819075, 'mfernandes@gmail.com', 'A@5Ol&O@Va', 'rafaeldias', 20, 2, 6, 3),
																																					  ('Fernanda', 'Gomes', '1993-09-22', 47903615872, 'ana-freitas@hotmail.com', 'B9(ER4#mZ1', 'rodrigues.camila', 25, 6, 3, 10),
																																					  ('Isabela', 'Silva', '1998-12-10', 28934759168, 'lima.amanda@terra.com.br', '!YdL$#78', 'sofiadias', 17, 11, 7, 9),
																																					  ('Leonardo', 'Oliveira', '1991-03-30', 59384761230, 'davi.cardoso@gmail.com', 'Senha123*', 'enzo.machado', 9, 1, 4, 2),
																																					  ('Manuela', 'Correia', '1987-05-17', 43905718274, 'manu.correia@yahoo.com', '@ml8Plop0', 'manuc', 14, 5, 8, 1),
																																					  ('Luan', 'Nascimento', '2001-07-25', 32476812908, 'luan.nasc@hotmail.com', 'xUp92#kk', 'lnascimento', 2, 7, 6, 6),
																																					  ('Camila', 'Ramos', '1995-10-02', 83274561892, 'camiramos@globo.com', 'fG!3Oplm$', 'cramos', 7, 9, 10, 5),
																																					  ('Diego', 'Almeida', '1988-11-09', 57203498123, 'dalmeida@gmail.com', 'Hg*o7oo2', 'digogato', 23, 8, 4, 11),
																																					  ('Bruna', 'Costa', '1999-01-12', 60827419631, 'bruna.costa@uol.com.br', 'senhaSegura@', 'brubru', 1, 1, 3, 8),
																																					  ('Matheus', 'Rocha', '2003-04-15', 42718934028, 'matheus.rocha@hotmail.com', 'R4lG@xv!', 'matt', 4, 10, 2, 7),
																																					  ('Lívia', 'Carvalho', '1996-02-22', 61820496752, 'liv_carvalho@gmail.com', '2F@mdk82!', 'livy', 5, 3, 9, 3),
																																					  ('Bruno', 'Freitas', '1992-03-05', 72849031567, 'bfreitas@bol.com.br', 'BB@a2df$', 'bf', 6, 11, 2, 2),
																																					  ('Gabriela', 'Pereira', '1986-06-29', 91560283740, 'gabi@p.com', 'Gp@12345', 'gabizinha', 8, 12, 10, 9),
																																					  ('Carlos', 'Henrique', '1997-08-18', 87234059127, 'charles.h@outlook.com', 'CH@pass3', 'ch', 3, 4, 5, 4),
																																					  ('Renata', 'Dias', '2000-12-24', 10239476548, 'renata.dias@gmail.com', 'Re@dia4', 'reny', 13, 5, 1, 1),
																																					  ('Eduardo', 'Ferreira', '1993-09-30', 21394857602, 'edu.ferreira@yahoo.com', 'Ed@2020$', 'duduf', 12, 9, 7, 10),
																																					  ('Luiza', 'Monteiro', '1995-01-27', 37485910362, 'luiza.mont@globo.com', 'Lu#mt98!', 'lu', 10, 2, 8, 2),
																																					  ('Arthur', 'Melo', '1990-05-21', 65730298412, 'arthur.melo@uol.com', 'ArMelo@2021', 'arth', 15, 6, 6, 5),
																																					  ('Helena', 'Nogueira', '1998-03-19', 73284961045, 'helena.nog@gmail.com', 'HelN@123', 'helen', 21, 7, 3, 6),
																																					  ('Sofia', 'Machado', '2004-07-03', 19823746509, 'sof.machado@ig.com.br', 'Sf@mach44', 'sofi', 26, 4, 2, 11),
																																					  ('Miguel', 'Teixeira', '1999-10-16', 84392018576, 'mig.teixeira@outlook.com', 'MgT#zxc1', 'mig', 27, 8, 5, 3),
																																					  ('Larissa', 'Barros', '1994-11-11', 37492018763, 'larissa_b@hotmail.com', 'Lb@11!!', 'lari', 24, 3, 9, 7),
																																					  ('Lucas', 'Alves', '1992-09-05', 92038476028, 'lucasalves@gmail.com', 'Luc@lzxc1', 'lucalv', 22, 10, 7, 8),
																																					  ('Marina', 'Pinto', '1996-12-13', 67301928467, 'marina.p@uol.com', 'Mar@pint!', 'mari', 27, 11, 11, 10),
																																					  ('Amanda', 'Vieira', '1997-10-14', 12345678901, 'amanda.vieira@email.com', 'Am@2022$', 'amandav', 1, 5, 3, 8),
																																					  ('Caio', 'Fernandes', '1988-02-05', 98765432109, 'caiof88@gmail.com', 'Ca!o1988', 'cf88', 2, 1, 11, 4),
																																					  ('Beatriz', 'Souza', '2000-07-23', 10293847561, 'bia.souza@hotmail.com', 'Bia@July23', 'bihsouza', 3, 7, 5, 6),
																																					  ('Lucas', 'Mendes', '1995-09-30', 38475619283, 'lucasm@gmail.com', 'L#uM95', 'lukem', 4, 9, 2, 1),
																																					  ('Juliana', 'Campos', '1992-03-19', 56789012345, 'jcampos@gmail.com', 'Ju!12345', 'julisc', 5, 3, 4, 9),
																																					  ('Pedro', 'Nascimento', '1990-11-11', 74839201938, 'pedro.nasc@yahoo.com', 'Pn#90!', 'pedrin', 6, 11, 7, 2),
																																					  ('Tatiane', 'Oliveira', '1999-05-27', 90817263549, 'tatiane.o@terra.com.br', 'Tat#1999', 'tatoolive', 7, 6, 1, 10),
																																					  ('Rafael', 'Correia', '1994-12-03', 91827364501, 'rafaelcorreia@uol.com', 'Ra@cor123', 'rafcor', 8, 4, 8, 11),
																																					  ('Larissa', 'Barros', '1998-06-08', 70819283746, 'laribarros@gmail.com', 'La#June98', 'lari.b', 9, 2, 6, 5),
																																					  ('Gabriel', 'Martins', '2001-04-15', 61928374655, 'gmartins@outlook.com', 'GabMart@04', 'gm', 10, 12, 10, 3),
																																					  ('Daniela', 'Silveira', '1986-01-29', 52738492018, 'danisilveira@hotmail.com', 'Dan@1986', 'danis', 11, 8, 9, 6),
																																					  ('Felipe', 'Ramos', '1993-03-04', 40293847561, 'feliperamos@gmail.com', 'Fel!ram3', 'f.ramos', 12, 10, 2, 7),
																																					  ('Camila', 'Gomes', '1996-07-11', 89374618273, 'camilagomes@ig.com', 'CamG@96', 'cammy', 13, 1, 11, 11),
																																					  ('Rodrigo', 'Costa', '1991-08-19', 39183746502, 'rodrigo.costa@gmail.com', 'RodC@1991', 'rodc', 14, 7, 6, 4),
																																					  ('Letícia', 'Moura', '1989-05-05', 71628394012, 'letimoura@gmail.com', 'Let@89!', 'lemoura', 15, 6, 11, 9),
																																					  ('Henrique', 'Pereira', '1997-02-22', 98374615293, 'henrique.p@live.com', 'HenP@22', 'hper', 16, 3, 7, 1),
																																					  ('Vanessa', 'Alves', '2002-09-09', 65738291027, 'vanessa.alves@gmail.com', 'Van@2002', 'valves', 17, 5, 9, 8),
																																					  ('Vinícius', 'Lima', '1995-06-14', 20394857639, 'vinilima@globo.com', 'Vi@95#', 'vnlima', 18, 12, 5, 10),
																																					  ('Carla', 'Machado', '1990-10-25', 72836491203, 'carla.machado@bol.com.br', 'CarM@1990', 'carmach', 19, 9, 1, 2),
																																					  ('Otávio', 'Teixeira', '1987-01-07', 87236401928, 'otavio.tex@hotmail.com', 'Ota#Tex87', 'otavinhot', 20, 8, 4, 11),
																																					  ('Isabel', 'Rocha', '1999-12-01', 62837491027, 'isabel.rocha@terra.com.br', 'IsaRo@99', 'isabella', 21, 11, 6, 3),
																																					  ('Bruno', 'Farias', '2000-03-13', 38274618290, 'brunof@gmail.com', 'BrF@2000', 'bfari', 22, 4, 10, 7),
																																					  ('Paula', 'Novaes', '1988-04-20', 73829103475, 'paulanovaes@yahoo.com', 'P@ulNova88', 'paulan', 23, 2, 8, 11),
																																					  ('Eduarda', 'Cavalcante', '1993-08-26', 59283746519, 'edu.cav@gmail.com', 'E@Cava93', 'dudac', 24, 10, 3, 5),
																																					  ('Fábio', 'Barbosa', '1985-06-17', 31827364592, 'fabio.barbosa@hotmail.com', 'Fab@1985', 'fbarbs', 25, 6, 11, 6),
																																					  ('Patrícia', 'Lopes', '2003-11-29', 74819283745, 'patlopes@uol.com.br', 'Pat@03!29', 'patyl', 26, 7, 5, 2),
																																					  ('Marcelo', 'Santana', '1992-01-03', 10293846572, 'msantana@gmail.com', 'Marc@92', 'marcelos', 27, 5, 10, 8),
																																					  ('Renan', 'Araújo', '1998-10-09', 27364591820, 'renan.araujo@globo.com', 'Re@1998!', 'renao', 1, 3, 1, 9),
																																					  ('Natalia', 'Freire', '1996-12-18', 38475620193, 'nataliaf@gmail.com', 'Naty@96', 'nfreire', 2, 1, 2, 10),
																																					  ('Ana', 'Silva', '2001-08-10', 12345678901, 'ana.silva@email.com', 'senhaana123', 'anas', 5, 7, 2, 8),
																																					  ('Pedro', 'Souza', '1999-11-25', 98765432109, 'pedro.souza@email.com', 'pedrinho99', 'pedros', 12, 1, 9, 1),
																																					  ('Laura', 'Santos', '2003-03-01', 11223344556, 'laura.santos@email.com', 'laurinha03', 'lau', 18, 4, 5, 11),
																																					  ('Lucas', 'Oliveira', '2000-07-15', 55443322110, 'lucas.oliveira@email.com', 'lucas_o', 'lucas_o', 23, 10, 1, 4),
																																					  ('Sofia', 'Costa', '2002-09-30', 66778899001, 'sofia.costa@email.com', 'sofiac', 'sofiaa', 2, 12, 8, 6),
																																					  ('Mateus', 'Ferreira', '1998-04-05', 22334455667, 'mateus.ferreira@email.com', 'mateusf', 'mat', 7, 3, 11, 2),
																																					  ('Isabela', 'Pereira', '2004-12-20', 88990011223, 'isabela.pereira@email.com', 'isabelap', 'isa', 14, 6, 3, 9),
																																					  ('Thiago', 'Rodrigues', '2001-01-28', 33445566778, 'thiago.rodrigues@email.com', 'thiagor', 'thi', 19, 9, 7, 5),
																																					  ('Mariana', 'Alves', '1997-05-10', 77889900112, 'mariana.alves@email.com', 'marianaa', 'mariii', 25, 2, 4, 10),
																																					  ('Bruno', 'Martins', '2003-11-15', 44556677889, 'bruno.martins@email.com', 'brunom', 'bru', 1, 5, 10, 7),
																																					  ('Amanda', 'Gomes', '2000-03-22', 99001122334, 'amanda.gomes@email.com', 'amandag', 'ama', 6, 8, 1, 3),
																																					  ('Rafael', 'Carvalho', '2002-07-01', 11223344550, 'rafael.carvalho@email.com', 'rafaelc', 'rafa', 11, 11, 9, 1),
																																					  ('Juliana', 'Ribeiro', '1998-09-18', 55667788991, 'juliana.ribeiro@email.com', 'julianar', 'juli', 17, 1, 6, 11),
																																					  ('Vinicius', 'Barbosa', '2004-01-05', 22334455662, 'vinicius.barbosa@email.com', 'viniciusb', 'vini', 22, 4, 3, 2),
																																					  ('Camila', 'Castro', '2001-05-20', 77889900113, 'camila.castro@email.com', 'camilac', 'cami', 27, 7, 10, 9),
																																					  ('Gustavo', 'Dias', '1999-12-30', 33445566774, 'gustavo.dias@email.com', 'gustavod', 'guga', 3, 10, 1, 5),
																																					  ('Beatriz', 'Fernandes', '2003-04-12', 88990011225, 'beatriz.fernandes@email.com', 'beatrizf', 'bia', 8, 12, 8, 7),
																																					  ('Leonardo', 'Lima', '2000-08-25', 44556677886, 'leonardo.lima@email.com', 'leonardol', 'leo', 15, 2, 5, 1),
																																					  ('Fernanda', 'Melo', '2002-11-01', 99001122337, 'fernanda.melo@email.com', 'fernandam', 'fer', 20, 6, 11, 4),
																																					  ('Daniel', 'Nunes', '1998-02-14', 11223344558, 'daniel.nunes@email.com', 'danieln', 'dani', 26, 9, 2, 10),
																																					  ('Patrícia', 'Pinto', '2004-06-08', 55667788999, 'patricia.pinto@email.com', 'patriciap', 'pati', 4, 1, 9, 6),
																																					  ('Rodrigo', 'Correia', '2001-09-22', 22334455660, 'rodrigo.correia@email.com', 'rodrigoc', 'rodrigo', 9, 4, 3, 11),
																																					  ('Natália', 'Vieira', '1997-07-01', 77889900111, 'natalia.vieira@email.com', 'nataliav', 'nati', 16, 7, 10, 2),
																																					  ('Marcelo', 'Sousa', '2003-01-18', 33445566772, 'marcelo.sousa@email.com', 'marcelos', 'marcelo', 21, 10, 1, 8),
																																					  ('Carolina', 'Teixeira', '2000-04-25', 88990011223, 'carolina.teixeira@email.com', 'carolinat', 'carol', 27, 12, 8, 5),
																																					  ('Eduardo', 'Sales', '2002-08-12', 44556677884, 'eduardo.sales@email.com', 'eduardos', 'edu', 1, 3, 5, 9),
																																					  ('Aline', 'Rocha', '1998-11-05', 99001122335, 'aline.rocha@email.com', 'aliner', 'aline', 6, 6, 11, 7),
																																					  ('Ricardo', 'Moraes', '2004-03-10', 11223344556, 'ricardo.moraes@email.com', 'ricardom', 'rica', 13, 9, 2, 1),
																																					  ('Letícia', 'Cavalcanti', '2001-06-22', 55667788997, 'leticia.cavalcanti@email.com', 'leticiac', 'le', 18, 2, 9, 4),
																																					  ('Sérgio', 'Peixoto', '1999-09-01', 22334455668, 'sergio.peixoto@email.com', 'sergiop', 'sergio', 24, 5, 3, 10),
																																					  ('Raquel', 'Bueno', '2003-02-15', 77889900119, 'raquel.bueno@email.com', 'raquelb', 'raquel', 2, 8, 7, 6),
																																					  ('Felipe', 'Domingues', '2000-07-28', 33445566770, 'felipe.domingues@email.com', 'feliped', 'felipe', 7, 11, 4, 11),
																																					  ('Cláudia', 'Nascimento', '2002-12-01', 88990011221, 'claudia.nascimento@email.com', 'claudian', 'clau', 14, 1, 10, 2),
																																					  ('Vinícius', 'Lopes', '1998-05-05', 44556677882, 'vinicius.lopes@email.com', 'viniciusl', 'vini_l', 19, 4, 1, 8),
																																					  ('Bianca', 'Azevedo', '2004-09-10', 99001122333, 'bianca.azevedo@email.com', 'biancaa', 'bia_a', 25, 7, 8, 5),
																																					  ('Thiago', 'Costa', '2001-01-20', 11223344554, 'thiago.costa2@email.com', 'thiagoc2', 'thiago2', 5, 10, 5, 9),
																																					  ('Juliana', 'Mendes', '1997-11-25', 55667788995, 'juliana.mendes@email.com', 'julianam', 'juli_m', 12, 12, 11, 7),
																																					  ('Marcelo', 'Pereira', '2003-03-01', 22334455666, 'marcelo.pereira@email.com', 'marcelop', 'marcelop', 18, 2, 3, 1),
																																					  ('Sofia', 'Almeida', '2000-07-15', 77889900117, 'sofia.almeida@email.com', 'sofiaa', 'sofi_a', 23, 6, 7, 4),
																																					  ('Lucas', 'Rocha', '2002-09-30', 33445566778, 'lucas.rocha2@email.com', 'lucasr2', 'lucasr', 2, 9, 2, 10),
																																					  ('Isabela', 'Gomes', '1998-04-05', 88990011229, 'isabela.gomes@email.com', 'isabelag', 'isa_g', 7, 1, 9, 3);
                                                                                                                                                    
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

