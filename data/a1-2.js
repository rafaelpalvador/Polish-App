/* Polonês A1 — capítulos 6 a 10 */
COURSE.add('a1', {
  n: 6, gl: ['Ó', 'mówię', 'ó soa exatamente como "u"'],
  pl: 'Mówisz po polsku?', pt: 'Idiomas e verbos -m / -sz',
  busuu: ['Discovering languages', 'Discovering important phrases', 'Practice of -m, -sz model verb', 'Developing fluency'],
  goals: ['Dizer quais línguas você fala, entende e lê', 'Conjugar o modelo -m / -sz por inteiro', 'Conjugar mówić', 'Pedir ajuda com palavras'],
  vocab: [
    { g: 'Línguas', w: [
      ['język', 'língua, idioma'],
      ['po polsku', 'em polonês'],
      ['po portugalsku', 'em português'],
      ['po angielsku', 'em inglês'],
      ['po hiszpańsku', 'em espanhol'],
      ['po francusku', 'em francês'],
      ['po niemiecku', 'em alemão'],
      ['po włosku', 'em italiano'],
      ['po ukraińsku', 'em ucraniano'],
    ]},
    { g: 'Verbos do modelo -m / -sz', w: [
      ['znać (znam, znasz)', 'conhecer'],
      ['rozumieć (rozumiem, rozumiesz)', 'entender'],
      ['czytać (czytam, czytasz)', 'ler'],
      ['słuchać (słucham, słuchasz)', 'ouvir, escutar'],
      ['pytać (pytam, pytasz)', 'perguntar'],
      ['odpowiadać (odpowiadam, odpowiadasz)', 'responder'],
      ['mówić (mówię, mówisz)', 'falar', 'outro modelo: -ę / -isz'],
    ]},
    { g: 'Frases importantes', w: [
      ['Uczę się polskiego.', 'Estou aprendendo polonês.'],
      ['Jak jest … po polsku?', 'Como é … em polonês?'],
      ['Jak się to pisze?', 'Como se escreve isso?'],
      ['Mówisz po angielsku?', 'Você fala inglês?'],
      ['trochę', 'um pouco'],
      ['tylko', 'só, apenas'],
      ['słabo', 'mal, fraco'],
      ['płynnie', 'fluentemente'],
      ['łatwy / trudny', 'fácil / difícil'],
    ]},
  ],
  grammar: [
    { t: 'O modelo -m / -sz', h: `
      <p>É o grupo de verbos mais regular do polonês. Tire o <b>-ć</b> do infinitivo e acrescente:</p>
      <table><tr><th></th><th>czytać</th><th>rozumieć</th><th>terminação</th></tr>
      <tr><td>ja</td><td>czyta<b>m</b></td><td>rozumie<b>m</b></td><td>-m</td></tr>
      <tr><td>ty</td><td>czyta<b>sz</b></td><td>rozumie<b>sz</b></td><td>-sz</td></tr>
      <tr><td>on / ona / pan</td><td>czyta</td><td>rozumie</td><td>—</td></tr>
      <tr><td>my</td><td>czyta<b>my</b></td><td>rozumie<b>my</b></td><td>-my</td></tr>
      <tr><td>wy</td><td>czyta<b>cie</b></td><td>rozumie<b>cie</b></td><td>-cie</td></tr>
      <tr><td>oni / one</td><td>czyta<b>ją</b></td><td>rozumie<b>ją</b></td><td>-ją</td></tr></table>
      <p class="tip">mieszkać, znać, słuchać, pytać e odpowiadać seguem exatamente a mesma tabela.</p>` },
    { t: 'mówić (falar) e o "po + língua"', h: `
      <table><tr><th>ja</th><th>ty</th><th>on/ona</th><th>my</th><th>wy</th><th>oni</th></tr>
      <tr><td>mówię</td><td>mówisz</td><td>mówi</td><td>mówimy</td><td>mówicie</td><td>mówią</td></tr></table>
      <p>Para dizer <em>em</em> uma língua: <b>po</b> + adjetivo terminado em <b>-u</b>: <i>Mówię po polsku. Czytam po angielsku.</i></p>` },
    { t: 'Negação: nie antes do verbo', h: `
      <p><b>Nie</b> vai logo antes do verbo, como em português.</p>
      <p><i>Rozumiem</i> → <b>Nie rozumiem.</b> &nbsp; <i>Mówię po niemiecku</i> → <b>Nie mówię po niemiecku.</b></p>` },
  ],
  dialogue: { t: 'Troca de idiomas', l: [
    ['Tomek', 'Cześć! Mówisz po polsku?', 'Oi! Você fala polonês?'],
    ['Lucas', 'Tylko trochę. Uczę się polskiego.', 'Só um pouco. Estou aprendendo polonês.'],
    ['Tomek', 'A jakie języki znasz?', 'E que línguas você sabe?'],
    ['Lucas', 'Mówię po portugalsku i po angielsku. Rozumiem też po hiszpańsku.', 'Falo português e inglês. Entendo espanhol também.'],
    ['Tomek', 'Super! Ja mówię po polsku i po angielsku, ale słabo czytam po portugalsku.', 'Ótimo! Eu falo polonês e inglês, mas leio mal em português.'],
    ['Lucas', 'Jak jest „obrigado” po polsku?', 'Como é "obrigado" em polonês?'],
    ['Tomek', '„Dziękuję”.', '"Dziękuję".'],
    ['Lucas', 'Jak się to pisze?', 'Como se escreve?'],
    ['Tomek', 'D-z-i-ę-k-u-j-ę. Polski jest trudny, prawda?', 'D-z-i-ę-k-u-j-ę. O polonês é difícil, né?'],
    ['Lucas', 'Trochę! Ale czytam i słucham codziennie.', 'Um pouco! Mas eu leio e escuto todo dia.'],
  ]},
  fill: [
    ['Mówię ___ angielsku.', 'po', 'Falo inglês.'],
    ['Czy ty ___ po polsku? (mówić)', 'mówisz', 'Você fala polonês?'],
    ['My ___ książki po polsku. (czytać)', 'czytamy', 'Nós lemos livros em polonês.'],
    ['Oni nie ___. (rozumieć)', 'rozumieją', 'Eles não entendem.'],
    ['Czy wy ___ Kraków? (znać)', 'znacie', 'Vocês conhecem Cracóvia?'],
    ['Uczę się ___.', 'polskiego', 'Estou aprendendo polonês.'],
    ['Jak się to ___?', 'pisze', 'Como se escreve isso?'],
  ],
  order: [
    ['Mówię po portugalsku i trochę po polsku.', 'Falo português e um pouco de polonês.'],
    ['Nie rozumiem po niemiecku.', 'Não entendo alemão.'],
    ['Jak jest „casa” po polsku?', 'Como é "casa" em polonês?'],
    ['Oni czytają i słuchają po angielsku.', 'Eles leem e escutam em inglês.'],
  ],
  write: {
    p: 'Escreva um perfil para um app de troca de idiomas.',
    c: ['Diga quais línguas você fala, entende e lê', 'Use pelo menos três verbos do modelo -m / -sz', 'Use mówić e uma negação com nie', 'Diga por que está aprendendo polonês (ou o que acha difícil/fácil)'],
    min: 35,
  },
});

