/* Polonês A1 — capítulos 23 a 25 (complemento a partir do Babbel A1, unidades 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 21, 22 e 23: restaurante e hotel, aprender e pedir com educação, pessoas, família, profissões e casos) */
COURSE.add('a1', {
  n: 23, gl: ['Cz / Ć', 'czekolada', 'cz é um "tch" firme; ć é um "tch" suave. Czekolada ≈ "tchekoláda"'],
  pl: 'Mam rezerwację', pt: 'Restaurante, pedidos, hotel e o plural de respeito (państwo)',
  busuu: ['Babbel A1, unidades 5, 6, 15, 21 e 23: Poproszę jedno piwo, Smacznego!, Co jesz na śniadanie?, Poproszę gorącą czekoladę, Mam rezerwację'],
  goals: ['Pedir pratos e bebidas num restaurante polonês', 'Concordar o adjetivo com o gênero: jedno duże piwo, jedną dużą kawę', 'Fazer check-in num hotel e pedir o essencial', 'Usar państwo para tratar duas pessoas com respeito'],
  vocab: [
    { g: 'Pratos poloneses', w: [
      ['zupa', 'sopa', 'f', 'Na obiad jem *zupę*.', 'No almoço como sopa.'],
      ['rosół', 'caldo de galinha', 'm', '*Rosół* z makaronem to klasyka.', 'Caldo de galinha com macarrão é um clássico.'],
      ['barszcz', 'borscht (sopa de beterraba)', 'm', 'Na święta jemy *barszcz*.', 'No Natal comemos borscht.'],
      ['pierogi', 'pierogi (massa recheada)', 'm pl', 'Poproszę *pierogi* z mięsem.', 'Vou querer pierogi de carne.'],
      ['bigos', 'bigos (ensopado de repolho)', 'm', 'Babcia robi pyszny *bigos*.', 'A vovó faz um bigos delicioso.'],
      ['kotlet schabowy', 'costeleta de porco empanada', 'm', 'Na obiad jest *kotlet schabowy*.', 'No almoço há costeleta de porco empanada.'],
      ['gołąbki', 'charutinhos de repolho', 'm pl', '*Gołąbki* z sosem są pyszne.', 'Os charutinhos de repolho com molho são deliciosos.'],
      ['naleśniki', 'panquecas', 'm pl', 'Na deser są *naleśniki*.', 'De sobremesa há panquecas.'],
      ['placki ziemniaczane', 'panquecas de batata', 'm pl', 'Lubię *placki ziemniaczane*.', 'Gosto de panquecas de batata.'],
      ['sałatka', 'salada', 'f', 'Poproszę *sałatkę*.', 'Vou querer uma salada.'],
      ['kurczak', 'frango', 'm', 'Jem *kurczaka* z ryżem.', 'Como frango com arroz.'],
      ['mięso', 'carne', 'n', 'Nie jem *mięsa*.', 'Não como carne.'],
      ['ryba', 'peixe', 'f', 'Czy jest dziś *ryba*?', 'Hoje tem peixe?'],
      ['ryż', 'arroz', 'm', 'Do kurczaka poproszę *ryż*.', 'Com o frango vou querer arroz.'],
      ['surówka', 'salada crua ralada', 'f', 'Do kotleta jest *surówka*.', 'Com a costeleta vem salada ralada.'],
    ]},
    { g: 'Bebidas', w: [
      ['piwo', 'cerveja', 'n', 'Poproszę jedno *piwo*.', 'Vou querer uma cerveja.'],
      ['wino białe', 'vinho branco', 'czerwone = tinto', 'Czy jest *wino białe*?', 'Tem vinho branco?'],
      ['lemoniada', 'limonada', 'f', 'Dzieci piją *lemoniadę*.', 'As crianças bebem limonada.'],
      ['kompot', 'bebida caseira de frutas cozidas', 'm', 'Babcia robi *kompot* z wiśni.', 'A vovó faz compota líquida de cereja.'],
      ['sok pomarańczowy', 'suco de laranja', 'm', 'Poproszę *sok pomarańczowy*.', 'Vou querer suco de laranja.'],
    ]},
    { g: 'No restaurante', w: [
      ['karta dań', 'cardápio', 'f; também menu', 'Poproszę *kartę dań*.', 'Vou querer o cardápio.'],
      ['przystawka', 'entrada', 'f', 'Na *przystawkę* biorę sałatkę.', 'De entrada pego uma salada.'],
      ['danie główne', 'prato principal', 'n', 'Na *danie główne* poproszę kotlet.', 'De prato principal vou querer costeleta.'],
      ['deser', 'sobremesa', 'm', 'Na *deser* poproszę naleśniki.', 'De sobremesa vou querer panquecas.'],
      ['kelner', 'garçom', 'kelnerka = garçonete', '*Kelner* przynosi zupę.', 'O garçom traz a sopa.'],
      ['stolik', 'mesa (de restaurante)', 'm', 'Czy jest wolny *stolik*?', 'Tem uma mesa livre?'],
      ['rachunek', 'conta', 'm', 'Poproszę *rachunek*.', 'A conta, por favor.'],
      ['napiwek', 'gorjeta', 'm', 'Zostawiam *napiwek*.', 'Deixo gorjeta.'],
      ['Co polecasz?', 'O que você recomenda?', 'formal: Co pan poleca?', '*Co polecasz?* — Polecam bigos.', 'O que você recomenda? — Recomendo o bigos.'],
      ['Smacznego!', 'Bom apetite!', 'resposta: Dziękuję, nawzajem.', '*Smacznego!* — Dziękuję, nawzajem.', 'Bom apetite! — Obrigado, igualmente.'],
      ['wegetarianka', 'vegetariana', 'm: wegetarianin', 'Jestem *wegetarianką*.', 'Sou vegetariana.'],
      ['Czy jest coś bez mięsa?', 'Tem algo sem carne?', '', '*Czy jest coś bez mięsa?*', 'Tem algo sem carne?'],
    ]},
    { g: 'No hotel', w: [
      ['hotel', 'hotel', 'm', 'Mieszkam w małym *hotelu*.', 'Estou num hotel pequeno.'],
      ['rezerwacja', 'reserva', 'f', 'Mam *rezerwację* na nazwisko Silva.', 'Tenho uma reserva no nome Silva.'],
      ['recepcja', 'recepção', 'f', 'Gdzie jest *recepcja*?', 'Onde fica a recepção?'],
      ['pokój dwuosobowy', 'quarto de casal (ou duplo)', 'jednoosobowy = solteiro', 'Poproszę *pokój dwuosobowy*.', 'Vou querer um quarto de casal.'],
      ['klucz', 'chave', 'm', 'Poproszę *klucz* do pokoju.', 'Vou querer a chave do quarto.'],
      ['noc', 'noite', 'f, gen. nocy', 'Na ile *nocy*?', 'Por quantas noites?'],
      ['wliczony w cenę', 'incluído no preço', '', 'Obiad jest *wliczony w cenę*.', 'O almoço está incluído no preço.'],
      ['łazienka', 'banheiro', 'f', 'Pokój ma własną *łazienkę*.', 'O quarto tem banheiro próprio.'],
      ['wi-fi', 'wi-fi', '', 'Czy jest tu darmowe *wi-fi*?', 'Tem wi-fi grátis aqui?'],
      ['wymeldować się', 'fazer check-out', 'zameldować się = check-in', 'Chcę się *wymeldować*.', 'Quero fazer o check-out.'],
      ['O której jest śniadanie?', 'A que horas é o café da manhã?', '', '*O której jest śniadanie?*', 'A que horas é o café da manhã?'],
      ['państwo', 'os senhores, o casal', 'verbo no plural 3ª pessoa', 'Czy *państwo* mają rezerwację?', 'Os senhores têm reserva?'],
      ['Witamy!', 'Bem-vindos!', '', '*Witamy!* Zapraszamy do środka.', 'Bem-vindos! Entrem.'],
    ]},
  ],
  grammar: [
    { t: 'Pedir com adjetivo: gênero e acusativo', h: `
      <p>Depois de <b>poproszę</b>, o adjetivo e o número acompanham o gênero da bebida ou do prato. Só o <b>feminino</b> muda no acusativo:</p>
      <table><tr><th>Gênero</th><th>Pedido</th></tr>
      <tr><td>Neutro (piwo)</td><td>Poproszę <b>jedno duże</b> piwo.</td></tr>
      <tr><td>Feminino (kawa)</td><td>Poproszę <b>jedną dużą</b> kawę.</td></tr>
      <tr><td>Masculino (sok)</td><td>Poproszę <b>jeden duży</b> sok.</td></tr></table>
      <p class="tip">Para a ordem do jantar use três blocos fixos: <b>na przystawkę</b>, <b>na danie główne</b>, <b>na deser</b> + <i>poproszę</i> + acusativo.</p>` },
    { t: 'Państwo: tratamento de duas pessoas', h: `
      <p>Para uma pessoa você diz <b>pan</b> (homem) ou <b>pani</b> (mulher) com o verbo na 3ª pessoa do singular. Para um casal ou grupo misto, diga <b>państwo</b> com o verbo na <b>3ª pessoa do plural</b>:</p>
      <table><tr><th>Um</th><th>Dois ou mais</th></tr>
      <tr><td>Czy <b>pan ma</b> rezerwację?</td><td>Czy <b>państwo mają</b> rezerwację?</td></tr>
      <tr><td>Dzień dobry <b>panu</b>.</td><td>Dzień dobry <b>państwu</b>.</td></tr></table>
      <p class="tip">Para dois homens, <b>panowie</b>; para duas mulheres, <b>panie</b>. Em recepções de hotel e restaurantes, você ouve <i>państwo</i> o tempo todo.</p>` },
    { t: 'Frases fixas de check-in', h: `
      <p>Decore como blocos: <b>Mam rezerwację na nazwisko…</b> (tenho reserva no nome…), <b>Na ile nocy?</b> (por quantas noites?), <b>Czy jest…?</b> (tem…?), <b>O której jest…?</b> (a que horas é…?).</p>` },
  ],
  checks: [
    ['Poproszę jedną ___ kawę. (grande)', ['dużą', 'duży', 'duże'], 0, 'Kawa é feminina e vai ao acusativo: dużą kawę.'],
    ['Poproszę jedno ___ piwo.', ['duże', 'dużą', 'duży'], 0, 'Piwo é neutro: duże.'],
    ['Czy ___ mają rezerwację? (os senhores)', ['państwo', 'panowie', 'pani'], 0, 'Państwo pede o verbo no plural: mają.'],
    ['O que significa "Smacznego!"?', ['Bom apetite!', 'A conta, por favor.', 'Bem-vindos!'], 0, 'Smacznego! diz-se antes de comer; a resposta é Dziękuję, nawzajem.'],
  ],
  dialogue: { t: 'Hotel i kolacja', l: [
    ['Recepcjonistka', 'Dzień dobry! Witamy! Czy państwo mają rezerwację?', 'Bom dia! Bem-vindos! Os senhores têm reserva?'],
    ['Lucas', 'Tak, mamy rezerwację na nazwisko Silva.', 'Sim, temos reserva no nome Silva.'],
    ['Recepcjonistka', 'Pokój dwuosobowy na trzy noce, zgadza się?', 'Quarto de casal por três noites, correto?'],
    ['Lucas', 'Tak. Czy śniadanie jest wliczone w cenę?', 'Sim. O café da manhã está incluído no preço?'],
    ['Recepcjonistka', 'Tak. Proszę, oto klucz do pokoju.', 'Sim. Aqui está a chave do quarto.'],
    ['Lucas', 'Dziękuję. Czy jest tu darmowe wi-fi?', 'Obrigado. Tem wi-fi grátis aqui?'],
    ['Kelner', 'Dobry wieczór. Proszę, karta dań.', 'Boa noite. Aqui está o cardápio.'],
    ['Lucas', 'Co pan poleca?', 'O que o senhor recomenda?'],
    ['Kelner', 'Polecam bigos i pierogi.', 'Recomendo o bigos e os pierogi.'],
    ['Lucas', 'Poproszę pierogi z mięsem i jedno duże piwo.', 'Vou querer pierogi de carne e uma cerveja grande.'],
    ['Ola', 'Dla mnie sałatka i lemoniada. Jestem wegetarianką.', 'Para mim, salada e limonada. Sou vegetariana.'],
    ['Kelner', 'Proszę bardzo. Smacznego!', 'Aqui está. Bom apetite!'],
    ['Lucas', 'Dziękuję, nawzajem!', 'Obrigado, igualmente!'],
  ]},
  fill: [
    ['Mam ___ na nazwisko Silva. (reserva)', 'rezerwację', 'Tenho reserva no nome Silva.'],
    ['Poproszę pokój ___. (de casal)', 'dwuosobowy', 'Vou querer um quarto de casal.'],
    ['Czy ___ mają rezerwację? (os senhores)', 'państwo', 'Os senhores têm reserva?'],
    ['Jestem ___. (vegetariana)', 'wegetarianką', 'Sou vegetariana.'],
    ['Poproszę ___. (a conta)', 'rachunek', 'A conta, por favor.'],
    ['Na ___ poproszę naleśniki. (sobremesa)', 'deser', 'De sobremesa vou querer panquecas.'],
  ],
  order: [
    ['Mam rezerwację na nazwisko Silva.', 'Tenho reserva no nome Silva.'],
    ['Czy państwo mają rezerwację?', 'Os senhores têm reserva?'],
    ['Poproszę pokój dwuosobowy na trzy noce.', 'Vou querer um quarto de casal por três noites.'],
    ['Poproszę jedno duże piwo.', 'Vou querer uma cerveja grande.'],
    ['Czy jest coś bez mięsa?', 'Tem algo sem carne?'],
  ],
  write: {
    p: 'Escreva o diálogo da chegada a um hotel polonês e, depois, o pedido de um jantar para duas pessoas.',
    c: ['Mam rezerwację na nazwisko…', 'Poproszę + adjetivo + substantivo (piwo, kawa, sok)', 'Na przystawkę, na danie główne ou na deser', 'Czy państwo…? ou Czy jest…?'],
    min: 60,
  },
});

