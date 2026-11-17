/* Ampliação dos bancos de vocabulário de A2, B1 e B2, rumo às metas de cada nível (A2 ~1500, B1 ~2000-2500 palavras).
   Palavras repetidas são descartadas automaticamente em COURSE.bank. Formato: [polonês, português, gênero/nota]. */
COURSE.bank('a2', [
  { t: 'Casa: cômodos e móveis', pl: 'Dom: pokoje i meble', w: [
    ['salon', 'sala de estar', 'm'], ['sypialnia', 'quarto de dormir', 'f'], ['łazienka', 'banheiro', 'f'], ['przedpokój', 'hall de entrada', 'm'], ['balkon', 'varanda', 'm'], ['piwnica', 'porão', 'f'], ['strych', 'sótão', 'm'], ['garaż', 'garagem', 'm'],
    ['piętro', 'andar', 'n'], ['winda', 'elevador', 'f'], ['schody', 'escada', 'pl'], ['drzwi', 'porta', 'pl'], ['okno', 'janela', 'n'], ['ściana', 'parede', 'f'], ['podłoga', 'chão, piso', 'f'], ['sufit', 'teto', 'm'],
    ['dach', 'telhado', 'm'], ['klucz', 'chave', 'm'], ['zamek', 'fechadura; castelo', 'm'], ['szafa', 'guarda-roupa', 'f'], ['łóżko', 'cama', 'n'], ['materac', 'colchão', 'm'], ['poduszka', 'travesseiro', 'f'], ['kołdra', 'edredom', 'f'],
    ['koc', 'cobertor', 'm'], ['dywan', 'tapete', 'm'], ['zasłona', 'cortina', 'f'], ['lustro', 'espelho', 'n'], ['półka', 'prateleira', 'f'], ['biurko', 'escrivaninha', 'n'], ['krzesło', 'cadeira', 'n'], ['fotel', 'poltrona', 'm'],
    ['kanapa', 'sofá', 'f'], ['stół', 'mesa', 'm'], ['lampa', 'luminária', 'f'], ['żarówka', 'lâmpada', 'f'], ['gniazdko', 'tomada', 'n'], ['grzejnik', 'aquecedor, radiador', 'm'], ['pralka', 'máquina de lavar', 'f'], ['lodówka', 'geladeira', 'f'],
    ['kuchenka', 'fogão fogareiro', 'f'], ['piekarnik', 'forno', 'm'], ['zlew', 'pia', 'm'], ['wanna', 'banheira', 'f'], ['prysznic', 'chuveiro', 'm'], ['ręcznik', 'toalha', 'm'], ['mydło', 'sabonete', 'n'], ['szczoteczka do zębów', 'escova de dentes', 'f'],
  ]},
  { t: 'Cozinha e mesa', pl: 'Kuchnia i stół', w: [
    ['talerz', 'prato', 'm'], ['szklanka', 'copo', 'f'], ['kubek', 'caneca', 'm'], ['filiżanka', 'xícara', 'f'], ['widelec', 'garfo', 'm'], ['nóż', 'faca', 'm'], ['łyżka', 'colher', 'f'], ['łyżeczka', 'colher de chá', 'f'],
    ['miska', 'tigela', 'f'], ['garnek', 'panela', 'm'], ['patelnia', 'frigideira', 'f'], ['czajnik', 'chaleira', 'm'], ['obrus', 'toalha de mesa', 'm'], ['serwetka', 'guardanapo', 'f'], ['butelka', 'garrafa', 'f'], ['słoik', 'pote de vidro', 'm'],
    ['śniadanie', 'café da manhã', 'n'], ['obiad', 'almoço', 'm'], ['kolacja', 'jantar', 'f'], ['przekąska', 'lanche, petisco', 'f'], ['deser', 'sobremesa', 'm'], ['przepis', 'receita', 'm'], ['składnik', 'ingrediente', 'm'], ['smaczny', 'saboroso'],
    ['gotować', 'cozinhar'], ['smażyć', 'fritar'], ['piec', 'assar'], ['kroić', 'cortar (alimento)'], ['mieszać', 'misturar'], ['nakryć do stołu', 'pôr a mesa'], ['zmywać naczynia', 'lavar a louça'], ['sprzątać', 'limpar, arrumar'],
  ]},
  { t: 'Frutas, legumes e carnes', pl: 'Owoce, warzywa i mięso', w: [
    ['jabłko', 'maçã', 'n'], ['gruszka', 'pera', 'f'], ['śliwka', 'ameixa', 'f'], ['wiśnia', 'cereja ácida', 'f'], ['truskawka', 'morango', 'f'], ['malina', 'framboesa', 'f'], ['borówka', 'mirtilo', 'f'], ['winogrona', 'uvas', 'pl'],
    ['cytryna', 'limão', 'f'], ['pomarańcza', 'laranja', 'f'], ['banan', 'banana', 'm'], ['arbuz', 'melancia', 'm'], ['ziemniak', 'batata', 'm'], ['marchewka', 'cenoura', 'f'], ['cebula', 'cebola', 'f'], ['czosnek', 'alho', 'm'],
    ['pomidor', 'tomate', 'm'], ['ogórek', 'pepino', 'm'], ['sałata', 'alface, salada', 'f'], ['kapusta', 'repolho', 'f'], ['papryka', 'pimentão', 'f'], ['grzyby', 'cogumelos', 'pl'], ['fasola', 'feijão', 'f'], ['groch', 'ervilha', 'm'],
    ['kurczak', 'frango', 'm'], ['wieprzowina', 'carne de porco', 'f'], ['wołowina', 'carne bovina', 'f'], ['kiełbasa', 'linguiça', 'f'], ['szynka', 'presunto', 'f'], ['ryż', 'arroz', 'm'], ['makaron', 'macarrão', 'm'], ['mąka', 'farinha', 'f'],
    ['cukier', 'açúcar', 'm'], ['sól', 'sal', 'f'], ['pieprz', 'pimenta-do-reino', 'm'], ['olej', 'óleo', 'm'], ['masło', 'manteiga', 'n'], ['ser', 'queijo', 'm'], ['jajko', 'ovo', 'n'], ['miód', 'mel', 'm'],
  ]},
  { t: 'Transporte e cidade', pl: 'Transport i miasto', w: [
    ['autobus', 'ônibus', 'm'], ['tramwaj', 'bonde, VLT', 'm'], ['metro', 'metrô', 'n'], ['pociąg', 'trem', 'm'], ['samolot', 'avião', 'm'], ['statek', 'navio', 'm'], ['rower', 'bicicleta', 'm'], ['taksówka', 'táxi', 'f'],
    ['przystanek', 'ponto de ônibus', 'm'], ['dworzec', 'estação', 'm'], ['lotnisko', 'aeroporto', 'n'], ['peron', 'plataforma', 'm'], ['bilet miesięczny', 'passe mensal', 'm'], ['rozkład jazdy', 'horário (de transporte)', 'm'], ['opóźnienie', 'atraso', 'n'], ['skrzyżowanie', 'cruzamento', 'n'],
    ['rondo', 'rotatória', 'n'], ['chodnik', 'calçada', 'm'], ['przejście dla pieszych', 'faixa de pedestres', 'n'], ['światła', 'semáforo; luzes', 'pl'], ['most', 'ponte', 'm'], ['park', 'parque', 'm'], ['plac', 'praça', 'm'], ['ratusz', 'prefeitura', 'm'],
    ['poczta', 'correio', 'f'], ['apteka', 'farmácia', 'f'], ['piekarnia', 'padaria', 'f'], ['księgarnia', 'livraria', 'f'], ['kwiaciarnia', 'floricultura', 'f'], ['posterunek policji', 'delegacia', 'm'], ['szpital', 'hospital', 'm'], ['szkoła', 'escola', 'f'],
  ]},
  { t: 'Corpo e saúde básica', pl: 'Ciało i zdrowie', w: [
    ['głowa', 'cabeça', 'f'], ['twarz', 'rosto', 'f'], ['oko', 'olho', 'n'], ['ucho', 'orelha', 'n'], ['nos', 'nariz', 'm'], ['usta', 'lábios, boca', 'pl'], ['ząb', 'dente', 'm'], ['język', 'língua', 'm'],
    ['szyja', 'pescoço', 'f'], ['ramię', 'braço, ombro', 'n'], ['ręka', 'mão, braço', 'f'], ['palec', 'dedo', 'm'], ['plecy', 'costas', 'pl'], ['brzuch', 'barriga', 'm'], ['noga', 'perna', 'f'], ['kolano', 'joelho', 'n'],
    ['stopa', 'pé', 'f'], ['serce', 'coração', 'n'], ['żołądek', 'estômago', 'm'], ['kaszel', 'tosse', 'm'], ['katar', 'coriza', 'm'], ['gorączka', 'febre', 'f'], ['ból głowy', 'dor de cabeça', 'm'], ['przeziębienie', 'resfriado', 'n'],
    ['grypa', 'gripe', 'f'], ['recepta', 'receita médica', 'f'], ['tabletka', 'comprimido', 'f'], ['lekarz', 'médico', 'm'], ['pielęgniarka', 'enfermeira', 'f'], ['dentysta', 'dentista', 'm'], ['badanie', 'exame', 'n'], ['zdrowy', 'saudável'],
  ]},
  { t: 'Clima e estações', pl: 'Pogoda i pory roku', w: [
    ['wiosna', 'primavera', 'f'], ['lato', 'verão', 'n'], ['jesień', 'outono', 'f'], ['zima', 'inverno', 'f'], ['słońce', 'sol', 'n'], ['chmura', 'nuvem', 'f'], ['deszcz', 'chuva', 'm'], ['śnieg', 'neve', 'm'],
    ['wiatr', 'vento', 'm'], ['burza', 'tempestade', 'f'], ['mgła', 'neblina', 'f'], ['mróz', 'geada, frio intenso', 'm'], ['upał', 'calor intenso', 'm'], ['parasol', 'guarda-chuva', 'm'], ['temperatura', 'temperatura', 'f'], ['prognoza pogody', 'previsão do tempo', 'f'],
    ['padać', 'cair (chuva, neve)'], ['świecić', 'brilhar'], ['wiać', 'soprar (vento)'], ['zachmurzony', 'nublado'], ['pochmurny', 'encoberto'], ['słoneczny', 'ensolarado'], ['mokry', 'molhado'], ['suchy', 'seco'],
  ]},
  { t: 'Profissões e lugares de trabalho', pl: 'Zawody', w: [
    ['nauczyciel', 'professor', 'm'], ['lekarz', 'médico', 'm'], ['inżynier', 'engenheiro', 'm'], ['prawnik', 'advogado, jurista', 'm'], ['kucharz', 'cozinheiro', 'm'], ['kelner', 'garçom', 'm'], ['kierowca', 'motorista', 'm'], ['pilot', 'piloto', 'm'],
    ['policjant', 'policial', 'm'], ['strażak', 'bombeiro', 'm'], ['listonosz', 'carteiro', 'm'], ['murarz', 'pedreiro', 'm'], ['elektryk', 'eletricista', 'm'], ['hydraulik', 'encanador', 'm'], ['sprzedawca', 'vendedor', 'm'], ['księgowy', 'contador', 'm'],
    ['programista', 'programador', 'm'], ['architekt', 'arquiteto', 'm'], ['weterynarz', 'veterinário', 'm'], ['rolnik', 'agricultor', 'm'], ['fotograf', 'fotógrafo', 'm'], ['muzyk', 'músico', 'm'], ['malarz', 'pintor', 'm'], ['pisarz', 'escritor', 'm'],
  ]},
  { t: 'Animais comuns', pl: 'Zwierzęta', w: [
    ['pies', 'cachorro', 'm'], ['kot', 'gato', 'm'], ['koń', 'cavalo', 'm'], ['krowa', 'vaca', 'f'], ['świnia', 'porco', 'f'], ['owca', 'ovelha', 'f'], ['koza', 'cabra', 'f'], ['kura', 'galinha', 'f'],
    ['kaczka', 'pato', 'f'], ['gęś', 'ganso', 'f'], ['królik', 'coelho', 'm'], ['mysz', 'rato', 'f'], ['ptak', 'pássaro', 'm'], ['ryba', 'peixe', 'f'], ['motyl', 'borboleta', 'm'], ['pszczoła', 'abelha', 'f'],
    ['mucha', 'mosca', 'f'], ['pająk', 'aranha', 'm'], ['lis', 'raposa', 'm'], ['zając', 'lebre', 'm'], ['bocian', 'cegonha', 'm'], ['sowa', 'coruja', 'f'], ['sarna', 'corça', 'f'], ['dzik', 'javali', 'm'],
  ]},
  { t: 'Adjetivos e verbos úteis (A2)', pl: 'Przydatne przymiotniki i czasowniki', w: [
    ['ciekawy', 'interessante'], ['nudny', 'chato'], ['trudny', 'difícil'], ['łatwy', 'fácil'], ['ważny', 'importante'], ['wolny', 'devagar; livre'], ['szybki', 'rápido'], ['głośny', 'barulhento'],
    ['cichy', 'silencioso'], ['czysty', 'limpo'], ['brudny', 'sujo'], ['pusty', 'vazio'], ['pełny', 'cheio'], ['ciężki', 'pesado; difícil'], ['lekki', 'leve'], ['gorący', 'quente'],
    ['zimny', 'frio'], ['ciepły', 'morno, quente'], ['drogi', 'caro'], ['tani', 'barato'], ['nowy', 'novo'], ['stary', 'velho'], ['młody', 'jovem'], ['bogaty', 'rico'],
    ['biedny', 'pobre'], ['szczęśliwy', 'feliz'], ['smutny', 'triste'], ['zmęczony', 'cansado'], ['głodny', 'faminto'], ['spragniony', 'com sede'], ['zajęty', 'ocupado'], ['gotowy', 'pronto'],
    ['otwierać', 'abrir'], ['zamykać', 'fechar'], ['zaczynać', 'começar'], ['kończyć', 'terminar'], ['szukać', 'procurar'], ['znajdować', 'encontrar'], ['pożyczać', 'emprestar; pegar emprestado'], ['oddawać', 'devolver'],
    ['zapominać', 'esquecer'], ['pamiętać', 'lembrar'], ['pytać', 'perguntar'], ['odpowiadać', 'responder'], ['czekać', 'esperar'], ['spotykać', 'encontrar (pessoas)'], ['kupować', 'comprar'], ['sprzedawać', 'vender'],
  ]},
], true);

