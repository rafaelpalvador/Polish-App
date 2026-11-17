/* Polonês A2 — capítulos 3 e 4 (Busuu A2, cap. 2). */
COURSE.add('a2', {
  n: 3, gl: ['Ę', 'zajęcia', 'ę no meio da palavra soa "en"; no fim, quase um "e" simples'],
  pl: 'Na zajęciach', pt: 'Um dia de aula: escola, matérias e verbos de sala',
  busuu: ['A day of class', 'What do you do in class?'],
  goals: ['Falar da escola, do curso e das aulas', 'Dizer o que se estuda: uczę się polskiego', 'Distinguir chodzić (hábito) de iść (agora)', 'Pedir ajuda em sala: Co znaczy…? Proszę powtórzyć.'],
  vocab: [
    { g: 'Escola e curso', w: [
      ['szkoła', 'escola', '', 'Moja *szkoła* jest blisko domu.', 'Minha escola fica perto de casa.'],
      ['szkoła językowa', 'escola de idiomas', '', 'Chodzę do *szkoły językowej*.', 'Frequento uma escola de idiomas.'],
      ['uniwersytet', 'universidade', 'onde: na uniwersytecie', 'Studiuję na *uniwersytecie*.', 'Estudo na universidade.'],
      ['zajęcia', 'aulas', 'só plural', '*Zajęcia* zaczynają się o ósmej.', 'As aulas começam às oito.'],
      ['lekcja', 'aula, lição', '', 'Dzisiaj mamy *lekcję* polskiego.', 'Hoje temos aula de polonês.'],
      ['przerwa', 'intervalo', '', 'Na *przerwie* pijemy kawę.', 'No intervalo tomamos café.'],
      ['nauczyciel / nauczycielka', 'professor / professora', '', 'Nasza *nauczycielka* jest z Gdańska.', 'Nossa professora é de Gdańsk.'],
      ['uczeń / uczennica', 'aluno / aluna (escola)', 'na faculdade: student', 'Każdy *uczeń* ma podręcznik.', 'Cada aluno tem um livro didático.'],
      ['sala', 'sala de aula', '', 'Jesteśmy w *sali* numer pięć.', 'Estamos na sala número cinco.'],
      ['podręcznik', 'livro didático', '', 'Mam nowy *podręcznik*.', 'Tenho um livro didático novo.'],
      ['zeszyt', 'caderno', '', 'Piszę nowe słowa w *zeszycie*.', 'Escrevo as palavras novas no caderno.'],
      ['tablica', 'quadro, lousa', '', 'Nauczyciel pisze na *tablicy*.', 'O professor escreve no quadro.'],
      ['zadanie domowe', 'lição de casa', '', 'Robię *zadanie domowe* wieczorem.', 'Faço a lição de casa à noite.'],
      ['egzamin', 'prova, exame', '', 'W piątek mam *egzamin*.', 'Na sexta tenho prova.'],
      ['ocena', 'nota', 'na Polônia, de 1 a 6', 'Mam dobrą *ocenę*!', 'Tirei uma nota boa!'],
      ['przedmiot', 'matéria', '', 'Mój ulubiony *przedmiot* to historia.', 'Minha matéria favorita é história.'],
      ['plan zajęć', 'horário de aulas', '', 'Jaki masz *plan zajęć*?', 'Como é o seu horário de aulas?'],
    ]},
    { g: 'Na sala de aula', w: [
      ['uczyć się', 'estudar, aprender', 'uczę się + genitivo', '*Uczę się* polskiego.', 'Estudo polonês.'],
      ['chodzić', 'ir (com frequência)', 'chodzę, chodzisz…', 'Codziennie *chodzę* do szkoły.', 'Todo dia vou à escola.'],
      ['słuchać', 'escutar', '', '*Słuchamy* nagrania.', 'Escutamos a gravação.'],
      ['powtarzać', 'repetir', '', '*Powtarzam* nowe słowa.', 'Repito as palavras novas.'],
      ['odpowiadać', 'responder', 'odpowiadać na pytanie', '*Odpowiadam* na pytanie.', 'Respondo à pergunta.'],
      ['pytać', 'perguntar', '', 'Studenci *pytają* nauczycielkę.', 'Os estudantes perguntam à professora.'],
      ['rozumieć', 'entender', '', 'Nie *rozumiem* tego słowa.', 'Não entendo esta palavra.'],
      ['tłumaczyć', 'explicar; traduzir', '', 'Nauczyciel *tłumaczy* gramatykę.', 'O professor explica a gramática.'],
      ['pracować w parach', 'trabalhar em duplas', '', 'Teraz *pracujemy w parach*.', 'Agora trabalhamos em duplas.'],
      ['Mogę zadać pytanie?', 'Posso fazer uma pergunta?', '', 'Przepraszam, *mogę zadać pytanie?*', 'Com licença, posso fazer uma pergunta?'],
      ['Co znaczy…?', 'O que significa…?', '', '*Co znaczy* słowo „przerwa”?', 'O que significa a palavra "przerwa"?'],
      ['Proszę powtórzyć.', 'Repita, por favor.', '', 'Nie rozumiem. *Proszę powtórzyć.*', 'Não entendi. Repita, por favor.'],
      ['najpierw… potem…', 'primeiro… depois…', '', '*Najpierw* czytamy, *potem* piszemy.', 'Primeiro lemos, depois escrevemos.'],
      ['na końcu', 'no final', '', '*Na końcu* piszemy krótki tekst.', 'No final escrevemos um texto curto.'],
    ]},
  ],
  grammar: [
    { t: 'uczyć się + genitivo', h: `
      <p>O que se estuda vai para o <b>genitivo</b> (o mesmo caso do capítulo 1):</p>
      <table><tr><th>Matéria</th><th>Uczę się…</th></tr>
      <tr><td>polski</td><td><i>uczę się polskiego</i></td></tr>
      <tr><td>angielski</td><td><i>uczę się angielskiego</i></td></tr>
      <tr><td>matematyka</td><td><i>uczę się matematyki</i></td></tr>
      <tr><td>historia</td><td><i>uczę się historii</i></td></tr></table>
      <p class="tip">Idiomas são adjetivos (polski = polonês), por isso a terminação <b>-ego</b>.</p>` },
    { t: 'chodzić × iść', h: `
      <p>O polonês tem dois verbos para "ir a pé":</p>
      <table><tr><th></th><th>chodzić (hábito, ida e volta)</th><th>iść (agora, uma direção)</th></tr>
      <tr><td>ja</td><td>chodzę</td><td>idę</td></tr>
      <tr><td>ty</td><td>chodzisz</td><td>idziesz</td></tr>
      <tr><td>on / ona</td><td>chodzi</td><td>idzie</td></tr>
      <tr><td>my</td><td>chodzimy</td><td>idziemy</td></tr>
      <tr><td>wy</td><td>chodzicie</td><td>idziecie</td></tr>
      <tr><td>oni / one</td><td>chodzą</td><td>idą</td></tr></table>
      <p><i>Codziennie chodzę do szkoły.</i> <em>(Todo dia vou à escola.)</em> · <i>Teraz idę na zajęcia.</i> <em>(Agora estou indo para a aula.)</em></p>` },
    { t: 'Aonde e onde: do / w / na', h: `
      <p><b>Aonde?</b> do + genitivo: <i>do szkoły</i>, <i>do szkoły językowej</i>. Para eventos e atividades: <b>na</b> + acusativo: <i>na zajęcia</i>, <i>na lekcję</i>.</p>
      <p><b>Onde?</b> <i>w szkole</i>, <i>na uniwersytecie</i>, <i>na zajęciach</i>, <i>na lekcji</i>, <i>na przerwie</i>.</p>
      <p class="tip">Universidade, aula e intervalo usam <b>na</b>, não w. Guarde os pares: idę na zajęcia → jestem na zajęciach.</p>` },
    { t: 'Ordem dos acontecimentos', h: `
      <p><i>Najpierw</i> (primeiro) → <i>potem</i> (depois) → <i>później</i> (mais tarde) → <i>na końcu</i> (no final).</p>
      <p><i>Najpierw sprawdzamy zadanie domowe, potem słuchamy nagrania, a na końcu piszemy krótki tekst.</i></p>` },
  ],
  checks: [
    ['Uczę się ___. (polski)', ['polski', 'polskiego', 'polskim'], 1, 'uczyć się pede genitivo: polskiego.'],
    ['Codziennie ___ do szkoły. (ja)', ['chodzę', 'idę', 'chodzi'], 0, 'Hábito → chodzić: chodzę.'],
    ['Teraz ___ na zajęcia. (ja)', ['idę', 'chodzę', 'idzie'], 0, 'Agora, uma direção → iść: idę.'],
    ['Studiuję ___ uniwersytecie.', ['na', 'w', 'do'], 0, 'Universidade usa "na": na uniwersytecie.'],
  ],
  dialogue: { t: 'Aula de segunda-feira', l: [
    ['Nauczycielka', 'Dzień dobry! Najpierw sprawdzamy zadanie domowe. Lucas, masz zadanie?', 'Bom dia! Primeiro vamos corrigir a lição de casa. Lucas, você tem a lição?'],
    ['Lucas', 'Tak, mam. Ale mam pytanie. Co znaczy „przerwa”?', 'Sim, tenho. Mas tenho uma pergunta. O que significa "przerwa"?'],
    ['Nauczycielka', 'Przerwa to czas między lekcjami. Wtedy pijemy kawę.', 'Przerwa é o tempo entre as aulas. É quando tomamos café.'],
    ['Lucas', 'Aha, rozumiem. Dziękuję.', 'Ah, entendi. Obrigado.'],
    ['Nauczycielka', 'Teraz pracujemy w parach. Ola i Lucas czytają dialog i odpowiadają na pytania.', 'Agora vamos trabalhar em duplas. Ola e Lucas leem o diálogo e respondem às perguntas.'],
    ['Ola', 'Przepraszam, proszę powtórzyć. Która strona?', 'Desculpe, repita, por favor. Que página?'],
    ['Nauczycielka', 'Strona dwanaście.', 'Página doze.'],
    ['Ola', 'Lucas, ty czytasz pierwszy?', 'Lucas, você lê primeiro?'],
    ['Lucas', 'Dobrze. A potem ty.', 'Tudo bem. E depois você.'],
    ['Nauczycielka', 'Na końcu piszemy krótki tekst. A w piątek mamy egzamin!', 'No final escrevemos um texto curto. E na sexta temos prova!'],
    ['Lucas', 'Egzamin? Muszę się dużo uczyć…', 'Prova? Tenho que estudar muito…'],
  ]},
  fill: [
    ['Uczę się ___. (polski)', 'polskiego', 'Estudo polonês.'],
    ['Chodzę do ___. (szkoła)', 'szkoły', 'Vou à escola.'],
    ['Studiuję ___ uniwersytecie.', 'na', 'Estudo na universidade.'],
    ['___ czytamy, potem piszemy.', 'Najpierw', 'Primeiro lemos, depois escrevemos.'],
    ['Nie ___ tego słowa. (rozumieć, ja)', 'rozumiem', 'Não entendo esta palavra.'],
    ['Codziennie ___ do pracy. (chodzić, on)', 'chodzi', 'Ele vai ao trabalho todo dia.'],
  ],
  order: [
    ['Uczę się polskiego w szkole językowej.', 'Estudo polonês numa escola de idiomas.'],
    ['Najpierw czytamy, potem piszemy.', 'Primeiro lemos, depois escrevemos.'],
    ['Przepraszam, mogę zadać pytanie?', 'Com licença, posso fazer uma pergunta?'],
    ['Teraz pracujemy w parach.', 'Agora trabalhamos em duplas.'],
    ['Co znaczy to słowo?', 'O que significa esta palavra?'],
  ],
  write: {
    p: 'Descreva um dia típico de aula, real ou imaginado: aonde você vai, o que estuda, o que faz na aula e em que ordem, e do que gosta ou não.',
    c: ['uczyć się + genitivo', 'chodzić do + genitivo', 'Sequência com najpierw / potem / na końcu', 'Três verbos de sala (słuchać, powtarzać, odpowiadać…)'],
    min: 75,
  },
});