COURSE.add('a1', {
  n: 7, gl: ['Ł', 'miło', 'ł soa como "u" em "mau", ou o "w" do inglês'],
  pl: 'Bardzo mi miło', pt: 'Linguagem formal',
  busuu: ['Using formal language', 'Introducing yourself formally', 'Practising pronunciation', 'Asking about where people live', 'Reviewing verb forms'],
  goals: ['Fazer perguntas formais com pan / pani / państwo', 'Apresentar-se formalmente', 'Entender sobrenomes femininos e masculinos', 'Pronunciar rz, ż, ź, dz, dż, dź'],
  vocab: [
    { g: 'Expressões formais', w: [
      ['Bardzo mi miło.', 'Muito prazer.'],
      ['Witam!', 'Olá! / Seja bem-vindo!', 'semi-formal'],
      ['Zapraszam!', 'Por favor, entre / fique à vontade.'],
      ['Proszę pana! / Proszę pani!', 'Senhor! / Senhora! (para chamar a atenção)'],
      ['Przepraszam, czy…?', 'Com licença, por acaso…?'],
      ['Proszę bardzo.', 'Pois não. / Aqui está.'],
      ['Miłego dnia!', 'Tenha um bom dia!'],
      ['Nawzajem.', 'Igualmente.', 'resposta a votos'],
    ]},
    { g: 'Perguntas formais', w: [
      ['Jak się pan nazywa?', 'Como o senhor se chama?'],
      ['Jak pani ma na imię?', 'Qual é o nome da senhora?'],
      ['Skąd pan jest?', 'De onde o senhor é?'],
      ['Gdzie pani mieszka?', 'Onde a senhora mora?'],
      ['Czy pan mówi po polsku?', 'O senhor fala polonês?'],
      ['Skąd państwo są?', 'De onde os senhores são?'],
    ]},
    { g: 'Pessoas', w: [
      ['pan Nowak', 'o senhor Nowak'],
      ['pani Kowalska', 'a senhora Kowalska'],
      ['państwo Nowakowie', 'o casal Nowak / os Nowak'],
      ['profesor / profesorka', 'professor/a universitário/a'],
      ['sekretarka', 'secretária, recepcionista'],
    ]},
  ],
  grammar: [
    { t: 'ty × pan / pani × państwo', h: `
      <p><b>pan / pani</b> usam o verbo na 3ª pessoa do singular; <b>państwo</b>, na 3ª do plural.</p>
      <table><tr><th>Informal (ty)</th><th>Formal (pan / pani)</th><th>Formal plural (państwo)</th></tr>
      <tr><td>Skąd jesteś?</td><td>Skąd pan jest?</td><td>Skąd państwo są?</td></tr>
      <tr><td>Gdzie mieszkasz?</td><td>Gdzie pani mieszka?</td><td>Gdzie państwo mieszkają?</td></tr>
      <tr><td>Mówisz po polsku?</td><td>Czy pan mówi po polsku?</td><td>Czy państwo mówią po polsku?</td></tr></table>` },
    { t: 'Sobrenomes com gênero', h: `
      <p>Sobrenomes que funcionam como adjetivo mudam: <b>-ski / -cki / -dzki</b> para homens, <b>-ska / -cka / -dzka</b> para mulheres.</p>
      <table><tr><th>Ele</th><th>Ela</th></tr>
      <tr><td>Jan Kowalski</td><td>Anna Kowalska</td></tr>
      <tr><td>Piotr Nowicki</td><td>Ewa Nowicka</td></tr>
      <tr><td>Marek Nowak</td><td>Ola Nowak (não muda)</td></tr></table>` },
    { t: 'Revisão: verbos até aqui', h: `
      <table><tr><th></th><th>ja</th><th>ty</th><th>pan / pani</th></tr>
      <tr><td>być</td><td>jestem</td><td>jesteś</td><td>jest</td></tr>
      <tr><td>mieszkać</td><td>mieszkam</td><td>mieszkasz</td><td>mieszka</td></tr>
      <tr><td>rozumieć</td><td>rozumiem</td><td>rozumiesz</td><td>rozumie</td></tr>
      <tr><td>mówić</td><td>mówię</td><td>mówisz</td><td>mówi</td></tr>
      <tr><td>nazywać się</td><td>nazywam się</td><td>nazywasz się</td><td>nazywa się</td></tr></table>` },
    { t: 'Pronúncia: os sons de "j"', h: `
      <table><tr><th>Letra</th><th>Som</th><th>Exemplo</th></tr>
      <tr><td><b>rz</b> e <b>ż</b></td><td>"j" de "já" (iguais!)</td><td>przepraszam, może</td></tr>
      <tr><td><b>ź</b> / <b>zi</b></td><td>"j" suave, sorrindo</td><td>źle, zima</td></tr>
      <tr><td><b>dz</b></td><td>"dz" junto</td><td>dzwonek</td></tr>
      <tr><td><b>dż</b></td><td>"dj" firme</td><td>dżem</td></tr>
      <tr><td><b>dź</b> / <b>dzi</b></td><td>"dj" suave, como "dia" no Rio</td><td>dzień, dziękuję</td></tr></table>` },
  ],
  dialogue: { t: 'Na recepção da escola de idiomas', l: [
    ['Sekretarka', 'Dzień dobry! Zapraszam. Jak się pan nazywa?', 'Bom dia! Por favor, entre. Como o senhor se chama?'],
    ['Lucas', 'Dzień dobry. Nazywam się Lucas Silva.', 'Bom dia. Eu me chamo Lucas Silva.'],
    ['Sekretarka', 'Bardzo mi miło. Skąd pan jest?', 'Muito prazer. De onde o senhor é?'],
    ['Lucas', 'Jestem z Brazylii.', 'Sou do Brasil.'],
    ['Sekretarka', 'A gdzie pan teraz mieszka?', 'E onde o senhor mora agora?'],
    ['Lucas', 'Mieszkam w Portugalii, w Porto.', 'Moro em Portugal, no Porto.'],
    ['Sekretarka', 'Czy pan mówi po polsku?', 'O senhor fala polonês?'],
    ['Lucas', 'Tylko trochę. Rozumiem więcej, niż mówię.', 'Só um pouco. Entendo mais do que falo.'],
    ['Sekretarka', 'Dobrze. Pani Kowalska to pana nauczycielka. Miłego dnia!', 'Certo. A senhora Kowalska é sua professora. Tenha um bom dia!'],
    ['Lucas', 'Dziękuję, nawzajem!', 'Obrigado, igualmente!'],
  ]},
  fill: [
    ['Jak się pan ___?', 'nazywa', 'Como o senhor se chama?'],
    ['Gdzie pani ___?', 'mieszka', 'Onde a senhora mora?'],
    ['Skąd państwo ___?', 'są', 'De onde os senhores são?'],
    ['Bardzo mi ___.', 'miło', 'Muito prazer.'],
    ['Miłego ___!', 'dnia', 'Tenha um bom dia!'],
    ['Jan Kowalski i Anna ___.', 'Kowalska', 'Jan Kowalski e Anna Kowalska.'],
    ['Czy pan ___ po polsku?', 'mówi', 'O senhor fala polonês?'],
  ],
  order: [
    ['Przepraszam, czy pani mówi po angielsku?', 'Com licença, a senhora fala inglês?'],
    ['Gdzie państwo mieszkają?', 'Onde os senhores moram?'],
    ['Dzień dobry, nazywam się Anna Kowalska.', 'Bom dia, eu me chamo Anna Kowalska.'],
    ['Rozumiem więcej, niż mówię.', 'Entendo mais do que falo.'],
  ],
  write: {
    p: 'Escreva um e-mail formal curto para uma escola de idiomas em Cracóvia, apresentando-se.',
    c: ['Comece com Dzień dobry', 'Diga nome completo, origem e onde mora', 'Diga quais línguas fala e quanto polonês entende', 'Faça uma pergunta formal à secretária usando pani', 'Termine com uma fórmula educada'],
    min: 40,
  },
});

