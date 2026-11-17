/* Polonês A2 — capítulos 1 e 2 (Busuu A2, cap. 1).
   Palavras: [pl, pt, nota, exemplo_pl, exemplo_pt] — o *asterisco* marca a palavra no exemplo. */
COURSE.add('a2', {
  n: 1, gl: ['Dz', 'dziadek', 'dz é um som só, como em "adze": "djia-dek" com d suave'],
  pl: 'Rodzina się powiększa', pt: 'Família ampliada, relações e o genitivo',
  busuu: ['The family grows', 'Relationships'],
  goals: ['Nomear avós, tios, primos e parentes por casamento', 'Contar notícias da família (casamento, bebê)', 'Dizer "de quem" com o genitivo: dom babci', 'Falar de amizades e relacionamentos'],
  vocab: [
    { g: 'Família ampliada', w: [
      ['dziadek', 'avô', '', 'Mój *dziadek* mieszka na wsi.', 'Meu avô mora no campo.'],
      ['babcia', 'avó', '', 'W niedzielę *babcia* robi pierogi.', 'No domingo a avó faz pierogi.'],
      ['dziadkowie', 'avós', 'plural', '*Dziadkowie* mieszkają w Krakowie.', 'Os avós moram em Cracóvia.'],
      ['wnuk / wnuczka', 'neto / neta', '', 'Pani Nowak ma jedną *wnuczkę*.', 'A senhora Nowak tem uma neta.'],
      ['ciocia', 'tia', 'informal; formal: ciotka', '*Ciocia* Ewa jest bardzo miła.', 'A tia Ewa é muito simpática.'],
      ['wujek', 'tio', '', 'Mój *wujek* pracuje w Niemczech.', 'Meu tio trabalha na Alemanha.'],
      ['kuzyn / kuzynka', 'primo / prima', '', 'Moja *kuzynka* studiuje w Warszawie.', 'Minha prima estuda em Varsóvia.'],
      ['teść / teściowa', 'sogro / sogra', '', 'Moja *teściowa* świetnie gotuje.', 'Minha sogra cozinha muito bem.'],
      ['szwagier / szwagierka', 'cunhado / cunhada', '', 'Mój *szwagier* jest lekarzem.', 'Meu cunhado é médico.'],
      ['rodzeństwo', 'irmãos (o conjunto)', 'singular em polonês', 'Masz *rodzeństwo*? — Tak, brata i siostrę.', 'Você tem irmãos? — Sim, um irmão e uma irmã.'],
      ['jedynak / jedynaczka', 'filho único / filha única', '', 'Jestem *jedynakiem*.', 'Sou filho único.'],
    ]},
    { g: 'Notícias e ocasiões', w: [
      ['ślub', 'casamento (a cerimônia)', '', '*Ślub* mojego brata jest w sobotę.', 'O casamento do meu irmão é no sábado.'],
      ['wesele', 'festa de casamento', '', 'Polskie *wesele* często trwa dwa dni.', 'A festa de casamento polonesa muitas vezes dura dois dias.'],
      ['w ciąży', 'grávida', '', 'Moja siostra jest *w ciąży*!', 'Minha irmã está grávida!'],
      ['dziecko', 'criança, filho', 'plural: dzieci', 'To jest ich pierwsze *dziecko*.', 'É o primeiro filho deles.'],
      ['urodziny', 'aniversário (de nascimento)', 'só plural', 'Jutro są *urodziny* babci.', 'Amanhã é o aniversário da avó.'],
      ['rocznica', 'aniversário (de data)', '', 'Dziś jest nasza *rocznica* ślubu.', 'Hoje é nosso aniversário de casamento.'],
      ['Gratulacje!', 'Parabéns!', 'por uma conquista ou notícia', 'Będziesz tatą? *Gratulacje!*', 'Você vai ser pai? Parabéns!'],
    ]},
    { g: 'Relações', w: [
      ['chłopak / dziewczyna', 'namorado / namorada', 'também "rapaz / moça"', 'Mój *chłopak* jest Polakiem.', 'Meu namorado é polonês.'],
      ['narzeczony / narzeczona', 'noivo / noiva', '', 'To jest mój *narzeczony*, Tomek.', 'Este é meu noivo, Tomek.'],
      ['para', 'casal', '', 'Ania i Piotr to fajna *para*.', 'Ania e Piotr são um casal legal.'],
      ['przyjaciel / przyjaciółka', 'amigo / amiga (próximo)', 'kolega = colega, conhecido', 'Ola to moja najlepsza *przyjaciółka*.', 'A Ola é minha melhor amiga.'],
      ['znajomy / znajoma', 'conhecido / conhecida', '', 'To tylko *znajomy* z pracy.', 'É só um conhecido do trabalho.'],
      ['kochać', 'amar', '', '*Kocham* moją rodzinę.', 'Amo minha família.'],
      ['lubić się', 'gostar um do outro', '', 'Bardzo się *lubimy*.', 'Gostamos muito um do outro.'],
      ['kłócić się', 'brigar, discutir', '', 'Czasem się *kłócimy*, ale to normalne.', 'Às vezes brigamos, mas é normal.'],
      ['rozumieć się', 'entender-se', '', '*Rozumiemy się* bez słów.', 'Nós nos entendemos sem palavras.'],
      ['ufać', 'confiar', 'pede dativo: ufam mamie', '*Ufam* mojej siostrze.', 'Confio na minha irmã.'],
      ['razem', 'juntos', '', 'Są *razem* od dawna.', 'Estão juntos há muito tempo.'],
    ]},
  ],
  grammar: [
    { t: 'Genitivo: "de quem é"', h: `
      <p>Em português dizemos <em>a casa da avó</em>. Em polonês o dono vem <b>depois</b>, no caso genitivo, e sem preposição: <i>dom babci</i>.</p>
      <table><tr><th>Gênero</th><th>Nominativo</th><th>Genitivo</th><th>Exemplo</th></tr>
      <tr><td>Masculino</td><td>brat, dziadek, wujek</td><td>brat<b>a</b>, dziadk<b>a</b>, wujk<b>a</b></td><td><i>samochód brata</i></td></tr>
      <tr><td>Feminino</td><td>mama, siostra</td><td>mam<b>y</b>, siostr<b>y</b></td><td><i>pokój siostry</i></td></tr>
      <tr><td>Feminino (-ia, -ka, -ga)</td><td>babcia, ciocia, córka</td><td>babc<b>i</b>, cioc<b>i</b>, córk<b>i</b></td><td><i>pies cioci</i></td></tr>
      <tr><td>Neutro</td><td>dziecko</td><td>dzieck<b>a</b></td><td><i>pokój dziecka</i></td></tr></table>
      <p class="tip">O "e" de dziad<b>e</b>k e wuj<b>e</b>k cai quando entra a terminação: dziadka, wujka. É o chamado "e móvel".</p>` },
    { t: 'Possessivos no genitivo', h: `
      <p>O possessivo acompanha: <b>mojego</b> para masculino e neutro, <b>mojej</b> para feminino. O mesmo com twój → twojego / twojej.</p>
      <p><i>Żona mojego brata to moja bratowa.</i> <em>(A esposa do meu irmão é minha cunhada.)</em></p>
      <p><i>Siostra mojej mamy to moja ciocia.</i> <em>(A irmã da minha mãe é minha tia.)</em></p>
      <p><i>Gdzie jest dom twojej babci?</i></p>` },
    { t: '"Nie mam" pede genitivo', h: `
      <p>Com <b>mam</b> usamos acusativo; com <b>nie mam</b>, o objeto passa para o genitivo:</p>
      <table><tr><th>Mam…</th><th>Nie mam…</th></tr>
      <tr><td>Mam brata.</td><td><i>Nie mam brata.</i></td></tr>
      <tr><td>Mam siostrę.</td><td><i>Nie mam siostry.</i></td></tr>
      <tr><td>Mam dziecko.</td><td><i>Nie mam dziecka.</i></td></tr></table>
      <p>Para "nem…nem" use <b>ani</b>: <i>Nie mam brata ani siostry.</i></p>` },
    { t: 'Verbos com "się": um ao outro', h: `
      <p>Com sujeito no plural, <b>się</b> muitas vezes significa <em>um ao outro</em>: <i>lubimy się</i> (gostamos um do outro), <i>kłócimy się</i>, <i>rozumiemy się</i>.</p>
      <p class="tip">O "się" não gosta de ficar no fim nem no começo da frase; costuma vir logo depois da primeira palavra: <i>Bardzo się lubimy.</i></p>` },
  ],
  checks: [
    ['To jest dom ___. (babcia)', ['babcia', 'babci', 'babcię'], 1, 'Genitivo feminino em -ia: babcia → babci.'],
    ['Nie mam ___. (brat)', ['brat', 'brata', 'bratem'], 1, 'Depois de "nie mam" vem genitivo: brat → brata.'],
    ['Żona ___ brata to moja bratowa.', ['mój', 'mojego', 'mojej'], 1, 'Masculino no genitivo: mojego.'],
    ['Siostra ___ mamy to moja ciocia.', ['mojej', 'mojego', 'moja'], 0, 'Feminino no genitivo: mojej.'],
  ],
  dialogue: { t: 'Uma notícia em família', l: [
    ['Ola', 'Lucas, mam wielką wiadomość! Moja siostra jest w ciąży!', 'Lucas, tenho uma grande notícia! Minha irmã está grávida!'],
    ['Lucas', 'Naprawdę? Gratulacje! To pierwsze dziecko?', 'Sério? Parabéns! É o primeiro filho?'],
    ['Ola', 'Tak! Moja mama już kupuje ubranka.', 'Sim! Minha mãe já está comprando roupinhas.'],
    ['Lucas', 'A ślub twojego brata? Też w tym roku?', 'E o casamento do seu irmão? Também este ano?'],
    ['Ola', 'Tak, w sobotę za miesiąc. To bardzo ważny rok dla mojej rodziny.', 'Sim, daqui a um mês, num sábado. É um ano muito importante para minha família.'],
    ['Lucas', 'Twój brat ma narzeczoną? Nic o tym nie wiem!', 'Seu irmão tem noiva? Não sei nada disso!'],
    ['Ola', 'Tak, Kasię. Są razem od dawna. To fajna para.', 'Sim, a Kasia. Estão juntos há muito tempo. São um casal legal.'],
    ['Lucas', 'A ty masz dużą rodzinę?', 'E você tem uma família grande?'],
    ['Ola', 'Średnią. Mam brata, siostrę i kuzynkę w Gdańsku. Dziadkowie mieszkają na wsi.', 'Média. Tenho um irmão, uma irmã e uma prima em Gdańsk. Os avós moram no campo.'],
    ['Lucas', 'Ja jestem jedynakiem, ale moja mama ma bardzo dużą rodzinę.', 'Eu sou filho único, mas minha mãe tem uma família muito grande.'],
    ['Ola', 'Lubicie się?', 'Vocês se dão bem?'],
    ['Lucas', 'Tak, bardzo się lubimy. Czasem się kłócimy, ale rozumiemy się dobrze.', 'Sim, gostamos muito uns dos outros. Às vezes brigamos, mas nos entendemos bem.'],
    ['Ola', 'Tak jak w każdej rodzinie!', 'Como em toda família!'],
  ]},
  fill: [
    ['To jest samochód ___. (dziadek)', 'dziadka', 'Este é o carro do avô.'],
    ['Nie mam ___. (siostra)', 'siostry', 'Não tenho irmã.'],
    ['Mąż ___ to mój wujek. (ciocia)', 'cioci', 'O marido da tia é meu tio.'],
    ['To jest pokój ___. (dziecko)', 'dziecka', 'Este é o quarto da criança.'],
    ['Córka ___ siostry to moja siostrzenica. (moja)', 'mojej', 'A filha da minha irmã é minha sobrinha.'],
    ['Bardzo ___ lubimy.', 'się', 'Gostamos muito um do outro.'],
  ],
  order: [
    ['Moja siostra jest w ciąży.', 'Minha irmã está grávida.'],
    ['Ślub mojego brata jest w sobotę.', 'O casamento do meu irmão é no sábado.'],
    ['Nie mam brata ani siostry.', 'Não tenho irmão nem irmã.'],
    ['Dziadkowie mieszkają na wsi.', 'Os avós moram no campo.'],
    ['Czasem się kłócimy, ale bardzo się lubimy.', 'Às vezes brigamos, mas gostamos muito um do outro.'],
  ],
  write: {
    p: 'Apresente sua família ampliada: avós, tios, primos, parentes por casamento. Diga quem é quem usando o genitivo (siostra mojej mamy…), conte uma notícia recente da família (casamento, bebê, aniversário) e como vocês se dão.',
    c: ['Pelo menos 3 parentes com o genitivo (brat mojego taty…)', 'Uma frase com "nie mam" + genitivo', 'Uma notícia da família', 'Uma frase sobre a relação (lubimy się, kłócimy się…)'],
    min: 70,
  },
});

