// Cloudflare Worker entry: serves the built site from ./dist as static assets and handles the forms.
// The same handlers also work as Cloudflare Pages Functions (functions/api/*.js) if the site is ever hosted on Pages.
import { onRequestPost as consultation } from '../functions/api/consultation.js';
import { onRequestPost as referral } from '../functions/api/referral.js';
import { onRequestPost as consent } from '../functions/api/consent.js';

const routes = { '/api/consultation': consultation, '/api/referral': referral, '/api/consent': consent };

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const handler = routes[pathname];
    if (handler) {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
      return handler({ request, env });
    }
    return env.ASSETS.fetch(request);
  },
};
