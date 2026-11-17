/* Polonês B1 — capítulos 5 e 6 (Busuu B1, cap. 3). */
COURSE.add('b1', {
  n: 5, gl: ['Ń', 'mieszkanie', 'ń soa como o "nh" de "manhã"'],
  pl: 'Przeprowadzamy się!', pt: 'Onde morar, a mudança e o dativo',
  busuu: ['Where do you live?', "We're moving house!"],
  goals: ['Descrever bairro, prédio e apartamento', 'Falar de aluguel e mudança', 'Usar o dativo: pomagam bratu, dam ci klucz', 'Usar podobać się: podoba mi się ta dzielnica'],
  vocab: [
    { g: 'Onde eu moro', w: [
      ['dzielnica', 'bairro', '', 'Mieszkam w spokojnej *dzielnicy*.', 'Moro num bairro tranquilo.'],
      ['osiedle', 'conjunto residencial', '', 'Nasze *osiedle* ma duży park.', 'Nosso conjunto residencial tem um parque grande.'],
      ['blok', 'prédio residencial (de concreto)', '', 'Mieszkam w *bloku* na dziesiątym piętrze.', 'Moro num prédio, no décimo andar.'],
      ['kamienica', 'prédio antigo (de cidade)', '', 'Ta *kamienica* jest z XIX wieku.', 'Este prédio é do século XIX.'],
      ['dom jednorodzinny', 'casa (unifamiliar)', '', 'Moi rodzice mają *dom jednorodzinny* pod miastem.', 'Meus pais têm uma casa nos arredores da cidade.'],
      ['piętro / parter', 'andar / térreo', '', 'Mieszkamy na trzecim *piętrze*, bez windy.', 'Moramos no terceiro andar, sem elevador.'],
      ['winda', 'elevador', '', '*Winda* znowu nie działa.', 'O elevador de novo não funciona.'],
      ['sąsiad / sąsiadka', 'vizinho / vizinha', '', 'Mój *sąsiad* jest bardzo głośny.', 'Meu vizinho é muito barulhento.'],
      ['okolica', 'arredores, região', '', 'W *okolicy* jest dużo sklepów.', 'Nos arredores há muitas lojas.'],
      ['dojazd', 'acesso, trajeto', '', '*Dojazd* do centrum zajmuje dwadzieścia minut.', 'O trajeto até o centro leva vinte minutos.'],
    ]},
    { g: 'Aluguel e mudança', w: [
      ['wynajmować', 'alugar', 'perf.: wynająć', '*Wynajmujemy* mieszkanie od pani Kowalskiej.', 'Alugamos o apartamento da senhora Kowalska.'],
      ['czynsz', 'aluguel / condomínio', 'o valor mensal', 'Ile płacisz *czynszu*?', 'Quanto você paga de aluguel?'],
      ['właściciel / właścicielka', 'proprietário / proprietária', '', '*Właściciel* mieszkania jest bardzo miły.', 'O dono do apartamento é muito simpático.'],
      ['umowa najmu', 'contrato de aluguel', '', 'Podpisaliśmy *umowę najmu* na rok.', 'Assinamos um contrato de aluguel de um ano.'],
      ['kaucja', 'caução', '', '*Kaucja* to jeden czynsz.', 'A caução é de um aluguel.'],
      ['umeblowany', 'mobiliado', '', 'Szukamy mieszkania *umeblowanego*.', 'Procuramos apartamento mobiliado.'],
      ['przeprowadzać się', 'mudar-se', 'perf.: przeprowadzić się', 'W sobotę *przeprowadzamy się* do Gdańska.', 'No sábado vamos nos mudar para Gdańsk.'],
      ['przeprowadzka', 'mudança', '', '*Przeprowadzka* to dużo pracy.', 'Mudança dá muito trabalho.'],
      ['karton', 'caixa de papelão', '', 'Mamy jeszcze dwadzieścia *kartonów*.', 'Ainda temos vinte caixas.'],
      ['pakować', 'empacotar', 'perf.: spakować', 'Cały weekend *pakowałam* książki.', 'Passei o fim de semana empacotando livros.'],
      ['meble', 'móveis', 'plural', 'Musimy przewieźć *meble*.', 'Precisamos transportar os móveis.'],
    ]},
    { g: 'Verbos com dativo', w: [
      ['pomagać', 'ajudar', '+ dativo', 'Zawsze *pomagam* bratu przy przeprowadzce.', 'Sempre ajudo meu irmão na mudança.'],
      ['dać / dawać', 'dar', '+ dativo', '*Dam* ci klucz jutro.', 'Te dou a chave amanhã.'],
      ['dziękować', 'agradecer', '+ dativo', '*Dziękuję* wam za pomoc!', 'Obrigado a vocês pela ajuda!'],
      ['podobać się', 'agradar, gostar', 'o que agrada é o sujeito', 'Ta dzielnica bardzo mi się *podoba*.', 'Gosto muito deste bairro.'],
      ['pokazać', 'mostrar', '+ dativo', '*Pokażę* ci nowe mieszkanie.', 'Vou te mostrar o apartamento novo.'],
    ]},
  ],
  grammar: [
    { t: 'O dativo: para quem', h: `
      <p>O <b>dativo</b> marca a quem algo é dado, mostrado, dito, ou quem recebe ajuda.</p>
      <table><tr><th>Gênero</th><th>Nominativo</th><th>Dativo</th></tr>
      <tr><td>masculino</td><td>student, sąsiad</td><td>student<b>owi</b>, sąsiad<b>owi</b></td></tr>
      <tr><td>masc. curtos (irregulares)</td><td>brat, ojciec, pan, kot</td><td>brat<b>u</b>, ojc<b>u</b>, pan<b>u</b>, kot<b>u</b></td></tr>
      <tr><td>feminino</td><td>mama, siostra, Ania</td><td>mam<b>ie</b>, siostrz<b>e</b>, An<b>i</b> <em>(igual ao locativo)</em></td></tr>
      <tr><td>neutro</td><td>dziecko</td><td>dzieck<b>u</b></td></tr>
      <tr><td>plural (todos)</td><td>rodzice, sąsiedzi</td><td>rodzic<b>om</b>, sąsiad<b>om</b></td></tr></table>
      <p class="tip">Masculinos em -a (kolega, kierowca) declinam como femininos: <i>pomagam koledze</i>.</p>` },
    { t: 'Pronomes no dativo', h: `
      <p><b>mi, ci, mu, jej, nam, wam, im</b>: <i>Dam ci klucz.</i> · <i>Pomóż mi!</i> · <i>Pokażę im mieszkanie.</i></p>
      <p>Formas longas para ênfase ou início de frase: <i>Mnie się podoba, a tobie?</i></p>` },
    { t: 'Podoba mi się: quem gosta fica no dativo', h: `
      <p>Como o "agradar" do português: a coisa é o sujeito; a pessoa vai para o dativo.</p>
      <p><i>Podoba mi się ta kuchnia.</i> <em>(A cozinha me agrada.)</em> · <i>Podobają mi się te meble.</i> (plural → podobają)</p>
      <p>No passado concorda com a coisa: <i>Mieszkanie bardzo nam się podobało.</i></p>
      <p class="tip"><b>podobać się</b> = primeira impressão, aparência. Para gosto geral, use <b>lubić</b>: <i>Lubię moją dzielnicę.</i></p>` },
  ],
  checks: [
    ['Pomagam ___ przy przeprowadzce. (brat)', ['brata', 'bratu', 'bratem'], 1, 'Dativo irregular: brat → bratu.'],
    ['Dam klucz ___. (sąsiadka)', ['sąsiadce', 'sąsiadkę', 'sąsiadki'], 0, 'Feminino em -ka: dativo -ce.'],
    ['Ta dzielnica bardzo ___ się podoba.', ['mi', 'mnie', 'ja'], 0, 'Quem gosta → dativo: mi.'],
    ['Te meble mi się ___.', ['podoba', 'podobają', 'podobam'], 1, 'Sujeito plural → podobają.'],
  ],
  dialogue: { t: 'Dia de mudança', l: [
    ['Ola', 'Lucas, dzięki, że pomagasz mi z przeprowadzką!', 'Lucas, obrigada por me ajudar com a mudança!'],
    ['Lucas', 'Nie ma sprawy. Ile jeszcze kartonów?', 'Sem problema. Quantas caixas ainda?'],
    ['Ola', 'Chyba dwadzieścia. Książki spakowałam wczoraj, zostały ubrania i kuchnia.', 'Acho que vinte. Empacotei os livros ontem, faltam roupas e cozinha.'],
    ['Lucas', 'A gdzie jest nowe mieszkanie?', 'E onde fica o apartamento novo?'],
    ['Ola', 'Na Żoliborzu, w starej kamienicy. Na trzecim piętrze, niestety bez windy.', 'Em Żoliborz, num prédio antigo. No terceiro andar, infelizmente sem elevador.'],
    ['Lucas', 'Bez windy? A meble?', 'Sem elevador? E os móveis?'],
    ['Ola', 'Na szczęście mieszkanie jest umeblowane. Właścicielka zostawiła nam kanapę i szafę.', 'Ainda bem que o apartamento é mobiliado. A dona deixou para nós um sofá e um guarda-roupa.'],
    ['Lucas', 'Super. A czynsz?', 'Ótimo. E o aluguel?'],
    ['Ola', 'Trochę wyższy niż teraz, ale okolica jest piękna i dojazd do pracy krótszy.', 'Um pouco mais alto que agora, mas a região é linda e o trajeto até o trabalho é mais curto.'],
    ['Lucas', 'Pokażesz mi je w weekend?', 'Você me mostra no fim de semana?'],
    ['Ola', 'Jasne! Dam ci nawet zapasowy klucz. A teraz podaj mi, proszę, ten karton.', 'Claro! Te dou até uma chave reserva. E agora me passa, por favor, aquela caixa.'],
  ]},
  fill: [
    ['Pomagam ___ w kuchni. (mama)', 'mamie', 'Ajudo minha mãe na cozinha.'],
    ['Dziękuję ___ za pomoc! (wy)', 'wam', 'Obrigado a vocês pela ajuda!'],
    ['Pokażę ___ mieszkanie. (ty)', 'ci', 'Vou te mostrar o apartamento.'],
    ['Daj klucz ___. (sąsiad)', 'sąsiadowi', 'Dê a chave ao vizinho.'],
    ['Podobają mi się te ___. (meble)', 'meble', 'Gosto destes móveis.'],
    ['W sobotę ___ się do Krakowa. (przeprowadzać, my)', 'przeprowadzamy', 'No sábado nos mudamos para Cracóvia.'],
  ],
  order: [
    ['Ta dzielnica bardzo mi się podoba.', 'Gosto muito deste bairro.'],
    ['Mieszkamy na trzecim piętrze bez windy.', 'Moramos no terceiro andar sem elevador.'],
    ['Dam ci klucz jutro.', 'Te dou a chave amanhã.'],
    ['Podpisaliśmy umowę najmu na rok.', 'Assinamos o contrato de aluguel por um ano.'],
    ['Zawsze pomagam bratu przy przeprowadzce.', 'Sempre ajudo meu irmão na mudança.'],
  ],
  write: {
    p: 'Descreva onde você mora hoje (bairro, prédio, vizinhos, o que tem por perto) e conte uma mudança que você fez ou vai fazer: quem ajudou, o que foi difícil e o que você gosta no lugar novo.',
    c: ['Cinco palavras de moradia', 'Três formas no dativo (pomagam…, dam…)', 'podoba mi się / podobają mi się', 'Um pronome no dativo (mi, ci, mu…)'],
    min: 120,
  },
});

