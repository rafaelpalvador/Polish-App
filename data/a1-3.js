/* Polonês A1 — capítulos 11 a 15 */
COURSE.add('a1', {
  n: 11, gl: ['Ść', 'sześć', 'ść junta "ch" suave + "tch" suave: "cheshtch"'],
  pl: 'Jaki masz numer?', pt: 'Números 0–10, endereço e telefone',
  busuu: ['Discovering numbers 0-10', 'Specifying numbers', 'Asking for and giving your address', 'Asking about phone numbers'],
  goals: ['Contar de 0 a 10', 'Ditar um telefone', 'Dar e pedir endereço e e-mail', 'Entender o formato de endereço polonês'],
  vocab: [
    { g: 'Números', w: [
      ['zero', '0'], ['jeden', '1'], ['dwa', '2'], ['trzy', '3'], ['cztery', '4'],
      ['pięć', '5'], ['sześć', '6'], ['siedem', '7'], ['osiem', '8'], ['dziewięć', '9'], ['dziesięć', '10'],
    ]},
    { g: 'Endereço', w: [
      ['adres', 'endereço'],
      ['ulica (ul.)', 'rua'],
      ['numer domu', 'número do prédio / da casa'],
      ['numer mieszkania (m.)', 'número do apartamento'],
      ['kod pocztowy', 'CEP'],
      ['Jaki jest twój adres?', 'Qual é o seu endereço?'],
      ['Jaki jest pana / pani adres?', 'Qual é o endereço do senhor / da senhora?'],
      ['Mój adres to…', 'Meu endereço é…'],
    ]},
    { g: 'Telefone e e-mail', w: [
      ['numer telefonu', 'número de telefone'],
      ['Jaki masz numer telefonu?', 'Qual é o seu telefone?'],
      ['komórka', 'celular'],
      ['mail / e-mail', 'e-mail'],
      ['małpa', '@ (literalmente "macaca")'],
      ['kropka', 'ponto'],
      ['Jeszcze raz, proszę.', 'Mais uma vez, por favor.'],
      ['Proszę przeliterować.', 'Soletre, por favor.'],
    ]},
  ],
  grammar: [
    { t: 'Ditando números', h: `
      <p>Telefones costumam ser ditos em grupos de três, mas na dúvida dite algarismo por algarismo: <i>sześć-zero-jeden, dwa-trzy-cztery…</i></p>
      <p class="tip">Atenção a dois pares parecidos: <b>sześć</b> (6) × <b>siedem</b> (7), e <b>dziewięć</b> (9) × <b>dziesięć</b> (10).</p>` },
    { t: 'Jeden, dwa: o gênero também conta', h: `
      <table><tr><th></th><th>Masculino</th><th>Feminino</th><th>Neutro</th></tr>
      <tr><td>1</td><td>jeden długopis</td><td>jedna książka</td><td>jedno okno</td></tr>
      <tr><td>2</td><td>dwa długopisy</td><td>dwie książki</td><td>dwa okna</td></tr></table>
      <p>Ao contar ou ditar números, use a forma neutra de dicionário: jeden, dwa.</p>` },
    { t: 'Endereço polonês', h: `
      <p>O formato é: <b>rua + número / apartamento, CEP + cidade</b>.</p>
      <p class="addr">ul. Długa 5/3<br>31-147 Kraków</p>
      <p>Lê-se: <i>ulica Długa pięć, mieszkanie trzy</i>. A barra separa o prédio do apartamento.</p>
      <p class="tip"><b>jaki / jaka / jakie</b> ("qual") concorda com o substantivo: jaki adres, jaka ulica, jakie miasto.</p>` },
  ],
  dialogue: { t: 'Matrícula na academia', l: [
    ['Recepcjonistka', 'Dzień dobry. Jak się pan nazywa?', 'Bom dia. Como o senhor se chama?'],
    ['Lucas', 'Lucas Silva.', 'Lucas Silva.'],
    ['Recepcjonistka', 'Proszę przeliterować nazwisko.', 'Soletre o sobrenome, por favor.'],
    ['Lucas', 'S-i-l-v-a.', 'S-i-l-v-a.'],
    ['Recepcjonistka', 'Dziękuję. Jaki jest pana adres?', 'Obrigada. Qual é o endereço do senhor?'],
    ['Lucas', 'Ulica Kwiatowa siedem, mieszkanie dwa.', 'Rua Kwiatowa, sete, apartamento dois.'],
    ['Recepcjonistka', 'A numer telefonu?', 'E o telefone?'],
    ['Lucas', 'Dziewięć, osiem, pięć, zero, trzy, cztery, sześć, jeden, dwa.', 'Nove, oito, cinco, zero, três, quatro, seis, um, dois.'],
    ['Recepcjonistka', 'Jeszcze raz, proszę. Dziewięć, osiem, pięć…?', 'Mais uma vez, por favor. Nove, oito, cinco…?'],
    ['Lucas', '…zero, trzy, cztery, sześć, jeden, dwa. A mail to lucas małpa poczta kropka pl.', '…zero, três, quatro, seis, um, dois. E o e-mail é lucas arroba poczta ponto pl.'],
  ]},
  fill: [
    ['dwa + trzy = ___', 'pięć', '2 + 3 = 5'],
    ['cztery + cztery = ___', 'osiem', '4 + 4 = 8'],
    ['dziesięć − cztery = ___', 'sześć', '10 − 4 = 6'],
    ['Jaki jest twój ___?', 'adres', 'Qual é o seu endereço?'],
    ['Jaki masz numer ___?', 'telefonu', 'Qual é o seu número de telefone?'],
    ['@ po polsku to „___”.', 'małpa', '@ em polonês é "małpa".'],
    ['___ raz, proszę.', 'Jeszcze', 'Mais uma vez, por favor.'],
  ],
  order: [
    ['Jaki jest pani adres?', 'Qual é o endereço da senhora?'],
    ['Mój adres to ulica Długa pięć.', 'Meu endereço é Rua Długa, cinco.'],
    ['Jaki masz numer telefonu?', 'Qual é o seu telefone?'],
    ['Proszę przeliterować nazwisko.', 'Soletre o sobrenome, por favor.'],
  ],
  write: {
    p: 'Preencha um cadastro em forma de texto, como se estivesse se inscrevendo num curso em Cracóvia. Pode inventar o endereço.',
    c: ['Nome e sobrenome (com a soletração do sobrenome)', 'De onde você é e onde mora', 'Endereço completo com números por extenso', 'Telefone por extenso e e-mail com małpa e kropka'],
    min: 35,
  },
});

