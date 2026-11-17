/* Polonês B1 — capítulos 1 e 2 (Busuu B1, cap. 1). */
COURSE.add('b1', {
  n: 1, gl: ['Rz', 'rzeźba', 'rz soa como o "j" de "já"; ź é um "j" mais macio'],
  pl: 'Sztuka i wiadomości', pt: 'Arte, notícias e o genitivo plural',
  busuu: ['A little bit about art', 'Have you seen the news?'],
  goals: ['Falar de arte, museus e exposições', 'Comentar notícias: słyszałeś, że…? podobno…', 'Usar o genitivo plural: dużo obrazów, pięć książek', 'Contar o que alguém disse: powiedział, że…'],
  vocab: [
    { g: 'Arte', w: [
      ['sztuka', 'arte', '', 'Interesuję się *sztuką* współczesną.', 'Eu me interesso por arte contemporânea.'],
      ['obraz', 'quadro, pintura', 'gen. pl.: obrazów', 'W tej sali wisi słynny *obraz*.', 'Nesta sala está pendurado um quadro famoso.'],
      ['malarz / malarka', 'pintor / pintora', '', 'Mój ulubiony *malarz* to Jacek Malczewski.', 'Meu pintor favorito é Jacek Malczewski.'],
      ['rzeźba', 'escultura', '', 'Ta *rzeźba* jest z marmuru.', 'Esta escultura é de mármore.'],
      ['dzieło', 'obra', 'gen. pl.: dzieł', 'To najważniejsze *dzieło* tego artysty.', 'É a obra mais importante desse artista.'],
      ['artysta / artystka', 'artista', 'gen. pl.: artystów', 'Na wystawie są prace młodych *artystów*.', 'Na exposição há trabalhos de jovens artistas.'],
      ['wystawa', 'exposição', '', 'W sobotę idziemy na *wystawę* do muzeum.', 'No sábado vamos a uma exposição no museu.'],
      ['muzeum', 'museu', 'não declina no singular; pl.: muzea', 'Kraków ma dużo *muzeów*.', 'Cracóvia tem muitos museus.'],
      ['galeria', 'galeria', '', 'W tej *galerii* są obrazy z XIX wieku.', 'Nesta galeria há quadros do século XIX.'],
      ['portret', 'retrato', '', 'To jest *portret* młodej kobiety.', 'É o retrato de uma jovem.'],
      ['krajobraz', 'paisagem', '', 'Lubię obrazy z polskim *krajobrazem*.', 'Gosto de quadros com paisagem polonesa.'],
      ['podziwiać', 'admirar', '', 'Turyści *podziwiają* ołtarz Wita Stwosza.', 'Os turistas admiram o altar de Veit Stoss.'],
      ['zrobić na kimś wrażenie', 'impressionar alguém', '', 'Ten obraz *zrobił na mnie wrażenie*.', 'Este quadro me impressionou.'],
    ]},
    { g: 'Notícias', w: [
      ['wiadomości', 'notícias; o jornal da TV', 'plural', 'Oglądasz *wiadomości* wieczorem?', 'Você assiste ao jornal à noite?'],
      ['gazeta', 'jornal (impresso)', 'gen. pl.: gazet', 'Rano czytam *gazetę* w internecie.', 'De manhã leio o jornal na internet.'],
      ['artykuł', 'artigo, reportagem', '', 'Czytałeś ten *artykuł* o Krakowie?', 'Você leu aquele artigo sobre Cracóvia?'],
      ['dziennikarz / dziennikarka', 'jornalista', '', 'Moja kuzynka jest *dziennikarką*.', 'Minha prima é jornalista.'],
      ['wydarzenie', 'acontecimento', '', 'To było najważniejsze *wydarzenie* roku.', 'Foi o acontecimento mais importante do ano.'],
      ['polityka', 'política', '', 'Nie lubię rozmawiać o *polityce*.', 'Não gosto de falar de política.'],
      ['gospodarka', 'economia', '', '*Gospodarka* rośnie szybciej niż w zeszłym roku.', 'A economia cresce mais rápido que no ano passado.'],
      ['Słyszałeś, że…?', 'Você ouviu que…?', 'a uma mulher: Słyszałaś', '*Słyszałeś, że* otwierają nowe muzeum?', 'Você ouviu que vão abrir um museu novo?'],
      ['podobno', 'dizem que, parece que', 'para boatos', '*Podobno* bilety są za darmo w niedzielę.', 'Dizem que os ingressos são de graça no domingo.'],
      ['okazuje się, że…', 'acontece que…, descobriu-se que…', '', '*Okazuje się, że* obraz jest kopią.', 'Descobriu-se que o quadro é uma cópia.'],
      ['Nie do wiary!', 'Inacreditável!', '', 'Ukradli obraz z muzeum? *Nie do wiary!*', 'Roubaram um quadro do museu? Inacreditável!'],
      ['powiedzieć, że…', 'dizer que…', 'perf.; imperf.: mówić', 'Minister *powiedział, że* muzeum będzie otwarte.', 'O ministro disse que o museu vai estar aberto.'],
    ]},
  ],
  grammar: [
    { t: 'Genitivo plural: quando aparece', h: `
      <p>O genitivo plural aparece muito: depois de <b>dużo, mało, ile, kilka</b>, de números a partir de <b>5</b>, de <b>nie ma</b> e para dizer "de" no plural.</p>
      <p><i>dużo obrazów</i> · <i>pięć książek</i> · <i>Nie ma biletów.</i> · <i>historia artystów</i></p>` },
    { t: 'Genitivo plural: as terminações', h: `
      <table><tr><th>Tipo</th><th>Nominativo pl.</th><th>Genitivo pl.</th></tr>
      <tr><td>masculino duro</td><td>obrazy, artyści</td><td>obraz<b>ów</b>, artyst<b>ów</b></td></tr>
      <tr><td>masculino mole (-l, -j, -ć…)</td><td>nauczyciele, goście</td><td>nauczyciel<b>i</b>, gośc<b>i</b></td></tr>
      <tr><td>feminino em -a / neutro em -o</td><td>gazety, książki, dzieła</td><td>gazet, książ<b>e</b>k, dzieł <em>(sem terminação)</em></td></tr>
      <tr><td>feminino mole</td><td>wiadomości, galerie</td><td>wiadomośc<b>i</b>, galeri<b>i</b></td></tr>
      <tr><td>neutro em -um</td><td>muzea</td><td>muze<b>ów</b></td></tr></table>
      <p class="tip">Na forma "sem terminação", às vezes entra um <b>e</b> para ajudar a pronúncia: książka → książ<b>e</b>k, okno → ok<b>ie</b>n.</p>` },
    { t: 'Contar o que foi dito: że', h: `
      <p>Para repetir o que alguém disse, use <b>że</b> (que). Diferente do português, o tempo verbal <b>não muda</b>:</p>
      <p><i>„Muzeum jest zamknięte.”</i> → <i>Powiedział, że muzeum jest zamknięte.</i> <em>(Ele disse que o museu estava fechado.)</em></p>
      <p>Perguntas sim/não usam <b>czy</b>: <i>Zapytała, czy mam bilet.</i> <em>(Ela perguntou se eu tinha ingresso.)</em></p>
      <p class="tip">Antes de <b>że</b> e <b>czy</b> sempre vai vírgula.</p>` },
  ],
  checks: [
    ['W muzeum jest dużo ___. (obraz)', ['obrazy', 'obrazów', 'obrazami'], 1, 'Depois de dużo: genitivo plural, masc. → -ów.'],
    ['Kupiłem pięć ___. (książka)', ['książki', 'książek', 'książków'], 1, 'Feminino em -a: sem terminação, com "e" de apoio.'],
    ['Powiedział, ___ wystawa jest świetna.', ['że', 'czy', 'co'], 0, 'Afirmação relatada: że.'],
    ['Zapytała, ___ idę na wystawę.', ['czy', 'że', 'bo'], 0, 'Pergunta sim/não relatada: czy.'],
  ],
  dialogue: { t: 'Você viu as notícias?', l: [
    ['Ola', 'Lucas, słyszałeś, że w Muzeum Narodowym jest nowa wystawa?', 'Lucas, você ouviu que tem uma exposição nova no Museu Nacional?'],
    ['Lucas', 'Nie, nie słyszałem. Jaka?', 'Não, não ouvi. Qual?'],
    ['Ola', 'Obrazy polskich malarzy z XIX wieku. Podobno jest tam ponad sto dzieł.', 'Quadros de pintores poloneses do século XIX. Dizem que tem mais de cem obras.'],
    ['Lucas', 'Super! Lubię portrety i krajobrazy. A ile kosztują bilety?', 'Ótimo! Gosto de retratos e paisagens. E quanto custam os ingressos?'],
    ['Ola', 'We wtorek wstęp jest darmowy. Tak napisali w gazecie.', 'Na terça a entrada é gratuita. Foi o que escreveram no jornal.'],
    ['Lucas', 'A widziałaś dzisiejsze wiadomości? Okazuje się, że ktoś ukradł rzeźbę z galerii w Gdańsku!', 'E você viu o jornal de hoje? Parece que alguém roubou uma escultura de uma galeria em Gdańsk!'],
    ['Ola', 'Nie do wiary! Co jeszcze mówili?', 'Inacreditável! O que mais disseram?'],
    ['Lucas', 'Dziennikarz powiedział, że policja już szuka złodziei.', 'O jornalista disse que a polícia já está procurando os ladrões.'],
    ['Ola', 'Mam nadzieję, że ją znajdą. To ważne dzieło.', 'Espero que a encontrem. É uma obra importante.'],
    ['Lucas', 'Ja też. To co, wtorek w muzeum?', 'Eu também. Então, terça no museu?'],
    ['Ola', 'Jasne! Ten obraz Matejki na pewno zrobi na tobie wrażenie.', 'Claro! Aquele quadro do Matejko com certeza vai te impressionar.'],
  ]},
  fill: [
    ['Na wystawie jest dużo ___. (artysta)', 'artystów', 'Na exposição há muitos artistas.'],
    ['Nie ma już ___. (bilet)', 'biletów', 'Não há mais ingressos.'],
    ['Czytam pięć ___ dziennie. (gazeta)', 'gazet', 'Leio cinco jornais por dia.'],
    ['Powiedziała, ___ nie lubi rzeźby.', 'że', 'Ela disse que não gosta de escultura.'],
    ['Zapytał, ___ znam tego malarza.', 'czy', 'Ele perguntou se eu conheço esse pintor.'],
    ['___ muzeum jest zamknięte w poniedziałki. (dizem que)', 'Podobno', 'Dizem que o museu fecha às segundas.'],
  ],
  order: [
    ['Słyszałeś, że jest nowa wystawa?', 'Você ouviu que tem uma exposição nova?'],
    ['W muzeum jest dużo obrazów.', 'No museu há muitos quadros.'],
    ['Ten obraz zrobił na mnie wrażenie.', 'Este quadro me impressionou.'],
    ['Dziennikarz powiedział, że policja szuka złodziei.', 'O jornalista disse que a polícia procura os ladrões.'],
    ['Podobno bilety są za darmo.', 'Dizem que os ingressos são de graça.'],
  ],
  write: {
    p: 'Escreva sobre uma obra de arte ou uma exposição que marcou você (onde viu, o que mostra, por que impressionou). Depois, conte uma notícia que você leu ou ouviu esta semana, dizendo o que foi dito.',
    c: ['Cinco palavras de arte', 'Três formas no genitivo plural (dużo…, pięć…)', 'Duas frases relatadas com że / czy', 'Uma expressão de notícia (podobno, okazuje się, że…)'],
    min: 110,
  },
});