COURSE.add('b1', {
  n: 6, gl: ['Ł', 'piłka', 'ł soa como "u": "piu-ka"'],
  pl: 'Pasje i emocje', pt: 'Livros, futebol, sentimentos e verbos com caso',
  busuu: ['I like to read books.', 'Crazy about football', 'Positive feelings', 'Negative feelings'],
  goals: ['Falar de livros e de futebol', 'Descrever sentimentos positivos e negativos', 'Usar verbos que pedem caso: interesować się czymś, bać się czegoś', 'Reagir: Cieszę się, że… Szkoda, że…'],
  vocab: [
    { g: 'Livros', w: [
      ['powieść', 'romance (livro)', 'feminino', 'Czytam teraz *powieść* Olgi Tokarczuk.', 'Estou lendo um romance da Olga Tokarczuk.'],
      ['kryminał', 'romance policial', '', 'Najbardziej lubię *kryminały*.', 'Gosto mais de policiais.'],
      ['autor / autorka', 'autor / autora', '', 'Kto jest *autorem* tej książki?', 'Quem é o autor deste livro?'],
      ['bohater / bohaterka', 'personagem principal, herói', '', 'Główny *bohater* jest detektywem.', 'O personagem principal é um detetive.'],
      ['rozdział', 'capítulo', '', 'Przeczytałam już trzy *rozdziały*.', 'Já li três capítulos.'],
      ['biblioteka', 'biblioteca', '', 'Wypożyczam książki z *biblioteki*.', 'Pego livros emprestados na biblioteca.'],
      ['wciągający', 'envolvente', '', 'Ta książka jest bardzo *wciągająca*.', 'Este livro é muito envolvente.'],
    ]},
    { g: 'Futebol', w: [
      ['piłka nożna', 'futebol', 'piłka = bola', 'Lubię oglądać *piłkę nożną*.', 'Gosto de assistir futebol.'],
      ['mecz', 'jogo, partida', '', 'Dzisiaj jest *mecz* Polska–Brazylia!', 'Hoje tem jogo Polônia x Brasil!'],
      ['drużyna', 'time', '', 'Jaka jest twoja ulubiona *drużyna*?', 'Qual é o seu time favorito?'],
      ['kibic', 'torcedor', '', 'Jestem *kibicem* Legii Warszawa.', 'Sou torcedor do Legia Varsóvia.'],
      ['bramka / gol', 'gol', 'bramka também é o próprio gol (trave)', 'Lewandowski strzelił *bramkę*!', 'Lewandowski marcou um gol!'],
      ['wygrać / przegrać', 'ganhar / perder', 'perf.', 'Nasza drużyna *wygrała* dwa do jednego.', 'Nosso time ganhou de dois a um.'],
      ['remis', 'empate', '', 'Mecz skończył się *remisem*.', 'O jogo terminou empatado.'],
      ['trener', 'treinador', '', '*Trener* był bardzo zły po meczu.', 'O treinador estava muito bravo depois do jogo.'],
      ['kibicować', 'torcer', '+ dativo', '*Kibicuję* Brazylii, a ty?', 'Torço pelo Brasil, e você?'],
    ]},
    { g: 'Sentimentos', w: [
      ['szczęśliwy', 'feliz', '', 'Jestem bardzo *szczęśliwa*!', 'Estou muito feliz!'],
      ['dumny', 'orgulhoso', 'z + genitivo', 'Jestem *dumny* z ciebie.', 'Tenho orgulho de você.'],
      ['wzruszony', 'emocionado', '', 'Byłam *wzruszona* na końcu filmu.', 'Fiquei emocionada no final do filme.'],
      ['zaskoczony', 'surpreso', '', 'Byłem *zaskoczony* wynikiem.', 'Fiquei surpreso com o resultado.'],
      ['cieszyć się', 'alegrar-se, ficar feliz', 'z + genitivo; że…', '*Cieszę się*, że przyjechałeś!', 'Fico feliz que você veio!'],
      ['smutny', 'triste', '', 'Dlaczego jesteś *smutna*?', 'Por que você está triste?'],
      ['rozczarowany', 'decepcionado', '', 'Kibice są *rozczarowani*.', 'Os torcedores estão decepcionados.'],
      ['zdenerwowany', 'irritado; nervoso', '', 'Jestem *zdenerwowany* przed meczem.', 'Estou nervoso antes do jogo.'],
      ['bać się', 'ter medo', '+ genitivo', '*Boję się* pająków.', 'Tenho medo de aranhas.'],
      ['martwić się', 'preocupar-se', 'o + acusativo', '*Martwię się* o mamę.', 'Estou preocupado com minha mãe.'],
      ['złościć się', 'ficar com raiva', 'na + acusativo', 'Nie *złość się* na mnie!', 'Não fique com raiva de mim!'],
      ['tęsknić', 'sentir saudade', 'za + instrumental', '*Tęsknię* za rodziną.', 'Sinto saudade da família.'],
      ['Szkoda, że…', 'Pena que…', '', '*Szkoda, że* nie możesz przyjść.', 'Pena que você não pode vir.'],
    ]},
  ],
  grammar: [
    { t: 'Cada verbo pede um caso', h: `
      <p>Muitos verbos de sentimento e interesse pedem um caso fixo, às vezes com preposição. Aprenda o verbo junto com a "cola":</p>
      <table><tr><th>Verbo</th><th>Caso</th><th>Exemplo</th></tr>
      <tr><td>interesować się</td><td>instrumental</td><td><i>Interesuję się piłką nożną.</i></td></tr>
      <tr><td>bać się</td><td>genitivo</td><td><i>Boję się ciemności.</i></td></tr>
      <tr><td>cieszyć się z</td><td>genitivo</td><td><i>Cieszę się z wygranej.</i></td></tr>
      <tr><td>być dumnym z</td><td>genitivo</td><td><i>Jestem dumna z brata.</i></td></tr>
      <tr><td>martwić się o</td><td>acusativo</td><td><i>Martwię się o egzamin.</i></td></tr>
      <tr><td>złościć się na</td><td>acusativo</td><td><i>Złoszczę się na sędziego.</i></td></tr>
      <tr><td>tęsknić za</td><td>instrumental</td><td><i>Tęsknię za Brazylią.</i></td></tr>
      <tr><td>kibicować</td><td>dativo</td><td><i>Kibicuję Polsce.</i></td></tr></table>` },
    { t: 'Reagir: że e szkoda', h: `
      <p><i>Cieszę się, że…</i> (fico feliz que…) · <i>Szkoda, że…</i> (pena que…) · <i>Dobrze, że…</i> (ainda bem que…) · <i>Boję się, że…</i> (tenho medo que…)</p>
      <p><i>Szkoda, że przegraliśmy.</i> · <i>Dobrze, że przyszedłeś.</i></p>
      <p class="tip">Diferente do português, depois de <b>że</b> o verbo fica no indicativo, sem subjuntivo.</p>` },
    { t: 'Estar × ficar', h: `
      <p>Para estado: <b>być</b> + adjetivo: <i>Jestem smutny.</i></p>
      <p>Para mudança de estado, use verbos próprios: <i>zdenerwować się</i> (ficar irritado), <i>ucieszyć się</i> (ficar feliz), <i>przestraszyć się</i> (levar um susto), <i>wzruszyć się</i> (emocionar-se).</p>
      <p><i>Kiedy zobaczyłem wynik, bardzo się ucieszyłem.</i></p>` },
  ],
  checks: [
    ['Interesuję się ___. (piłka nożna)', ['piłkę nożną', 'piłką nożną', 'piłki nożnej'], 1, 'interesować się + instrumental.'],
    ['Boję się ___. (pies)', ['psa', 'psem', 'pies'], 0, 'bać się + genitivo.'],
    ['Tęsknię za ___. (rodzina)', ['rodzinę', 'rodziny', 'rodziną'], 2, 'tęsknić za + instrumental.'],
    ['Martwię się ___ mamę.', ['o', 'z', 'za'], 0, 'martwić się o + acusativo.'],
  ],
  dialogue: { t: 'Depois do jogo', l: [
    ['Lucas', 'Widziałaś mecz? Polska zremisowała z Brazylią!', 'Você viu o jogo? A Polônia empatou com o Brasil!'],
    ['Ola', 'Tak! Byłam bardzo zdenerwowana w drugiej połowie.', 'Sim! Fiquei muito nervosa no segundo tempo.'],
    ['Lucas', 'Ja też. Komu kibicowałaś?', 'Eu também. Para quem você torceu?'],
    ['Ola', 'Oczywiście Polsce! A ty?', 'Para a Polônia, claro! E você?'],
    ['Lucas', 'Szczerze? Brazylii. Ale cieszę się z remisu. Wszyscy są zadowoleni.', 'Sinceramente? Para o Brasil. Mas fico feliz com o empate. Todo mundo fica contente.'],
    ['Ola', 'Haha, dyplomata! A po meczu co robiłeś?', 'Haha, diplomata! E depois do jogo, o que você fez?'],
    ['Lucas', 'Czytałem kryminał. Jest tak wciągający, że skończyłem trzy rozdziały.', 'Li um romance policial. É tão envolvente que terminei três capítulos.'],
    ['Ola', 'Kto jest autorem?', 'Quem é o autor?'],
    ['Lucas', 'Marek Krajewski. Akcja dzieje się we Wrocławiu. Boję się tylko, że zakończenie mnie rozczaruje.', 'Marek Krajewski. A história se passa em Breslávia. Só tenho medo de que o final me decepcione.'],
    ['Ola', 'Na pewno nie. Wiesz, tęsknię trochę za czytaniem. Ostatnio nie mam czasu.', 'Com certeza não. Sabe, sinto um pouco de saudade de ler. Ultimamente não tenho tempo.'],
    ['Lucas', 'Szkoda! Pożyczę ci tę książkę, jak skończę.', 'Que pena! Te empresto o livro quando terminar.'],
  ]},
  fill: [
    ['Interesuję się ___. (literatura)', 'literaturą', 'Eu me interesso por literatura.'],
    ['Boję się ___. (ciemność)', 'ciemności', 'Tenho medo do escuro.'],
    ['Jestem dumny ___ ciebie.', 'z', 'Tenho orgulho de você.'],
    ['Kibicuję ___. (Polska)', 'Polsce', 'Torço pela Polônia.'],
    ['___, że nie możesz przyjść. (pena)', 'Szkoda', 'Pena que você não pode vir.'],
    ['Nasza drużyna ___ dwa do zera. (ganhou)', 'wygrała', 'Nosso time ganhou de dois a zero.'],
  ],
  order: [
    ['Interesuję się piłką nożną.', 'Eu me interesso por futebol.'],
    ['Cieszę się, że przyjechałeś.', 'Fico feliz que você veio.'],
    ['Tęsknię za rodziną.', 'Sinto saudade da família.'],
    ['Ta książka jest bardzo wciągająca.', 'Este livro é muito envolvente.'],
    ['Mecz skończył się remisem.', 'O jogo terminou empatado.'],
  ],
  write: {
    p: 'Fale de uma paixão sua (um livro, um time, um hobby): por que gosta, como começou. Depois, conte um momento em que você sentiu algo forte (alegria, orgulho, decepção, medo ou saudade) e o que aconteceu.',
    c: ['Três verbos com caso (interesować się, bać się, tęsknić za…)', 'Quatro adjetivos de sentimento', 'Cieszę się, że… ou Szkoda, że…', 'Cinco palavras de livros ou futebol'],
    min: 130,
  },
});
