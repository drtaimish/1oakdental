// Referrals from other dentists. Webhook: REFERRAL_WEBHOOK_URL (falls back to FORM_WEBHOOK_URL).
import { forward } from './_forward.js';

export const onRequestPost = ({ request, env }) =>
  forward({
    request,
    env,
    kind: 'referral',
    webhookVar: 'REFERRAL_WEBHOOK_URL',
    fields: ['referrer_name', 'referrer_clinic', 'referrer_phone', 'referrer_email', 'patient_name', 'patient_phone', 'treatment', 'urgency', 'notes'],
    required: ['referrer_name', 'referrer_email', 'patient_name', 'patient_phone'],
  });
