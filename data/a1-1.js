/* Polonês A1 — capítulos 1 a 5 */
COURSE.add('a1', {
  n: 1, gl: ['Ć', 'cześć', 'ć soa como "tch" suave, quase um "tchi"'],
  pl: 'Cześć!', pt: 'Primeiros contatos',
  busuu: ['Hi!', 'Saying your name in Polish', 'Asking someone their name', 'Developing fluency'],
  goals: ['Cumprimentar e se despedir', 'Dizer seu nome de três formas', 'Perguntar o nome de alguém', 'Conhecer os sons básicos do alfabeto'],
  vocab: [
    { g: 'Cumprimentos e despedidas', w: [
      ['cześć', 'oi / tchau', 'informal, serve para chegar e sair'],
      ['hej', 'oi', 'bem informal'],
      ['dzień dobry', 'bom dia / boa tarde', 'formal, usado até o fim da tarde'],
      ['dobry wieczór', 'boa noite', 'ao chegar, à noite'],
      ['do widzenia', 'até logo', 'formal'],
      ['na razie', 'até mais', 'informal'],
      ['pa!', 'tchau!', 'informal'],
      ['dobranoc', 'boa noite', 'ao ir dormir'],
    ]},
    { g: 'O seu nome', w: [
      ['imię', 'nome (primeiro nome)'],
      ['nazwisko', 'sobrenome'],
      ['Mam na imię…', 'Meu nome é…', 'literalmente "tenho por nome"'],
      ['Nazywam się…', 'Eu me chamo…', 'costuma vir com nome e sobrenome'],
      ['Jestem…', 'Eu sou…'],
      ['Jak masz na imię?', 'Qual é o seu nome?', 'informal'],
      ['Jak się nazywasz?', 'Como você se chama?', 'informal'],
      ['A ty?', 'E você?'],
      ['Miło mi.', 'Prazer.'],
      ['Mnie też.', 'Igualmente. / Eu também.'],
    ]},
    { g: 'Palavras-chave', w: [
      ['tak', 'sim'],
      ['nie', 'não'],
      ['dziękuję', 'obrigado / obrigada'],
      ['proszę', 'por favor / de nada / aqui está'],
      ['przepraszam', 'desculpe / com licença'],
      ['i', 'e'],
    ]},
  ],
  grammar: [
    { t: 'Formal ou informal?', h: `
      <p>O polonês separa bem o tratamento informal (amigos, família, crianças, colegas jovens) do formal (desconhecidos, atendentes, professores, pessoas mais velhas).</p>
      <table><tr><th>Situação</th><th>Informal</th><th>Formal</th></tr>
      <tr><td>Chegar</td><td>Cześć! / Hej!</td><td>Dzień dobry! / Dobry wieczór!</td></tr>
      <tr><td>Sair</td><td>Cześć! / Na razie! / Pa!</td><td>Do widzenia!</td></tr></table>
      <p class="tip">Na dúvida, use <b>Dzień dobry</b>. Ninguém se ofende com formalidade.</p>` },
    { t: 'Três jeitos de dizer o nome', h: `
      <table><tr><th>Polonês</th><th>Ideia</th><th>Quando usar</th></tr>
      <tr><td><b>Mam na imię</b> Lucas.</td><td>Tenho por nome Lucas.</td><td>Só o primeiro nome</td></tr>
      <tr><td><b>Nazywam się</b> Lucas Silva.</td><td>Eu me chamo Lucas Silva.</td><td>Nome completo, mais neutro</td></tr>
      <tr><td><b>Jestem</b> Lucas.</td><td>Sou o Lucas.</td><td>Rápido e informal</td></tr></table>
      <p>Para perguntar: <b>Jak masz na imię?</b> (só o nome) ou <b>Jak się nazywasz?</b></p>` },
    { t: 'Os sons que mais mudam', h: `
      <p>O polonês se lê quase sempre como se escreve. Estas letras soam diferente do português:</p>
      <table><tr><th>Letra</th><th>Soa como</th><th>Exemplo</th></tr>
      <tr><td>w</td><td>v</td><td>widzenia</td></tr>
      <tr><td>ł</td><td>u (como em "mau")</td><td>miło</td></tr>
      <tr><td>j</td><td>i</td><td>jestem</td></tr>
      <tr><td>c</td><td>ts</td><td>co ("tso")</td></tr>
      <tr><td>ch / h</td><td>rr aspirado (como no Rio)</td><td>chleb</td></tr>
      <tr><td>y</td><td>i fechado, quase "ê"</td><td>dobry</td></tr>
      <tr><td>ą / ę</td><td>vogais nasais: "on" / "en"</td><td>dziękuję</td></tr>
      <tr><td>ó</td><td>u</td><td>wieczór</td></tr></table>
      <p class="tip">A sílaba tônica é quase sempre a <b>penúltima</b>: dzię-<b>ku</b>-ję, prze-<b>pra</b>-szam.</p>` },
  ],
  dialogue: { t: 'No primeiro dia do curso', l: [
    ['Ola', 'Cześć!', 'Oi!'],
    ['Lucas', 'Cześć! Jestem Lucas. A ty?', 'Oi! Eu sou o Lucas. E você?'],
    ['Ola', 'Mam na imię Ola. Miło mi.', 'Meu nome é Ola. Prazer.'],
    ['Lucas', 'Mnie też.', 'Igualmente.'],
    ['Ola', 'Jak się nazywasz?', 'Como você se chama (nome completo)?'],
    ['Lucas', 'Nazywam się Lucas Silva. A ty?', 'Eu me chamo Lucas Silva. E você?'],
    ['Ola', 'Nazywam się Ola Nowak.', 'Eu me chamo Ola Nowak.'],
    ['Lucas', 'Dziękuję. Na razie!', 'Obrigado. Até mais!'],
    ['Ola', 'Pa!', 'Tchau!'],
  ]},
  fill: [
    ['Mam na ___ Ola.', 'imię', 'Meu nome é Ola.'],
    ['Jak ___ na imię?', 'masz', 'Qual é o seu nome?'],
    ['___ się Anna Nowak.', 'Nazywam', 'Eu me chamo Anna Nowak.'],
    ['Miło ___.', 'mi', 'Prazer.'],
    ['Dzień ___!', 'dobry', 'Bom dia!'],
    ['Do ___!', 'widzenia', 'Até logo! (formal)'],
    ['Mnie ___.', 'też', 'Igualmente.'],
  ],
  order: [
    ['Jak masz na imię?', 'Qual é o seu nome?'],
    ['Nazywam się Lucas Silva.', 'Eu me chamo Lucas Silva.'],
    ['Cześć, jestem Ola. A ty?', 'Oi, eu sou a Ola. E você?'],
    ['Dzień dobry, mam na imię Marek.', 'Bom dia, meu nome é Marek.'],
  ],
  write: {
    p: 'Escreva uma pequena apresentação, como se encontrasse um colega novo no curso.',
    c: ['Cumprimente (informal)', 'Diga seu nome de duas formas diferentes', 'Pergunte o nome da outra pessoa', 'Diga "prazer"', 'Despeça-se'],
    min: 15,
  },
});

