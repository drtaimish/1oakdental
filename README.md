# 1oakdental.ca

Website for 1 Oak Dental, 1 Oak St, Toronto. Static site built with [Astro](https://astro.build), hosted on Cloudflare Pages.

## Edit content

- Office details (phone, address, hours, links): `src/data/practice.js`
- Service page copy: `src/data/serviceContent.js`
- Other pages: `src/pages/`

## Run locally

```
npm install
npm run dev
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: `FORM_WEBHOOK_URL` (patient consultation requests) and `REFERRAL_WEBHOOK_URL` (dentist referrals; falls back to the first)

The forms post to `functions/api/consultation.js` and `functions/api/referral.js`, which forward each submission to its webhook. Nothing is stored on the site.

## Open items

See `docs/open-items.md`.
