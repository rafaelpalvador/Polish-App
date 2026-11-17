# Polski, powoli

Curso de polonês sem pressa, para quem fala português do Brasil. Segue os temas do Busuu, num ritmo mais lento, com vocabulário em exemplos, exercícios interativos e uma redação no fim de cada capítulo.

## Conteúdo

- **A1:** 25 capítulos (19 do Busuu + 6 do Babbel A1, sem repetir assuntos) e 19 paradas por cidades e regiões da Polônia.
- **A2:** 20 capítulos (12 do Busuu + 8 do Babbel A2, sem repetir assuntos) e 6 paradas.
- **B1:** 8 capítulos (2 para cada capítulo do Busuu) e 4 paradas.
- **B2:** 10 capítulos (24 lições do Busuu), 409 palavras com exemplo e 5 paradas (Hel, Bieszczady, Toruń, Łódź, Cracóvia).
- **Bancos de vocabulário** do A1 ao B2 (A1 1306, A2 1496, B1 1124, B2 915 palavras, somando capítulos e bancos; metas: A2 ~1500, B1 2000–2500).

Cada capítulo começa com **lições guiadas**, uma tela por vez como no Babbel: palavra nova com áudio, teste logo em seguida, pares, escuta, exemplo para completar, dica de gramática, trecho do diálogo e frase para montar. Erros voltam no fim da lição.

A **revisão espaçada** (aba Revisão) traz de volta cada palavra aprendida em 1, 2, 4, 7, 15, 30 e 60 dias; se errar, ela volta no dia seguinte.

O **microfone** usa o [Whisper](https://huggingface.co/Xenova/whisper-base) rodando no próprio aparelho (via Transformers.js; cerca de 80 MB baixados na primeira vez, depois ficam em cache). Serve para repetir as palavras novas em voz alta e receber um retorno, e para ditar respostas em vez de digitar. Se o Whisper não carregar, o app usa o reconhecimento de voz do sistema, quando existe.

Depois, cada capítulo tem 5 etapas: Palavras (cartões, ligar e completar), Gramática (com teste rápido), Diálogo (com modo de fazer um papel), Prática e Redação.

## Como rodar

É uma página estática, sem build: abra `index.html` no navegador ou publique a pasta no GitHub Pages.

Fora do Claude, o app funciona assim:
- O progresso fica salvo no próprio navegador (localStorage).
- O áudio usa a voz polonesa do aparelho (instale uma voz polonesa nas configurações de fala do sistema).
- A correção de redação, as dúvidas e os exemplos gerados pela IA precisam do Claude. Fora dele, o app oferece "Copiar pedido de correção" para colar numa conversa.

## Estrutura

```
index.html            app completo (CSS e script inline)
build/app.js          cópia do script inline, para leitura
build/guided.js       lição guiada e revisão espaçada (já incluído no index.html)
build/voice.js        microfone com Whisper (já incluído no index.html)
build/extra.css       estilos extras
data/a1-*.js          capítulos do A1
data/ex-a1-*.js       exemplos e testes do A1
data/a2-*.js, b1-*.js, b2-*.js capítulos do A2, B1 e B2 (exemplos embutidos)
data/banco-mais.js ampliação dos bancos de A2, B1 e B2 (descarta palavras repetidas)
data/curiosidades*.js paradas entre capítulos
data/banco-*.js       bancos de vocabulário
```

## Adicionar um capítulo

Crie `data/b1-1.js` e inclua a tag `<script>` em `index.html`:

```js
COURSE.add('b1', {
  n: 1, gl: ['Ł', 'łódź', 'dica de pronúncia'],
  pl: 'Título em polonês', pt: 'Título em português',
  busuu: ['Lições do Busuu'], goals: ['...'],
  vocab: [{ g: 'Grupo', w: [['polski', 'português', 'nota', 'Exemplo com *palavra*.', 'Tradução.']] }],
  grammar: [{ t: 'Título', h: `<p>HTML; <i>polonês clicável</i>, <em>itálico em português</em></p>` }],
  checks: [['Frase com ___', ['a', 'b', 'c'], 1, 'Explicação']],
  dialogue: { t: 'Título', l: [['Quem', 'polski', 'português']] },
  fill: [['Frase com ___', 'resposta', 'tradução']],
  order: [['Frase para ordenar.', 'Tradução.']],
  write: { p: 'Tarefa', c: ['Checklist'], min: 80 },
});
```
