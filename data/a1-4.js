/* Polonês A1 — capítulos 16 a 19 */
COURSE.add('a1', {
  n: 16, gl: ['Dż', 'dżem', 'dż soa como "dj" firme: "djem"'],
  pl: 'Poproszę kawę', pt: 'No café: mieć, períodos do dia e acusativo',
  busuu: ['Singular form of "mieć"', 'Times of the day', 'Plural form of "mieć"', 'Talking about food and drinks in a café', 'Asking about food and drinks in a café', 'Accusative', 'Listening to a conversation in a café', 'Developing fluency'],
  goals: ['Conjugar mieć, pić e jeść', 'Dizer em que período do dia algo acontece', 'Pedir comida e bebida num café', 'Usar o acusativo depois de mieć, lubić, poproszę, pić e jeść'],
  vocab: [
    { g: 'Períodos do dia', w: [
      ['rano', 'de manhã (cedo)'],
      ['przed południem', 'antes do meio-dia'],
      ['w południe', 'ao meio-dia'],
      ['po południu', 'à tarde'],
      ['wieczorem', 'à noite (fim do dia)'],
      ['w nocy', 'de madrugada, à noite (tarde)'],
    ]},
    { g: 'Bebidas', w: [
      ['kawa', 'café'],
      ['herbata', 'chá'],
      ['woda (gazowana / niegazowana)', 'água (com gás / sem gás)'],
      ['sok', 'suco'],
      ['mleko', 'leite'],
      ['piwo', 'cerveja'],
      ['wino', 'vinho'],
    ]},
    { g: 'Comidas', w: [
      ['ciasto', 'bolo, torta'],
      ['sernik', 'cheesecake polonês'],
      ['szarlotka', 'torta de maçã'],
      ['kanapka', 'sanduíche'],
      ['rogalik', 'croissant'],
      ['dżem', 'geleia'],
      ['cukier', 'açúcar'],
    ]},
    { g: 'Pedindo', w: [
      ['Poproszę…', 'Vou querer… / Me vê…, por favor'],
      ['Dla mnie…', 'Para mim…'],
      ['z mlekiem', 'com leite'],
      ['bez cukru', 'sem açúcar'],
      ['Na miejscu czy na wynos?', 'Para comer aqui ou para levar?'],
      ['Ile płacę?', 'Quanto é? (quanto pago?)'],
      ['Rachunek, proszę.', 'A conta, por favor.'],
      ['Smacznego!', 'Bom apetite!'],
    ]},
  ],
  grammar: [
    { t: 'mieć, pić e jeść', h: `
      <table><tr><th></th><th>mieć (ter)</th><th>pić (beber)</th><th>jeść (comer)</th></tr>
      <tr><td>ja</td><td>mam</td><td>piję</td><td>jem</td></tr>
      <tr><td>ty</td><td>masz</td><td>pijesz</td><td>jesz</td></tr>
      <tr><td>on / ona / pan</td><td>ma</td><td>pije</td><td>je</td></tr>
      <tr><td>my</td><td>mamy</td><td>pijemy</td><td>jemy</td></tr>
      <tr><td>wy</td><td>macie</td><td>pijecie</td><td>jecie</td></tr>
      <tr><td>oni / one</td><td>mają</td><td>piją</td><td>jedzą</td></tr></table>
      <p class="tip">mieć é do modelo -m / -sz que você já conhece. Por isso <i>Mam na imię</i> soa familiar.</p>` },
    { t: 'O acusativo (objeto direto)', h: `
      <p>Depois de verbos como <b>mieć, lubić, pić, jeść, poproszę, kupować</b>, o objeto vai para o <b>acusativo</b>. No singular, só o feminino muda:</p>
      <table><tr><th>Gênero</th><th>Muda?</th><th>Exemplo</th></tr>
      <tr><td>Feminino (-a)</td><td><b>-a → -ę</b></td><td>kawa → Poproszę kaw<b>ę</b>. herbata → Piję herbat<b>ę</b>.</td></tr>
      <tr><td>Masculino (coisa)</td><td>não</td><td>Poproszę sok. Jem sernik.</td></tr>
      <tr><td>Neutro</td><td>não</td><td>Poproszę ciasto. Piję piwo.</td></tr></table>
      <p class="tip">Masculinos vivos (pessoas e animais) mudam: <i>Mam brata, psa</i>. Isso é o capítulo 19. E na negação o objeto vai para o genitivo: <i>Nie piję kaw<b>y</b></i>.</p>` },
    { t: 'Duas expressões fixas', h: `
      <p><b>z + instrumental</b>: kawa <b>z mlekiem</b>, herbata <b>z cukrem</b>.</p>
      <p><b>bez + genitivo</b>: kawa <b>bez cukru</b>, woda <b>bez gazu</b>. Por enquanto, decore como bloco.</p>` },
  ],
  dialogue: { t: 'No café do bairro', l: [
    ['Kelnerka', 'Dzień dobry! Co dla pana?', 'Bom dia! O que vai ser para o senhor?'],
    ['Lucas', 'Poproszę kawę z mlekiem, bez cukru.', 'Vou querer um café com leite, sem açúcar.'],
    ['Kelnerka', 'A coś do jedzenia? Mamy dziś sernik i szarlotkę.', 'E algo para comer? Hoje temos cheesecake e torta de maçã.'],
    ['Lucas', 'Poproszę szarlotkę. Ola, a ty?', 'Vou querer a torta de maçã. Ola, e você?'],
    ['Ola', 'Dla mnie herbata i kanapka. Rano nigdy nie piję kawy.', 'Para mim um chá e um sanduíche. De manhã nunca bebo café.'],
    ['Kelnerka', 'Na miejscu czy na wynos?', 'Para comer aqui ou para levar?'],
    ['Lucas', 'Na miejscu.', 'Aqui.'],
    ['Kelnerka', 'Proszę bardzo. Smacznego!', 'Aqui está. Bom apetite!'],
    ['Lucas', 'Przepraszam, rachunek, proszę. Ile płacę?', 'Com licença, a conta, por favor. Quanto é?'],
  ]},
  fill: [
    ['Poproszę ___. (kawa)', 'kawę', 'Vou querer um café.'],
    ['Piję ___ rano. (herbata)', 'herbatę', 'Bebo chá de manhã.'],
    ['Poproszę ___. (sok)', 'sok', 'Vou querer um suco.'],
    ['Czy ___ sernik? (wy, mieć)', 'macie', 'Vocês têm cheesecake?'],
    ['Oni ___ kanapki. (jeść)', 'jedzą', 'Eles comem sanduíches.'],
    ['Kawa z ___, proszę.', 'mlekiem', 'Café com leite, por favor.'],
    ['Po ___ piję wodę.', 'południu', 'À tarde bebo água.'],
  ],
  order: [
    ['Poproszę kawę z mlekiem.', 'Vou querer um café com leite.'],
    ['Dla mnie herbata bez cukru.', 'Para mim um chá sem açúcar.'],
    ['Wieczorem często jem kanapkę.', 'À noite como sanduíche com frequência.'],
    ['Czy macie szarlotkę na wynos?', 'Vocês têm torta de maçã para levar?'],
  ],
  write: {
    p: 'Escreva o diálogo de um pedido num café polonês e, depois, conte o que você come e bebe em cada período do dia.',
    c: ['Use Poproszę ou Dla mnie com pelo menos dois femininos no acusativo (-ę)', 'Use mieć, pić e jeść', 'Use pelo menos quatro períodos do dia', 'Inclua z mlekiem, bez cukru ou na wynos'],
    min: 55,
  },
});

