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
- Forms: submissions are emailed to `MAIL_TO` (info@1oakdental.ca) by the Worker's `EMAIL` send binding (Cloudflare Email Service). One-time setup in the Cloudflare dashboard: Compute > Email Service > Email Sending > Onboard domain (1oakdental.ca), and Email Routing > Destination addresses > add and verify info@1oakdental.ca. Optional `FORM_WEBHOOK_URL` / `REFERRAL_WEBHOOK_URL` also post each submission as JSON.
- Hosting: Cloudflare Workers with static assets (`wrangler.toml`): `npm run build && npx wrangler deploy`, or connect the GitHub repo under Workers > Create > Import a repository (build `npm run build`, deploy `npx wrangler deploy`). The `functions/` folder keeps the same handlers working on Cloudflare Pages if that is ever used instead.

The forms post to `functions/api/consultation.js` and `functions/api/referral.js`, which forward each submission to its webhook. Nothing is stored on the site.

## Open items

See `docs/open-items.md`.
