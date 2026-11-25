// Online consent forms (public/consent/<id>/). Two steps, or one:
//   home   – patient reads and initials each section before the visit; gets a reference code.
//   office – on the office tablet: patient confirms the online step, signs; a staff member witnesses.
//   full   – both in the office (patient did not do the home step).
// Nothing is stored on the site. Each submission is emailed to MAIL_TO with an HTML record attached
// (consent text, initials, signature, witness, times) for staff to file in the patient's chart.
import { practice } from '../../src/data/practice.js';
import { consents } from './_consents.js';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const clip = (s, n = 200) => String(s ?? '').trim().slice(0, n);
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
const torontoTime = (d) => d.toLocaleString('en-CA', { timeZone: 'America/Toronto', dateStyle: 'medium', timeStyle: 'short' });

function refCode(prefix) {
  const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const b = crypto.getRandomValues(new Uint8Array(4));
  return `${prefix}-${[...b].map((x) => a[x % a.length]).join('')}`;
}

function record({ form, d, mode, ref, when }) {
  const rows = (pairs) => pairs.filter(([, v]) => v).map(([k, v]) => `<tr><th>${esc(k)}</th><td>${v}</td></tr>`).join('');
  const steps = { home: 'Initialled online before the visit (not yet signed)', office: 'Signed in the office after online initials', full: 'Read, initialled and signed in the office' };
  const sections = form.sections.map((s, i) => {
    const body = s.text.length > 1 ? `<ul>${s.text.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : `<p>${esc(s.text[0])}</p>`;
    const extra = mode === 'office' ? '' : s.id === 'treatment' ? `<p><b>Treatment selected:</b> ${esc(d.tx.join(', ') || 'Not selected')}</p>`
      : s.id === 'questions' ? `<p><b>Patient's questions:</b> ${esc(d.questions || 'None')}</p>` : '';
    const ini = mode === 'office' ? '' : `<p class="ini">Initials: <b>${esc(d.initials[s.id])}</b></p>`;
    return `<h3>${i + 1}. ${esc(s.title)}</h3>${body}${extra}${ini}`;
  }).join('');
  const sig = d.signature ? `<p><img src="${d.signature}" alt="Signature" style="max-width:360px;border-bottom:1px solid #000"></p>` : '';
  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(form.title)} – ${esc(d.patient_name)}</title>
