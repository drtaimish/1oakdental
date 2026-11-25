// Patient consultation requests. Webhook: FORM_WEBHOOK_URL.
import { forward } from './_forward.js';

export const onRequestPost = ({ request, env }) =>
  forward({
    request,
    env,
    kind: 'consultation',
    webhookVar: 'FORM_WEBHOOK_URL',
    fields: ['first_name', 'last_name', 'phone', 'email', 'treatment', 'financing', 'referral_source', 'message'],
    required: ['first_name', 'phone'],
  });
