// Shared helper for the site's forms. Nothing is stored on the site. A submission is:
//   1. emailed to MAIL_TO (info@1oakdental.ca) through Cloudflare Email Service, when the Worker has the
//      EMAIL send binding (see wrangler.toml), and/or
//   2. posted as JSON to a webhook (FORM_WEBHOOK_URL / REFERRAL_WEBHOOK_URL), if one is set.
// If neither is configured the visitor is asked to call instead.
import { practice } from '../../src/data/practice.js';

const labels = {
  first_name: 'First name', last_name: 'Last name', phone: 'Phone', email: 'Email', existing_patient: 'Existing patient',
  treatment: 'Treatment', preferred_time: 'Preferred time', financing: 'Interested in financing', referral_source: 'How they heard of us',
  message: 'Message', referral_type: 'Referral for', referral_other: 'Other', sedation: 'Sedation / anaesthesia', teeth: 'Teeth',
  radiographs: 'Radiographs', patient_first_name: 'Patient first name', patient_last_name: 'Patient last name', patient_phone: 'Patient phone',
  patient_dob: 'Patient date of birth', insurance: 'Insurance', referrer_name: 'Referring dentist', referrer_clinic: 'Clinic',
  referrer_phone: 'Clinic phone', referrer_email: 'Clinic email', urgent: 'Urgent', restoration: 'Restoration', notes: 'Notes',
};

function asText(data) {
  return Object.entries(data)
    .filter(([, v]) => v !== '')
    .map(([k, v]) => `${labels[k] || k}: ${v}`)
    .join('\n');
}

export async function forward({ request, env, webhookVar, fields, required, kind, multi = [] }) {
  const form = await request.formData();
  if (form.get('company')) {
    return Response.redirect(new URL('/thank-you/', request.url), 303); // honeypot: bot
  }
  const data = Object.fromEntries(
    fields.map((f) => [f, (multi.includes(f) ? form.getAll(f).join('; ') : String(form.get(f) || '')).slice(0, 2000)]),
  );
  if (required.some((f) => !data[f])) {
    return new Response('Please fill in all required fields.', { status: 400 });
  }
  const submitted_at = new Date().toISOString();
  const callUs = `Please call ${practice.phone}.`;

  let delivered = false;

  // 1. Email
  if (env.EMAIL && env.MAIL_TO) {
    const who = kind === 'referral'
      ? `${data.referrer_name} (${data.referrer_clinic || 'clinic not given'}) for patient ${data.patient_first_name} ${data.patient_last_name || ''}`.trim()
      : `${data.first_name} ${data.last_name || ''}`.trim();
    const subject = kind === 'referral'
      ? `${data.urgent ? 'URGENT ' : ''}Referral from ${who}`
      : `Appointment request from ${who}${data.treatment ? ` (${data.treatment})` : ''}`;
    const replyTo = kind === 'referral' ? data.referrer_email : data.email;
    try {
      await env.EMAIL.send({
        to: env.MAIL_TO,
        from: { email: env.MAIL_FROM || `forms@${new URL(practice.url).hostname}`, name: `${practice.name} website` },
        subject,
        text: `${kind === 'referral' ? 'New referral' : 'New appointment request'} from the ${practice.name} website.\n\n${asText(data)}\n\nSubmitted: ${submitted_at}`,
        ...(replyTo && /^[^@\s]+@[^@\s]+$/.test(replyTo) ? { replyTo } : {}),
      });
      delivered = true;
    } catch (e) {
      console.error('email send failed', e && e.code, e && e.message);
    }
  }

  // 2. Webhook
  const url = env[webhookVar] || env.FORM_WEBHOOK_URL;
  if (url) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...data, kind, office: `${practice.name}, ${practice.city}`, submitted_at }),
      });
      if (res.ok) delivered = true;
    } catch (e) {
      console.error('webhook failed', e && e.message);
    }
  }

  if (!env.EMAIL && !url) {
    return new Response(`This form is not connected yet. ${callUs}`, { status: 503 });
  }
  if (!delivered) {
    return new Response(`Sorry, something went wrong. ${callUs}`, { status: 502 });
  }
  return Response.redirect(new URL('/thank-you/', request.url), 303);
}
