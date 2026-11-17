# Polski, powoli

Curso de polonês sem pressa, para quem fala português do Brasil. Segue os temas do Busuu, num ritmo mais lento, com vocabulário em exemplos, exercícios interativos e uma redação no fim de cada capítulo.

## Conteúdo

- **A1:** 19 capítulos e 19 paradas por cidades e regiões da Polônia.
- **A2:** 12 capítulos (2 para cada capítulo do Busuu) e 6 paradas.
- **Bancos de vocabulário** do A1 ao B2.

Cada capítulo tem 5 etapas: Palavras (cartões, ligar e completar), Gramática (com teste rápido), Diálogo (com modo de fazer um papel), Prática e Redação.

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
build/extra.css       estilos extras
data/a1-*.js          capítulos do A1
data/ex-a1-*.js       exemplos e testes do A1
data/a2-*.js          capítulos do A2 (exemplos embutidos)
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
