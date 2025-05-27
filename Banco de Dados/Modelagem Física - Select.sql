-- Todos os usuários 
select * from usuario;

-- Inserindo dados nos campos "pontuacao_total" e "minutagem" 
update usuario set pontuacao_total = 20, minutagem = 10.4 where idUsuario = 1;

-- Nome completo, nickname, estado, signo, álbum favorito, era favorita e música favorita
select concat(u.primeiro_nome, ' ',u.sobrenome) as 'nome',
	   u.nickname as 'nickname',
       es.nome as 'estado',
       s.nome_signo as 'signo',
       a.nome_album as 'álbum favorito',
       er.nome_era as 'era favorita',
       u.musica_favorita as 'música favorita'
from usuario u 
inner join endereco e on u.fkEndereco = e.idEndereco
inner join estado es on e.fkEstado = es.idEstado
inner join signo s on s.idSigno = u.fkSigno
inner join album a on a.idAlbum = u.fkAlbumFavorito
inner join era er on er.idEra = u.fkEraFavorita;

-- Quantidade de pessoas por estado
create view vw_quantidade_pessoas_por_estado as 
select es.nome as 'nome do estado',
	   count(e.idEndereco) as 'total de endereços'
from endereco e
left join estado es on es.idEstado = e.fkEstado 
group by es.nome;

-- Eras favoritas dos usuários
create view vw_era_favorita_por_usuario as
select e.nome_era as 'nome da era',
       count(u.fkEraFavorita) as 'era favorita'
from usuario u 
inner join era e on u.fkEraFavorita = e.idEra
group by e.nome_era;

select e.nome_era as NomeEra,
	   a.nome_album as NomeAlbum,
       m.nome as NomeMusica,
       s.nome_signo as NomeSigno,
       u.idUsuario as IdUsuario,
       u.primeiro_nome as PrimeiroNome,
       u.sobrenome as Sobrenome,
       u.fkAvatar as FkAvatar
from usuario u
inner join era e on u.fkEraFavorita = e.idEra
inner join musica m on u.fkMusicaFavorita = m.idMusica
inner join album a on u.fkAlbumFavorito = a.idAlbum
inner join signo s on u.fkSigno = s.idSigno
where u.email = "gabriel.castilho@sptech.school" and u.senha = "badliar2004";

select pergunta, fkQuiz from pergunta;
select count(*) from quiz;
select * from usuario;

-- Signos que mais aparecem
select s.nome_signo AS Signo,
	   COUNT(u.idUsuario) AS QtdDeUsuarios
from signo s
left join usuario u ON s.idSigno = u.fkSigno
group by s.nome_signo
order by QtdDeUsuarios DESC;

-- Era favorita de cada estado
with votos_por_era_estado as (
    select 
        es.nome as nome_estado,
        er.nome_era as era_favorita,
        COUNT(*) as qtd_votos,
        row_number() over (partition by es.nome order by COUNT(*) desc, er.idEra) as posicao
    from usuario u
    inner join estado es ON u.fkEndereco = es.idEstado
    inner join era er ON u.fkEraFavorita = er.idEra
    group by es.nome, er.nome_era, er.idEra
)
select nome_estado, era_favorita, qtd_votos
from votos_por_era_estado
where posicao = 1;

WITH votos_por_album_estado AS (
    SELECT 
        e.nome AS nome_estado,
        a.nome_album AS album_favorito,
        COUNT(*) AS qtd_votos,
        ROW_NUMBER() OVER (
            PARTITION BY e.nome ORDER BY COUNT(*) DESC, a.idAlbum
        ) AS posicao
    FROM usuario u
    INNER JOIN estado e ON e.idEstado = u.fkEndereco
    INNER JOIN album a ON u.fkAlbumFavorito = a.idAlbum
    GROUP BY e.nome, a.nome_album, a.idAlbum
)
SELECT 
    nome_estado,
    album_favorito,
    qtd_votos
FROM votos_por_album_estado
WHERE posicao = 1
ORDER BY nome_estado;



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