COURSE.add('a2', {
  n: 4, gl: ['Ł', 'byłem', 'ł soa como o "u" de "pau": "bi-uem"'],
  pl: 'Kiedyś i teraz', pt: 'O passado: byłem, robiłam… e quem eu quero ser',
  busuu: ['Grammar: Past simple', 'How I want to be', "What I don't want to be like"],
  goals: ['Formar o passado de być, mieć e verbos regulares', 'Contar como você era e o que fazia', 'Descrever personalidade com mais adjetivos', 'Dizer como quer ser e como não quer ser: chcę być bardziej…'],
  vocab: [
    { g: 'Quando?', w: [
      ['wczoraj', 'ontem', '', '*Wczoraj* byłem w kinie.', 'Ontem fui ao cinema.'],
      ['przedwczoraj', 'anteontem', '', '*Przedwczoraj* miałam egzamin.', 'Anteontem tive prova.'],
      ['w zeszłym tygodniu', 'na semana passada', '', '*W zeszłym tygodniu* dużo pracowałem.', 'Na semana passada trabalhei muito.'],
      ['rok temu', 'um ano atrás', 'temu = atrás', '*Rok temu* mieszkałem w Brazylii.', 'Há um ano eu morava no Brasil.'],
      ['kiedyś', 'antigamente; um dia', '', '*Kiedyś* grałem w piłkę.', 'Antigamente eu jogava bola.'],
      ['kiedy byłem / byłam dzieckiem', 'quando eu era criança', '', '*Kiedy byłam dzieckiem*, mieszkałam na wsi.', 'Quando eu era criança, morava no campo.'],
      ['dawniej', 'antes, no passado', '', '*Dawniej* dużo czytałam.', 'Antes eu lia muito.'],
    ]},
    { g: 'Verbos no passado', w: [
      ['byłem / byłam', 'eu fui / estive / era', 'homem / mulher', 'Wczoraj *byłem* w domu.', 'Ontem fiquei em casa.'],
      ['miałem / miałam', 'eu tinha / tive', '', '*Miałam* dużo pracy.', 'Tive muito trabalho.'],
      ['robiłem / robiłam', 'eu fazia / fiz', '', 'Co *robiłeś* wczoraj?', 'O que você fez ontem? (a um homem)'],
      ['mieszkałem / mieszkałam', 'eu morava / morei', '', '*Mieszkałem* w Porto pięć lat.', 'Morei no Porto cinco anos.'],
      ['pracowałem / pracowałam', 'eu trabalhava / trabalhei', '', '*Pracowałam* jako kelnerka.', 'Trabalhei como garçonete.'],
      ['uczyłem się / uczyłam się', 'eu estudava / estudei', '', '*Uczyłem się* angielskiego w szkole.', 'Estudei inglês na escola.'],
      ['grałem / grałam', 'eu jogava / tocava', '', '*Grałam* na pianinie.', 'Eu tocava piano.'],
    ]},
    { g: 'Como eu sou, como quero ser', w: [
      ['cierpliwy', 'paciente', '', 'Chcę być bardziej *cierpliwy*.', 'Quero ser mais paciente.'],
      ['niecierpliwy', 'impaciente', 'nie- = in-', 'Czasem jestem *niecierpliwa*.', 'Às vezes sou impaciente.'],
      ['pewny siebie', 'confiante', '', 'Chcę być *pewna siebie*.', 'Quero ser confiante.'],
      ['nieśmiały', 'tímido', '', 'Kiedyś byłem bardzo *nieśmiały*.', 'Antigamente eu era muito tímido.'],
      ['leniwy', 'preguiçoso', '', 'Nie chcę być *leniwy*.', 'Não quero ser preguiçoso.'],
      ['pracowity', 'trabalhador, esforçado', '', 'Moja babcia była bardzo *pracowita*.', 'Minha avó era muito trabalhadora.'],
      ['zorganizowany', 'organizado', '', 'Chcę być lepiej *zorganizowana*.', 'Quero ser mais organizada.'],
      ['spokojny', 'calmo', '', 'Mój tata jest zawsze *spokojny*.', 'Meu pai está sempre calmo.'],
      ['nerwowy', 'nervoso', '', 'Przed egzaminem jestem *nerwowy*.', 'Antes da prova fico nervoso.'],
      ['zazdrosny', 'ciumento, invejoso', '', 'Nie chcę być *zazdrosna*.', 'Não quero ser ciumenta.'],
      ['samolubny', 'egoísta', '', 'Nie chcę być *samolubny*.', 'Não quero ser egoísta.'],
      ['bardziej', 'mais', 'antes do adjetivo', 'Chcę być *bardziej* otwarty.', 'Quero ser mais aberto.'],
      ['mniej', 'menos', '', 'Chcę być *mniej* nerwowa.', 'Quero ser menos nervosa.'],
      ['zmienić się', 'mudar (a si mesmo)', '', 'Chcę się *zmienić*.', 'Quero mudar.'],
    ]},
  ],
  grammar: [
    { t: 'O passado de być', h: `
      <p>No passado, o verbo muda conforme o <b>gênero</b> de quem fala:</p>
      <table><tr><th></th><th>Homem</th><th>Mulher</th></tr>
      <tr><td>ja</td><td>byłem</td><td>byłam</td></tr>
      <tr><td>ty</td><td>byłeś</td><td>byłaś</td></tr>
      <tr><td>on / ona / ono</td><td>był</td><td>była (ono: było)</td></tr>
      <tr><td>my</td><td>byliśmy</td><td>byłyśmy</td></tr>
      <tr><td>wy</td><td>byliście</td><td>byłyście</td></tr>
      <tr><td>oni / one</td><td>byli</td><td>były</td></tr></table>
      <p class="tip">No plural, se houver <b>pelo menos um homem</b> no grupo, use a forma com <b>-li</b>: <i>Ola i Lucas byli w kinie.</i></p>` },
    { t: 'Passado regular: tire o -ć, ponha -ł', h: `
      <p>A maioria dos verbos segue o mesmo molde: infinitivo sem <b>-ć</b> + <b>ł</b> + terminação.</p>
      <table><tr><th></th><th>czytać</th><th>robić</th></tr>
      <tr><td>ja (h / m)</td><td>czytałem / czytałam</td><td>robiłem / robiłam</td></tr>
      <tr><td>ty (h / m)</td><td>czytałeś / czytałaś</td><td>robiłeś / robiłaś</td></tr>
      <tr><td>on / ona</td><td>czytał / czytała</td><td>robił / robiła</td></tr>
      <tr><td>my</td><td>czytaliśmy / czytałyśmy</td><td>robiliśmy / robiłyśmy</td></tr>
      <tr><td>oni / one</td><td>czytali / czytały</td><td>robili / robiły</td></tr></table>
      <p><b>mieć</b> troca o "e" por "a": <i>miałem, miałaś, miał, mieli</i>. Verbos com "się" levam o się junto: <i>uczyłam się</i>.</p>` },
    { t: 'Ser no passado e no futuro desejado', h: `
      <p>Depois de <b>być</b>, o adjetivo fica no <b>nominativo</b> e concorda com a pessoa: <i>Kiedyś byłem nieśmiały. Teraz chcę być pewny siebie.</i></p>
      <p>Com substantivo, é instrumental (capítulo 15 do A1): <i>Chcę być dobrym przyjacielem.</i></p>
      <p>Para comparar, use <b>bardziej</b> / <b>mniej</b>: <i>Chcę być bardziej cierpliwa i mniej nerwowa.</i></p>` },
  ],
  checks: [
    ['Wczoraj ___ w domu. (być, ja — mulher)', ['byłam', 'byłem', 'była'], 0, 'Mulher falando de si: byłam.'],
    ['Co ___ wczoraj? (robić, ty — homem)', ['robiłeś', 'robiłem', 'robił'], 0, 'ty, homem: robiłeś.'],
    ['Ola i Lucas ___ w Krakowie. (mieszkać)', ['mieszkali', 'mieszkały', 'mieszkał'], 0, 'Grupo com um homem → -li.'],
    ['Chcę być bardziej ___.', ['cierpliwy', 'cierpliwym', 'cierpliwego'], 0, 'Adjetivo depois de być fica no nominativo.'],
  ],
  dialogue: { t: 'Fotos de infância', l: [
    ['Ola', 'Lucas, to ty na zdjęciu? Ile miałeś lat?', 'Lucas, é você na foto? Quantos anos você tinha?'],
    ['Lucas', 'Dziesięć. Kiedy byłem dzieckiem, mieszkałem w Belo Horizonte.', 'Dez. Quando eu era criança, morava em Belo Horizonte.'],
    ['Ola', 'Byłeś słodki! Jaki byłeś jako dziecko?', 'Você era fofo! Como você era quando criança?'],
    ['Lucas', 'Bardzo nieśmiały. W szkole prawie nic nie mówiłem.', 'Muito tímido. Na escola quase não falava nada.'],
    ['Ola', 'Naprawdę? Teraz jesteś bardzo otwarty.', 'Sério? Hoje você é muito aberto.'],
    ['Lucas', 'Tak, bo dużo pracowałem nad tym. A ty?', 'Sim, porque trabalhei muito nisso. E você?'],
    ['Ola', 'Ja byłam bardzo niecierpliwa. I trochę leniwa: nie lubiłam zadań domowych!', 'Eu era muito impaciente. E um pouco preguiçosa: não gostava de lição de casa!'],
    ['Lucas', 'A teraz? Jaka chcesz być?', 'E agora? Como você quer ser?'],
    ['Ola', 'Chcę być bardziej zorganizowana. I mniej nerwowa przed egzaminami.', 'Quero ser mais organizada. E menos nervosa antes das provas.'],
    ['Lucas', 'Ja nie chcę być zazdrosny ani samolubny. Chcę być dobrym przyjacielem.', 'Eu não quero ser ciumento nem egoísta. Quero ser um bom amigo.'],
    ['Ola', 'Już jesteś!', 'Você já é!'],
  ]},
  fill: [
    ['Wczoraj ___ w kinie. (być, ja — homem)', 'byłem', 'Ontem fui ao cinema.'],
    ['Kiedyś ___ w Lizbonie. (mieszkać, ona)', 'mieszkała', 'Antigamente ela morava em Lisboa.'],
    ['Co ___ w weekend? (robić, wy — grupo misto)', 'robiliście', 'O que vocês fizeram no fim de semana?'],
    ['Rok temu ___ psa. (mieć, my — só mulheres)', 'miałyśmy', 'Há um ano tínhamos um cachorro.'],
    ['Chcę być ___ cierpliwa. (mais)', 'bardziej', 'Quero ser mais paciente.'],
    ['Nie chcę być ___. (preguiçoso)', 'leniwy', 'Não quero ser preguiçoso.'],
  ],
  order: [
    ['Kiedy byłem dzieckiem, mieszkałem na wsi.', 'Quando eu era criança, morava no campo.'],
    ['Wczoraj miałam dużo pracy.', 'Ontem tive muito trabalho.'],
    ['Chcę być bardziej cierpliwy.', 'Quero ser mais paciente.'],
    ['Nie chcę być zazdrosna.', 'Não quero ser ciumenta.'],
    ['Co robiłeś w weekend?', 'O que você fez no fim de semana?'],
  ],
  write: {
    p: 'Compare você no passado e hoje: como você era quando criança ou alguns anos atrás (onde morava, o que fazia, como era) e como quer ser daqui para a frente. Diga também como não quer ser.',
    c: ['Pelo menos 4 verbos no passado (byłem, mieszkałam…)', 'Uma marca de tempo (kiedyś, rok temu…)', 'chcę być + adjetivo com bardziej / mniej', 'nie chcę być + adjetivo'],
    min: 80,
  },
});
