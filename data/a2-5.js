/* Polonês A2 — capítulos 9 e 10 (Busuu A2, cap. 5). */
COURSE.add('a2', {
  n: 9, gl: ['Ą', 'będą', 'ą no fim soa como um "om" nasal: "ben-dom"'],
  pl: 'Wakacje nad morzem', pt: 'Férias na praia, o tempo e o futuro',
  busuu: ['Beach holidays', "It's raining!", 'Grammar: Future'],
  goals: ['Falar de férias na praia e nas montanhas', 'Descrever o tempo: pada deszcz, świeci słońce', 'Formar o futuro: będę + infinitivo', 'Usar o futuro perfectivo: pojadę, zobaczę'],
  vocab: [
    { g: 'Na praia', w: [
      ['wakacje', 'férias (de verão, escolares)', 'só plural', 'Gdzie jedziesz na *wakacje*?', 'Para onde você vai nas férias?'],
      ['nad morzem', 'na praia, no litoral', 'aonde: nad morze', 'Latem odpoczywamy *nad morzem*.', 'No verão descansamos no litoral.'],
      ['plaża', 'praia (a faixa de areia)', '', 'Cały dzień leżę na *plaży*.', 'Fico o dia todo deitado na praia.'],
      ['piasek', 'areia', '', '*Piasek* jest bardzo gorący.', 'A areia está muito quente.'],
      ['fala', 'onda', '', 'Dziś są duże *fale*.', 'Hoje tem ondas grandes.'],
      ['opalać się', 'tomar sol', '', 'Na plaży *opalam się* i czytam.', 'Na praia tomo sol e leio.'],
      ['pływać', 'nadar', '', 'Codziennie *pływam* w morzu.', 'Nado no mar todo dia.'],
      ['krem z filtrem', 'protetor solar', '', 'Mam w torbie *krem z filtrem*.', 'Tenho protetor solar na bolsa.'],
      ['ręcznik', 'toalha', '', 'Biorę *ręcznik* na plażę.', 'Levo a toalha para a praia.'],
      ['kostium kąpielowy', 'maiô, roupa de banho', 'para homem: kąpielówki', 'Mam nowy *kostium kąpielowy*.', 'Tenho um maiô novo.'],
      ['leżak', 'espreguiçadeira', '', 'Dziadek śpi na *leżaku*.', 'O avô dorme na espreguiçadeira.'],
      ['parawan', 'corta-vento de praia', 'símbolo das praias polonesas', 'Na polskiej plaży każdy ma *parawan*.', 'Na praia polonesa todo mundo tem um corta-vento.'],
      ['w górach', 'nas montanhas', 'aonde: w góry', 'Zimą jeżdżę na nartach *w górach*.', 'No inverno esquio nas montanhas.'],
    ]},
    { g: 'O tempo', w: [
      ['pogoda', 'tempo (clima)', '', 'Jaka jest dziś *pogoda*?', 'Como está o tempo hoje?'],
      ['Pada deszcz.', 'Está chovendo.', 'futuro: będzie padać', 'Nie idę na plażę, bo *pada deszcz*.', 'Não vou à praia porque está chovendo.'],
      ['Świeci słońce.', 'Está fazendo sol.', '', 'Dzisiaj *świeci słońce*!', 'Hoje está fazendo sol!'],
      ['Jest gorąco / zimno.', 'Está quente / frio.', '', 'W lipcu *jest gorąco*.', 'Em julho faz calor.'],
      ['Wieje wiatr.', 'Está ventando.', '', 'Nad morzem często *wieje wiatr*.', 'No litoral venta muito.'],
      ['pochmurno', 'nublado', '', 'Jest *pochmurno*, ale ciepło.', 'Está nublado, mas quente.'],
      ['burza', 'tempestade', '', 'Wieczorem będzie *burza*.', 'À noite vai ter tempestade.'],
      ['prognoza pogody', 'previsão do tempo', '', 'Według *prognozy pogody* jutro będzie padać.', 'Segundo a previsão do tempo, amanhã vai chover.'],
    ]},
    { g: 'Planos e futuro', w: [
      ['będę', 'eu serei / estarei; vou (+ verbo)', 'futuro de być', 'Jutro *będę* w Gdańsku.', 'Amanhã estarei em Gdańsk.'],
      ['pojechać', 'ir (de veículo, uma vez)', 'pojadę, pojedziesz…', 'W lipcu *pojadę* nad morze.', 'Em julho vou para o litoral.'],
      ['zobaczyć', 'ver', 'zobaczę, zobaczysz…', 'Jutro *zobaczymy* morze!', 'Amanhã vamos ver o mar!'],
      ['odpocząć', 'descansar', 'odpocznę, odpoczniesz…', 'Na wakacjach *odpocznę*.', 'Nas férias vou descansar.'],
      ['zwiedzać', 'visitar (pontos turísticos)', '', 'Będziemy *zwiedzać* Gdańsk.', 'Vamos conhecer Gdańsk.'],
      ['za tydzień', 'daqui a uma semana', 'za = daqui a', '*Za tydzień* jadę na urlop.', 'Daqui a uma semana saio de férias.'],
      ['w przyszłym roku', 'no ano que vem', '', '*W przyszłym roku* pojadę do Polski.', 'No ano que vem vou para a Polônia.'],
      ['mam nadzieję, że…', 'espero que…', '', '*Mam nadzieję, że* będzie słońce.', 'Espero que faça sol.'],
    ]},
  ],
  grammar: [
    { t: 'O futuro de być', h: `
      <table><tr><th></th><th>być (futuro)</th></tr>
      <tr><td>ja</td><td>będę</td></tr><tr><td>ty</td><td>będziesz</td></tr>
      <tr><td>on / ona</td><td>będzie</td></tr><tr><td>my</td><td>będziemy</td></tr>
      <tr><td>wy</td><td>będziecie</td></tr><tr><td>oni / one</td><td>będą</td></tr></table>
      <p><i>Jutro będę w domu.</i> · <i>Będzie gorąco.</i> · <i>Gdzie będziecie w sierpniu?</i></p>` },
    { t: 'Futuro composto (verbos imperfectivos)', h: `
      <p>Para ações longas, repetidas ou em andamento no futuro: <b>będę + infinitivo imperfectivo</b>.</p>
      <p><i>Na wakacjach będę pływać codziennie.</i> <em>(Nas férias vou nadar todo dia.)</em></p>
      <p><i>Jutro będzie padać.</i> <em>(Amanhã vai chover.)</em></p>
      <p class="tip">Também se diz <i>będę pływał / pływała</i>, com a forma do passado. As duas versões estão certas; o infinitivo é mais fácil.</p>` },
    { t: 'Futuro simples (verbos perfectivos)', h: `
      <p>Lembra do aspecto (capítulo 5)? Um verbo <b>perfectivo</b> conjugado como presente já é <b>futuro</b>: uma ação única, com resultado.</p>
      <table><tr><th>Imperfectivo (presente)</th><th>Perfectivo (futuro)</th></tr>
      <tr><td><i>Jadę do Gdańska.</i><br><em>Estou indo a Gdańsk.</em></td><td><i>Pojadę do Gdańska.</i><br><em>Vou (irei) a Gdańsk.</em></td></tr>
      <tr><td><i>Widzę morze.</i><br><em>Vejo o mar.</em></td><td><i>Zobaczę morze.</i><br><em>Vou ver o mar.</em></td></tr>
      <tr><td><i>Kupuję bilet.</i><br><em>Estou comprando a passagem.</em></td><td><i>Kupię bilet.</i><br><em>Vou comprar a passagem.</em></td></tr></table>
      <p class="tip">Não existe "będę zobaczyć": perfectivos nunca usam będę.</p>` },
    { t: 'Tempo e lugar de férias', h: `
      <p><b>Tempo:</b> <i>pada deszcz</i>, <i>świeci słońce</i>, <i>wieje wiatr</i>; e com "jest": <i>jest gorąco, zimno, pochmurno</i>. No futuro: <i>będzie padać</i>, <i>będzie gorąco</i>.</p>
      <table><tr><th>Onde?</th><th>Aonde?</th></tr>
      <tr><td><i>nad morzem</i></td><td><i>nad morze</i></td></tr>
      <tr><td><i>nad jeziorem</i></td><td><i>nad jezioro</i></td></tr>
      <tr><td><i>w górach</i></td><td><i>w góry</i></td></tr></table>` },
  ],
  checks: [
    ['Jutro ___ padać.', ['będzie', 'będę', 'jest'], 0, 'Futuro do tempo: będzie padać.'],
    ['Jutro ___ morze! (zobaczyć, my)', ['zobaczymy', 'widzimy', 'zobaczyliśmy'], 0, 'Perfectivo conjugado = futuro: zobaczymy.'],
    ['Latem odpoczywamy nad ___.', ['morze', 'morzem', 'morza'], 1, 'Onde? nad + instrumental: nad morzem.'],
    ['Na wakacjach będziemy ___ Gdańsk.', ['zwiedzać', 'zwiedzamy', 'zwiedzili'], 0, 'będę / będziemy + infinitivo.'],
  ],
  dialogue: { t: 'Planos para o verão', l: [
    ['Ola', 'Lucas, gdzie jedziesz na wakacje?', 'Lucas, para onde você vai nas férias?'],
    ['Lucas', 'W lipcu pojadę nad morze, do Łeby. Będę pływać i opalać się.', 'Em julho vou para o litoral, para Łeba. Vou nadar e tomar sol.'],
    ['Ola', 'Nad Bałtyk? Morze jest zimne!', 'No Báltico? O mar é gelado!'],
    ['Lucas', 'Wiem, ale mam nadzieję, że będzie gorąco. Jaka będzie pogoda?', 'Eu sei, mas espero que faça calor. Como vai estar o tempo?'],
    ['Ola', 'Według prognozy pierwszy tydzień będzie słoneczny. Potem będzie padać.', 'Segundo a previsão, a primeira semana vai ser de sol. Depois vai chover.'],
    ['Lucas', 'Pada deszcz… i co wtedy?', 'Chuva… e aí?'],
    ['Ola', 'Wtedy będziesz zwiedzać! Koło Łeby są ruchome wydmy. Zobaczysz małą pustynię.', 'Aí você vai passear! Perto de Łeba tem dunas móveis. Você vai ver um pequeno deserto.'],
    ['Lucas', 'Super. A ty? Co będziesz robić?', 'Ótimo. E você? O que vai fazer?'],
    ['Ola', 'Pojadę z siostrą w góry, do Zakopanego. Tam odpocznę.', 'Vou com minha irmã para as montanhas, para Zakopane. Lá vou descansar.'],
    ['Lucas', 'Pamiętaj: krem z filtrem, ręcznik i parawan!', 'Lembre: protetor solar, toalha e corta-vento!'],
    ['Ola', 'Parawan jest na plażę, nie w góry!', 'Corta-vento é para a praia, não para as montanhas!'],
  ]},
  fill: [
    ['Jutro ___ gorąco.', 'będzie', 'Amanhã vai fazer calor.'],
    ['W sierpniu ___ w Gdańsku. (być, ja)', 'będę', 'Em agosto estarei em Gdańsk.'],
    ['Na wakacjach ___ pływać codziennie. (my)', 'będziemy', 'Nas férias vamos nadar todo dia.'],
    ['Za tydzień ___ morze! (zobaczyć, ja)', 'zobaczę', 'Daqui a uma semana vou ver o mar!'],
    ['Latem odpoczywam nad ___. (morze)', 'morzem', 'No verão descanso no litoral.'],
    ['Nie idę na plażę, bo ___ deszcz.', 'pada', 'Não vou à praia porque está chovendo.'],
  ],
  order: [
    ['W lipcu pojadę nad morze.', 'Em julho vou para o litoral.'],
    ['Mam nadzieję, że będzie słońce.', 'Espero que faça sol.'],
    ['Jutro będzie padać.', 'Amanhã vai chover.'],
    ['Będziemy zwiedzać Gdańsk.', 'Vamos conhecer Gdańsk.'],
    ['Na plaży opalam się i pływam.', 'Na praia tomo sol e nado.'],
  ],
  write: {
    p: 'Escreva sobre suas próximas férias, reais ou sonhadas: para onde vai, com quem, o que vai fazer, como estará o tempo e o que vocês vão fazer se chover.',
    c: ['Futuro com będę + infinitivo', 'Dois verbos perfectivos no futuro (pojadę, zobaczę…)', 'Duas frases sobre o tempo', 'nad morzem / w górach / nad jeziorem'],
    min: 90,
  },
});

