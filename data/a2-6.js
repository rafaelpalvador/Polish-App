/* Polonês A2 — capítulos 11 e 12 (Busuu A2, cap. 6). */
COURSE.add('a2', {
  n: 11, gl: ['Ó', 'łóżko', 'ó soa exatamente como "u": "uush-ko"'],
  pl: 'Gdzie stoi kanapa?', pt: 'Sala, quarto, banheiro, posições e sugestões',
  busuu: ['The living room and bedroom', 'In the bathroom', 'How about…?'],
  goals: ['Nomear móveis e objetos da casa', 'Dizer onde as coisas estão: na stole, pod łóżkiem, obok kanapy', 'Usar stoi, leży e wisi', 'Sugerir e opinar: A może…? Co powiesz na…? Moim zdaniem…'],
  vocab: [
    { g: 'Sala e quarto', w: [
      ['salon', 'sala de estar', 'também: pokój dzienny', 'W *salonie* oglądamy telewizję.', 'Na sala vemos televisão.'],
      ['sypialnia', 'quarto (de dormir)', '', '*Sypialnia* jest mała, ale jasna.', 'O quarto é pequeno, mas claro.'],
      ['kanapa', 'sofá', '', 'Kot śpi na *kanapie*.', 'O gato dorme no sofá.'],
      ['fotel', 'poltrona', '', 'Dziadek siedzi w *fotelu*.', 'O avô está sentado na poltrona.'],
      ['dywan', 'tapete', '', 'Na podłodze leży *dywan*.', 'No chão há um tapete.'],
      ['regał', 'estante', '', 'Na *regale* są książki.', 'Na estante há livros.'],
      ['lampa', 'luminária', '', '*Lampa* stoi obok kanapy.', 'A luminária fica ao lado do sofá.'],
      ['obraz', 'quadro', '', 'Nad kanapą wisi *obraz*.', 'Em cima do sofá há um quadro pendurado.'],
      ['łóżko', 'cama', '', 'Moje *łóżko* jest bardzo wygodne.', 'Minha cama é muito confortável.'],
      ['szafa', 'guarda-roupa', '', 'Ubrania są w *szafie*.', 'As roupas estão no guarda-roupa.'],
      ['poduszka', 'travesseiro, almofada', '', 'Lubię dużą *poduszkę*.', 'Gosto de travesseiro grande.'],
      ['zasłony', 'cortinas', 'plural', 'Zamknij *zasłony*, proszę.', 'Feche as cortinas, por favor.'],
    ]},
    { g: 'Banheiro', w: [
      ['łazienka', 'banheiro', '', '*Łazienka* jest na końcu korytarza.', 'O banheiro fica no fim do corredor.'],
      ['prysznic', 'chuveiro', 'brać prysznic = tomar banho', 'Rano biorę *prysznic*.', 'De manhã tomo banho.'],
      ['wanna', 'banheira', '', 'W łazience nie ma *wanny*.', 'No banheiro não tem banheira.'],
      ['umywalka', 'pia (do banheiro)', '', 'Mydło jest na *umywalce*.', 'O sabonete está na pia.'],
      ['toaleta', 'banheiro, vaso sanitário', 'em lugares públicos: WC', 'Przepraszam, gdzie jest *toaleta*?', 'Com licença, onde fica o banheiro?'],
      ['lustro', 'espelho', '', '*Lustro* wisi nad umywalką.', 'O espelho fica pendurado em cima da pia.'],
      ['mydło', 'sabonete', '', 'Nie ma *mydła*!', 'Acabou o sabonete!'],
      ['szczoteczka do zębów', 'escova de dentes', '', 'Gdzie jest moja *szczoteczka do zębów*?', 'Onde está minha escova de dentes?'],
      ['pasta do zębów', 'pasta de dentes', '', 'Muszę kupić *pastę do zębów*.', 'Preciso comprar pasta de dentes.'],
      ['myć się', 'lavar-se', 'myję się, myjesz się…', '*Myję się* rano i wieczorem.', 'Eu me lavo de manhã e à noite.'],
    ]},
    { g: 'Posições', w: [
      ['stać', 'estar de pé (objeto em pé)', 'stoi', 'Lampa *stoi* w rogu.', 'A luminária fica no canto.'],
      ['leżeć', 'estar deitado (objeto deitado)', 'leży', 'Telefon *leży* na stole.', 'O celular está em cima da mesa.'],
      ['wisieć', 'estar pendurado', 'wisi', 'Lustro *wisi* nad umywalką.', 'O espelho está pendurado sobre a pia.'],
      ['pod', 'debaixo de', '+ instrumental', 'Kot jest *pod* łóżkiem.', 'O gato está debaixo da cama.'],
      ['nad', 'em cima de, acima de', '+ instrumental', '*Nad* kanapą wisi obraz.', 'Em cima do sofá há um quadro.'],
      ['obok', 'ao lado de', '+ genitivo', 'Lampa stoi *obok* kanapy.', 'A luminária fica ao lado do sofá.'],
      ['między', 'entre', '+ instrumental', 'Stolik stoi *między* fotelem a kanapą.', 'A mesinha fica entre a poltrona e o sofá.'],
      ['przed / za', 'na frente de / atrás de', '+ instrumental', 'Samochód stoi *przed* domem.', 'O carro está na frente da casa.'],
    ]},
    { g: 'Sugerindo', w: [
      ['A może…?', 'E se…? / Que tal…?', '', '*A może* kanapa pod oknem?', 'Que tal o sofá embaixo da janela?'],
      ['Co powiesz na…?', 'O que acha de…?', '+ acusativo', '*Co powiesz na* zielone zasłony?', 'O que você acha de cortinas verdes?'],
      ['Jak myślisz?', 'O que você acha?', '', '*Jak myślisz*, gdzie postawić lampę?', 'O que você acha, onde pôr a luminária?'],
      ['Moim zdaniem…', 'Na minha opinião…', '', '*Moim zdaniem* dywan jest za duży.', 'Na minha opinião o tapete é grande demais.'],
    ]},
  ],
  grammar: [
    { t: 'Em cima, dentro: na / w + locativo', h: `
      <p>O locativo do capítulo 7 também diz onde as coisas estão em casa:</p>
      <p><i>na stole</i> (em cima da mesa) · <i>na kanapie</i> · <i>na regale</i> · <i>w szafie</i> (dentro do guarda-roupa) · <i>w łazience</i> · <i>w salonie</i></p>
      <p class="tip">"na" = sobre uma superfície; "w" = dentro de algo.</p>` },
    { t: 'pod, nad, przed, za, między + instrumental', h: `
      <p>Essas preposições de posição pedem o <b>instrumental</b> (o caso de "z mlekiem"):</p>
      <table><tr><th>Preposição</th><th>Exemplo</th></tr>
      <tr><td>pod (debaixo)</td><td><i>pod łóżkiem</i>, <i>pod oknem</i></td></tr>
      <tr><td>nad (acima)</td><td><i>nad kanapą</i>, <i>nad umywalką</i></td></tr>
      <tr><td>przed (na frente)</td><td><i>przed domem</i></td></tr>
      <tr><td>za (atrás)</td><td><i>za drzwiami</i></td></tr>
      <tr><td>między (entre)</td><td><i>między fotelem a kanapą</i></td></tr></table>
      <p><b>obok</b> (ao lado) é diferente: pede <b>genitivo</b>: <i>obok kanapy</i>, <i>obok okna</i>.</p>` },
    { t: 'stoi, leży, wisi', h: `
      <p>Em português dizemos só "está". O polonês olha para a <b>posição</b> do objeto:</p>
      <p><b>stoi</b> (em pé): <i>Szafa stoi w sypialni.</i> · <b>leży</b> (deitado): <i>Dywan leży na podłodze.</i> · <b>wisi</b> (pendurado): <i>Obraz wisi na ścianie.</i></p>
      <p>No plural: <i>stoją, leżą, wiszą</i>.</p>` },
    { t: 'Sugerir e opinar', h: `
      <p><i>A może fotel pod oknem?</i> · <i>Co powiesz na nowy dywan?</i> (acusativo) · <i>Jak myślisz?</i></p>
      <p>Respondendo: <i>Dobry pomysł!</i> · <i>Moim zdaniem to za dużo.</i> · <i>Nie jestem pewny / pewna.</i> <em>(Não tenho certeza.)</em></p>` },
  ],
  checks: [
    ['Kot śpi na ___. (kanapa)', ['kanapa', 'kanapie', 'kanapą'], 1, 'na + locativo: kanapie.'],
    ['Kot jest pod ___. (łóżko)', ['łóżko', 'łóżku', 'łóżkiem'], 2, 'pod + instrumental: łóżkiem.'],
    ['Lampa stoi obok ___. (kanapa)', ['kanapy', 'kanapie', 'kanapą'], 0, 'obok + genitivo: kanapy.'],
    ['Obraz ___ nad kanapą.', ['stoi', 'leży', 'wisi'], 2, 'Quadro fica pendurado: wisi.'],
  ],
  dialogue: { t: 'O apartamento novo', l: [
    ['Ola', 'Gratulacje, Lucas! Nowe mieszkanie! Gdzie postawisz kanapę?', 'Parabéns, Lucas! Apartamento novo! Onde você vai pôr o sofá?'],
    ['Lucas', 'Jak myślisz? Może pod oknem?', 'O que você acha? Talvez embaixo da janela?'],
    ['Ola', 'Moim zdaniem lepiej naprzeciwko telewizora. A może fotel pod oknem?', 'Na minha opinião é melhor de frente para a TV. E se a poltrona ficar embaixo da janela?'],
    ['Lucas', 'Dobry pomysł. A dywan? Jest trochę za duży.', 'Boa ideia. E o tapete? É um pouco grande demais.'],
    ['Ola', 'Co powiesz na dywan w sypialni, obok łóżka?', 'O que acha do tapete no quarto, ao lado da cama?'],
    ['Lucas', 'Tak, tam jest dużo miejsca. A lampa będzie stać między kanapą a regałem.', 'Sim, lá tem bastante espaço. E a luminária vai ficar entre o sofá e a estante.'],
    ['Ola', 'Pięknie. A łazienka?', 'Lindo. E o banheiro?'],
    ['Lucas', 'Łazienka jest mała. Nie ma wanny, tylko prysznic. Lustro wisi nad umywalką, ale jest krzywe.', 'O banheiro é pequeno. Não tem banheira, só chuveiro. O espelho está em cima da pia, mas está torto.'],
    ['Ola', 'A gdzie jest twoja szczoteczka do zębów?', 'E onde está sua escova de dentes?'],
    ['Lucas', 'Hmm… chyba jeszcze w walizce, pod łóżkiem!', 'Hmm… acho que ainda na mala, debaixo da cama!'],
  ]},
  fill: [
    ['Książki są na ___. (regał)', 'regale', 'Os livros estão na estante.'],
    ['Ubrania są w ___. (szafa)', 'szafie', 'As roupas estão no guarda-roupa.'],
    ['Kot śpi pod ___. (łóżko)', 'łóżkiem', 'O gato dorme debaixo da cama.'],
    ['Nad ___ wisi obraz. (kanapa)', 'kanapą', 'Em cima do sofá há um quadro.'],
    ['Lampa stoi obok ___. (fotel)', 'fotela', 'A luminária fica ao lado da poltrona.'],
    ['Co ___ na zielone zasłony?', 'powiesz', 'O que você acha de cortinas verdes?'],
  ],
  order: [
    ['Lustro wisi nad umywalką.', 'O espelho fica sobre a pia.'],
    ['Kot śpi pod łóżkiem.', 'O gato dorme debaixo da cama.'],
    ['A może kanapa pod oknem?', 'Que tal o sofá embaixo da janela?'],
    ['Moim zdaniem dywan jest za duży.', 'Na minha opinião o tapete é grande demais.'],
    ['Lampa stoi między kanapą a regałem.', 'A luminária fica entre o sofá e a estante.'],
  ],
  write: {
    p: 'Descreva seu quarto e sua sala como estão hoje (onde fica cada móvel e objeto). Depois, escreva três sugestões para um amigo que vai ajudar você a reorganizar a casa.',
    c: ['Cinco móveis ou objetos', 'na / w + locativo', 'pod / nad / między + instrumental', 'Três sugestões (a może…, co powiesz na…)'],
    min: 90,
  },
});

