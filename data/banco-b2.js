/* Banco de vocabulário B2, pelos 19 eixos do programa B2: aprofunda B1 com sociedade, política, justiça,
   economia, migração, mudanças após 1989, ciência, mídia crítica, cultura, saúde pública, mercado de trabalho,
   além de regência verbal, expressões idiomáticas e conectores de texto argumentativo. */
COURSE.bank('b2', [
  { t: 'Política e Estado', pl: 'Polityka i państwo', w: [
    ['ustrój', 'regime, sistema político', 'm'], ['demokracja', 'democracia', 'f'], ['władza wykonawcza / ustawodawcza / sądownicza', 'poder executivo / legislativo / judiciário', 'f'],
    ['samorząd', 'governo local, autarquia', 'm'], ['poseł / posłanka', 'deputado / deputada', ''], ['kadencja', 'mandato', 'f'], ['koalicja', 'coalizão', 'f'], ['opozycja', 'oposição', 'f'],
    ['frekwencja', 'comparecimento às urnas', 'f'], ['kampania wyborcza', 'campanha eleitoral', 'f'], ['referendum', 'referendo', 'n'], ['ustawa zasadnicza', 'carta magna', 'f'],
    ['Trybunał Konstytucyjny', 'Tribunal Constitucional', 'm'], ['uchwalić ustawę', 'aprovar uma lei'], ['weto', 'veto', 'n'], ['sondaż', 'pesquisa de opinião', 'm'],
    ['polityk', 'político', 'm'], ['dyplomacja', 'diplomacia', 'f'], ['Unia Europejska', 'União Europeia', 'f'], ['NATO', 'OTAN', 'n'],
  ]},
  { t: 'Justiça e segurança', pl: 'Wymiar sprawiedliwości', w: [
    ['sąd', 'tribunal', 'm'], ['sędzia', 'juiz', 'm'], ['prokurator', 'promotor', 'm'], ['adwokat', 'advogado (defesa)', 'm'], ['oskarżony', 'réu', 'm'], ['świadek', 'testemunha', 'm'],
    ['wyrok', 'sentença', 'm'], ['kara', 'pena', 'f'], ['grzywna / mandat', 'multa', 'f'], ['więzienie', 'prisão', 'n'], ['przestępca', 'criminoso', 'm'], ['kradzież', 'furto', 'f'],
    ['włamanie', 'arrombamento', 'n'], ['oszustwo', 'fraude', 'n'], ['korupcja', 'corrupção', 'f'], ['zeznawać', 'depor', 'v'], ['zgłosić na policję', 'registrar ocorrência'], ['prawo / bezprawie', 'lei, direito / ilegalidade', 'n'],
  ]},
  { t: 'Economia e finanças', pl: 'Gospodarka i finanse', w: [
    ['gospodarka', 'economia', 'f'], ['wzrost gospodarczy', 'crescimento econômico', 'm'], ['inflacja', 'inflação', 'f'], ['recesja', 'recessão', 'f'], ['PKB', 'PIB', 'n'],
    ['budżet', 'orçamento', 'm'], ['podatek', 'imposto', 'm'], ['VAT', 'IVA', 'm'], ['dochód', 'renda', 'm'], ['wydatki', 'despesas', 'pl'], ['oszczędności', 'poupança', 'pl'],
    ['inwestycja', 'investimento', 'f'], ['giełda', 'bolsa de valores', 'f'], ['akcje', 'ações', 'pl'], ['kurs walut', 'câmbio', 'm'], ['stopy procentowe', 'taxas de juros', 'pl'],
    ['kredyt hipoteczny', 'financiamento imobiliário', 'm'], ['siła nabywcza', 'poder de compra', 'f'], ['płaca minimalna', 'salário mínimo', 'f'], ['przedsiębiorca', 'empresário', 'm'],
    ['jednoosobowa działalność gospodarcza', 'empresa individual (como PJ)', 'f'], ['faktura', 'nota fiscal, fatura', 'f'], ['księgowość', 'contabilidade', 'f'], ['ZUS', 'previdência social polonesa', 'm'],
  ]},
  { t: 'Mercado de trabalho', pl: 'Rynek pracy', w: [
    ['rynek pracy', 'mercado de trabalho', 'm'], ['stopa bezrobocia', 'taxa de desemprego', 'f'], ['zasiłek dla bezrobotnych', 'seguro-desemprego', 'm'], ['urząd pracy', 'agência de emprego', 'm'],
    ['przekwalifikować się', 'requalificar-se', 'v'], ['praca zdalna / hybrydowa', 'trabalho remoto / híbrido', 'f'], ['wypalenie zawodowe', 'burnout', 'n'], ['równowaga praca–życie', 'equilíbrio vida–trabalho', 'f'],
    ['renta', 'pensão (invalidez)', 'f'], ['wiek emerytalny', 'idade de aposentadoria', 'm'], ['warunki pracy', 'condições de trabalho', 'pl'], ['dyskryminacja', 'discriminação', 'f'],
    ['awansować', 'ser promovido', 'v'], ['negocjować', 'negociar', 'v'], ['kompetencje miękkie', 'soft skills', 'pl'],
  ]},
  { t: 'Sociedade e migração', pl: 'Społeczeństwo i migracje', w: [
    ['emigracja / imigracja', 'emigração / imigração', 'f'], ['imigrant', 'imigrante', 'm'], ['uchodźca', 'refugiado', 'm'], ['mniejszość narodowa', 'minoria nacional', 'f'],
    ['Polonia', 'diáspora polonesa', 'f'], ['tożsamość', 'identidade', 'f'], ['integracja', 'integração', 'f'], ['stereotyp', 'estereótipo', 'm'], ['uprzedzenie', 'preconceito', 'n'],
    ['tolerancja', 'tolerância', 'f'], ['nietolerancja', 'intolerância', 'f'], ['równość', 'igualdade', 'f'], ['ubóstwo', 'pobreza', 'n'], ['nierówności społeczne', 'desigualdades sociais', 'pl'],
    ['starzenie się społeczeństwa', 'envelhecimento da população', 'n'], ['wolontariat', 'voluntariado', 'm'], ['organizacja pozarządowa', 'ONG', 'f'], ['społeczeństwo obywatelskie', 'sociedade civil', 'n'],
    ['wyznanie', 'confissão religiosa', 'n'], ['świątynia', 'templo', 'f'], ['ateista', 'ateu', 'm'],
  ]},
  { t: 'História recente', pl: 'Historia najnowsza', w: [
    ['PRL', 'República Popular da Polônia (1952–1989)', 'f'], ['komunizm', 'comunismo', 'm'], ['stan wojenny', 'lei marcial (1981–1983)', 'm'], ['Solidarność', 'Solidariedade (sindicato)', 'f'],
    ['Okrągły Stół', 'Mesa-Redonda (1989)', 'm'], ['transformacja ustrojowa', 'transição de regime', 'f'], ['pierwsze wolne wybory', 'primeiras eleições livres', 'pl'], ['upadek muru berlińskiego', 'queda do Muro de Berlim', 'm'],
    ['przystąpienie do UE', 'adesão à UE (2004)', 'n'], ['rozbiory', 'partilhas da Polônia', 'pl'], ['powstanie', 'levante, insurreição', 'n'], ['odzyskanie niepodległości', 'recuperação da independência (1918)', 'n'],
  ]},
  { t: 'Ambiente (avançado)', pl: 'Ekologia', w: [
    ['emisja CO₂', 'emissão de CO₂', 'f'], ['ślad węglowy', 'pegada de carbono', 'm'], ['paliwa kopalne', 'combustíveis fósseis', 'pl'], ['transformacja energetyczna', 'transição energética', 'f'],
    ['fotowoltaika', 'energia solar fotovoltaica', 'f'], ['elektrownia wiatrowa', 'usina eólica', 'f'], ['zrównoważony rozwój', 'desenvolvimento sustentável', 'm'], ['bioróżnorodność', 'biodiversidade', 'f'],
    ['wymieranie gatunków', 'extinção de espécies', 'n'], ['klęska żywiołowa', 'desastre natural', 'f'], ['ekstremalne zjawiska pogodowe', 'eventos climáticos extremos', 'pl'], ['świadomość ekologiczna', 'consciência ecológica', 'f'],
  ]},
  { t: 'Ciência e universidade', pl: 'Nauka', w: [
    ['uczelnia', 'instituição de ensino superior', 'f'], ['badacz', 'pesquisador', 'm'], ['eksperyment', 'experimento', 'm'], ['hipoteza', 'hipótese', 'f'], ['teoria', 'teoria', 'f'],
    ['dowód', 'prova, evidência', 'm'], ['wyniki badań', 'resultados da pesquisa', 'pl'], ['publikacja', 'publicação', 'f'], ['grant', 'financiamento de pesquisa', 'm'],
    ['laureat Nagrody Nobla', 'ganhador do Nobel', 'm'], ['przełom', 'avanço decisivo', 'm'], ['postęp', 'progresso', 'm'], ['innowacja', 'inovação', 'f'], ['patent', 'patente', 'm'],
  ]},
  { t: 'Mídia e opinião pública', pl: 'Media', w: [
    ['opinia publiczna', 'opinião pública', 'f'], ['wolność słowa', 'liberdade de expressão', 'f'], ['cenzura', 'censura', 'f'], ['dezinformacja', 'desinformação', 'f'],
    ['manipulacja', 'manipulação', 'f'], ['obiektywny / stronniczy', 'imparcial / tendencioso'], ['felieton', 'crônica, coluna', 'm'], ['publicysta', 'colunista', 'm'],
    ['redakcja', 'redação (de jornal)', 'f'], ['nakład', 'tiragem', 'm'], ['algorytm', 'algoritmo', 'm'], ['bańka informacyjna', 'bolha informacional', 'f'], ['hejt', 'discurso de ódio online', 'm'],
  ]},
  { t: 'Cultura e artes', pl: 'Kultura i sztuka', w: [
    ['twórca', 'criador, artista', 'm'], ['dzieło', 'obra', 'n'], ['arcydzieło', 'obra-prima', 'n'], ['nurt', 'corrente, movimento', 'm'], ['epoka', 'época', 'f'],
    ['Nagroda Nike', 'Prêmio Nike (literatura polonesa)', 'f'], ['targi książki', 'feira do livro', 'pl'], ['ekranizacja', 'adaptação para o cinema', 'f'], ['scenariusz', 'roteiro', 'm'],
    ['premiera', 'estreia', 'f'], ['strój ludowy', 'traje folclórico', 'm'], ['taniec ludowy', 'dança folclórica', 'm'], ['dziedzictwo kulturowe', 'patrimônio cultural', 'n'],
    ['krytyk', 'crítico', 'm'], ['metafora', 'metáfora', 'f'], ['ironia', 'ironia', 'f'],
  ]},
  { t: 'Saúde pública', pl: 'Zdrowie publiczne', w: [
    ['służba zdrowia', 'sistema de saúde', 'f'], ['NFZ', 'Fundo Nacional de Saúde', 'm'], ['kolejka do specjalisty', 'fila para especialista', 'f'], ['profilaktyka', 'prevenção', 'f'],
    ['uzależnienie', 'dependência, vício', 'n'], ['nałóg', 'vício', 'm'], ['choroby cywilizacyjne', 'doenças da civilização', 'pl'], ['otyłość', 'obesidade', 'f'], ['depresja', 'depressão', 'f'],
    ['zdrowie psychiczne', 'saúde mental', 'n'], ['terapia', 'terapia', 'f'], ['rehabilitacja', 'reabilitação', 'f'], ['epidemia', 'epidemia', 'f'],
  ]},
  { t: 'Regência verbal', pl: 'Rekcja czasowników', w: [
    ['pamiętać o czymś', 'lembrar-se de algo'], ['myśleć o kimś', 'pensar em alguém'], ['marzyć o czymś', 'sonhar com algo'], ['dbać o coś', 'cuidar de algo'],
    ['interesować się czymś', 'interessar-se por algo'], ['zajmować się czymś', 'ocupar-se de algo'], ['chwalić się czymś', 'gabar-se de algo'], ['bać się czegoś', 'ter medo de algo'],
    ['unikać czegoś', 'evitar algo'], ['potrzebować czegoś', 'precisar de algo'], ['szukać czegoś', 'procurar algo'], ['zależeć od czegoś', 'depender de algo'],
    ['wierzyć w coś', 'acreditar em algo'], ['liczyć na kogoś', 'contar com alguém'], ['tęsknić za kimś', 'ter saudade de alguém'], ['przyzwyczaić się do czegoś', 'acostumar-se com algo'],
    ['przypominać sobie', 'recordar-se', 'v'], ['narzekać na coś', 'reclamar de algo'], ['zgadzać się z kimś', 'concordar com alguém'], ['uczestniczyć w czymś', 'participar de algo'],
  ]},
  { t: 'Pares de aspecto avançados', pl: 'Trudniejsze pary aspektowe', w: [
    ['kłaść / położyć', 'pôr (deitado)', 'v'], ['stawiać / postawić', 'pôr (em pé)', 'v'], ['wierzyć / uwierzyć', 'acreditar', 'v'], ['spoglądać / spojrzeć', 'olhar de relance', 'v'],
    ['rozwiązywać / rozwiązać', 'resolver', 'v'], ['osiągać / osiągnąć', 'alcançar', 'v'], ['wpływać / wpłynąć', 'influenciar', 'v'], ['zwiększać / zwiększyć', 'aumentar', 'v'],
    ['zmniejszać / zmniejszyć', 'diminuir', 'v'], ['przekonywać / przekonać', 'convencer', 'v'], ['podejmować / podjąć decyzję', 'tomar uma decisão', 'v'], ['wprowadzać / wprowadzić', 'introduzir, implantar', 'v'],
    ['zapobiegać / zapobiec', 'prevenir', 'v'], ['rozwijać / rozwinąć', 'desenvolver', 'v'], ['uznawać / uznać', 'reconhecer, considerar', 'v'],
  ]},
  { t: 'Expressões idiomáticas', pl: 'Idiomy i frazeologia', w: [
    ['mieć muchy w nosie', 'estar de mau humor'], ['nie mój cyrk, nie moje małpy', 'não é problema meu'], ['wpuścić kogoś w maliny', 'enganar alguém'],
    ['bułka z masłem', 'moleza, muito fácil'], ['trzymać kciuki', 'torcer (cruzar os dedos)'], ['mieć głowę na karku', 'ter a cabeça no lugar'], ['rzucać słowa na wiatr', 'falar da boca para fora'],
    ['gruba ryba', 'peixe grande, figurão'], ['owijać w bawełnę', 'enrolar, fazer rodeios'], ['czuć się jak ryba w wodzie', 'sentir-se como peixe na água'],
    ['zbić z tropu', 'desconcertar'], ['mieć coś na końcu języka', 'estar na ponta da língua'], ['od deski do deski', 'de cabo a rabo'], ['w gorącej wodzie kąpany', 'impaciente, esquentado'],
  ]},
  { t: 'Conectores de texto argumentativo', pl: 'Wyrażenia w tekście argumentacyjnym', w: [
    ['po pierwsze… po drugie…', 'em primeiro lugar… em segundo…'], ['ponadto / co więcej', 'além disso'], ['zatem / w związku z tym', 'portanto'], ['w rezultacie', 'como resultado'],
    ['niemniej jednak', 'no entanto'], ['wprawdzie… ale…', 'é verdade que… mas…'], ['pomimo tego, że', 'apesar de'], ['zarówno… jak i…', 'tanto… quanto…'],
    ['nie tylko… lecz także…', 'não só… mas também…'], ['w przeciwieństwie do', 'ao contrário de'], ['biorąc pod uwagę', 'levando em conta'], ['należy podkreślić, że', 'é preciso ressaltar que'],
    ['trudno się nie zgodzić', 'é difícil discordar'], ['reasumując', 'em resumo'], ['moim zdaniem', 'na minha opinião'], ['z całą pewnością', 'com toda a certeza'],
  ]},
]);
