/* ---------- Lição guiada (passo a passo) e Revisão espaçada ---------- */
const SRS_INT = [0, 1, 2, 4, 7, 15, 30, 60];
const dayPlus = n => { const d = new Date(); d.setDate(d.getDate() + n); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
let wordIdx = null;
function wordIndex() {
  if (wordIdx) return wordIdx;
  wordIdx = new Map();
  for (const m of COURSE.meta) {
    for (const w of bankWords(m.id)) wordIdx.set(wkey(m.id, w.pl), { pl: w.pl, pt: w.pt, note: w.note, lvl: m.id, ex: null });
    for (const c of level(m.id)) for (const w of chWords(m.id, c)) wordIdx.set(wkey(m.id, w.pl), { pl: w.pl, pt: w.pt, note: w.note, lvl: m.id, c: c.n, ex: w.ex });
  }
  return wordIdx;
}
const srs = () => store.data.srs || (store.data.srs = {});
function srsSeed(key) { const s = srs(); if (!s[key] && wordIndex().has(key)) s[key] = { b: 1, d: dayPlus(1) }; }
function srsGrade(key, ok) {
  const s = srs(); const e = s[key] || (s[key] = { b: 0, d: today() });
  if (ok) { e.b = Math.min(7, e.b + 1); e.d = dayPlus(SRS_INT[e.b]); } else { e.b = 1; e.d = dayPlus(1); }
}
function srsSync() { for (const k of Object.keys(store.data.known)) srsSeed(k); }
const srsDueKeys = () => { const t = today(); return Object.keys(srs()).filter(k => srs()[k].d <= t && wordIndex().has(k)).sort((a, b) => srs()[a].d < srs()[b].d ? -1 : 1); };
const srsCountOn = day => Object.values(srs()).filter(e => e.d === day).length;

/* Itens: intro, tip, mean, say, listen, match, cloze, order, gcheck, dlg, type */
function tokItem(text, pt) {
  const toks = text.split(' '); let s = shuffle(toks);
  for (let i = 0; i < 6 && s.join(' ') === text; i++) s = shuffle(toks);
  return { k: 'order', text, pt, pool: s.map((t, i) => ({ t, i })), built: [] };
}
function choiceItem(k, w, pool) {
  const field = k === 'mean' ? 'pt' : 'pl';
  const show = x => field === 'pl' ? firstForm(x.pl) : x.pt;
  const ans = show(w);
  const others = shuffle(pool.filter(x => x.pl !== w.pl && show(x) !== ans).map(show));
  return { k, w, ans, opts: shuffle([ans, ...[...new Set(others)].slice(0, 3)]) };
}
function buildLesson(lvl, ch, b) {
  const batches = batchesOf(lvl, ch), words = batches[b], pool = chWords(lvl, ch), can = audio.can(), T = [];
  words.forEach((w, i) => { T.push({ k: 'intro', w }); if (i > 0) T.push(choiceItem('mean', words[i - 1], pool)); });
  T.push(choiceItem('mean', words[words.length - 1], pool));
  T.push({ k: 'match', words, m: makeMatch(words) });
  shuffle(words).slice(0, 2).forEach(w => T.push(choiceItem(can ? 'listen' : 'say', w, pool)));
  makeCloze(shuffle(words).slice(0, 3), pool).forEach(q => T.push(Object.assign({ k: 'cloze' }, q)));
  const g = ch.grammar[b % ch.grammar.length], checks = checksOf(lvl, ch.n);
  if (g) T.push({ k: 'tip', g });
  if (checks.length) T.push({ k: 'gcheck', c: checks[b % checks.length] });
  const ow = shuffle(words.filter(w => w.ex && plainEx(w.ex[0]).split(' ').length <= 8))[0];
  if (ow) T.push(Object.assign(tokItem(plainEx(ow.ex[0]), ow.ex[1]), { w: ow }));
  const L = ch.dialogue.l;
  if (L.length > 2) {
    const j = (b * 3) % (L.length - 1), prev = L[j], line = L[j + 1];
    const opts = shuffle([line[1], ...shuffle(L.filter(x => x[1] !== line[1] && x[1] !== prev[1]).map(x => x[1])).slice(0, 2)]);
    T.push({ k: 'dlg', prev, line, opts, ans: line[1], title: ch.dialogue.t });
  }
  shuffle(words).slice(0, 2).forEach(w => T.push({ k: 'type', w, ans: w.pl.split(' / ').map(s => speakable(s).replace(/[?!.]$/, '')) }));
  return { mode: 'les', lvl, n: ch.n, b, items: T, i: 0, st: null, right: 0, graded: 0, again: new Set(), seen: new Set() };
}
function buildReview() {
  const keys = srsDueKeys().slice(0, 20), idx = wordIndex(), T = [];
  for (const k of keys) {
    const w = idx.get(k), e = srs()[k]; if (!w) continue;
    const pool = [...levelVocab(w.lvl).values()];
    let kind = e.b <= 2 ? 'mean' : e.b <= 4 ? (audio.can() && e.b === 3 ? 'listen' : 'say') : 'type';
    if (kind === 'type' && w.ex && clozeOf(w.ex[0]) && w.c && Math.random() < .5) { const q = makeCloze([w], chWords(w.lvl, findCh(w.lvl, w.c)))[0]; if (q && q.opts.length > 1) { T.push(Object.assign({ k: 'cloze', key: k }, q)); continue; } }
    if (kind === 'type') T.push({ k: 'type', w, key: k, ans: w.pl.split(' / ').map(s => speakable(s).replace(/[?!.]$/, '')) });
    else T.push(Object.assign(choiceItem(kind, w, pool), { key: k }));
  }
  return { mode: 'rev', items: shuffle(T), i: 0, st: null, right: 0, graded: 0, again: new Set(), seen: new Set(), total: T.length };
}
const LS_LABEL = { intro: 'Palavra nova', tip: 'Dica de gramática', mean: 'O que significa?', say: 'Como se diz em polonês?', listen: 'Ouça e escolha', match: 'Ligue os pares', cloze: 'Complete a frase', order: 'Monte a frase', gcheck: 'Escolha a forma certa', dlg: 'Continue o diálogo', type: 'Escreva em polonês' };
const lsKey = (R, t) => t.key || (t.w ? wkey(R.lvl || t.w.lvl, t.w.pl) : null);

function runnerHTML(R) {
  const t = R.items[R.i], st = R.st;
  const pct = Math.round(R.i / R.items.length * 100);
  const exit = R.mode === 'les' ? `#${R.lvl}-${R.n}` : '#nivel-' + ui.lvl;
  const bar = `<div class="lsbar"><a class="lsx" href="${exit}" data-act="lsquit" aria-label="Sair">✕</a><span class="track"><i style="width:${pct}%"></i></span><span class="wc num">${Math.min(R.i + 1, R.items.length)}/${R.items.length}</span></div>`;
  if (!t) return bar + lsEndHTML(R);
  const choice = (opts, ans, pl) => `<div class="opts one">${opts.map((o, j) => `<button type="button" data-act="lspick" data-o="${j}" ${st ? 'disabled' : ''} ${pl ? 'lang="pl"' : ''} class="${st && o === ans ? 'right' : ''} ${st && st.pick === o && o !== ans ? 'wrong' : ''}">${esc(o)}</button>`).join('')}</div>`;
  let body = '', cont = false;
  if (t.k === 'intro') { cont = true; body = `<div class="lsword" lang="pl">${esc(t.w.pl)}</div><div class="bar-actions" style="justify-content:center">${sayBtn(firstForm(t.w.pl), 'a palavra')}<button class="btn ghost sm" type="button" data-act="slow" data-t="${esc(firstForm(t.w.pl))}">devagar</button></div>
      <div class="lstr">${esc(t.w.pt)}</div>${t.w.note ? `<div class="meta">${esc(t.w.note)}</div>` : ''}${exampleBlock(t.w.ex)}<p class="meta">Ouça e repita em voz alta.</p>`; }
  else if (t.k === 'tip') { cont = true; body = `<div class="gram lstip"><h4>${esc(t.g.t)}</h4>${t.g.h.replace(/<table>/g, '<div class="tblwrap"><table>').replace(/<\/table>/g, '</table></div>')}</div>`; }
  else if (t.k === 'mean') body = `<div class="lsword sm" lang="pl">${esc(t.w.pl)} ${sayBtn(firstForm(t.w.pl), '', true)}</div>${choice(t.opts, t.ans)}`;
  else if (t.k === 'say') body = `<div class="lsword sm">${esc(t.w.pt)}</div>${choice(t.opts, t.ans, true)}`;
  else if (t.k === 'listen') body = `<div class="bar-actions" style="justify-content:center"><button class="btn sm" type="button" data-say="${esc(t.ans)}">▶ Ouvir</button><button class="btn ghost sm" type="button" data-act="slow" data-t="${esc(t.ans)}">devagar</button></div>${choice(t.opts, t.ans, true)}`;
  else if (t.k === 'match') body = matchHTML(t.m, 'lsmatch');
  else if (t.k === 'cloze') body = `<div class="clz" lang="pl">${esc(t.a)}<span class="blank">${st ? esc(st.pick) : '____'}</span>${esc(t.b)}</div><div class="hint">${esc(t.pt)}</div>${choice(t.opts, t.ans, true)}`;
  else if (t.k === 'gcheck') { const c = t.c; body = `<div class="clz">${esc(c[0]).replace('___', `<span class="blank">${st ? esc(st.pick) : '____'}</span>`)}</div>${choice(c[1], c[1][c[2]], true)}`; }
  else if (t.k === 'dlg') body = `<div class="lsdlg"><div class="who">${esc(t.prev[0])}</div><div lang="pl">${esc(t.prev[1])} ${sayBtn(t.prev[1], 'a fala', true)}</div><div class="hint">${esc(t.prev[2])}</div></div>
      <p class="meta">${esc(t.line[0])} responde: <em>${esc(t.line[2])}</em></p>${choice(t.opts, t.ans, true)}`;
  else if (t.k === 'order') body = `<div class="hint" style="margin:0 0 6px">${esc(t.pt)}</div>
      <div class="tokens built">${t.built.map((x, j) => `<button type="button" data-act="lsunpick" data-j="${j}" ${st ? 'disabled' : ''} lang="pl">${esc(x.t)}</button>`).join('')}</div>
      <div class="tokens">${t.pool.map((x, j) => `<button type="button" data-act="lstok" data-j="${j}" ${st ? 'disabled' : ''} lang="pl">${esc(x.t)}</button>`).join('')}</div>
      ${!t.pool.length && !st ? `<button class="btn sm" type="button" data-act="lscheck">Verificar</button>` : ''}`;
  else if (t.k === 'type') body = `<div class="lsword sm">${esc(t.w.pt)}</div>${t.w.ex ? `<div class="hint">Exemplo: ${esc(t.w.ex[1])}</div>` : ''}${keysHTML()}
      <div class="bar-actions"><input class="pinput ${st ? st.res : ''}" id="linput" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" lang="pl" value="${st ? esc(st.v) : ''}" ${st ? 'disabled' : ''} aria-label="Sua resposta">${st ? '' : '<button class="btn sm" type="button" data-act="lscheck">Verificar</button>'}</div>`;
  const again = R.again.has(R.i) ? '<span class="lsagain">de novo</span>' : '';
  return `${bar}<div class="lscard"><div class="prompt">${LS_LABEL[t.k]} ${again}</div>${body}</div>
    ${cont ? `<div class="lsfoot"><button class="btn accent" type="button" data-act="lsnext" id="lsnext">Continuar →</button></div>` : st ? lsFeedback(t, st) : ''}`;
}
function lsAnswer(t) { return t.k === 'gcheck' ? t.c[1][t.c[2]] : t.k === 'type' ? t.ans[0] : t.k === 'order' ? t.text : t.ans; }
function lsFeedback(t, st) {
  const ok = st.res !== 'wrong', ans = lsAnswer(t);
  const full = t.k === 'cloze' ? t.a + t.ans + t.b : t.k === 'gcheck' && /___/.test(t.c[0]) && !/:/.test(t.c[0]) ? t.c[0].replace('___', ans).replace(/\(.*?\)/g, '') : t.k === 'match' ? '' : ans;
  const msg = t.k === 'match' ? (st.miss ? `Feito, com ${st.miss} erro(s).` : 'Perfeito!') : st.res === 'right' ? 'Certo!' : st.res === 'close' ? `Quase: confira os acentos. <b>${esc(ans)}</b>` : `Resposta: <b>${esc(ans)}</b>`;
  const expl = t.k === 'gcheck' ? `<div class="meta">${esc(t.c[3])}</div>` : '';
  const ex = !ok && t.w && t.w.ex && t.k !== 'cloze' ? `<div class="example small"><div class="exl" lang="pl">${markHTML(t.w.ex[0])}</div><div class="ext">${esc(t.w.ex[1])}</div></div>` : '';
  return `<div class="lsfoot ${ok ? 'ok' : 'bad'}"><div class="lsmsg">${msg} ${full ? sayBtn(full, 'a resposta', true) : ''}${expl}${ex}${!ok && t.k !== 'match' ? '<div class="meta">Esta volta no fim.</div>' : ''}</div>
    <button class="btn ${ok ? 'accent' : ''}" type="button" data-act="lsnext" id="lsnext">Continuar →</button></div>`;
}
function lsEndHTML(R) {
  const pct = R.graded ? Math.round(R.right / R.graded * 100) : 100;
  if (R.mode === 'rev') {
    const left = srsDueKeys().length, tom = srsCountOn(dayPlus(1));
    return `<div class="wcard"><div class="face">${pct}%</div><p class="meta">Revisão feita: ${R.total} palavras, ${R.right} de ${R.graded} respostas certas de primeira.</p>
      <p class="meta">${left ? `Ainda há ${left} para hoje.` : 'Nada mais para hoje.'} Amanhã: ${tom} palavra(s).</p>
      <div class="bar-actions" style="justify-content:center">${left ? '<button class="btn accent" type="button" data-act="rvstart">Mais uma rodada</button>' : ''}<a class="btn ghost sm" href="#nivel-${ui.lvl}">Voltar ao curso</a></div></div>`;
  }
  const ch = findCh(R.lvl, R.n), nb = batchesOf(R.lvl, ch).length;
  return `<div class="wcard"><div class="face">Lição ${R.b + 1} concluída</div><p class="meta">${pct}% de acerto de primeira. As palavras desta lição entraram na sua revisão diária.</p>
    <div class="bar-actions" style="justify-content:center">${R.b < nb - 1 ? `<button class="btn accent" type="button" data-act="lsgo" data-b="${R.b + 1}">Próxima lição →</button>` : `<a class="btn accent" href="#${R.lvl}-${R.n}-gramatica">Ir para a gramática completa →</a>`}
    <a class="btn ghost sm" href="#${R.lvl}-${R.n}">Voltar ao capítulo</a></div></div>`;
}
function lsRecord(R, t, res, extra) {
  R.st = Object.assign({ res }, extra || {});
  const ok = res !== 'wrong';
  const first = !R.seen.has(t); R.seen.add(t);
  if (first) { R.graded++; if (ok) R.right++; }
  const k = lsKey(R, t);
  if (k && first) {
    if (R.mode === 'rev') srsGrade(k, ok);
    else { store.setBox(k, ok ? store.box(k) + 1 : Math.min(store.box(k), 1)); srsSeed(k); }
  }
  if (!ok && t.k !== 'match' && !t.requeued) { const c = Object.assign({}, t, { requeued: true }); if (c.k === 'order') { c.pool = shuffle(t.text.split(' ')).map((x, i) => ({ t: x, i })); c.built = []; } if (c.opts) c.opts = shuffle(c.opts); R.items.push(c); R.again.add(R.items.length - 1); R.seen.add(c); }
  if (ok && audio.can() && t.k !== 'match') { const ans = lsAnswer(t); audio.say(t.k === 'cloze' ? t.a + t.ans + t.b : ans); }
  store.log(); store.save();
}
function lsFinish(R) {
  if (R.mode !== 'les') return;
  const ch = findCh(R.lvl, R.n), id = chId(R.lvl, R.n), p = store.get(id), nb = batchesOf(R.lvl, ch).length;
  for (const w of batchesOf(R.lvl, ch)[R.b]) srsSeed(wkey(R.lvl, w.pl));
  p.vb = Math.max(p.vb || 0, R.b + 1);
  if (p.vb >= nb && !p.vocab) { p.vocab = true; toast('Etapa Palavras concluída'); }
  store.data.last = id; store.log(3); store.save();
}
function lessonsCard(ch, id) {
  const nb = batchesOf(view.lvl, ch).length, vb = Math.min(store.get(id).vb || 0, nb);
  return `<section class="lessons"><div><div class="eyebrow">Lição guiada · passo a passo</div>
    <h3>${vb >= nb ? 'Todas as lições feitas' : vb ? `Lição ${vb + 1} de ${nb}` : `${nb} lições curtas`}</h3>
    <p class="meta">Uma tela por vez: palavra nova, teste, pares, áudio, exemplo, dica de gramática e um trecho do diálogo. Uns 5 minutos cada.</p></div>
    <div class="lchips">${Array.from({ length: nb }, (_, i) => `<button type="button" data-act="lsgo" data-b="${i}" class="${i < vb ? 'done' : i === vb ? 'next' : ''}" aria-label="Lição ${i + 1}">${i < vb ? '✓' : i + 1}</button>`).join('')}</div>
    <button class="btn accent" type="button" data-act="lsgo" data-b="${vb >= nb ? 0 : vb}">${vb >= nb ? 'Refazer a lição 1' : vb ? 'Continuar' : 'Começar a lição 1'} →</button></section>`;
}
function reviewBanner() {
  srsSync();
  const n = srsDueKeys().length;
  if (!n) return '';
  return `<a class="revbanner" href="#revisao"><span class="eyebrow">Revisão de hoje</span><b>${n} palavra${n > 1 ? 's' : ''} para revisar</b><span class="meta">${Math.max(1, Math.round(Math.min(n, 20) * 0.25))} min · revisar agora →</span></a>`;
}
function renderLesson() {
  const ch = findCh(view.lvl, view.n);
  if (!ui.ls || ui.ls.mode !== 'les' || ui.ls.n !== ch.n || ui.ls.lvl !== view.lvl) { const nb = batchesOf(view.lvl, ch).length; ui.ls = buildLesson(view.lvl, ch, Math.min(store.get(chId(view.lvl, ch.n)).vb || 0, nb - 1)); }
  app.innerHTML = `<div class="lsmain"><div class="eyebrow lsctx">${view.lvl.toUpperCase()} · Cap. ${ch.n} · ${esc(ch.pl)} · Lição ${ui.ls.b + 1}</div>${runnerHTML(ui.ls)}</div>`;
  lsAuto();
}
function renderReview() {
  srsSync();
  const n = srsDueKeys().length, total = Object.keys(srs()).length;
  if (!ui.ls || ui.ls.mode !== 'rev') {
    const next = [1, 2, 3, 7].map(d => [d, srsCountOn(dayPlus(d))]);
    app.innerHTML = `<section class="hero"><div><div class="eyebrow">Revisão espaçada</div><h1>${n ? `<em>${n}</em> palavra${n > 1 ? 's' : ''} para hoje` : 'Tudo em <em>dia</em>'}</h1>
      <p>${total ? `Cada palavra que você aprende volta para revisão no momento certo: logo no dia seguinte, depois em 2, 4, 7, 15, 30 e 60 dias. Se errar, ela volta a aparecer amanhã.` : 'Ainda não há palavras na revisão. Faça uma lição guiada ou um bloco de palavras e elas aparecem aqui a partir de amanhã.'}</p>
      ${n ? `<button class="btn accent" type="button" data-act="rvstart">Começar a revisão${n > 20 ? ' (20 por rodada)' : ''} →</button>` : `<a class="btn accent" href="#nivel-${ui.lvl}">Ir para o curso →</a>`}</div></section>
      ${total ? `<div class="tiles"><div class="tile"><b>${total}</b><span>palavras na revisão</span></div>${next.map(([d, c]) => `<div class="tile"><b>${c}</b><span>${d === 1 ? 'amanhã' : `em ${d} dias`}</span></div>`).join('')}</div>` : ''}`;
    return;
  }
  app.innerHTML = `<div class="lsmain"><div class="eyebrow lsctx">Revisão de hoje</div>${runnerHTML(ui.ls)}</div>`;
  lsAuto();
}
function lsAuto() {
  const R = ui.ls, t = R && R.items[R.i]; if (!t || R.st) return;
  if (t.k === 'listen') setTimeout(() => audio.say(t.ans), 250);
  if (t.k === 'intro' && audio.can()) setTimeout(() => audio.say(firstForm(t.w.pl)), 250);
  if (t.k === 'type') setTimeout(() => document.getElementById('linput')?.focus(), 60);
}
function lsRerender() { render(); }
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, R = ui.ls;
  if (a === 'lsgo') { const ch = findCh(view.lvl, view.n); ui.ls = buildLesson(view.lvl, ch, +b.dataset.b); go(`${view.lvl}-${view.n}-licao`); window.scrollTo(0, 0); return; }
  if (a === 'rvstart') { ui.ls = buildReview(); if (!ui.ls.items.length) { ui.ls = null; toast('Nada para revisar agora.'); } render(); window.scrollTo(0, 0); return; }
  if (a === 'lsquit') { ui.ls = null; return; }
  if (!R || !a.startsWith('ls')) return;
  const t = R.items[R.i];
  if (a === 'lspick' && !R.st) { const opts = t.k === 'gcheck' ? t.c[1] : t.opts, pick = opts[+b.dataset.o]; lsRecord(R, t, pick === lsAnswer(t) ? 'right' : 'wrong', { pick }); }
  else if (a === 'lsmatch' && !R.st) { if (matchTap(t.m, b.dataset.side, +b.dataset.i, t.words)) { R.st = { res: t.m.miss <= 1 ? 'right' : 'wrong', miss: t.m.miss }; R.graded++; if (t.m.miss <= 1) R.right++; for (const w of t.words) srsSeed(wkey(R.lvl, w.pl)); } }
  else if (a === 'lstok') t.built.push(t.pool.splice(+b.dataset.j, 1)[0]);
  else if (a === 'lsunpick') t.pool.push(t.built.splice(+b.dataset.j, 1)[0]);
  else if (a === 'lscheck' && !R.st) {
    if (t.k === 'order') lsRecord(R, t, norm(t.built.map(x => x.t).join(' ')) === norm(t.text) ? 'right' : 'wrong');
    else { const v = (document.getElementById('linput') || {}).value || ''; if (!v.trim()) { toast('Escreva sua resposta.'); return; } lsRecord(R, t, judge(v, t.ans), { v }); }
  }
  else if (a === 'lsnext') { R.i++; R.st = null; if (R.i >= R.items.length) lsFinish(R); }
  else return;
  lsRerender();
  if (a === 'lsnext') window.scrollTo(0, 0); else document.querySelector('.lsfoot')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter' || !ui.ls) return;
  if (e.target.id === 'linput') { e.preventDefault(); document.querySelector('[data-act="lscheck"]')?.click(); }
  else if (document.getElementById('lsnext') && !e.target.matches('textarea, input')) { e.preventDefault(); document.getElementById('lsnext').click(); }
});