COURSE.add('a2', {
  n: 2, gl: ['Ch', 'chcieć', 'ch e h soam igual: um "rr" aspirado, como no carioca "carro"'],
  pl: 'Masz czas w sobotę?', pt: 'Fazer planos: chcieć, móc, musieć e horários',
  busuu: ['Developing fluency', 'Making plans'],
  goals: ['Convidar, aceitar e recusar com educação', 'Usar chcieć, móc e musieć + infinitivo', 'Marcar horário: o siódmej, o ósmej…', 'Ganhar fluência com palavras de apoio: wiesz, właściwie…'],
  vocab: [
    { g: 'Combinando', w: [
      ['mieć czas', 'ter tempo', '', '*Masz czas* w sobotę?', 'Você tem tempo no sábado?'],
      ['nie mam czasu', 'não tenho tempo', 'genitivo depois de nie mam', 'Przepraszam, dziś *nie mam czasu*.', 'Desculpe, hoje não tenho tempo.'],
      ['spotkać się', 'encontrar-se', '', 'Chcesz *spotkać się* jutro?', 'Quer se encontrar amanhã?'],
      ['umówić się', 'marcar (um encontro)', '', 'Możemy *umówić się* na kawę?', 'Podemos marcar um café?'],
      ['Może…?', 'Que tal…? / Talvez', '', '*Może* kawa po pracy?', 'Que tal um café depois do trabalho?'],
      ['Chodźmy!', 'Vamos!', '', '*Chodźmy* do kina!', 'Vamos ao cinema!'],
      ['Dobry pomysł!', 'Boa ideia!', '', 'Kino w piątek? *Dobry pomysł!*', 'Cinema na sexta? Boa ideia!'],
      ['niestety', 'infelizmente', '', '*Niestety* w sobotę pracuję.', 'Infelizmente no sábado eu trabalho.'],
      ['Pasuje ci?', 'Fica bom para você?', 'formal: Pasuje panu / pani?', 'Piątek o siódmej, *pasuje ci?*', 'Sexta às sete, fica bom para você?'],
      ['jutro', 'amanhã', '', 'Do zobaczenia *jutro*!', 'Até amanhã!'],
      ['pojutrze', 'depois de amanhã', '', 'Mam egzamin *pojutrze*.', 'Tenho prova depois de amanhã.'],
      ['w weekend', 'no fim de semana', '', 'Co robisz *w weekend*?', 'O que você faz no fim de semana?'],
      ['O której?', 'A que horas?', '', '*O której* jest film?', 'A que horas é o filme?'],
      ['o siódmej', 'às sete', 'ver a lista na gramática', 'Spotkajmy się *o siódmej*.', 'Vamos nos encontrar às sete.'],
    ]},
    { g: 'Querer, poder, ter que', w: [
      ['chcieć', 'querer', 'chcę, chcesz, chce…', '*Chcę* iść do kina.', 'Quero ir ao cinema.'],
      ['móc', 'poder', 'mogę, możesz, może…', 'Nie *mogę* dzisiaj, przepraszam.', 'Não posso hoje, desculpe.'],
      ['musieć', 'ter que, precisar', 'muszę, musisz, musi…', '*Muszę* pracować w sobotę.', 'Tenho que trabalhar no sábado.'],
      ['iść', 'ir (a pé, agora)', 'idę, idziesz, idzie…', 'Wieczorem *idę* na koncert.', 'À noite vou a um show.'],
    ]},
    { g: 'Palavras de fluência', w: [
      ['no więc…', 'então…', 'para começar ou retomar', '*No więc*, co robimy w sobotę?', 'Então, o que fazemos no sábado?'],
      ['wiesz…', 'sabe…', '', '*Wiesz*, nie lubię horrorów.', 'Sabe, não gosto de filmes de terror.'],
      ['właściwie', 'na verdade', '', '*Właściwie* mam czas w niedzielę.', 'Na verdade tenho tempo no domingo.'],
      ['szczerze mówiąc', 'para ser sincero', '', '*Szczerze mówiąc*, wolę teatr.', 'Para ser sincero, prefiro teatro.'],
      ['chodzi o to, że…', 'a questão é que…', '', '*Chodzi o to, że* jestem zmęczony.', 'A questão é que estou cansado.'],
      ['Jak to się mówi…?', 'Como se diz…?', '', '*Jak to się mówi* po polsku?', 'Como se diz isso em polonês?'],
      ['zaraz, zaraz…', 'espera aí…', '', '*Zaraz, zaraz*, w sobotę czy w niedzielę?', 'Espera aí, no sábado ou no domingo?'],
    ]},
  ],
  grammar: [
    { t: 'chcieć, móc, musieć', h: `
      <table><tr><th></th><th>chcieć</th><th>móc</th><th>musieć</th></tr>
      <tr><td>ja</td><td>chcę</td><td>mogę</td><td>muszę</td></tr>
      <tr><td>ty</td><td>chcesz</td><td>możesz</td><td>musisz</td></tr>
      <tr><td>on / ona</td><td>chce</td><td>może</td><td>musi</td></tr>
      <tr><td>my</td><td>chcemy</td><td>możemy</td><td>musimy</td></tr>
      <tr><td>wy</td><td>chcecie</td><td>możecie</td><td>musicie</td></tr>
      <tr><td>oni / one</td><td>chcą</td><td>mogą</td><td>muszą</td></tr></table>
      <p>Os três pedem <b>infinitivo</b> logo depois: <i>Chcę iść do kina, ale nie mogę. Muszę pracować.</i></p>
      <p class="tip"><b>może</b> tem dois sentidos: <em>ele/ela pode</em> e <em>talvez</em>. <i>Może kawa?</i> = Que tal um café?</p>` },
    { t: 'A que horas? o + hora', h: `
      <p>Para horários, use <b>o</b> + o número ordinal no feminino. Aprenda como blocos prontos:</p>
      <table><tr><td>1h</td><td>o pierwszej</td><td>7h</td><td>o siódmej</td></tr>
      <tr><td>2h</td><td>o drugiej</td><td>8h</td><td>o ósmej</td></tr>
      <tr><td>3h</td><td>o trzeciej</td><td>9h</td><td>o dziewiątej</td></tr>
      <tr><td>4h</td><td>o czwartej</td><td>10h</td><td>o dziesiątej</td></tr>
      <tr><td>5h</td><td>o piątej</td><td>11h</td><td>o jedenastej</td></tr>
      <tr><td>6h</td><td>o szóstej</td><td>12h</td><td>o dwunastej</td></tr></table>
      <p><i>Film jest o ósmej.</i> <i>Spotkajmy się o szóstej.</i></p>` },
    { t: 'Propor, aceitar, recusar', h: `
      <p><b>Propor:</b> <i>Może pójdziemy do kina?</i> <em>(Que tal irmos ao cinema?)</em> · <i>Chodźmy na spacer!</i> · <i>Masz czas w piątek?</i></p>
      <p><b>Aceitar:</b> <i>Dobry pomysł!</i> · <i>Chętnie!</i> <em>(Com prazer!)</em> · <i>Pasuje mi.</i></p>
      <p><b>Recusar com motivo:</b> <i>Niestety nie mogę, muszę pracować.</i> · <i>Szczerze mówiąc, nie mam czasu.</i></p>
      <p class="tip">"pójdziemy" é futuro; aqui, guarde como bloco pronto. O futuro aparece no capítulo 9.</p>` },
  ],
  checks: [
    ['Nie ___ dzisiaj, muszę pracować. (móc, ja)', ['mogę', 'może', 'możesz'], 0, 'ja → mogę.'],
    ['Oni ___ iść do kina. (chcieć)', ['chcą', 'chcemy', 'chce'], 0, 'oni → chcą.'],
    ['Ty ___ pracować w sobotę? (musieć)', ['musisz', 'muszę', 'musi'], 0, 'ty → musisz.'],
    ['Film jest ___ siódmej.', ['o', 'w', 'na'], 0, 'Horário: o + ordinal (o siódmej).'],
  ],
  dialogue: { t: 'Combinando o fim de semana', l: [
    ['Lucas', 'Cześć, Ola! Masz czas w weekend?', 'Oi, Ola! Você tem tempo no fim de semana?'],
    ['Ola', 'Hmm… w sobotę niestety nie mogę. Muszę pracować.', 'Hmm… no sábado infelizmente não posso. Tenho que trabalhar.'],
    ['Lucas', 'A w niedzielę? Może pójdziemy do kina?', 'E no domingo? Que tal irmos ao cinema?'],
    ['Ola', 'Dobry pomysł! Jaki film?', 'Boa ideia! Que filme?'],
    ['Lucas', 'Szczerze mówiąc, jeszcze nie wiem. Wiesz, chcę zobaczyć coś polskiego.', 'Para ser sincero, ainda não sei. Sabe, quero ver algo polonês.'],
    ['Ola', 'Właściwie w kinie jest nowa polska komedia.', 'Na verdade tem uma comédia polonesa nova no cinema.'],
    ['Lucas', 'Super! O której?', 'Ótimo! A que horas?'],
    ['Ola', 'Jest seans o szóstej i o ósmej.', 'Tem sessão às seis e às oito.'],
    ['Lucas', 'Zaraz, zaraz… o szóstej mam lekcję gitary. Może o ósmej?', 'Espera aí… às seis tenho aula de violão. Que tal às oito?'],
    ['Ola', 'Pasuje mi. Spotkajmy się przed kinem.', 'Fica bom para mim. Vamos nos encontrar na frente do cinema.'],
    ['Lucas', 'Dobrze. Do zobaczenia w niedzielę!', 'Combinado. Até domingo!'],
  ]},
  fill: [
    ['___ czas w sobotę? (mieć, ty)', 'Masz', 'Você tem tempo no sábado?'],
    ['Nie mogę, ___ pracować. (musieć, ja)', 'muszę', 'Não posso, tenho que trabalhar.'],
    ['My ___ iść na koncert. (chcieć)', 'chcemy', 'Queremos ir a um show.'],
    ['Czy ___ przyjść jutro? (móc, wy)', 'możecie', 'Vocês podem vir amanhã?'],
    ['Spotkajmy się ___ siódmej.', 'o', 'Vamos nos encontrar às sete.'],
    ['Przepraszam, nie mam ___.', 'czasu', 'Desculpe, não tenho tempo.'],
  ],
  order: [
    ['Masz czas w weekend?', 'Você tem tempo no fim de semana?'],
    ['Może pójdziemy do kina?', 'Que tal irmos ao cinema?'],
    ['Niestety w sobotę muszę pracować.', 'Infelizmente no sábado tenho que trabalhar.'],
    ['Szczerze mówiąc, wolę teatr.', 'Para ser sincero, prefiro teatro.'],
    ['Spotkajmy się o siódmej.', 'Vamos nos encontrar às sete.'],
  ],
  write: {
    p: 'Escreva uma mensagem convidando um amigo para algo no fim de semana. Proponha dia e hora, diga o que vocês podem fazer, recuse uma outra opção explicando o motivo e use pelo menos duas palavras de fluência.',
    c: ['chcieć, móc e musieć', 'Um horário com "o + hora"', 'Uma recusa educada (niestety…)', 'Duas palavras como wiesz, właściwie, szczerze mówiąc'],
    min: 70,
  },
});