COURSE.bank('b1', [
  { t: 'Verbos do dia a dia (pares de aspecto)', pl: 'Czasowniki codzienne', w: [
    ['budzić się / obudzić się', 'acordar'], ['wstawać / wstać', 'levantar-se'], ['myć się / umyć się', 'lavar-se'], ['ubierać się / ubrać się', 'vestir-se'], ['jeść / zjeść', 'comer'], ['pić / wypić', 'beber'], ['robić / zrobić', 'fazer'], ['pisać / napisać', 'escrever'],
    ['czytać / przeczytać', 'ler'], ['oglądać / obejrzeć', 'assistir, olhar'], ['słuchać / posłuchać', 'ouvir, escutar'], ['kupować / kupić', 'comprar'], ['płacić / zapłacić', 'pagar'], ['brać / wziąć', 'pegar, tomar'], ['dawać / dać', 'dar'], ['mówić / powiedzieć', 'dizer, falar'],
    ['pytać / zapytać', 'perguntar'], ['odpowiadać / odpowiedzieć', 'responder'], ['otwierać / otworzyć', 'abrir'], ['zamykać / zamknąć', 'fechar'], ['zaczynać / zacząć', 'começar'], ['kończyć / skończyć', 'terminar'], ['uczyć się / nauczyć się', 'aprender'], ['rozumieć / zrozumieć', 'entender'],
    ['pamiętać / zapamiętać', 'lembrar, memorizar'], ['zapominać / zapomnieć', 'esquecer'], ['wybierać / wybrać', 'escolher'], ['decydować / zdecydować', 'decidir'], ['próbować / spróbować', 'tentar, provar'], ['pomagać / pomóc', 'ajudar'], ['prosić / poprosić', 'pedir'], ['zapraszać / zaprosić', 'convidar'],
    ['spotykać / spotkać', 'encontrar'], ['czekać / zaczekać', 'esperar'], ['wracać / wrócić', 'voltar'], ['przychodzić / przyjść', 'vir (a pé)'], ['wychodzić / wyjść', 'sair (a pé)'], ['wchodzić / wejść', 'entrar'], ['zostawać / zostać', 'ficar, permanecer'], ['mieszkać / zamieszkać', 'morar'],
    ['myśleć / pomyśleć', 'pensar'], ['czuć / poczuć', 'sentir'], ['lubić / polubić', 'gostar'], ['kochać / pokochać', 'amar'], ['bać się / przestraszyć się', 'ter medo'], ['śmiać się / zaśmiać się', 'rir'], ['płakać / zapłakać', 'chorar'], ['spać / zasnąć', 'dormir / adormecer'],
    ['gotować / ugotować', 'cozinhar'], ['sprzątać / posprzątać', 'limpar, arrumar'], ['naprawiać / naprawić', 'consertar'], ['wyrzucać / wyrzucić', 'jogar fora'], ['zgubić / gubić', 'perder (objeto)'], ['znajdować / znaleźć', 'encontrar (achar)'], ['zmieniać / zmienić', 'mudar, trocar'], ['pokazywać / pokazać', 'mostrar'],
  ]},
  { t: 'Verbos de comunicação e pensamento', pl: 'Mówienie i myślenie', w: [
    ['twierdzić', 'afirmar'], ['zapewniać / zapewnić', 'assegurar'], ['przekonywać / przekonać', 'convencer'], ['namawiać / namówić', 'persuadir, incentivar'], ['radzić / poradzić', 'aconselhar'], ['ostrzegać / ostrzec', 'alertar'], ['obiecywać / obiecać', 'prometer'], ['przepraszać / przeprosić', 'pedir desculpas'],
    ['dziękować / podziękować', 'agradecer'], ['skarżyć się / poskarżyć się', 'reclamar'], ['kłócić się / pokłócić się', 'discutir, brigar'], ['zgadzać się / zgodzić się', 'concordar'], ['sprzeciwiać się', 'opor-se'], ['wyjaśniać / wyjaśnić', 'explicar'], ['opisywać / opisać', 'descrever'], ['opowiadać / opowiedzieć', 'contar, narrar'],
    ['wspominać / wspomnieć', 'mencionar; recordar'], ['plotkować', 'fofocar'], ['żartować / zażartować', 'brincar, fazer piada'], ['milczeć', 'ficar calado'], ['szeptać', 'sussurrar'], ['krzyczeć / krzyknąć', 'gritar'], ['wątpić', 'duvidar'], ['podejrzewać', 'suspeitar'],
    ['przypuszczać', 'supor'], ['zakładać / założyć', 'supor; fundar; vestir'], ['uważać', 'achar; prestar atenção'], ['sądzić', 'julgar, achar'], ['wyobrażać sobie', 'imaginar'], ['zastanawiać się / zastanowić się', 'refletir, ponderar'], ['domyślać się / domyślić się', 'adivinhar, deduzir'], ['oceniać / ocenić', 'avaliar'],
  ]},
  { t: 'Adjetivos de avaliação e caráter', pl: 'Przymiotniki oceny i charakteru', w: [
    ['uprzejmy', 'educado, gentil'], ['grzeczny', 'educado, bem-comportado'], ['niegrzeczny', 'mal-educado'], ['uczciwy', 'honesto'], ['nieuczciwy', 'desonesto'], ['odważny', 'corajoso'], ['tchórzliwy', 'covarde'], ['leniwy', 'preguiçoso'],
    ['pracowity', 'trabalhador'], ['zdolny', 'talentoso, capaz'], ['mądry', 'sábio, inteligente'], ['głupi', 'bobo, burro'], ['skromny', 'modesto'], ['zarozumiały', 'convencido, arrogante'], ['szczery', 'sincero'], ['hojny', 'generoso'],
    ['skąpy', 'sovina'], ['cierpliwy', 'paciente'], ['niecierpliwy', 'impaciente'], ['spokojny', 'calmo'], ['nerwowy', 'nervoso'], ['wesoły', 'alegre'], ['poważny', 'sério'], ['zabawny', 'engraçado'],
    ['dziwny', 'estranho'], ['normalny', 'normal'], ['wyjątkowy', 'excepcional'], ['typowy', 'típico'], ['prawdziwy', 'verdadeiro'], ['fałszywy', 'falso'], ['możliwy', 'possível'], ['niemożliwy', 'impossível'],
    ['konieczny', 'necessário'], ['zbędny', 'desnecessário'], ['niebezpieczny', 'perigoso'], ['bezpieczny', 'seguro'], ['wygodny', 'confortável'], ['niewygodny', 'desconfortável'], ['praktyczny', 'prático'], ['skomplikowany', 'complicado'],
    ['prosty', 'simples'], ['dokładny', 'exato, preciso'], ['ogólny', 'geral'], ['szczegółowy', 'detalhado'], ['całkowity', 'total'], ['częściowy', 'parcial'], ['wystarczający', 'suficiente'], ['niewystarczający', 'insuficiente'],
  ]},
  { t: 'Advérbios e locuções muito frequentes', pl: 'Przysłówki i wyrażenia', w: [
    ['zawsze', 'sempre'], ['zwykle', 'geralmente'], ['czasami', 'às vezes'], ['rzadko', 'raramente'], ['nigdy', 'nunca'], ['często', 'frequentemente'], ['już', 'já'], ['jeszcze', 'ainda'],
    ['nadal', 'continua a'], ['wciąż', 'ainda, sempre'], ['właśnie', 'justamente, agora mesmo'], ['niedawno', 'recentemente'], ['dawno', 'há muito tempo'], ['wkrótce', 'em breve'], ['natychmiast', 'imediatamente'], ['nagle', 'de repente'],
    ['stopniowo', 'gradualmente'], ['całkiem', 'bastante, totalmente'], ['prawie', 'quase'], ['raczej', 'antes, mais provável'], ['zwłaszcza', 'especialmente'], ['przede wszystkim', 'antes de tudo'], ['zresztą', 'aliás'], ['przynajmniej', 'pelo menos'],
    ['naprawdę', 'realmente'], ['oczywiście', 'claro, é claro'], ['na pewno', 'com certeza'], ['chyba', 'acho que, provavelmente'], ['może', 'talvez'], ['prawdopodobnie', 'provavelmente'], ['niestety', 'infelizmente'], ['na szczęście', 'felizmente'],
    ['razem', 'juntos'], ['osobno', 'separadamente'], ['wszędzie', 'em todo lugar'], ['nigdzie', 'em lugar nenhum'], ['obok', 'ao lado'], ['naprzeciwko', 'em frente'], ['wewnątrz', 'dentro'], ['na zewnątrz', 'fora'],
  ]},
  { t: 'Substantivos abstratos do cotidiano', pl: 'Rzeczowniki abstrakcyjne', w: [
    ['sposób', 'modo, maneira', 'm'], ['powód', 'motivo', 'm'], ['przyczyna', 'causa', 'f'], ['skutek', 'efeito, consequência', 'm'], ['wynik', 'resultado', 'm'], ['cel', 'objetivo, meta', 'm'], ['plan', 'plano', 'm'], ['pomysł', 'ideia', 'm'],
    ['możliwość', 'possibilidade', 'f'], ['szansa', 'chance', 'f'], ['ryzyko', 'risco', 'n'], ['problem', 'problema', 'm'], ['rozwiązanie', 'solução', 'n'], ['decyzja', 'decisão', 'f'], ['wybór', 'escolha', 'm'], ['różnica', 'diferença', 'f'],
    ['podobieństwo', 'semelhança', 'n'], ['związek', 'relação, vínculo', 'm'], ['sytuacja', 'situação', 'f'], ['okazja', 'ocasião, oportunidade', 'f'], ['doświadczenie', 'experiência', 'n'], ['wiedza', 'conhecimento', 'f'], ['umiejętność', 'habilidade', 'f'], ['wartość', 'valor', 'f'],
    ['prawda', 'verdade', 'f'], ['kłamstwo', 'mentira', 'n'], ['pytanie', 'pergunta', 'n'], ['odpowiedź', 'resposta', 'f'], ['opinia', 'opinião', 'f'], ['zdanie', 'frase; opinião', 'n'], ['uwaga', 'atenção; observação', 'f'], ['pomoc', 'ajuda', 'f'],
    ['wolność', 'liberdade', 'f'], ['bezpieczeństwo', 'segurança', 'n'], ['odpowiedzialność', 'responsabilidade', 'f'], ['obowiązek', 'dever, obrigação', 'm'], ['prawo', 'direito, lei', 'n'], ['zaufanie', 'confiança', 'n'], ['nadzieja', 'esperança', 'f'], ['wspomnienie', 'lembrança', 'n'],
  ]},
  { t: 'Dinheiro e compras', pl: 'Pieniądze i zakupy', w: [
    ['portfel', 'carteira', 'm'], ['gotówka', 'dinheiro em espécie', 'f'], ['reszta', 'troco; resto', 'f'], ['paragon', 'recibo, cupom fiscal', 'm'], ['faktura', 'nota fiscal', 'f'], ['cena', 'preço', 'f'], ['koszt', 'custo', 'm'], ['wydatek', 'despesa', 'm'],
    ['dochód', 'renda', 'm'], ['wynagrodzenie', 'remuneração', 'n'], ['czynsz', 'aluguel', 'm'], ['rachunek', 'conta, fatura', 'm'], ['opłata', 'taxa', 'f'], ['zwrot', 'devolução, reembolso', 'm'], ['gwarancja', 'garantia', 'f'], ['reklamacja', 'reclamação (de compra)', 'f'],
    ['koszyk', 'cesta, carrinho', 'm'], ['kasa', 'caixa registradora', 'f'], ['kolejka', 'fila', 'f'], ['wyprzedaż', 'liquidação', 'f'], ['zniżka', 'desconto', 'f'], ['okazja', 'pechincha', 'f'], ['zapłacić kartą', 'pagar com cartão'], ['płacić gotówką', 'pagar em dinheiro'],
    ['pożyczyć', 'emprestar / pegar emprestado'], ['wydawać pieniądze', 'gastar dinheiro'], ['oszczędzać', 'economizar'], ['zarabiać', 'ganhar (dinheiro)'], ['kosztować', 'custar'], ['wymienić pieniądze', 'trocar dinheiro'], ['zwrócić towar', 'devolver o produto'], ['targować się', 'pechinchar'],
  ]},
  { t: 'Corpo e saúde (nível intermediário)', pl: 'Zdrowie', w: [
    ['mięsień', 'músculo', 'm'], ['kość', 'osso', 'f'], ['skóra', 'pele', 'f'], ['krew', 'sangue', 'f'], ['płuca', 'pulmões', 'pl'], ['wątroba', 'fígado', 'f'], ['nerka', 'rim', 'f'], ['gardło', 'garganta', 'n'],
    ['ból gardła', 'dor de garganta', 'm'], ['ból brzucha', 'dor de barriga', 'm'], ['zawroty głowy', 'tontura', 'pl'], ['nudności', 'enjoo', 'pl'], ['wysypka', 'erupção cutânea', 'f'], ['uczulenie', 'alergia', 'n'], ['złamanie', 'fratura', 'n'], ['skaleczenie', 'corte', 'n'],
    ['oparzenie', 'queimadura', 'n'], ['zwichnięcie', 'entorse', 'n'], ['opuchlizna', 'inchaço', 'f'], ['siniak', 'hematoma', 'm'], ['szczepienie', 'vacina', 'n'], ['zastrzyk', 'injeção', 'm'], ['antybiotyk', 'antibiótico', 'm'], ['lek', 'remédio', 'm'],
    ['pogotowie', 'pronto-socorro, ambulância', 'n'], ['przychodnia', 'posto de saúde', 'f'], ['skierowanie', 'encaminhamento', 'n'], ['wizyta', 'consulta, visita', 'f'], ['operacja', 'cirurgia', 'f'], ['rehabilitacja', 'reabilitação', 'f'], ['ćwiczyć', 'fazer exercício, treinar'], ['wyzdrowieć', 'recuperar-se'],
  ]},
], true);