COURSE.add('a1', {
  n: 2, gl: ['Ś', 'świetnie', 'ś soa como "ch" suave, com a língua mais para a frente'],
  pl: 'Jak się masz?', pt: 'Cumprimentos e apresentações',
  busuu: ['Listening to introductions', 'Asking people how they are', 'Developing fluency', 'Discovering survival phrases', 'Greeting people formally', 'Practising pronunciation', 'Greetings and introductions'],
  goals: ['Perguntar e responder como alguém está', 'Usar pan e pani no tratamento formal', 'Usar frases de sobrevivência', 'Distinguir c, cz e ć'],
  vocab: [
    { g: 'Como vai?', w: [
      ['Jak się masz?', 'Como vai? / Tudo bem?', 'informal'],
      ['Co słychać?', 'E aí? / Quais as novidades?', 'informal'],
      ['A u ciebie?', 'E com você?', 'informal'],
      ['dobrze', 'bem'],
      ['bardzo dobrze', 'muito bem'],
      ['świetnie', 'ótimo'],
      ['w porządku', 'tudo certo'],
      ['nieźle', 'nada mal'],
      ['tak sobie', 'mais ou menos'],
      ['źle', 'mal'],
    ]},
    { g: 'Tratamento formal', w: [
      ['pan', 'o senhor'],
      ['pani', 'a senhora'],
      ['Jak się pan ma?', 'Como vai o senhor?'],
      ['Jak się pani ma?', 'Como vai a senhora?'],
      ['A pan? / A pani?', 'E o senhor? / E a senhora?'],
    ]},
    { g: 'Frases de sobrevivência', w: [
      ['Nie rozumiem.', 'Não entendo.'],
      ['Nie wiem.', 'Não sei.'],
      ['Proszę powtórzyć.', 'Por favor, repita.'],
      ['Proszę wolniej.', 'Mais devagar, por favor.'],
      ['Co to znaczy?', 'O que isso significa?'],
      ['Mówię trochę po polsku.', 'Falo um pouco de polonês.'],
      ['Dziękuję bardzo.', 'Muito obrigado.'],
      ['Nie ma za co.', 'De nada.'],
    ]},
  ],
  grammar: [
    { t: 'Jak się masz? × Jak się pan ma?', h: `
      <p>No formal, você não fala com "você", e sim com <b>pan</b> (o senhor) ou <b>pani</b> (a senhora). O verbo vai para a forma de "ele/ela".</p>
      <table><tr><th>Informal (ty)</th><th>Formal (pan / pani)</th></tr>
      <tr><td>Jak się <b>masz</b>?</td><td>Jak się <b>pan ma</b>? / Jak się <b>pani ma</b>?</td></tr>
      <tr><td>A ty?</td><td>A pan? / A pani?</td></tr></table>
      <p class="tip">Em português é parecido: "Como vai <em>você</em>?" × "Como vai <em>o senhor</em>?"</p>` },
    { t: 'Respostas em escala', h: `
      <p class="scale">świetnie → bardzo dobrze → dobrze → w porządku → nieźle → tak sobie → źle</p>
      <p>Depois de responder, devolva a pergunta: <b>Dobrze, dziękuję. A ty?</b> ou <b>A u ciebie?</b></p>` },
    { t: 'Pronúncia: c, cz e ć', h: `
      <table><tr><th>Letra</th><th>Som</th><th>Exemplos</th></tr>
      <tr><td><b>c</b></td><td>"ts", como em "tsunami"</td><td>co (tso), noc</td></tr>
      <tr><td><b>cz</b></td><td>"tch" firme, língua para trás</td><td>czy, często</td></tr>
      <tr><td><b>ć</b> / <b>ci</b></td><td>"tch" suave, língua para a frente, como "tia" no Rio</td><td>cześć, ciocia</td></tr></table>
      <p class="tip">Diante de <b>i</b>, o acento cai: <i>ci</i> = <i>ć</i> + i. Por isso se escreve <i>ciocia</i>, e não <i>ćocia</i>.</p>` },
  ],
  dialogue: { t: 'Na entrada do prédio', l: [
    ['Lucas', 'Dzień dobry, pani!', 'Bom dia, senhora!'],
    ['Pani Zofia', 'Dzień dobry! Jak się pan ma?', 'Bom dia! Como vai o senhor?'],
    ['Lucas', 'Dobrze, dziękuję. A pani?', 'Bem, obrigado. E a senhora?'],
    ['Pani Zofia', 'Świetnie, dziękuję. Do widzenia!', 'Ótima, obrigada. Até logo!'],
    ['Marek', 'Hej, Lucas! Co słychać?', 'Ei, Lucas! E aí?'],
    ['Lucas', 'Cześć! Nieźle. A u ciebie?', 'Oi! Nada mal. E com você?'],
    ['Marek', 'Tak sobie… Jestem zmęczony.', 'Mais ou menos… Estou cansado.'],
    ['Lucas', 'Przepraszam, nie rozumiem. Co to znaczy „zmęczony”?', 'Desculpe, não entendo. O que significa "zmęczony"?'],
    ['Marek', 'Zmęczony to „cansado”.', 'Zmęczony é "cansado".'],
    ['Lucas', 'Aha, dziękuję bardzo!', 'Ah, muito obrigado!'],
    ['Marek', 'Nie ma za co. Na razie!', 'De nada. Até mais!'],
  ]},
  fill: [
    ['Jak się ___?', 'masz', 'Como vai você?'],
    ['Jak się pan ___?', 'ma', 'Como vai o senhor?'],
    ['Dobrze, dziękuję. A ___?', 'ty', 'Bem, obrigado. E você?'],
    ['Nie ___. Proszę powtórzyć.', 'rozumiem', 'Não entendo. Por favor, repita.'],
    ['Co to ___?', 'znaczy', 'O que isso significa?'],
    ['Nie ma za ___.', 'co', 'De nada.'],
    ['Mówię trochę po ___.', 'polsku', 'Falo um pouco de polonês.'],
  ],
  order: [
    ['Jak się pani ma?', 'Como vai a senhora?'],
    ['Dobrze, dziękuję. A u ciebie?', 'Bem, obrigado. E com você?'],
    ['Przepraszam, nie rozumiem.', 'Desculpe, não entendo.'],
    ['Mówię trochę po polsku.', 'Falo um pouco de polonês.'],
  ],
  write: {
    p: 'Escreva dois mini-diálogos: um com um amigo (informal) e outro com sua vizinha idosa (formal, com pani).',
    c: ['Pergunte como a pessoa está nos dois registros', 'Use pelo menos três respostas diferentes (dobrze, świetnie, tak sobie…)', 'Use uma frase de sobrevivência', 'Agradeça e se despeça de forma adequada'],
    min: 25,
  },
});