COURSE.add('b1', {
  n: 2, gl: ['Dz', 'zgadzać się', 'dz é um som só, "dz" juntos, como em "adze"'],
  pl: 'Zgadzam się!', pt: 'Dar opinião, concordar, discordar e conferir',
  busuu: ['Yes, I agree!', 'Is that correct?'],
  goals: ['Dar e justificar opiniões', 'Concordar e discordar com educação', 'Usar pronomes nos casos: z tobą, z nim, mu, jej', 'Ligar ideias: bo, dlatego, chociaż, jednak'],
  vocab: [
    { g: 'Opinião', w: [
      ['uważać, że…', 'achar, considerar que…', '', '*Uważam, że* to dobry pomysł.', 'Acho que é uma boa ideia.'],
      ['wydaje mi się, że…', 'me parece que…', '', '*Wydaje mi się, że* masz rację.', 'Me parece que você tem razão.'],
      ['moim zdaniem', 'na minha opinião', '', '*Moim zdaniem* ten film jest za długi.', 'Na minha opinião esse filme é longo demais.'],
      ['według mnie', 'para mim, segundo eu', 'według + genitivo', '*Według mnie* to nie jest prawda.', 'Para mim isso não é verdade.'],
      ['zdanie', 'opinião; frase', '', 'Jakie jest twoje *zdanie*?', 'Qual é a sua opinião?'],
      ['argument', 'argumento', '', 'To mocny *argument*.', 'É um argumento forte.'],
      ['przekonać', 'convencer', 'perf.', 'Nie *przekonałeś* mnie.', 'Você não me convenceu.'],
      ['dyskusja', 'discussão (debate)', '', 'To była ciekawa *dyskusja*.', 'Foi uma discussão interessante.'],
    ]},
    { g: 'Concordar e discordar', w: [
      ['zgadzać się z…', 'concordar com…', '+ instrumental', 'Całkowicie się z tobą *zgadzam*.', 'Concordo totalmente com você.'],
      ['Nie zgadzam się.', 'Não concordo.', '', '*Nie zgadzam się*, to za drogie.', 'Não concordo, é caro demais.'],
      ['Masz rację.', 'Você tem razão.', '', '*Masz rację*, jest późno.', 'Você tem razão, está tarde.'],
      ['Racja!', 'É verdade! / Certo!', '', 'Musimy się pospieszyć. — *Racja!*', 'Temos que nos apressar. — Verdade!'],
      ['Właśnie!', 'Exatamente!', '', 'Ceny są za wysokie. — *Właśnie!*', 'Os preços estão altos demais. — Exatamente!'],
      ['To zależy.', 'Depende.', 'zależy od + genitivo', 'Pojedziesz? — *To zależy* od pogody.', 'Você vai? — Depende do tempo.'],
      ['wątpię', 'duvido', '', '*Wątpię*, żeby to było możliwe.', 'Duvido que isso seja possível.'],
      ['z jednej strony… z drugiej strony…', 'por um lado… por outro…', '', '*Z jednej strony* jest drogo, *z drugiej strony* wygodnie.', 'Por um lado é caro, por outro é confortável.'],
    ]},
    { g: 'Conferir', w: [
      ['Czy to prawda?', 'Isso é verdade?', '', 'Ola jedzie do Brazylii? *Czy to prawda?*', 'A Ola vai para o Brasil? É verdade?'],
      ['poprawny / niepoprawny', 'correto / incorreto', '', 'Czy to zdanie jest *poprawne*?', 'Esta frase está correta?'],
      ['błąd', 'erro', '', 'Zrobiłem *błąd* w tym słowie.', 'Errei nesta palavra.'],
      ['sprawdzić', 'conferir, verificar', 'perf.', 'Muszę to *sprawdzić* w słowniku.', 'Preciso conferir isso no dicionário.'],
      ['na pewno', 'com certeza', '', 'Przyjdziesz jutro? — Tak, *na pewno*.', 'Você vem amanhã? — Sim, com certeza.'],
      ['chyba', 'acho que, talvez', '', 'To *chyba* nie jest dobry pomysł.', 'Acho que não é uma boa ideia.'],
      ['rzeczywiście', 'de fato, realmente', '', '*Rzeczywiście*, pomyliłem się.', 'De fato, me enganei.'],
      ['pomylić się', 'enganar-se', 'perf.', 'Przepraszam, *pomyliłam się*.', 'Desculpe, me enganei.'],
    ]},
  ],
  grammar: [
    { t: 'Pronomes nos casos', h: `
      <p>Os pronomes mudam conforme o caso. As formas curtas (mi, ci, mu) são as mais usadas; as longas servem para dar ênfase ou depois de preposição.</p>
      <table><tr><th></th><th>Acusativo</th><th>Dativo</th><th>Instrumental (z…)</th></tr>
      <tr><td>ja</td><td>mnie</td><td>mi / mnie</td><td>ze mną</td></tr>
      <tr><td>ty</td><td>cię / ciebie</td><td>ci / tobie</td><td>z tobą</td></tr>
      <tr><td>on</td><td>go / jego</td><td>mu / jemu</td><td>z nim</td></tr>
      <tr><td>ona</td><td>ją</td><td>jej</td><td>z nią</td></tr>
      <tr><td>my</td><td>nas</td><td>nam</td><td>z nami</td></tr>
      <tr><td>wy</td><td>was</td><td>wam</td><td>z wami</td></tr>
      <tr><td>oni / one</td><td>ich / je</td><td>im</td><td>z nimi</td></tr></table>
      <p><i>Zgadzam się z tobą.</i> · <i>Nie zgadzam się z nim.</i> · <i>Wydaje mi się…</i></p>` },
    { t: 'Ligando ideias', h: `
      <table><tr><th>Conectivo</th><th>Sentido</th><th>Exemplo</th></tr>
      <tr><td>bo / ponieważ</td><td>porque</td><td><i>Nie idę, bo jestem zmęczony.</i></td></tr>
      <tr><td>dlatego</td><td>por isso</td><td><i>Pada deszcz, dlatego zostajemy w domu.</i></td></tr>
      <tr><td>chociaż</td><td>embora</td><td><i>Chociaż jest drogo, warto.</i></td></tr>
      <tr><td>jednak / ale</td><td>porém / mas</td><td><i>To ciekawe, jednak za długie.</i></td></tr></table>
      <p class="tip"><b>bo</b> é coloquial e não abre frase; <b>ponieważ</b> é mais formal e pode abrir: <i>Ponieważ pada, zostajemy.</i></p>` },
    { t: 'Perguntas indiretas: czy', h: `
      <p>Para dizer que não sabe se algo é verdade: <i>Nie wiem, czy to prawda.</i> · <i>Sprawdzę, czy to zdanie jest poprawne.</i></p>
      <p>Com palavra interrogativa, ela mesma liga a frase: <i>Nie wiem, gdzie on mieszka.</i> · <i>Powiedz mi, co myślisz.</i></p>` },
  ],
  checks: [
    ['Zgadzam się z ___. (ty)', ['ty', 'tobą', 'ciebie'], 1, 'z + instrumental: z tobą.'],
    ['Nie zgadzam się z ___. (on)', ['nim', 'go', 'mu'], 0, 'z + instrumental: z nim.'],
    ['Pada deszcz, ___ zostajemy w domu.', ['dlatego', 'bo', 'chociaż'], 0, 'Consequência → dlatego.'],
    ['Nie wiem, ___ to prawda.', ['czy', 'że', 'co'], 0, 'Pergunta sim/não indireta → czy.'],
  ],
  dialogue: { t: 'Um debate no café', l: [
    ['Ola', 'Lucas, uważam, że w centrum miasta nie powinno być samochodów.', 'Lucas, acho que não deveria ter carros no centro da cidade.'],
    ['Lucas', 'Hmm, z jednej strony masz rację: jest głośno i brudno.', 'Hmm, por um lado você tem razão: é barulhento e sujo.'],
    ['Ola', 'Właśnie! I ludzie chodziliby więcej pieszo.', 'Exatamente! E as pessoas andariam mais a pé.'],
    ['Lucas', 'Z drugiej strony, co ze starszymi ludźmi? Wydaje mi się, że to trudne dla nich.', 'Por outro lado, e as pessoas mais velhas? Me parece que é difícil para elas.'],
    ['Ola', 'To mocny argument. Ale są autobusy i tramwaje.', 'É um argumento forte. Mas tem ônibus e bonde.'],
    ['Lucas', 'Racja. Słyszałem, że w Krakowie już tak jest. Czy to prawda?', 'É verdade. Ouvi dizer que em Cracóvia já é assim. É verdade?'],
    ['Ola', 'Chyba tak, ale nie jestem pewna. Muszę to sprawdzić.', 'Acho que sim, mas não tenho certeza. Preciso conferir.'],
    ['Lucas', 'Sprawdziłem w telefonie. Rzeczywiście, w ścisłym centrum jest strefa bez samochodów.', 'Conferi no celular. De fato, no centro histórico há uma zona sem carros.'],
    ['Ola', 'No widzisz! To co, zgadzasz się ze mną?', 'Está vendo? E aí, concorda comigo?'],
    ['Lucas', 'Częściowo. To zależy od miasta. Ale przekonałaś mnie w połowie!', 'Em parte. Depende da cidade. Mas você me convenceu pela metade!'],
  ]},
  fill: [
    ['Całkowicie się z ___ zgadzam. (ty)', 'tobą', 'Concordo totalmente com você.'],
    ['Idziesz z ___? (my)', 'nami', 'Você vem com a gente?'],
    ['___ mi się, że to błąd.', 'Wydaje', 'Me parece que é um erro.'],
    ['Nie idę, ___ jestem chory.', 'bo', 'Não vou porque estou doente.'],
    ['___ jest zimno, idziemy na spacer. (embora)', 'Chociaż', 'Embora esteja frio, vamos passear.'],
    ['Sprawdzę, ___ to zdanie jest poprawne.', 'czy', 'Vou conferir se esta frase está correta.'],
  ],
  order: [
    ['Całkowicie się z tobą zgadzam.', 'Concordo totalmente com você.'],
    ['Wydaje mi się, że masz rację.', 'Me parece que você tem razão.'],
    ['Nie wiem, czy to prawda.', 'Não sei se é verdade.'],
    ['To zależy od pogody.', 'Depende do tempo.'],
    ['Chociaż jest drogo, warto.', 'Embora seja caro, vale a pena.'],
  ],
  write: {
    p: 'Escolha um tema (por exemplo: trabalhar remoto, carros no centro, redes sociais) e escreva sua opinião. Apresente um argumento a favor e um contra, diga com quem concorda e termine com uma conclusão.',
    c: ['Três expressões de opinião (uważam, że…; moim zdaniem…)', 'z jednej strony… z drugiej strony…', 'Dois conectivos (bo, dlatego, chociaż, jednak)', 'Um pronome com preposição (z tobą, z nim…)'],
    min: 120,
  },
});