COURSE.add('a1', {
  n: 17, gl: ['Ż', 'żółty', 'ż soa como o "j" de "já" (igual a rz)'],
  pl: 'Co masz w torbie?', pt: 'Bolsas, cores e adjetivos no acusativo',
  busuu: ['Describing the content of our bags', 'Discovering colours', 'Adjectives in the accusative case', 'Developing fluency', 'Listening to friends in a café'],
  goals: ['Dizer o que você carrega', 'Usar as cores com concordância', 'Colocar adjetivos no acusativo'],
  vocab: [
    { g: 'Cores (masculino)', w: [
      ['czerwony', 'vermelho'],
      ['niebieski', 'azul'],
      ['granatowy', 'azul-marinho'],
      ['zielony', 'verde'],
      ['żółty', 'amarelo'],
      ['pomarańczowy', 'laranja'],
      ['różowy', 'rosa'],
      ['fioletowy', 'roxo'],
      ['brązowy', 'marrom'],
      ['szary', 'cinza'],
      ['czarny', 'preto'],
      ['biały', 'branco'],
    ]},
    { g: 'Na bolsa', w: [
      ['torba', 'bolsa'],
      ['plecak', 'mochila'],
      ['portfel', 'carteira'],
      ['klucze', 'chaves'],
      ['parasol', 'guarda-chuva'],
      ['okulary', 'óculos'],
      ['słuchawki', 'fones de ouvido'],
      ['butelka wody', 'garrafa de água'],
      ['chusteczki', 'lenços de papel'],
      ['szminka', 'batom'],
      ['paszport', 'passaporte'],
      ['bilet', 'bilhete, passagem'],
    ]},
    { g: 'Frases', w: [
      ['Co masz w torbie?', 'O que você tem na bolsa?'],
      ['W plecaku mam…', 'Na mochila eu tenho…'],
      ['Jakiego koloru jest…?', 'De que cor é…?'],
      ['zawsze mam przy sobie…', 'sempre levo comigo…'],
    ]},
  ],
  grammar: [
    { t: 'Adjetivo no acusativo', h: `
      <p>O adjetivo acompanha o substantivo. No singular, de novo só o feminino muda:</p>
      <table><tr><th>Gênero</th><th>Nominativo</th><th>Acusativo (Mam…)</th></tr>
      <tr><td>Feminino</td><td>czerwona torba</td><td>czerwon<b>ą</b> torb<b>ę</b></td></tr>
      <tr><td>Masculino (coisa)</td><td>czarny portfel</td><td>czarny portfel</td></tr>
      <tr><td>Neutro</td><td>białe krzesło</td><td>białe krzesło</td></tr>
      <tr><td>Plural (coisas)</td><td>czarne słuchawki</td><td>czarne słuchawki</td></tr></table>
      <p class="tip">Feminino no acusativo: adjetivo em <b>-ą</b>, substantivo em <b>-ę</b>. Mam now<b>ą</b> książk<b>ę</b>.</p>` },
    { t: 'Cores concordam em gênero', h: `
      <table><tr><th>Masc.</th><th>Fem.</th><th>Neutro / plural</th></tr>
      <tr><td>czerwony parasol</td><td>czerwona torba</td><td>czerwone okulary</td></tr>
      <tr><td>niebieski plecak</td><td>niebieska butelka</td><td>niebieskie słuchawki</td></tr></table>
      <p>Algumas coisas só existem no plural: <b>okulary</b>, <b>słuchawki</b>, <b>chusteczki</b>.</p>` },
  ],
  dialogue: { t: 'Amigos num café', l: [
    ['Ola', 'Lucas, co masz w plecaku? Jest ogromny!', 'Lucas, o que você tem na mochila? É enorme!'],
    ['Lucas', 'Mam laptop, ładowarkę i niebieską butelkę wody.', 'Tenho notebook, carregador e uma garrafa de água azul.'],
    ['Ola', 'I to wszystko?', 'E é só isso?'],
    ['Lucas', 'Nie. Mam też czarny portfel, klucze i parasol.', 'Não. Tenho também uma carteira preta, chaves e um guarda-chuva.'],
    ['Ola', 'Jakiego koloru jest parasol?', 'De que cor é o guarda-chuva?'],
    ['Lucas', 'Żółty! A ty? Co masz w torbie?', 'Amarelo! E você? O que tem na bolsa?'],
    ['Ola', 'Mam czerwoną szminkę, okulary i białe słuchawki.', 'Tenho um batom vermelho, óculos e fones brancos.'],
    ['Lucas', 'Masz paszport?', 'Você está com o passaporte?'],
    ['Ola', 'Nie, ale zawsze mam przy sobie chusteczki!', 'Não, mas sempre levo lenços de papel!'],
  ]},
  fill: [
    ['Mam ___ torbę. (czerwony)', 'czerwoną', 'Tenho uma bolsa vermelha.'],
    ['Mam ___ portfel. (czarny)', 'czarny', 'Tenho uma carteira preta.'],
    ['Kupuję ___ książkę. (nowy)', 'nową', 'Compro um livro novo.'],
    ['Ona ma ___ słuchawki. (biały)', 'białe', 'Ela tem fones brancos.'],
    ['To jest ___ butelka. (niebieski)', 'niebieska', 'É uma garrafa azul.'],
    ['Co masz w ___?', 'torbie', 'O que você tem na bolsa?'],
    ['___ koloru jest plecak?', 'Jakiego', 'De que cor é a mochila?'],
  ],
  order: [
    ['W plecaku mam niebieską butelkę.', 'Na mochila tenho uma garrafa azul.'],
    ['Mam czarny portfel i klucze.', 'Tenho uma carteira preta e chaves.'],
    ['Jakiego koloru jest twoja torba?', 'De que cor é sua bolsa?'],
    ['Zawsze mam przy sobie parasol.', 'Sempre levo um guarda-chuva comigo.'],
  ],
  write: {
    p: 'Abra sua bolsa ou mochila e descreva tudo o que tem nela, com cores.',
    c: ['Nomeie pelo menos sete objetos', 'Use cinco cores diferentes', 'Coloque pelo menos três femininos no acusativo (-ą -ę)', 'Diga uma coisa que você sempre leva (zawsze mam przy sobie…)'],
    min: 45,
  },
});

