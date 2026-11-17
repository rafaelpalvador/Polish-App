/* Polonês B1 — capítulos 3 e 4 (Busuu B1, cap. 2). */
COURSE.add('b1', {
  n: 3, gl: ['Dź', 'jedź', 'dź é um "dj" macio, como o "di" carioca de "dia"'],
  pl: 'Jedźmy samochodem!', pt: 'De carro, no hotel e o imperativo completo',
  busuu: ["Let's take the car", 'At the hotel', 'Go ahead!'],
  goals: ['Falar de carro, trânsito e direções', 'Fazer check-in e resolver problemas no hotel', 'Formar o imperativo de qualquer verbo: jedź, skręć, weź', 'Dar e negar permissão: Śmiało! Nie rób tego!'],
  vocab: [
    { g: 'De carro', w: [
      ['prawo jazdy', 'carteira de motorista', '', 'Mam *prawo jazdy* od pięciu lat.', 'Tenho carteira há cinco anos.'],
      ['kierowca', 'motorista', 'masc. em -a', 'Mój tata jest dobrym *kierowcą*.', 'Meu pai é um bom motorista.'],
      ['prowadzić samochód', 'dirigir', '', 'Nie lubię *prowadzić samochodu* w nocy.', 'Não gosto de dirigir à noite.'],
      ['korek', 'engarrafamento', '', 'Przepraszam za spóźnienie, był *korek*.', 'Desculpe o atraso, tinha engarrafamento.'],
      ['stacja benzynowa', 'posto de gasolina', '', 'Zatrzymajmy się na *stacji benzynowej*.', 'Vamos parar no posto de gasolina.'],
      ['tankować', 'abastecer', 'perf.: zatankować', 'Muszę *zatankować* przed autostradą.', 'Preciso abastecer antes da autoestrada.'],
      ['parkować', 'estacionar', 'perf.: zaparkować', 'Gdzie mogę *zaparkować*?', 'Onde posso estacionar?'],
      ['skręcić w lewo / w prawo', 'virar à esquerda / à direita', '', 'Na światłach *skręć w lewo*.', 'No semáforo, vire à esquerda.'],
      ['jechać prosto', 'seguir reto', '', '*Jedź prosto* do ronda.', 'Siga reto até a rotatória.'],
      ['rondo', 'rotatória', '', 'Na *rondzie* zjedź drugim zjazdem.', 'Na rotatória, pegue a segunda saída.'],
      ['światła', 'semáforo', 'plural', 'Zatrzymaj się na czerwonych *światłach*.', 'Pare no sinal vermelho.'],
      ['autostrada', 'autoestrada', '', 'Na *autostradzie* jedzie się szybciej.', 'Na autoestrada se anda mais rápido.'],
      ['zapiąć pasy', 'pôr o cinto', '', 'Proszę *zapiąć pasy*.', 'Coloquem o cinto, por favor.'],
    ]},
    { g: 'No hotel', w: [
      ['recepcja', 'recepção', '', 'Klucz jest w *recepcji*.', 'A chave está na recepção.'],
      ['pokój jednoosobowy / dwuosobowy', 'quarto de solteiro / duplo', '', 'Poproszę *pokój dwuosobowy* na dwie noce.', 'Um quarto duplo para duas noites, por favor.'],
      ['zameldować się', 'fazer check-in', 'wymeldować się = check-out', 'Chciałbym się *zameldować*.', 'Gostaria de fazer o check-in.'],
      ['doba', 'diária (24 horas)', '', 'Ile kosztuje *doba*?', 'Quanto custa a diária?'],
      ['śniadanie wliczone w cenę', 'café da manhã incluído', '', 'Czy *śniadanie jest wliczone w cenę*?', 'O café da manhã está incluído?'],
      ['widok na morze', 'vista para o mar', '', 'Mamy pokój z *widokiem na morze*.', 'Temos um quarto com vista para o mar.'],
      ['ręczniki', 'toalhas', '', 'Proszę o czyste *ręczniki*.', 'Gostaria de toalhas limpas, por favor.'],
      ['nie działa', 'não funciona', '', 'Klimatyzacja *nie działa*.', 'O ar-condicionado não funciona.'],
      ['zgłosić', 'avisar, comunicar (problema)', 'perf.', 'Chcę *zgłosić* problem z prysznicem.', 'Quero avisar de um problema com o chuveiro.'],
    ]},
    { g: 'Pode! Não faça!', w: [
      ['Śmiało!', 'Vai fundo! / Pode!', 'encorajar', 'Mogę spróbować? — *Śmiało!*', 'Posso tentar? — Vai fundo!'],
      ['Proszę bardzo.', 'Fique à vontade.', '', 'Mogę usiąść? — *Proszę bardzo.*', 'Posso sentar? — Fique à vontade.'],
      ['Nie krępuj się.', 'Não tenha vergonha. / Fique à vontade.', '', 'Weź jeszcze ciasta, *nie krępuj się*.', 'Pegue mais bolo, fique à vontade.'],
      ['Nie rób tego!', 'Não faça isso!', '', '*Nie rób tego*, to niebezpieczne!', 'Não faça isso, é perigoso!'],
      ['Uważaj!', 'Cuidado!', '', '*Uważaj*, rower!', 'Cuidado, uma bicicleta!'],
    ]},
  ],
  grammar: [
    { t: 'Imperativo: como formar', h: `
      <p>Pegue a 3ª pessoa do singular do presente (on/ona) e tire a terminação. O que sobra é o comando para "você":</p>
      <table><tr><th>Infinitivo</th><th>on / ona</th><th>ty</th><th>wy</th><th>my (vamos…)</th></tr>
      <tr><td>czytać</td><td>czyta</td><td>czytaj</td><td>czytajcie</td><td>czytajmy</td></tr>
      <tr><td>pisać</td><td>pisze</td><td>pisz</td><td>piszcie</td><td>piszmy</td></tr>
      <tr><td>robić</td><td>robi</td><td>rób</td><td>róbcie</td><td>róbmy</td></tr>
      <tr><td>jechać</td><td>jedzie</td><td>jedź</td><td>jedźcie</td><td>jedźmy</td></tr>
      <tr><td>skręcić</td><td>skręci</td><td>skręć</td><td>skręćcie</td><td>skręćmy</td></tr>
      <tr><td>zaparkować</td><td>zaparkuje</td><td>zaparkuj</td><td>zaparkujcie</td><td>zaparkujmy</td></tr></table>
      <p class="tip">Irregulares comuns: <i>być → bądź</i>, <i>mieć → miej</i>, <i>wziąć → weź</i>, <i>iść → idź</i>, <i>jeść → jedz</i>.</p>` },
    { t: 'Comando negativo: imperfectivo', h: `
      <p>Para mandar fazer algo uma vez, use o <b>perfectivo</b>: <i>Skręć w lewo!</i> <i>Zamknij okno!</i></p>
      <p>Para proibir, use <b>nie + imperfectivo</b>: <i>Nie skręcaj!</i> <i>Nie zamykaj okna!</i> <i>Nie jedź tak szybko!</i></p>
      <p class="tip">O objeto de um comando negativo vai para o genitivo, como em "nie mam": <i>Zamknij okno.</i> → <i>Nie zamykaj okna.</i></p>` },
    { t: 'Educado e formal', h: `
      <p>Com desconhecidos, o imperativo soa brusco. Prefira:</p>
      <p><b>proszę + infinitivo:</b> <i>Proszę skręcić w prawo.</i></p>
      <p><b>niech + 3ª pessoa:</b> <i>Niech pan usiądzie.</i> <em>(Sente-se, senhor.)</em></p>
      <p><b>pergunta:</b> <i>Czy może pan otworzyć bagażnik?</i></p>` },
  ],
  checks: [
    ['(para um amigo) ___ w lewo na światłach! (skręcić)', ['Skręć', 'Skręcić', 'Skręca'], 0, 'skręci → skręć.'],
    ['(para um grupo) ___ pasy! (zapiąć)', ['Zapnij', 'Zapnijcie', 'Zapiąć'], 1, 'Para várias pessoas: -cie.'],
    ['Nie ___ tak szybko!', ['jedź', 'pojedź', 'jechać'], 0, 'Proibição: nie + imperfectivo.'],
    ['Nie zamykaj ___. (okno)', ['okno', 'okna', 'oknem'], 1, 'Comando negativo → genitivo.'],
  ],
  dialogue: { t: 'Viagem de carro até Zakopane', l: [
    ['Ola', 'Lucas, zapnij pasy i jedźmy! Mamy cztery godziny jazdy.', 'Lucas, ponha o cinto e vamos! Temos quatro horas de estrada.'],
    ['Lucas', 'Mogę prowadzić? Mam prawo jazdy od trzech lat.', 'Posso dirigir? Tenho carteira há três anos.'],
    ['Ola', 'Śmiało! Tylko nie jedź za szybko na autostradzie.', 'Pode! Só não corra demais na autoestrada.'],
    ['Lucas', 'Dobrze. Gdzie mam skręcić?', 'Tá bom. Onde eu viro?'],
    ['Ola', 'Na rondzie zjedź drugim zjazdem, a potem jedź prosto. Uważaj, korek!', 'Na rotatória pegue a segunda saída e depois siga reto. Cuidado, engarrafamento!'],
    ['Lucas', 'Musimy zatankować. Zatrzymajmy się na stacji.', 'Precisamos abastecer. Vamos parar no posto.'],
    ['Recepcjonistka', 'Dobry wieczór. W czym mogę pomóc?', 'Boa noite. Em que posso ajudar?'],
    ['Ola', 'Dobry wieczór, mamy rezerwację na nazwisko Nowak. Chcemy się zameldować.', 'Boa noite, temos uma reserva no nome Nowak. Queremos fazer o check-in.'],
    ['Recepcjonistka', 'Pokój dwuosobowy z widokiem na góry, dwie doby. Śniadanie jest wliczone w cenę.', 'Quarto duplo com vista para as montanhas, duas diárias. O café está incluído.'],
    ['Lucas', 'Gdzie możemy zaparkować?', 'Onde podemos estacionar?'],
    ['Recepcjonistka', 'Parking jest za hotelem. Proszę, oto klucz. Niech państwo się nie krępują i dzwonią, jeśli coś nie działa.', 'O estacionamento fica atrás do hotel. Aqui está a chave. Fiquem à vontade para ligar se algo não funcionar.'],
  ]},
  fill: [
    ['(para um amigo) ___ prosto do ronda! (jechać)', 'Jedź', 'Siga reto até a rotatória!'],
    ['(para um amigo) ___ tutaj! (zaparkować)', 'Zaparkuj', 'Estacione aqui!'],
    ['___ do kina! (vamos, a pé)', 'Chodźmy', 'Vamos ao cinema!'],
    ['Nie ___ tego! (robić, ty)', 'rób', 'Não faça isso!'],
    ['Chciałbym się ___. (fazer check-in)', 'zameldować', 'Gostaria de fazer o check-in.'],
    ['Klimatyzacja nie ___.', 'działa', 'O ar-condicionado não funciona.'],
  ],
  order: [
    ['Na światłach skręć w lewo.', 'No semáforo, vire à esquerda.'],
    ['Nie jedź tak szybko!', 'Não corra tanto!'],
    ['Czy śniadanie jest wliczone w cenę?', 'O café da manhã está incluído?'],
    ['Chcę zgłosić problem z prysznicem.', 'Quero avisar de um problema com o chuveiro.'],
    ['Mogę spróbować? Śmiało!', 'Posso tentar? Vai fundo!'],
  ],
  write: {
    p: 'Escreva instruções para um amigo chegar de carro da estação até a sua casa (ou a um hotel). Depois, escreva uma mensagem para a recepção de um hotel reclamando de dois problemas no quarto e pedindo uma solução.',
    c: ['Cinco comandos no imperativo (skręć, jedź, zaparkuj…)', 'Um comando negativo com imperfectivo', 'Três palavras de hotel', 'Um pedido educado (proszę…, czy może pan…)'],
    min: 120,
  },
});