COURSE.add('a1', {
  n: 8, gl: ['Ę', 'pracuję', 'ę soa como "en" nasal; no fim da palavra quase vira "e"'],
  pl: 'Gdzie pracujesz?', pt: 'Profissões e o verbo pracować',
  busuu: ['Talking about occupations', 'Describing your job', 'Asking about workplaces', 'Hearing about workplaces', 'The verb "pracować"', 'Verbs ending in "-ować" (singular)', 'Developing fluency'],
  goals: ['Dizer sua profissão com "pracuję jako"', 'Dizer onde trabalha', 'Conjugar pracować e outros verbos em -ować'],
  vocab: [
    { g: 'Profissões', w: [
      ['nauczyciel / nauczycielka', 'professor / professora'],
      ['lekarz / lekarka', 'médico / médica'],
      ['pielęgniarz / pielęgniarka', 'enfermeiro / enfermeira'],
      ['programista / programistka', 'programador / programadora'],
      ['analityk danych', 'analista de dados'],
      ['inżynier', 'engenheiro / engenheira'],
      ['kelner / kelnerka', 'garçom / garçonete'],
      ['kucharz / kucharka', 'cozinheiro / cozinheira'],
      ['sprzedawca / sprzedawczyni', 'vendedor / vendedora'],
      ['dziennikarz / dziennikarka', 'jornalista'],
      ['student / studentka', 'estudante universitário/a'],
    ]},
    { g: 'Lugares de trabalho', w: [
      ['w szkole', 'na escola'],
      ['w szpitalu', 'no hospital'],
      ['w biurze', 'no escritório'],
      ['w firmie', 'na empresa'],
      ['w restauracji', 'no restaurante'],
      ['w sklepie', 'na loja'],
      ['w banku', 'no banco'],
      ['na uniwersytecie', 'na universidade'],
      ['w domu', 'em casa'],
      ['zdalnie', 'remotamente'],
    ]},
    { g: 'Verbos e frases', w: [
      ['pracować', 'trabalhar'],
      ['Pracuję jako…', 'Trabalho como…'],
      ['Gdzie pracujesz?', 'Onde você trabalha?'],
      ['Co robisz?', 'O que você faz?'],
      ['studiować', 'estudar (na faculdade)'],
      ['gotować', 'cozinhar'],
      ['kupować', 'comprar'],
      ['praca', 'trabalho, emprego'],
    ]},
  ],
  grammar: [
    { t: 'pracować e os verbos em -ować', h: `
      <p>Verbos terminados em <b>-ować</b> trocam esse final por <b>-uj-</b>:</p>
      <table><tr><th></th><th>pracować</th><th>studiować</th><th>gotować</th></tr>
      <tr><td>ja</td><td>prac<b>uję</b></td><td>studi<b>uję</b></td><td>got<b>uję</b></td></tr>
      <tr><td>ty</td><td>prac<b>ujesz</b></td><td>studi<b>ujesz</b></td><td>got<b>ujesz</b></td></tr>
      <tr><td>on / ona / pan</td><td>prac<b>uje</b></td><td>studi<b>uje</b></td><td>got<b>uje</b></td></tr></table>
      <p class="tip">O plural (pracujemy, pracujecie, pracują) é tema do próximo capítulo.</p>` },
    { t: 'Pracuję jako + profissão', h: `
      <p>Com <b>jako</b> ("como") a profissão fica na forma de dicionário:</p>
      <p><i>Pracuję jako <b>analityk danych</b>. Ona pracuje jako <b>lekarka</b>.</i></p>
      <p class="tip">Existe também "Jestem lekarzem", com a profissão no caso instrumental. Isso vem no capítulo 15.</p>` },
    { t: 'Onde: w + lugar', h: `
      <table><tr><th>Lugar</th><th>No lugar</th></tr>
      <tr><td>szkoła</td><td>w szkole</td></tr><tr><td>szpital</td><td>w szpitalu</td></tr>
      <tr><td>biuro</td><td>w biurze</td></tr><tr><td>firma</td><td>w firmie</td></tr>
      <tr><td>sklep</td><td>w sklepie</td></tr><tr><td>uniwersytet</td><td><b>na</b> uniwersytecie</td></tr></table>` },
  ],
  dialogue: { t: 'Num evento de networking', l: [
    ['Ewa', 'Co robisz, Lucas?', 'O que você faz, Lucas?'],
    ['Lucas', 'Pracuję jako analityk danych.', 'Trabalho como analista de dados.'],
    ['Ewa', 'Gdzie pracujesz? W biurze?', 'Onde você trabalha? Num escritório?'],
    ['Lucas', 'Nie, pracuję zdalnie, w domu. Moja firma jest w USA.', 'Não, trabalho remotamente, em casa. Minha empresa fica nos EUA.'],
    ['Ewa', 'Super! Ja pracuję jako nauczycielka w szkole.', 'Que legal! Eu trabalho como professora numa escola.'],
    ['Lucas', 'A twój brat? Co on robi?', 'E seu irmão? O que ele faz?'],
    ['Ewa', 'On studiuje medycynę na uniwersytecie.', 'Ele estuda medicina na universidade.'],
    ['Lucas', 'A wieczorem pracuje?', 'E à noite ele trabalha?'],
    ['Ewa', 'Tak, pracuje jako kelner w restauracji.', 'Sim, trabalha como garçom num restaurante.'],
  ]},
  fill: [
    ['Ja ___ jako programista. (pracować)', 'pracuję', 'Trabalho como programador.'],
    ['Gdzie ___? (ty, pracować)', 'pracujesz', 'Onde você trabalha?'],
    ['Ona pracuje ___ lekarka.', 'jako', 'Ela trabalha como médica.'],
    ['Pracuję w ___. (szkoła)', 'szkole', 'Trabalho na escola.'],
    ['On studiuje ___ uniwersytecie.', 'na', 'Ele estuda na universidade.'],
    ['Pani Zofia ___ obiad. (gotować)', 'gotuje', 'A dona Zofia cozinha o almoço.'],
    ['Pracuję ___, w domu.', 'zdalnie', 'Trabalho remotamente, em casa.'],
  ],
  order: [
    ['Pracuję jako analityk danych.', 'Trabalho como analista de dados.'],
    ['Ona pracuje w szpitalu.', 'Ela trabalha no hospital.'],
    ['Co robisz? Gdzie pracujesz?', 'O que você faz? Onde trabalha?'],
    ['Mój brat studiuje na uniwersytecie.', 'Meu irmão estuda na universidade.'],
  ],
  write: {
    p: 'Descreva o seu trabalho e o de duas outras pessoas.',
    c: ['Use "Pracuję jako…"', 'Diga onde você trabalha (w… ou zdalnie)', 'Fale de outra pessoa com pracuje e profissão no feminino ou masculino certo', 'Use mais um verbo em -ować (studiować, gotować, kupować)'],
    min: 35,
  },
});

