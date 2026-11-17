/* Polonês A2 — capítulos 7 e 8 (Busuu A2, cap. 4). */
COURSE.add('a2', {
  n: 7, gl: ['Sz', 'szalik', 'sz soa como o "x" de "xícara"'],
  pl: 'Gdzie robisz zakupy?', pt: 'Lojas, acessórios, tarefas de casa e o locativo',
  busuu: ['Where to go shopping?', 'Household chores', 'Accessories'],
  goals: ['Dizer onde se compra cada coisa', 'Usar o locativo: w sklepie, na targu', 'Pedir um acessório: poproszę tę czapkę', 'Falar das tarefas de casa e de frequência'],
  vocab: [
    { g: 'Lojas e compras', w: [
      ['sklep spożywczy', 'mercearia', '', 'Kupuję mleko w *sklepie spożywczym*.', 'Compro leite na mercearia.'],
      ['supermarket', 'supermercado', '', 'W *supermarkecie* jest wszystko.', 'No supermercado tem de tudo.'],
      ['piekarnia', 'padaria', '', 'Chleb kupuję w *piekarni* obok domu.', 'Compro pão na padaria ao lado de casa.'],
      ['targ', 'feira', 'também: bazar', 'W sobotę robię zakupy na *targu*.', 'No sábado faço compras na feira.'],
      ['centrum handlowe', 'shopping center', '', 'W *centrum handlowym* jest kino.', 'No shopping tem cinema.'],
      ['kiosk', 'banca', 'vende bilhetes e jornais', 'Bilety kupuję w *kiosku*.', 'Compro bilhetes na banca.'],
      ['kasa', 'caixa', '', 'Płacę przy *kasie*.', 'Pago no caixa.'],
      ['promocja', 'promoção', '', 'Ten szalik jest w *promocji*.', 'Este cachecol está em promoção.'],
      ['paragon', 'nota fiscal, recibo', '', 'Proszę, oto *paragon*.', 'Aqui está o recibo.'],
      ['płacić kartą / gotówką', 'pagar com cartão / em dinheiro', 'instrumental', 'Mogę *płacić kartą*?', 'Posso pagar com cartão?'],
      ['robić zakupy', 'fazer compras', '', 'Gdzie *robisz zakupy*?', 'Onde você faz compras?'],
      ['Ile kosztuje…?', 'Quanto custa…?', 'plural: Ile kosztują…?', '*Ile kosztuje* ta czapka?', 'Quanto custa este gorro?'],
    ]},
    { g: 'Acessórios', w: [
      ['zegarek', 'relógio (de pulso)', '', 'To jest *zegarek* mojego dziadka.', 'Este é o relógio do meu avô.'],
      ['okulary', 'óculos', 'só plural', 'Gdzie są moje *okulary*?', 'Onde estão meus óculos?'],
      ['okulary przeciwsłoneczne', 'óculos de sol', '', 'Latem noszę *okulary przeciwsłoneczne*.', 'No verão uso óculos de sol.'],
      ['pasek', 'cinto', '', 'Ten *pasek* jest za krótki.', 'Este cinto é curto demais.'],
      ['szalik', 'cachecol', '', 'Zimą noszę ciepły *szalik*.', 'No inverno uso um cachecol quente.'],
      ['czapka', 'gorro, boné', '', 'Ta *czapka* jest bardzo ładna.', 'Este gorro é muito bonito.'],
      ['rękawiczki', 'luvas', 'plural', 'Mam nowe *rękawiczki*.', 'Tenho luvas novas.'],
      ['kolczyki', 'brincos', 'plural', 'Te *kolczyki* są ze srebra.', 'Estes brincos são de prata.'],
      ['torebka', 'bolsa (de mão)', '', 'Moja *torebka* jest czarna.', 'Minha bolsa é preta.'],
      ['portfel', 'carteira', '', 'Gdzie jest mój *portfel*?', 'Onde está minha carteira?'],
      ['parasol', 'guarda-chuva', '', 'Weź *parasol*, pada deszcz.', 'Leve o guarda-chuva, está chovendo.'],
      ['nosić', 'usar (roupa, acessório)', 'noszę, nosisz…', 'Codziennie *noszę* zegarek.', 'Uso relógio todo dia.'],
    ]},
    { g: 'Tarefas de casa', w: [
      ['sprzątać', 'arrumar, limpar', '', 'W sobotę *sprzątam* mieszkanie.', 'No sábado arrumo o apartamento.'],
      ['odkurzać', 'passar aspirador', '', '*Odkurzam* raz w tygodniu.', 'Passo aspirador uma vez por semana.'],
      ['zmywać naczynia', 'lavar a louça', '', 'Kto dziś *zmywa naczynia*?', 'Quem lava a louça hoje?'],
      ['prać', 'lavar roupa', 'piorę, pierzesz…', 'W niedzielę *piorę*.', 'No domingo lavo roupa.'],
      ['prasować', 'passar roupa', '', 'Nie lubię *prasować*.', 'Não gosto de passar roupa.'],
      ['wynosić śmieci', 'levar o lixo para fora', '', 'Mój brat *wynosi śmieci*.', 'Meu irmão leva o lixo para fora.'],
      ['ścielić łóżko', 'arrumar a cama', 'ścielę, ścielesz…', 'Codziennie rano *ścielę łóżko*.', 'Toda manhã arrumo a cama.'],
      ['raz w tygodniu', 'uma vez por semana', '', 'Sprzątam łazienkę *raz w tygodniu*.', 'Limpo o banheiro uma vez por semana.'],
      ['dwa razy w miesiącu', 'duas vezes por mês', '', 'Prasuję *dwa razy w miesiącu*.', 'Passo roupa duas vezes por mês.'],
      ['rzadko', 'raramente', '', '*Rzadko* gotuję w tygodniu.', 'Raramente cozinho durante a semana.'],
    ]},
  ],
  grammar: [
    { t: 'Onde? O caso locativo', h: `
      <p>Depois de <b>w</b> e <b>na</b> respondendo "onde?", o substantivo vai para o <b>locativo</b>. Você já usou alguns prontos (w szkole, na uniwersytecie). Agora, o padrão:</p>
      <table><tr><th>Nominativo</th><th>Locativo</th><th>Regra</th></tr>
      <tr><td>sklep</td><td>w sklep<b>ie</b></td><td rowspan="2">masc./neutro: <b>-e</b>, amolecendo a consoante (t → ci, d → dzi, r → rz)</td></tr>
      <tr><td>supermarket</td><td>w supermarke<b>cie</b></td></tr>
      <tr><td>targ, kiosk</td><td>na targ<b>u</b>, w kiosk<b>u</b></td><td>depois de k, g, ch: <b>-u</b></td></tr>
      <tr><td>poczta, apteka</td><td>na pocz<b>cie</b>, w apte<b>ce</b></td><td>feminino: <b>-e</b> com amolecimento (k → c)</td></tr>
      <tr><td>piekarnia, kasa</td><td>w piekarn<b>i</b>, przy kas<b>ie</b></td><td>feminino em -ia: <b>-i</b></td></tr>
      <tr><td>centrum</td><td>w centrum</td><td>não muda</td></tr></table>
      <p class="tip">Os adjetivos terminam em <b>-ym</b> (masc./neutro) e <b>-ej</b> (fem.): <i>w sklepie spożywczym</i>, <i>w szkole językowej</i>.</p>` },
    { t: 'Aonde? × Onde?', h: `
      <table><tr><th>Aonde? (movimento)</th><th>Onde? (lugar)</th></tr>
      <tr><td><i>Idę do sklepu.</i> (do + genitivo)</td><td><i>Jestem w sklepie.</i> (w + locativo)</td></tr>
      <tr><td><i>Idę do piekarni.</i></td><td><i>Jestem w piekarni.</i></td></tr>
      <tr><td><i>Idę na targ.</i> (na + acusativo)</td><td><i>Jestem na targu.</i> (na + locativo)</td></tr>
      <tr><td><i>Idę na pocztę.</i></td><td><i>Jestem na poczcie.</i></td></tr></table>` },
    { t: 'Este, esta, estes: pedindo na loja', h: `
      <p>Com <b>poproszę</b> (acusativo), o demonstrativo muda no feminino: <b>ta → tę</b>.</p>
      <p><i>Poproszę ten szalik.</i> · <i>Poproszę tę czapkę.</i> · <i>Poproszę te rękawiczki.</i></p>
      <p>Perguntando o preço: <i>Ile kosztuje ten pasek?</i> · <i>Ile kosztują te kolczyki?</i> (plural → kosztują).</p>` },
    { t: 'Com que frequência?', h: `
      <p><i>codziennie</i> (todo dia) → <i>często</i> (frequentemente) → <i>raz w tygodniu</i> → <i>dwa razy w miesiącu</i> → <i>czasem</i> (às vezes) → <i>rzadko</i> (raramente) → <i>nigdy nie</i> (nunca).</p>
      <p class="tip">Lembre do A1: <b>nigdy</b> exige <b>nie</b> antes do verbo: <i>Nigdy nie prasuję.</i></p>` },
  ],
  checks: [
    ['Kupuję chleb w ___. (piekarnia)', ['piekarnia', 'piekarni', 'piekarnię'], 1, 'Locativo de -ia: piekarni.'],
    ['Idę do ___. (sklep)', ['sklep', 'sklepu', 'sklepie'], 1, 'do + genitivo: sklepu.'],
    ['W sobotę robię zakupy na ___. (targ)', ['targ', 'targu', 'targa'], 1, 'Depois de g: locativo em -u.'],
    ['Poproszę ___ czapkę.', ['ta', 'tę', 'ten'], 1, 'Feminino no acusativo: tę.'],
  ],
  dialogue: { t: 'Um presente para a mãe', l: [
    ['Lucas', 'Ola, gdzie zwykle robisz zakupy?', 'Ola, onde você costuma fazer compras?'],
    ['Ola', 'Warzywa kupuję na targu, a chleb w piekarni obok domu. Dlaczego pytasz?', 'Compro verdura na feira e pão na padaria ao lado de casa. Por que a pergunta?'],
    ['Lucas', 'Muszę kupić prezent dla mamy. Może coś w centrum handlowym?', 'Preciso comprar um presente para minha mãe. Talvez algo no shopping?'],
    ['Ola', 'Dobry pomysł. Co ona lubi? Kolczyki?', 'Boa ideia. Do que ela gosta? Brincos?'],
    ['Lucas', 'Nie nosi kolczyków. Może szalik albo torebkę?', 'Ela não usa brincos. Talvez um cachecol ou uma bolsa?'],
    ['Sprzedawczyni', 'Dzień dobry, w czym mogę pomóc?', 'Bom dia, posso ajudar?'],
    ['Lucas', 'Szukam prezentu dla mamy. Ile kosztuje ten szalik?', 'Procuro um presente para minha mãe. Quanto custa este cachecol?'],
    ['Sprzedawczyni', 'Jest teraz w promocji. Jest z wełny, bardzo ciepły.', 'Está em promoção agora. É de lã, bem quentinho.'],
    ['Ola', 'Jest piękny! Twoja mama będzie zadowolona.', 'É lindo! Sua mãe vai ficar contente.'],
    ['Lucas', 'Dobrze, poproszę ten szalik. Mogę płacić kartą?', 'Certo, vou levar este cachecol. Posso pagar com cartão?'],
    ['Sprzedawczyni', 'Oczywiście. Proszę, oto paragon.', 'Claro. Aqui está o recibo.'],
    ['Lucas', 'Dziękuję! Teraz muszę wracać do domu: sprzątać, prać i odkurzać.', 'Obrigado! Agora tenho que voltar para casa: arrumar, lavar roupa e passar aspirador.'],
    ['Ola', 'Wszystko w sobotę? Ja sprzątam raz w tygodniu, w niedzielę!', 'Tudo no sábado? Eu limpo uma vez por semana, no domingo!'],
  ]},
  fill: [
    ['Jestem w ___. (sklep)', 'sklepie', 'Estou na loja.'],
    ['Idę na ___. (poczta)', 'pocztę', 'Vou ao correio.'],
    ['Mieszkam blisko ___. (piekarnia)', 'piekarni', 'Moro perto da padaria.'],
    ['Odkurzam raz w ___.', 'tygodniu', 'Passo aspirador uma vez por semana.'],
    ['Kto dziś zmywa ___?', 'naczynia', 'Quem lava a louça hoje?'],
    ['Mogę płacić ___? (cartão)', 'kartą', 'Posso pagar com cartão?'],
  ],
  order: [
    ['Chleb kupuję w piekarni obok domu.', 'Compro pão na padaria ao lado de casa.'],
    ['W sobotę robię zakupy na targu.', 'No sábado faço compras na feira.'],
    ['Poproszę tę czapkę.', 'Vou levar este gorro.'],
    ['Ile kosztują te rękawiczki?', 'Quanto custam estas luvas?'],
    ['Sprzątam mieszkanie raz w tygodniu.', 'Arrumo o apartamento uma vez por semana.'],
  ],
  write: {
    p: 'Conte onde você costuma comprar cada coisa (comida, pão, roupa, acessórios), qual acessório você sempre usa e como as tarefas de casa são divididas na sua casa, dizendo com que frequência cada uma é feita.',
    c: ['Três lugares com w / na + locativo', 'Uma frase com do + genitivo (idę do…)', 'Dois acessórios', 'Três tarefas com frequência (raz w tygodniu…)'],
    min: 85,
  },
});