COURSE.add('a1', {
  n: 12, gl: ['Ń', 'Poznań', 'ń soa como "nh" de "ninho"'],
  pl: 'Jakie jest twoje miasto?', pt: 'Descrevendo a cidade',
  busuu: ['Reviewing places in the city', 'Describing a city', 'Adjectives', 'Adjective gender', 'Describing places', 'Hearing about places in the city'],
  goals: ['Descrever uma cidade com adjetivos', 'Fazer o adjetivo concordar com o gênero', 'Usar jaki / jaka / jakie'],
  vocab: [
    { g: 'Adjetivos (forma masculina)', w: [
      ['duży', 'grande'],
      ['mały', 'pequeno'],
      ['piękny', 'lindo'],
      ['ładny', 'bonito, agradável'],
      ['stary', 'velho, antigo'],
      ['nowy', 'novo'],
      ['nowoczesny', 'moderno'],
      ['ciekawy', 'interessante'],
      ['nudny', 'chato, sem graça'],
      ['drogi', 'caro'],
      ['tani', 'barato'],
      ['spokojny', 'tranquilo'],
      ['głośny', 'barulhento'],
      ['czysty', 'limpo'],
      ['zielony', 'verde, arborizado'],
      ['znany', 'conhecido, famoso'],
    ]},
    { g: 'A paisagem', w: [
      ['stare miasto', 'centro histórico'],
      ['zamek', 'castelo'],
      ['most', 'ponte'],
      ['rzeka', 'rio'],
      ['góry', 'montanhas'],
      ['morze', 'mar'],
      ['plaża', 'praia'],
      ['ulica', 'rua'],
    ]},
    { g: 'Perguntar', w: [
      ['Jaki jest…?', 'Como é… (masc.)?'],
      ['Jaka jest…?', 'Como é… (fem.)?'],
      ['Jakie jest…?', 'Como é… (neutro)?'],
      ['bardzo', 'muito'],
    ]},
  ],
  grammar: [
    { t: 'Adjetivo concorda com o substantivo', h: `
      <table><tr><th>Masculino</th><th>Feminino</th><th>Neutro</th></tr>
      <tr><td>-y / -i</td><td>-a</td><td>-e / -ie</td></tr>
      <tr><td>duż<b>y</b> park</td><td>duż<b>a</b> ulica</td><td>duż<b>e</b> miasto</td></tr>
      <tr><td>star<b>y</b> zamek</td><td>star<b>a</b> rzeka</td><td>star<b>e</b> miasto</td></tr>
      <tr><td>tan<b>i</b> hotel</td><td>tan<b>ia</b> kawiarnia</td><td>tan<b>ie</b> mieszkanie</td></tr>
      <tr><td>drog<b>i</b> sklep</td><td>drog<b>a</b> restauracja</td><td>drog<b>ie</b> muzeum</td></tr></table>
      <p class="tip">Depois de <b>k</b> e <b>g</b> o masculino termina em <b>-i</b> e o neutro em <b>-ie</b>: drogi → drogie.</p>` },
    { t: 'Antes ou depois do verbo', h: `
      <p>Antes do substantivo: <i>To jest <b>piękne</b> miasto.</i></p>
      <p>Depois de być: <i>Miasto jest <b>piękne</b>.</i> A concordância é a mesma.</p>` },
  ],
  dialogue: { t: 'Cracóvia × Porto', l: [
    ['Ola', 'Jakie jest twoje miasto, Lucas?', 'Como é a sua cidade, Lucas?'],
    ['Lucas', 'Porto jest duże i bardzo ładne. Jest stare miasto, rzeka i piękny most.', 'O Porto é grande e muito bonito. Tem um centro histórico, um rio e uma ponte linda.'],
    ['Ola', 'Czy jest drogie?', 'É cara?'],
    ['Lucas', 'Nie bardzo. Jest ciekawe, ale nie jest drogie. A Kraków? Jaki jest?', 'Não muito. É interessante, mas não é caro. E Cracóvia? Como é?'],
    ['Ola', 'Kraków jest duży i znany. Stare miasto jest piękne, ale głośne.', 'Cracóvia é grande e famosa. O centro histórico é lindo, mas barulhento.'],
    ['Lucas', 'Jest tam też rzeka?', 'Também tem rio lá?'],
    ['Ola', 'Tak, Wisła. Jest też zamek, Wawel. To bardzo ciekawe miejsce.', 'Sim, o Vístula. Tem também um castelo, o Wawel. É um lugar muito interessante.'],
    ['Lucas', 'A morze?', 'E o mar?'],
    ['Ola', 'Morze jest daleko, w Gdańsku. Ale góry są blisko!', 'O mar fica longe, em Gdańsk. Mas as montanhas são perto!'],
  ]},
  fill: [
    ['To jest ___ miasto. (duży)', 'duże', 'É uma cidade grande.'],
    ['Ta ulica jest ___. (głośny)', 'głośna', 'Esta rua é barulhenta.'],
    ['Ten hotel jest ___. (tani)', 'tani', 'Este hotel é barato.'],
    ['Ta kawiarnia jest ___. (tani)', 'tania', 'Este café é barato.'],
    ['Muzeum jest bardzo ___. (ciekawy)', 'ciekawe', 'O museu é muito interessante.'],
    ['___ jest twoje miasto?', 'Jakie', 'Como é a sua cidade?'],
    ['Restauracja jest ___. (drogi)', 'droga', 'O restaurante é caro.'],
  ],
  order: [
    ['Moje miasto jest małe i spokojne.', 'Minha cidade é pequena e tranquila.'],
    ['Stare miasto jest bardzo piękne.', 'O centro histórico é muito lindo.'],
    ['To jest nowoczesny i drogi hotel.', 'É um hotel moderno e caro.'],
    ['Jaka jest ta ulica?', 'Como é esta rua?'],
  ],
  write: {
    p: 'Descreva a cidade onde você mora para um amigo polonês.',
    c: ['Use pelo menos seis adjetivos diferentes', 'Use os três gêneros (ten park / ta ulica / to muzeum…)', 'Diga o que é perto e o que é longe', 'Faça uma pergunta com jaki, jaka ou jakie sobre a cidade dele'],
    min: 45,
  },
});

