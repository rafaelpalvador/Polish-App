/* Polonês A1 — capítulos 20 a 22 (complemento a partir do Babbel A1, unidades 13, 14, 18, 19 e 20: números, idade, aniversário, feira, moeda, roupas e casa) */
COURSE.add('a1', {
  n: 20, gl: ['Dż / Dź', 'dziewięćdziesiąt', 'dź é um "dj" suave, com a língua alta; dż é um "dj" firme. Dziewięćdziesiąt ≈ "djevien-djessont"'],
  pl: 'Ile masz lat?', pt: 'Números 20–100, idade e aniversário',
  busuu: ['Babbel A1, unidade 20: Ile masz lat? (números 20–100, idade, lat/lata/rok, parabéns)'],
  goals: ['Contar de 20 a 100 e formar números como 35 e 99', 'Dizer e perguntar a idade com rok, lata e lat', 'Desejar parabéns e falar de festa e presente', 'Convidar alguém para uma festa'],
  vocab: [
    { g: 'Dezenas e centenas', w: [
      ['dwadzieścia', 'vinte (20)', 'dwadzieścia jeden = 21', 'Mam *dwadzieścia* euro w portfelu.', 'Tenho vinte euros na carteira.'],
      ['trzydzieści', 'trinta (30)', '', 'Moja siostra ma *trzydzieści* lat.', 'Minha irmã tem trinta anos.'],
      ['czterdzieści', 'quarenta (40)', '', 'W autobusie jest *czterdzieści* miejsc.', 'No ônibus há quarenta lugares.'],
      ['pięćdziesiąt', 'cinquenta (50)', 'de 50 a 90 termina em -dziesiąt', 'Ten bilet kosztuje *pięćdziesiąt* złotych.', 'Esse bilhete custa cinquenta zlotys.'],
      ['sześćdziesiąt', 'sessenta (60)', '', 'Mój tata ma *sześćdziesiąt* lat.', 'Meu pai tem sessenta anos.'],
      ['siedemdziesiąt', 'setenta (70)', '', 'Babcia ma *siedemdziesiąt* lat.', 'A vovó tem setenta anos.'],
      ['osiemdziesiąt', 'oitenta (80)', '', 'Do domu mam *osiemdziesiąt* kilometrów.', 'Até em casa são oitenta quilômetros.'],
      ['dziewięćdziesiąt', 'noventa (90)', '', 'Dziadek ma prawie *dziewięćdziesiąt* lat.', 'O vovô tem quase noventa anos.'],
      ['sto', 'cem (100)', '', 'Kawa kosztuje *sto* groszy?', 'O café custa cem centavos?'],
      ['dwieście', 'duzentos (200)', 'trzysta = 300, pięćset = 500', 'Ta kurtka kosztuje *dwieście* złotych.', 'Essa jaqueta custa duzentos zlotys.'],
      ['tysiąc', 'mil (1000)', '', 'Pokój kosztuje *tysiąc* złotych.', 'O quarto custa mil zlotys.'],
    ]},
    { g: 'Idade', w: [
      ['rok', 'ano', 'm; 1 rok', 'Mój syn ma jeden *rok*.', 'Meu filho tem um ano.'],
      ['lata', 'anos (2, 3, 4)', 'dwa lata, trzy lata, cztery lata', 'Moja córka ma cztery *lata*.', 'Minha filha tem quatro anos.'],
      ['lat', 'anos (5 em diante)', 'pięć lat, dwadzieścia lat', 'Mój brat ma trzydzieści *lat*.', 'Meu irmão tem trinta anos.'],
      ['Ile masz lat?', 'Quantos anos você tem?', 'informal', '*Ile masz lat?* — Mam dwadzieścia osiem.', 'Quantos anos você tem? — Tenho vinte e oito.'],
      ['Ile pani ma lat?', 'Quantos anos a senhora tem?', 'formal; pan para homem', '*Ile pani ma lat?* — Pięćdziesiąt.', 'Quantos anos a senhora tem? — Cinquenta.'],
      ['młody', 'jovem', 'młoda, młodzi', 'Ola jest bardzo *młoda*.', 'A Ola é muito jovem.'],
      ['data urodzenia', 'data de nascimento', 'f', 'Proszę podać *datę urodzenia*.', 'Informe a data de nascimento, por favor.'],
    ]},
    { g: 'Aniversário e festa', w: [
      ['urodziny', 'aniversário', 'f pl', 'Moje *urodziny* są w maju.', 'Meu aniversário é em maio.'],
      ['Wszystkiego najlepszego!', 'Parabéns! (tudo de melhor)', 'z okazji urodzin = pelo aniversário', '*Wszystkiego najlepszego!* Zdrowia i szczęścia!', 'Parabéns! Saúde e felicidade!'],
      ['Sto lat!', 'Cem anos de vida! (parabéns tradicional)', '', 'Przy torcie wszyscy krzyczą: *Sto lat!*', 'Junto ao bolo todos gritam: Cem anos!'],
      ['życzenia', 'votos, felicitações', 'f pl', 'Dziękuję za wszystkie *życzenia*.', 'Obrigado por todos os votos.'],
      ['prezent', 'presente', 'm', 'Dostaję *prezent* od mamy.', 'Ganho um presente da mamãe.'],
      ['tort', 'bolo de festa', 'm', 'Na stole stoi urodzinowy *tort*.', 'Na mesa está o bolo de aniversário.'],
      ['świeczka', 'velinha', 'f, gen. pl. świeczek', 'Na torcie jest trzydzieści *świeczek*.', 'No bolo há trinta velinhas.'],
      ['kartka', 'cartão', 'f', 'Piszę *kartkę* urodzinową.', 'Escrevo um cartão de aniversário.'],
      ['impreza', 'festa', 'f', 'W sobotę robię *imprezę*.', 'No sábado faço uma festa.'],
      ['gość', 'convidado, hóspede', 'm, pl. goście', 'Mam dziś dużo *gości*.', 'Hoje tenho vinte convidados.'],
      ['zaprosić', 'convidar', 'zapraszam, zapraszasz', 'Chcę *zaprosić* przyjaciół.', 'Quero convidar os amigos.'],
      ['Zapraszam!', 'Venha! / Fica o convite!', '', '*Zapraszam!* W sobotę o ósmej.', 'Venha! No sábado às oito.'],
    ]},
  ],
  grammar: [
    { t: 'De 20 a 100: dezena + unidade', h: `
      <p>Os números compostos são escritos em <b>palavras separadas</b>, com a dezena primeiro:</p>
      <table><tr><th>Número</th><th>Polonês</th></tr>
      <tr><td>21</td><td>dwadzieścia jeden</td></tr>
      <tr><td>35</td><td>trzydzieści pięć</td></tr>
      <tr><td>48</td><td>czterdzieści osiem</td></tr>
      <tr><td>99</td><td>dziewięćdziesiąt dziewięć</td></tr></table>
      <p class="tip">20, 30 e 40 terminam em <i>-dzieści</i>. De 50 a 90 termina em <i>-dziesiąt</i>. Decore os dois blocos.</p>` },
    { t: 'Idade: rok, lata ou lat?', h: `
      <p>Em polonês você diz <b>mam … lat</b> (tenho … anos). A palavra para "anos" muda conforme o número:</p>
      <table><tr><th>Número</th><th>Forma</th><th>Exemplo</th></tr>
      <tr><td>1</td><td><b>rok</b></td><td>Mam jeden rok.</td></tr>
      <tr><td>2, 3, 4 (e 22–24, 32–34…)</td><td><b>lata</b></td><td>Mam trzydzieści trzy lata.</td></tr>
      <tr><td>5 a 21 (e 25–31, 35–41…)</td><td><b>lat</b></td><td>Mam dwadzieścia pięć lat. Mam dwanaście lat.</td></tr></table>
      <p class="tip">Atenção ao 21: termina em "um", mas a palavra é <b>lat</b> (dwadzieścia jeden lat). E 12, 13 e 14 também usam <b>lat</b>.</p>` },
    { t: 'Parabéns em polonês', h: `
      <p><b>Wszystkiego najlepszego!</b> serve para aniversário, Ano-Novo e qualquer ocasião. Para especificar, junte <b>z okazji</b> + genitivo: <i>z okazji urodzin</i> (pelo aniversário).</p>
      <p>Na festa, os convidados cantam <b>Sto lat!</b>, o equivalente polonês de "Parabéns pra você". Em outras ocasiões, ele também vale como brinde.</p>` },
  ],
  checks: [
    ['Mam dwadzieścia pięć ___.', ['lat', 'lata', 'rok'], 0, 'De 5 em diante usa-se lat.'],
    ['Mój syn ma trzy ___.', ['lata', 'lat', 'rok'], 0, 'Com 2, 3 e 4 usa-se lata.'],
    ['Como se escreve 47 em polonês?', ['czterdzieści siedem', 'czterdzieści siedemdziesiąt', 'czterysta siedem'], 0, 'Dezena + unidade, em palavras separadas.'],
    ['O que você diz a alguém no aniversário?', ['Wszystkiego najlepszego!', 'Smacznego!', 'Powodzenia!'], 0, 'Smacznego é bom apetite; Powodzenia é boa sorte.'],
  ],
  dialogue: { t: 'Urodziny Oli', l: [
    ['Lucas', 'Cześć, Ola! Wszystkiego najlepszego z okazji urodzin!', 'Oi, Ola! Parabéns pelo seu aniversário!'],
    ['Ola', 'Dziękuję, Lucas! Zapraszam cię na imprezę w sobotę.', 'Obrigada, Lucas! Convido você para a festa no sábado.'],
    ['Lucas', 'Chętnie! Ile masz lat?', 'Com prazer! Quantos anos você tem?'],
    ['Ola', 'Mam dwadzieścia osiem lat. A ty?', 'Tenho vinte e oito anos. E você?'],
    ['Lucas', 'Ja mam trzydzieści trzy lata.', 'Eu tenho trinta e três anos.'],
    ['Ola', 'Moja mama ma pięćdziesiąt dziewięć lat, a tata sześćdziesiąt dwa lata.', 'Minha mãe tem cinquenta e nove anos e meu pai, sessenta e dois.'],
    ['Lucas', 'Dużo gości?', 'Muitos convidados?'],
    ['Ola', 'Zapraszam dwadzieścia pięć osób!', 'Estou convidando vinte e cinco pessoas!'],
    ['Lucas', 'Super! Mam prezent i kartkę.', 'Ótimo! Tenho um presente e um cartão.'],
    ['Ola', 'Dziękuję! Do zobaczenia w sobotę!', 'Obrigada! Até sábado!'],
  ]},
  fill: [
    ['Mam trzydzieści ___.', 'lat', 'Tenho trinta anos.'],
    ['Moja córka ma dwa ___.', 'lata', 'Minha filha tem dois anos.'],
    ['Ile masz ___?', 'lat', 'Quantos anos você tem?'],
    ['Dwadzieścia plus trzydzieści to ___.', 'pięćdziesiąt', 'Vinte mais trinta são cinquenta.'],
    ['Moje ___ są w maju.', 'urodziny', 'Meu aniversário é em maio.'],
    ['Dostaję ___ od mamy.', 'prezent', 'Ganho um presente da mamãe.'],
  ],
  order: [
    ['Wszystkiego najlepszego z okazji urodzin!', 'Parabéns pelo aniversário!'],
    ['Mam dwadzieścia osiem lat.', 'Tenho vinte e oito anos.'],
    ['Zapraszam cię na imprezę w sobotę.', 'Convido você para a festa no sábado.'],
    ['Mój tata ma sześćdziesiąt dwa lata.', 'Meu pai tem sessenta e dois anos.'],
    ['Na torcie jest trzydzieści świeczek.', 'No bolo há trinta velinhas.'],
  ],
  write: {
    p: 'Escreva a idade de cinco pessoas da sua família ou de amigos, com os números por extenso. Depois escreva um cartão de aniversário para um amigo polonês, com convite para a festa.',
    c: ['Cinco idades por extenso, com rok, lata ou lat certo', 'Um número entre 50 e 100', 'Wszystkiego najlepszego z okazji urodzin', 'Um convite com Zapraszam…'],
    min: 50,
  },
});