COURSE.add('a1', {
  n: 9, gl: ['Rz', 'krzesło', 'rz soa como "j" de "já"; depois de k, p, t vira "ch": krzesło = "kchesuo"'],
  pl: 'Co to jest?', pt: 'Objetos e gênero dos substantivos',
  busuu: ['Verbs ending in "-ować" (plural)', 'Asking about objects on your desk', 'Masculine nouns', 'Feminine nouns', 'Neuter nouns', 'Work and noun gender'],
  goals: ['Identificar o gênero de um substantivo pela terminação', 'Usar ten / ta / to', 'Nomear objetos da mesa de trabalho', 'Conjugar -ować no plural'],
  vocab: [
    { g: 'Na mesa (masculino)', w: [
      ['komputer', 'computador'],
      ['laptop', 'notebook'],
      ['telefon', 'telefone, celular'],
      ['długopis', 'caneta'],
      ['ołówek', 'lápis'],
      ['zeszyt', 'caderno'],
      ['kubek', 'caneca'],
      ['klucz', 'chave'],
    ]},
    { g: 'Na mesa (feminino)', w: [
      ['książka', 'livro'],
      ['kartka', 'folha de papel'],
      ['lampa', 'luminária'],
      ['myszka', 'mouse'],
      ['ładowarka', 'carregador'],
      ['torba', 'bolsa'],
    ]},
    { g: 'Na sala (neutro)', w: [
      ['biurko', 'escrivaninha, mesa de trabalho'],
      ['krzesło', 'cadeira'],
      ['okno', 'janela'],
      ['zdjęcie', 'foto'],
    ]},
    { g: 'Perguntar', w: [
      ['Co to jest?', 'O que é isto?'],
      ['To jest…', 'Isto é…'],
      ['ten / ta / to', 'este / esta / este (neutro)'],
      ['tutaj / tu', 'aqui'],
      ['tam', 'lá'],
    ]},
  ],
  grammar: [
    { t: 'Os três gêneros', h: `
      <p>Quase sempre a última letra entrega o gênero:</p>
      <table><tr><th>Gênero</th><th>Termina em</th><th>Exemplos</th><th>"este"</th></tr>
      <tr><td>Masculino</td><td>consoante</td><td>komputer, długopis, telefon</td><td><b>ten</b></td></tr>
      <tr><td>Feminino</td><td>-a</td><td>książka, lampa, torba</td><td><b>ta</b></td></tr>
      <tr><td>Neutro</td><td>-o, -e, -ę, -um</td><td>biurko, zdjęcie, imię, muzeum</td><td><b>to</b></td></tr></table>
      <p class="tip">Exceções úteis: <i>mężczyzna</i> (homem) e <i>kolega</i> terminam em -a e são masculinos; <i>noc</i> (noite) termina em consoante e é feminina.</p>` },
    { t: '"To jest" × "ten / ta / to"', h: `
      <p>Em <b>To jest…</b> ("isto é…"), o <i>to</i> nunca muda: <i>To jest długopis. To jest lampa.</i></p>
      <p>Antes do substantivo, o demonstrativo concorda: <b>ten</b> długopis, <b>ta</b> lampa, <b>to</b> krzesło.</p>` },
    { t: '-ować no plural', h: `
      <table><tr><th></th><th>pracować</th><th>studiować</th></tr>
      <tr><td>my</td><td>prac<b>ujemy</b></td><td>studi<b>ujemy</b></td></tr>
      <tr><td>wy</td><td>prac<b>ujecie</b></td><td>studi<b>ujecie</b></td></tr>
      <tr><td>oni / one</td><td>prac<b>ują</b></td><td>studi<b>ują</b></td></tr></table>` },
    { t: 'Profissões: de masculino a feminino', h: `
      <table><tr><th>Masculino</th><th>Feminino</th><th>Como forma</th></tr>
      <tr><td>nauczyciel, aktor</td><td>nauczycielka, aktorka</td><td>+ -ka</td></tr>
      <tr><td>programista</td><td>programistka</td><td>-a → -tka</td></tr>
      <tr><td>lekarz</td><td>lekarka</td><td>-rz → -rka</td></tr>
      <tr><td>student</td><td>studentka</td><td>+ -ka</td></tr></table>` },
  ],
  dialogue: { t: 'Primeiro dia no escritório novo', l: [
    ['Kuba', 'To jest twoje biurko.', 'Esta é a sua mesa.'],
    ['Lucas', 'Dziękuję! A co to jest?', 'Obrigado! E o que é isto?'],
    ['Kuba', 'To jest ładowarka. A tu jest myszka.', 'É um carregador. E aqui está o mouse.'],
    ['Lucas', 'Czy ten długopis jest mój?', 'Esta caneta é minha?'],
    ['Kuba', 'Tak. I ten zeszyt, i ta lampa.', 'Sim. E este caderno, e esta luminária.'],
    ['Lucas', 'A to krzesło?', 'E esta cadeira?'],
    ['Kuba', 'To krzesło też. Tam jest kuchnia, a tam jest okno.', 'Essa cadeira também. Lá é a cozinha, e ali a janela.'],
    ['Lucas', 'Czy wy tu pracujecie codziennie?', 'Vocês trabalham aqui todo dia?'],
    ['Kuba', 'Nie, pracujemy w biurze tylko w poniedziałek.', 'Não, trabalhamos no escritório só na segunda.'],
  ]},
  fill: [
    ['___ długopis', 'ten', 'esta caneta'],
    ['___ lampa', 'ta', 'esta luminária'],
    ['___ krzesło', 'to', 'esta cadeira'],
    ['My ___ w biurze. (pracować)', 'pracujemy', 'Nós trabalhamos no escritório.'],
    ['Oni ___ medycynę. (studiować)', 'studiują', 'Eles estudam medicina.'],
    ['Co to ___?', 'jest', 'O que é isto?'],
    ['Aktor i ___ pracują w teatrze.', 'aktorka', 'O ator e a atriz trabalham no teatro.'],
  ],
  order: [
    ['Co to jest? To jest ładowarka.', 'O que é isto? É um carregador.'],
    ['Ten komputer jest tutaj.', 'Este computador está aqui.'],
    ['Czy ta książka jest twoja?', 'Este livro é seu?'],
    ['Pracujemy w biurze w poniedziałek.', 'Trabalhamos no escritório na segunda.'],
  ],
  write: {
    p: 'Descreva sua mesa de trabalho ou de estudo: o que há nela e onde.',
    c: ['Nomeie pelo menos seis objetos', 'Use ten, ta e to corretamente', 'Use tu / tutaj e tam', 'Termine com uma frase sobre onde vocês trabalham (pracujemy / pracują)'],
    min: 35,
  },
});

