// ═══════════════════════════════════════════════════════════
//  BACKEND API · Quadern CCPAE · Gabalda
//  Versió JSONP - compatible amb GitHub Pages
// ═══════════════════════════════════════════════════════════

const SS_ID = '18X3ufV1I3zkAqOlmGVjGLS0DXd8ndePONXG-KQowjTo';

function doGet(e) {
  const params   = e.parameter || {};
  const action   = params.action   || 'ping';
  const callback = params.callback || null; // JSONP callback
  let result;

  try {
    if (action === 'ping') {
      result = { ok: true, msg: 'API CCPAE activa ✓' };

    } else if (action === 'loadRecords') {
      const raw = PropertiesService.getScriptProperties().getProperty('recs_' + params.user);
      result = { ok: true, data: raw ? JSON.parse(raw) : [] };

    } else if (action === 'loadOpts') {
      const raw = PropertiesService.getScriptProperties().getProperty('opts_' + params.user);
      result = { ok: true, data: raw ? JSON.parse(raw) : {} };

    } else if (action === 'saveRecord') {
      const rec = JSON.parse(params.payload);
      // Escriu al Sheet
      writeRecord(SpreadsheetApp.openById(SS_ID), rec);
      // Guarda a Properties
      const p   = PropertiesService.getScriptProperties();
      const raw = p.getProperty('recs_' + rec.user);
      const arr = raw ? JSON.parse(raw) : [];
      arr.unshift(rec);
      p.setProperty('recs_' + rec.user, JSON.stringify(arr.slice(0, 500)));
      result = { ok: true };

    } else if (action === 'saveOpts') {
      PropertiesService.getScriptProperties()
        .setProperty('opts_' + params.user, params.opts);
      result = { ok: true };

    } else if (action === 'deleteRecord') {
      const p   = PropertiesService.getScriptProperties();
      const raw = p.getProperty('recs_' + params.user);
      const arr = raw ? JSON.parse(raw) : [];
      p.setProperty('recs_' + params.user,
        JSON.stringify(arr.filter(r => r.id !== parseInt(params.id))));
      result = { ok: true };

    } else {
      result = { ok: false, error: 'Acció desconeguda' };
    }

  } catch(err) {
    Logger.log('ERROR: ' + err);
    result = { ok: false, error: err.toString() };
  }

  const json = JSON.stringify(result);

  // Si hi ha callback → JSONP (per GitHub Pages)
  // Si no → JSON normal
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Escriptura als fulls ──────────────────────────────────

function writeRecord(ss, d) {
  const parc  = Array.isArray(d.parcelles) ? d.parcelles.join(', ') : (d.parcelles||'');
  const sup   = d.superfici||'', cu = d.cultiu||'';
  const data  = d.data||'', dataF = d.dataFinal||'';
  const per   = dataF ? fmtD(data)+' - '+fmtD(dataF) : fmtD(data);
  const user  = d.user||'';

  switch(d.type) {
    case 'treball':
      appendRow(ss, '3.-REGISTRE DE TREBALLS DE CAMP',
        ['Data o període','Número finca','Superfície (ha)','Cultiu (espècie i varietat)','Treballs del sòl, sembres i altres treballs','Quantitat sembrada (Kg/Ha)','Observacions','Operari'],
        [per, parc, sup, cu, d.treball||'', d.quantitatSembrada||'', d.observacions||'', user]);
      break;
    case 'fito':
      appendRow(ss, '6.- REGISTRE TRACT. FITOSANITAR',
        ['Data tractament','Número finca','Cultiu','Plaga o malaltia a controlar','Superfície tractada (ha)','Aplicador (núm. ordre)','Màquina (núm. ordre)','L. brou emprats','Producte (nom comercial + m.a.)','Núm. registre','Dosi (kg/ha o L/ha)','Eficàcia (0-3)'],
        [fmtD(data), parc, cu, d.plaga||'', sup, d.aplicador||'', d.maquina||'', d.brouLitres||'', d.prod||'', d.numRegistre||'', d.dosi||'', d.eficacia||'']);
      break;
    case 'adob': {
      const cN=parseFloat(d.concN)||0, q=parseFloat(d.quantitat)||0, sf=parseFloat(sup)||0;
      const kgN=(cN&&q)?Math.round(cN*q*100)/100:'';
      const doN=(kgN!==''&&sf)?Math.round(kgN/sf*100)/100:'';
      appendRow(ss, '4.- REGISTRE dADOBATS',
        ['Número finca','Cultiu','Superfície (ha)','Data o període','Tipus fertilitzant','Nom comercial','Composició / NPK','Origen','Concentració N (kg N/t o m³)','Quantitat (t o m³)','Kg N aplicats','Dosi kg N/ha','Fertirrigació','Aplicador'],
        [parc, cu, sup, per, d.tipus||'', d.nom||'', d.composicio||'', d.origen||'', d.concN||'', d.quantitat||'', kgN, doN, d.fertirreg?'Sí':'No', d.aplicador||'']);
      break;
    }
    case 'collita': {
      const sf=parseFloat(sup)||0, tot=parseFloat(d.prodTotal)||0;
      appendRow(ss, '11.- REGISTRE DE RECOL·LECCIÓ',
        ['Campanya','Producte (espècie i varietat)','Qualificació','Data inici recol·lecció','Finques','Superfície (ha)','Producció venda (kg)','Autoconsum (kg)','Total (kg)','Rendiment (kg/ha)'],
        [data?data.substring(0,4):'', cu, d.qualificacio||'', d.dataInici?fmtD(d.dataInici):fmtD(data), parc, sup, d.prodVenda||'', d.prodAutoconsum||'', tot||'', (sf&&tot)?Math.round(tot/sf):'']);
      break;
    }
    case 'compra':
      appendRow(ss, '10.- REGISTRE DE COMPRA DE  ',
        ['Data','Producte','Qualificació (ECO/CVL/AUT)','Quantitat (kg o L)','Proveïdor','Núm. albarà'],
        [fmtD(data), d.prod||'', d.qualificacio||'', d.quantitat||'', d.prov||'', d.albara||'']);
      break;
    case 'venda':
      appendRow(ss, '14.-REGISTRE DE VENDA',
        ['Data albarà','Núm. albarà','Producte','Quantitat (kg)','Finques / Lot','Qualificació (ECO/CON/CVL)','Client'],
        [fmtD(data), d.albara||'', d.prod||'', d.quantitat||'', parc, d.qualificacio||'', d.client||'']);
      break;
    case 'altres':
      appendRow(ss, '15.- ALTRES DADES I INCIDÈNCIES',
        ['Data','Operari','Incidència / Observació'],
        [fmtD(data), user, d.descripcio||'']);
      break;
  }
}

function appendRow(ss, nom, headers, row) {
  const sh = ss.getSheetByName(nom) || ss.insertSheet(nom);
  if (sh.getLastRow() === 0) {
    sh.appendRow(headers);
    sh.getRange(1,1,1,headers.length)
      .setFontWeight('bold').setBackground('#2d5016').setFontColor('#fff').setWrap(true);
    sh.setFrozenRows(1);
  }
  sh.appendRow(row);
}

function fmtD(s) {
  if (!s) return '';
  const p = s.split('-');
  return p.length===3 ? p[2]+'/'+p[1]+'/'+p[0] : s;
}
