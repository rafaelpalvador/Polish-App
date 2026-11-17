/* ---------- Voz: Whisper no aparelho (com reserva no reconhecimento do sistema) ---------- */
const WHISPER_MODEL = 'Xenova/whisper-base';
const WHISPER_LIB = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3';
const voice = {
  pipe: null, loading: null, pct: 0, failed: false, rec: null, chunks: [], busy: false, timer: null, target: null,
  pref: (() => { try { return localStorage.getItem('polski-voice') || ''; } catch (e) { return ''; } })(),
  setPref(v) { this.pref = v; try { localStorage.setItem('polski-voice', v); } catch (e) {} },
  canRecord() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder); },
  sysSR() { return window.SpeechRecognition || window.webkitSpeechRecognition || null; },
  available() { return this.canRecord() || !!this.sysSR(); },
  async loadWhisper() {
    if (this.pipe) return this.pipe;
    if (this.loading) return this.loading;
    this.loading = (async () => {
      const T = await import(WHISPER_LIB);
      T.env.allowLocalModels = false;
      const files = {};
      const device = navigator.gpu ? 'webgpu' : 'wasm';
      const opts = { device, progress_callback: p => {
        if (p.status === 'progress' && p.total) { files[p.file] = [p.loaded, p.total]; const v = Object.values(files); this.pct = Math.round(v.reduce((a, x) => a + x[0], 0) / v.reduce((a, x) => a + x[1], 0) * 100); micBox(`Baixando o reconhecimento de voz… <b class="num">${this.pct}%</b><br><span class="meta">Só na primeira vez. Depois fica guardado no aparelho.</span>`); }
      } };
      if (device === 'wasm') opts.dtype = 'q8';
      try { this.pipe = await T.pipeline('automatic-speech-recognition', WHISPER_MODEL, opts); }
      catch (e) { if (device !== 'wasm') { opts.device = 'wasm'; opts.dtype = 'q8'; this.pipe = await T.pipeline('automatic-speech-recognition', WHISPER_MODEL, opts); } else throw e; }
      micBox('Reconhecimento de voz pronto.', 1800);
      return this.pipe;
    })().catch(e => { this.failed = true; this.loading = null; throw e; });
    return this.loading;
  },
  async start(target) {
    if (this.busy) return;
    if (this.rec) { this.stop(); return; }
    this.target = target;
    const useWhisper = this.pref !== 'system' && this.canRecord() && !this.failed;
    if (useWhisper && !this.pipe && this.pref !== 'whisper') {
      micBox(`Para ouvir você, o app usa o <b>Whisper</b>, que roda no próprio aparelho. Ele baixa cerca de <b>80 MB</b> uma vez só; prefira o Wi-Fi.
        <div class="bar-actions"><button class="btn accent sm" type="button" data-act="vwhisper">Baixar e usar</button>${this.sysSR() ? '<button class="btn ghost sm" type="button" data-act="vsystem">Usar a voz do sistema</button>' : ''}<button class="btn ghost sm" type="button" data-act="vclose">Agora não</button></div>`);
      return;
    }
    if (useWhisper) {
      if (!this.pipe) { try { micBox('Preparando o reconhecimento de voz…'); await this.loadWhisper(); } catch (e) { return this.fallback(target, 'Não consegui carregar o Whisper aqui.'); } }
      return this.recordWhisper(target);
    }
    return this.recordSystem(target);
  },
  fallback(target, why) {
    if (this.sysSR()) { micBox(why + ' Vou usar o reconhecimento de voz do sistema.', 2500); return this.recordSystem(target); }
    micBox(why + ' Esta tela não tem outro reconhecimento de voz disponível.', 4000);
  },
  async recordWhisper(target) {
    let stream;
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } }); }
    catch (e) { micBox('Sem acesso ao microfone. Permita o microfone nas configurações do app ou do navegador.', 4500); return; }
    this.chunks = [];
    const rec = new MediaRecorder(stream);
    rec.ondataavailable = e => { if (e.data.size) this.chunks.push(e.data); };
    rec.onstop = async () => {
      stream.getTracks().forEach(t => t.stop());
      this.rec = null; clearTimeout(this.timer); micState('busy');
      this.busy = true;
      try {
        const blob = new Blob(this.chunks, { type: rec.mimeType || 'audio/webm' });
        const ctx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
        const buf = await ctx.decodeAudioData(await blob.arrayBuffer()); ctx.close();
        const out = await this.pipe(buf.getChannelData(0), { language: 'polish', task: 'transcribe' });
        voiceResult(target, (out && out.text || '').trim());
      } catch (e) { micBox('Não consegui entender o áudio. Tente de novo, mais perto do microfone.', 3500); }
      this.busy = false; micState('');
    };
    this.rec = rec; rec.start(); micState('rec');
    micBox('Ouvindo… toque no microfone de novo quando terminar.', 0);
    this.timer = setTimeout(() => this.stop(), 8000);
  },
  recordSystem(target) {
    const SR = this.sysSR(); if (!SR) { micBox('Reconhecimento de voz indisponível nesta tela.', 3000); return; }
    const r = new SR(); r.lang = 'pl-PL'; r.interimResults = false; r.maxAlternatives = 3;
    r.onresult = e => { const alts = [...e.results[0]].map(a => a.transcript); voiceResult(target, alts[0] || '', alts); };
    r.onerror = e => { micBox(e.error === 'not-allowed' ? 'Sem acesso ao microfone. Permita o microfone nas configurações.' : 'Não ouvi nada. Tente de novo.', 3000); };
    r.onend = () => { this.rec = null; micState(''); };
    this.rec = { stop: () => r.stop() }; r.start(); micState('rec');
    micBox('Ouvindo…', 0);
  },
  stop() { if (this.rec) { try { this.rec.stop(); } catch (e) {} } },
};
function micBox(html, ms) {
  let el = document.getElementById('micbox');
  if (!el) { el = document.createElement('div'); el.id = 'micbox'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  if (!html) { el.classList.remove('show'); return; }
  el.innerHTML = html; el.classList.add('show');
  clearTimeout(micBox.t); if (ms) micBox.t = setTimeout(() => el.classList.remove('show'), ms);
}
function micState(s) { document.querySelectorAll('.mic').forEach(b => { b.classList.toggle('rec', s === 'rec'); b.classList.toggle('busy', s === 'busy'); }); if (!s && voice.rec === null && !voice.busy) { const el = document.getElementById('micbox'); if (el && /Ouvindo/.test(el.textContent)) micBox(''); } }
const MIC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>';
const micBtn = (target, label) => voice.available() ? `<button class="mic" type="button" data-act="mic" data-target="${esc(target)}" aria-label="${esc(label || 'Falar')}">${MIC}${label ? `<span>${esc(label)}</span>` : ''}</button>` : '';
/* Parecido: 0 a 1, ignorando acentos e pontuação */
function similarity(a, b) {
  a = strip(norm(a)); b = strip(norm(b)); if (!a || !b) return 0; if (a === b) return 1;
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return 1 - d[m][n] / Math.max(m, n);
}
function voiceResult(target, text, alts) {
  micBox('');
  if (!text) { micBox('Não ouvi nada. Tente de novo.', 2500); return; }
  const clean = text.replace(/^[\s"„“”'.,!?]+|[\s"„“”'.,!?]+$/g, '');
  if (target === 'linput' || target === 'pinput') {
    const el = document.getElementById(target); if (!el || el.disabled) return;
    el.value = clean; el.dispatchEvent(new Event('input', { bubbles: true })); el.focus();
    micBox(`Ouvi: „${esc(clean)}”. Confira e toque em Verificar.`, 3000); return;
  }
  /* Repetir em voz alta: compara com a frase alvo */
  const want = target.replace(/^say:/, '');
  const score = Math.max(...[clean, ...(alts || [])].map(t => similarity(t, want)));
  const box = document.getElementById('micres');
  const verdict = score >= 0.85 ? ['ok', 'Muito bem! Deu para entender perfeitamente.'] : score >= 0.6 ? ['close', 'Quase. Ouça de novo e repita devagar.'] : ['bad', 'Ainda não. Ouça o áudio e tente outra vez.'];
  if (box) box.innerHTML = `<div class="micres ${verdict[0]}"><b>${verdict[1]}</b><span>Ouvi: „${esc(clean)}”</span></div>`;
  store.log(); store.save();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act;
  if (a === 'mic') { audio.stop(); voice.start(b.dataset.target); }
  else if (a === 'vwhisper') { voice.setPref('whisper'); micBox('Preparando…'); voice.loadWhisper().then(() => micBox('Pronto! Toque no microfone para falar.', 2500)).catch(() => voice.fallback(voice.target, 'Não consegui baixar o Whisper aqui.')); }
  else if (a === 'vsystem') { voice.setPref('system'); micBox(''); voice.recordSystem(voice.target); }
  else if (a === 'vclose') micBox('');
});