COURSE.add('a1', {
  n: 21, gl: ['Ą', 'są', 'ą soa como "om" nasal: są = "som", mają = "maiom"'],
  pl: 'Ile to kosztuje?', pt: 'Feira, frutas e legumes, plural e números 2–4',
  busuu: ['Babbel A1, unidades 13 e 14: Ile to kosztuje? (frutas, legumes, números 1–4, feira, plural, moeda)'],
  goals: ['Comprar frutas e legumes numa feira', 'Formar o plural dos substantivos', 'Usar dwa, trzy e cztery com o plural certo', 'Dizer preços com złoty e groszy'],
  vocab: [
    { g: 'Frutas', w: [
      ['jabłko', 'maçã', 'n, pl. jabłka', 'Poproszę trzy *jabłka*.', 'Vou querer três maçãs.'],
      ['gruszka', 'pera', 'f, pl. gruszki', 'Te *gruszki* są bardzo słodkie.', 'Essas peras são muito doces.'],
      ['banan', 'banana', 'm, pl. banany', 'Kupuję cztery *banany*.', 'Compro quatro bananas.'],
      ['pomarańcza', 'laranja', 'f, pl. pomarańcze', 'Poproszę dwie *pomarańcze*.', 'Vou querer duas laranjas.'],
      ['cytryna', 'limão', 'f, pl. cytryny', 'Do herbaty dodaję *cytrynę*.', 'No chá coloco limão.'],
      ['truskawki', 'morangos', 'f pl, sg. truskawka', '*Truskawki* kupuję latem.', 'Morangos eu compro no verão.'],
      ['winogrona', 'uvas', 'n pl', 'Dzieci lubią *winogrona*.', 'As crianças gostam de uvas.'],
      ['śliwka', 'ameixa', 'f, pl. śliwki', 'Ta *śliwka* jest dojrzała.', 'Essa ameixa está madura.'],
      ['arbuz', 'melancia', 'm', 'Ten *arbuz* jest ogromny.', 'Essa melancia é enorme.'],
    ]},
    { g: 'Legumes', w: [
      ['pomidor', 'tomate', 'm, pl. pomidory', 'Poproszę kilo *pomidorów*.', 'Vou querer um quilo de tomates.'],
      ['ogórek', 'pepino', 'm, pl. ogórki', 'Dwa *ogórki*, proszę.', 'Dois pepinos, por favor.'],
      ['ziemniak', 'batata', 'm, pl. ziemniaki', 'Na obiad są *ziemniaki*.', 'No almoço há batatas.'],
      ['marchewka', 'cenoura', 'f, pl. marchewki', 'Króliki lubią *marchewki*.', 'Coelhos gostam de cenouras.'],
      ['cebula', 'cebola', 'f, pl. cebule', 'Płaczę, kiedy kroję *cebulę*.', 'Choro quando corto cebola.'],
      ['czosnek', 'alho', 'm', 'W zupie jest dużo *czosnku*.', 'Na sopa há muito alho.'],
      ['papryka', 'pimentão', 'f', 'Czerwona *papryka* jest droga.', 'O pimentão vermelho está caro.'],
      ['sałata', 'alface', 'f', 'Poproszę jedną *sałatę*.', 'Vou querer uma alface.'],
      ['kapusta', 'repolho', 'f', 'Bigos robi się z *kapusty*.', 'O bigos é feito de repolho.'],
      ['burak', 'beterraba', 'm, pl. buraki', 'Barszcz jest z *buraków*.', 'O borscht é feito de beterraba.'],
    ]},
    { g: 'Na feira', w: [
      ['targ', 'feira, mercado de rua', 'm; também rynek', 'W sobotę idę na *targ*.', 'No sábado vou à feira.'],
      ['sprzedawczyni', 'vendedora', 'f; vendedor = sprzedawca', '*Sprzedawczyni* jest bardzo miła.', 'A vendedora é muito simpática.'],
      ['kilo', 'quilo', '', 'Poproszę *kilo* jabłek.', 'Vou querer um quilo de maçãs.'],
      ['pół kilo', 'meio quilo', '', 'Poproszę *pół kilo* truskawek.', 'Vou querer meio quilo de morangos.'],
      ['sto gramów', 'cem gramas', '', 'Poproszę *sto gramów* sera.', 'Vou querer cem gramas de queijo.'],
      ['sztuka', 'unidade, peça', 'f', 'Ogórki po dwa złote za *sztukę*.', 'Pepinos a dois zlotys a unidade.'],
      ['świeży', 'fresco', 'świeża, świeże', 'Te ogórki są bardzo *świeże*.', 'Esses pepinos estão bem frescos.'],
      ['dojrzały', 'maduro', '', 'Ten banan jest już *dojrzały*.', 'Essa banana já está madura.'],
      ['Czy mogę spróbować?', 'Posso provar?', '', '*Czy mogę spróbować?* — Proszę bardzo.', 'Posso provar? — Fique à vontade.'],
      ['Coś jeszcze?', 'Mais alguma coisa?', '', '*Coś jeszcze?* — Nie, to wszystko.', 'Mais alguma coisa? — Não, é só isso.'],
      ['To wszystko.', 'É só isso.', '', 'Dziękuję, *to wszystko*.', 'Obrigado, é só isso.'],
      ['Ile to kosztuje?', 'Quanto custa?', '', '*Ile to kosztuje?* Nie widzę ceny.', 'Quanto custa? Não vejo o preço.'],
      ['cena', 'preço', 'f', 'Jaka jest *cena* truskawek?', 'Qual é o preço dos morangos?'],
    ]},
    { g: 'Dinheiro e números 2–4', w: [
      ['złoty', 'zloty (moeda polonesa, zł)', '1 złoty', 'Zapałki kosztują jeden *złoty*.', 'Os fósforos custam um zloty.'],
      ['złote', 'zlotys (2, 3, 4)', 'dwa złote, trzy złote', 'Ogórki kosztują dwa *złote*.', 'Os pepinos custam dois zlotys.'],
      ['złotych', 'zlotys (5 em diante)', 'pięć złotych', 'Kilo jabłek to pięć *złotych*.', 'Um quilo de maçãs custa cinco zlotys.'],
      ['grosz', 'centavo (1/100 do zloty)', 'pl. grosze, gen. groszy', 'Mam tylko dwadzieścia *groszy*.', 'Só tenho vinte centavos.'],
      ['reszta', 'troco', 'f', 'Proszę, tu jest pana *reszta*.', 'Aqui está o seu troco.'],
      ['gotówka', 'dinheiro vivo', 'f', 'Na targu płacę *gotówką*.', 'Na feira pago em dinheiro.'],
      ['karta', 'cartão', 'f', 'Czy mogę zapłacić *kartą*?', 'Posso pagar com cartão?'],
      ['zapłacić', 'pagar', 'perf.; płacić = imperf.', 'Ile mam *zapłacić*?', 'Quanto devo pagar?'],
      ['dwa / dwie', 'dois / duas', 'dwie com feminino', 'Poproszę *dwie* gruszki.', 'Vou querer duas peras.'],
      ['trzy', 'três', '', '*Trzy* banany, proszę.', 'Três bananas, por favor.'],
      ['cztery', 'quatro', '', 'Mam *cztery* pomarańcze.', 'Tenho quatro laranjas.'],
    ]},
  ],
  grammar: [
    { t: 'O plural dos substantivos', h: `
      <p>O plural do <b>nominativo</b> depende do gênero e da última letra:</p>
      <table><tr><th>Gênero</th><th>Regra</th><th>Exemplos</th></tr>
      <tr><td>Masculino</td><td>+ <b>-y</b> (ou <b>-i</b> depois de k, g)</td><td>pomidor → pomidor<b>y</b>, ogórek → ogór<b>ki</b>, banan → banan<b>y</b></td></tr>
      <tr><td>Feminino (-a)</td><td><b>-a → -y / -i</b> (ou <b>-e</b> depois de l, cz…)</td><td>gruszka → grusz<b>ki</b>, cytryna → cytry<b>ny</b>, cebula → ceb<b>ule</b>, pomarańcza → pomarańcz<b>e</b></td></tr>
      <tr><td>Neutro (-o)</td><td><b>-o → -a</b></td><td>jabłko → jabł<b>ka</b>, piwo → piw<b>a</b></td></tr></table>
      <p class="tip">Os adjetivos também mudam: nowy → nowe (coisas), nowi (grupo masculino de pessoas).</p>` },
    { t: 'Dwa, trzy, cztery contra pięć e mais', h: `
      <p>Depois de <b>2, 3 e 4</b> o substantivo fica no <b>plural nominativo</b>: dwa jabłka, trzy gruszki, cztery pomidory, dwa złote.</p>
      <p>Depois de <b>5 em diante</b> (e depois de <b>kilo</b>, <b>pół kilo</b>, <b>dużo</b>) vai para o <b>genitivo plural</b>:</p>
      <table><tr><th>Nominativo pl.</th><th>Genitivo pl.</th><th>Regra</th></tr>
      <tr><td>jabłka</td><td>pięć <b>jabłek</b></td><td>neutro e feminino: perde a vogal final</td></tr>
      <tr><td>truskawki</td><td>kilo <b>truskawek</b></td><td>igual</td></tr>
      <tr><td>pomidory</td><td>kilo <b>pomidorów</b></td><td>masculino: + <b>-ów</b></td></tr>
      <tr><td>złote</td><td>pięć <b>złotych</b></td><td>adjetivos de origem: -ych</td></tr></table>
      <p class="tip">Para feminino usa-se <b>dwie</b> (dwie gruszki); para masculino e neutro, <b>dwa</b> (dwa jabłka). Três e quatro não mudam.</p>` },
  ],
  checks: [
    ['Poproszę dwa ___. (jabłko)', ['jabłka', 'jabłek', 'jabłko'], 0, 'Com 2, 3 e 4 usa-se o plural nominativo: jabłko → jabłka.'],
    ['Kawa kosztuje pięć ___.', ['złotych', 'złote', 'złoty'], 0, 'De 5 em diante usa-se o genitivo plural: złotych.'],
    ['Ile kosztuje pół kilo ___? (truskawki)', ['truskawek', 'truskawki', 'truskawka'], 0, 'Depois de kilo e pół kilo usa-se o genitivo plural.'],
    ['Como se diz "É só isso"?', ['To wszystko.', 'Coś jeszcze?', 'Czy mogę spróbować?'], 0, 'Coś jeszcze? é o que o vendedor pergunta.'],
  ],
  dialogue: { t: 'Na targu', l: [
    ['Sprzedawczyni', 'Dzień dobry! Co podać?', 'Bom dia! O que vai ser?'],
    ['Lucas', 'Dzień dobry. Poproszę kilo pomidorów i dwa ogórki.', 'Bom dia. Vou querer um quilo de tomates e dois pepinos.'],
    ['Sprzedawczyni', 'Proszę bardzo. Coś jeszcze? Mamy świeże truskawki.', 'Aqui estão. Mais alguma coisa? Temos morangos frescos.'],
    ['Lucas', 'Ile kosztuje pół kilo truskawek?', 'Quanto custa meio quilo de morangos?'],
    ['Sprzedawczyni', 'Dwanaście złotych.', 'Doze zlotys.'],
    ['Lucas', 'Czy mogę spróbować?', 'Posso provar?'],
    ['Sprzedawczyni', 'Oczywiście. Są bardzo słodkie.', 'Claro. São muito doces.'],
    ['Lucas', 'Rzeczywiście! Poproszę pół kilo. To wszystko. Ile płacę?', 'É verdade! Vou querer meio quilo. É só isso. Quanto pago?'],
    ['Sprzedawczyni', 'Pomidory osiem złotych, ogórki cztery złote i truskawki dwanaście. Razem dwadzieścia cztery złote.', 'Tomates oito zlotys, pepinos quatro e morangos doze. Ao todo, vinte e quatro zlotys.'],
    ['Lucas', 'Czy mogę zapłacić kartą?', 'Posso pagar com cartão?'],
    ['Sprzedawczyni', 'Niestety tylko gotówką.', 'Infelizmente só em dinheiro.'],
    ['Lucas', 'Proszę, trzydzieści złotych.', 'Aqui, trinta zlotys.'],
    ['Sprzedawczyni', 'Oto pana reszta: sześć złotych. Dziękuję i do widzenia!', 'Aqui está o seu troco: seis zlotys. Obrigada e até logo!'],
  ]},
  fill: [
    ['Poproszę trzy ___. (pomidor, plural)', 'pomidory', 'Vou querer três tomates.'],
    ['Dwie ___ kosztują cztery złote. (gruszka, plural)', 'gruszki', 'Duas peras custam quatro zlotys.'],
    ['To kosztuje dwa ___.', 'złote', 'Isso custa dois zlotys.'],
    ['Poproszę kilo ___. (jabłko, genitivo plural)', 'jabłek', 'Vou querer um quilo de maçãs.'],
    ['Czy mogę ___?', 'spróbować', 'Posso provar?'],
    ['Czy mogę zapłacić ___?', 'kartą', 'Posso pagar com cartão?'],
  ],
  order: [
    ['Poproszę kilo pomidorów.', 'Vou querer um quilo de tomates.'],
    ['Ile kosztuje pół kilo truskawek?', 'Quanto custa meio quilo de morangos?'],
    ['Te jabłka są bardzo świeże.', 'Essas maçãs estão bem frescas.'],
    ['Czy mogę zapłacić kartą?', 'Posso pagar com cartão?'],
    ['Na targu kupuję owoce i warzywa.', 'Na feira compro frutas e legumes.'],
  ],
  write: {
    p: 'Você está numa feira em Kraków. Escreva o que compra, em que quantidade e quanto paga. Depois escreva o diálogo curto com o vendedor.',
    c: ['Cinco frutas ou legumes diferentes', 'Dois plurais com dwa, trzy ou cztery', 'Kilo ou pół kilo + genitivo plural', 'Czy mogę…? e Ile kosztuje…?'],
    min: 55,
  },
});

