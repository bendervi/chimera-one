// getchimera.app — static marketing site, Privacy, Support and the Cast receiver
// (public/receiver/, copied byte-for-byte; see scripts/check-receiver.mjs).
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://getchimera.app",
    trailingSlash: "ignore",
    build: { format: "directory" },
    image: { responsiveStyles: false },
    devToolbar: { enabled: false },
});
