# Old GitHub Pages address

`bendervi.github.io/chimera-one/` stays alive for links that shipped before the
move to getchimera.app (the paywall's privacy link, the Mac Help menu, App Store
Connect, and the Cast console until its receiver URL is changed).

`.github/workflows/legacy-github-pages.yml` publishes:
- `receiver/` — a byte-for-byte copy of `public/receiver/`, so Cast sessions that
  still load the old receiver URL keep working;
- `redirect.html` as `index.html`, `privacy.html`, `privacy-tv.html`,
  `support.html` and `404.html` — each forwards to the same page on getchimera.app.

Never delete this while any shipped build or console setting uses the old address.
