// Cloudflare Pages Function: receives the consultation form and forwards it.
// Set FORM_WEBHOOK_URL in the Cloudflare Pages project settings (for example a
// Teraleads, Zapier or CRM webhook). Nothing is stored on this site.
export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  if (form.get('company')) {
    // Honeypot filled in: almost certainly a bot. Pretend success.
    return Response.redirect(new URL('/thank-you/', request.url), 303);
  }
  const fields = ['first_name', 'last_name', 'phone', 'email', 'treatment', 'financing', 'referral_source', 'message'];
  const lead = Object.fromEntries(fields.map((f) => [f, String(form.get(f) || '').slice(0, 2000)]));
  if (!lead.first_name || !lead.phone) {
    return new Response('Please enter your name and phone number.', { status: 400 });
  }
  lead.office = '1 Oak Dental, Toronto';
  lead.submitted_at = new Date().toISOString();
  lead.page = request.headers.get('referer') || '';

  if (!env.FORM_WEBHOOK_URL) {
    return new Response('The form is not connected yet. Please call (437) 466-5151.', { status: 503 });
  }
  const res = await fetch(env.FORM_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    return new Response('Sorry, something went wrong. Please call (437) 466-5151.', { status: 502 });
  }
  return Response.redirect(new URL('/thank-you/', request.url), 303);
}