COURSE.add('a1', {
  n: 13, gl: ['H', 'hobby', 'h (e ch) soa como "rr" aspirado: "róbi"'],
  pl: 'Co lubisz robić?', pt: 'Lazer, dias da semana e lubić',
  busuu: ['Discovering leisure activities', 'Reading about leisure activities', 'Expanding on leisure activities', 'Talking about what you like to do', 'The verb "lubić"', 'Naming the days of the weekend', 'Naming the days of the week', 'Describing the week', 'Talking about sports', 'Describing how often we do things', 'Plural forms of "lubić"', 'Hobbies, weekdays, frequency'],
  goals: ['Falar de hobbies e esportes', 'Conjugar lubić e usar lubić + infinitivo', 'Dizer os dias da semana com w / we', 'Dizer com que frequência você faz algo'],
  vocab: [
    { g: 'Atividades', w: [
      ['czytać książki', 'ler livros'],
      ['słuchać muzyki', 'ouvir música'],
      ['oglądać filmy / seriale', 'assistir filmes / séries'],
      ['grać w piłkę nożną', 'jogar futebol'],
      ['grać w gry', 'jogar videogame / jogos'],
      ['grać na gitarze', 'tocar violão'],
      ['gotować', 'cozinhar'],
      ['tańczyć', 'dançar'],
      ['śpiewać', 'cantar'],
      ['biegać', 'correr'],
      ['pływać', 'nadar'],
      ['spacerować', 'passear, caminhar'],
      ['podróżować', 'viajar'],
      ['jeździć na rowerze', 'andar de bicicleta'],
    ]},
    { g: 'Dias da semana', w: [
      ['poniedziałek', 'segunda-feira'],
      ['wtorek', 'terça-feira'],
      ['środa', 'quarta-feira'],
      ['czwartek', 'quinta-feira'],
      ['piątek', 'sexta-feira'],
      ['sobota', 'sábado'],
      ['niedziela', 'domingo'],
      ['weekend', 'fim de semana'],
      ['w weekend', 'no fim de semana'],
    ]},
    { g: 'Frequência', w: [
      ['zawsze', 'sempre'],
      ['codziennie', 'todo dia'],
      ['często', 'frequentemente'],
      ['czasami', 'às vezes'],
      ['rzadko', 'raramente'],
      ['nigdy nie…', 'nunca'],
      ['raz w tygodniu', 'uma vez por semana'],
    ]},
  ],
  grammar: [
    { t: 'lubić (gostar)', h: `
      <table><tr><th>ja</th><th>ty</th><th>on/ona</th><th>my</th><th>wy</th><th>oni</th></tr>
      <tr><td>lubię</td><td>lubisz</td><td>lubi</td><td>lubimy</td><td>lubicie</td><td>lubią</td></tr></table>
      <p><b>lubić + infinitivo</b>: <i>Lubię czytać. Lubimy gotować.</i> Sem preposição, diferente do "gostar <u>de</u>".</p>
      <p class="tip">Também dá para dizer <i>Lubię muzykę</i> (substantivo). A mudança de muzyka → muzykę é o acusativo, tema do capítulo 16.</p>` },
    { t: 'Dias: w / we + forma do dia', h: `
      <table><tr><th>Dia</th><th>Na…</th></tr>
      <tr><td>poniedziałek</td><td>w poniedziałek</td></tr><tr><td>wtorek</td><td><b>we</b> wtorek</td></tr>
      <tr><td>środa</td><td>w środ<b>ę</b></td></tr><tr><td>czwartek</td><td>w czwartek</td></tr>
      <tr><td>piątek</td><td>w piątek</td></tr><tr><td>sobota</td><td>w sobot<b>ę</b></td></tr>
      <tr><td>niedziela</td><td>w niedziel<b>ę</b></td></tr></table>
      <p class="tip">Os dias femininos (-a) trocam o -a por <b>-ę</b>. Dias se escrevem com minúscula.</p>` },
    { t: 'nigdy pede nie', h: `
      <p>O polonês usa dupla negação: <b>Nigdy nie</b> gotuję. (Nunca cozinho.)</p>
      <p>Os advérbios de frequência ficam antes do verbo: <i>Często biegam. Czasami tańczę.</i></p>` },
    { t: 'grać w × grać na', h: `
      <p><b>grać w</b> + jogo/esporte: <i>grać w piłkę, w tenisa, w gry</i>.</p>
      <p><b>grać na</b> + instrumento: <i>grać na gitarze, na pianinie</i>.</p>` },
  ],
  dialogue: { t: 'Planos para o fim de semana', l: [
    ['Kasia', 'Co lubisz robić w weekend?', 'O que você gosta de fazer no fim de semana?'],
    ['Lucas', 'Lubię spacerować i czytać. A w niedzielę często gotuję.', 'Gosto de passear e ler. E no domingo eu cozinho com frequência.'],
    ['Kasia', 'Lubisz sport?', 'Você gosta de esporte?'],
    ['Lucas', 'Tak, biegam we wtorek i w czwartek. A ty?', 'Sim, corro na terça e na quinta. E você?'],
    ['Kasia', 'Ja pływam raz w tygodniu, w środę. Nigdy nie biegam!', 'Eu nado uma vez por semana, na quarta. Nunca corro!'],
    ['Lucas', 'A twoi przyjaciele? Co oni lubią?', 'E seus amigos? Do que eles gostam?'],
    ['Kasia', 'Oni lubią tańczyć. W piątek zawsze są w klubie.', 'Eles gostam de dançar. Na sexta estão sempre na balada.'],
    ['Lucas', 'A w sobotę?', 'E no sábado?'],
    ['Kasia', 'W sobotę gramy w piłkę w parku. Zapraszam!', 'No sábado jogamos futebol no parque. Está convidado!'],
  ]},
  fill: [
    ['Ja ___ czytać. (lubić)', 'lubię', 'Eu gosto de ler.'],
    ['Czy wy ___ tańczyć? (lubić)', 'lubicie', 'Vocês gostam de dançar?'],
    ['Oni ___ gotować. (lubić)', 'lubią', 'Eles gostam de cozinhar.'],
    ['Pływam w ___. (środa)', 'środę', 'Nado na quarta.'],
    ['Biegam ___ wtorek.', 'we', 'Corro na terça.'],
    ['Nigdy ___ gotuję.', 'nie', 'Nunca cozinho.'],
    ['Gram ___ gitarze.', 'na', 'Toco violão.'],
  ],
  order: [
    ['Co lubisz robić w weekend?', 'O que você gosta de fazer no fim de semana?'],
    ['W sobotę często gram w piłkę.', 'No sábado jogo futebol com frequência.'],
    ['Czasami oglądam seriale wieczorem.', 'Às vezes assisto séries à noite.'],
    ['Nigdy nie biegam w niedzielę.', 'Nunca corro no domingo.'],
  ],
  write: {
    p: 'Descreva sua semana típica: o que você faz em cada dia e do que gosta.',
    c: ['Use pelo menos cinco dias da semana com w / we', 'Use lubić em duas pessoas diferentes (lubię, lubi, lubimy…)', 'Use quatro expressões de frequência, incluindo nigdy nie', 'Mencione pelo menos um esporte e um hobby'],
    min: 50,
  },
});