COURSE.add('a1', {
  n: 24, gl: ['Y / I', 'mysz', 'y soa como um "i" fechado e curto, com a língua mais atrás; i soa como o "i" de "vida". Mysz ≠ miś'],
  pl: 'Proszę to powtórzyć!', pt: 'Aprender polonês, pedir com educação, palavrinhas, países e caminhos',
  busuu: ['Babbel A1, unidades 4, 7, 9, 16 e 17: Nie rozumiem, Którędy do centrum?, Czy mówisz po polsku?, Proszę to powtórzyć!, Gdzie mieszkasz? (mógłby/mogłaby, też/także/ale/czy, w + país, wiedzieć)'],
  goals: ['Dizer que você estuda polonês e pedir que repitam', 'Fazer pedidos educados com czy mógłby / mogłaby', 'Usar też, także, ale, czy, bo e dlatego', 'Dizer em que país você mora e perguntar o caminho'],
  vocab: [
    { g: 'Aprender', w: [
      ['uczyć się', 'estudar, aprender', 'uczę się, uczysz się', 'Ja *uczę się* polskiego.', 'Eu estudo polonês.'],
      ['uczyć', 'ensinar', '', 'Ola *uczy* angielskiego.', 'A Ola ensina inglês.'],
      ['nauczycielka', 'professora', 'm: nauczyciel', 'Moja *nauczycielka* jest z Krakowa.', 'Minha professora é de Kraków.'],
      ['lekcja', 'aula, lição', 'f', 'Mam dziś *lekcję* polskiego.', 'Hoje tenho aula de polonês.'],
      ['słowo', 'palavra', 'n, pl. słowa', 'Nie znam tego *słowa*.', 'Não conheço essa palavra.'],
      ['zdanie', 'frase', 'n', 'To *zdanie* jest łatwe.', 'Essa frase é fácil.'],
      ['łatwy', 'fácil', 'łatwa, łatwe', 'Ten test jest *łatwy*.', 'Esse teste é fácil.'],
      ['trudny', 'difícil', 'trudna, trudne', 'Polski jest *trudny*, ale ciekawy.', 'O polonês é difícil, mas interessante.'],
      ['ciekawy', 'interessante', 'ciekawa, ciekawe', 'Ta lekcja jest bardzo *ciekawa*.', 'Essa aula é muito interessante.'],
      ['rozumieć', 'entender', 'rozumiem, rozumiesz', 'Nie *rozumiem* tego słowa.', 'Não entendo essa palavra.'],
      ['znać', 'conhecer, saber (conhecer algo)', 'znam, znasz', '*Znam* kilka słów po polsku.', 'Sei algumas palavras em polonês.'],
      ['wiedzieć', 'saber (um fato)', 'wiem, wiesz, wie, wiemy, wiecie, wiedzą', 'Nie *wiem*, gdzie jest dworzec.', 'Não sei onde fica a estação.'],
    ]},
    { g: 'Pedindo ajuda', w: [
      ['powtórzyć', 'repetir', 'perf.', 'Proszę to *powtórzyć*.', 'Repita isso, por favor.'],
      ['mówić powoli', 'falar devagar', '', 'Proszę *mówić powoli*.', 'Fale devagar, por favor.'],
      ['Jak to się pisze?', 'Como se escreve?', '', '*Jak to się pisze?*', 'Como se escreve isso?'],
      ['Co to znaczy?', 'O que isso significa?', '', '*Co to znaczy?*', 'O que isso significa?'],
      ['Jak się mówi', 'Como se diz', '', '*Jak się mówi* "obrigado" po polsku?', 'Como se diz "obrigado" em polonês?'],
      ['mógłby / mogłaby', 'poderia (ele / ela)', 'condicional de móc', 'Czy *mogłaby* pani mówić powoli?', 'A senhora poderia falar devagar?'],
      ['mógłbym / mogłabym', 'eu poderia (homem / mulher)', '', '*Mógłbym* prosić o wodę?', 'Poderia pedir uma água?'],
    ]},
    { g: 'Palavrinhas', w: [
      ['też', 'também', 'sinônimo: także', 'Ja *też* uczę się polskiego.', 'Eu também estudo polonês.'],
      ['ale', 'mas', '', 'Chcę iść, *ale* nie mam czasu.', 'Quero ir, mas não tenho tempo.'],
      ['czy', 'partícula de pergunta (sim ou não)', 'também = se', '*Czy* mówisz po polsku?', 'Você fala polonês?'],
      ['albo', 'ou', '', 'Kawa *albo* herbata?', 'Café ou chá?'],
      ['trochę', 'um pouco', '', 'Mówię *trochę* po polsku.', 'Falo um pouco de polonês.'],
      ['tylko', 'só, apenas', '', 'Mam *tylko* dwa złote.', 'Só tenho dois zlotys.'],
      ['już', 'já', '', 'Mieszkam tu *już* rok.', 'Moro aqui há um ano.'],
      ['bo', 'porque', '', 'Uczę się, *bo* lubię polski.', 'Estudo porque gosto de polonês.'],
      ['dlatego', 'por isso', '', 'Lubię Polskę, *dlatego* tu mieszkam.', 'Gosto da Polônia, por isso moro aqui.'],
    ]},
    { g: 'Onde você mora', w: [
      ['w Polsce', 'na Polônia', 'Polska', 'Mieszkam *w Polsce*.', 'Moro na Polônia.'],
      ['w Brazylii', 'no Brasil', 'Brazylia', 'Moi rodzice mieszkają *w Brazylii*.', 'Meus pais moram no Brasil.'],
      ['w Portugalii', 'em Portugal', 'Portugalia', 'Pracuję *w Portugalii*.', 'Trabalho em Portugal.'],
      ['w Niemczech', 'na Alemanha', 'Niemcy (pl.)', 'Mój brat mieszka *w Niemczech*.', 'Meu irmão mora na Alemanha.'],
      ['we Włoszech', 'na Itália', 'Włochy (pl.)', 'Wakacje spędzam *we Włoszech*.', 'Passo as férias na Itália.'],
      ['w Hiszpanii', 'na Espanha', 'Hiszpania', 'Mieszkam *w Hiszpanii*.', 'Moro na Espanha.'],
      ['we Francji', 'na França', 'Francja; we antes de f', 'Ola studiuje *we Francji*.', 'A Ola estuda na França.'],
    ]},
    { g: 'Caminhos, bilhetes e correio', w: [
      ['Którędy do centrum?', 'Por onde se vai ao centro?', '', '*Którędy do centrum?* — Prosto.', 'Por onde se vai ao centro? — Reto.'],
      ['Czy wie pan', 'O senhor sabe', 'pani para mulher', '*Czy wie pan*, gdzie jest przystanek?', 'O senhor sabe onde fica o ponto?'],
      ['dworzec', 'estação (de trem ou ônibus)', 'm', 'Gdzie jest *dworzec*?', 'Onde fica a estação?'],
      ['przystanek', 'ponto de ônibus ou bonde', 'm', '*Przystanek* jest blisko.', 'O ponto fica perto.'],
      ['bilet normalny', 'bilhete inteiro', '', 'Poproszę jeden *bilet normalny*.', 'Vou querer um bilhete inteiro.'],
      ['bilet ulgowy', 'bilhete com desconto (estudante, idoso)', '', 'Poproszę *bilet ulgowy*.', 'Vou querer um bilhete com desconto.'],
      ['kasownik', 'validador de bilhetes', 'm', 'Przy drzwiach jest *kasownik*.', 'Junto à porta fica o validador.'],
      ['skasować bilet', 'validar o bilhete', '', 'Muszę *skasować bilet*.', 'Preciso validar o bilhete.'],
      ['poczta', 'correio', 'f', '*Poczta* jest obok banku.', 'O correio fica ao lado do banco.'],
      ['znaczek', 'selo postal', 'm', 'Poproszę dwa *znaczki*.', 'Vou querer dois selos.'],
      ['list', 'carta', 'm', 'Wysyłam *list* do Brazylii.', 'Envio uma carta para o Brasil.'],
    ]},
  ],
  grammar: [
    { t: 'Pedidos educados: mógłby e mogłaby', h: `
      <p>Para pedir com cortesia, use o <b>condicional</b> do verbo <b>móc</b> (poder) com o infinitivo. A forma muda com o gênero de quem faz a ação:</p>
      <table><tr><th>Quem</th><th>Homem</th><th>Mulher</th></tr>
      <tr><td>eu</td><td>mógłbym</td><td>mogłabym</td></tr>
      <tr><td>você (informal)</td><td>mógłbyś</td><td>mogłabyś</td></tr>
      <tr><td>ele / ela / pan / pani</td><td>mógłby</td><td>mogłaby</td></tr></table>
      <p><b>Czy mógłby pan powtórzyć?</b> (para um homem) · <b>Czy mogłaby pani mówić powoli?</b> (para uma mulher) · <b>Czy mógłbym prosić o wodę?</b> (eu, homem).</p>
      <p class="tip">A forma mais curta e também educada é <b>Proszę</b> + infinitivo: <i>Proszę powtórzyć. Proszę mówić powoli.</i></p>` },
    { t: 'Wiedzieć e znać', h: `
      <p><b>wiedzieć</b> é saber um <b>fato</b> (onde, quando, se). <b>znać</b> é <b>conhecer</b> uma pessoa, um lugar ou uma palavra.</p>
      <table><tr><th></th><th>wiedzieć</th><th>znać</th></tr>
      <tr><td>ja</td><td>wiem</td><td>znam</td></tr>
      <tr><td>ty</td><td>wiesz</td><td>znasz</td></tr>
      <tr><td>on / ona / pan</td><td>wie</td><td>zna</td></tr>
      <tr><td>my</td><td>wiemy</td><td>znamy</td></tr>
      <tr><td>wy</td><td>wiecie</td><td>znacie</td></tr>
      <tr><td>oni / państwo</td><td>wiedzą</td><td>znają</td></tr></table>
      <p>Nie wiem, gdzie jest dworzec. · Znam tę panią.</p>` },
    { t: 'Też, ale, czy, bo, dlatego', h: `
      <p><b>też</b> e <b>także</b> significam "também". <b>ale</b> é "mas", <b>bo</b> é "porque" (resposta direta) e <b>dlatego</b> é "por isso" (consequência).</p>
      <p><b>czy</b> abre perguntas de sim ou não: <i>Czy mówisz po polsku?</i> Em frases indiretas, vira "se": <i>Nie wiem, czy to prawda.</i></p>` },
    { t: 'Países com w + locativo', h: `
      <p>Para dizer <b>onde</b> você mora ou trabalha, use <b>w</b> + locativo:</p>
      <table><tr><th>País</th><th>Locativo</th></tr>
      <tr><td>Polska</td><td>w Polsce</td></tr>
      <tr><td>Brazylia</td><td>w Brazylii</td></tr>
      <tr><td>Portugalia</td><td>w Portugalii</td></tr>
      <tr><td>Niemcy</td><td>w Niemczech</td></tr>
      <tr><td>Francja</td><td>we Francji</td></tr></table>
      <p class="tip">Antes de palavras que começam com duas consoantes iguais ou parecidas (w, f), usa-se <b>we</b> em vez de w: <i>we Francji, we Włoszech</i>.</p>` },
  ],
  checks: [
    ['Czy ___ pani mówić powoli? (poderia)', ['mogłaby', 'mógłby', 'mogła'], 0, 'Para uma mulher usa-se mogłaby.'],
    ['Mieszkam ___ Portugalii.', ['w', 'na', 'do'], 0, 'Países pedem w + locativo.'],
    ['Ja ___ uczę się polskiego. (também)', ['też', 'ale', 'bo'], 0, 'też = também.'],
    ['Nie ___, gdzie jest dworzec. (eu sei)', ['wiem', 'znam', 'mówię'], 0, 'wiedzieć serve para um fato; znać, para conhecer.'],
  ],
  dialogue: { t: 'Lekcja i droga', l: [
    ['Nauczycielka', 'Dzień dobry! Dzisiaj powtarzamy nowe słowa.', 'Bom dia! Hoje repetimos palavras novas.'],
    ['Lucas', 'Przepraszam, czy mogłaby pani mówić powoli?', 'Com licença, a senhora poderia falar devagar?'],
    ['Nauczycielka', 'Oczywiście. Proszę powtórzyć: "Którędy do centrum?"', 'Claro. Repita: "Por onde se vai ao centro?"'],
    ['Lucas', 'Którędy do centrum? Co to znaczy "którędy"?', 'Por onde se vai ao centro? O que significa "którędy"?'],
    ['Nauczycielka', 'To znaczy "por onde".', 'Significa "por onde".'],
    ['Lucas', 'Jak to się pisze?', 'Como se escreve?'],
    ['Nauczycielka', 'K-t-ó-r-ę-d-y. Czy teraz rozumiesz?', 'K-t-ó-r-ę-d-y. Agora você entende?'],
    ['Lucas', 'Tak. Polski jest trudny, ale ciekawy.', 'Sim. O polonês é difícil, mas interessante.'],
    ['Nauczycielka', 'Gdzie mieszkasz?', 'Onde você mora?'],
    ['Lucas', 'W Portugalii. Uczę się polskiego, bo lubię Polskę.', 'Em Portugal. Estudo polonês porque gosto da Polônia.'],
    ['Lucas', 'Przepraszam, czy wie pani, gdzie jest przystanek?', 'Com licença, a senhora sabe onde fica o ponto de ônibus?'],
    ['Przechodzień', 'Tak. Proszę iść prosto, a potem w lewo.', 'Sim. Vá reto e depois à esquerda.'],
    ['Lucas', 'Dziękuję bardzo!', 'Muito obrigado!'],
  ]},
  fill: [
    ['Ja ___ się polskiego. (aprendo)', 'uczę', 'Eu estudo polonês.'],
    ['Proszę to ___. (repetir)', 'powtórzyć', 'Repita isso, por favor.'],
    ['Czy ___ pan, gdzie jest poczta? (sabe)', 'wie', 'O senhor sabe onde fica o correio?'],
    ['Polski jest trudny, ___ ciekawy.', 'ale', 'O polonês é difícil, mas interessante.'],
    ['Czy ___ pani mówić powoli? (poderia)', 'mogłaby', 'A senhora poderia falar devagar?'],
    ['Poproszę bilet ___. (com desconto)', 'ulgowy', 'Vou querer um bilhete com desconto.'],
  ],
  order: [
    ['Czy mogłaby pani mówić powoli?', 'A senhora poderia falar devagar?'],
    ['Co to znaczy?', 'O que isso significa?'],
    ['Uczę się polskiego, bo lubię Polskę.', 'Estudo polonês porque gosto da Polônia.'],
    ['Czy wie pan, gdzie jest przystanek?', 'O senhor sabe onde fica o ponto?'],
    ['Mieszkam w Portugalii, ale pracuję w domu.', 'Moro em Portugal, mas trabalho em casa.'],
  ],
  write: {
    p: 'Conte como você estuda polonês e por quê. Depois escreva um diálogo curto em que você pede a um polonês para repetir mais devagar e pergunta onde fica o ponto de ônibus.',
    c: ['Uczę się + genitivo (polskiego)', 'bo ou dlatego', 'Czy mógłby / mogłaby…? ou Proszę powtórzyć', 'Czy wie pan / pani, gdzie jest…?', 'Mieszkam w + país no locativo'],
    min: 60,
  },
});