COURSE.add('a1', {
  n: 3, gl: ['J', 'jestem', 'j soa como "i": jes-tem'],
  pl: 'Skąd jesteś?', pt: 'Origem e o verbo być',
  busuu: ['Asking people where they\'re from', 'Singular personal pronouns', 'Singular forms of the verb "być"', 'Introducing other people', 'Practising pronunciation'],
  goals: ['Dizer de onde você é', 'Usar os pronomes ja, ty, on, ona, ono', 'Conjugar być no singular', 'Apresentar outras pessoas'],
  vocab: [
    { g: 'Origem', w: [
      ['Skąd jesteś?', 'De onde você é?', 'informal'],
      ['Skąd pan jest? / Skąd pani jest?', 'De onde o senhor / a senhora é?'],
      ['Jestem z…', 'Sou de…'],
      ['z Brazylii', 'do Brasil'],
      ['z Polski', 'da Polônia'],
      ['z Portugalii', 'de Portugal'],
      ['z Hiszpanii', 'da Espanha'],
      ['z Włoch', 'da Itália'],
      ['z Niemiec', 'da Alemanha'],
      ['z Francji', 'da França'],
      ['z Anglii', 'da Inglaterra'],
      ['z Ukrainy', 'da Ucrânia'],
    ]},
    { g: 'Pronomes (singular)', w: [
      ['ja', 'eu'],
      ['ty', 'você / tu'],
      ['on', 'ele'],
      ['ona', 'ela'],
      ['ono', 'ele/ela (neutro, coisas e crianças)'],
    ]},
    { g: 'Apresentando pessoas', w: [
      ['To jest…', 'Este é… / Esta é…'],
      ['Kto to jest?', 'Quem é?'],
      ['kolega', 'colega (homem)'],
      ['koleżanka', 'colega (mulher)'],
      ['przyjaciel', 'amigo (próximo)'],
      ['przyjaciółka', 'amiga (próxima)'],
      ['ale', 'mas'],
      ['też', 'também'],
    ]},
  ],
  grammar: [
    { t: 'O verbo być (ser/estar) no singular', h: `
      <p>Um só verbo para "ser" e "estar".</p>
      <table><tr><th>Pronome</th><th>być</th><th>Exemplo</th></tr>
      <tr><td>ja</td><td><b>jestem</b></td><td>Jestem z Brazylii.</td></tr>
      <tr><td>ty</td><td><b>jesteś</b></td><td>Skąd jesteś?</td></tr>
      <tr><td>on / ona / ono</td><td><b>jest</b></td><td>Ona jest z Polski.</td></tr>
      <tr><td>pan / pani</td><td><b>jest</b></td><td>Skąd pan jest?</td></tr></table>
      <p class="tip">Como no português, o pronome costuma cair: <b>Jestem z Brazylii</b> já diz "eu".</p>` },
    { t: 'z + país', h: `
      <p>Depois de <b>z</b> ("de", origem) o nome do país muda de forma. Por enquanto, decore os pares:</p>
      <table><tr><th>País</th><th>Sou de…</th></tr>
      <tr><td>Brazylia</td><td>z Brazylii</td></tr><tr><td>Polska</td><td>z Polski</td></tr>
      <tr><td>Portugalia</td><td>z Portugalii</td></tr><tr><td>Hiszpania</td><td>z Hiszpanii</td></tr>
      <tr><td>Włochy</td><td>z Włoch</td></tr><tr><td>Niemcy</td><td>z Niemiec</td></tr></table>
      <p>Isso é o caso <b>genitivo</b>. Você vai vê-lo de novo mais tarde, sem pressa.</p>` },
    { t: 'Pronúncia: s, sz e ś', h: `
      <table><tr><th>Letra</th><th>Som</th><th>Exemplo</th></tr>
      <tr><td><b>s</b></td><td>"s" de "sapo"</td><td>skąd</td></tr>
      <tr><td><b>sz</b></td><td>"ch" de "chá", firme</td><td>nazywasz</td></tr>
      <tr><td><b>ś</b> / <b>si</b></td><td>"ch" suave, sorrindo</td><td>jesteś, siostra</td></tr></table>` },
  ],
  dialogue: { t: 'Na festa da Ola', l: [
    ['Ola', 'Marta, to jest Lucas. Lucas, to jest Marta.', 'Marta, este é o Lucas. Lucas, esta é a Marta.'],
    ['Marta', 'Cześć! Miło mi. Skąd jesteś?', 'Oi! Prazer. De onde você é?'],
    ['Lucas', 'Jestem z Brazylii. A ty?', 'Sou do Brasil. E você?'],
    ['Marta', 'Ja jestem z Hiszpanii, ale Ola jest z Polski.', 'Eu sou da Espanha, mas a Ola é da Polônia.'],
    ['Lucas', 'A kto to jest?', 'E quem é aquele?'],
    ['Ola', 'To jest mój kolega, Paolo. On jest z Włoch.', 'Esse é meu colega, Paolo. Ele é da Itália.'],
    ['Paolo', 'Cześć! Ty jesteś z Brazylii?', 'Oi! Você é do Brasil?'],
    ['Lucas', 'Tak, jestem z Brazylii.', 'Sim, sou do Brasil.'],
  ]},
  fill: [
    ['Skąd ___?', 'jesteś', 'De onde você é?'],
    ['Jestem z ___.', 'Brazylii', 'Sou do Brasil.'],
    ['Ona ___ z Polski.', 'jest', 'Ela é da Polônia.'],
    ['Skąd pani ___?', 'jest', 'De onde a senhora é?'],
    ['___ to jest? To jest Paolo.', 'Kto', 'Quem é? É o Paolo.'],
    ['To ___ moja koleżanka.', 'jest', 'Esta é minha colega.'],
    ['On jest z ___.', 'Włoch', 'Ele é da Itália.'],
  ],
  order: [
    ['Skąd pan jest?', 'De onde o senhor é?'],
    ['Ja jestem z Hiszpanii.', 'Eu sou da Espanha.'],
    ['To jest mój kolega Paolo.', 'Este é meu colega Paolo.'],
    ['Ona jest z Polski, a on jest z Włoch.', 'Ela é da Polônia, e ele é da Itália.'],
  ],
  write: {
    p: 'Você está numa festa internacional. Apresente-se e apresente duas outras pessoas (reais ou inventadas).',
    c: ['Diga seu nome e de onde você é', 'Use "To jest…" para apresentar alguém', 'Use on e ona com jest', 'Use pelo menos três países diferentes'],
    min: 25,
  },
});