COURSE.add('a2', {
  n: 12, gl: ['Ż', 'zdrowie', 'ż e rz soam igual, como o "j" de "já"; em "zdrowie", o z é um "z" comum'],
  pl: 'Boli mnie głowa', pt: 'Sintomas, farmácia, médico e vida saudável',
  busuu: ['I have a headache', 'At the pharmacy', "At the doctor's", 'Eat well, be well'],
  goals: ['Dizer o que dói: boli mnie… / bolą mnie…', 'Pedir remédio na farmácia: coś na kaszel', 'Entender a consulta médica', 'Dar conselhos: powinieneś, trzeba'],
  vocab: [
    { g: 'Sintomas', w: [
      ['Boli mnie głowa.', 'Estou com dor de cabeça.', 'plural: Bolą mnie…', '*Boli mnie głowa* od rana.', 'Estou com dor de cabeça desde de manhã.'],
      ['ból', 'dor', '', 'Mam silny *ból* zęba.', 'Estou com uma dor de dente forte.'],
      ['gorączka', 'febre', '', 'Mam wysoką *gorączkę*.', 'Estou com febre alta.'],
      ['katar', 'coriza, nariz escorrendo', '', 'Mam *katar* i kaszel.', 'Estou com coriza e tosse.'],
      ['kaszel', 'tosse', '', 'Mam suchy *kaszel*.', 'Estou com tosse seca.'],
      ['przeziębienie', 'resfriado', '', 'To tylko *przeziębienie*.', 'É só um resfriado.'],
      ['grypa', 'gripe', '', 'Chyba mam *grypę*.', 'Acho que estou com gripe.'],
      ['chory / chora', 'doente', '', 'Jestem *chory*, zostaję w domu.', 'Estou doente, vou ficar em casa.'],
      ['Źle się czuję.', 'Não estou me sentindo bem.', '', '*Źle się czuję*, idę do lekarza.', 'Não estou bem, vou ao médico.'],
    ]},
    { g: 'Na farmácia', w: [
      ['farmaceutka', 'farmacêutica', 'masc.: farmaceuta', '*Farmaceutka* poleca syrop.', 'A farmacêutica recomenda um xarope.'],
      ['lek', 'remédio', 'também: lekarstwo', 'Biorę *lek* dwa razy dziennie.', 'Tomo o remédio duas vezes por dia.'],
      ['tabletka', 'comprimido', '', 'Proszę brać jedną *tabletkę* rano.', 'Tome um comprimido de manhã.'],
      ['syrop', 'xarope', '', 'Ten *syrop* jest słodki.', 'Este xarope é doce.'],
      ['recepta', 'receita médica', '', 'Ten lek jest na *receptę*.', 'Este remédio precisa de receita.'],
      ['bez recepty', 'sem receita', '', 'Czy ten lek jest *bez recepty*?', 'Este remédio é vendido sem receita?'],
      ['coś na…', 'algo para…', '+ acusativo', 'Poproszę *coś na* ból głowy.', 'Quero algo para dor de cabeça.'],
      ['dwa razy dziennie', 'duas vezes por dia', '', 'Proszę brać syrop *dwa razy dziennie*.', 'Tome o xarope duas vezes por dia.'],
      ['po jedzeniu', 'depois de comer', 'antes: przed jedzeniem', 'Tabletki biorę *po jedzeniu*.', 'Tomo os comprimidos depois de comer.'],
    ]},
    { g: 'No médico', w: [
      ['lekarz / lekarka', 'médico / médica', '', 'Muszę iść do *lekarza*.', 'Preciso ir ao médico.'],
      ['przychodnia', 'posto de saúde, clínica', '', '*Przychodnia* jest otwarta do ósmej.', 'O posto fica aberto até as oito.'],
      ['wizyta', 'consulta', '', 'Mam *wizytę* u lekarza w środę.', 'Tenho consulta médica na quarta.'],
      ['zwolnienie lekarskie', 'atestado médico', '', 'Lekarz dał mi *zwolnienie lekarskie*.', 'O médico me deu atestado.'],
      ['Co panu dolega?', 'O que o senhor está sentindo?', 'a uma mulher: Co pani dolega?', 'Dzień dobry. *Co panu dolega?*', 'Bom dia. O que o senhor está sentindo?'],
      ['Od kiedy…?', 'Desde quando…?', '', '*Od kiedy* ma pani gorączkę?', 'Desde quando a senhora está com febre?'],
      ['powinieneś / powinnaś', 'você deveria (h / m)', 'ver tabela', '*Powinieneś* więcej spać.', 'Você deveria dormir mais.'],
      ['trzeba', 'é preciso', '+ infinitivo', '*Trzeba* pić dużo wody.', 'É preciso beber muita água.'],
    ]},
    { g: 'Vida saudável', w: [
      ['zdrowie', 'saúde', 'Zdrowia! = Saúde! (desejo)', '*Zdrowie* jest najważniejsze.', 'A saúde é o mais importante.'],
      ['zdrowy', 'saudável', '', 'Staram się jeść *zdrowe* jedzenie.', 'Procuro comer comida saudável.'],
      ['warzywa', 'legumes, verduras', '', 'Jem dużo *warzyw*.', 'Como muita verdura.'],
      ['owoce', 'frutas', '', 'Codziennie jem *owoce*.', 'Como frutas todo dia.'],
      ['ruch', 'atividade física', 'literalmente "movimento"', '*Ruch* to zdrowie!', 'Movimento é saúde!'],
      ['sen', 'sono', '', 'Potrzebuję więcej *snu*.', 'Preciso de mais sono.'],
      ['unikać', 'evitar', '+ genitivo', '*Unikam* cukru.', 'Evito açúcar.'],
    ]},
  ],
  grammar: [
    { t: 'Boli mnie / Bolą mnie', h: `
      <p>Em polonês, a parte do corpo é o <b>sujeito</b> (nominativo) e "mnie" é quem sente: <em>a cabeça me dói</em>.</p>
      <table><tr><th>Singular: boli</th><th>Plural: bolą</th></tr>
      <tr><td><i>Boli mnie głowa.</i></td><td><i>Bolą mnie plecy.</i></td></tr>
      <tr><td><i>Boli mnie brzuch.</i></td><td><i>Bolą mnie nogi.</i></td></tr>
      <tr><td><i>Boli mnie gardło.</i></td><td><i>Bolą mnie zęby.</i></td></tr></table>
      <p>Para outra pessoa: <i>Boli cię głowa?</i> (você) · <i>Boli go ręka.</i> (ele) · <i>Boli ją ucho.</i> (ela)</p>
      <p class="tip">No passado, o verbo concorda com a parte do corpo (capítulo 4): <i>Bolała mnie głowa.</i> · <i>Bolał mnie brzuch.</i></p>` },
    { t: 'Mam + sintoma; coś na + problema', h: `
      <p>Sintomas com <b>mam</b> vão para o acusativo: <i>mam gorączkę</i>, <i>mam grypę</i>, <i>mam katar</i>, <i>mam kaszel</i>.</p>
      <p>Na farmácia: <b>coś na + acusativo</b>: <i>coś na kaszel</i>, <i>coś na katar</i>, <i>coś na ból głowy</i>.</p>
      <p>Dose: <i>raz dziennie</i>, <i>dwa razy dziennie</i>, <i>przed jedzeniem</i>, <i>po jedzeniu</i>.</p>` },
    { t: 'Conselhos: powinien + infinitivo', h: `
      <table><tr><th></th><th>Homem</th><th>Mulher</th></tr>
      <tr><td>ja</td><td>powinienem</td><td>powinnam</td></tr>
      <tr><td>ty</td><td>powinieneś</td><td>powinnaś</td></tr>
      <tr><td>on / ona; pan / pani</td><td>powinien</td><td>powinna</td></tr>
      <tr><td>my</td><td>powinniśmy</td><td>powinnyśmy</td></tr></table>
      <p><i>Powinnaś więcej spać.</i> · <i>Powinien pan odpocząć.</i> (o médico, formal)</p>
      <p>Regra geral, sem pessoa: <b>trzeba</b> / <b>nie trzeba</b> + infinitivo: <i>Trzeba jeść warzywa.</i></p>` },
  ],
  checks: [
    ['___ mnie plecy.', ['Boli', 'Bolą', 'Bolę'], 1, 'plecy é plural → bolą.'],
    ['Mam ___. (gorączka)', ['gorączka', 'gorączkę', 'gorączki'], 1, 'mam + acusativo: gorączkę.'],
    ['Poproszę coś na ___. (kaszel)', ['kaszel', 'kaszlu', 'kaszlem'], 0, 'Masculino de coisa: acusativo = nominativo.'],
    ['(para uma amiga) ___ więcej spać.', ['Powinnaś', 'Powinieneś', 'Powinien'], 0, 'ty, mulher: powinnaś.'],
  ],
  dialogue: { t: 'No médico e na farmácia', l: [
    ['Lekarka', 'Dzień dobry. Co panu dolega?', 'Bom dia. O que o senhor está sentindo?'],
    ['Lucas', 'Dzień dobry. Źle się czuję. Boli mnie głowa i gardło, mam katar.', 'Bom dia. Não estou bem. Estou com dor de cabeça e de garganta, e coriza.'],
    ['Lekarka', 'Od kiedy?', 'Desde quando?'],
    ['Lucas', 'Od przedwczoraj. Wczoraj miałem gorączkę.', 'Desde anteontem. Ontem tive febre.'],
    ['Lekarka', 'Proszę otworzyć usta… Gardło jest czerwone. A teraz proszę głęboko oddychać.', 'Abra a boca, por favor… A garganta está vermelha. Agora respire fundo, por favor.'],
    ['Lucas', 'Czy to grypa?', 'É gripe?'],
    ['Lekarka', 'Nie, to przeziębienie. Powinien pan odpocząć kilka dni i pić dużo wody. Tu jest recepta i zwolnienie lekarskie.', 'Não, é um resfriado. O senhor deveria descansar alguns dias e beber muita água. Aqui estão a receita e o atestado.'],
    ['Lucas', 'Dzień dobry, mam receptę. I poproszę coś na kaszel, bez recepty.', 'Bom dia, tenho uma receita. E quero algo para tosse, sem receita.'],
    ['Farmaceutka', 'Polecam ten syrop. Proszę brać dwa razy dziennie, po jedzeniu.', 'Recomendo este xarope. Tome duas vezes por dia, depois de comer.'],
    ['Lucas', 'Dziękuję. Chyba powinienem jeść więcej warzyw…', 'Obrigado. Acho que eu deveria comer mais verdura…'],
    ['Farmaceutka', 'Dokładnie! Ruch, sen i zdrowe jedzenie. Zdrowia!', 'Exatamente! Exercício, sono e comida saudável. Melhoras!'],
  ]},
  fill: [
    ['Boli mnie ___. (cabeça)', 'głowa', 'Estou com dor de cabeça.'],
    ['___ mnie nogi.', 'Bolą', 'Minhas pernas doem.'],
    ['Chyba mam ___. (grypa)', 'grypę', 'Acho que estou com gripe.'],
    ['Poproszę coś na ból ___. (głowa)', 'głowy', 'Quero algo para dor de cabeça.'],
    ['Powinien pan ___ kilka dni. (descansar)', 'odpocząć', 'O senhor deveria descansar alguns dias.'],
    ['___ jeść więcej warzyw. (é preciso)', 'Trzeba', 'É preciso comer mais verdura.'],
  ],
  order: [
    ['Boli mnie głowa i gardło.', 'Estou com dor de cabeça e de garganta.'],
    ['Od kiedy ma pan gorączkę?', 'Desde quando o senhor está com febre?'],
    ['Poproszę coś na kaszel.', 'Quero algo para tosse.'],
    ['Proszę brać dwa razy dziennie.', 'Tome duas vezes por dia.'],
    ['Powinnaś więcej spać.', 'Você deveria dormir mais.'],
  ],
  write: {
    p: 'Escreva um e-mail para seu chefe ou professor dizendo que está doente: os sintomas, desde quando, o que o médico disse e o que você vai fazer. No fim, escreva três conselhos de saúde para um amigo.',
    c: ['boli mnie / bolą mnie', 'mam + sintoma no acusativo', 'Um conselho do médico (powinien pan…, trzeba…)', 'Três conselhos com powinieneś / powinnaś / trzeba'],
    min: 100,
  },
});
