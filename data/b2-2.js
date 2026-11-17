/* Polonês B2 — capítulos 3 e 4 (Busuu B2, cap. 1: Shall we go camping?, Save the planet! / cap. 2: That's really fashionable!, What's my horoscope?). */
COURSE.add('b2', {
  n: 3, gl: ['Ś', 'śpiwór', 'ś é um "x" suave, como o "ch" de "chuva" dito com a língua mais alta: "xpivur"'],
  pl: 'Camping i ochrona środowiska', pt: 'Acampamento, ecologia, particípio adverbial e "żeby"',
  busuu: ['Shall we go camping?', 'Save the planet!'],
  goals: ['Planejar uma viagem de camping e pedir o equipamento', 'Falar de poluição, lixo e energia renovável', 'Usar o particípio adverbial: idąc, patrząc, siedząc', 'Dizer a finalidade com "żeby": Jadę w góry, żeby odpocząć'],
  vocab: [
    { g: 'Camping', w: [
      ['namiot', 'barraca', '', 'Rozbijemy *namiot* nad jeziorem.', 'Vamos armar a barraca perto do lago.'],
      ['rozbić namiot', 'armar a barraca', 'perf.; imperf.: rozbijać', 'Zdążyliśmy *rozbić namiot* przed deszczem.', 'Conseguimos armar a barraca antes da chuva.'],
      ['śpiwór', 'saco de dormir', 'gen. pl.: śpiworów', 'W nocy było zimno, ale *śpiwór* był ciepły.', 'À noite fez frio, mas o saco de dormir era quente.'],
      ['karimata', 'isolante térmico (colchonete)', '', 'Bez *karimaty* ziemia jest bardzo zimna.', 'Sem colchonete o chão é muito frio.'],
      ['plecak', 'mochila', '', 'Mój *plecak* waży piętnaście kilo.', 'Minha mochila pesa quinze quilos.'],
      ['latarka', 'lanterna', '', 'Zabierz *latarkę*, bo będzie ciemno.', 'Leve uma lanterna, porque vai ficar escuro.'],
      ['ognisko', 'fogueira', '', 'Wieczorem siedzieliśmy przy *ognisku*.', 'À noite ficamos sentados junto à fogueira.'],
      ['rozpalić ognisko', 'acender a fogueira', 'perf.', 'Nie umiem *rozpalić ogniska* bez zapałek.', 'Não sei acender fogueira sem fósforos.'],
      ['zapałki', 'fósforos', 'só plural', 'Kto ma *zapałki*?', 'Quem tem fósforos?'],
      ['drewno', 'lenha, madeira', 'não tem plural comum', 'Zbierz trochę *drewna* na ognisko.', 'Junte um pouco de lenha para a fogueira.'],
      ['kuchenka turystyczna', 'fogareiro de camping', '', 'Ugotowaliśmy zupę na *kuchence turystycznej*.', 'Cozinhamos a sopa no fogareiro.'],
      ['szlak', 'trilha', 'szlak górski, szlak czerwony', 'Ten *szlak* jest dobrze oznakowany.', 'Esta trilha é bem sinalizada.'],
      ['schronisko', 'abrigo de montanha; albergue', '', 'Na noc zatrzymamy się w *schronisku*.', 'Passaremos a noite no abrigo.'],
      ['pole namiotowe', 'área de camping', '', 'Na *polu namiotowym* było mnóstwo ludzi.', 'Na área de camping havia muita gente.'],
      ['komar', 'pernilongo, mosquito', 'gen. pl.: komarów', 'Nad wodą jest pełno *komarów*.', 'Perto da água há mosquitos demais.'],
      ['zgubić się', 'perder-se', 'perf.', 'Mapa jest potrzebna, żeby się nie *zgubić*.', 'O mapa é necessário para não se perder.'],
    ]},
    { g: 'Ecologia', w: [
      ['środowisko', 'meio ambiente', 'ochrona środowiska', 'Plastik szkodzi *środowisku*.', 'O plástico prejudica o meio ambiente.'],
      ['zanieczyszczenie', 'poluição', '', '*Zanieczyszczenie* powietrza jest wysokie zimą.', 'A poluição do ar é alta no inverno.'],
      ['smog', 'smog', '', 'W Krakowie zimą często jest *smog*.', 'Em Cracóvia costuma haver smog no inverno.'],
      ['ocieplenie klimatu', 'aquecimento global', '', '*Ocieplenie klimatu* topi lodowce.', 'O aquecimento global derrete as geleiras.'],
      ['śmieci', 'lixo', 'só plural; gen.: śmieci', 'Nie zostawiaj *śmieci* w lesie.', 'Não deixe lixo na floresta.'],
      ['segregować', 'separar o lixo', 'imperf.', 'W domu *segregujemy* śmieci.', 'Em casa separamos o lixo.'],
      ['recykling', 'reciclagem', '', '*Recykling* oszczędza surowce.', 'A reciclagem poupa matérias-primas.'],
      ['plastik', 'plástico', '', 'Chcemy używać mniej *plastiku*.', 'Queremos usar menos plástico.'],
      ['torba wielokrotnego użytku', 'sacola reutilizável', '', 'Zawsze noszę *torbę wielokrotnego użytku*.', 'Sempre levo uma sacola reutilizável.'],
      ['oszczędzać', 'economizar', 'imperf.', 'Warto *oszczędzać* wodę i prąd.', 'Vale a pena economizar água e luz.'],
      ['energia odnawialna', 'energia renovável', '', 'Polska inwestuje w *energię odnawialną*.', 'A Polônia investe em energia renovável.'],
      ['turbina wiatrowa', 'turbina eólica', '', 'Nad morzem stoją duże *turbiny wiatrowe*.', 'Perto do mar há grandes turbinas eólicas.'],
      ['panel słoneczny', 'painel solar', '', 'Na dachu mamy *panele słoneczne*.', 'No telhado temos painéis solares.'],
      ['paliwa kopalne', 'combustíveis fósseis', '', '*Paliwa kopalne* zanieczyszczają powietrze.', 'Os combustíveis fósseis poluem o ar.'],
      ['susza', 'seca', '', 'Latem była długa *susza*.', 'No verão houve uma longa seca.'],
      ['powódź', 'enchente', 'gen.: powodzi', 'W 1997 roku wielka *powódź* zalała Wrocław.', 'Em 1997 uma grande enchente inundou Wrocław.'],
    ]},
  ],
  grammar: [
    { t: 'Particípio adverbial: -ąc (ao fazer…)', h: `
      <p>Mostra uma ação <b>simultânea</b> feita pelo <b>mesmo sujeito</b>. Só se forma de verbos <b>imperfectivos</b>: pegue a 3ª pessoa do plural e troque o final por <b>-ąc</b>.</p>
      <table><tr><th>Verbo</th><th>3ª pl.</th><th>Particípio</th><th>Exemplo</th></tr>
      <tr><td>iść</td><td>idą</td><td>idąc</td><td><i>Idąc do lasu, zabierz mapę.</i></td></tr>
      <tr><td>siedzieć</td><td>siedzą</td><td>siedząc</td><td><i>Czytał, siedząc przy ognisku.</i></td></tr>
      <tr><td>patrzeć</td><td>patrzą</td><td>patrząc</td><td><i>Patrząc na gwiazdy, zasnęłam.</i></td></tr>
      <tr><td>jechać</td><td>jadą</td><td>jadąc</td><td><i>Jadąc pociągiem, słuchamy muzyki.</i></td></tr></table>
      <p class="tip">É linguagem escrita e cuidadosa. Na fala, prefira "kiedy / gdy + verbo". Sempre vírgula.</p>` },
    { t: 'Żeby: finalidade ("para que")', h: `
      <p><b>Żeby</b> (ou <b>aby</b>, mais formal) indica a <b>finalidade</b>.</p>
      <p>Mesmo sujeito: <b>żeby + infinitivo</b> → <i>Jadę w góry, <b>żeby odpocząć</b>.</i></p>
      <p>Sujeitos diferentes: <b>żeby + passado</b> com terminação pessoal → <i>Zabierz kurtkę, <b>żebyś nie zmarzł</b>.</i> · <i>Mówię głośno, <b>żeby</b> wszyscy <b>słyszeli</b>.</i></p>
      <p>Também vem depois de verbos de vontade e ordem: <i>Chcę, żebyś przyszedł.</i> · <i>Proszę, żebyście nie palili ogniska.</i></p>` },
  ],
  checks: [
    ['Jadę w góry, ___ odpocząć.', ['żeby', 'że', 'bo'], 0, 'Finalidade com o mesmo sujeito: żeby + infinitivo.'],
    ['Czytał książkę, ___ przy ognisku. (sentado)', ['siedząc', 'siedzieć', 'siedział'], 0, 'Ação simultânea do mesmo sujeito: -ąc.'],
    ['Zabierz kurtkę, ___ nie zmarzł.', ['żebyś', 'żeby', 'że'], 0, 'Sujeito diferente da oração principal: żeby + passado (żebyś).'],
    ['Rozbijamy ___ nad jeziorem. (namiot)', ['namiot', 'namiotu', 'namiotem'], 0, 'Inanimado masculino: o acusativo é igual ao nominativo.'],
  ],
  dialogue: { t: 'Weekend pod namiotem', l: [
    ['Ola', 'Lucas, co powiesz na weekend pod namiotem w Bieszczadach?', 'Lucas, que tal um fim de semana de barraca nos Bieszczady?'],
    ['Lucas', 'Pomysł świetny, ale nigdy nie spałem w namiocie. Co muszę zabrać?', 'Ótima ideia, mas nunca dormi em barraca. O que preciso levar?'],
    ['Ola', 'Śpiwór, karimatę i latarkę. Namiot mam ja.', 'Saco de dormir, isolante e lanterna. A barraca eu tenho.'],
    ['Lucas', 'A co z jedzeniem? Możemy rozpalić ognisko?', 'E a comida? Podemos acender fogueira?'],
    ['Ola', 'Tylko na wyznaczonym polu namiotowym. W parku narodowym nie wolno, żeby nie spalić lasu.', 'Só na área de camping. No parque nacional não é permitido, para não incendiar a floresta.'],
    ['Lucas', 'Rozumiem. A śmieci? Gdzie je wyrzucamy?', 'Entendo. E o lixo? Onde jogamos?'],
    ['Ola', 'Zabieramy wszystko ze sobą. Idąc szlakiem, nie zostawiamy nic po sobie.', 'Levamos tudo conosco. Andando pela trilha, não deixamos nada para trás.'],
    ['Lucas', 'To jest ekologiczne. Zabiorę torbę wielokrotnego użytku na odpady.', 'Isso é ecológico. Vou levar uma sacola reutilizável para o lixo.'],
    ['Ola', 'Dobry pomysł. I weź środek na komary, bo nad rzeką jest ich pełno.', 'Boa ideia. E leve repelente, porque perto do rio tem muito mosquito.'],
  ]},
  fill: [
    ['Wieczorem siedzieliśmy przy ___.', 'ognisku', 'À noite ficamos sentados junto à fogueira.'],
    ['Chcę, ___ wszyscy segregowali śmieci.', 'żeby', 'Quero que todos separem o lixo.'],
    ['___ do lasu, zabierz mapę. (idąc)', 'Idąc', 'Indo para a floresta, leve um mapa.'],
    ['Nie zostawiaj ___ w lesie.', 'śmieci', 'Não deixe lixo na floresta.'],
    ['Zimą w Krakowie często jest ___.', 'smog', 'No inverno em Cracóvia costuma haver smog.'],
    ['Warto ___ wodę i prąd.', 'oszczędzać', 'Vale a pena economizar água e luz.'],
  ],
  order: [
    ['Rozbijemy namiot nad jeziorem.', 'Vamos armar a barraca perto do lago.'],
    ['Zabierz kurtkę, żebyś nie zmarzł.', 'Leve o casaco para você não passar frio.'],
    ['Idąc szlakiem, nie zostawiamy śmieci.', 'Andando pela trilha, não deixamos lixo.'],
    ['Zanieczyszczenie powietrza szkodzi zdrowiu.', 'A poluição do ar prejudica a saúde.'],
    ['Energia odnawialna jest przyszłością.', 'A energia renovável é o futuro.'],
  ],
  write: {
    p: 'Escreva a um amigo para convidá-lo para uma viagem de camping. Diga aonde vão, o que cada um deve levar e quais regras de respeito à natureza vocês vão seguir.',
    c: ['Duas frases com żeby (uma com infinitivo, outra com passado)', 'Um particípio em -ąc (idąc, siedząc…)', 'Seis palavras de camping ou ecologia', 'Um pedido educado (proszę, żebyś…)'],
    min: 160,
  },
});

