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
- Environment variable: `FORM_WEBHOOK_URL` = where consultation requests are sent (CRM, Teraleads or Zapier webhook)

The consultation form posts to `functions/api/consultation.js`, which forwards each request to that webhook. Nothing is stored on the site.

## Open items

See `docs/open-items.md`.