COURSE.add('a2', {
  n: 10, gl: ['W', 'wagon', 'w soa como "v"; no fim da palavra, vira "f"'],
  pl: 'Mój lot jest z terminalu 2', pt: 'Aeroporto, trem e os verbos de movimento',
  busuu: ['My flight leaves from terminal 2.', 'I like taking the train.'],
  goals: ['Se virar no aeroporto e na estação', 'Comprar passagem de ida ou de ida e volta', 'Distinguir jechać × jeździć e lecieć × latać', 'Dizer de onde para onde e com que meio: z Warszawy do Krakowa pociągiem'],
  vocab: [
    { g: 'No aeroporto', w: [
      ['lotnisko', 'aeroporto', 'onde: na lotnisku', 'Jadę na *lotnisko* taksówką.', 'Vou ao aeroporto de táxi.'],
      ['lot', 'voo', '', 'Mój *lot* jest o szóstej rano.', 'Meu voo é às seis da manhã.'],
      ['samolot', 'avião', '', 'Lecę *samolotem* do Lizbony.', 'Vou de avião para Lisboa.'],
      ['terminal', 'terminal', '', 'Mój lot jest z *terminalu* 2.', 'Meu voo sai do terminal 2.'],
      ['wyjście', 'portão (de embarque)', 'também: bramka', 'Proszę iść do *wyjścia* numer pięć.', 'Siga para o portão número cinco.'],
      ['odprawa', 'check-in', '', '*Odprawa* zaczyna się o czwartej.', 'O check-in começa às quatro.'],
      ['karta pokładowa', 'cartão de embarque', '', 'Proszę pokazać *kartę pokładową*.', 'Mostre o cartão de embarque, por favor.'],
      ['kontrola bezpieczeństwa', 'controle de segurança', '', 'Na *kontroli bezpieczeństwa* jest kolejka.', 'Tem fila no controle de segurança.'],
      ['bagaż podręczny', 'bagagem de mão', '', 'Mam tylko *bagaż podręczny*.', 'Tenho só bagagem de mão.'],
      ['walizka', 'mala', '', 'Moja *walizka* jest za ciężka.', 'Minha mala está pesada demais.'],
      ['opóźniony', 'atrasado', '', 'Lot jest *opóźniony*.', 'O voo está atrasado.'],
      ['przylot / odlot', 'chegada / partida (de voo)', '', '*Przylot* jest o dziesiątej.', 'A chegada é às dez.'],
    ]},
    { g: 'Na estação', w: [
      ['dworzec', 'estação (de trem ou ônibus)', 'onde: na dworcu', 'Spotkajmy się na *dworcu*.', 'Vamos nos encontrar na estação.'],
      ['pociąg', 'trem', '', 'Lubię jeździć *pociągiem*.', 'Gosto de andar de trem.'],
      ['peron', 'plataforma', '', 'Pociąg odjeżdża z *peronu* trzeciego.', 'O trem parte da plataforma três.'],
      ['bilet w jedną stronę', 'passagem só de ida', '', 'Poproszę *bilet w jedną stronę*.', 'Uma passagem só de ida, por favor.'],
      ['bilet powrotny', 'passagem de ida e volta', '', 'Poproszę *bilet powrotny* do Krakowa.', 'Uma passagem de ida e volta para Cracóvia, por favor.'],
      ['miejscówka', 'lugar marcado', 'informal', 'Masz *miejscówkę*?', 'Você tem lugar marcado?'],
      ['wagon', 'vagão', '', 'Siedzę w *wagonie* numer pięć.', 'Estou sentado no vagão número cinco.'],
      ['przedział', 'cabine (do trem)', '', 'W *przedziale* jest sześć miejsc.', 'Na cabine há seis lugares.'],
      ['przesiadka', 'baldeação, conexão', '', 'Mam *przesiadkę* w Poznaniu.', 'Faço baldeação em Poznań.'],
      ['odjeżdżać / przyjeżdżać', 'partir / chegar (veículo)', '', 'Pociąg *odjeżdża* o ósmej.', 'O trem parte às oito.'],
    ]},
    { g: 'Indo e vindo', w: [
      ['jechać', 'ir de veículo (agora, uma direção)', 'jadę, jedziesz…', 'Teraz *jadę* do pracy.', 'Agora estou indo para o trabalho.'],
      ['jeździć', 'ir de veículo (hábito)', 'jeżdżę, jeździsz…', 'Często *jeżdżę* pociągiem.', 'Ando de trem com frequência.'],
      ['lecieć', 'voar, ir de avião (agora)', 'lecę, lecisz…', 'Jutro *lecę* do Brazylii.', 'Amanhã vou de avião para o Brasil.'],
      ['latać', 'voar (hábito)', 'latam, latasz…', 'Nie lubię *latać*.', 'Não gosto de voar.'],
      ['z… do…', 'de… para…', 'genitivo', 'Jadę *z* Warszawy *do* Krakowa.', 'Vou de Varsóvia para Cracóvia.'],
      ['wracać', 'voltar', '', '*Wracam* w niedzielę.', 'Volto no domingo.'],
      ['Miłej podróży!', 'Boa viagem!', '', 'Jutro lecisz? *Miłej podróży!*', 'Você voa amanhã? Boa viagem!'],
    ]},
  ],
  grammar: [
    { t: 'Dois verbos para cada movimento', h: `
      <p>Como em iść / chodzić (capítulo 3): um verbo para <b>agora, numa direção</b>, outro para <b>hábito, ida e volta</b>.</p>
      <table><tr><th></th><th>jechać</th><th>jeździć</th><th>lecieć</th><th>latać</th></tr>
      <tr><td>ja</td><td>jadę</td><td>jeżdżę</td><td>lecę</td><td>latam</td></tr>
      <tr><td>ty</td><td>jedziesz</td><td>jeździsz</td><td>lecisz</td><td>latasz</td></tr>
      <tr><td>on / ona</td><td>jedzie</td><td>jeździ</td><td>leci</td><td>lata</td></tr>
      <tr><td>my</td><td>jedziemy</td><td>jeździmy</td><td>lecimy</td><td>latamy</td></tr>
      <tr><td>wy</td><td>jedziecie</td><td>jeździcie</td><td>lecicie</td><td>latacie</td></tr>
      <tr><td>oni</td><td>jadą</td><td>jeżdżą</td><td>lecą</td><td>latają</td></tr></table>
      <p><i>Teraz jadę na dworzec.</i> × <i>Codziennie jeżdżę do pracy autobusem.</i></p>` },
    { t: 'Com que meio? Instrumental', h: `
      <p>O meio de transporte vai para o <b>instrumental</b>, sem preposição (A1):</p>
      <p><i>pociągiem</i> · <i>samolotem</i> · <i>autobusem</i> · <i>samochodem</i> · <i>tramwajem</i> · <i>rowerem</i> (de bicicleta)</p>
      <p>A pé: <i>pieszo</i> ou <i>na piechotę</i>.</p>` },
    { t: 'De onde, para onde, onde', h: `
      <table><tr><th>De onde?</th><th>Para onde?</th><th>Onde?</th></tr>
      <tr><td><i>z Warszawy</i></td><td><i>do Krakowa</i></td><td><i>w Krakowie</i></td></tr>
      <tr><td><i>z lotniska</i></td><td><i>na lotnisko</i></td><td><i>na lotnisku</i></td></tr>
      <tr><td><i>z dworca</i></td><td><i>na dworzec</i></td><td><i>na dworcu</i></td></tr></table>
      <p class="tip">"z" e "do" pedem genitivo. Aeroporto e estação usam <b>na</b>, como universidade.</p>` },
  ],
  checks: [
    ['Codziennie ___ do pracy pociągiem.', ['jadę', 'jeżdżę'], 1, 'Hábito → jeździć.'],
    ['Jutro ___ do Lizbony. (voar, eu)', ['lecę', 'latam'], 0, 'Uma viagem, uma direção → lecieć.'],
    ['Lubię podróżować ___. (pociąg)', ['pociąg', 'pociągiem', 'pociągu'], 1, 'Meio de transporte: instrumental.'],
    ['Jadę z ___ do Krakowa. (Warszawa)', ['Warszawa', 'Warszawy', 'Warszawie'], 1, 'z + genitivo.'],
  ],
  dialogue: { t: 'Na estação Warszawa Centralna', l: [
    ['Lucas', 'Dzień dobry. Poproszę bilet do Gdańska na jutro rano.', 'Bom dia. Uma passagem para Gdańsk para amanhã de manhã, por favor.'],
    ['Kasjerka', 'W jedną stronę czy powrotny?', 'Só de ida ou ida e volta?'],
    ['Lucas', 'Powrotny, proszę. Wracam w niedzielę.', 'Ida e volta, por favor. Volto no domingo.'],
    ['Kasjerka', 'Jest pociąg o siódmej. Odjeżdża z peronu trzeciego, bez przesiadki.', 'Tem um trem às sete. Sai da plataforma três, sem baldeação.'],
    ['Lucas', 'Świetnie. Czy jest miejsce przy oknie?', 'Ótimo. Tem lugar na janela?'],
    ['Kasjerka', 'Tak. Wagon pięć, miejsce dwanaście.', 'Sim. Vagão cinco, lugar doze.'],
    ['Lucas', 'Dziękuję. Płacę kartą.', 'Obrigado. Pago com cartão.'],
    ['Ola', 'Lucas, nie lecisz samolotem?', 'Lucas, você não vai de avião?'],
    ['Lucas', 'Nie, lubię jeździć pociągiem. Na lotnisku zawsze są kolejki.', 'Não, gosto de andar de trem. No aeroporto sempre tem fila.'],
    ['Ola', 'A ja w piątek lecę do Londynu. Mój lot jest z terminalu 2, o szóstej rano!', 'E eu vou para Londres na sexta. Meu voo sai do terminal 2, às seis da manhã!'],
    ['Lucas', 'O szóstej? Biedna! Miłej podróży!', 'Às seis? Coitada! Boa viagem!'],
    ['Ola', 'Nawzajem!', 'Para você também!'],
  ]},
  fill: [
    ['Często ___ pociągiem. (jeździć, ja)', 'jeżdżę', 'Ando de trem com frequência.'],
    ['Teraz ___ na lotnisko. (jechać, ja)', 'jadę', 'Agora estou indo para o aeroporto.'],
    ['Jutro ___ do Brazylii. (lecieć, ona)', 'leci', 'Amanhã ela voa para o Brasil.'],
    ['Pociąg odjeżdża z ___ trzeciego. (peron)', 'peronu', 'O trem parte da plataforma três.'],
    ['Poproszę bilet ___ do Krakowa. (ida e volta)', 'powrotny', 'Uma passagem de ida e volta para Cracóvia.'],
    ['Jadę do Gdańska ___. (samochód)', 'samochodem', 'Vou para Gdańsk de carro.'],
  ],
  order: [
    ['Mój lot jest z terminalu 2.', 'Meu voo sai do terminal 2.'],
    ['Pociąg odjeżdża o siódmej.', 'O trem parte às sete.'],
    ['Poproszę bilet powrotny do Gdańska.', 'Uma passagem de ida e volta para Gdańsk, por favor.'],
    ['Lubię jeździć pociągiem.', 'Gosto de andar de trem.'],
    ['Mam przesiadkę w Poznaniu.', 'Faço baldeação em Poznań.'],
  ],
  write: {
    p: 'Conte uma viagem, passada ou futura, de trem ou de avião: de onde para onde, como você comprou a passagem, o que aconteceu na estação ou no aeroporto e por que você prefere um meio de transporte ao outro.',
    c: ['jechać / jeździć ou lecieć / latać bem usados', 'z… do… com genitivo', 'Meio de transporte no instrumental', 'Cinco palavras de estação ou aeroporto'],
    min: 90,
  },
});
