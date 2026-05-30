<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Quadern de Camp-Eloi</title>
<style>
:root{--earth:#3d2b1f;--soil:#6b4226;--clay:#a0633a;--sand:#d4a574;--wheat:#f0d9b5;--cream:#faf6f0;--vine:#2d5016;--leaf:#4a7c25;--grape:#6b2d6b;--danger:#c0392b;--warn:#e67e22;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--cream);color:var(--earth);min-height:100vh;font-size:15px;}
#login{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,var(--vine),var(--earth) 60%,var(--soil));}
.lcard{background:rgba(255,255,255,0.08);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.15);border-radius:20px;padding:48px 40px;width:100%;max-width:400px;text-align:center;}
.llogo{font-family:Georgia,serif;font-size:2rem;font-weight:900;color:#f0d9b5;margin-bottom:4px;}
.lsub{color:rgba(240,217,181,0.7);font-size:0.85rem;margin-bottom:36px;letter-spacing:1px;text-transform:uppercase;}
.llbl{color:rgba(240,217,181,0.85);font-size:0.8rem;text-transform:uppercase;letter-spacing:1.5px;display:block;margin-bottom:8px;text-align:left;}
.lsel{width:100%;padding:14px 16px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:10px;color:#f0d9b5;font-size:1rem;margin-bottom:24px;cursor:pointer;appearance:none;}
.lsel option{background:#3d2b1f;}
.lbtn{width:100%;padding:15px;background:linear-gradient(135deg,#a0633a,#d4a574);border:none;border-radius:10px;color:#3d2b1f;font-size:1rem;font-weight:600;cursor:pointer;}
.lbtn:disabled{opacity:0.6;cursor:not-allowed;}
.lmsg{margin-top:14px;color:rgba(240,217,181,0.8);font-size:0.85rem;min-height:24px;}
#app{display:none;}
.topbar{background:linear-gradient(135deg,var(--vine),var(--earth));color:#f0d9b5;padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:58px;position:sticky;top:0;z-index:100;box-shadow:0 2px 12px rgba(0,0,0,0.25);}
.tbrand{font-family:Georgia,serif;font-size:1.2rem;font-weight:700;}
.tuser{display:flex;align-items:center;gap:10px;font-size:0.85rem;}
.av{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#a0633a,#d4a574);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;color:#3d2b1f;}
.bout{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:6px;color:#f0d9b5;padding:5px 12px;font-size:0.8rem;cursor:pointer;}
.nav{background:#fff;border-bottom:2px solid var(--wheat);display:flex;overflow-x:auto;padding:0 16px;scrollbar-width:none;}
.nav::-webkit-scrollbar{display:none;}
.ntab{padding:14px 16px;font-size:0.82rem;font-weight:500;color:var(--clay);cursor:pointer;white-space:nowrap;border-bottom:3px solid transparent;background:none;border-left:none;border-right:none;border-top:none;}
.ntab.on{color:var(--vine);border-bottom-color:var(--vine);font-weight:600;}
.con{padding:20px 16px 80px;max-width:780px;margin:0 auto;}
.card{background:#fff;border-radius:12px;box-shadow:0 4px 24px rgba(61,43,31,0.12);padding:24px;margin-bottom:20px;border:1px solid rgba(212,165,116,0.2);}
.ctit{font-family:Georgia,serif;font-size:1.1rem;font-weight:700;color:var(--soil);margin-bottom:18px;display:flex;align-items:center;gap:8px;}
.fr{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
.fr3{grid-template-columns:1fr 1fr 1fr;}.fr1{grid-template-columns:1fr;}
@media(max-width:520px){.fr,.fr3{grid-template-columns:1fr;}}
.fld{display:flex;flex-direction:column;gap:5px;}
.fld label{font-size:0.75rem;font-weight:600;color:var(--clay);text-transform:uppercase;letter-spacing:0.8px;}
.req{color:var(--danger);margin-left:2px;}
.cw{position:relative;}
.ci{width:100%;padding:10px 36px 10px 12px;border:1.5px solid var(--wheat);border-radius:8px;font-size:0.9rem;color:var(--earth);background:var(--cream);appearance:none;}
.ci:focus{outline:none;border-color:var(--vine);background:#fff;}
.ca{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--clay);font-size:0.7rem;}
.dd{position:absolute;top:100%;left:0;right:0;background:#fff;border:1.5px solid var(--vine);border-top:none;border-radius:0 0 8px 8px;max-height:200px;overflow-y:auto;z-index:200;box-shadow:0 8px 24px rgba(0,0,0,0.12);display:none;}
.di{padding:9px 12px;cursor:pointer;font-size:0.88rem;color:var(--earth);display:flex;align-items:center;justify-content:space-between;}
.di:hover{background:var(--cream);}
.di.an{color:var(--vine);font-weight:600;border-top:1px solid var(--wheat);}
.di .dx{color:var(--danger);font-size:0.8rem;padding:2px 6px;display:none;}
.di:hover .dx{display:inline;}
input[type=text],input[type=number],input[type=date],textarea,.ps{padding:10px 12px;border:1.5px solid var(--wheat);border-radius:8px;font-size:0.9rem;color:var(--earth);background:var(--cream);width:100%;}
input:focus,textarea:focus,.ps:focus{outline:none;border-color:var(--vine);background:#fff;}
textarea{resize:vertical;min-height:80px;}
.ps{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b4226' stroke-width='2' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:32px;}
.cbr{display:flex;align-items:center;gap:8px;margin-top:6px;}
.cbr input{width:auto;}
.cbr label{font-size:0.85rem;font-weight:400;text-transform:none;letter-spacing:0;cursor:pointer;}
.btn{padding:11px 22px;border-radius:8px;font-size:0.9rem;font-weight:600;cursor:pointer;border:none;display:inline-flex;align-items:center;gap:6px;}
.btn:disabled{opacity:0.6;cursor:not-allowed;}
.bp{background:linear-gradient(135deg,var(--vine),var(--leaf));color:white;}
.bs{background:var(--cream);color:var(--soil);border:1.5px solid var(--wheat);}
.brow{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;}
.typs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;}
.tb{padding:8px 16px;border-radius:20px;border:1.5px solid var(--wheat);background:var(--cream);color:var(--soil);font-size:0.82rem;font-weight:500;cursor:pointer;}
.tb.on{background:var(--vine);border-color:var(--vine);color:white;}
.rl{display:flex;flex-direction:column;gap:10px;}
.ri{background:var(--cream);border:1px solid var(--wheat);border-radius:10px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;position:relative;}
.rd{width:10px;height:10px;border-radius:50%;margin-top:5px;flex-shrink:0;}
.rm{flex:1;}
.rda{font-size:0.75rem;color:var(--clay);font-weight:600;}
.rt{font-weight:600;color:var(--earth);margin:2px 0;}
.rde{font-size:0.82rem;color:var(--soil);line-height:1.5;}
.rdl{position:absolute;top:10px;right:12px;background:none;border:none;color:var(--clay);cursor:pointer;font-size:1rem;padding:2px 6px;}
.rdl:hover{background:#ffeaea;color:var(--danger);}
.dt{background:var(--clay);}.df{background:var(--danger);}.da{background:var(--leaf);}
.dc{background:var(--grape);}.dco{background:var(--warn);}.dv{background:#2980b9;}.dal{background:#7f8c8d;}
.sg{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;}
.sc{background:#fff;border-radius:10px;padding:16px;text-align:center;border:1px solid rgba(212,165,116,0.2);}
.sn{font-family:Georgia,serif;font-size:1.8rem;font-weight:700;color:var(--vine);}
.sl{font-size:0.72rem;color:var(--clay);text-transform:uppercase;letter-spacing:0.8px;margin-top:2px;}
.empty{text-align:center;padding:48px 24px;color:var(--clay);}
.ei{font-size:3rem;margin-bottom:12px;opacity:0.5;}
.toast{position:fixed;bottom:24px;right:20px;background:var(--vine);color:white;padding:12px 20px;border-radius:10px;font-size:0.88rem;font-weight:500;box-shadow:0 8px 24px rgba(0,0,0,0.2);z-index:9999;transform:translateY(100px);transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1);max-width:320px;}
.toast.show{transform:translateY(0);}
.toast.e{background:var(--danger);}.toast.w{background:var(--warn);}
.fb{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;}
.fb input,.fb .ps{flex:1;min-width:120px;}
.pg{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-bottom:14px;}
.pb{padding:8px 10px;border:1.5px solid var(--wheat);border-radius:8px;background:var(--cream);cursor:pointer;font-size:0.8rem;color:var(--earth);text-align:left;line-height:1.3;}
.pb:hover{border-color:var(--vine);background:#f0f7ec;}
.pb.on{border-color:var(--vine);background:#e8f5e2;color:var(--vine);font-weight:600;}
.pn{font-weight:700;font-size:0.95rem;color:var(--vine);}
.hidden{display:none!important;}
.dv2{border:none;border-top:1px solid var(--wheat);margin:18px 0;}
.ec{background:linear-gradient(135deg,var(--grape),#3d1f3d);border-radius:12px;padding:24px;color:white;margin-bottom:20px;}
.ec h3{font-family:Georgia,serif;font-size:1.1rem;margin-bottom:8px;}
.ec p{font-size:0.85rem;opacity:0.85;margin-bottom:16px;}
.bw{background:white;color:var(--grape);padding:11px 22px;border-radius:8px;font-weight:700;font-size:0.9rem;cursor:pointer;border:none;display:inline-flex;align-items:center;gap:6px;}
</style>
</head>
<body>

<div id="login">
  <div class="lcard">
    <div style="font-size:3rem;margin-bottom:16px">🍇</div>
    <div class="llogo">Quadern CCPAE</div>
    <div class="lsub">Gabalda · Batea · Tarragona</div>
    <label class="llbl">Qui entra?</label>
    <select class="lsel" id="luser">
      <option value="">— Selecciona usuari —</option>
      <option value="Eloi">🌿 Eloi Gabalda Ferrè</option>
      <option value="Valero">🌿 Valero Gabalda Bes</option>
    </select>
    <button class="lbtn" id="lbtn" onclick="doLogin()">Entrar al quadern</button>
    <div class="lmsg" id="lmsg"></div>
  </div>
</div>

<div id="app">
  <div class="topbar">
    <div class="tbrand">🍇 CCPAE · Gabalda</div>
    <div class="tuser">
      <div class="av" id="av">EG</div>
      <span id="un">Eloi</span>
      <button class="bout" onclick="doLogout()">Sortir</button>
    </div>
  </div>
  <div class="nav">
    <button class="ntab on" onclick="goTab('inici')">🏠 Inici</button>
    <button class="ntab" onclick="goTab('nou')">➕ Nou registre</button>
    <button class="ntab" onclick="goTab('hist')">📋 Historial</button>
    <button class="ntab" onclick="goTab('exp')">📥 Exportar</button>
  </div>

  <div class="con" id="t-inici">
    <div class="sg" id="sg"></div>
    <div class="card"><div class="ctit">📅 Últims registres</div><div id="recent"></div></div>
  </div>

  <div class="con hidden" id="t-nou">
    <div class="card">
      <div class="ctit">✏️ Nou registre</div>
      <div class="typs">
        <button class="tb on" onclick="setT('treball')" data-t="treball">🌱 Treball camp</button>
        <button class="tb" onclick="setT('fito')" data-t="fito">🌿 Fitosanitari</button>
        <button class="tb" onclick="setT('adob')" data-t="adob">🪣 Adobat</button>
        <button class="tb" onclick="setT('collita')" data-t="collita">🍇 Recol·lecció</button>
        <button class="tb" onclick="setT('compra')" data-t="compra">🛒 Compra</button>
        <button class="tb" onclick="setT('venda')" data-t="venda">💰 Venda</button>
        <button class="tb" onclick="setT('altres')" data-t="altres">📝 Incidència</button>
      </div>
      <div class="fr">
        <div class="fld"><label>Data <span class="req">*</span></label><input type="date" id="fd"/></div>
        <div class="fld"><label>Data final (període)</label><input type="date" id="fdf"/></div>
      </div>
      <div class="fld" id="wp"><label>Parcel·les <span class="req">*</span></label><div class="pg" id="pg"></div><div id="ps2" style="font-size:0.8rem;color:var(--vine);margin-top:4px;font-weight:600;"></div>
<div id="ps-sup" style="font-size:0.85rem;color:var(--soil);margin-top:4px;padding:6px 10px;background:#f0f7ec;border-radius:6px;display:none;">📐 Superfície total: <strong id="ps-sup-val">0.00</strong> ha</div>
</div>
      <div class="fr" id="wc">
        <div class="fld"><label>Cultiu</label><div id="c-cu"></div></div>
        <div class="fld"><label>Superfície (ha) · auto</label><input type="number" id="fsu" step="0.01" style="background:#f0f7ec;color:var(--vine);font-weight:600;" title="Calculada automàticament segons les parcel·les seleccionades"/></div>
      </div>
      <div id="s-treball"><hr class="dv2">
        <div class="fr fr1"><div class="fld"><label>Treball realitzat <span class="req">*</span></label><div id="c-tr"></div></div></div>
        <div class="fr"><div class="fld"><label>Quantitat sembrada (kg/ha)</label><input type="number" id="fqs" step="0.01"/></div><div class="fld"><label>Observacions</label><input type="text" id="fob"/></div></div>
      </div>
      <div id="s-fito" class="hidden"><hr class="dv2">
        <div class="fr fr1"><div class="fld"><label>Plaga o malaltia <span class="req">*</span></label><div id="c-pl"></div></div></div>
        <div class="fr"><div class="fld"><label>Producte (nom + m.a.) <span class="req">*</span></label><div id="c-fp"></div></div><div class="fld"><label>Núm. registre</label><div id="c-fr"></div></div></div>
        <div class="fr fr3">
          <div class="fld"><label>Dosi (kg/ha o l/ha)</label><input type="text" id="ffd"/></div>
          <div class="fld"><label>Litres brou (L)</label><input type="number" id="ffb" step="0.1"/></div>
          <div class="fld"><label>Eficàcia (0-3)</label><select class="ps" id="ffe"><option value="">—</option><option value="0">0-Nul·la</option><option value="1">1-Dolenta</option><option value="2">2-Regular</option><option value="3">3-Bona</option></select></div>
        </div>
        <div class="fr">
          <div class="fld"><label>Aplicador</label><select class="ps" id="ffa"><option value="A-1 Eloi Gabalda Ferrè">A-1 · Eloi</option><option value="A-2 Valero Gabalda Bes">A-2 · Valero</option></select></div>
          <div class="fld"><label>Màquina</label><select class="ps" id="ffm"><option value="D-1 Ensofradora">D-1 · Ensofradora</option><option value="D-2 Atomisador (503398)">D-2 · Atomisador</option></select></div>
        </div>
      </div>
      <div id="s-adob" class="hidden"><hr class="dv2">
        <div class="fr"><div class="fld"><label>Tipus fertilitzant <span class="req">*</span></label><div id="c-at"></div></div><div class="fld"><label>Nom comercial</label><div id="c-an"></div></div></div>
        <div class="fr fr3"><div class="fld"><label>Composició / NPK</label><input type="text" id="fac" placeholder="ex. 5-3-3"/></div><div class="fld"><label>Conc. N (kg N/t)</label><input type="number" id="fan" step="0.01"/></div><div class="fld"><label>Quantitat (t o m³)</label><input type="number" id="faq" step="0.001"/></div></div>
        <div class="fr"><div class="fld"><label>Origen</label><div id="c-ao"></div></div><div class="fld"><label>Aplicador</label><select class="ps" id="faa"><option value="F-1 Eloi Gabalda Ferrè">F-1 · Eloi</option><option value="F-2 Valero Gabalda Bes">F-2 · Valero</option></select></div></div>
        <div class="cbr"><input type="checkbox" id="faf"/><label for="faf">Fertirrigació</label></div>
      </div>
      <div id="s-collita" class="hidden"><hr class="dv2">
        <div class="fr"><div class="fld"><label>Cultiu recol·lectat <span class="req">*</span></label><div id="c-cc"></div></div><div class="fld"><label>Qualificació</label><select class="ps" id="fcq"><option value="CON">CON – En conversió</option><option value="ECO">ECO – Ecològic</option><option value="CVL">CVL – Convencional</option></select></div></div>
        <div class="fr fr3"><div class="fld"><label>Venda (kg)</label><input type="number" id="fcv" step="0.1"/></div><div class="fld"><label>Autoconsum (kg)</label><input type="number" id="fca" step="0.1"/></div><div class="fld"><label>Total (kg)</label><input type="number" id="fct" step="0.1" readonly style="background:#f0f7ec;cursor:not-allowed;"/></div></div>
      </div>
      <div id="s-compra" class="hidden"><hr class="dv2">
        <div class="fr"><div class="fld"><label>Producte <span class="req">*</span></label><div id="c-cp"></div></div><div class="fld"><label>Qualificació</label><select class="ps" id="fcpq"><option value="ECO">ECO</option><option value="CVL">CVL</option><option value="AUT">AUT</option></select></div></div>
        <div class="fr fr3"><div class="fld"><label>Quantitat (kg o L)</label><input type="text" id="fcpqt"/></div><div class="fld"><label>Proveïdor</label><div id="c-cpv"></div></div><div class="fld"><label>Núm. albarà</label><input type="text" id="fcpa"/></div></div>
      </div>
      <div id="s-venda" class="hidden"><hr class="dv2">
        <div class="fr"><div class="fld"><label>Producte <span class="req">*</span></label><div id="c-vp"></div></div><div class="fld"><label>Qualificació</label><select class="ps" id="fvq"><option value="CON">CON</option><option value="ECO">ECO</option><option value="CVL">CVL</option></select></div></div>
        <div class="fr fr3"><div class="fld"><label>Quantitat (kg)</label><input type="number" id="fvqt" step="0.1"/></div><div class="fld"><label>Núm. albarà</label><input type="text" id="fva"/></div><div class="fld"><label>Client</label><div id="c-vc"></div></div></div>
      </div>
      <div id="s-altres" class="hidden"><hr class="dv2">
        <div class="fr fr1"><div class="fld"><label>Descripció <span class="req">*</span></label><textarea id="fal" rows="3"></textarea></div></div>
      </div>
      <div class="brow">
        <button class="btn bp" id="bsv" onclick="saveRec()">💾 Guardar registre</button>
        <button class="btn bs" onclick="resetF()">🔄 Netejar</button>
      </div>
    </div>
  </div>

  <div class="con hidden" id="t-hist">
    <div style="margin-bottom:16px;"><h2 style="font-family:Georgia,serif;font-size:1.3rem;color:var(--soil);">Historial</h2></div>
    <div class="fb">
      <input type="text" id="fsr" placeholder="🔍 Cercar..." oninput="renderH()"/>
      <select class="ps" id="fft" onchange="renderH()" style="max-width:180px;">
        <option value="">Tots els tipus</option>
        <option value="treball">Treball camp</option><option value="fito">Fitosanitari</option>
        <option value="adob">Adobat</option><option value="collita">Recol·lecció</option>
        <option value="compra">Compra</option><option value="venda">Venda</option><option value="altres">Incidència</option>
      </select>
    </div>
    <div id="hl"></div>
  </div>

  <div class="con hidden" id="t-exp">
    <div class="ec"><h3>📥 Exportar Excel CCPAE</h3><p>Genera el fitxer Excel oficial per presentar a l'inspector.</p><button class="bw" onclick="exportXl()">⬇️ Descarregar Excel</button></div>
    <div class="card"><div class="ctit">📊 Resum</div><div id="esum"></div></div>
  </div>
</div>

<div class="toast" id="toast"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script>
// API URL - Google Apps Script backend
const API_URL = 'https://script.google.com/macros/s/AKfycbwOtKWH4IPsAM6X8t2mC7eMzuIkBFIZ2zpfYKYJv2mWA7PKSRGJIFjgw_EJyyBQFUP5CA/exec';

// JSONP helper
let _cb = 0;
function callAPI(params) {
  return new Promise((resolve, reject) => {
    const name = '_cb' + (++_cb) + '_' + Date.now();
    const t = setTimeout(() => { cleanup(); reject(new Error('Timeout')); }, 20000);
    window[name] = (d) => { cleanup(); resolve(d); };
    function cleanup() { clearTimeout(t); delete window[name]; if(s.parentNode) s.parentNode.removeChild(s); }
    const url = new URL(API_URL);
    url.searchParams.set('callback', name);
    Object.entries(params).forEach(([k,v]) => url.searchParams.set(k, String(v)));
    const s = document.createElement('script');
    s.src = url.toString();
    s.onerror = () => { cleanup(); reject(new Error('Error de connexió')); };
    document.head.appendChild(s);
  });
}

const PARC=[
  {n:1,nom:'Benufet',cu:'Ametlles-Comú',sup:0.29},
  {n:2,nom:'Torres',cu:'Garnatxa/Syrah',sup:4.72},
  {n:3,nom:'Camí Gandesa',cu:'Cabernet/Macabeo',sup:1.58},
  {n:4,nom:'Polinets',cu:'Garnatxa negra',sup:2.13},
  {n:5,nom:'Navarro',cu:'Garnatxa/Cab/Temp',sup:4.60},
  {n:6,nom:'Mas Vell',cu:'Garnatxa negra',sup:0.43},
  {n:7,nom:'Pinyeres',cu:'Olivers-Fraga',sup:0.39},
  {n:8,nom:'Taseta',cu:'Olivers-Fraga',sup:0.36},
  {n:9,nom:"Coll d'Algars",cu:'Syrah/Macabeo',sup:2.64},
  {n:10,nom:'Borrassona',cu:'Syrah',sup:0.61},
  {n:11,nom:'Hort',cu:'Olivers-Fraga',sup:0.57},
  {n:12,nom:'Mudefe',cu:'Macabeu/Olivers',sup:3.46},
  {n:13,nom:'Camí Villalba',cu:'Olivers-Arbequí',sup:0.20},
];
const DEFS={
  cu:['Garnatxa negra','Garnatxa peluda','Syrah','Cabernet','Macabeo','Tempranillo','Macabeu','Ametlles-Comú','Olivers-Fraga','Olivers-Empeltre','Olivers-Arbequí'],
  tr:['Laboreo / Tractor','Poda','Atado / Formació de la cepa','Virbar','Riego','Sulfatat','Tractament cupre','Esporga','Desbrotada','Verema / Recol·lecció','Treballs post-verema','Sega coberta vegetal'],
  pl:['Oïdi (Erysiphe necator)','Míldiu (Plasmopara viticola)','Botrytis (Botrytis cinerea)','Cuc del raïm (Lobesia botrana)','Àcar (Panonychus ulmi)','Preventiu general','Flavescència daurada'],
  fp:['Sofre micronitzat (Sofre 80%)','Coure (Sulfat de coure 20%)','Oli de parafina (Oli mineral 80%)','Bacillus thuringiensis'],
  fr:[''],
  at:['Fem compostat ecològic','Biorresidus compostats','Compost verd','Farina de sang','Farina d\'ossos','Sulfat de potassi','Cendres de fusta'],
  an:[''],ao:['Pròpia explotació',''],
  cp:['Sofre micronitzat','Coure (Sulfat de coure)','Oli de parafina','Fem compostat','Farina de sang'],
  cpv:['Fertireg','Agroquímica Delta','Cooperativa Batea'],
  vp:['Raïm Garnatxa negra','Raïm Garnatxa peluda','Raïm Syrah','Raïm Cabernet','Raïm Macabeo','Raïm Tempranillo','Ametlles','Olives'],
  vc:['Celler Cooperatiu Batea','Celler Terra Alta'],
  cc:['Garnatxa negra','Garnatxa peluda','Syrah','Cabernet','Macabeo','Tempranillo','Ametlles','Olives'],
};

let CU=null,SP=[],CT='treball',RECS=[],OPTS={};

function gO(k){return OPTS[k]||DEFS[k]||[];}
function sO(k,v){if(!gO(k).includes(v)){OPTS[k]=[v,...(OPTS[k]||DEFS[k]||[])];callAPI({action:'saveOpts',user:CU,opts:JSON.stringify(OPTS)}).catch(()=>{});}}
function dO(k,v){OPTS[k]=gO(k).filter(x=>x!==v);callAPI({action:'saveOpts',user:CU,opts:JSON.stringify(OPTS)}).catch(()=>{});}

// LOGIN
function doLogin(){
  const u=document.getElementById('luser').value;
  if(!u){toast('Selecciona un usuari','e');return;}
  CU=u;
  const btn=document.getElementById('lbtn');
  btn.disabled=true;btn.textContent='⏳ Carregant...';
  document.getElementById('lmsg').textContent='Carregant dades...';

  Promise.all([
    callAPI({action:'loadRecords', user: u}),
    callAPI({action:'loadOpts', user: u})
  ]).then(function(results) {
    RECS = results[0]&&results[0].data ? results[0].data : [];
    OPTS = results[1]&&results[1].data ? results[1].data : {};
    document.getElementById('login').style.display='none';
    document.getElementById('app').style.display='block';
    document.getElementById('av').textContent=u==='Eloi'?'EG':'VG';
    document.getElementById('un').textContent=u==='Eloi'?'Eloi Gabalda':'Valero Gabalda';
    btn.disabled=false;btn.textContent='Entrar al quadern';
    init();
  }).catch(function(err) {
    document.getElementById('lmsg').textContent='❌ Error: '+err.message;
    btn.disabled=false;btn.textContent='Entrar al quadern';
    CU=null;
  });
}

function doLogout(){
  CU=null;RECS=[];OPTS=[];SP=[];
  document.getElementById('login').style.display='flex';
  document.getElementById('app').style.display='none';
  document.getElementById('lbtn').disabled=false;
  document.getElementById('lbtn').textContent='Entrar al quadern';
  document.getElementById('lmsg').textContent='';
}

function init(){
  document.getElementById('fd').value=new Date().toISOString().split('T')[0];
  buildPG();buildC();setupCalc();renderI();renderH();renderES();
}

function goTab(t){
  ['inici','nou','hist','exp'].forEach(x=>document.getElementById('t-'+x).classList.toggle('hidden',x!==t));
  document.querySelectorAll('.ntab').forEach((el,i)=>el.classList.toggle('on',['inici','nou','hist','exp'][i]===t));
  if(t==='inici')renderI();if(t==='hist')renderH();if(t==='exp')renderES();
}

function buildPG(){
  const g=document.getElementById('pg');g.innerHTML='';
  PARC.forEach(p=>{
    const b=document.createElement('button');b.className='pb';b.dataset.n=p.n;
    b.innerHTML=`<div class="pn">${p.n}</div><div>${p.nom}</div><div style="font-size:0.7rem;color:var(--clay)">${p.sup} ha</div>`;
    b.onclick=()=>togP(p.n,b);g.appendChild(b);
  });
}
function togP(n,b){const i=SP.indexOf(n);if(i>=0){SP.splice(i,1);b.classList.remove('on');}else{SP.push(n);b.classList.add('on');}updPS();}
const SUP_PARC={1:0.29,2:4.72,3:1.58,4:2.13,5:4.60,6:0.43,7:0.39,8:0.36,9:2.64,10:0.61,11:0.57,12:3.46,13:0.20};

function calcSup(parcs){
  return Math.round(parcs.reduce((a,n)=>a+(SUP_PARC[n]||0),0)*100)/100;
}

function updPS(){
  const el=document.getElementById('ps2');
  const elSup=document.getElementById('ps-sup');
  const elSupVal=document.getElementById('ps-sup-val');
  if(!SP.length){
    el.textContent='';
    elSup.style.display='none';
    return;
  }
  el.textContent='✓ '+SP.map(n=>{const f=PARC.find(p=>p.n===n);return f?`${n}-${f.nom}`:n;}).join(', ');
  const sup=calcSup(SP);
  elSupVal.textContent=sup.toFixed(2);
  elSup.style.display='block';
  // Actualitza també el camp de superfície del formulari
  const fsu=document.getElementById('fsu');
  if(fsu) fsu.value=sup>0?sup:'';
}

function clrP(){SP=[];document.querySelectorAll('.pb').forEach(b=>b.classList.remove('on'));updPS();}

function mkC(cid,k,ph){
  const c=document.getElementById(cid);if(!c)return;c.innerHTML='';
  const w=document.createElement('div');w.className='cw';w.style.position='relative';
  const inp=document.createElement('input');inp.type='text';inp.className='ci';inp.placeholder=ph||'';inp.id='ci_'+k;
  const ar=document.createElement('span');ar.className='ca';ar.innerHTML='▼';
  const dd=document.createElement('div');dd.className='dd';
  function rf(f){
    dd.innerHTML='';
    gO(k).filter(o=>o&&o.toLowerCase().includes((f||'').toLowerCase())).forEach(o=>{
      const it=document.createElement('div');it.className='di';
      it.innerHTML=`<span>${o}</span><button class="dx">✕</button>`;
      it.querySelector('span').onclick=()=>{inp.value=o;dd.style.display='none';};
      it.querySelector('.dx').onclick=e=>{e.stopPropagation();if(confirm(`Eliminar "${o}"?`)){dO(k,o);rf(inp.value);}};
      dd.appendChild(it);
    });
    const t=(f||'').trim();
    if(t&&!gO(k).includes(t)){const a=document.createElement('div');a.className='di an';a.textContent=`➕ Afegir "${t}"`;a.onclick=()=>{sO(k,t);inp.value=t;dd.style.display='none';toast(`"${t}" guardat ✓`);};dd.appendChild(a);}
  }
  inp.onfocus=()=>{rf(inp.value);dd.style.display='block';};
  inp.oninput=()=>{rf(inp.value);dd.style.display='block';};
  ar.onclick=()=>{dd.style.display=dd.style.display==='block'?'none':(rf(inp.value),'block');};
  document.addEventListener('click',e=>{if(!w.contains(e.target))dd.style.display='none';},true);
  w.appendChild(inp);w.appendChild(ar);w.appendChild(dd);c.appendChild(w);
}
const gcv=k=>{const e=document.getElementById('ci_'+k);return e?e.value.trim():'';};
const ccv=k=>{const e=document.getElementById('ci_'+k);if(e)e.value='';};

function buildC(){
  mkC('c-cu','cu','Espècie i varietat...');mkC('c-tr','tr','Treball realitzat...');
  mkC('c-pl','pl','Plaga, malaltia...');mkC('c-fp','fp','Nom comercial i m.a....');
  mkC('c-fr','fr','Núm. registre...');mkC('c-at','at','Tipus fertilitzant...');
  mkC('c-an','an','Nom comercial...');mkC('c-ao','ao','Origen...');
  mkC('c-cp','cp','Producte...');mkC('c-cpv','cpv','Proveïdor...');
  mkC('c-vp','vp','Producte...');mkC('c-vc','vc','Client...');
  mkC('c-cc','cc','Cultiu recol·lectat...');
}

function setT(t){
  CT=t;
  document.querySelectorAll('.tb').forEach(b=>b.classList.toggle('on',b.dataset.t===t));
  ['treball','fito','adob','collita','compra','venda','altres'].forEach(x=>document.getElementById('s-'+x).classList.toggle('hidden',x!==t));
  document.getElementById('wp').classList.toggle('hidden',['compra','venda'].includes(t));
  document.getElementById('wc').classList.toggle('hidden',['compra','venda','altres','collita'].includes(t));
}

function setupCalc(){
  ['fcv','fca'].forEach(id=>document.getElementById(id).addEventListener('input',()=>{
    const v=parseFloat(document.getElementById('fcv').value)||0;
    const a=parseFloat(document.getElementById('fca').value)||0;
    document.getElementById('fct').value=(v+a)||'';
  }));
}

function saveRec(){
  const d=document.getElementById('fd').value;
  if(!d){toast('Falta la data','e');return;}
  if(!['compra','venda','altres'].includes(CT)&&!SP.length){toast('Selecciona almenys una parcel·la','e');return;}

  const base={id:Date.now(),type:CT,data:d,dataFinal:document.getElementById('fdf').value||null,
    parcelles:[...SP],cultiu:gcv('cu'),superfici:document.getElementById('fsu').value||null,
    user:CU,createdAt:new Date().toISOString()};
  let sp={};

  if(CT==='treball'){const t=gcv('tr');if(!t){toast('Indica el treball','e');return;}sO('tr',t);if(base.cultiu)sO('cu',base.cultiu);sp={treball:t,quantitatSembrada:document.getElementById('fqs').value||null,observacions:document.getElementById('fob').value||null};}
  else if(CT==='fito'){const pl=gcv('pl'),pr=gcv('fp');if(!pl||!pr){toast('Plaga i producte obligatoris','e');return;}sO('pl',pl);sO('fp',pr);const rg=gcv('fr');if(rg)sO('fr',rg);sp={plaga:pl,prod:pr,numRegistre:rg,dosi:document.getElementById('ffd').value||null,brouLitres:document.getElementById('ffb').value||null,eficacia:document.getElementById('ffe').value||null,aplicador:document.getElementById('ffa').value,maquina:document.getElementById('ffm').value};}
  else if(CT==='adob'){const tp=gcv('at');if(!tp){toast('Indica el fertilitzant','e');return;}sO('at',tp);const nm=gcv('an');if(nm)sO('an',nm);const or=gcv('ao');if(or)sO('ao',or);sp={tipus:tp,nom:nm,origen:or,composicio:document.getElementById('fac').value||null,concN:document.getElementById('fan').value||null,quantitat:document.getElementById('faq').value||null,fertirreg:document.getElementById('faf').checked,aplicador:document.getElementById('faa').value};}
  else if(CT==='collita'){const cl=gcv('cc');if(cl)sO('cc',cl);sp={cultiu:cl,qualificacio:document.getElementById('fcq').value,prodVenda:document.getElementById('fcv').value||null,prodAutoconsum:document.getElementById('fca').value||null,prodTotal:document.getElementById('fct').value||null};base.cultiu=cl;}
  else if(CT==='compra'){const pr=gcv('cp');if(!pr){toast('Indica el producte','e');return;}sO('cp',pr);const pv=gcv('cpv');if(pv)sO('cpv',pv);sp={prod:pr,prov:pv,qualificacio:document.getElementById('fcpq').value,quantitat:document.getElementById('fcpqt').value||null,albara:document.getElementById('fcpa').value||null};}
  else if(CT==='venda'){const pr=gcv('vp');if(!pr){toast('Indica el producte','e');return;}sO('vp',pr);const cl=gcv('vc');if(cl)sO('vc',cl);sp={prod:pr,client:cl,qualificacio:document.getElementById('fvq').value,quantitat:document.getElementById('fvqt').value||null,albara:document.getElementById('fva').value||null};}
  else if(CT==='altres'){const ds=document.getElementById('fal').value.trim();if(!ds){toast('Escriu la incidència','e');return;}sp={descripcio:ds};}

  const rec={...base,...sp};
  const btn=document.getElementById('bsv');
  btn.disabled=true;btn.textContent='⏳ Guardant...';

  callAPI({action:'saveRecord', payload:JSON.stringify(rec)})
    .then(function(r){
      if(r&&r.ok){
        RECS.unshift(rec);
        toast('✅ Registre guardat al Google Sheets!');
        resetF();renderI();
      } else {
        toast('Error: '+(r?r.error:'desconegut'),'e');
      }
      btn.disabled=false;btn.textContent='💾 Guardar registre';
    })
    .catch(function(err){
      toast('Error: '+err.message,'e');
      btn.disabled=false;btn.textContent='💾 Guardar registre';
    });
}

function resetF(){
  ['fd','fdf','fsu','fob','fqs','ffd','ffb','fac','fan','faq','fcv','fca','fct','fcpqt','fcpa','fvqt','fva','fal']
    .forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  document.getElementById('fd').value=new Date().toISOString().split('T')[0];
  document.getElementById('faf').checked=false;
  ['cu','tr','pl','fp','fr','at','an','ao','cp','cpv','vp','vc','cc'].forEach(k=>ccv(k));
  clrP();
}

function renderI(){
  const r=RECS;const c={treball:0,fito:0,adob:0,collita:0,compra:0,venda:0};
  r.forEach(x=>{if(c[x.type]!==undefined)c[x.type]++;});
  document.getElementById('sg').innerHTML=[['Treballs','🌱',c.treball],['Fitosanitaris','🌿',c.fito],['Adobats','🪣',c.adob],['Recol·leccions','🍇',c.collita],['Compres','🛒',c.compra],['Vendes','💰',c.venda]]
    .map(([l,i,n])=>`<div class="sc"><div style="font-size:1.4rem">${i}</div><div class="sn">${n}</div><div class="sl">${l}</div></div>`).join('');
  const el=document.getElementById('recent');const rc=r.slice(0,8);
  if(!rc.length){el.innerHTML='<div class="empty"><div class="ei">📋</div><p>Encara no hi ha registres</p></div>';return;}
  el.innerHTML='<div class="rl">'+rc.map(x=>rH(x)).join('')+'</div>';
}

function renderH(){
  const r=RECS,s=document.getElementById('fsr').value.toLowerCase(),tf=document.getElementById('fft').value;
  const f=r.filter(x=>{if(tf&&x.type!==tf)return false;return !s||JSON.stringify(x).toLowerCase().includes(s);});
  const el=document.getElementById('hl');
  if(!f.length){el.innerHTML='<div class="empty"><div class="ei">🔍</div><p>Cap registre</p></div>';return;}
  el.innerHTML='<div class="rl">'+f.map(x=>rH(x,true)).join('')+'</div>';
}

function rH(r,del){
  const L={treball:'Treball camp',fito:'Fitosanitari',adob:'Adobat',collita:'Recol·lecció',compra:'Compra',venda:'Venda',altres:'Incidència'};
  const DC={treball:'dt',fito:'df',adob:'da',collita:'dc',compra:'dco',venda:'dv',altres:'dal'};
  const fn=(r.parcelles||[]).map(n=>{const f=PARC.find(p=>p.n===n);return f?`${n}-${f.nom}`:n;}).join(', ');
  let d='';
  if(r.type==='treball')d=(r.treball||'')+(fn?' · '+fn:'');
  else if(r.type==='fito')d=(r.plaga||'')+' · '+(r.prod||'')+(r.dosi?' · '+r.dosi:'')+(fn?' · '+fn:'');
  else if(r.type==='adob')d=(r.tipus||'')+(r.nom?` (${r.nom})`:'')+( r.quantitat?` · ${r.quantitat} t/m³`:'')+( fn?' · '+fn:'');
  else if(r.type==='collita')d=(r.qualificacio||'')+' · '+(r.prodTotal||'?')+' kg'+(fn?' · '+fn:'');
  else if(r.type==='compra')d=(r.prod||'')+' · '+(r.quantitat||'')+' · '+(r.prov||'');
  else if(r.type==='venda')d=(r.prod||'')+' · '+(r.quantitat||'')+' kg · '+(r.client||'');
  else d=r.descripcio||'';
  const dt=r.data?r.data.split('-').reverse().join('/'):'';
  return `<div class="ri"><div class="rd ${DC[r.type]||'dal'}"></div><div class="rm"><div class="rda">${dt}${r.dataFinal?' → '+r.dataFinal.split('-').reverse().join('/'):''} · ${r.user}</div><div class="rt">${L[r.type]||r.type}</div><div class="rde">${d}</div></div>${del?`<button class="rdl" onclick="delR(${r.id})">🗑</button>`:''}</div>`;
}

function delR(id){
  if(!confirm('Eliminar?'))return;
  callAPI({action:'deleteRecord',user:CU,id:String(id)}).catch(()=>{});
  RECS=RECS.filter(r=>r.id!==id);renderH();renderI();toast('Eliminat');
}

function renderES(){
  const r=RECS;
  const L={treball:'🌱 Treballs',fito:'🌿 Fitosanitaris',adob:'🪣 Adobats',collita:'🍇 Recol·leccions',compra:'🛒 Compres',venda:'💰 Vendes',altres:'📝 Incidències'};
  document.getElementById('esum').innerHTML=Object.entries(L).map(([k,l])=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--wheat);font-size:0.9rem;"><span>${l}</span><strong style="color:var(--vine)">${r.filter(x=>x.type===k).length}</strong></div>`).join('')+`<div style="padding:10px 0;font-weight:700;">Total: ${r.length} registres</div>`;
}

function exportXl(){
  if(typeof XLSX==='undefined'){toast('Carregant...','w');setTimeout(exportXl,1500);return;}
  const recs=RECS,wb=XLSX.utils.book_new();
  const ws=(d,c)=>{const w=XLSX.utils.aoa_to_sheet(d);if(c)w['!cols']=c.map(x=>({wch:x}));return w;};
  const fn=ps=>(ps||[]).map(n=>{const f=PARC.find(p=>p.n===n);return f?`${n}-${f.nom}`:n;}).join(', ');
  const fd=s=>{if(!s)return'';const p=s.split('-');return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:s;};
  XLSX.utils.book_append_sheet(wb,ws([['QUADERN CCPAE · Gabalda'],['Titular:','Eloi Gabalda Ferrè'],['NIF:','47857445B'],['Exportat:',new Date().toLocaleDateString('ca-ES')]],[50,30]),'0-Portada');
  const t3=recs.filter(r=>r.type==='treball');
  XLSX.utils.book_append_sheet(wb,ws([['Data o període','Número finca','Superfície (ha)','Cultiu','Treballs','Quantitat sembrada','Observacions','Operari'],...t3.map(r=>[r.dataFinal?fd(r.data)+'-'+fd(r.dataFinal):fd(r.data),fn(r.parcelles),r.superfici||'',r.cultiu||'',r.treball||'',r.quantitatSembrada||'',r.observacions||'',r.user])],[20,22,12,26,35,14,25,18]),'3-Treballs');
  const t6=recs.filter(r=>r.type==='fito');
  XLSX.utils.book_append_sheet(wb,ws([['Data','Número finca','Cultiu','Plaga','Superfície','Aplicador','Màquina','L.brou','Producte','Núm.reg','Dosi','Eficàcia'],...t6.map(r=>[fd(r.data),fn(r.parcelles),r.cultiu||'',r.plaga||'',r.superfici||'',r.aplicador||'',r.maquina||'',r.brouLitres||'',r.prod||'',r.numRegistre||'',r.dosi||'',r.eficacia||''])],[16,22,22,28,12,22,22,10,30,14,14,10]),'6-Fitosanitaris');
  const t4=recs.filter(r=>r.type==='adob');
  XLSX.utils.book_append_sheet(wb,ws([['Número finca','Cultiu','Superfície','Data','Tipus','Nom comercial','Composició','Origen','Conc.N','Quantitat','Kg N','Dosi N','Fertirr.','Aplicador'],...t4.map(r=>{const cN=parseFloat(r.concN)||0,q=parseFloat(r.quantitat)||0,s=parseFloat(r.superfici)||0,kN=cN&&q?Math.round(cN*q*100)/100:'',dn=kN&&s?Math.round(kN/s*100)/100:'';return[fn(r.parcelles),r.cultiu||'',r.superfici||'',r.dataFinal?fd(r.data)+'-'+fd(r.dataFinal):fd(r.data),r.tipus||'',r.nom||'',r.composicio||'',r.origen||'',r.concN||'',r.quantitat||'',kN,dn,r.fertirreg?'Sí':'No',r.aplicador||''];})],[20,22,12,22,26,20,14,20,14,14,14,12,12,20]),'4-Adobats');
  XLSX.writeFile(wb,`Quadern_CCPAE_${CU}_${new Date().toISOString().slice(0,10)}.xlsx`);
  toast('✅ Excel exportat!');
}

let TT;
function toast(m,t){const el=document.getElementById('toast');el.textContent=m;el.className='toast '+(t||'')+' show';clearTimeout(TT);TT=setTimeout(()=>el.classList.remove('show'),4000);}
document.addEventListener('click',e=>{document.querySelectorAll('.dd').forEach(d=>{if(!d.parentElement?.parentElement?.contains(e.target))d.style.display='none';});});
</script>
</body>
</html>
