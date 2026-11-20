// sitemap.xml — every home locale (with hreflang alternates) plus the English pages.
import type { APIRoute } from "astro";
import { locales, href } from "../i18n";

export const GET: APIRoute = ({ site }) => {
    const base = site ?? new URL("https://getchimera.app");
    const url = (path: string) => new URL(path, base).href;
    const alternates = locales
        .map((l) => `<xhtml:link rel="alternate" hreflang="${l.tag}" href="${url(href(l))}"/>`)
        .join("");
    const homes = locales.map((l) => `<url><loc>${url(href(l))}</loc>${alternates}</url>`);
    const pages = ["/support/", "/privacy/", "/privacy/tv/"].map((p) => `<url><loc>${url(p)}</loc></url>`);
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${[...homes, ...pages].join("")}</urlset>`;
    return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