COURSE.add('a1', {
  n: 22, gl: ['Ł / U', 'łóżko', 'ł soa como "u" de "mau"; u e ó soam "u" também: łóżko ≈ "uúch-ko"'],
  pl: 'Gdzie są moje nowe buty?', pt: 'Roupas, objetos da casa, ten/ta/to e plural dos adjetivos',
  busuu: ['Babbel A1, unidades 18 e 19: Ta lampa jest za droga! e Gdzie są moje nowe buty? (casa, demonstrativos, roupas, adjetivos no plural)'],
  goals: ['Nomear roupas e objetos da casa', 'Usar ten, ta, to, te e ci com adjetivos', 'Dizer que algo é grande ou caro demais com za', 'Experimentar e comprar roupa numa loja'],
  vocab: [
    { g: 'Roupas', w: [
      ['koszula', 'camisa', 'f', 'Ta *koszula* jest za duża.', 'Essa camisa é grande demais.'],
      ['koszulka', 'camiseta', 'f', 'Noszę białą *koszulkę*.', 'Uso uma camiseta branca.'],
      ['sweter', 'suéter, blusa de lã', 'm, pl. swetry', 'Zimą noszę ciepły *sweter*.', 'No inverno uso um suéter quente.'],
      ['kurtka', 'jaqueta', 'f', 'Nowa *kurtka* jest wygodna.', 'A jaqueta nova é confortável.'],
      ['płaszcz', 'casaco longo', 'm', 'Jesienią noszę *płaszcz*.', 'No outono uso casaco.'],
      ['spodnie', 'calça', 'f pl; só plural', 'Te *spodnie* są za krótkie.', 'Essa calça é curta demais.'],
      ['dżinsy', 'jeans', 'm pl', 'Lubię niebieskie *dżinsy*.', 'Gosto de jeans azul.'],
      ['spódnica', 'saia', 'f', 'Ola ma czerwoną *spódnicę*.', 'A Ola tem uma saia vermelha.'],
      ['sukienka', 'vestido', 'f', 'Ta *sukienka* jest piękna.', 'Esse vestido é lindo.'],
      ['buty', 'sapatos', 'm pl; sg. but', 'Gdzie są moje nowe *buty*?', 'Onde estão meus sapatos novos?'],
      ['skarpetki', 'meias', 'f pl', 'Mam czarne *skarpetki*.', 'Tenho meias pretas.'],
      ['czapka', 'gorro, boné', 'f', 'Zimą noszę ciepłą *czapkę*.', 'No inverno uso um gorro quente.'],
      ['szalik', 'cachecol', 'm', 'Ten *szalik* jest bardzo miękki.', 'Esse cachecol é muito macio.'],
      ['rękawiczki', 'luvas', 'f pl', 'Gdzie są moje *rękawiczki*?', 'Onde estão minhas luvas?'],
      ['garnitur', 'terno', 'm', 'Do pracy noszę *garnitur*.', 'Para o trabalho uso terno.'],
      ['okulary', 'óculos', 'm pl; só plural', 'Moje *okulary* są na stole.', 'Meus óculos estão na mesa.'],
    ]},
    { g: 'Casa', w: [
      ['łóżko', 'cama', 'n', 'Nowe *łóżko* jest wygodne.', 'A cama nova é confortável.'],
      ['szafa', 'armário, guarda-roupa', 'f', 'Ubrania są w *szafie*.', 'As roupas estão no armário.'],
      ['półka', 'prateleira', 'f', 'Książki stoją na *półce*.', 'Os livros estão na prateleira.'],
      ['dywan', 'tapete', 'm', 'Ten *dywan* jest stary.', 'Esse tapete é velho.'],
      ['lustro', 'espelho', 'n', 'W łazience jest duże *lustro*.', 'No banheiro há um espelho grande.'],
      ['lodówka', 'geladeira', 'f', 'Ta *lodówka* jest nowa.', 'Essa geladeira é nova.'],
      ['kuchenka', 'fogão', 'f', 'Zupa stoi na *kuchence*.', 'A sopa está no fogão.'],
      ['poduszka', 'travesseiro, almofada', 'f', 'Ta *poduszka* jest miękka.', 'Esse travesseiro é macio.'],
      ['koc', 'cobertor', 'm', 'Zimą śpię pod ciepłym *kocem*.', 'No inverno durmo sob um cobertor quente.'],
      ['zasłony', 'cortinas', 'f pl', 'Zielone *zasłony* są ładne.', 'As cortinas verdes são bonitas.'],
      ['drzwi', 'porta', 'f pl; só plural', 'Zamknij *drzwi*, proszę.', 'Feche a porta, por favor.'],
    ]},
    { g: 'Este, esse, novo, caro', w: [
      ['ten / ta / to', 'este / esta / isto', 'm / f / n', '*Ten* sweter, *ta* kurtka i *to* łóżko.', 'Este suéter, esta jaqueta e esta cama.'],
      ['te', 'estes, estas (plural)', 'coisas e mulheres', '*Te* buty są nowe.', 'Esses sapatos são novos.'],
      ['ci', 'estes (grupo com homens)', 'só pessoas', '*Ci* panowie są z Polski.', 'Esses senhores são da Polônia.'],
      ['nowy', 'novo', 'nowa, nowe, nowi', 'To jest *nowy* telefon.', 'Esse é um telefone novo.'],
      ['stary', 'velho', 'stara, stare', 'To jest *stary* dywan.', 'Esse é um tapete velho.'],
      ['drogi', 'caro', 'droga, drogie', 'Ta lampa jest za *droga*.', 'Essa lâmpada é cara demais.'],
      ['tani', 'barato', 'tania, tanie', 'Te spodnie są *tanie*.', 'Essas calças são baratas.'],
      ['za duży', 'grande demais', 'za duża, za duże', 'Ta koszula jest *za duża*.', 'Essa camisa é grande demais.'],
      ['za mały', 'pequeno demais', 'za mała, za małe', 'Te buty są *za małe*.', 'Esses sapatos são pequenos demais.'],
      ['w sam raz', 'na medida, perfeito', '', 'Ta kurtka jest *w sam raz*.', 'Essa jaqueta está na medida.'],
    ]},
    { g: 'Na loja', w: [
      ['Czy mogę przymierzyć?', 'Posso experimentar?', '', '*Czy mogę przymierzyć* tę sukienkę?', 'Posso experimentar este vestido?'],
      ['przymierzalnia', 'provador', 'f', '*Przymierzalnia* jest na końcu sklepu.', 'O provador fica no fundo da loja.'],
      ['rozmiar', 'tamanho', 'm', 'Jaki *rozmiar* pan nosi?', 'Que tamanho o senhor usa?'],
      ['Pasuje mi.', 'Serve em mim.', '', '*Pasuje mi* ta kurtka.', 'Essa jaqueta serve em mim.'],
      ['Wezmę to.', 'Vou levar isto.', '', 'Dobrze, *wezmę to*.', 'Certo, vou levar isto.'],
      ['nosić', 'usar, vestir (habitual)', 'noszę, nosisz', 'Na co dzień *noszę* dżinsy.', 'Normalmente uso jeans.'],
    ]},
  ],
  grammar: [
    { t: 'Este, esta, isto e os plurais', h: `
      <table><tr><th>Gênero</th><th>Singular</th><th>Plural</th></tr>
      <tr><td>Masculino (coisa)</td><td>ten nowy sweter</td><td>te nowe swetry</td></tr>
      <tr><td>Feminino</td><td>ta nowa kurtka</td><td>te nowe kurtki</td></tr>
      <tr><td>Neutro</td><td>to nowe łóżko</td><td>te nowe łóżka</td></tr>
      <tr><td>Masculino (pessoas)</td><td>ten nowy student</td><td><b>ci</b> nowi studenci</td></tr></table>
      <p class="tip">Só existem duas formas no plural: <b>ci + -i</b> para grupos que incluem homens, e <b>te + -e</b> para todo o resto, incluindo coisas.</p>
      <p>Alguns substantivos existem só no plural e pedem <b>są</b>: <i>Gdzie <b>są</b> moje okulary? Te spodnie <b>są</b> nowe.</i> Já <i>drzwi</i> se comporta como plural: <i>Drzwi są otwarte.</i></p>` },
    { t: 'Za + adjetivo: demais', h: `
      <p><b>za</b> antes do adjetivo significa "demais": <i>za duży</i> (grande demais), <i>za droga</i> (cara demais), <i>za małe</i> (pequenos demais). O adjetivo concorda com o substantivo.</p>
      <table><tr><th>Masc.</th><th>Fem.</th><th>Neutro / plural</th></tr>
      <tr><td>za duży</td><td>za duża</td><td>za duże</td></tr>
      <tr><td>za drogi</td><td>za droga</td><td>za drogie</td></tr>
      <tr><td>za mały</td><td>za mała</td><td>za małe</td></tr></table>
      <p class="tip">Se está bom, diga <b>w sam raz</b> (na medida): <i>Ta kurtka jest w sam raz.</i></p>` },
  ],
  checks: [
    ['___ buty są nowe. (estes)', ['Te', 'Ci', 'Ten'], 0, 'Plural de coisas: te.'],
    ['___ studenci są z Polski.', ['Ci', 'Te', 'Ta'], 0, 'Grupo com homens: ci + -i.'],
    ['Ta kurtka jest za ___. (pequena)', ['mała', 'mały', 'małe'], 0, 'Kurtka é feminina: za mała.'],
    ['Gdzie ___ moje okulary?', ['są', 'jest', 'jestem'], 0, 'Okulary só existe no plural: są.'],
  ],
  dialogue: { t: 'W sklepie z ubraniami', l: [
    ['Lucas', 'Dzień dobry. Szukam kurtki.', 'Bom dia. Procuro uma jaqueta.'],
    ['Sprzedawca', 'Proszę bardzo. Ta czarna kurtka jest nowa. Jaki rozmiar pan nosi?', 'Aqui está. Esta jaqueta preta é nova. Que tamanho o senhor usa?'],
    ['Lucas', 'Rozmiar M. Czy mogę przymierzyć?', 'Tamanho M. Posso experimentar?'],
    ['Sprzedawca', 'Oczywiście. Przymierzalnia jest tam.', 'Claro. O provador é ali.'],
    ['Lucas', 'Ta kurtka jest za mała. Czy ma pan większą?', 'Esta jaqueta é pequena demais. O senhor tem uma maior?'],
    ['Sprzedawca', 'Tak, rozmiar L.', 'Sim, tamanho L.'],
    ['Lucas', 'Pasuje! Ile kosztuje?', 'Serve! Quanto custa?'],
    ['Sprzedawca', 'Dwieście dziewięćdziesiąt złotych.', 'Duzentos e noventa zlotys.'],
    ['Lucas', 'To za drogo. A te dżinsy? Są tanie?', 'É caro demais. E esse jeans? É barato?'],
    ['Sprzedawca', 'Tak, tylko sto złotych.', 'Sim, apenas cem zlotys.'],
    ['Lucas', 'Dobrze, wezmę te dżinsy.', 'Está bem, vou levar esse jeans.'],
  ]},
  fill: [
    ['Ta koszula jest za ___. (grande)', 'duża', 'Essa camisa é grande demais.'],
    ['Te ___ są tanie. (calça)', 'spodnie', 'Essa calça é barata.'],
    ['Czy mogę ___ tę sukienkę?', 'przymierzyć', 'Posso experimentar este vestido?'],
    ['Gdzie ___ moje buty?', 'są', 'Onde estão meus sapatos?'],
    ['Ten ___ jest nowy. (suéter)', 'sweter', 'Esse suéter é novo.'],
    ['Na co dzień ___ dżinsy.', 'noszę', 'Normalmente uso jeans.'],
  ],
  order: [
    ['Ta kurtka jest za mała.', 'Essa jaqueta é pequena demais.'],
    ['Czy mogę przymierzyć te buty?', 'Posso experimentar esses sapatos?'],
    ['Gdzie są moje nowe okulary?', 'Onde estão meus óculos novos?'],
    ['Wezmę te dżinsy.', 'Vou levar esse jeans.'],
    ['Nowe łóżko jest bardzo wygodne.', 'A cama nova é muito confortável.'],
  ],
  write: {
    p: 'Descreva o seu guarda-roupa e um objeto novo da sua casa. Depois escreva o que você diria numa loja ao experimentar uma roupa.',
    c: ['Seis peças de roupa com cor', 'Ten, ta, to ou te + adjetivo', 'Uma frase com za + adjetivo', 'Czy mogę przymierzyć…? e Ile kosztuje…?'],
    min: 50,
  },
});