COURSE.add('a1', {
  n: 10, gl: ['W', 'w lewo', 'w soa como "v": "v levo"'],
  pl: 'Gdzie jest apteka?', pt: 'Lugares na cidade e direções',
  busuu: ['Discovering places in the city', 'Asking about directions', 'Giving polite explanations', 'Giving directions', 'Developing fluency'],
  goals: ['Nomear lugares da cidade', 'Pedir e dar direções', 'Responder com educação quando você não sabe'],
  vocab: [
    { g: 'Lugares', w: [
      ['dworzec', 'estação (de trem / ônibus)'],
      ['przystanek', 'ponto de ônibus / bonde'],
      ['apteka', 'farmácia'],
      ['bank', 'banco'],
      ['bankomat', 'caixa eletrônico'],
      ['poczta', 'correio'],
      ['sklep', 'loja'],
      ['supermarket', 'supermercado'],
      ['kawiarnia', 'café, cafeteria'],
      ['restauracja', 'restaurante'],
      ['hotel', 'hotel'],
      ['muzeum', 'museu'],
      ['kościół', 'igreja'],
      ['park', 'parque'],
      ['rynek', 'praça central'],
      ['kino', 'cinema'],
      ['toaleta', 'banheiro'],
    ]},
    { g: 'Direções', w: [
      ['prosto', 'em frente, reto'],
      ['w prawo', 'para a direita'],
      ['w lewo', 'para a esquerda'],
      ['po prawej', 'do lado direito'],
      ['po lewej', 'do lado esquerdo'],
      ['obok', 'ao lado'],
      ['za rogiem', 'virando a esquina'],
      ['potem', 'depois'],
      ['Proszę iść prosto.', 'Siga em frente, por favor.'],
      ['Proszę skręcić w prawo.', 'Vire à direita, por favor.'],
    ]},
    { g: 'Perguntar com educação', w: [
      ['Przepraszam, gdzie jest…?', 'Com licença, onde fica…?'],
      ['Czy jest tu gdzieś…?', 'Tem algum/a … por aqui?'],
      ['Niestety nie wiem.', 'Infelizmente não sei.'],
      ['Nie jestem stąd.', 'Não sou daqui.'],
      ['To niedaleko.', 'Não é longe.'],
    ]},
  ],
  grammar: [
    { t: 'Perguntar onde fica algo', h: `
      <p><b>Gdzie jest</b> + lugar (forma de dicionário): <i>Gdzie jest apteka? Gdzie jest dworzec?</i></p>
      <p><b>Czy jest tu gdzieś</b> + lugar quando você não sabe se existe: <i>Czy jest tu gdzieś bankomat?</i></p>` },
    { t: 'w prawo × po prawej', h: `
      <table><tr><th>Movimento (para onde ir)</th><th>Posição (onde está)</th></tr>
      <tr><td>Proszę skręcić <b>w prawo</b>.</td><td>Apteka jest <b>po prawej</b>.</td></tr>
      <tr><td>Proszę skręcić <b>w lewo</b>.</td><td>Bank jest <b>po lewej</b>.</td></tr></table>` },
    { t: 'Proszę + infinitivo = ordem educada', h: `
      <p>Em vez do imperativo, os poloneses usam muito <b>proszę</b> + infinitivo: <i>Proszę iść prosto. Proszę skręcić w lewo. Proszę powtórzyć.</i></p>
      <p class="tip">É educado e você não precisa decorar formas novas de verbo.</p>` },
  ],
  dialogue: { t: 'Perdido em Cracóvia', l: [
    ['Lucas', 'Przepraszam, czy jest tu gdzieś apteka?', 'Com licença, tem alguma farmácia por aqui?'],
    ['Pan', 'Niestety nie wiem. Nie jestem stąd.', 'Infelizmente não sei. Não sou daqui.'],
    ['Lucas', 'Przepraszam pani, gdzie jest apteka?', 'Com licença, senhora, onde fica a farmácia?'],
    ['Pani', 'Apteka? To niedaleko. Proszę iść prosto, potem skręcić w prawo.', 'A farmácia? Não é longe. Siga em frente, depois vire à direita.'],
    ['Lucas', 'W prawo… i potem?', 'À direita… e depois?'],
    ['Pani', 'Apteka jest po lewej, obok banku.', 'A farmácia fica do lado esquerdo, ao lado do banco.'],
    ['Lucas', 'A gdzie jest rynek?', 'E onde fica a praça central?'],
    ['Pani', 'Rynek jest tam, za rogiem.', 'A praça fica ali, virando a esquina.'],
    ['Lucas', 'Dziękuję bardzo!', 'Muito obrigado!'],
    ['Pani', 'Proszę bardzo. Miłego dnia!', 'De nada. Tenha um bom dia!'],
  ]},
  fill: [
    ['Przepraszam, ___ jest dworzec?', 'gdzie', 'Com licença, onde fica a estação?'],
    ['Czy jest tu ___ bankomat?', 'gdzieś', 'Tem algum caixa eletrônico por aqui?'],
    ['Proszę iść ___.', 'prosto', 'Siga em frente.'],
    ['Proszę skręcić w ___.', 'lewo', 'Vire à esquerda.'],
    ['Kawiarnia jest po ___.', 'prawej', 'O café fica do lado direito.'],
    ['Niestety nie jestem ___.', 'stąd', 'Infelizmente não sou daqui.'],
    ['Rynek jest za ___.', 'rogiem', 'A praça fica virando a esquina.'],
  ],
  order: [
    ['Przepraszam, gdzie jest poczta?', 'Com licença, onde fica o correio?'],
    ['Proszę iść prosto, potem w lewo.', 'Siga em frente, depois à esquerda.'],
    ['Apteka jest po prawej.', 'A farmácia fica do lado direito.'],
    ['Niestety nie wiem, nie jestem stąd.', 'Infelizmente não sei, não sou daqui.'],
  ],
  write: {
    p: 'Um turista para você na rua. Escreva o diálogo em que ele pede direções para dois lugares e você explica.',
    c: ['Use Przepraszam e uma pergunta com gdzie ou czy jest tu gdzieś', 'Dê direções com prosto, w prawo / w lewo e potem', 'Diga onde algo está com po prawej / po lewej ou obok', 'Inclua uma resposta educada de quem não sabe'],
    min: 40,
  },
});