COURSE.add('a1', {
  n: 4, gl: ['Cz', 'czujesz', 'cz soa como "tch" firme, com a língua para trás'],
  pl: 'Jak się czujesz?', pt: 'Sentimentos, perguntas e być no plural',
  busuu: ['Saying how you\'re feeling', 'Asking basic questions', 'Plural personal pronouns', 'Plural forms of the verb "być"', 'Countries and the verb "być"'],
  goals: ['Dizer como você se sente (masculino e feminino)', 'Usar as palavras de pergunta', 'Usar os pronomes no plural', 'Conjugar być completo'],
  vocab: [
    { g: 'Como você se sente?', w: [
      ['Jak się czujesz?', 'Como você se sente?'],
      ['Czuję się dobrze.', 'Eu me sinto bem.'],
      ['zmęczony / zmęczona', 'cansado / cansada'],
      ['szczęśliwy / szczęśliwa', 'feliz'],
      ['zadowolony / zadowolona', 'contente, satisfeito/a'],
      ['smutny / smutna', 'triste'],
      ['zły / zła', 'bravo / brava'],
      ['głodny / głodna', 'com fome'],
      ['chory / chora', 'doente'],
      ['zajęty / zajęta', 'ocupado / ocupada'],
      ['trochę', 'um pouco'],
      ['bardzo', 'muito'],
    ]},
    { g: 'Palavras de pergunta', w: [
      ['kto?', 'quem?'],
      ['co?', 'o quê?'],
      ['gdzie?', 'onde?'],
      ['skąd?', 'de onde?'],
      ['jak?', 'como?'],
      ['kiedy?', 'quando?'],
      ['dlaczego?', 'por quê?'],
      ['czy…?', 'partícula que abre pergunta de sim/não'],
    ]},
    { g: 'Pronomes (plural)', w: [
      ['my', 'nós'],
      ['wy', 'vocês'],
      ['oni', 'eles (grupo com pelo menos um homem)'],
      ['one', 'elas (grupo sem homens; também coisas e animais)'],
      ['państwo', 'os senhores / as senhoras (formal)'],
    ]},
  ],
  grammar: [
    { t: 'być completo', h: `
      <table><tr><th>Singular</th><th></th><th>Plural</th><th></th></tr>
      <tr><td>ja</td><td><b>jestem</b></td><td>my</td><td><b>jesteśmy</b></td></tr>
      <tr><td>ty</td><td><b>jesteś</b></td><td>wy</td><td><b>jesteście</b></td></tr>
      <tr><td>on / ona / ono</td><td><b>jest</b></td><td>oni / one</td><td><b>są</b></td></tr>
      <tr><td>pan / pani</td><td><b>jest</b></td><td>państwo</td><td><b>są</b></td></tr></table>
      <p class="tip">Veja o padrão das terminações: <b>-m, -ś, —, -śmy, -ście</b>. Ele volta em vários verbos.</p>` },
    { t: 'O adjetivo concorda com quem fala', h: `
      <p>Homem diz <b>Jestem zmęczony</b>. Mulher diz <b>Jestem zmęczona</b>.</p>
      <table><tr><th>Masculino (-y / -i)</th><th>Feminino (-a)</th></tr>
      <tr><td>głodny</td><td>głodna</td></tr><tr><td>szczęśliwy</td><td>szczęśliwa</td></tr><tr><td>zły</td><td>zła</td></tr></table>` },
    { t: 'Perguntas com czy', h: `
      <p>Para uma pergunta de sim/não, coloque <b>czy</b> no começo. A ordem das palavras não muda.</p>
      <table><tr><th>Afirmação</th><th>Pergunta</th></tr>
      <tr><td>Jesteś głodny.</td><td><b>Czy</b> jesteś głodny?</td></tr>
      <tr><td>Oni są z Polski.</td><td><b>Czy</b> oni są z Polski?</td></tr></table>
      <p class="tip">Na fala rápida o <i>czy</i> às vezes some e só a entonação marca a pergunta.</p>` },
  ],
  dialogue: { t: 'Depois da aula', l: [
    ['Ania', 'Cześć, Lucas! Jak się czujesz?', 'Oi, Lucas! Como você se sente?'],
    ['Lucas', 'Jestem trochę zmęczony. A ty?', 'Estou um pouco cansado. E você?'],
    ['Ania', 'Czuję się dobrze, ale jestem bardzo głodna!', 'Me sinto bem, mas estou com muita fome!'],
    ['Lucas', 'Kto to jest?', 'Quem são eles?'],
    ['Ania', 'To są Tiago i Inês. Oni są z Portugalii.', 'São o Tiago e a Inês. Eles são de Portugal.'],
    ['Tiago', 'Cześć! A wy? Skąd jesteście?', 'Oi! E vocês? De onde vocês são?'],
    ['Lucas', 'Ja jestem z Brazylii, a Ania jest z Polski.', 'Eu sou do Brasil, e a Ania é da Polônia.'],
    ['Inês', 'Czy jesteście głodni?', 'Vocês estão com fome?'],
    ['Ania', 'Tak! Bardzo!', 'Sim! Muito!'],
  ]},
  fill: [
    ['My ___ z Brazylii.', 'jesteśmy', 'Nós somos do Brasil.'],
    ['Skąd ___? (wy)', 'jesteście', 'De onde vocês são?'],
    ['Oni ___ z Portugalii.', 'są', 'Eles são de Portugal.'],
    ['___ jesteś głodna?', 'Czy', 'Você está com fome?'],
    ['Ania jest bardzo ___. (zmęczony)', 'zmęczona', 'A Ania está muito cansada.'],
    ['Jak się ___?', 'czujesz', 'Como você se sente?'],
    ['___ jesteś smutny?', 'Dlaczego', 'Por que você está triste?'],
  ],
  order: [
    ['Czy jesteś bardzo zmęczona?', 'Você está muito cansada?'],
    ['Oni są z Portugalii.', 'Eles são de Portugal.'],
    ['Czuję się dobrze, ale jestem głodny.', 'Me sinto bem, mas estou com fome.'],
    ['Skąd państwo są?', 'De onde os senhores são?'],
  ],
  write: {
    p: 'Escreva uma mensagem curta para um grupo de amigos dizendo como você está hoje e perguntando sobre eles.',
    c: ['Diga como você se sente com pelo menos dois adjetivos (com o gênero certo)', 'Use być no plural (jesteśmy, jesteście ou są)', 'Faça uma pergunta com czy', 'Use outra palavra de pergunta (gdzie, dlaczego, kiedy…)'],
    min: 25,
  },
});

