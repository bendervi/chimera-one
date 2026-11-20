# Old GitHub Pages address

`bendervi.github.io/chimera-one/` stays alive for links that shipped before the
move to getchimera.app (the paywall's privacy link, the Mac Help menu, App Store
Connect). The Cast receiver lives only on getchimera.app/receiver/ — switch the
Cast console's receiver URL there *before* this goes live.

`.github/workflows/legacy-github-pages.yml` publishes `redirect.html` as
`index.html`, `privacy.html`, `privacy-tv.html`, `support.html` and `404.html`;
each forwards to the same path on getchimera.app (the 404 page covers every
other path, /receiver/ included).

Never delete this while any shipped build or console setting uses the old address.