COURSE.add('a2', {
  n: 8, gl: ['Ś', 'świeży', 'ś é um "ch" bem macio, com a língua encostada no céu da boca'],
  pl: 'Sos jest bez smaku', pt: 'No restaurante, sabores e na cozinha',
  busuu: ['At the restaurant', 'The sauce is bland.', 'In the kitchen'],
  goals: ['Reservar, pedir e pedir a conta', 'Descrever sabores e reclamar com educação: za słony', 'Nomear utensílios e verbos de cozinha', 'Dar instruções de receita: pokrój, dodaj, wymieszaj'],
  vocab: [
    { g: 'No restaurante', w: [
      ['stolik', 'mesa (de restaurante)', '', 'Czy jest wolny *stolik* dla dwóch osób?', 'Tem uma mesa livre para duas pessoas?'],
      ['rezerwacja', 'reserva', '', 'Mam *rezerwację* na nazwisko Silva.', 'Tenho uma reserva no nome Silva.'],
      ['karta', 'cardápio', 'também: menu', 'Poproszę *kartę*.', 'O cardápio, por favor.'],
      ['przystawka', 'entrada', '', 'Na *przystawkę* biorę żurek.', 'De entrada vou de żurek.'],
      ['danie główne', 'prato principal', '', 'Jakie jest *danie główne* dnia?', 'Qual é o prato principal do dia?'],
      ['deser', 'sobremesa', '', 'Na *deser* jest sernik.', 'De sobremesa tem cheesecake.'],
      ['Co pan poleca?', 'O que o senhor recomenda?', 'a uma mulher: Co pani poleca?', '*Co pan poleca* na obiad?', 'O que o senhor recomenda para o almoço?'],
      ['Dla mnie…', 'Para mim…', '', '*Dla mnie* pierogi ruskie, proszę.', 'Para mim pierogi ruskie, por favor.'],
      ['Smacznego!', 'Bom apetite!', '', '*Smacznego!* — Dziękuję, nawzajem.', 'Bom apetite! — Obrigado, igualmente.'],
      ['rachunek', 'conta', '', 'Poproszę *rachunek*.', 'A conta, por favor.'],
      ['napiwek', 'gorjeta', '', 'Zostawiam *napiwek* na stole.', 'Deixo a gorjeta na mesa.'],
    ]},
    { g: 'Sabores', w: [
      ['smak', 'sabor', '', 'Ta zupa ma dziwny *smak*.', 'Esta sopa tem um gosto estranho.'],
      ['pyszny', 'delicioso', '', 'Ten żurek jest *pyszny*!', 'Este żurek está delicioso!'],
      ['słony', 'salgado', '', 'Zupa jest za *słona*.', 'A sopa está salgada demais.'],
      ['słodki', 'doce', '', 'Deser jest bardzo *słodki*.', 'A sobremesa é muito doce.'],
      ['ostry', 'picante', 'também: afiado', 'Lubię *ostre* jedzenie.', 'Gosto de comida picante.'],
      ['kwaśny', 'azedo', '', 'Ogórki kiszone są *kwaśne*.', 'Os pepinos em conserva são azedos.'],
      ['bez smaku', 'sem gosto, insosso', 'também: mdły', 'Sos jest *bez smaku*.', 'O molho está sem gosto.'],
      ['za', 'demais (antes de adjetivo)', '', 'Mięso jest *za* suche.', 'A carne está seca demais.'],
      ['zimny / gorący', 'frio / quente', '', 'Zupa jest *zimna*!', 'A sopa está fria!'],
      ['świeży', 'fresco', '', 'Czy ryba jest *świeża*?', 'O peixe está fresco?'],
    ]},
    { g: 'Na cozinha', w: [
      ['garnek', 'panela', '', 'Woda gotuje się w *garnku*.', 'A água está fervendo na panela.'],
      ['patelnia', 'frigideira', '', 'Smażę jajka na *patelni*.', 'Frito ovos na frigideira.'],
      ['nóż', 'faca', '', 'Ten *nóż* jest bardzo ostry.', 'Esta faca é muito afiada.'],
      ['piekarnik', 'forno', '', 'Ciasto jest w *piekarniku*.', 'O bolo está no forno.'],
      ['kroić', 'cortar', 'perfectivo: pokroić', '*Kroję* warzywa na sałatkę.', 'Corto legumes para a salada.'],
      ['gotować', 'cozinhar; ferver', '', '*Gotuję* ziemniaki.', 'Cozinho batatas.'],
      ['smażyć', 'fritar', '', '*Smażę* kotlety.', 'Frito costeletas.'],
      ['piec', 'assar', 'piekę, pieczesz, piecze…', 'Babcia *piecze* ciasto.', 'A avó assa um bolo.'],
      ['dodać', 'acrescentar', 'dodaj!', '*Dodaj* sól i pieprz.', 'Acrescente sal e pimenta.'],
      ['wymieszać', 'misturar', 'wymieszaj!', '*Wymieszaj* wszystko.', 'Misture tudo.'],
      ['sól / pieprz', 'sal / pimenta-do-reino', '', 'Podaj mi *sól*, proszę.', 'Me passa o sal, por favor.'],
    ]},
  ],
  grammar: [
    { t: 'Pedindo no restaurante', h: `
      <p><b>Poproszę + acusativo:</b> <i>Poproszę zupę.</i> <i>Poproszę kartę.</i></p>
      <p><b>Dla mnie + nominativo:</b> <i>Dla mnie żurek i pierogi.</i></p>
      <p><b>Na + acusativo</b> para a etapa da refeição: <i>na przystawkę</i>, <i>na danie główne</i>, <i>na deser</i>: <i>Na deser poproszę szarlotkę.</i></p>` },
    { t: '"za" = demais', h: `
      <p><b>za + adjetivo</b> quer dizer <em>demais</em>, e o adjetivo concorda com a comida:</p>
      <p><i>Zupa jest za słona.</i> · <i>Kotlet jest za suchy.</i> · <i>Pierogi są za zimne.</i></p>
      <p>Para reclamar com educação: <i>Przepraszam, ale zupa jest trochę za zimna. Czy można ją podgrzać?</i> <em>(Desculpe, mas a sopa está um pouco fria. Dá para esquentá-la?)</em></p>
      <p class="tip">Não confunda com <b>bardzo</b> (muito): <i>bardzo słony</i> é só "bem salgado"; <i>za słony</i> já é um problema.</p>` },
    { t: 'Com e sem: z / bez', h: `
      <p><b>z + instrumental</b> (A1): <i>kawa z mlekiem</i>, <i>schabowy z ziemniakami</i>.</p>
      <p><b>bez + genitivo:</b> <i>herbata bez cukru</i>, <i>pierogi bez mięsa</i>, <i>zupa bez soli</i>.</p>` },
    { t: 'Receitas: comandos', h: `
      <p>Em receitas, os comandos são perfectivos (resultado):</p>
      <table><tr><th>Infinitivo</th><th>Para "você"</th></tr>
      <tr><td>pokroić</td><td>pokrój</td></tr>
      <tr><td>dodać</td><td>dodaj</td></tr>
      <tr><td>wymieszać</td><td>wymieszaj</td></tr>
      <tr><td>ugotować</td><td>ugotuj</td></tr>
      <tr><td>usmażyć</td><td>usmaż</td></tr>
      <tr><td>upiec</td><td>upiecz</td></tr></table>
      <p><i>Najpierw pokrój cebulę. Potem usmaż ją na patelni i dodaj sól.</i></p>
      <p class="tip">Livros de receita costumam usar o próprio infinitivo: <i>Pokroić cebulę. Dodać sól.</i></p>` },
  ],
  checks: [
    ['Zupa jest ___ słona. (demais)', ['za', 'bardzo', 'bez'], 0, '"Demais" = za.'],
    ['Na deser poproszę ___. (szarlotka)', ['szarlotka', 'szarlotkę', 'szarlotki'], 1, 'poproszę + acusativo: -a → -ę.'],
    ['Poproszę pierogi bez ___. (mięso)', ['mięso', 'mięsa', 'mięsem'], 1, 'bez + genitivo: mięsa.'],
    ['Najpierw ___ cebulę. (cortar, ty)', ['pokrój', 'pokroić', 'kroję'], 0, 'Comando para "você": pokrój.'],
  ],
  dialogue: { t: 'Jantar fora', l: [
    ['Kelner', 'Dobry wieczór. Mają państwo rezerwację?', 'Boa noite. Vocês têm reserva?'],
    ['Lucas', 'Tak, na nazwisko Silva, dla dwóch osób.', 'Sim, no nome Silva, para duas pessoas.'],
    ['Kelner', 'Zapraszam. Oto karta.', 'Por aqui. Aqui está o cardápio.'],
    ['Ola', 'Co pan poleca?', 'O que o senhor recomenda?'],
    ['Kelner', 'Dziś polecam żurek na przystawkę, a na danie główne kotlet schabowy albo pierogi ruskie.', 'Hoje recomendo żurek de entrada e, de prato principal, costeleta de porco ou pierogi ruskie.'],
    ['Ola', 'Dla mnie żurek i pierogi ruskie.', 'Para mim żurek e pierogi ruskie.'],
    ['Lucas', 'A ja poproszę kotlet schabowy z ziemniakami i surówką.', 'E eu vou querer a costeleta com batatas e salada.'],
    ['Ola', 'Lucas, jak twój kotlet?', 'Lucas, como está sua costeleta?'],
    ['Lucas', 'Pyszny! Ale ziemniaki są trochę bez smaku. A żurek?', 'Deliciosa! Mas as batatas estão meio sem gosto. E o żurek?'],
    ['Ola', 'Żurek jest świetny, ale pierogi są za słone… i trochę zimne.', 'O żurek está ótimo, mas os pierogi estão salgados demais… e um pouco frios.'],
    ['Lucas', 'Przepraszam pana! Pierogi są zimne. Czy można je podgrzać?', 'Com licença! Os pierogi estão frios. Dá para esquentá-los?'],
    ['Kelner', 'Oczywiście, bardzo przepraszam. Za chwilę.', 'Claro, peço desculpas. Só um momento.'],
    ['Ola', 'A na deser poproszę sernik. Potem rachunek, proszę.', 'E de sobremesa vou querer cheesecake. Depois a conta, por favor.'],
  ]},
  fill: [
    ['Zupa jest ___ słona. (demais)', 'za', 'A sopa está salgada demais.'],
    ['Na deser poproszę ___. (sernik)', 'sernik', 'De sobremesa vou querer cheesecake.'],
    ['Herbata bez ___, proszę. (cukier)', 'cukru', 'Chá sem açúcar, por favor.'],
    ['___ sól i pieprz. (dodać, ty)', 'Dodaj', 'Acrescente sal e pimenta.'],
    ['Przepraszam, poproszę ___. (conta)', 'rachunek', 'Com licença, a conta, por favor.'],
    ['Babcia ___ ciasto w piekarniku. (piec)', 'piecze', 'A avó assa o bolo no forno.'],
  ],
  order: [
    ['Co pan poleca na danie główne?', 'O que o senhor recomenda de prato principal?'],
    ['Dla mnie żurek i pierogi.', 'Para mim żurek e pierogi.'],
    ['Przepraszam, ale zupa jest za zimna.', 'Desculpe, mas a sopa está fria demais.'],
    ['Pokrój cebulę i dodaj sól.', 'Corte a cebola e acrescente sal.'],
    ['Poproszę rachunek.', 'A conta, por favor.'],
  ],
  write: {
    p: 'Escreva uma resenha de um restaurante, real ou inventado: o que você pediu, como estava cada prato (sabor, temperatura), uma reclamação educada e se você voltaria. No fim, explique em três passos como preparar um prato simples.',
    c: ['Pedido com poproszę / dla mnie', 'Três adjetivos de sabor', 'Uma reclamação com za + adjetivo', 'Três passos de receita (pokrój, dodaj, wymieszaj…)'],
    min: 90,
  },
});
