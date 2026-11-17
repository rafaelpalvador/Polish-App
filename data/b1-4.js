/* Polonês B1 — capítulos 7 e 8 (Busuu B1, cap. 4). */
COURSE.add('b1', {
  n: 7, gl: ['Naj', 'najgorszy', 'naj- na frente do comparativo forma o superlativo'],
  pl: 'Najgorsze wakacje', pt: 'Agência de viagem, férias desastrosas, primeiro encontro e comparações',
  busuu: ['At the travel agency', 'My worst holidays ever', 'The first date'],
  goals: ['Comparar ofertas de viagem: tańszy, najlepszy', 'Contar uma história no passado com aspecto', 'Ordenar fatos: zanim, po tym jak, kiedy, nagle', 'Falar de um primeiro encontro'],
  vocab: [
    { g: 'Na agência de viagem', w: [
      ['biuro podróży', 'agência de viagem', '', 'Kupiliśmy wycieczkę w *biurze podróży*.', 'Compramos o pacote numa agência de viagem.'],
      ['oferta', 'oferta', '', 'Ta *oferta* jest tańsza niż tamta.', 'Esta oferta é mais barata que aquela.'],
      ['wycieczka', 'excursão, pacote, passeio', '', 'To *wycieczka* na tydzień do Grecji.', 'É um pacote de uma semana para a Grécia.'],
      ['all inclusive', 'tudo incluído', '', 'Wolę hotel *all inclusive*.', 'Prefiro hotel com tudo incluído.'],
      ['last minute', 'última hora', '', 'Kupiłam wycieczkę *last minute*, było taniej.', 'Comprei um pacote de última hora, saiu mais barato.'],
      ['ubezpieczenie', 'seguro', '', 'Czy *ubezpieczenie* jest w cenie?', 'O seguro está incluído no preço?'],
      ['zakwaterowanie', 'hospedagem', '', '*Zakwaterowanie* w hotelu trzygwiazdkowym.', 'Hospedagem em hotel três estrelas.'],
      ['wyżywienie', 'alimentação, refeições', '', 'Cena obejmuje *wyżywienie*.', 'O preço inclui as refeições.'],
      ['polecić', 'recomendar', 'perf.', 'Co pani może nam *polecić*?', 'O que a senhora pode nos recomendar?'],
    ]},
    { g: 'Quando tudo dá errado', w: [
      ['odwołany', 'cancelado', '', 'Nasz lot został *odwołany*.', 'Nosso voo foi cancelado.'],
      ['zgubić', 'perder (objeto)', 'perf.', 'Linie lotnicze *zgubiły* mój bagaż.', 'A companhia aérea perdeu minha bagagem.'],
      ['ukraść', 'roubar', 'perf.; ukradł, ukradła', 'Na plaży ktoś *ukradł* mi portfel.', 'Na praia alguém roubou minha carteira.'],
      ['zatrucie pokarmowe', 'intoxicação alimentar', '', 'Drugiego dnia miałem *zatrucie pokarmowe*.', 'No segundo dia tive intoxicação alimentar.'],
      ['zepsuć się', 'quebrar, enguiçar', 'perf.', 'Samochód *zepsuł się* w górach.', 'O carro quebrou nas montanhas.'],
      ['nagle', 'de repente', '', '*Nagle* zaczęło padać.', 'De repente começou a chover.'],
      ['na szczęście / niestety', 'felizmente / infelizmente', '', '*Na szczęście* hotel był blisko.', 'Felizmente o hotel era perto.'],
      ['koszmar', 'pesadelo', '', 'Te wakacje to był *koszmar*!', 'Essas férias foram um pesadelo!'],
    ]},
    { g: 'O primeiro encontro', w: [
      ['randka', 'encontro (romântico)', '', 'W piątek mam pierwszą *randkę*.', 'Na sexta tenho o primeiro encontro.'],
      ['umówić się z…', 'marcar com…', '+ instrumental', '*Umówiłem się* z Kasią na kawę.', 'Marquei um café com a Kasia.'],
      ['spodobać się', 'agradar (à primeira vista)', '+ dativo', 'Od razu mi się *spodobała*.', 'Gostei dela logo de cara.'],
      ['zakochać się', 'apaixonar-se', 'w + locativo', '*Zakochał się* w niej na pierwszej randce.', 'Ele se apaixonou por ela no primeiro encontro.'],
      ['pierwsze wrażenie', 'primeira impressão', '', 'Jakie było twoje *pierwsze wrażenie*?', 'Qual foi sua primeira impressão?'],
      ['spóźnić się', 'atrasar-se', 'perf.', '*Spóźniłam się* dwadzieścia minut!', 'Me atrasei vinte minutos!'],
      ['płacić na pół', 'dividir a conta', '', 'Zapłaciliśmy *na pół*.', 'Dividimos a conta.'],
      ['zanim', 'antes de / antes que', '', '*Zanim* poszedłem na randkę, bardzo się denerwowałem.', 'Antes de ir ao encontro, fiquei muito nervoso.'],
      ['po tym, jak', 'depois que', '', '*Po tym, jak* wyszliśmy z kina, poszliśmy na spacer.', 'Depois que saímos do cinema, fomos passear.'],
    ]},
  ],
  grammar: [
    { t: 'Comparativo: mais… que', h: `
      <table><tr><th>Adjetivo</th><th>Comparativo</th><th>Regra</th></tr>
      <tr><td>tani, młody, nowy</td><td>tańszy, młodszy, nowszy</td><td>+ <b>-szy</b></td></tr>
      <tr><td>ciepły, łatwy, trudny</td><td>cieplejszy, łatwiejszy, trudniejszy</td><td>+ <b>-ejszy</b> (quando o radical termina em grupo de consoantes)</td></tr>
      <tr><td>dobry, zły</td><td>lepszy, gorszy</td><td rowspan="2">irregulares</td></tr>
      <tr><td>duży, mały</td><td>większy, mniejszy</td></tr>
      <tr><td>wygodny, interesujący</td><td>bardziej wygodny, bardziej interesujący</td><td>adjetivos longos: <b>bardziej</b></td></tr></table>
      <p><b>niż</b> (que): <i>Grecja jest cieplejsza niż Polska.</i> · Também <b>od</b> + genitivo: <i>Ta oferta jest tańsza od tamtej.</i></p>` },
    { t: 'Superlativo: naj-', h: `
      <p><b>naj-</b> + comparativo: <i>najtańszy, najlepszy, najgorszy, największy, najbardziej wygodny.</i></p>
      <p><i>To były najgorsze wakacje w moim życiu.</i> · <i>Która oferta jest najtańsza?</i></p>
      <p>Advérbios: <i>dobrze → lepiej → najlepiej</i>, <i>źle → gorzej → najgorzej</i>, <i>tanio → taniej → najtaniej</i>.</p>` },
    { t: 'Contar uma história: aspecto e ordem', h: `
      <p>O <b>imperfectivo</b> descreve o cenário (o que estava acontecendo); o <b>perfectivo</b> faz a história avançar:</p>
      <p><i>Leżeliśmy na plaży i czytaliśmy. Nagle zaczęło padać, a ktoś ukradł mi portfel.</i></p>
      <p><b>zanim</b> (antes de): <i>Zanim wyjechaliśmy, kupiliśmy ubezpieczenie.</i> · <b>po tym, jak</b> (depois que) · <b>kiedy / gdy</b> (quando) · <b>potem, w końcu</b>.</p>` },
  ],
  checks: [
    ['Ta oferta jest ___ niż tamta. (tani)', ['tańsza', 'najtańsza', 'bardziej tania'], 0, 'tani → tańszy (fem.: tańsza).'],
    ['To były ___ wakacje w moim życiu. (zły)', ['gorsze', 'najgorsze', 'najzłe'], 1, 'Superlativo irregular: najgorszy.'],
    ['Grecja jest cieplejsza ___ Polska.', ['niż', 'od', 'jak'], 0, 'niż + nominativo; od pediria Polski.'],
    ['Leżeliśmy na plaży, kiedy nagle ___ padać.', ['zaczynało', 'zaczęło'], 1, 'Ação que interrompe → perfectivo.'],
  ],
  dialogue: { t: 'As piores férias', l: [
    ['Ola', 'Lucas, jak było w Chorwacji?', 'Lucas, como foi na Croácia?'],
    ['Lucas', 'Szczerze? To były najgorsze wakacje w moim życiu!', 'Sinceramente? Foram as piores férias da minha vida!'],
    ['Ola', 'Co się stało?', 'O que aconteceu?'],
    ['Lucas', 'Najpierw nasz lot został odwołany. Czekaliśmy na lotnisku dziesięć godzin.', 'Primeiro nosso voo foi cancelado. Esperamos dez horas no aeroporto.'],
    ['Ola', 'O nie! A potem?', 'Ah, não! E depois?'],
    ['Lucas', 'Kiedy w końcu przylecieliśmy, okazało się, że zgubili moją walizkę. A drugiego dnia miałem zatrucie pokarmowe.', 'Quando finalmente chegamos, descobrimos que perderam minha mala. E no segundo dia tive intoxicação alimentar.'],
    ['Ola', 'Koszmar! Kupiliście wycieczkę w biurze podróży?', 'Pesadelo! Vocês compraram o pacote numa agência?'],
    ['Lucas', 'Tak, last minute. Była najtańsza, ale chyba nie najlepsza…', 'Sim, de última hora. Era a mais barata, mas acho que não a melhor…'],
    ['Ola', 'A coś dobrego się wydarzyło?', 'E aconteceu alguma coisa boa?'],
    ['Lucas', 'Tak! Na plaży poznałem dziewczynę z Gdańska. Umówiliśmy się na randkę w Polsce.', 'Sim! Na praia conheci uma moça de Gdańsk. Marcamos um encontro na Polônia.'],
    ['Ola', 'No proszę! Więc te wakacje nie były takie złe!', 'Olha só! Então essas férias não foram tão ruins!'],
  ]},
  fill: [
    ['Ten hotel jest ___ niż tamten. (dobry)', 'lepszy', 'Este hotel é melhor que aquele.'],
    ['Która oferta jest ___? (tani, superlativo)', 'najtańsza', 'Qual oferta é a mais barata?'],
    ['Nasz lot został ___.', 'odwołany', 'Nosso voo foi cancelado.'],
    ['___ wyjechaliśmy, kupiliśmy ubezpieczenie. (antes de)', 'Zanim', 'Antes de viajar, compramos o seguro.'],
    ['Od razu mi się ___. (ela agradou)', 'spodobała', 'Gostei dela logo de cara.'],
    ['Zapłaciliśmy ___ pół.', 'na', 'Dividimos a conta.'],
  ],
  order: [
    ['To były najgorsze wakacje w moim życiu.', 'Foram as piores férias da minha vida.'],
    ['Ta oferta jest tańsza niż tamta.', 'Esta oferta é mais barata que aquela.'],
    ['Nagle zaczęło padać.', 'De repente começou a chover.'],
    ['Umówiłem się z Kasią na kawę.', 'Marquei um café com a Kasia.'],
    ['Zanim wyjechaliśmy, kupiliśmy ubezpieczenie.', 'Antes de viajar, compramos o seguro.'],
  ],
  write: {
    p: 'Conte as melhores ou as piores férias da sua vida, como uma história: onde, com quem, o que estava acontecendo e o que de repente mudou. Compare com outra viagem e termine com um encontro ou uma pessoa interessante que você conheceu.',
    c: ['Dois comparativos e um superlativo', 'Mistura de imperfectivo (cenário) e perfectivo (fatos)', 'zanim / po tym, jak / nagle / w końcu', 'Cinco palavras de viagem'],
    min: 140,
  },
});

