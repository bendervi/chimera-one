# getchimera.app

Chimera's website: the product page (11 languages), Support, Privacy, and the
Chromecast Web Receiver. Static [Astro](https://astro.build) site hosted on
**Cloudflare Pages** (Git integration: build `npm run build`, output `dist`,
`NODE_VERSION=22`). Every branch gets a preview URL on `*.pages.dev`.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/, then checks the receiver is byte-identical
```

## Layout

- `src/components/Home.astro` — the product page; `src/i18n/<lang>.ts` — its text
  (English in `en.ts`; every locale has the same keys, enforced by the `Strings` type).
- `src/pages/support/`, `src/pages/privacy/` (+ `privacy/tv`) — English only.
- `public/_redirects` — 301s from the old `.html` addresses; `public/_headers` —
  caching (the receiver is `no-cache`, so fixes reach TVs on the next cast).
- `legacy-github-pages/` + `.github/workflows/legacy-github-pages.yml` — keeps the
  old `bendervi.github.io/chimera-one/` address alive (redirects to getchimera.app).
  Shipped app builds link there. Keep it.
- `public/receiver/` — **the live Cast receiver (App ID 269B640F)**. Every push to
  `main` changes what plays on every user's TV. Try changes at `/receiver-dev/`
  or with `?demo=` first.
- `public/og/` — social preview images, rendered from each locale's hero.
- `src/site.ts` — App Store ID, campaign links, support address.

## Rules

- Screens are real captures of the app (`src/assets/captures/`), never mock-ups;
  only free or public-domain titles appear in them (no commercial posters or album art).
- Claim only shipped, verified features; say that Chimera includes no content.
- No analytics, cookies or third-party requests on the marketing pages.
- Apple badges come unmodified from Apple's marketing tools.
