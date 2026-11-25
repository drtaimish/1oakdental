// Referrals from other dentists. Webhook: REFERRAL_WEBHOOK_URL (falls back to FORM_WEBHOOK_URL).
// Fields mirror the printed referral pads.
import { forward } from './_forward.js';

export const onRequestPost = ({ request, env }) =>
  forward({
    request,
    env,
    kind: 'referral',
    webhookVar: 'REFERRAL_WEBHOOK_URL',
    fields: [
      'referral_type', 'referral_other', 'sedation', 'teeth', 'radiographs',
      'patient_first_name', 'patient_last_name', 'patient_phone', 'patient_dob', 'insurance',
      'referrer_name', 'referrer_clinic', 'referrer_phone', 'referrer_email', 'notes',
    ],
    required: ['referrer_name', 'referrer_email', 'patient_first_name', 'patient_phone'],
    multi: ['referral_type'],
  });
