window.onload = function () {

                                    // Timeline
    var datas = [2006, 2010, 2014, 2016, 2017, 2019, 2020, 2021, 2021, 2022, 2023, 2023, 2024, 2025]
    var titulos = [
        'Lançamento do Álbum de Estreia "Taylor Swift"',
        'Vitória no Grammy com "Fearless"',
        'Transição para o Pop com "1989"',
        'Cancelamento Público Após Polêmica com Kanye West e Kim Kardashian',
        'Vitória no Processo por Assédio Sexual',
        'Disputa pelos Direitos de Seus Masters',
        'Lançamento Surpresa de "Folklore"',
        'Início das Regravações com Fearless (Taylor’s Version)',
        'Taylor Swift Ganha o Global Icon Award no BRITs',
        'Reconhecimento Acadêmico',
        'Início da "The Eras Tour"',
        'Tornou-se Bilionária',
        'Taylor Swift Faz História com 4º Álbum do Ano no Grammy',
        'Taylor Swift recupera suas masters'
    ]
    var conteudos = [
        'Taylor Swift lançou seu álbum de estreia autointitulado, apresentando-se como uma jovem cantora country com talento promissor. A faixa "Tim McGraw" destacou-se, marcando o início de sua jornada musical.',
        'Taylor tornou-se a artista mais jovem a ganhar o Grammy de "Álbum do Ano" com "Fearless", consolidando sua posição como uma das principais cantoras e compositoras da música country.',
        'Com o lançamento de "1989", Taylor migrou do country para o pop, apresentando hits como "Shake It Off" e "Blank Space". O álbum foi um sucesso comercial e crítico, vencendo o Grammy de "Álbum do Ano".',
        'Taylor enfrentou intensa reação pública após Kim Kardashian divulgar gravações que supostamente mostravam Taylor aprovando a letra de "Famous", de Kanye West — música na qual ele dizia que "fez aquela vadia famosa". Kim a chamou de "falsa" e lançou a hashtag #TaylorSwiftIsOverParty, que viralizou. Taylor sumiu da mídia por um ano, o que afetou fortemente sua imagem pública. Mais tarde, ela revelou que passou por um período difícil de saúde mental e se reinventou completamente com o álbum "Reputation".',
        'Taylor enfrentou e venceu um processo judicial contra um ex-DJ que a assediou durante um meet and greet. Ela buscou apenas US$1 em danos simbólicos, destacando a importância de defender vítimas de assédio.',
        'Após a venda de sua antiga gravadora, Taylor perdeu os direitos sobre os masters de seus primeiros álbuns. Em resposta, iniciou a regravação desses álbuns para recuperar o controle sobre sua música.',
        'Durante a pandemia, Taylor lançou "Folklore", um álbum introspectivo e alternativo que recebeu aclamação crítica e comercial, vencendo o Grammy de "Álbum do Ano".',
        'Após uma disputa pelos direitos de seus álbuns antigos, Taylor decidiu regravar todo o seu catálogo até Reputation para recuperar o controle sobre suas músicas. O projeto começou com o lançamento de Fearless (Taylor’s Version), provando seu poder artístico e comercial. Foi um movimento histórico de resistência contra a indústria.',
        'Taylor foi homenageada no BRIT Awards com o prêmio de Ícone Global, se tornando a primeira mulher e primeira artista não britânica a receber esse reconhecimento. O prêmio celebrou sua influência mundial, resiliência e impacto cultural.',
        'Universidades como NYU e UT Austin introduziram cursos focados na obra de Taylor, reconhecendo sua influência na música e na cultura contemporânea.',
        'Taylor iniciou a "The Eras Tour", uma celebração de sua carreira musical. A turnê tornou-se a mais lucrativa da história, arrecadando mais de US$1 bilhão.',
        'Com o sucesso de sua turnê e regravações, Taylor atingiu um patrimônio líquido estimado em US$1,6 bilhão, tornando-se a primeira artista a alcançar esse marco com base exclusivamente em sua música.',
        'Em 2024, Taylor venceu o Grammy de Álbum do Ano por Midnights, se tornando a primeira artista da história a ganhar essa categoria quatro vezes. A vitória consolidou seu legado como uma das maiores compositoras e artistas de todos os tempos.',
        'Na última sexta-feira, dia 30 de maio, a cantora Taylor Swift anunciou que recuperou os direitos de suas gravações originais via post no Instagram. As masters de seus seis primeiros álbuns foram vendidos em 2019 por sua antiga gravadora, a Big Machine Records, e desde então a pop star transformou a disputa em uma missão pessoal — e pública — pela autonomia artística.'
    ]
    var conteudoTimeline = ''

    for(var i = 0; i < datas.length; i++){
        conteudoTimeline += 
        `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">${datas[i]}</div>
                <div class="timeline-content">
                    <h3>${titulos[i]}</h3>
                    <p>${conteudos[i]}</p>
                </div>
            </div>
        `
    }

    timeline.innerHTML = 
    `
        <div class="timeline-items">
            ${conteudoTimeline}
        </div>
    `    
    

                                    // Álbuns
    var div_albuns = document.getElementById("div_albuns");

    var albuns = ['Taylor Swift', 'Fearless', 'Speak Now', 'Red', '1989', 'reputation', 'Lover', 'folklore', 'evermore', 'Fearless (Taylors Version)', 'Red (Taylors Version)','Midnights', 'Speak Now (Taylors Version)', '1989 (Taylors Version)', 'The Tortured Poets Department']
    var classAlbuns = ['debut', 'fearless', 'speak_now', 'red', 'pop', 'reputation', 'lover', 'folklore', 'evermore', 'fearless_tv', 'red_tv', 'midnights', 'speak_now_tv', 'pop_tv', 'ttpd']
    var anoLancamento = [2006, 2008, 2010, 2012, 2014, 2017, 2019, 2020, 2020, 2021, 2021, 2022, 2023, 2023, 2024]
    var qtdMusicas = [15, 19, 14, 16, 13, 15, 18, 17, 17, 26, 30, 23, 22, 22, 31]
    var qtdStramings = ['X', 'X', 'X', 'X', 'X', 'X', '55.000,000', '80.600,000', '67.360,000', '50.200,000', '90.800,000', '185.600,000', '126.300,000', '176.100,000', '313.700,000']
    var musicaMaisFamosa = ['Our Song', 'Love Story', 'Enchanted', 'I Knew You Were Touble', 'Blank Space', 'Dont Blame Me', 'Cruel Summer', 'cardigan', 'willow', 'Love Story', 'All Too Well (10 Minutes Version)', 'Anti-Hero', 'Enchanted', 'Wildest Dreams', 'Fortnight']
    var infoAlbum = ''
    var conteudoAlbum = ''

    for (var i = 0; i < albuns.length; i++) {
        if (albuns[i] == 'Taylor Swift') {
            infoAlbum = 'O álbum de estreia é puro country adolescente, recheado de composições sinceras que ela escreveu ainda no ensino médio. Com faixas como Teardrops on My Guitar e Our Song, Taylor se destacou por colocar emoções juvenis em letras afiadas e acessíveis. Ele foi a fundação de sua carreira — e já ali ela mostrou que era uma compositora fora do comum, se tornando uma voz da nova geração country.'
        } else if (albuns[i] == 'Fearless') {
            infoAlbum = 'Aqui ela começou a se aventurar no pop sem abandonar o country. Com hinos como Love Story e You Belong With Me, o álbum virou um fenômeno global. Fearless levou Taylor ao Grammy de Álbum do Ano e consolidou sua imagem como uma superestrela. Foi a ponte entre a menina do interior e o estrelato mundial — tudo isso com autenticidade e uma estética de conto de fadas.'
        } else if (albuns[i] == 'Speak Now') {
            infoAlbum = 'Escrito 100% por ela, Speak Now é um manifesto de independência criativa. Em músicas como Back to December e Enchanted, ela se mostra mais madura, tanto nas emoções quanto nas composições. A estética romântica permanece, mas com mais dor, vingança e reflexão. Foi um marco onde ela se provou como artista completa, sem precisar de coautores pra brilhar.'
        } else if (albuns[i] == 'Red') {
            infoAlbum = 'Uma montanha-russa emocional e sonora. Taylor mistura country, pop e rock alternativo em um dos álbuns mais intensos da carreira. All Too Well virou uma lenda viva, e I Knew You Were Trouble mostrou sua ousadia pop. Red é sobre amor em estado bruto — e provou que ela podia ser vulnerável e experimental ao mesmo tempo, sem perder o impacto.'
        } else if (albuns[i] == '1989') {
            infoAlbum = 'Seu primeiro álbum 100% pop, com um visual inspirado nos anos 80 e uma produção impecável. Blank Space, Style e Out of the Woods dominaram as paradas e os clipes. 1989 marcou sua reinvenção definitiva, e o Grammy de Álbum do Ano selou seu sucesso na nova fase. Foi um divisor de águas que a estabeleceu como ícone pop global, sem amarras.'
        } else if (albuns[i] == 'reputation') {
            infoAlbum = 'Com estética sombria e batidas eletrônicas, reputation é o grito de guerra de uma artista que enfrentou o colapso da própria imagem pública. Look What You Made Me Do e Delicate mostram o contraste entre armadura e vulnerabilidade. Mais do que um recomeço, é um manifesto sobre sobrevivência, imagem e amor em meio ao caos midiático.'
        } else if (albuns[i] == 'Lover') {
            infoAlbum = 'Um sopro de cor e romance após a tempestade. Taylor abraça o pop com leveza, mas também com maturidade. Lover, Cruel Summer e The Archer refletem diferentes tons do amor — do ideal ao imperfeito. Esse foi o primeiro álbum lançado sob total controle dela, simbolizando liberdade artística e pessoal. Um retorno à luz, mas com consciência.'
        } else if (albuns[i] == 'folklore') {
            infoAlbum = 'Durante a pandemia, Taylor se voltou pra dentro. folklore é introspectivo, delicado e repleto de histórias fictícias. Com sonoridade indie e produção intimista, canções como cardigan e the 1 revelam uma compositora em seu auge poético. O álbum venceu o Grammy de Álbum do Ano e mostrou que, mesmo longe dos holofotes, ela podia brilhar como nunca.'
        } else if (albuns[i] == 'evermore') {
            infoAlbum = 'Lançado como “irmão” de folklore, evermore aprofunda o universo lírico e melancólico da era alternativa. champagne problems e tolerate it são exemplos de sua habilidade de contar histórias com brutal beleza. Se o anterior foi um refúgio, este é a permanência voluntária ali. Foi a prova de que Taylor não estava apenas experimentando — ela estava evoluindo.'
        }else if (albuns[i] == 'Fearless (Taylors Version)'){
            infoAlbum = 'O primeiro relançamento marcou o início da reapropriação da sua discografia. Taylor reviveu o clássico do country-pop com nova maturidade vocal e produção mais limpa, sem perder a essência mágica de contos de fadas. Com as faixas From The Vault, ela presenteou os fãs com músicas inéditas que pareciam tesouros guardados desde 2008. Foi uma declaração clara: “meu trabalho, minhas regras”.'
        }else if (albuns[i] == 'Red (Taylors Version)'){
            infoAlbum = 'Talvez o mais emocional dos relançamentos, Red (TV) virou um evento cultural. Com a aguardada All Too Well (10 Minute Version) e clipe dirigido por ela mesma, Taylor reconstruiu um dos álbuns mais icônicos da carreira com dor refinada, produção superior e intensidade ainda maior.'
        }else if (albuns[i] == 'Midnights') {
            infoAlbum = 'Um álbum sobre pensamentos que surgem nas madrugadas, Midnights mistura pop moderno com reflexões pessoais. De Anti-Hero a Midnight Rain, ela fala de inseguranças, fama, ego e amores perdidos. Foi um sucesso estrondoso de vendas e streaming, mostrando que Taylor ainda dita as regras no pop — e pode ser confessional sem perder a mão comercial.'
        }else if (albuns[i] == 'Speak Now (Taylors Version)'){
            infoAlbum = 'O relançamento de seu álbum 100% escrito por ela veio como um tributo à própria independência criativa. Com faixas grandiosas e intensas, Taylor trouxe maturidade emocional às letras que antes pareciam de uma adolescente apaixonada — agora com tons mais reflexivos e seguros. As From The Vault expandiram ainda mais o universo da era, com participações inusitadas como Fall Out Boy e Hayley Williams.'
        }else if (albuns[i] == '1989 (Taylors Version)'){
            infoAlbum = 'O álbum pop que virou referência em toda uma geração ganhou nova vida com vocais polidos, produções mais suaves e uma seleção From The Vault que trouxe ainda mais coesão à era. Mesmo sem colaborações externas, Taylor conseguiu dar um frescor nostálgico ao maior sucesso comercial da sua carreira.'
        }else {
            infoAlbum = 'Esse é um mergulho profundo em feridas abertas. Com um pé na poesia e outro no synthpop sombrio, Taylor expõe angústias, ressentimentos e memórias marcantes. Fortnight, So Long, London e Florida!!! exploram relacionamentos desfeitos e o peso de ser quem ela é. TTPD é denso, elegante e literário — marca uma fase de total domínio narrativo, artístico e emocional.'
        }

        conteudoAlbum +=
            `
            <div class="album">
                <div class="img_album_${classAlbuns[i]}"></div>
                <div class="info_album">
                    <h3>${albuns[i]}</h3>
                    <p>${infoAlbum}</p>
                </div>
                <div class="dados_album">
                    <ul>
                        <li><b>Ano de lançamento: </b>${anoLancamento[i]}</li>
                        <li><b>Quantidade de músicas: </b>${qtdMusicas[i]}</li>
                        <li><b>Quantidade de streamings no primeiro dia: </b>${qtdStramings[i]}</li>
                        <li><b>Música mais famosa: </b>${musicaMaisFamosa[i]}</li>
                    </ul>
                </div>
            </div>
        `
    }

    div_albuns.innerHTML = conteudoAlbum


                                // Turnês
    var div_turnes = document.getElementById("div_turnes")

    var turnes = ['Fearless Tour', 'Speak Now World Tour', 'The Red Tour', 'The 1989 World Tour', 'Reputation Stadium Tour', 'The Eras Tour']
    var classTurnes = ['fearless_tour', 'speak_now_tour', 'red_tour', '1989_tour', 'reputation_tour', 'the_eras_tour']

    var conteudoTour = ''
    
    for (var i = 0; i < turnes.length; i++) {

        var infoTour = ''
        var dadosTour = ''
    
        if (turnes[i] == 'Fearless Tour') {
            infoTour = 'A primeira turnê mundial da Taylor, baseada no álbum Fearless, marcou sua transição definitiva do country para o mainstream. Com cenários que remetiam a contos de fadas, vestidos de princesa e violões com glitter, Taylor encantava com autenticidade e emoção crua.'
            dadosTour = 
            `
                <li><b>Países</b>: Estados Unidos, Canadá, Inglaterra, Austrália, Japão e Bahamas</li>
                <li><b>Shows</b>: 118</li>
                <li><b>Público total</b>: 1.207.887 pessoas</li>
                <li><b>Arrecadação</b>: US$ 66,5 milhões</li>
            `
        } else if (turnes[i] == 'Speak Now World Tour') {
            infoTour = 'A Speak Now Tour foi sua primeira grande produção autoral. Com performances teatrais e elementos de conto de fadas e drama, ela trouxe um espetáculo mais visual, incorporando narrativa e coreografia pela primeira vez.'
            dadosTour = 
            `
                <li><b>Países</b>: Estados Unidos, Canadá, Austrália, Nova Zelândia, Singapura, Japão, Coreia do Sul, Filipinas, Hong Kong, Bélgica, Noruega, Alemanha, Países Baixos, Itália, França, Espanha, Inglaterra, Irlanda e Irlanda do Norte</li>
                <li><b>Shows</b>: 110</li>
                <li><b>Público total</b>: 1.642.435 pessoas</li>
                <li><b>Arrecadação</b>: US$ 123,7 milhões</li>
            `
        } else if (turnes[i] == 'The Red Tour') {
            infoTour = 'A Red Tour foi quando Taylor começou a flertar com o pop de forma mais intensa. As apresentações misturavam momentos intimistas e performances energéticas com fogos, luzes e um tom mais maduro.'
            dadosTour = 
            `
                <li><b>Países</b>: Estados Unidos, Canadá, Nova Zelândia, Austrália, Reino Unido, Alemanha, China, Japão, Indonésia, Filipinas, Singapura e Malásia</li>
                <li><b>Shows</b>: 86</li>
                <li><b>Público total</b>: 1.700.000 pessoas</li>
                <li><b>Arrecadação</b>: US$ 150,2 milhões</li>
            `
        } else if (turnes[i] == 'The 1989 World Tour') {
            infoTour = 'Com um ar futurista e pop maximalista, a 1989 Tour foi uma explosão de hits dançantes, visuais brilhantes e participações especiais. Taylor trocou o violão por sintetizadores e palco com passarela elevada.'
            dadosTour = 
            `
                <li><b>Países</b>: Japão, Estados Unidos, Alemanha, Países Baixos, Escócia, Inglaterra, Irlanda, Canadá, Singapura, China e Austrália</li>
                <li><b>Shows</b>: 85</li>
                <li><b>Público total</b>: 2.280.000 pessoas</li>
                <li><b>Arrecadação</b>: US$ 250,7 milhões</li>
            `
        } else if (turnes[i] == 'Reputation Stadium Tour') {
            infoTour = 'Sombria, poderosa e cheia de atitude, essa turnê foi uma resposta direta à era de polêmicas que Taylor enfrentou. Com cobras gigantes, chamas e coreografias ousadas, ela usou a estética de vingança com força.'
            dadosTour = 
            `
                <li><b>Países</b>: Estados Unidos, Inglaterra, Irlanda, Canadá, Austrália, Nova Zelândia e Japão</li>
                <li><b>Shows</b>: 53</li>
                <li><b>Público total</b>: 2.888.922 pessoas</li>
                <li><b>Arrecadação</b>: US$ 345,7 milhões</li>
            `
        } else {
            infoTour = 'Mais do que um show, The Eras Tour é um fenômeno cultural sem precedentes — uma celebração épica de todas as fases da carreira de Taylor Swift. Com figurinos deslumbrantes, cenários meticulosamente elaborados e setlists que atravessam mais de uma década de sucessos, a turnê redefine o que significa espetáculo no mundo da música. Reconhecida como a maior turnê da história, tanto em impacto quanto em arrecadação, ela eterniza o legado de uma artista no auge de seu poder criativo'
            dadosTour = 
            `
                <li><b>Países</b>: Estados Unidos, México, Argentina, Brasil, Japão, Austrália, Singapura, França, Suécia, Portugal e Espanha</li>
                <li><b>Shows</b>: 149</li>
                <li><b>Público total</b>: 10.168.008 pessoas</li>
                <li><b>Arrecadação</b>: US$ 2,077 bilhões</li>
            `
        }
    
        if (i % 2 === 0) {
            conteudoTour += 
            `
                <div class="tour">
                <div class="img_tour_${classTurnes[i]}"></div>
                    <div class="info_tour">
                        <h3>${turnes[i]}</h3>
                        <p>${infoTour}</p>
                        <div class="dados_tour">
                            <ul>${dadosTour}</ul>
                        </div>
                    </div>
                </div>
            `
        } else {
            conteudoTour += 
            `
                <div class="tour">
                    <div class="info_tour">
                        <h3>${turnes[i]}</h3>
                        <p>${infoTour}</p>
                        <div class="dados_tour">
                            <ul>${dadosTour}</ul>
                        </div>
                    </div>
                    <div class="img_tour_${classTurnes[i]}"></div>
                </div>
            `
        }
    }
    
    div_turnes.innerHTML = conteudoTour
    

                                    // Prêmios
    var videos = ['videos/album do ano.mp4', 'videos/global-icon.mp4', 'videos/the-eras-tour.mp4']
    
    var titulosPremios = [
        'Em 2024, Taylor Swift fez história ao se tornar a primeira artista a vencer o prêmio de Álbum do Ano quatro vezes no Grammy, com o aclamado Midnights.',
        'Em 2021, Taylor Swift foi homenageada com o prêmio Global Icon no BRIT Awards, tornando-se a primeira mulher e a primeira artista internacional a receber essa distinção, que é a mais alta honraria concedida pela indústria fonográfica britânica.',
        'Com a The Eras Tour, a Taylor Swift fez história ao realizar a turnê de maior bilheteria da história da música.'
    ]

    var conteudosPremios = [
        'Antes desse feito inédito, o recorde era de três vitórias e era compartilhado por três lendas da música: Frank Sinatra, Paul Simon e Stevie Wonder.',
        'Antes dela, apenas artistas britânicos como Elton John, David Bowie e Robbie Williams haviam recebido esse reconhecimento. Esse prêmio consolidou ainda mais a posição de Taylor Swift como uma das artistas mais influentes de sua geração, reconhecida não apenas por seu talento musical, mas também por seu engajamento social e impacto cultural global.',
        'A turnê arrecadou mais de <strong>US$ 2 bilhões</strong> em vendas de ingressos, com mais de 10 milhões de fãs presentes ao redor do mundo. Ela contou com 149 shows espalhados por cinco continentes e apresentou uma média impressionante de 67 mil espectadores por noite. Para completar, o filme-concerto <em>"Taylor Swift: The Eras Tour"</em> também bateu recordes, arrecadando mais de <strong>US$ 260 milhões</strong> nas bilheteiras mundiais e se tornando o maior filme-concerto da história.'
    ]

    var conteudoPremio = ''

    for(var i = 0; i < videos.length; i++){
        conteudoPremio += 
        `
        <div class="container-premios">
            <div class="premio">
                <video controls class="video">
                    <source src="${videos[i]}" type="video/mp4"/>
                </video>
                <div class="text-premio">
                    <h3>${titulosPremios[i]}</h3>
                    <p>${conteudosPremios[i]}</p>
                </div>
            </div>
        </div>  
        `
    }
    div_premios.innerHTML = 
    `
        <div class="container-premios">
               ${conteudoPremio} 
        </div>
    `
}