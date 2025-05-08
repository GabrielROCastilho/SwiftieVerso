-- Todos os usuários 
select * from usuario;

-- Inserindo dados nos campos "pontuacao_total" e "minutagem" 
update usuario set pontuacao_total = 20, minutagem = 10.4 where idUsuario = 1;

-- Dados do desempenho dos usuários no quiz de id 1
select u.nickname, 
	   d.pontuacao 
from usuario u
inner join desempenho d on u.idUsuario = d.fkUsuario
inner join quiz q on q.idQuiz = d.fkQuiz
where q.idQuiz = 1;


														/* DURAÇÃO TOTAL DO ÁLBUM */
-- Duração total dos álbum que os usuários criaram
create view vw_duracao_total_albuns as
select u.nickname, 
       ap.idAlbum,
       sum(duracao_musica) as duracao_album
from usuario u
inner join album_personalizado ap on u.idUsuario = ap.fkUsuario
inner join composicao c on ap.idAlbum = c.fkAlbumPersonalizado
inner join musica m on m.idMusica = c.fkMusica
group by u.nickname, ap.idAlbum;

-- Inserindo mais uma música no álbum
insert into musica (nome, duracao_musica) values ('Blank Space', 3.57);
insert into composicao (fkAlbumPersonalizado, fkMusica) values (1, 2);

-- Vendo de atualizou a duração total
select * from vw_duracao_total_albuns;


														/* TODAS AS MUSICAS DOS ÁLBUNS */
-- Todas as músicas do álbum de id = 1
create view vw_musicas_de_cada_album as
select u.nickname,
	   c.fkAlbumPersonalizado,
	   m.nome,
       m.duracao_musica
from usuario u
inner join album_personalizado ap on u.idUsuario = ap.fkUsuario
inner join composicao c on ap.idAlbum = c.fkAlbumPersonalizado
inner join musica m on c.fkMusica = m.idMusica
where c.fkAlbumPersonalizado = 1;

-- Inserindo mais uma música no álbum
insert into musica (nome, duracao_musica) values ('Never Grow Up', 4.57);
insert into composicao (fkAlbumPersonalizado, fkMusica) values (1, 4);

-- Vendo se atualizou a lista de músicas
select * from vw_musicas_de_cada_album;