COURSE.add('a1', {
  n: 25, gl: ['N / Ń', 'koń', 'n é o "n" de "nada"; ń é "nh" de "ninho". Koń ≈ "conh"'],
  pl: 'Kim ona jest?', pt: 'Nacionalidades, família ampliada, profissões, caráter e visão geral dos casos',
  busuu: ['Babbel A1, unidades 8, 10, 11, 12 e 22: Mój chłopak to Polak, Moja rodzina, Jaki masz zawód?, Kim ona jest?, Jesteś mądrą kobietą (nacionalidades, família, profissões, possessivos, instrumental, casos)'],
  goals: ['Dizer a nacionalidade no masculino e no feminino', 'Falar de parentes e de profissões', 'Descrever o caráter de alguém com adjetivos', 'Reconhecer os sete casos e usar o instrumental com być e jako'],
  vocab: [
    { g: 'Nacionalidades', w: [
      ['Polak / Polka', 'polonês / polonesa', '', 'Pan Kowalski to *Polak*.', 'O senhor Kowalski é polonês.'],
      ['Brazylijczyk / Brazylijka', 'brasileiro / brasileira', '', 'Jestem *Brazylijczykiem*.', 'Sou brasileiro.'],
      ['Portugalczyk / Portugalka', 'português / portuguesa', '', 'Anna jest *Portugalką*.', 'A Anna é portuguesa.'],
      ['Niemiec / Niemka', 'alemão / alemã', '', 'Mój kolega to *Niemiec*.', 'Meu colega é alemão.'],
      ['Hiszpan / Hiszpanka', 'espanhol / espanhola', '', 'Maria to *Hiszpanka*.', 'A Maria é espanhola.'],
      ['Francuz / Francuzka', 'francês / francesa', '', 'Pierre to *Francuz*.', 'O Pierre é francês.'],
      ['Włoch / Włoszka', 'italiano / italiana', '', 'Marco to *Włoch*.', 'O Marco é italiano.'],
      ['Anglik / Angielka', 'inglês / inglesa', '', 'Tom to *Anglik*.', 'O Tom é inglês.'],
      ['Amerykanin / Amerykanka', 'americano / americana', '', 'John to *Amerykanin*.', 'O John é americano.'],
      ['Ukrainiec / Ukrainka', 'ucraniano / ucraniana', '', 'Olek to *Ukrainiec*.', 'O Olek é ucraniano.'],
      ['narodowość', 'nacionalidade', 'f', 'Jaka jest pana *narodowość*?', 'Qual é a nacionalidade do senhor?'],
    ]},
    { g: 'Família ampliada', w: [
      ['teściowa', 'sogra', 'teść = sogro', 'Moja *teściowa* mieszka w Gdańsku.', 'Minha sogra mora em Gdańsk.'],
      ['szwagier', 'cunhado', 'szwagierka = cunhada', 'Mój *szwagier* jest lekarzem.', 'Meu cunhado é médico.'],
      ['wnuk', 'neto', 'wnuczka = neta', 'Babcia ma dużo *wnuków*.', 'A vovó tem muitos netos.'],
      ['kuzynka', 'prima', 'kuzyn = primo', 'Moja *kuzynka* mieszka w Berlinie.', 'Minha prima mora em Berlim.'],
      ['mąż', 'marido', 'm; żona = esposa', 'Jej *mąż* jest inżynierem.', 'O marido dela é engenheiro.'],
      ['rodzice', 'pais (mãe e pai)', 'm pl', 'Moi *rodzice* mieszkają w Brazylii.', 'Meus pais moram no Brasil.'],
      ['dziadkowie', 'avós', 'm pl', 'Moi *dziadkowie* mają ogród.', 'Meus avós têm um jardim.'],
      ['dzieci', 'filhos, crianças', 'pl; sg. dziecko', 'Mamy dwoje *dzieci*.', 'Temos dois filhos.'],
      ['rodzeństwo', 'irmãos (irmãos e irmãs)', 'n', 'Nie mam *rodzeństwa*.', 'Não tenho irmãos.'],
    ]},
    { g: 'Profissões', w: [
      ['lekarz', 'médico', 'lekarka (preferido) = médica', 'Pan Kowalski jest *lekarzem*.', 'O senhor Kowalski é médico.'],
      ['inżynier', 'engenheiro', 'm', 'Pracuję jako *inżynier*.', 'Trabalho como engenheiro.'],
      ['prawnik', 'advogado', 'prawniczka = advogada', 'Mój wujek jest *prawnikiem*.', 'Meu tio é advogado.'],
      ['kucharz', 'cozinheiro', 'kucharka = cozinheira', 'Mój brat jest *kucharzem*.', 'Meu irmão é cozinheiro.'],
      ['pielęgniarka', 'enfermeira', 'pielęgniarz = enfermeiro', 'Ola jest *pielęgniarką*.', 'A Ola é enfermeira.'],
      ['programista', 'programador', 'f: programistka', 'Pracuję jako *programista*.', 'Trabalho como programador.'],
      ['dziennikarka', 'jornalista (mulher)', 'dziennikarz = homem', 'Anna jest *dziennikarką*.', 'A Anna é jornalista.'],
      ['jako', 'como (função)', '+ nominativo', 'Pracuję *jako* kelner.', 'Trabalho como garçom.'],
    ]},
    { g: 'Caráter', w: [
      ['miły', 'simpático, agradável', 'miła, mili', 'Moja szefowa jest bardzo *miła*.', 'Minha chefe é muito simpática.'],
      ['mądry', 'inteligente, sábio', 'mądra', 'Jesteś *mądrą* kobietą.', 'Você é uma mulher inteligente.'],
      ['zabawny', 'engraçado', 'zabawna', 'Mój wujek jest *zabawny*.', 'Meu tio é engraçado.'],
      ['otwarty', 'aberto, extrovertido', 'otwarta', 'Ola jest bardzo *otwarta*.', 'A Ola é muito aberta.'],
      ['nieśmiały', 'tímido', 'nieśmiała', 'Lucas jest trochę *nieśmiały*.', 'O Lucas é um pouco tímido.'],
      ['leniwy', 'preguiçoso', 'leniwa', 'Mój kot jest bardzo *leniwy*.', 'Meu gato é muito preguiçoso.'],
      ['uparty', 'teimoso', 'uparta', 'Mój brat jest *uparty*.', 'Meu irmão é teimoso.'],
      ['hałaśliwy', 'barulhento', 'hałaśliwi (pl. pessoas)', 'Sąsiedzi są *hałaśliwi*.', 'Os vizinhos são barulhentos.'],
      ['egoistyczny', 'egoísta', '', 'Ten człowiek jest *egoistyczny*.', 'Esse homem é egoísta.'],
      ['nudny', 'chato, entediante', 'nudna', 'Ten film jest *nudny*.', 'Esse filme é chato.'],
      ['arogancki', 'arrogante', 'arogancka', 'Ten kelner jest *arogancki*.', 'Esse garçom é arrogante.'],
    ]},
    { g: 'Possessivos', w: [
      ['jego / jej / ich', 'dele / dela / deles', 'invariáveis', 'To jest *jego* siostra, a to *jej* brat.', 'Essa é a irmã dele e esse é o irmão dela.'],
      ['nasz / wasz', 'nosso / vosso', 'nasza, nasze', 'To jest *nasz* dom.', 'Essa é a nossa casa.'],
      ['mój / twój', 'meu / teu', 'moja, twoja', 'To jest *twój* brat?', 'Esse é o seu irmão?'],
      ['pana / pani', 'do senhor / da senhora (seu)', 'formal', 'Jaki jest *pana* zawód?', 'Qual é a profissão do senhor?'],
    ]},
  ],
  grammar: [
    { t: 'Nacionalidade com być: o instrumental', h: `
      <p>Quando a nacionalidade ou a profissão vem como <b>substantivo depois de być</b>, ela vai para o <b>instrumental</b> (e não fica no nominativo):</p>
      <table><tr><th>Nominativo</th><th>Instrumental</th><th>Frase</th></tr>
      <tr><td>Polak</td><td>Polak<b>iem</b></td><td>Jestem Polakiem.</td></tr>
      <tr><td>Polka</td><td>Polk<b>ą</b></td><td>Jestem Polką.</td></tr>
      <tr><td>Brazylijczyk</td><td>Brazylijczyk<b>iem</b></td><td>Jestem Brazylijczykiem.</td></tr>
      <tr><td>Portugalka</td><td>Portugalk<b>ą</b></td><td>Anna jest Portugalką.</td></tr>
      <tr><td>Francuz</td><td>Francuz<b>em</b></td><td>Pierre jest Francuzem.</td></tr>
      <tr><td>Niemiec</td><td>Niemc<b>em</b></td><td>Mój kolega jest Niemcem.</td></tr></table>
      <p class="tip">Masculino termina em <b>-em</b> (ou <b>-iem</b> depois de k, g). Feminino em <b>-a</b> vira <b>-ą</b>. Com <b>to</b> ("é") ou <b>jako</b> ("como") o nominativo permanece: <i>Pan Kowalski to Polak. Pracuję jako inżynier.</i></p>` },
    { t: 'Os sete casos de relance', h: `
      <p>O polonês tem <b>sete casos</b>. Cada um responde a uma pergunta. Veja todos com o nome <i>Ola</i>:</p>
      <table><tr><th>Caso</th><th>Pergunta</th><th>Exemplo</th></tr>
      <tr><td>Nominativo</td><td>kto? co?</td><td><b>Ola</b> mieszka w Krakowie.</td></tr>
      <tr><td>Genitivo</td><td>kogo? czego?</td><td>Nie ma <b>Oli</b>.</td></tr>
      <tr><td>Dativo</td><td>komu? czemu?</td><td>Daję prezent <b>Oli</b>.</td></tr>
      <tr><td>Acusativo</td><td>kogo? co?</td><td>Widzę <b>Olę</b>.</td></tr>
      <tr><td>Instrumental</td><td>z kim? z czym?</td><td>Idę z <b>Olą</b>.</td></tr>
      <tr><td>Locativo</td><td>o kim? o czym? w czym?</td><td>Mówię o <b>Oli</b>.</td></tr>
      <tr><td>Vocativo</td><td>(chamando)</td><td><b>Olu</b>, chodź tutaj!</td></tr></table>
      <p class="tip">Você já usa três deles: nominativo (sujeito), acusativo (Poproszę kawę) e instrumental (z mlekiem, Jestem Polakiem). Os outros entram nos próximos níveis.</p>` },
    { t: 'Instrumental de adjetivos', h: `
      <p>O adjetivo concorda com o substantivo no instrumental:</p>
      <table><tr><th>Gênero</th><th>Terminação</th><th>Exemplo</th></tr>
      <tr><td>Masculino</td><td><b>-ym / -im</b></td><td>Jest dobrym nauczycielem.</td></tr>
      <tr><td>Feminino</td><td><b>-ą</b></td><td>Ola jest mądrą kobietą.</td></tr></table>
      <p>Para possessivos: <b>jego, jej, ich</b> não mudam nunca. <b>mój, twój, nasz, wasz</b> concordam com o gênero: <i>mój brat, moja siostra, moje dziecko</i>.</p>` },
  ],
  checks: [
    ['Jestem ___. (brasileiro)', ['Brazylijczykiem', 'Brazylijczyk', 'Brazylijką'], 0, 'Depois de być, a nacionalidade vai ao instrumental: -em.'],
    ['Anna jest ___. (portuguesa)', ['Portugalką', 'Portugalka', 'Portugalkę'], 0, 'Feminino no instrumental: -ką.'],
    ['To jest ___ dom. (nosso)', ['nasz', 'nasza', 'nasze'], 0, 'Dom é masculino: nasz.'],
    ['Pracuję jako ___. (programador)', ['programista', 'programistą', 'programistę'], 0, 'Depois de jako usa-se o nominativo.'],
  ],
  dialogue: { t: 'Zdjęcie rodzinne', l: [
    ['Lucas', 'Kim jest ta kobieta?', 'Quem é essa mulher?'],
    ['Ola', 'To moja kuzynka Kasia. Jest pielęgniarką.', 'É minha prima Kasia. Ela é enfermeira.'],
    ['Lucas', 'A ten mężczyzna?', 'E esse homem?'],
    ['Ola', 'To mój szwagier Marek. Jest lekarzem i jest bardzo zabawny.', 'É meu cunhado Marek. Ele é médico e muito engraçado.'],
    ['Lucas', 'A ci panowie? Są Polakami?', 'E esses senhores? São poloneses?'],
    ['Ola', 'Tak, to moi wujkowie. Jeden jest prawnikiem, a drugi kucharzem.', 'Sim, são meus tios. Um é advogado e o outro é cozinheiro.'],
    ['Lucas', 'Czy są mili?', 'São simpáticos?'],
    ['Ola', 'Bardzo! Ale wujek prawnik jest trochę uparty.', 'Muito! Mas o tio advogado é um pouco teimoso.'],
    ['Lucas', 'A kim jest ta pani?', 'E quem é essa senhora?'],
    ['Ola', 'To moja babcia. Jest mądrą kobietą i ma dużo wnuków.', 'É minha avó. É uma mulher sábia e tem muitos netos.'],
  ]},
  fill: [
    ['Mój brat jest ___. (cozinheiro)', 'kucharzem', 'Meu irmão é cozinheiro.'],
    ['Ola jest ___ kobietą. (inteligente)', 'mądrą', 'A Ola é uma mulher inteligente.'],
    ['Pracuję ___ inżynier.', 'jako', 'Trabalho como engenheiro.'],
    ['To jest ___ siostra. (dele)', 'jego', 'Essa é a irmã dele.'],
    ['To jest ___ brat. (dela)', 'jej', 'Esse é o irmão dela.'],
    ['Moi ___ mieszkają w Brazylii. (pais)', 'rodzice', 'Meus pais moram no Brasil.'],
  ],
  order: [
    ['Kim jest ta kobieta?', 'Quem é essa mulher?'],
    ['Mój szwagier jest lekarzem.', 'Meu cunhado é médico.'],
    ['Ola jest mądrą kobietą.', 'A Ola é uma mulher inteligente.'],
    ['To jest nasz dom.', 'Essa é a nossa casa.'],
    ['Pracuję jako programista.', 'Trabalho como programador.'],
  ],
  write: {
    p: 'Apresente cinco pessoas da sua vida (família, colegas, amigos): quem são, de onde, o que fazem e como são. Mostre uma foto imaginária a um amigo polonês.',
    c: ['Cinco pessoas com Kim jest…? ou To jest…', 'Dois instrumentais depois de być (Jest lekarzem, Jest Polką)', 'Pracuje jako…', 'Dois adjetivos de caráter e um possessivo (jego, jej, nasz)'],
    min: 60,
  },
});