COURSE.add('b1', {
  n: 8, gl: ['Ó', 'góry', 'ó soa exatamente como "u": "gu-ry"'],
  pl: 'Geografia, las i zabytki', pt: 'Geografia, a floresta, cultura, monumentos e a voz passiva',
  busuu: ['A bit of geography', 'The forest', 'My culture', 'Monuments'],
  goals: ['Descrever um país: rios, montanhas, fronteiras', 'Falar da floresta e de animais', 'Apresentar tradições da sua cultura', 'Descrever monumentos com a passiva e com "który"'],
  vocab: [
    { g: 'Geografia', w: [
      ['granica', 'fronteira', '', 'Polska ma *granicę* z siedmioma krajami.', 'A Polônia faz fronteira com sete países.'],
      ['rzeka', 'rio', 'gen. pl.: rzek', 'Wisła to najdłuższa *rzeka* w Polsce.', 'O Vístula é o rio mais longo da Polônia.'],
      ['wybrzeże', 'litoral', '', 'Na *wybrzeżu* jest dużo plaż.', 'No litoral há muitas praias.'],
      ['nizina', 'planície', '', 'Większość Polski to *niziny*.', 'A maior parte da Polônia são planícies.'],
      ['szczyt', 'pico, cume', '', 'Rysy to najwyższy *szczyt* w Polsce.', 'Rysy é o pico mais alto da Polônia.'],
      ['województwo', 'província, estado', 'a Polônia tem 16', 'Kraków jest w *województwie* małopolskim.', 'Cracóvia fica na província da Pequena Polônia.'],
      ['położony', 'situado', '', 'Gdańsk jest *położony* nad morzem.', 'Gdańsk fica à beira-mar.'],
      ['klimat', 'clima', '', 'W Polsce jest *klimat* umiarkowany.', 'Na Polônia o clima é temperado.'],
    ]},
    { g: 'A floresta', w: [
      ['puszcza', 'floresta antiga, mata virgem', '', '*Puszcza* Białowieska jest bardzo stara.', 'A floresta de Białowieża é muito antiga.'],
      ['drzewo', 'árvore', '', 'To *drzewo* ma ponad trzysta lat.', 'Esta árvore tem mais de trezentos anos.'],
      ['dąb / sosna / brzoza', 'carvalho / pinheiro / bétula', '', 'Przed domem rośnie stary *dąb*.', 'Na frente da casa cresce um carvalho velho.'],
      ['grzyby', 'cogumelos', '', 'Jesienią zbieramy *grzyby* w lesie.', 'No outono colhemos cogumelos na floresta.'],
      ['jagody', 'mirtilos (silvestres)', '', 'Babcia robi pierogi z *jagodami*.', 'A avó faz pierogi de mirtilo.'],
      ['żubr', 'bisão-europeu', 'símbolo da Polônia', 'W puszczy można zobaczyć *żubra*.', 'Na floresta dá para ver um bisão.'],
      ['dzik / sarna', 'javali / corça', '', 'Na drodze stała *sarna*.', 'Havia uma corça parada na estrada.'],
      ['chronić', 'proteger', '', 'Trzeba *chronić* przyrodę.', 'É preciso proteger a natureza.'],
      ['przyroda', 'natureza', '', 'Kocham polską *przyrodę*.', 'Amo a natureza polonesa.'],
    ]},
    { g: 'Cultura e monumentos', w: [
      ['tradycja', 'tradição', '', 'To stara polska *tradycja*.', 'É uma velha tradição polonesa.'],
      ['zwyczaj', 'costume', '', 'W Brazylii mamy inny *zwyczaj*.', 'No Brasil temos outro costume.'],
      ['święto', 'feriado, festa', '', 'Wigilia to najważniejsze *święto* w roku.', 'A ceia de Natal é a festa mais importante do ano.'],
      ['zabytek', 'monumento histórico', '', 'W Krakowie jest dużo *zabytków*.', 'Em Cracóvia há muitos monumentos.'],
      ['zamek', 'castelo', '', '*Zamek* w Malborku jest ogromny.', 'O castelo de Malbork é enorme.'],
      ['rynek', 'praça central (do mercado)', '', 'Spotkajmy się na *rynku*.', 'Vamos nos encontrar na praça central.'],
      ['ratusz', 'prefeitura (prédio)', '', '*Ratusz* stoi na środku rynku.', 'A prefeitura fica no meio da praça.'],
      ['pomnik', 'estátua, monumento', '', 'Przed uniwersytetem jest *pomnik* Kopernika.', 'Na frente da universidade há uma estátua de Copérnico.'],
      ['zbudowany', 'construído', 'zostać zbudowanym', 'Zamek został *zbudowany* w XIII wieku.', 'O castelo foi construído no século XIII.'],
      ['zniszczony / odbudowany', 'destruído / reconstruído', '', 'Stare Miasto zostało *zniszczone* i odbudowane.', 'A Cidade Velha foi destruída e reconstruída.'],
      ['wpisany na listę UNESCO', 'inscrito na lista da UNESCO', '', 'Zamość jest *wpisany na listę UNESCO*.', 'Zamość está inscrita na lista da UNESCO.'],
      ['który / która / które', 'que, o qual', 'concorda com o nome', 'To zamek, *który* zbudowali Krzyżacy.', 'É o castelo que os Cavaleiros Teutônicos construíram.'],
    ]},
  ],
  grammar: [
    { t: 'A voz passiva: zostać / być + particípio', h: `
      <p>Para dizer o que <b>foi feito</b> com algo: <b>zostać</b> (ação concluída) ou <b>być</b> (estado) + particípio, que concorda com o sujeito.</p>
      <table><tr><th>Sujeito</th><th>Exemplo</th></tr>
      <tr><td>masculino</td><td><i>Zamek został zbudowany w XIII wieku.</i></td></tr>
      <tr><td>feminino</td><td><i>Katedra została zniszczona w czasie wojny.</i></td></tr>
      <tr><td>neutro</td><td><i>Miasto zostało odbudowane po wojnie.</i></td></tr>
      <tr><td>plural</td><td><i>Kamienice zostały odnowione.</i></td></tr></table>
      <p>Quem fez entra com <b>przez</b> + acusativo: <i>Zamek został zbudowany przez Krzyżaków.</i></p>` },
    { t: 'Relativo: który', h: `
      <p><b>który</b> concorda em gênero e número com o nome a que se refere, e o caso vem do seu papel na nova frase:</p>
      <p><i>To rzeka, która płynie przez Warszawę.</i> (sujeito) · <i>To zamek, który zbudowali Krzyżacy.</i> (objeto) · <i>To miasto, w którym się urodziłem.</i> (locativo)</p>
      <table><tr><th></th><th>m.</th><th>f.</th><th>n.</th><th>pl.</th></tr>
      <tr><td>nominativo</td><td>który</td><td>która</td><td>które</td><td>którzy / które</td></tr>
      <tr><td>locativo</td><td>którym</td><td>której</td><td>którym</td><td>których</td></tr></table>` },
    { t: 'Datas e séculos', h: `
      <p>Séculos usam números romanos e o locativo: <i>w XIII wieku</i> (lê-se "w trzynastym wieku").</p>
      <p>Anos: <i>w 1979 roku</i> (lê-se "w tysiąc dziewięćset siedemdziesiątym dziewiątym roku").</p>
      <p class="tip">No dia a dia, basta reconhecer a estrutura <b>w … roku / w … wieku</b>.</p>` },
  ],
  checks: [
    ['Zamek ___ zbudowany w XIII wieku.', ['został', 'została', 'zostało'], 0, 'zamek é masculino → został.'],
    ['Katedra została ___ w czasie wojny.', ['zniszczony', 'zniszczona', 'zniszczone'], 1, 'O particípio concorda: katedra → zniszczona.'],
    ['To rzeka, ___ płynie przez Kraków.', ['który', 'która', 'które'], 1, 'rzeka é feminino → która.'],
    ['To miasto, w ___ się urodziłem.', ['którym', 'której', 'który'], 0, 'miasto (neutro) no locativo → którym.'],
  ],
  dialogue: { t: 'Um passeio por Zamość', l: [
    ['Ola', 'Witaj w Zamościu! To miasto zostało założone w XVI wieku przez Jana Zamoyskiego.', 'Bem-vindo a Zamość! Esta cidade foi fundada no século XVI por Jan Zamoyski.'],
    ['Lucas', 'Jak tu kolorowo! Te kamienice na rynku są piękne.', 'Que colorido! Estes prédios na praça são lindos.'],
    ['Ola', 'Stare Miasto jest wpisane na listę UNESCO. Nazywają je „perłą renesansu”.', 'A Cidade Velha está na lista da UNESCO. Chamam-na de "pérola do Renascimento".'],
    ['Lucas', 'A ten budynek z wysokimi schodami?', 'E aquele prédio com a escada alta?'],
    ['Ola', 'To ratusz. A tam jest katedra, która też jest bardzo stara.', 'É a prefeitura. E ali fica a catedral, que também é muito antiga.'],
    ['Lucas', 'W Brazylii też mamy kolorowe miasta, na przykład Paraty. Zostało zbudowane przez Portugalczyków.', 'No Brasil também temos cidades coloridas, por exemplo Paraty. Foi construída pelos portugueses.'],
    ['Ola', 'Muszę je kiedyś zobaczyć! A jutro jedziemy do Puszczy Białowieskiej.', 'Preciso conhecer um dia! E amanhã vamos à floresta de Białowieża.'],
    ['Lucas', 'Tam, gdzie żyją żubry?', 'Lá onde vivem os bisões?'],
    ['Ola', 'Tak. To jedna z ostatnich pierwotnych puszcz w Europie. Jest chroniona od bardzo dawna.', 'Sim. É uma das últimas florestas primárias da Europa. É protegida há muito tempo.'],
    ['Lucas', 'Super. Może znajdziemy też grzyby?', 'Ótimo. Talvez a gente ache cogumelos também?'],
    ['Ola', 'W parku narodowym nie wolno ich zbierać! Ale w zwykłym lesie, czemu nie.', 'No parque nacional é proibido colher! Mas numa floresta comum, por que não.'],
  ]},
  fill: [
    ['Miasto ___ odbudowane po wojnie.', 'zostało', 'A cidade foi reconstruída depois da guerra.'],
    ['Katedra została ___ w XIV wieku. (zbudować)', 'zbudowana', 'A catedral foi construída no século XIV.'],
    ['To pani, ___ mieszka obok mnie.', 'która', 'É a senhora que mora ao meu lado.'],
    ['To dom, w ___ się urodziłam.', 'którym', 'É a casa em que nasci.'],
    ['Wisła to najdłuższa ___ w Polsce.', 'rzeka', 'O Vístula é o rio mais longo da Polônia.'],
    ['Jesienią zbieramy ___ w lesie.', 'grzyby', 'No outono colhemos cogumelos na floresta.'],
  ],
  order: [
    ['Zamek został zbudowany w XIII wieku.', 'O castelo foi construído no século XIII.'],
    ['Stare Miasto jest wpisane na listę UNESCO.', 'A Cidade Velha está na lista da UNESCO.'],
    ['To rzeka, która płynie przez Warszawę.', 'É o rio que passa por Varsóvia.'],
    ['W puszczy można zobaczyć żubra.', 'Na floresta dá para ver um bisão.'],
    ['Trzeba chronić przyrodę.', 'É preciso proteger a natureza.'],
  ],
  write: {
    p: 'Apresente para um amigo polonês uma região do Brasil ou de Portugal: onde fica, como é a natureza, uma tradição local e um monumento importante (quando foi construído, por quem, o que aconteceu com ele).',
    c: ['Duas frases na passiva (został zbudowany…)', 'Duas frases com który / która / które', 'Cinco palavras de geografia ou natureza', 'Uma tradição ou festa'],
    min: 140,
  },
});