COURSE.add('b2', {
  n: 4, gl: ['Szcz', 'szczupły', 'sz + cz juntos: "xtch". Szczupły = "xtchúpui"'],
  pl: 'Moda i horoskop', pt: 'Moda, roupas, signos e o verbo "wyglądać"',
  busuu: ["That's really fashionable!", "What's my horoscope?"],
  goals: ['Falar de roupas, tecidos e estilo', 'Comentar a aparência: wygląda jak…, wygląda na…, jakby…', 'Dizer que algo combina ou fica bem: pasuje do…, pasuje mi', 'Falar de signos do zodíaco e personalidade'],
  vocab: [
    { g: 'Roupas e acessórios', w: [
      ['moda', 'moda', 'być w modzie = estar na moda', 'Ten kolor jest teraz w *modzie*.', 'Esta cor está na moda agora.'],
      ['modny', 'na moda, moderno', 'adj.', 'Kupiłem sobie *modną* kurtkę.', 'Comprei um casaco da moda.'],
      ['styl', 'estilo', '', 'Lubię klasyczny *styl*.', 'Gosto de estilo clássico.'],
      ['ubranie', 'roupa', 'pl.: ubrania; gen. pl.: ubrań', 'W szafie mam za dużo *ubrań*.', 'No armário tenho roupa demais.'],
      ['ubrać się', 'vestir-se', 'perf.; imperf.: ubierać się', 'Zawsze *ubieram się* na czarno.', 'Eu sempre me visto de preto.'],
      ['przymierzyć', 'experimentar (roupa)', 'perf.; imperf.: przymierzać', 'Mogę *przymierzyć* tę sukienkę?', 'Posso experimentar este vestido?'],
      ['przymierzalnia', 'provador', '', '*Przymierzalnia* jest po lewej stronie.', 'O provador fica do lado esquerdo.'],
      ['rozmiar', 'tamanho', '', 'Jaki *rozmiar* pan nosi?', 'Que tamanho o senhor usa?'],
      ['marynarka', 'blazer, paletó', '', 'Do garnituru założył szarą *marynarkę*.', 'Com o terno vestiu um blazer cinza.'],
      ['garnitur', 'terno', '', 'Na ślub kupię nowy *garnitur*.', 'Para o casamento vou comprar um terno novo.'],
      ['sukienka', 'vestido', '', 'Ta *sukienka* jest za krótka.', 'Este vestido é curto demais.'],
      ['spódnica', 'saia', '', 'Noszę długą *spódnicę*.', 'Uso saia comprida.'],
      ['sweter', 'suéter, malha', 'gen. pl.: swetrów', 'W zimie noszę ciepły *sweter*.', 'No inverno uso um suéter quente.'],
      ['szalik', 'cachecol', '', 'Weź *szalik*, jest zimno.', 'Leve um cachecol, está frio.'],
      ['trampki', 'tênis (de lona)', 'só plural', 'Na co dzień noszę *trampki*.', 'No dia a dia uso tênis.'],
      ['szpilki', 'sapatos de salto fino', 'só plural', 'Nie umiem chodzić w *szpilkach*.', 'Não sei andar de salto alto.'],
      ['biżuteria', 'bijuteria, joias', '', 'Ona lubi srebrną *biżuterię*.', 'Ela gosta de joias de prata.'],
      ['kolczyki', 'brincos', 'só plural', 'Podobają mi się te *kolczyki*.', 'Gosto destes brincos.'],
      ['okulary', 'óculos', 'só plural', 'Gdzie są moje *okulary*?', 'Onde estão meus óculos?'],
      ['torebka', 'bolsa', '', 'Ta *torebka* jest ze skóry.', 'Esta bolsa é de couro.'],
    ]},
    { g: 'Tecidos e aparência', w: [
      ['materiał', 'tecido, material', '', 'Z jakiego *materiału* jest ta koszula?', 'De que tecido é esta camisa?'],
      ['bawełna', 'algodão', '', 'Koszulka jest ze stu procent *bawełny*.', 'A camiseta é cem por cento algodão.'],
      ['wełna', 'lã', '', 'Sweter z *wełny* jest bardzo ciepły.', 'O suéter de lã é muito quente.'],
      ['skóra', 'couro; pele', '', 'Kupiłem buty ze *skóry*.', 'Comprei sapatos de couro.'],
      ['w kratę / w paski / w kropki', 'xadrez / listrado / de bolinhas', '', 'Wolę koszulę *w paski*.', 'Prefiro camisa listrada.'],
      ['pasować', 'combinar; servir', 'pasować do + gen.; pasować komuś', 'Ta torebka *pasuje* do twoich butów.', 'Esta bolsa combina com seus sapatos.'],
      ['wyglądać', 'parecer, ter aparência', 'imperf.', 'W tym kolorze *wyglądasz* świetnie.', 'Nessa cor você fica ótimo.'],
      ['szczupły', 'magro, esbelto', 'adj.', 'Mój brat jest wysoki i *szczupły*.', 'Meu irmão é alto e esbelto.'],
      ['elegancki', 'elegante', 'adj.', 'Na rozmowę trzeba się ubrać *elegancko*.', 'Para a entrevista é preciso vestir-se com elegância.'],
      ['sportowy', 'esportivo, casual', 'adj.', 'Wolę styl *sportowy*.', 'Prefiro o estilo esportivo.'],
    ]},
    { g: 'Horóscopo e signos', w: [
      ['horoskop', 'horóscopo', '', 'Czytasz codziennie *horoskop*?', 'Você lê o horóscopo todo dia?'],
      ['znak zodiaku', 'signo', 'pl.: znaki zodiaku', 'Jaki jest twój *znak zodiaku*?', 'Qual é o seu signo?'],
      ['Baran', 'Áries', '', 'Jestem spod znaku *Barana*.', 'Sou do signo de Áries.'],
      ['Byk', 'Touro', '', '*Byk* jest uparty, ale lojalny.', 'Touro é teimoso, mas leal.'],
      ['Bliźnięta', 'Gêmeos', 'só plural', 'Urodziłam się w czerwcu, jako *Bliźnięta*.', 'Nasci em junho, como Gêmeos.'],
      ['Rak', 'Câncer', '', '*Rak* jest bardzo rodzinny.', 'Câncer é muito família.'],
      ['Lew', 'Leão', '', '*Lew* lubi być w centrum uwagi.', 'Leão gosta de ser o centro das atenções.'],
      ['Panna', 'Virgem', '', '*Panna* jest dokładna i skrupulatna.', 'Virgem é detalhista e meticulosa.'],
      ['Waga', 'Libra', '', '*Waga* szuka równowagi.', 'Libra busca equilíbrio.'],
      ['Skorpion', 'Escorpião', '', '*Skorpion* bywa tajemniczy.', 'Escorpião às vezes é misterioso.'],
      ['Strzelec', 'Sagitário', '', '*Strzelec* kocha podróże.', 'Sagitário adora viagens.'],
      ['Koziorożec', 'Capricórnio', '', '*Koziorożec* jest ambitny.', 'Capricórnio é ambicioso.'],
      ['Wodnik', 'Aquário', '', '*Wodnik* myśli niezależnie.', 'Aquário pensa de forma independente.'],
      ['Ryby', 'Peixes', 'só plural', '*Ryby* są wrażliwe i marzycielskie.', 'Peixes são sensíveis e sonhadores.'],
      ['przepowiednia', 'previsão, profecia', '', 'Nie wierzę w żadne *przepowiednie*.', 'Não acredito em nenhuma previsão.'],
      ['przyszłość', 'futuro', 'gen.: przyszłości', 'Chciałbym znać swoją *przyszłość*.', 'Eu gostaria de conhecer meu futuro.'],
      ['szczęście', 'sorte; felicidade', 'mieć szczęście = ter sorte', 'Dziś będziesz mieć *szczęście* w miłości.', 'Hoje você terá sorte no amor.'],
      ['pech', 'azar', '', 'Znowu miałem *pecha*: zgubiłem klucze.', 'De novo tive azar: perdi as chaves.'],
      ['uparty', 'teimoso', 'adj.', 'Jestem *uparty* jak osioł.', 'Sou teimoso como uma mula.'],
    ]},
  ],
  grammar: [
    { t: 'Wyglądać: jak, na, jakby', h: `
      <p>O verbo <b>wyglądać</b> muda de construção conforme o que vem depois:</p>
      <table><tr><th>Estrutura</th><th>Significado</th><th>Exemplo</th></tr>
      <tr><td><b>wyglądać jak</b> + nominativo</td><td>parecer-se com</td><td>Wygląda <b>jak model</b>.</td></tr>
      <tr><td><b>wyglądać na</b> + acusativo</td><td>aparentar ser/estar</td><td>Wyglądasz <b>na zmęczonego</b>.</td></tr>
      <tr><td><b>wyglądać, jakby</b> + passado</td><td>parecer que…</td><td>Wygląda, <b>jakby nie spał</b> od tygodnia.</td></tr>
      <tr><td><b>wyglądać</b> + advérbio</td><td>ter boa/má aparência</td><td>Wyglądasz <b>świetnie</b>.</td></tr></table>
      <p class="tip">Para "ficar bem": <b>Ta sukienka ci pasuje</b> (serve em você) e <b>pasuje do butów</b> (combina com os sapatos).</p>` },
    { t: 'Ten sam, taki sam, podobny', h: `
      <p><b>ten sam</b> = o mesmo (a mesma coisa): <i>Mamy <b>tę samą</b> torebkę.</i> (é a mesma bolsa, nós a compartilhamos)</p>
      <p><b>taki sam</b> = igual, do mesmo tipo: <i>Mamy <b>takie same</b> torebki.</i> (duas bolsas iguais)</p>
      <p><b>podobny do</b> + genitivo = parecido com: <i>Ten sweter jest <b>podobny do</b> mojego.</i></p>
      <table><tr><th></th><th>m</th><th>f</th><th>n</th></tr>
      <tr><td>ten sam (nom.)</td><td>ten sam</td><td>ta sama</td><td>to samo</td></tr>
      <tr><td>acusativo</td><td>tego samego / ten sam</td><td>tę samą</td><td>to samo</td></tr></table>` },
  ],
  checks: [
    ['Ona wygląda ___ modelka.', ['jak', 'na', 'jakby'], 0, 'Wyglądać jak + nominativo.'],
    ['Wyglądasz ___ zmęczonego.', ['jak', 'na', 'jakby'], 1, 'Wyglądać na + acusativo.'],
    ['Ta sukienka ___ do twoich butów.', ['pasuje', 'nosi', 'wygląda'], 0, 'Pasować do + genitivo = combinar com.'],
    ['Mamy ___ samą torebkę! (a mesma)', ['tę', 'ta', 'tą'], 0, 'Acusativo feminino: tę samą.'],
  ],
  dialogue: { t: 'W sklepie z ubraniami', l: [
    ['Ola', 'Lucas, ta kurtka jest bardzo modna. Przymierz ją!', 'Lucas, essa jaqueta está muito na moda. Experimente!'],
    ['Lucas', 'Nie wiem. Wyglądam w niej jak nastolatek.', 'Não sei. Nela pareço um adolescente.'],
    ['Ola', 'Wcale nie! Pasuje ci ten kolor. A jaki masz rozmiar?', 'Nada disso! Essa cor te cai bem. E qual é o seu tamanho?'],
    ['Lucas', 'Zwykle M. Ta jest chyba za duża. Wyglądam, jakbym pożyczył ją od brata.', 'Geralmente M. Essa parece grande demais. Pareço ter pegado emprestada do meu irmão.'],
    ['Ola', 'Poproszę w sklepie o mniejszy rozmiar. A z czego jest ta kurtka?', 'Vou pedir um tamanho menor na loja. E de que material é essa jaqueta?'],
    ['Lucas', 'Z bawełny i trochę z wełny. Będzie ciepła.', 'De algodão e um pouco de lã. Vai ser quente.'],
    ['Ola', 'Kupuj! A potem sprawdzimy twój horoskop. Jaki jest twój znak zodiaku?', 'Compre! E depois vamos ver o seu horóscopo. Qual é o seu signo?'],
    ['Lucas', 'Jestem Strzelec. Podobno kocham podróże, ale nie umiem planować.', 'Sou Sagitário. Dizem que amo viagens, mas não sei planejar.'],
    ['Ola', 'To prawda! Ja jestem Panna, więc planuję za nas oboje.', 'Verdade! Eu sou Virgem, então planejo por nós dois.'],
  ]},
  fill: [
    ['Ten kolor jest teraz w ___. (moda)', 'modzie', 'Esta cor está na moda agora.'],
    ['Wyglądasz ___ zmęczonego.', 'na', 'Você parece cansado.'],
    ['Ta torebka ___ do twoich butów.', 'pasuje', 'Esta bolsa combina com seus sapatos.'],
    ['Czy mogę ___ tę sukienkę?', 'przymierzyć', 'Posso experimentar este vestido?'],
    ['Sweter z ___ jest bardzo ciepły.', 'wełny', 'O suéter de lã é muito quente.'],
    ['Jaki jest twój ___ zodiaku?', 'znak', 'Qual é o seu signo?'],
  ],
  order: [
    ['Wyglądasz, jakbyś nie spał od tygodnia.', 'Você parece não dormir há uma semana.'],
    ['Ta kurtka jest w modzie w tym roku.', 'Esta jaqueta está na moda este ano.'],
    ['Mamy takie same buty.', 'Temos sapatos iguais.'],
    ['Nie wierzę w przepowiednie z horoskopu.', 'Não acredito em previsões de horóscopo.'],
    ['Strzelec kocha podróże i wolność.', 'Sagitário adora viagens e liberdade.'],
  ],
  write: {
    p: 'Descreva um look que você usaria numa ocasião especial (entrevista, casamento, festa) e fale do seu signo: você se reconhece nas características? Concorda ou não com o horóscopo?',
    c: ['Wyglądać jak / na / jakby (uma de cada)', 'Pasować do… ou pasuje mi', 'Cinco peças de roupa ou acessórios', 'O nome do seu signo e duas características'],
    min: 160,
  },
});
