/* Banco de vocabulário B1, pelos 20 eixos temáticos do programa B1 (Język ogólny):
   pessoa, família, vida social, lazer, esporte, moradia, cidade e campo, viagens, trabalho, educação, alimentação,
   comércio e serviços, saúde, natureza, Estado e sociedade, ciência e técnica, mídia, cultura, atualidades. */
COURSE.bank('b1', [
  { t: 'Pessoa e personalidade', pl: 'Człowiek', w: [
    ['dane osobowe', 'dados pessoais', 'pl'], ['miejsce urodzenia', 'local de nascimento', 'n'], ['obywatelstwo', 'cidadania', 'n'], ['wykształcenie wyższe', 'ensino superior', 'n'],
    ['talent', 'talento', 'm'], ['zdolny', 'talentoso, capaz'], ['wrażliwy', 'sensível'], ['pewny siebie', 'autoconfiante'], ['samodzielny', 'independente'],
    ['życzliwy', 'gentil, prestativo'], ['zarozumiały', 'convencido, arrogante'], ['leniwy', 'preguiçoso'], ['pracowity', 'trabalhador'], ['rozsądny', 'sensato'],
    ['wybuchowy', 'explosivo, esquentado'], ['optymista / pesymista', 'otimista / pessimista', 'm'], ['poczucie humoru', 'senso de humor', 'n'], ['nastrój', 'humor, estado de ânimo', 'm'],
    ['tęsknić za', 'sentir falta de, ter saudade', 'v'], ['zależeć komuś na czymś', 'importar-se com algo'], ['przejmować się', 'importar-se, preocupar-se', 'v'], ['wzruszony', 'emocionado'],
  ]},
  { t: 'Família e relações', pl: 'Rodzina i relacje', w: [
    ['teść / teściowa', 'sogro / sogra', ''], ['zięć / synowa', 'genro / nora', ''], ['szwagier / szwagierka', 'cunhado / cunhada', ''], ['krewny', 'parente', 'm'],
    ['przodkowie', 'antepassados', 'pl'], ['pokolenie', 'geração', 'n'], ['wychowywać / wychować', 'criar, educar (filhos)', 'v'], ['rozwód', 'divórcio', 'm'],
    ['związek', 'relacionamento', 'm'], ['zaręczyny', 'noivado', 'pl'], ['wesele', 'festa de casamento', 'n'], ['chrzciny', 'batizado', 'pl'], ['pogrzeb', 'funeral', 'm'],
    ['kłócić się / pokłócić się', 'brigar, discutir', 'v'], ['godzić się / pogodzić się', 'fazer as pazes', 'v'], ['ufać / zaufać', 'confiar', 'v'], ['zdradzić', 'trair', 'v'],
    ['wspierać / wesprzeć', 'apoiar', 'v'], ['opiekować się', 'cuidar de', 'v'], ['samotność', 'solidão', 'f'],
  ]},
  { t: 'Vida social', pl: 'Życie towarzyskie', w: [
    ['znajomy', 'conhecido', 'm'], ['przyjaźń', 'amizade', 'f'], ['spotkanie towarzyskie', 'encontro social', 'n'], ['umawiać się / umówić się', 'marcar (encontro)', 'v'],
    ['odwiedzać / odwiedzić', 'visitar (alguém)', 'v'], ['zapraszać / zaprosić', 'convidar', 'v'], ['przyjmować / przyjąć zaproszenie', 'aceitar o convite', 'v'],
    ['odmawiać / odmówić', 'recusar', 'v'], ['przepraszać / przeprosić', 'pedir desculpas', 'v'], ['dziękować / podziękować', 'agradecer', 'v'], ['gratulować / pogratulować', 'parabenizar', 'v'],
    ['proponować / zaproponować', 'propor, sugerir', 'v'], ['plotkować', 'fofocar', 'v'], ['na ty / na pan', 'tratar por você / por senhor', ''], ['przechodzić na ty', 'passar a se tratar por você'],
  ]},
  { t: 'Esporte', pl: 'Sport', w: [
    ['dyscyplina', 'modalidade', 'f'], ['zawody', 'competição', 'pl'], ['mistrzostwa', 'campeonato', 'pl'], ['mecz', 'partida', 'm'], ['drużyna', 'time', 'f'],
    ['zawodnik', 'atleta, jogador', 'm'], ['trener', 'treinador', 'm'], ['kibic', 'torcedor', 'm'], ['wynik', 'resultado, placar', 'm'], ['remis', 'empate', 'm'],
    ['wygrywać / wygrać', 'ganhar', 'v'], ['przegrywać / przegrać', 'perder', 'v'], ['strzelić gola', 'marcar gol'], ['stadion', 'estádio', 'm'], ['boisko', 'campo (esportivo)', 'n'],
    ['narty / jeździć na nartach', 'esqui / esquiar', 'pl'], ['łyżwy', 'patins de gelo', 'pl'], ['skoki narciarskie', 'saltos de esqui', 'pl'], ['kontuzja', 'lesão', 'f'], ['trenować', 'treinar', 'v'],
  ]},
  { t: 'Cidade e campo', pl: 'Miasto i wieś', w: [
    ['mieszkańcy', 'moradores', 'pl'], ['ludność', 'população', 'f'], ['przedmieście', 'subúrbio', 'n'], ['osiedle', 'conjunto residencial, bairro', 'n'],
    ['urząd miasta', 'prefeitura (órgão)', 'm'], ['ratusz', 'prefeitura (prédio)', 'm'], ['komunikacja miejska', 'transporte público', 'f'], ['infrastruktura', 'infraestrutura', 'f'],
    ['gospodarstwo', 'propriedade rural, fazenda', 'n'], ['rolnik', 'agricultor', 'm'], ['stodoła', 'celeiro', 'f'], ['plony', 'colheita', 'pl'], ['hodować', 'criar (animais)', 'v'],
    ['uprawiać', 'cultivar', 'v'], ['wieś a miasto', 'campo versus cidade'], ['spokój', 'tranquilidade', 'm'], ['hałas', 'barulho', 'm'], ['zanieczyszczenie', 'poluição', 'n'],
  ]},
  { t: 'Viagens e turismo', pl: 'Podróże i turystyka', w: [
    ['wypoczynek', 'descanso, lazer', 'm'], ['all inclusive', 'tudo incluído'], ['zakwaterowanie', 'acomodação', 'n'], ['wyżywienie', 'alimentação (pacote)', 'n'],
    ['agroturystyka', 'turismo rural', 'f'], ['kemping', 'camping', 'm'], ['namiot', 'barraca', 'm'], ['autostop', 'carona', 'm'], ['wiza', 'visto', 'f'], ['kontrola paszportowa', 'controle de passaporte', 'f'],
    ['przesiadka', 'conexão, baldeação', 'f'], ['lot bezpośredni', 'voo direto', 'm'], ['zgubić bagaż', 'perder a bagagem'], ['reklamacja', 'reclamação formal', 'f'],
    ['atrakcja turystyczna', 'atração turística', 'f'], ['zwiedzanie', 'passeio turístico', 'n'], ['szlak turystyczny', 'trilha', 'm'], ['widok', 'vista', 'm'], ['krajobraz', 'paisagem', 'm'],
  ]},
  { t: 'Trabalho e carreira', pl: 'Praca i kariera', w: [
    ['stanowisko', 'cargo', 'n'], ['kwalifikacje', 'qualificações', 'pl'], ['staż / praktyki', 'estágio', 'm'], ['okres próbny', 'período de experiência', 'm'],
    ['umowa zlecenie', 'contrato de prestação de serviço', 'f'], ['umowa na czas określony', 'contrato por prazo determinado', 'f'], ['wynagrodzenie brutto / netto', 'salário bruto / líquido', 'n'],
    ['podwyżka', 'aumento', 'f'], ['premia', 'bônus', 'f'], ['wypłata', 'pagamento (salário)', 'f'], ['urlop macierzyński', 'licença-maternidade', 'm'], ['L4', 'atestado (gíria)', 'n'],
    ['bezrobocie', 'desemprego', 'n'], ['zasiłek', 'auxílio, benefício', 'm'], ['związek zawodowy', 'sindicato', 'm'], ['strajk', 'greve', 'm'], ['wypowiedzenie', 'aviso prévio, demissão', 'n'],
    ['rekrutacja', 'recrutamento', 'f'], ['kandydat', 'candidato', 'm'], ['obowiązki', 'responsabilidades', 'pl'], ['termin', 'prazo', 'm'], ['delegacja', 'viagem a trabalho', 'f'],
  ]},
  { t: 'Educação e estudos', pl: 'Edukacja', w: [
    ['system edukacji', 'sistema educacional', 'm'], ['szkoła publiczna / prywatna', 'escola pública / particular', 'f'], ['zajęcia pozalekcyjne', 'atividades extracurriculares', 'pl'],
    ['świadectwo', 'boletim, certificado escolar', 'n'], ['średnia', 'média', 'f'], ['sprawdzian', 'prova', 'm'], ['kartkówka', 'teste rápido', 'f'], ['wagarować', 'matar aula', 'v'],
    ['promotor', 'orientador', 'm'], ['praca dyplomowa', 'TCC, dissertação', 'f'], ['obrona', 'defesa (de tese)', 'f'], ['rekrutacja na studia', 'vestibular, admissão', 'f'],
    ['wiedza', 'conhecimento', 'f'], ['umiejętność', 'habilidade', 'f'], ['kształcić się', 'formar-se, estudar', 'v'], ['dokształcać się', 'fazer cursos de atualização', 'v'],
  ]},
  { t: 'Alimentação e cozinha', pl: 'Żywienie', w: [
    ['przepis', 'receita', 'm'], ['składniki', 'ingredientes', 'pl'], ['kroić / pokroić', 'cortar', 'v'], ['smażyć / usmażyć', 'fritar', 'v'], ['piec / upiec', 'assar', 'v'],
    ['gotować / ugotować', 'cozinhar (ferver)', 'v'], ['dusić', 'refogar, ensopar', 'v'], ['mieszać / wymieszać', 'misturar', 'v'], ['dodawać / dodać', 'adicionar', 'v'],
    ['garnek', 'panela', 'm'], ['patelnia', 'frigideira', 'f'], ['piekarnik', 'forno', 'm'], ['przyprawy', 'temperos', 'pl'], ['ostry', 'picante'], ['słony / słodki / kwaśny / gorzki', 'salgado / doce / azedo / amargo'],
    ['wegetarianin / weganin', 'vegetariano / vegano', 'm'], ['dieta', 'dieta', 'f'], ['kalorie', 'calorias', 'pl'], ['bigos', 'bigos (ensopado de repolho e carne)', 'm'],
    ['gołąbki', 'charutos de repolho', 'pl'], ['kotlet schabowy', 'bife de porco empanado', 'm'], ['stołówka', 'refeitório', 'f'], ['bar mleczny', 'restaurante popular polonês', 'm'],
  ]},
  { t: 'Comércio e serviços', pl: 'Handel i usługi', w: [
    ['wyprzedaż', 'liquidação', 'f'], ['zniżka / rabat', 'desconto', 'f'], ['raty', 'parcelas', 'pl'], ['kredyt', 'empréstimo, crédito', 'm'], ['przelew', 'transferência', 'm'],
    ['rachunek bankowy', 'conta bancária', 'm'], ['wpłacać / wypłacać', 'depositar / sacar', 'v'], ['zwrot', 'devolução, reembolso', 'm'], ['gwarancja', 'garantia', 'f'],
    ['reklamować', 'reclamar (de produto)', 'v'], ['zamówienie', 'pedido', 'n'], ['dostawa', 'entrega', 'f'], ['kurier', 'entregador', 'm'], ['paczka', 'pacote', 'f'],
    ['paczkomat', 'armário de encomendas', 'm'], ['szewc', 'sapateiro', 'm'], ['krawiec', 'alfaiate', 'm'], ['stacja benzynowa', 'posto de gasolina', 'f'], ['warsztat', 'oficina', 'm'],
  ]},
  { t: 'Saúde', pl: 'Zdrowie', w: [
    ['samopoczucie', 'bem-estar', 'n'], ['choroba przewlekła', 'doença crônica', 'f'], ['zapalenie', 'inflamação', 'n'], ['zawroty głowy', 'tontura', 'pl'], ['mdłości', 'enjoo', 'pl'],
    ['wysypka', 'erupção na pele', 'f'], ['uczulenie', 'alergia', 'n'], ['badanie krwi', 'exame de sangue', 'n'], ['wynik badania', 'resultado do exame', 'm'], ['operacja', 'cirurgia', 'f'],
    ['specjalista', 'especialista', 'm'], ['internista', 'clínico geral', 'm'], ['okulista', 'oftalmologista', 'm'], ['kardiolog', 'cardiologista', 'm'], ['szczepionka', 'vacina', 'f'],
    ['ubezpieczenie zdrowotne', 'plano de saúde (público)', 'n'], ['pierwsza pomoc', 'primeiros socorros', 'f'], ['zdrowy tryb życia', 'estilo de vida saudável', 'm'], ['stres', 'estresse', 'm'],
  ]},
  { t: 'Natureza e ecologia', pl: 'Przyroda i ekologia', w: [
    ['środowisko naturalne', 'meio ambiente', 'n'], ['ochrona przyrody', 'proteção da natureza', 'f'], ['park narodowy', 'parque nacional', 'm'], ['gatunek', 'espécie', 'm'],
    ['segregować śmieci', 'separar o lixo'], ['recykling', 'reciclagem', 'm'], ['odpady', 'resíduos', 'pl'], ['plastik', 'plástico', 'm'], ['susza', 'seca', 'f'], ['powódź', 'enchente', 'f'],
    ['globalne ocieplenie', 'aquecimento global', 'n'], ['zmiany klimatu', 'mudanças climáticas', 'pl'], ['smog', 'smog, poluição do ar', 'm'], ['energia odnawialna', 'energia renovável', 'f'],
    ['oszczędzać wodę', 'economizar água'], ['las / wycinka drzew', 'floresta / derrubada de árvores', ''],
  ]},
  { t: 'Estado e sociedade', pl: 'Państwo i społeczeństwo', w: [
    ['państwo', 'Estado, país', 'n'], ['rząd', 'governo', 'm'], ['prezydent', 'presidente', 'm'], ['premier', 'primeiro-ministro', 'm'], ['Sejm / Senat', 'Câmara / Senado', 'm'],
    ['wybory', 'eleições', 'pl'], ['głosować', 'votar', 'v'], ['partia', 'partido', 'f'], ['ustawa', 'lei', 'f'], ['konstytucja', 'constituição', 'f'], ['obywatel', 'cidadão', 'm'],
    ['święto państwowe', 'feriado nacional', 'n'], ['społeczeństwo', 'sociedade', 'n'], ['problem społeczny', 'problema social', 'm'], ['przestępstwo', 'crime', 'n'], ['bezpieczeństwo', 'segurança', 'n'],
    ['województwo', 'província (voivodia)', 'n'], ['gmina', 'município', 'f'], ['urząd', 'repartição', 'm'], ['karta pobytu', 'autorização de residência', 'f'], ['PESEL', 'número de identificação civil', 'm'],
  ]},
  { t: 'Ciência e técnica', pl: 'Nauka i technika', w: [
    ['wynalazek', 'invenção', 'm'], ['odkrycie', 'descoberta', 'n'], ['naukowiec', 'cientista', 'm'], ['badania', 'pesquisa', 'pl'], ['rozwój', 'desenvolvimento', 'm'],
    ['sztuczna inteligencja', 'inteligência artificial', 'f'], ['oprogramowanie', 'software', 'n'], ['urządzenie', 'aparelho, dispositivo', 'n'], ['dane', 'dados', 'pl'],
    ['analiza danych', 'análise de dados', 'f'], ['sieć', 'rede', 'f'], ['bezpieczeństwo w sieci', 'segurança online', 'n'], ['aktualizacja', 'atualização', 'f'], ['awaria', 'pane, falha', 'f'],
  ]},
  { t: 'Mídia', pl: 'Środki masowego przekazu', w: [
    ['prasa', 'imprensa', 'f'], ['gazeta / dziennik', 'jornal', 'f'], ['czasopismo', 'revista', 'n'], ['artykuł', 'artigo', 'm'], ['nagłówek', 'manchete', 'm'], ['dziennikarz', 'jornalista', 'm'],
    ['wywiad', 'entrevista', 'm'], ['reportaż', 'reportagem', 'm'], ['audycja', 'programa de rádio', 'f'], ['podcast', 'podcast', 'm'], ['media społecznościowe', 'redes sociais', 'pl'],
    ['reklama', 'publicidade', 'f'], ['fake news', 'notícias falsas', 'pl'], ['źródło', 'fonte', 'n'], ['subskrypcja', 'assinatura', 'f'], ['oglądalność', 'audiência', 'f'],
  ]},
  { t: 'Cultura', pl: 'Kultura', w: [
    ['literatura', 'literatura', 'f'], ['poeta / poetka', 'poeta / poetisa', ''], ['powieść', 'romance', 'f'], ['opowiadanie', 'conto', 'n'], ['bohater', 'herói, protagonista', 'm'],
    ['fabuła', 'enredo', 'f'], ['recenzja', 'resenha, crítica', 'f'], ['nagroda', 'prêmio', 'f'], ['laureat', 'laureado', 'm'], ['malarstwo', 'pintura', 'n'], ['rzeźba', 'escultura', 'f'],
    ['sztuka ludowa', 'arte popular', 'f'], ['zespół', 'banda, conjunto', 'm'], ['płyta', 'disco, álbum', 'f'], ['przebój', 'sucesso (música)', 'm'], ['widownia', 'plateia', 'f'],
  ]},
  { t: 'Conectores e opinião (B1)', pl: 'Spójniki i opinie', w: [
    ['jednak', 'porém, contudo'], ['lecz', 'mas (formal)'], ['natomiast', 'por outro lado'], ['dlatego', 'por isso'], ['ponieważ', 'porque'], ['chociaż / mimo że', 'embora'],
    ['żeby', 'para que'], ['gdyby', 'se (hipotético)'], ['jeśli chodzi o…', 'quanto a…'], ['z jednej strony… z drugiej strony', 'por um lado… por outro'],
    ['wydaje mi się, że…', 'parece-me que…'], ['jestem przekonany, że…', 'estou convencido de que…'], ['warto', 'vale a pena'], ['trzeba', 'é preciso'], ['należy', 'deve-se'],
    ['można', 'pode-se, é possível'], ['przede wszystkim', 'antes de tudo'], ['na przykład', 'por exemplo'], ['podsumowując', 'resumindo'], ['w rzeczywistości', 'na realidade'],
  ]},
]);