COURSE.bank('b2', [
  { t: 'Verbos de nível intermediário-superior', pl: 'Czasowniki B2', w: [
    ['osiągać / osiągnąć', 'alcançar'], ['uzyskiwać / uzyskać', 'obter'], ['wprowadzać / wprowadzić', 'introduzir, implantar'], ['rozwijać / rozwinąć', 'desenvolver'], ['zmniejszać / zmniejszyć', 'diminuir'], ['zwiększać / zwiększyć', 'aumentar'], ['ograniczać / ograniczyć', 'limitar, reduzir'], ['wspierać / wesprzeć', 'apoiar'],
    ['podejmować / podjąć', 'tomar (decisão), assumir'], ['rozważać / rozważyć', 'considerar, ponderar'], ['porównywać / porównać', 'comparar'], ['analizować / przeanalizować', 'analisar'], ['przewidywać / przewidzieć', 'prever'], ['dowodzić / dowieść', 'provar'], ['potwierdzać / potwierdzić', 'confirmar'], ['zaprzeczać / zaprzeczyć', 'negar'],
    ['krytykować / skrytykować', 'criticar'], ['popierać / poprzeć', 'apoiar (uma ideia)'], ['odrzucać / odrzucić', 'rejeitar'], ['akceptować / zaakceptować', 'aceitar'], ['uwzględniać / uwzględnić', 'levar em conta'], ['unikać / uniknąć', 'evitar'], ['zapobiegać / zapobiec', 'prevenir'], ['wywoływać / wywołać', 'provocar'],
    ['powodować / spowodować', 'causar'], ['wynikać / wyniknąć', 'resultar, decorrer'], ['dotyczyć', 'dizer respeito a'], ['polegać na', 'consistir em; confiar em'], ['zależeć od', 'depender de'], ['odnosić się do', 'referir-se a'], ['przyczyniać się do', 'contribuir para'], ['stanowić', 'constituir'],
    ['odbywać się', 'realizar-se, acontecer'], ['przebiegać', 'transcorrer'], ['zachodzić', 'ocorrer; pôr-se (sol)'], ['występować', 'ocorrer, existir; atuar'], ['istnieć', 'existir'], ['obejmować / objąć', 'abranger'], ['zawierać', 'conter'], ['wymagać', 'exigir'],
    ['zapewniać / zapewnić', 'garantir, proporcionar'], ['umożliwiać / umożliwić', 'possibilitar'], ['utrudniać / utrudnić', 'dificultar'], ['ułatwiać / ułatwić', 'facilitar'], ['zachęcać / zachęcić', 'incentivar'], ['zniechęcać / zniechęcić', 'desencorajar'], ['skłaniać / skłonić', 'levar a, induzir'], ['przekonywać / przekonać', 'convencer'],
  ]},
  { t: 'Adjetivos de análise e opinião', pl: 'Przymiotniki analizy', w: [
    ['istotny', 'essencial, relevante'], ['znaczący', 'significativo'], ['trafny', 'preciso, certeiro'], ['wiarygodny', 'confiável, crível'], ['obiektywny', 'objetivo'], ['subiektywny', 'subjetivo'], ['jednoznaczny', 'inequívoco'], ['sprzeczny', 'contraditório'],
    ['kontrowersyjny', 'controverso'], ['skuteczny', 'eficaz'], ['nieskuteczny', 'ineficaz'], ['wydajny', 'eficiente, produtivo'], ['trwały', 'duradouro'], ['tymczasowy', 'temporário'], ['powszechny', 'comum, difundido'], ['rzadki', 'raro'],
    ['szkodliwy', 'nocivo'], ['korzystny', 'vantajoso'], ['niekorzystny', 'desvantajoso'], ['kluczowy', 'chave, crucial'], ['podstawowy', 'básico, fundamental'], ['dodatkowy', 'adicional'], ['wyraźny', 'nítido, claro'], ['widoczny', 'visível'],
    ['oczywisty', 'óbvio'], ['wątpliwy', 'duvidoso'], ['pewny', 'certo, seguro'], ['niepewny', 'incerto'], ['rzeczywisty', 'real'], ['pozorny', 'aparente'], ['częsty', 'frequente'], ['okresowy', 'periódico'],
    ['rozległy', 'extenso, vasto'], ['ograniczony', 'limitado'], ['rozbieżny', 'divergente'], ['spójny', 'coerente'], ['logiczny', 'lógico'], ['absurdalny', 'absurdo'], ['zaskakujący', 'surpreendente'], ['przewidywalny', 'previsível'],
  ]},
  { t: 'Substantivos abstratos avançados', pl: 'Rzeczowniki abstrakcyjne B2', w: [
    ['tendencja', 'tendência', 'f'], ['zjawisko', 'fenômeno', 'n'], ['proces', 'processo', 'm'], ['rozwój', 'desenvolvimento', 'm'], ['postęp', 'progresso', 'm'], ['spadek', 'queda; herança', 'm'], ['wzrost', 'crescimento, aumento', 'm'], ['zmiana', 'mudança', 'f'],
    ['wpływ', 'influência, impacto', 'm'], ['znaczenie', 'significado, importância', 'n'], ['rola', 'papel', 'f'], ['zasada', 'princípio, regra', 'f'], ['założenie', 'pressuposto', 'n'], ['hipoteza', 'hipótese', 'f'], ['teoria', 'teoria', 'f'], ['badanie', 'pesquisa', 'n'],
    ['wniosek', 'conclusão; requerimento', 'm'], ['argument', 'argumento', 'm'], ['przykład', 'exemplo', 'm'], ['źródło', 'fonte', 'n'], ['dowód', 'prova', 'm'], ['fakt', 'fato', 'm'], ['stanowisko', 'posição, posto', 'n'], ['pogląd', 'ponto de vista', 'm'],
    ['sprzeczność', 'contradição', 'f'], ['wyjątek', 'exceção', 'm'], ['konsekwencja', 'consequência', 'f'], ['okoliczność', 'circunstância', 'f'], ['warunek', 'condição', 'm'], ['wymóg', 'requisito', 'm'], ['ograniczenie', 'restrição', 'n'], ['możliwość', 'possibilidade', 'f'],
    ['odpowiedzialność', 'responsabilidade', 'f'], ['zaangażowanie', 'engajamento', 'n'], ['poczucie', 'sensação, sentimento', 'n'], ['świadomość', 'consciência', 'f'], ['wrażliwość', 'sensibilidade', 'f'], ['tożsamość', 'identidade', 'f'], ['różnorodność', 'diversidade', 'f'], ['równość', 'igualdade', 'f'],
  ]},
  { t: 'Colocações e expressões fixas', pl: 'Wyrażenia utarte', w: [
    ['mieć na uwadze', 'ter em mente'], ['brać pod uwagę', 'levar em consideração'], ['zwracać uwagę na', 'chamar a atenção para'], ['odgrywać rolę', 'desempenhar um papel'], ['mieć wpływ na', 'ter influência sobre'], ['wziąć udział w', 'participar de'], ['mieć sens', 'fazer sentido'], ['mieć związek z', 'estar relacionado com'],
    ['w dużym stopniu', 'em grande medida'], ['w dłuższej perspektywie', 'a longo prazo'], ['w ostatnich latach', 'nos últimos anos'], ['na przestrzeni lat', 'ao longo dos anos'], ['pod wpływem', 'sob influência de'], ['w związku z', 'em relação a'], ['w zależności od', 'dependendo de'], ['na podstawie', 'com base em'],
    ['w przeciwnym razie', 'caso contrário'], ['pod warunkiem, że', 'desde que'], ['mimo że', 'embora'], ['ponieważ', 'porque'], ['zatem', 'portanto'], ['jednak', 'porém'], ['natomiast', 'por outro lado, já'], ['dlatego', 'por isso'],
    ['jak dotąd', 'até agora'], ['z jednej strony', 'por um lado'], ['z drugiej strony', 'por outro lado'], ['po pierwsze', 'primeiro'], ['po drugie', 'segundo'], ['na koniec', 'por fim'], ['podsumowując', 'resumindo'], ['innymi słowy', 'em outras palavras'],
    ['na przykład', 'por exemplo'], ['między innymi', 'entre outros'], ['przede wszystkim', 'sobretudo'], ['tak zwany', 'chamado, dito'], ['w każdym razie', 'em todo caso'], ['bez wątpienia', 'sem dúvida'], ['jednocześnie', 'ao mesmo tempo'], ['z kolei', 'por sua vez'],
  ]},
  { t: 'Tecnologia e inovação', pl: 'Technologia i innowacje', w: [
    ['sztuczna inteligencja', 'inteligência artificial', 'f'], ['algorytm', 'algoritmo', 'm'], ['dane', 'dados', 'pl'], ['baza danych', 'banco de dados', 'f'], ['oprogramowanie', 'software', 'n'], ['sprzęt', 'equipamento, hardware', 'm'], ['chmura', 'nuvem', 'f'], ['kopia zapasowa', 'backup', 'f'],
    ['cyberbezpieczeństwo', 'cibersegurança', 'n'], ['haker', 'hacker', 'm'], ['szyfrowanie', 'criptografia', 'n'], ['uwierzytelnianie', 'autenticação', 'n'], ['prywatność', 'privacidade', 'f'], ['wynalazek', 'invenção', 'm'], ['innowacja', 'inovação', 'f'], ['prototyp', 'protótipo', 'm'],
    ['robot', 'robô', 'm'], ['automatyzacja', 'automação', 'f'], ['dron', 'drone', 'm'], ['czujnik', 'sensor', 'm'], ['bateria', 'bateria', 'f'], ['ładowarka', 'carregador', 'f'], ['światłowód', 'fibra óptica', 'm'], ['szerokopasmowy', 'banda larga'],
  ]},
  { t: 'Psicologia e emoções (avançado)', pl: 'Psychologia i emocje', w: [
    ['stres', 'estresse', 'm'], ['lęk', 'ansiedade, medo', 'm'], ['złość', 'raiva', 'f'], ['wstyd', 'vergonha', 'm'], ['wina', 'culpa', 'f'], ['duma', 'orgulho', 'f'], ['zazdrość', 'ciúme, inveja', 'f'], ['zawiść', 'inveja', 'f'],
    ['samotność', 'solidão', 'f'], ['tęsknota', 'saudade', 'f'], ['nostalgia', 'nostalgia', 'f'], ['obojętność', 'indiferença', 'f'], ['empatia', 'empatia', 'f'], ['współczucie', 'compaixão', 'n'], ['pewność siebie', 'autoconfiança', 'f'], ['samoocena', 'autoestima', 'f'],
    ['motywacja', 'motivação', 'f'], ['frustracja', 'frustração', 'f'], ['ulga', 'alívio', 'f'], ['zdenerwowany', 'nervoso, irritado'], ['wzruszony', 'comovido'], ['poruszony', 'abalado, tocado'], ['przygnębiony', 'abatido'], ['zawstydzony', 'envergonhado'],
  ]},
  { t: 'Natureza, clima extremo e energia', pl: 'Przyroda i energia', w: [
    ['klimat', 'clima', 'm'], ['zmiany klimatu', 'mudanças climáticas', 'pl'], ['efekt cieplarniany', 'efeito estufa', 'm'], ['emisja', 'emissão', 'f'], ['dwutlenek węgla', 'dióxido de carbono', 'm'], ['lodowiec', 'geleira', 'm'], ['poziom morza', 'nível do mar', 'm'], ['huragan', 'furacão', 'm'],
    ['trzęsienie ziemi', 'terremoto', 'n'], ['wulkan', 'vulcano', 'm'], ['pożar lasu', 'incêndio florestal', 'm'], ['lawina', 'avalanche', 'f'], ['osuwisko', 'deslizamento', 'n'], ['elektrownia', 'usina elétrica', 'f'], ['węgiel', 'carvão', 'm'], ['gaz ziemny', 'gás natural', 'm'],
    ['ropa naftowa', 'petróleo', 'f'], ['energia jądrowa', 'energia nuclear', 'f'], ['energia wodna', 'energia hidrelétrica', 'f'], ['biomasa', 'biomassa', 'f'], ['różnorodność biologiczna', 'biodiversidade', 'f'], ['siedlisko', 'habitat', 'n'], ['gatunek inwazyjny', 'espécie invasora', 'm'], ['wylesianie', 'desmatamento', 'n'],
  ]},
], true);