COURSE.add('b1', {
  n: 4, gl: ['By', 'chciałbym', '-bym fica colado ao verbo: "hchia-uu-bym"'],
  pl: 'Szukam pracy', pt: 'Procurar emprego, a entrevista e o condicional',
  busuu: ['Are you searching for a job?', 'The job interview'],
  goals: ['Ler um anúncio e falar de currículo', 'Responder a perguntas de entrevista', 'Usar o condicional: chciałbym, mógłby pan…', 'Dizer há quanto tempo: od dwóch lat, przez trzy lata'],
  vocab: [
    { g: 'Procurando emprego', w: [
      ['ogłoszenie', 'anúncio', '', 'Znalazłem ciekawe *ogłoszenie* w internecie.', 'Achei um anúncio interessante na internet.'],
      ['oferta pracy', 'vaga de emprego', '', 'Ta *oferta pracy* jest idealna dla ciebie.', 'Esta vaga é ideal para você.'],
      ['stanowisko', 'cargo, posição', '', 'Aplikuję na *stanowisko* analityka danych.', 'Estou me candidatando ao cargo de analista de dados.'],
      ['CV', 'currículo', 'lê-se "ce-fau"', 'Wysłałam *CV* do trzech firm.', 'Mandei o currículo para três empresas.'],
      ['list motywacyjny', 'carta de apresentação', '', 'Do CV trzeba dołączyć *list motywacyjny*.', 'É preciso anexar uma carta de apresentação ao currículo.'],
      ['aplikować', 'candidatar-se', 'também: składać podanie', 'Chcę *aplikować* na to stanowisko.', 'Quero me candidatar a este cargo.'],
      ['doświadczenie', 'experiência', '', 'Mam trzy lata *doświadczenia* w marketingu.', 'Tenho três anos de experiência em marketing.'],
      ['umiejętności', 'habilidades', '', 'Jakie masz *umiejętności*?', 'Que habilidades você tem?'],
      ['wymagania', 'requisitos', '', '*Wymagania*: angielski i prawo jazdy.', 'Requisitos: inglês e carteira de motorista.'],
      ['pracodawca', 'empregador', 'masc. em -a', 'Mój *pracodawca* jest z Ameryki.', 'Meu empregador é dos Estados Unidos.'],
      ['wynagrodzenie', 'remuneração', 'coloquial: pensja', 'Jakie jest *wynagrodzenie* na tym stanowisku?', 'Qual é a remuneração neste cargo?'],
      ['bezrobotny', 'desempregado', '', 'Od miesiąca jestem *bezrobotny*.', 'Estou desempregado há um mês.'],
    ]},
    { g: 'Na entrevista', w: [
      ['rozmowa kwalifikacyjna', 'entrevista de emprego', '', 'Jutro mam *rozmowę kwalifikacyjną*.', 'Amanhã tenho entrevista de emprego.'],
      ['kandydat / kandydatka', 'candidato / candidata', '', 'Jest pan najlepszym *kandydatem*.', 'O senhor é o melhor candidato.'],
      ['mocne strony', 'pontos fortes', 'słabe strony = pontos fracos', 'Jakie są pana *mocne strony*?', 'Quais são os seus pontos fortes?'],
      ['praca zespołowa', 'trabalho em equipe', '', 'Lubię *pracę zespołową*.', 'Gosto de trabalho em equipe.'],
      ['obowiązki', 'tarefas, responsabilidades', 'plural', 'Jakie byłyby moje *obowiązki*?', 'Quais seriam minhas responsabilidades?'],
      ['okres próbny', 'período de experiência', '', '*Okres próbny* trwa trzy miesiące.', 'O período de experiência dura três meses.'],
      ['zatrudnić', 'contratar', 'perf.', 'Firma chce *zatrudnić* dwie osoby.', 'A empresa quer contratar duas pessoas.'],
      ['awans', 'promoção (no trabalho)', '', 'Po roku dostałam *awans*.', 'Depois de um ano fui promovida.'],
      ['od… lat', 'há… anos (até agora)', 'od + genitivo', 'Pracuję w tej firmie *od dwóch lat*.', 'Trabalho nesta empresa há dois anos.'],
      ['przez… lata', 'durante… anos', 'przez + acusativo', '*Przez trzy lata* mieszkałem w Porto.', 'Morei no Porto durante três anos.'],
    ]},
  ],
  grammar: [
    { t: 'O condicional: forma', h: `
      <p>Pegue o passado da 3ª pessoa (chciał, chciała, chcieli) e acrescente <b>by</b> + a terminação da pessoa:</p>
      <table><tr><th></th><th>Homem</th><th>Mulher</th></tr>
      <tr><td>ja</td><td>chciał<b>bym</b></td><td>chciała<b>bym</b></td></tr>
      <tr><td>ty</td><td>chciał<b>byś</b></td><td>chciała<b>byś</b></td></tr>
      <tr><td>on / ona; pan / pani</td><td>chciał<b>by</b></td><td>chciała<b>by</b></td></tr>
      <tr><td>my</td><td>chcieli<b>byśmy</b></td><td>chciały<b>byśmy</b></td></tr>
      <tr><td>wy</td><td>chcieli<b>byście</b></td><td>chciały<b>byście</b></td></tr>
      <tr><td>oni / one</td><td>chcieli<b>by</b></td><td>chciały<b>by</b></td></tr></table>
      <p class="tip">A tônica fica na mesma sílaba do passado: <i>chciałbym</i> soa "HCHIA-uu-bym".</p>` },
    { t: 'Usos: educação e hipóteses', h: `
      <p><b>Pedido educado:</b> <i>Chciałbym zapytać o wynagrodzenie.</i> · <i>Czy mógłby pan powtórzyć?</i> · <i>Czy mogłaby pani mi pomóc?</i></p>
      <p><b>Desejo:</b> <i>Chciałabym pracować zdalnie.</i></p>
      <p><b>Hipótese:</b> <i>Byłbym szczęśliwy, gdybym dostał tę pracę.</i> <em>(Eu ficaria feliz se conseguisse este emprego.)</em></p>
      <p class="tip">Em <b>gdyby</b> (se), as terminações vão para o gdy-: gdy<b>bym</b>, gdy<b>byś</b>, gdy<b>by</b>.</p>` },
    { t: 'Há quanto tempo? od / przez / temu', h: `
      <table><tr><th>Expressão</th><th>Sentido</th><th>Exemplo</th></tr>
      <tr><td>od + genitivo</td><td>desde / há (e continua)</td><td><i>Pracuję tu od roku.</i> · <i>od dwóch lat</i></td></tr>
      <tr><td>przez + acusativo</td><td>durante (terminou)</td><td><i>Pracowałem tam przez rok.</i></td></tr>
      <tr><td>… temu</td><td>há… (ponto no passado)</td><td><i>Skończyłem studia trzy lata temu.</i></td></tr></table>
      <p class="tip">Com <b>od</b>, o verbo fica no presente, porque a ação continua.</p>` },
  ],
  checks: [
    ['___ zapytać o wynagrodzenie. (ja, mulher)', ['Chciałabym', 'Chciałbym', 'Chcę by'], 0, 'Mulher: chciała + bym.'],
    ['Czy ___ pan powtórzyć?', ['mógłby', 'może by', 'mógłbym'], 0, 'Para "pan": mógł + by.'],
    ['Pracuję w tej firmie ___ dwóch lat.', ['od', 'przez', 'temu'], 0, 'Continua até hoje → od + genitivo.'],
    ['Mieszkałem w Porto ___ trzy lata.', ['od', 'przez', 'za'], 1, 'Duração terminada → przez + acusativo.'],
  ],
  dialogue: { t: 'A entrevista', l: [
    ['Rekruterka', 'Dzień dobry, proszę usiąść. Dlaczego aplikuje pan na to stanowisko?', 'Bom dia, sente-se, por favor. Por que o senhor está se candidatando a este cargo?'],
    ['Lucas', 'Dzień dobry. Interesuję się analizą danych od trzech lat i chciałbym pracować w międzynarodowej firmie.', 'Bom dia. Eu me interesso por análise de dados há três anos e gostaria de trabalhar numa empresa internacional.'],
    ['Rekruterka', 'Jakie ma pan doświadczenie?', 'Que experiência o senhor tem?'],
    ['Lucas', 'Przez dwa lata pracowałem w Brazylii jako analityk. Teraz pracuję zdalnie dla firmy z Ameryki.', 'Durante dois anos trabalhei no Brasil como analista. Agora trabalho remoto para uma empresa americana.'],
    ['Rekruterka', 'A jakie są pana mocne i słabe strony?', 'E quais são seus pontos fortes e fracos?'],
    ['Lucas', 'Jestem dobrze zorganizowany i lubię pracę zespołową. Słaba strona? Mój polski nie jest jeszcze idealny.', 'Sou bem organizado e gosto de trabalho em equipe. Ponto fraco? Meu polonês ainda não é perfeito.'],
    ['Rekruterka', 'Mówi pan bardzo dobrze! Czy ma pan jakieś pytania?', 'O senhor fala muito bem! Tem alguma pergunta?'],
    ['Lucas', 'Tak. Jakie byłyby moje obowiązki? I czy mógłbym czasem pracować z domu?', 'Sim. Quais seriam minhas responsabilidades? E eu poderia às vezes trabalhar de casa?'],
    ['Rekruterka', 'Przygotowywałby pan raporty dla klientów. Dwa dni w tygodniu można pracować zdalnie.', 'O senhor prepararia relatórios para os clientes. Dois dias por semana pode-se trabalhar remoto.'],
    ['Lucas', 'Świetnie. Byłbym bardzo zadowolony, gdybym dostał tę pracę.', 'Ótimo. Eu ficaria muito contente se conseguisse este emprego.'],
    ['Rekruterka', 'Odezwiemy się do pana w ciągu tygodnia. Dziękuję za rozmowę.', 'Entraremos em contato com o senhor em uma semana. Obrigada pela conversa.'],
  ]},
  fill: [
    ['___ pracować zdalnie. (ja, homem, chcieć)', 'Chciałbym', 'Eu gostaria de trabalhar remoto.'],
    ['Czy ___ pani mi pomóc? (móc)', 'mogłaby', 'A senhora poderia me ajudar?'],
    ['Mam trzy lata ___ w marketingu.', 'doświadczenia', 'Tenho três anos de experiência em marketing.'],
    ['Jutro mam rozmowę ___.', 'kwalifikacyjną', 'Amanhã tenho entrevista de emprego.'],
    ['Uczę się polskiego ___ roku.', 'od', 'Estudo polonês há um ano.'],
    ['Skończyłam studia dwa lata ___.', 'temu', 'Terminei a faculdade há dois anos.'],
  ],
  order: [
    ['Chciałbym aplikować na to stanowisko.', 'Gostaria de me candidatar a este cargo.'],
    ['Pracuję w tej firmie od dwóch lat.', 'Trabalho nesta empresa há dois anos.'],
    ['Czy mógłby pan powtórzyć pytanie?', 'O senhor poderia repetir a pergunta?'],
    ['Jakie byłyby moje obowiązki?', 'Quais seriam minhas responsabilidades?'],
    ['Lubię pracę zespołową.', 'Gosto de trabalho em equipe.'],
  ],
  write: {
    p: 'Escreva uma carta de apresentação curta para uma vaga que você gostaria de ter: o cargo, sua experiência (há quanto tempo, durante quanto tempo), seus pontos fortes e duas perguntas educadas para a empresa.',
    c: ['Três formas do condicional (chciałbym, mógłbym, byłbym…)', 'od + genitivo e przez + acusativo', 'Cinco palavras de emprego', 'Uma hipótese com gdybym'],
    min: 120,
  },
});
