// Shared helper for the site's forms. Forwards a submission as JSON to a webhook
// set in Cloudflare Pages settings. Nothing is stored on the site.
export async function forward({ request, env, webhookVar, fields, required, kind }) {
  const form = await request.formData();
  if (form.get('company')) {
    return Response.redirect(new URL('/thank-you/', request.url), 303); // honeypot: bot
  }
  const data = Object.fromEntries(fields.map((f) => [f, String(form.get(f) || '').slice(0, 2000)]));
  if (required.some((f) => !data[f])) {
    return new Response('Please fill in all required fields.', { status: 400 });
  }
  Object.assign(data, { kind, office: '1 Oak Dental, Toronto', submitted_at: new Date().toISOString() });
  const url = env[webhookVar] || env.FORM_WEBHOOK_URL;
  if (!url) {
    return new Response('This form is not connected yet. Please call (437) 466-5151.', { status: 503 });
  }
  const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
  if (!res.ok) {
    return new Response('Sorry, something went wrong. Please call (437) 466-5151.', { status: 502 });
  }
  return Response.redirect(new URL('/thank-you/', request.url), 303);
}