COURSE.add('a1', {
  n: 18, gl: ['Ci', 'ciocia', 'ci = ć + i, um "tchi" suave: "tchótcha"'],
  pl: 'To jest moja rodzina', pt: 'Aparência e família',
  busuu: ['Describing appearance', 'Modifying adjectives', 'Getting to know family members', 'Discovering more family members', 'Introducing your family', 'Possessive adjectives', 'Talking about size', 'Describing faces', 'Listening to a description of a photo'],
  goals: ['Descrever a aparência de alguém', 'Nomear os membros da família', 'Usar mój / twój / jego / jej', 'Graduar adjetivos (bardzo, dość, trochę, za)'],
  vocab: [
    { g: 'Família', w: [
      ['rodzina', 'família'],
      ['mama / matka', 'mãe'],
      ['tata / ojciec', 'pai'],
      ['rodzice', 'pais'],
      ['brat', 'irmão'],
      ['siostra', 'irmã'],
      ['syn', 'filho'],
      ['córka', 'filha'],
      ['dziecko / dzieci', 'criança, filho/a / crianças, filhos'],
      ['dziadek', 'avô'],
      ['babcia', 'avó'],
      ['wujek', 'tio'],
      ['ciocia', 'tia'],
      ['kuzyn / kuzynka', 'primo / prima'],
      ['mąż', 'marido'],
      ['żona', 'esposa'],
    ]},
    { g: 'Aparência', w: [
      ['wysoki / niski', 'alto / baixo'],
      ['szczupły', 'magro'],
      ['średniego wzrostu', 'de altura média'],
      ['włosy', 'cabelo'],
      ['długie / krótkie', 'longos / curtos'],
      ['kręcone / proste', 'cacheados / lisos'],
      ['jasne / ciemne', 'claros (loiros) / escuros'],
      ['rude / siwe', 'ruivos / grisalhos'],
      ['oczy', 'olhos'],
      ['niebieskie / zielone / brązowe oczy', 'olhos azuis / verdes / castanhos'],
      ['broda / wąsy', 'barba / bigode'],
      ['uśmiech', 'sorriso'],
    ]},
    { g: 'Tamanho e intensidade', w: [
      ['ogromny', 'enorme'],
      ['średni', 'médio'],
      ['malutki', 'pequenininho'],
      ['dość', 'bastante'],
      ['trochę', 'um pouco'],
      ['za / zbyt', 'demais'],
      ['niezbyt', 'não muito'],
    ]},
  ],
  grammar: [
    { t: 'Possessivos: meu, teu, dele, dela', h: `
      <table><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neutro / plural</th></tr>
      <tr><td>meu</td><td>mój brat</td><td>moja siostra</td><td>moje dziecko / moje dzieci</td></tr>
      <tr><td>teu / seu</td><td>twój brat</td><td>twoja siostra</td><td>twoje dziecko</td></tr>
      <tr><td>dele</td><td colspan="3"><b>jego</b> (não muda): jego brat, jego siostra</td></tr>
      <tr><td>dela</td><td colspan="3"><b>jej</b> (não muda): jej brat, jej siostra</td></tr></table>
      <p class="tip">Cuidado com o português: "a irmã dele" = <b>jego</b> siostra (concorda com o dono, não com a irmã).</p>` },
    { t: 'Descrevendo com mieć e być', h: `
      <p><b>być + adjetivo</b> para o corpo: <i>On jest wysoki. Ona jest szczupła.</i></p>
      <p><b>mieć + adjetivo + substantivo</b> para cabelo, olhos, barba: <i>Ona ma długie, kręcone włosy. On ma niebieskie oczy i brodę.</i></p>
      <p class="tip">włosy e oczy são plurais, por isso o adjetivo termina em <b>-e</b>.</p>` },
    { t: 'Graduando adjetivos', h: `
      <p class="scale">za wysoki → bardzo wysoki → dość wysoki → trochę wysoki → niezbyt wysoki</p>
      <p><b>za</b> (demais) traz crítica: <i>Ta torba jest za duża.</i></p>` },
  ],
  dialogue: { t: 'Olhando uma foto de família', l: [
    ['Ola', 'To jest moja rodzina. Tu są moi rodzice.', 'Esta é minha família. Aqui estão meus pais.'],
    ['Lucas', 'Twoja mama ma piękne, rude włosy!', 'Sua mãe tem um cabelo ruivo lindo!'],
    ['Ola', 'Tak. A mój tata jest bardzo wysoki i ma siwą brodę.', 'Sim. E meu pai é muito alto e tem barba grisalha.'],
    ['Lucas', 'Kto to jest? Twój brat?', 'Quem é esse? Seu irmão?'],
    ['Ola', 'Nie, to mój kuzyn, Kuba. Jego siostra to Ania.', 'Não, é meu primo, o Kuba. A irmã dele é a Ania.'],
    ['Lucas', 'Ania ma długie, kręcone włosy i niebieskie oczy.', 'A Ania tem cabelo longo e cacheado e olhos azuis.'],
    ['Ola', 'Tak, a jej uśmiech jest ogromny! A tu jest moja babcia.', 'Sim, e o sorriso dela é enorme! E aqui está minha avó.'],
    ['Lucas', 'Jest niska i dość szczupła. Wygląda bardzo miło.', 'Ela é baixa e bastante magra. Parece muito simpática.'],
  ]},
  fill: [
    ['To jest ___ siostra. (meu)', 'moja', 'Esta é minha irmã.'],
    ['To jest ___ brat. (teu)', 'twój', 'Este é teu irmão.'],
    ['Kuba i ___ siostra. (dele)', 'jego', 'O Kuba e a irmã dele.'],
    ['Ania i ___ brat. (dela)', 'jej', 'A Ania e o irmão dela.'],
    ['Ona ma długie, ___ włosy. (kręcony)', 'kręcone', 'Ela tem cabelo longo e cacheado.'],
    ['Mój tata jest bardzo ___. (wysoki)', 'wysoki', 'Meu pai é muito alto.'],
    ['Ta torba jest ___ duża.', 'za', 'Esta bolsa é grande demais.'],
  ],
  order: [
    ['To jest moja rodzina.', 'Esta é minha família.'],
    ['Moja mama ma krótkie, jasne włosy.', 'Minha mãe tem cabelo curto e loiro.'],
    ['Jego brat jest dość wysoki.', 'O irmão dele é bastante alto.'],
    ['Babcia ma zielone oczy.', 'A avó tem olhos verdes.'],
  ],
  write: {
    p: 'Descreva uma foto da sua família (real ou inventada): quem está nela e como cada pessoa é.',
    c: ['Apresente pelo menos quatro membros da família', 'Use mój / moja / moje e também jego ou jej', 'Descreva cabelo e olhos com mieć', 'Use dois modificadores (bardzo, dość, trochę, za, niezbyt)'],
    min: 55,
  },
});