COURSE.add('a1', {
  n: 14, gl: ['Ą', 'muzyką', 'ą soa como "on" nasal; no fim da palavra, "om"'],
  pl: 'Interesuję się muzyką', pt: 'Interesses e o caso instrumental',
  busuu: ['Describing your interests', 'Instrumental case of nouns', 'More on instrumental case of nouns', 'Using linking words', 'Listening to a chat about interests', 'Developing fluency'],
  goals: ['Falar dos seus interesses com interesować się', 'Formar o instrumental singular e plural', 'Usar z + instrumental ("com")', 'Ligar frases com ale, bo, więc, albo'],
  vocab: [
    { g: 'Interesses', w: [
      ['interesować się', 'interessar-se por'],
      ['Czym się interesujesz?', 'Pelo que você se interessa?'],
      ['sport → sportem', 'esporte'],
      ['muzyka → muzyką', 'música'],
      ['historia → historią', 'história'],
      ['sztuka → sztuką', 'arte'],
      ['polityka → polityką', 'política'],
      ['moda → modą', 'moda'],
      ['technologia → technologią', 'tecnologia'],
      ['fotografia → fotografią', 'fotografia'],
      ['kino → kinem', 'cinema'],
      ['literatura → literaturą', 'literatura'],
      ['podróże → podróżami', 'viagens'],
      ['gry → grami', 'jogos'],
    ]},
    { g: 'Conectores', w: [
      ['i', 'e'],
      ['a', 'e / já (contraste suave)'],
      ['ale', 'mas'],
      ['albo / lub', 'ou'],
      ['bo', 'porque (informal)'],
      ['ponieważ', 'porque (mais formal)'],
      ['więc', 'então, por isso'],
      ['też', 'também'],
    ]},
    { g: 'Mais', w: [
      ['zainteresowania', 'interesses'],
      ['ulubiony / ulubiona / ulubione', 'favorito / favorita'],
      ['z przyjacielem', 'com um amigo'],
      ['z koleżanką', 'com uma colega'],
    ]},
  ],
  grammar: [
    { t: 'O instrumental', h: `
      <p>É o caso usado depois de <b>interesować się</b>, de <b>z</b> ("com") e, no capítulo 15, de <b>być</b> + profissão.</p>
      <table><tr><th>Gênero</th><th>Terminação</th><th>Exemplos</th></tr>
      <tr><td>Masculino e neutro</td><td><b>-em</b> (depois de k/g: <b>-iem</b>)</td><td>sport → sport<b>em</b>, kino → kin<b>em</b>, język → język<b>iem</b></td></tr>
      <tr><td>Feminino</td><td><b>-ą</b></td><td>muzyka → muzyk<b>ą</b>, historia → histori<b>ą</b></td></tr>
      <tr><td>Plural</td><td><b>-ami</b></td><td>książki → książk<b>ami</b>, filmy → film<b>ami</b></td></tr></table>
      <p class="tip">Repare: o feminino simplesmente troca <b>-a</b> por <b>-ą</b>.</p>` },
    { t: 'interesować się (verbo em -ować)', h: `
      <table><tr><th>ja</th><th>ty</th><th>on/ona</th><th>my</th><th>wy</th><th>oni</th></tr>
      <tr><td>interesuję się</td><td>interesujesz się</td><td>interesuje się</td><td>interesujemy się</td><td>interesujecie się</td><td>interesują się</td></tr></table>
      <p>A pergunta usa <b>czym</b> (instrumental de <i>co</i>): <i>Czym się interesujesz?</i></p>` },
    { t: 'Conectores na prática', h: `
      <p><i>Lubię kino, <b>ale</b> rzadko oglądam filmy.</i></p>
      <p><i>Uczę się polskiego, <b>bo</b> lubię języki.</i></p>
      <p><i>Interesuję się historią, <b>więc</b> często czytam książki.</i></p>
      <p><i>W weekend gram w piłkę <b>albo</b> pływam.</i></p>` },
  ],
  dialogue: { t: 'Conversa num café de língua', l: [
    ['Michał', 'Czym się interesujesz, Lucas?', 'Pelo que você se interessa, Lucas?'],
    ['Lucas', 'Interesuję się technologią i fotografią. A ty?', 'Me interesso por tecnologia e fotografia. E você?'],
    ['Michał', 'Ja interesuję się historią, więc często czytam książki.', 'Eu me interesso por história, então leio livros com frequência.'],
    ['Lucas', 'Lubisz też kino?', 'Você também gosta de cinema?'],
    ['Michał', 'Tak, ale rzadko oglądam filmy, bo nie mam czasu.', 'Sim, mas raramente vejo filmes, porque não tenho tempo.'],
    ['Lucas', 'Ja w weekend oglądam filmy z przyjacielem albo gram w gry.', 'No fim de semana eu vejo filmes com um amigo ou jogo videogame.'],
    ['Michał', 'Interesujesz się sportem?', 'Você se interessa por esporte?'],
    ['Lucas', 'Trochę. Moja ulubiona dyscyplina to piłka nożna.', 'Um pouco. Meu esporte favorito é futebol.'],
  ]},
  fill: [
    ['Interesuję się ___. (muzyka)', 'muzyką', 'Me interesso por música.'],
    ['On interesuje się ___. (sport)', 'sportem', 'Ele se interessa por esporte.'],
    ['Interesujemy się ___. (kino)', 'kinem', 'Nós nos interessamos por cinema.'],
    ['Czym się ___? (ty)', 'interesujesz', 'Pelo que você se interessa?'],
    ['Gram w piłkę z ___. (przyjaciel)', 'przyjacielem', 'Jogo futebol com um amigo.'],
    ['Lubię kino, ___ nie mam czasu.', 'ale', 'Gosto de cinema, mas não tenho tempo.'],
    ['Ona interesuje się ___. (książki)', 'książkami', 'Ela se interessa por livros.'],
  ],
  order: [
    ['Czym się interesujesz?', 'Pelo que você se interessa?'],
    ['Interesuję się historią i sztuką.', 'Me interesso por história e arte.'],
    ['Uczę się polskiego, bo lubię języki.', 'Estudo polonês porque gosto de línguas.'],
    ['W weekend czytam albo spaceruję z koleżanką.', 'No fim de semana leio ou passeio com uma colega.'],
  ],
  write: {
    p: 'Escreva um post apresentando seus interesses e explicando por quê.',
    c: ['Use interesować się com pelo menos quatro interesses no instrumental', 'Use z + instrumental (com alguém)', 'Use quatro conectores diferentes (ale, bo, więc, albo…)', 'Diga qual é sua coisa favorita (ulubiony / ulubiona)'],
    min: 50,
  },
});