COURSE.add('a1', {
  n: 5, gl: ['Sz', 'mieszkasz', 'sz soa como o "ch" de "chá"'],
  pl: 'Gdzie mieszkasz?', pt: 'Onde você mora',
  busuu: ['Saying where you live', 'Singular forms of "mieszkać"', 'Discovering where people live', 'Developing fluency'],
  goals: ['Dizer onde você mora', 'Conjugar mieszkać', 'Diferenciar "ser de" (z) e "morar em" (w)', 'Falar de cidade, campo, casa e apartamento'],
  vocab: [
    { g: 'Morar', w: [
      ['mieszkać', 'morar'],
      ['Gdzie mieszkasz?', 'Onde você mora?'],
      ['Gdzie pan mieszka? / Gdzie pani mieszka?', 'Onde o senhor / a senhora mora?'],
      ['Mieszkam w…', 'Moro em…'],
      ['teraz', 'agora'],
    ]},
    { g: 'Países e cidades (onde)', w: [
      ['w Polsce', 'na Polônia'],
      ['w Brazylii', 'no Brasil'],
      ['w Portugalii', 'em Portugal'],
      ['w Warszawie', 'em Varsóvia'],
      ['w Krakowie', 'em Cracóvia'],
      ['we Wrocławiu', 'em Breslávia (Wrocław)'],
      ['w Gdańsku', 'em Gdańsk'],
      ['w Lizbonie', 'em Lisboa'],
    ]},
    { g: 'Lugar e moradia', w: [
      ['miasto', 'cidade'],
      ['w mieście', 'na cidade'],
      ['wieś', 'aldeia, campo'],
      ['na wsi', 'no campo'],
      ['stolica', 'capital'],
      ['centrum', 'centro'],
      ['w centrum', 'no centro'],
      ['dom', 'casa'],
      ['mieszkanie', 'apartamento'],
      ['blisko', 'perto'],
      ['daleko', 'longe'],
    ]},
  ],
  grammar: [
    { t: 'mieszkać (morar)', h: `
      <table><tr><th>Singular</th><th></th><th>Plural</th><th></th></tr>
      <tr><td>ja</td><td><b>mieszkam</b></td><td>my</td><td>mieszkamy</td></tr>
      <tr><td>ty</td><td><b>mieszkasz</b></td><td>wy</td><td>mieszkacie</td></tr>
      <tr><td>on / ona / pan / pani</td><td><b>mieszka</b></td><td>oni / one / państwo</td><td>mieszkają</td></tr></table>
      <p class="tip">Foque no singular agora. O plural segue o mesmo modelo e vira tema do capítulo 6.</p>` },
    { t: 'z (origem) × w (lugar onde)', h: `
      <table><tr><th>Sou de… (z)</th><th>Moro em… (w)</th></tr>
      <tr><td>z Brazylii</td><td>w Brazylii</td></tr>
      <tr><td>z Polski</td><td>w Polsce</td></tr>
      <tr><td>z Portugalii</td><td>w Portugalii</td></tr>
      <tr><td>z Warszawy</td><td>w Warszawie</td></tr>
      <tr><td>z Krakowa</td><td>w Krakowie</td></tr></table>
      <p>Depois de <b>w</b> vem o caso <b>locativo</b>. Por enquanto, decore as cidades que você usa. Cidades estrangeiras que não "parecem" polonesas costumam não mudar: <i>w Porto</i>, <i>w Toronto</i>.</p>
      <p class="tip"><b>we</b> aparece antes de grupos difíceis de pronunciar: <i>we Wrocławiu</i>.</p>` },
  ],
  dialogue: { t: 'Conversa no trem', l: [
    ['Kasia', 'Przepraszam, czy pan jest z Polski?', 'Com licença, o senhor é da Polônia?'],
    ['Lucas', 'Nie, jestem z Brazylii.', 'Não, sou do Brasil.'],
    ['Kasia', 'A gdzie pan mieszka? W Brazylii?', 'E onde o senhor mora? No Brasil?'],
    ['Lucas', 'Nie, teraz mieszkam w Portugalii.', 'Não, agora moro em Portugal.'],
    ['Kasia', 'W Lizbonie?', 'Em Lisboa?'],
    ['Lucas', 'Nie, w Porto. To duże miasto. A pani? Gdzie pani mieszka?', 'Não, no Porto. É uma cidade grande. E a senhora? Onde a senhora mora?'],
    ['Kasia', 'Mieszkam w Krakowie, w centrum. Ale moja mama mieszka na wsi.', 'Moro em Cracóvia, no centro. Mas minha mãe mora no campo.'],
    ['Lucas', 'Czy to daleko?', 'É longe?'],
    ['Kasia', 'Nie, blisko.', 'Não, é perto.'],
  ]},
  fill: [
    ['Gdzie ___? (ty)', 'mieszkasz', 'Onde você mora?'],
    ['___ w Portugalii. (ja)', 'Mieszkam', 'Moro em Portugal.'],
    ['Ona mieszka w ___. (Polska)', 'Polsce', 'Ela mora na Polônia.'],
    ['Jestem z Brazylii, ale mieszkam ___ Portugalii.', 'w', 'Sou do Brasil, mas moro em Portugal.'],
    ['Pani Zofia mieszka na ___.', 'wsi', 'A dona Zofia mora no campo.'],
    ['Mieszkam ___ Wrocławiu.', 'we', 'Moro em Wrocław.'],
    ['Gdzie pan ___?', 'mieszka', 'Onde o senhor mora?'],
  ],
  order: [
    ['Gdzie pani mieszka?', 'Onde a senhora mora?'],
    ['Teraz mieszkam w Portugalii.', 'Agora moro em Portugal.'],
    ['Mieszkam w Krakowie, w centrum.', 'Moro em Cracóvia, no centro.'],
    ['Jestem z Polski, ale mieszkam w Brazylii.', 'Sou da Polônia, mas moro no Brasil.'],
  ],
  write: {
    p: 'Escreva sobre onde você e duas pessoas que você conhece moram.',
    c: ['Diga de onde você é (z) e onde mora (w)', 'Diga se mora em casa ou apartamento, no centro ou longe', 'Fale onde mora outra pessoa usando mieszka', 'Use blisko ou daleko'],
    min: 30,
  },
});