COURSE.add('a1', {
  n: 19, gl: ['Dź', 'dziadek', 'dzi = dź, um "dj" suave: "djá-dek"'],
  pl: 'Ile masz lat?', pt: 'Família, idade e números 11–20',
  busuu: ['More possessive adjectives', 'Talking about relationships', 'Asking about children\'s age', 'Making information more specific', 'Discovering numbers 11-20', 'Animate nouns in the accusative', 'Adjectives in the accusative case', 'Reading about family', 'Developing fluency'],
  goals: ['Contar de 11 a 20', 'Perguntar e dizer a idade (rok / lata / lat)', 'Falar de relacionamentos', 'Usar o acusativo de seres vivos masculinos (-a, -ego)', 'Usar nasz / wasz / ich'],
  vocab: [
    { g: 'Números', w: [
      ['jedenaście', '11'], ['dwanaście', '12'], ['trzynaście', '13'], ['czternaście', '14'], ['piętnaście', '15'],
      ['szesnaście', '16'], ['siedemnaście', '17'], ['osiemnaście', '18'], ['dziewiętnaście', '19'], ['dwadzieścia', '20'],
    ]},
    { g: 'Idade', w: [
      ['Ile masz lat?', 'Quantos anos você tem?'],
      ['Ile lat ma twój syn?', 'Quantos anos tem seu filho?'],
      ['Mam … lat.', 'Tenho … anos.'],
      ['starszy / starsza', 'mais velho / mais velha'],
      ['młodszy / młodsza', 'mais novo / mais nova'],
      ['jedynak / jedynaczka', 'filho único / filha única'],
      ['który / która / które?', 'qual?'],
    ]},
    { g: 'Relacionamentos', w: [
      ['chłopak', 'namorado'],
      ['dziewczyna', 'namorada; também "moça"'],
      ['narzeczony / narzeczona', 'noivo / noiva'],
      ['żonaty', 'casado (homem)'],
      ['zamężna', 'casada (mulher)'],
      ['w związku', 'num relacionamento'],
      ['rozwiedziony / rozwiedziona', 'divorciado / divorciada'],
      ['rodzeństwo', 'irmãos (irmãos e irmãs)'],
      ['przyjaciel / przyjaciółka', 'amigo / amiga'],
      ['pies', 'cachorro'],
      ['kot', 'gato'],
    ]},
  ],
  grammar: [
    { t: 'rok, lata, lat', h: `
      <p>A palavra "ano" muda conforme o número:</p>
      <table><tr><th>Número</th><th>Forma</th><th>Exemplo</th></tr>
      <tr><td>1</td><td><b>rok</b></td><td>Mój syn ma rok.</td></tr>
      <tr><td>2, 3, 4</td><td><b>lata</b></td><td>Córka ma trzy lata.</td></tr>
      <tr><td>5 a 21</td><td><b>lat</b></td><td>Mam dwadzieścia lat. Brat ma piętnaście lat.</td></tr></table>
      <p class="tip">22, 23, 24 voltam a usar <i>lata</i> (dwadzieścia dwa lata). A regra completa vem no A2.</p>` },
    { t: 'Acusativo de seres vivos', h: `
      <p>Masculinos <b>vivos</b> (pessoas, animais) ganham <b>-a</b> no acusativo, e o adjetivo ganha <b>-ego</b>:</p>
      <table><tr><th>Nominativo</th><th>Mam…</th></tr>
      <tr><td>brat</td><td>brat<b>a</b> / starsz<b>ego</b> brat<b>a</b></td></tr>
      <tr><td>syn</td><td>syn<b>a</b></td></tr>
      <tr><td>pies</td><td>ps<b>a</b> (o "ie" cai) / mał<b>ego</b> ps<b>a</b></td></tr>
      <tr><td>kot</td><td>kot<b>a</b> / czarn<b>ego</b> kot<b>a</b></td></tr>
      <tr><td>chłopak</td><td>chłopak<b>a</b></td></tr></table>
      <p>Femininos seguem o padrão do capítulo 17: <i>Mam młodsz<b>ą</b> siostr<b>ę</b>. Mam dziewczyn<b>ę</b>.</i></p>` },
    { t: 'Possessivos: nosso, vosso, deles', h: `
      <table><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neutro / plural</th></tr>
      <tr><td>nosso</td><td>nasz dom</td><td>nasza rodzina</td><td>nasze dzieci</td></tr>
      <tr><td>de vocês</td><td>wasz dom</td><td>wasza rodzina</td><td>wasze dzieci</td></tr>
      <tr><td>deles / delas</td><td colspan="3"><b>ich</b> (não muda): ich dom, ich rodzina</td></tr></table>` },
  ],
  dialogue: { t: 'Lendo sobre a família da Marta', l: [
    ['Lucas', 'Marta, masz rodzeństwo?', 'Marta, você tem irmãos?'],
    ['Marta', 'Tak, mam starszego brata i młodszą siostrę.', 'Sim, tenho um irmão mais velho e uma irmã mais nova.'],
    ['Lucas', 'Ile lat ma twoja siostra?', 'Quantos anos tem sua irmã?'],
    ['Marta', 'Ma siedemnaście lat. A brat ma dwadzieścia.', 'Tem dezessete anos. E meu irmão tem vinte.'],
    ['Lucas', 'Czy twój brat jest żonaty?', 'Seu irmão é casado?'],
    ['Marta', 'Nie, ale ma dziewczynę. A ty? Jesteś w związku?', 'Não, mas tem namorada. E você? Está num relacionamento?'],
    ['Lucas', 'Tak, mam dziewczynę. Mamy też psa i dwa koty.', 'Sim, tenho namorada. Temos também um cachorro e dois gatos.'],
    ['Marta', 'Który to wasz pies? Ten mały?', 'Qual é o cachorro de vocês? Esse pequeno?'],
    ['Lucas', 'Tak, to nasz pies. Ma trzy lata.', 'Sim, é o nosso cachorro. Ele tem três anos.'],
  ]},
  fill: [
    ['Mam ___ lat. (20)', 'dwadzieścia', 'Tenho vinte anos.'],
    ['Córka ma trzy ___.', 'lata', 'A filha tem três anos.'],
    ['Syn ma dwanaście ___.', 'lat', 'O filho tem doze anos.'],
    ['Mam starszego ___. (brat)', 'brata', 'Tenho um irmão mais velho.'],
    ['Mamy małego ___. (pies)', 'psa', 'Temos um cachorro pequeno.'],
    ['Mam młodszą ___. (siostra)', 'siostrę', 'Tenho uma irmã mais nova.'],
    ['To jest ___ dom. (nosso)', 'nasz', 'Esta é a nossa casa.'],
  ],
  order: [
    ['Ile lat ma twój syn?', 'Quantos anos tem seu filho?'],
    ['Mam starszego brata i młodszą siostrę.', 'Tenho um irmão mais velho e uma irmã mais nova.'],
    ['Mój brat nie jest żonaty.', 'Meu irmão não é casado.'],
    ['Mamy czarnego kota.', 'Temos um gato preto.'],
  ],
  write: {
    p: 'Texto final do A1: escreva sobre a sua família estendida (real ou inventada), com idades, relacionamentos e animais.',
    c: ['Diga a idade de pelo menos três pessoas usando rok, lata e lat', 'Use o acusativo de seres vivos (brata, syna, psa…) com um adjetivo (-ego)', 'Use nasz, wasz ou ich', 'Fale de pelo menos um relacionamento (żonaty, ma dziewczynę…)', 'Use conectores e frequência dos capítulos anteriores'],
    min: 70,
  },
});
