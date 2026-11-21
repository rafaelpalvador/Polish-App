/* A1 — "Para entender sem complicação": explicação simples + comparação com o português do Brasil.
   Aparece como o primeiro quadro da Gramática de cada capítulo. */
(function () {
  const S = (n, t, h) => COURSE.simple('a1', n, { t, h });

  S(1, 'Para entender sem complicação', `
    <p>Neste capítulo, quase não há gramática: só três ideias.</p>
    <p><b>1. Existe o "você" e existe o "o senhor".</b> Com amigos, você usa <i>cześć</i> e trata a pessoa por <b>ty</b> (tu/você). Com desconhecidos, em lojas e no trabalho, usa <i>dzień dobry</i> e trata por <b>pan</b> (o senhor) ou <b>pani</b> (a senhora).</p>
    <div class="br"><b>No português:</b> é igual ao "você" × "o senhor". A diferença é de costume: no Brasil quase todo mundo vira "você" rapidinho; na Polônia, o formal dura muito mais. Na dúvida, comece formal.</div>
    <p><b>2. O "się" é o nosso "me/se".</b> <i>Nazywam się Lucas</i> = "<em>Me</em> chamo Lucas". <i>Jak się nazywasz?</i> = "Como <em>te</em> chamas?". Sempre que vir <b>się</b>, pense no "se" de "chamar-<em>se</em>", "sentir-<em>se</em>".</p>
    <p><b>3. "Mam na imię" é "tenho por nome".</b> <i>Mam</i> = tenho. É um jeito antigo de falar, como se em português disséssemos "tenho por nome Lucas". Os poloneses usam muito.</p>
    <div class="br"><b>Resumo:</b> <i>Mam na imię Lucas</i> (só o primeiro nome) · <i>Nazywam się Lucas Silva</i> (nome completo, mais formal) · <i>Jestem Lucas</i> (o mais simples: "sou o Lucas").</div>`);

  S(2, 'Para entender sem complicação', `
    <p><b>"Jak się masz?" ao pé da letra é "Como você se tem?".</b> Não tente traduzir palavra por palavra: decore como um bloco, igual a "E aí, beleza?".</p>
    <p><b>O formal usa o verbo de "ele".</b> Para falar com <i>pan</i> ou <i>pani</i>, o verbo vai para a forma de "ele/ela": <i>Jak się <b>masz</b>?</i> (você) → <i>Jak się pan <b>ma</b>?</i> (o senhor).</p>
    <div class="br"><b>No português é exatamente a mesma coisa!</b> A gente diz "Como <em>vais</em>?" (tu) mas "Como <em>vai</em> o senhor?". O "o senhor" sempre usa o verbo de "ele". Você já sabe essa regra sem perceber.</div>
    <p><b>Respostas em escala.</b> Pense num termômetro: <i>świetnie</i> (ótimo) → <i>dobrze</i> (bem) → <i>w porządku</i> (tudo certo) → <i>tak sobie</i> (mais ou menos) → <i>źle</i> (mal).</p>
    <div class="br"><b>Dica cultural:</b> no Brasil, "tudo bem?" é quase só um oi. Na Polônia, <i>Jak się masz?</i> é uma pergunta de verdade, e muitas vezes a pessoa responde com sinceridade ("<i>tak sobie</i>…").</div>`);

  S(3, 'Para entender sem complicação', `
    <p><b>"Ser" e "estar" são uma palavra só: być.</b> O polonês não separa "sou brasileiro" de "estou cansado". Tudo é <i>jestem</i>.</p>
    <table><tr><th>Polonês</th><th>Português</th></tr>
    <tr><td><i>jestem</i></td><td>sou / estou</td></tr>
    <tr><td><i>jesteś</i></td><td>és / estás (você é / está)</td></tr>
    <tr><td><i>jest</i></td><td>é / está</td></tr></table>
    <div class="br"><b>No português</b> o pronome às vezes some: "Sou do Brasil" em vez de "Eu sou do Brasil". No polonês é igual: o verbo já diz quem é, então <i>ja</i>, <i>ty</i> quase sempre caem. <i>Jestem z Brazylii</i> já basta.</div>
    <p><b>Não existe "o", "a", "um", "uma".</b> O polonês não tem artigos. <i>To jest kolega</i> pode ser "este é <em>o</em> colega" ou "este é <em>um</em> colega": o contexto decide.</p>
    <p><b>Depois de "z" (de), o nome do país muda o final.</b> <i>Polska</i> → <i>z Polski</i>; <i>Brazylia</i> → <i>z Brazylii</i>.</p>
    <div class="br"><b>Pense assim:</b> em português o "de" muda e vira "do", "da" ("<em>do</em> Brasil", "<em>da</em> Polônia"). Em polonês o "z" fica igual e quem muda é o final do país. Por enquanto, decore os países como blocos: <i>z Brazylii</i>, <i>z Polski</i>, <i>z Portugalii</i>.</div>`);

  S(4, 'Para entender sem complicação', `
    <p><b>O adjetivo concorda com quem fala, igual ao português.</b> Homem: <i>jestem zmęczon<b>y</b></i> (cansad<em>o</em>). Mulher: <i>jestem zmęczon<b>a</b></i> (cansad<em>a</em>).</p>
    <div class="br"><b>No português:</b> "cansad<em>o</em>/cansad<em>a</em>", "content<em>e</em>" (não muda). No polonês, o masculino quase sempre termina em <b>-y</b> ou <b>-i</b>, e o feminino em <b>-a</b>. O "a" do feminino é igual ao nosso, fica fácil de lembrar.</div>
    <p><b>"Czy" é uma etiqueta de pergunta.</b> Colocado no começo, avisa: "isto é uma pergunta de sim ou não". <i>Czy jesteś zmęczony?</i> = "Você está cansado?".</p>
    <div class="br"><b>No português</b> a gente só muda a entonação: "Você está cansado?". No polonês falado também dá para fazer só com a entonação. O <i>czy</i> funciona como um "por acaso" neutro, que deixa a pergunta clara, principalmente por escrito.</div>
    <p><b>Eles × elas: a mesma regra nossa.</b> <i>oni</i> = grupo com pelo menos um homem; <i>one</i> = só mulheres (ou coisas e animais).</p>
    <div class="br"><b>Igual ao português:</b> dez mulheres e um homem viram "eles". No polonês também: <i>oni</i>.</div>`);

  S(5, 'Para entender sem complicação', `
    <p><b>Verbos têm finais fixos para cada pessoa, como no português.</b> Veja <i>mieszkać</i> (morar):</p>
    <table><tr><th>Polonês</th><th>Português</th></tr>
    <tr><td><i>mieszka<b>m</b></i></td><td>mor<em>o</em></td></tr>
    <tr><td><i>mieszka<b>sz</b></i></td><td>mora<em>s</em> (você mora)</td></tr>
    <tr><td><i>mieszka</i></td><td>mor<em>a</em></td></tr></table>
    <div class="br"><b>Truque:</b> o "tu" do português termina em <b>-s</b> (moras, falas). No polonês, o "tu" termina em <b>-sz</b>, que soa quase como o nosso "s" chiado carioca. "Mora<em>s</em>" → <i>mieszka<b>sz</b></i>.</div>
    <p><b>Depois de "w" (em), o lugar muda o final.</b> <i>Polska</i> → <i>w Polsce</i>; <i>Warszawa</i> → <i>w Warszawie</i>; <i>Kraków</i> → <i>w Krakowie</i>.</p>
    <div class="br"><b>Por que isso acontece?</b> Em português, a palavra que vem depois de "em" não muda (só o artigo: "<em>na</em> Polônia", "<em>no</em> Brasil"). Em polonês, o nome muda o final dependendo do papel na frase. Isso se chama <b>caso</b>. Este é o caso de "lugar onde" (o <b>locativo</b>). Não precisa decorar regras agora: aprenda cada cidade com o <i>w</i> junto.</div>
    <p><b>z × w:</b> <i>Jestem <b>z</b> Brazylii, mieszkam <b>w</b> Polsce</i> = "Sou <em>do</em> Brasil, moro <em>na</em> Polônia". <b>z</b> = de onde veio; <b>w</b> = onde está.</p>`);

  S(6, 'Para entender sem complicação', `
    <p><b>O grande padrão: "eu" termina em -m (ou -ę), "você" termina em -sz.</b> Quase todos os verbos poloneses seguem isso no presente.</p>
    <table><tr><th>eu</th><th>você (tu)</th><th>ele/ela</th></tr>
    <tr><td><i>mam</i> (tenho)</td><td><i>masz</i></td><td><i>ma</i></td></tr>
    <tr><td><i>mówię</i> (falo)</td><td><i>mówisz</i></td><td><i>mówi</i></td></tr></table>
    <div class="br"><b>No português</b> também temos um padrão: "eu" termina quase sempre em <em>-o</em> (falo, moro, tenho) e "tu" em <em>-s</em> (falas, moras, tens). No polonês: "eu" = <b>-m/-ę</b>, "tu" = <b>-sz</b>.</div>
    <p><b>"Po polsku" = "à moda polonesa".</b> Para línguas, o polonês diz "falar <em>à polonesa</em>": <i>mówię po polsku</i>, <i>po portugalsku</i>, <i>po angielsku</i>.</p>
    <div class="br"><b>Pense em "à moda":</b> "bife à milanesa", "falar à portuguesa". O <i>po</i> faz esse papel. Por isso, para dizer o idioma, sempre: <i>po</i> + nome terminado em <b>-u</b>.</div>
    <p><b>Negar é como no português: "nie" antes do verbo.</b> <i>Nie mówię po niemiecku</i> = "Não falo alemão".</p>
    <div class="br"><b>Dupla negação: existe nas duas línguas!</b> "Não conheço <em>ninguém</em>" = <i>Nie znam <b>nikogo</b></i>. O inglês estranha isso; você não vai estranhar.</div>`);

  S(7, 'Para entender sem complicação', `
    <p><b>Quatro jeitos de dizer "você":</b></p>
    <table><tr><th>Polonês</th><th>Português</th><th>Quando</th></tr>
    <tr><td><i>ty</i></td><td>tu / você</td><td>amigos, família, colegas próximos</td></tr>
    <tr><td><i>pan</i></td><td>o senhor</td><td>homem desconhecido, cliente, chefe</td></tr>
    <tr><td><i>pani</i></td><td>a senhora</td><td>mulher desconhecida (mesmo jovem!)</td></tr>
    <tr><td><i>państwo</i></td><td>os senhores</td><td>grupo misto ou casal</td></tr></table>
    <div class="br"><b>Atenção:</b> no Brasil, "senhora" soa como "pessoa mais velha". Em polonês, <i>pani</i> é só educado: serve para uma moça de 20 anos na padaria. Não ofende ninguém.</div>
    <p><b>Sobrenomes mudam com o gênero.</b> <i>Pan Kowalski</i>, mas <i>pani Kowalska</i>. Os que terminam em <b>-ski/-cki</b> viram <b>-ska/-cka</b> para mulheres.</p>
    <div class="br"><b>Imagine</b> se no Brasil o sobrenome "Santos" virasse "Santas" para mulheres. É o que acontece lá: o sobrenome funciona como um adjetivo e concorda com a pessoa.</div>
    <p><b>Pedir desculpa e chamar alguém:</b> <i>Przepraszam, czy…?</i> = "Com licença, por acaso…?". <i>Proszę pana!</i> = "Senhor!" (para chamar a atenção, como o nosso "Ô, moço!", só que educado).</p>`);

  S(8, 'Para entender sem complicação', `
    <p><b>Verbos em -ować perdem o "ow" e ganham "uj".</b> <i>prac<b>ow</b>ać</i> → <i>prac<b>uj</b>ę</i> (trabalho), <i>prac<b>uj</b>esz</i>, <i>prac<b>uj</b>e</i>.</p>
    <div class="br"><b>No português existe algo parecido:</b> verbos em "-ear" ganham um "i" no presente: pass<em>e</em>ar → pass<em>ei</em>o, pass<em>ei</em>a. Não é irregular, é só a regra da família. Em polonês, a família <b>-ować</b> sempre faz <b>-uję, -ujesz, -uje</b>: <i>studiować → studiuję</i>, <i>kupować → kupuję</i>.</div>
    <p><b>"Jako" = "como" (na função de).</b> <i>Pracuję jako nauczyciel</i> = "Trabalho <em>como</em> professor". Depois de <i>jako</i>, a profissão fica do jeito do dicionário.</p>
    <p><b>"Jestem nauczycielem": a palavra ganha um final.</b> Com <i>jestem</i> + profissão, o polonês acrescenta <b>-em</b> (homem) ou <b>-ą</b> (mulher): <i>Jestem lekarz<b>em</b></i>, <i>Jestem lekark<b>ą</b></i>.</p>
    <div class="br"><b>Não se assuste:</b> é outro "caso" (o <b>instrumental</b>). Por enquanto, guarde o atalho: se quiser evitar o final, use <i>Pracuję jako…</i>, que é igualmente natural.</div>
    <p><b>Onde trabalho: w + lugar.</b> <i>w biurze</i> (no escritório), <i>w banku</i> (no banco), <i>w firmie</i> (na empresa). É o mesmo "w" de <i>w Polsce</i>.</p>`);

  S(9, 'Para entender sem complicação', `
    <p><b>O polonês tem três gêneros: masculino, feminino e neutro.</b> Na maioria das vezes, o final da palavra entrega o gênero:</p>
    <table><tr><th>Termina em…</th><th>Gênero</th><th>Exemplos</th></tr>
    <tr><td>consoante</td><td>masculino</td><td><i>dom</i>, <i>stół</i>, <i>telefon</i></td></tr>
    <tr><td>-a</td><td>feminino</td><td><i>kawa</i>, <i>lampa</i>, <i>torba</i></td></tr>
    <tr><td>-o, -e, -ę</td><td>neutro</td><td><i>okno</i>, <i>krzesło</i>, <i>imię</i></td></tr></table>
    <div class="br"><b>Pegadinha para brasileiros:</b> em português, "-o" é masculino (livr<em>o</em>, carr<em>o</em>). Em polonês, "-o" é <b>neutro</b>: <i>okno</i> (janela), <i>biurko</i> (escrivaninha). Não é masculino! E o gênero nem sempre bate com o português: <i>kawa</i> (café) é feminino.</div>
    <p><b>Este / esta / isto:</b> <i>ten</i> (masc.), <i>ta</i> (fem.), <i>to</i> (neutro): <i>ten telefon</i>, <i>ta lampa</i>, <i>to okno</i>.</p>
    <div class="br"><b>E o "To jest…"?</b> Para apresentar qualquer coisa, use sempre <i>to</i>, sem pensar no gênero: <i>To jest lampa. To jest telefon.</i> Igual ao nosso "<em>Isto</em> é uma lâmpada", "<em>Isto</em> é um telefone".</div>`);

  S(10, 'Para entender sem complicação', `
    <p><b>"Gdzie jest…?" = "Onde fica…?" / "Onde está…?"</b> O mesmo <i>jest</i> do verbo ser/estar serve para "ficar": <i>Gdzie jest apteka?</i> = "Onde fica a farmácia?".</p>
    <p><b>"w prawo" × "po prawej": movimento × posição.</b></p>
    <table><tr><th>Polonês</th><th>Português</th><th>Ideia</th></tr>
    <tr><td><i>Proszę skręcić <b>w prawo</b></i></td><td>vire <em>para a</em> direita</td><td>movimento</td></tr>
    <tr><td><i>Apteka jest <b>po prawej</b></i></td><td>a farmácia fica <em>à</em> direita</td><td>posição</td></tr></table>
    <div class="br"><b>No português temos a mesma diferença:</b> "<em>para a</em> direita" (direção) × "<em>à</em> direita" (lugar). Se você conseguir dizer em português, sabe qual usar em polonês.</div>
    <p><b>"Proszę" + verbo no infinitivo = pedido educado.</b> <i>Proszę iść prosto</i> = "Siga reto, por favor"; <i>Proszę skręcić w lewo</i> = "Vire à esquerda, por favor".</p>
    <div class="br"><b>Você já viu isso em placa brasileira:</b> "<em>Favor</em> não fumar", "<em>Favor</em> aguardar". É exatamente o mesmo esquema: "favor" + infinitivo = <i>proszę</i> + infinitivo. Assim você não precisa conjugar nada!</div>`);
})();