<style>body{font:14px/1.5 Arial,sans-serif;max-width:760px;margin:24px auto;padding:0 16px;color:#000}h1{font-size:20px;margin:0}h2{font-size:15px;border-top:2px solid #000;padding-top:8px;margin-top:20px}h3{font-size:14px;margin:14px 0 4px}table{border-collapse:collapse;width:100%}th,td{text-align:left;vertical-align:top;border-bottom:1px solid #ccc;padding:4px 6px}th{width:34%}.ini{margin:4px 0 0}.muted{color:#555;font-size:12px}</style></head><body>
<p class="muted">${esc(practice.name)} · ${esc(practice.street)}, ${esc(practice.city)} · ${esc(practice.phone)}</p>
<h1>${esc(form.title)}</h1><p class="muted">Form version ${esc(form.version)} · Submitted online ${esc(torontoTime(when))} (Toronto)</p>
<h2>Summary</h2><table>${rows([
    ['Step', esc(steps[mode])], ['Reference code', esc(ref)], ['Patient', esc(d.patient_name)], ['Date of birth', esc(d.patient_dob)],
    ['Tooth / teeth (FDI)', esc(d.teeth)], ['Treating dentist', esc(d.dentist)],
    ...(mode === 'office' ? [['Confirmed by patient', esc(form.officeStatement)]] : []),
    ...(mode !== 'home' ? [['Signed by', d.sdm_name ? `${esc(d.sdm_name)} (${esc(d.sdm_relationship)}) for the patient` : 'The patient'],
      ['Witness', `${esc(d.witness_name)} (${esc(d.witness_initials)}); identity: ${esc(d.witness_id)}`]] : []),
  ])}</table>
${mode !== 'office' ? `<h2>Consent text and initials</h2>${sections}` : `<h2>Consent text</h2><p class="muted">The patient initialled each section online under reference ${esc(ref)}; that record was emailed separately.</p>${sections}`}
${mode !== 'home' ? `<h2>Signature</h2>${sig}<p class="muted">Dentist countersignature: to be added in the chart at the appointment.</p>` : ''}
</body></html>`;
}

export async function onRequestPost({ request, env }) {
  let d;
  try { d = await request.json(); } catch { return json({ error: 'Invalid submission.' }, 400); }
  if (d.company) return json({ ok: true }); // honeypot
  const form = consents[d.form];
  if (!form) return json({ error: 'Unknown form.' }, 400);
  const mode = ['home', 'office', 'full'].includes(d.mode) ? d.mode : null;
  if (!mode) return json({ error: 'Unknown step.' }, 400);

  const clean = {
    patient_name: clip(d.patient_name, 120), patient_dob: clip(d.patient_dob, 10), teeth: clip(d.teeth, 60), dentist: clip(d.dentist, 80),
    tx: (Array.isArray(d.tx) ? d.tx : []).filter((t) => form.treatments.includes(t)),
    questions: clip(d.questions, 1500), ref_code: clip(d.ref_code, 12).toUpperCase(),
    initials: Object.fromEntries(form.sections.map((s) => [s.id, clip(d.initials?.[s.id], 4).toUpperCase()])),
    sdm_name: clip(d.sdm_name, 120), sdm_relationship: clip(d.sdm_relationship, 80),
    witness_name: clip(d.witness_name, 80), witness_id: clip(d.witness_id, 40), witness_initials: clip(d.witness_initials, 4).toUpperCase(),
    signature: typeof d.signature === 'string' && /^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(d.signature) && d.signature.length < 400000 ? d.signature : '',
  };
  const missing = [];
  if (!clean.patient_name) missing.push('patient name');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(clean.patient_dob)) missing.push('date of birth');
  if (mode !== 'office' && form.sections.some((s) => clean.initials[s.id].length < 2)) missing.push('initials on every section');
  if (mode === 'office' && d.read_online !== true) missing.push('confirmation of the online step');
  if (mode !== 'home') {
    if (!clean.signature) missing.push('signature');
    if (d.sdm === true && (!clean.sdm_name || !clean.sdm_relationship)) missing.push('substitute decision-maker name and relationship');
    if (!clean.witness_name || !clean.witness_id || clean.witness_initials.length < 2 || d.witness_seen !== true) missing.push('staff witness');
  }
  if (missing.length) return json({ error: `Missing: ${missing.join(', ')}.` }, 400);

  if (!env.EMAIL || !env.MAIL_TO) return json({ error: `Online consent is not connected yet. Please tell the front desk or call ${practice.phone}.` }, 503);

  const when = new Date();
  const prefix = form.version.split('-')[0];
  const ref = mode === 'home' ? refCode(prefix) : mode === 'office' ? (clean.ref_code || 'not given') : refCode(prefix);
  const html = record({ form, d: clean, mode, ref, when });
  const label = { home: 'initialled online', office: 'signed in office', full: 'signed in office (full form)' }[mode];
  const safeName = clean.patient_name.replace(/[^A-Za-z0-9 -]/g, '').trim().replace(/\s+/g, '-') || 'patient';
  const attachments = [{ content: btoa(unescape(encodeURIComponent(html))), filename: `${d.form}-consent-${safeName}-${ref}.html`, type: 'text/html', disposition: 'attachment' }];
  if (clean.signature) attachments.push({ content: clean.signature.split(',')[1], filename: `signature-${safeName}-${ref}.png`, type: 'image/png', disposition: 'attachment' });
  try {
    await env.EMAIL.send({
      to: env.MAIL_TO,
      from: { email: env.MAIL_FROM || `forms@${new URL(practice.url).hostname}`, name: `${practice.name} consent forms` },
      subject: `${form.title.split(':')[0]} consent ${label}: ${clean.patient_name} (${ref})`,
      text: `${form.title} — ${label}.\nPatient: ${clean.patient_name}, born ${clean.patient_dob}\nReference: ${ref}\nSubmitted: ${torontoTime(when)} (Toronto)\n\nThe full record is attached. File it in the patient's chart.`,
      html,
      attachments,
    });
  } catch (e) {
    console.error('consent email failed', e && e.code, e && e.message);
    return json({ error: `Sorry, it could not be sent. Please tell the front desk or call ${practice.phone}.` }, 502);
  }
  return json({ ok: true, ref, mode });
}