COURSE.add('a1', {
  n: 15, gl: ['Y', 'miły', 'y é um "i" fechado, quase "ê": "mi-uê"'],
  pl: 'Jaki on jest?', pt: 'Personalidade e o instrumental com być',
  busuu: ['Discovering a few more job titles', 'Instrumental case and "być"', 'Talking about personality traits', 'Giving compliments', 'Discovering descriptive adjectives', 'Using descriptive adjectives', 'Reviewing descriptive adjectives', 'Listening to a speed date', 'Developing fluency'],
  goals: ['Dizer a profissão com być + instrumental', 'Descrever a personalidade de alguém', 'Fazer e responder elogios'],
  vocab: [
    { g: 'Mais profissões', w: [
      ['aktor / aktorka', 'ator / atriz'],
      ['muzyk', 'músico / musicista'],
      ['fotograf', 'fotógrafo/a'],
      ['prawnik / prawniczka', 'advogado / advogada'],
      ['księgowy / księgowa', 'contador / contadora'],
      ['fryzjer / fryzjerka', 'cabeleireiro / cabeleireira'],
      ['mechanik', 'mecânico'],
      ['policjant / policjantka', 'policial'],
      ['Kim jesteś z zawodu?', 'Qual é a sua profissão?'],
    ]},
    { g: 'Personalidade', w: [
      ['miły', 'gentil, simpático'],
      ['sympatyczny', 'simpático'],
      ['zabawny', 'engraçado'],
      ['inteligentny', 'inteligente'],
      ['pracowity', 'trabalhador, dedicado'],
      ['leniwy', 'preguiçoso'],
      ['cierpliwy', 'paciente'],
      ['nieśmiały', 'tímido'],
      ['otwarty', 'aberto, extrovertido'],
      ['towarzyski', 'sociável'],
      ['wesoły', 'alegre'],
      ['poważny', 'sério'],
      ['szczery', 'sincero'],
      ['kreatywny', 'criativo'],
      ['romantyczny', 'romântico'],
    ]},
    { g: 'Elogios', w: [
      ['Świetnie wyglądasz!', 'Você está ótimo/a!'],
      ['Ładnie mówisz po polsku!', 'Você fala polonês muito bem!'],
      ['Jesteś bardzo miły / miła.', 'Você é muito gentil.'],
      ['Masz piękny uśmiech.', 'Você tem um sorriso lindo.'],
      ['Brawo! / Super!', 'Muito bem! / Ótimo!'],
      ['Dziękuję, to miłe.', 'Obrigado, que gentil.'],
    ]},
  ],
  grammar: [
    { t: 'być + substantivo = instrumental', h: `
      <p>Quando o que vem depois de <b>być</b> é um <b>substantivo</b> (profissão, nacionalidade), ele vai para o instrumental.</p>
      <table><tr><th>Dicionário</th><th>Jestem…</th></tr>
      <tr><td>lekarz</td><td>lekarz<b>em</b></td></tr>
      <tr><td>analityk</td><td>analityk<b>iem</b></td></tr>
      <tr><td>programista</td><td>programist<b>ą</b> (masculino em -a!)</td></tr>
      <tr><td>nauczycielka</td><td>nauczycielk<b>ą</b></td></tr>
      <tr><td>Brazylijczyk / Brazylijka</td><td>Brazylijczyk<b>iem</b> / Brazylijk<b>ą</b></td></tr>
      <tr><td>Polak / Polka</td><td>Polak<b>iem</b> / Polk<b>ą</b></td></tr></table>` },
    { t: 'Mas adjetivo fica no nominativo', h: `
      <p>Depois de być, o <b>adjetivo</b> não muda de caso, só concorda em gênero:</p>
      <p><i>Jestem programistą. Jestem <b>kreatywny</b>.</i> &nbsp; <i>Ona jest lekarką. Jest <b>cierpliwa</b>.</i></p>
      <p class="tip">Com <b>to</b> não há instrumental: <i>To jest lekarz.</i> × <i>On jest lekarzem.</i></p>` },
    { t: 'Adjetivos de personalidade no feminino', h: `
      <table><tr><th>Ele</th><th>Ela</th></tr>
      <tr><td>miły</td><td>miła</td></tr><tr><td>cierpliwy</td><td>cierpliwa</td></tr>
      <tr><td>towarzyski</td><td>towarzyska</td></tr><tr><td>nieśmiały</td><td>nieśmiała</td></tr></table>` },
  ],
  dialogue: { t: 'Speed date', l: [
    ['Agata', 'Cześć! Jestem Agata. Kim jesteś z zawodu?', 'Oi! Eu sou a Agata. Qual é a sua profissão?'],
    ['Paweł', 'Jestem fotografem. A ty?', 'Sou fotógrafo. E você?'],
    ['Agata', 'Jestem prawniczką. Praca jest poważna, ale ja jestem wesoła!', 'Sou advogada. O trabalho é sério, mas eu sou alegre!'],
    ['Paweł', 'Widzę! Masz piękny uśmiech.', 'Estou vendo! Você tem um sorriso lindo.'],
    ['Agata', 'Dziękuję, to miłe. Jaki jesteś?', 'Obrigada, que gentil. Como você é?'],
    ['Paweł', 'Jestem trochę nieśmiały, ale bardzo cierpliwy i kreatywny.', 'Sou um pouco tímido, mas muito paciente e criativo.'],
    ['Agata', 'Jesteś romantyczny?', 'Você é romântico?'],
    ['Paweł', 'Tak, chyba tak. A ty jesteś towarzyska?', 'Sim, acho que sim. E você é sociável?'],
    ['Agata', 'Bardzo! I szczera. Ty nie jesteś leniwy, prawda?', 'Muito! E sincera. Você não é preguiçoso, né?'],
    ['Paweł', 'Nie! Jestem bardzo pracowity.', 'Não! Sou muito trabalhador.'],
  ]},
  fill: [
    ['Jestem ___. (lekarz)', 'lekarzem', 'Sou médico.'],
    ['Ona jest ___. (nauczycielka)', 'nauczycielką', 'Ela é professora.'],
    ['On jest ___. (programista)', 'programistą', 'Ele é programador.'],
    ['Jestem ___. (Brazylijczyk)', 'Brazylijczykiem', 'Sou brasileiro.'],
    ['Anna jest bardzo ___. (miły)', 'miła', 'A Anna é muito gentil.'],
    ['Kim jesteś z ___?', 'zawodu', 'Qual é a sua profissão?'],
    ['Ładnie ___ po polsku!', 'mówisz', 'Você fala polonês muito bem!'],
  ],
  order: [
    ['Jestem analitykiem danych.', 'Sou analista de dados.'],
    ['Ona jest wesoła i bardzo cierpliwa.', 'Ela é alegre e muito paciente.'],
    ['Masz piękny uśmiech.', 'Você tem um sorriso lindo.'],
    ['Mój kolega jest fotografem.', 'Meu colega é fotógrafo.'],
  ],
  write: {
    p: 'Escreva um perfil sobre você e sobre uma pessoa próxima, e termine com um elogio para ela.',
    c: ['Use być + instrumental para duas profissões ou nacionalidades', 'Use pelo menos cinco adjetivos de personalidade (com o gênero certo)', 'Use um conector (ale, bo ou więc)', 'Termine com um elogio'],
    min: 50,
  },
});
