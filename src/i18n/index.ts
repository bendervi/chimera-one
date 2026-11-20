// Locales — the app's String Catalog set. English lives at the site root,
// every other locale under /<path>/.

import type { Strings } from "./en";
import en from "./en";
import de from "./de";
import fr from "./fr";
import es from "./es";
import it from "./it";
import nl from "./nl";
import pl from "./pl";
import ptBR from "./pt-br";
import tr from "./tr";
import hr from "./hr";
import ar from "./ar";

export interface Locale {
    /** URL segment ("" for English at the root). */
    path: string;
    /** BCP 47 tag for `lang` and `hreflang`. */
    tag: string;
    /** The language's own name, for the picker. */
    name: string;
    dir: "ltr" | "rtl";
    /** Apple marketing-tools badge locale; null = no localized badge, use English. */
    badge: string;
    macBadge: string;
    /** Open Graph locale. */
    og: string;
    strings: Strings;
}

export const locales: Locale[] = [
    { path: "", tag: "en", name: "English", dir: "ltr", badge: "en-us", macBadge: "en-us", og: "en_US", strings: en },
    { path: "ar", tag: "ar", name: "العربية", dir: "rtl", badge: "ar-ar", macBadge: "en-us", og: "ar_AR", strings: ar },
    { path: "de", tag: "de", name: "Deutsch", dir: "ltr", badge: "de-de", macBadge: "de-de", og: "de_DE", strings: de },
    { path: "es", tag: "es", name: "Español", dir: "ltr", badge: "es-es", macBadge: "es-es", og: "es_ES", strings: es },
    { path: "fr", tag: "fr", name: "Français", dir: "ltr", badge: "fr-fr", macBadge: "fr-fr", og: "fr_FR", strings: fr },
    { path: "hr", tag: "hr", name: "Hrvatski", dir: "ltr", badge: "hr-hr", macBadge: "hr-hr", og: "hr_HR", strings: hr },
    { path: "it", tag: "it", name: "Italiano", dir: "ltr", badge: "it-it", macBadge: "it-it", og: "it_IT", strings: it },
    { path: "nl", tag: "nl", name: "Nederlands", dir: "ltr", badge: "nl-nl", macBadge: "nl-nl", og: "nl_NL", strings: nl },
    { path: "pl", tag: "pl", name: "Polski", dir: "ltr", badge: "pl-pl", macBadge: "en-us", og: "pl_PL", strings: pl },
    { path: "pt-br", tag: "pt-BR", name: "Português (Brasil)", dir: "ltr", badge: "pt-br", macBadge: "pt-br", og: "pt_BR", strings: ptBR },
    { path: "tr", tag: "tr", name: "Türkçe", dir: "ltr", badge: "tr-tr", macBadge: "tr-tr", og: "tr_TR", strings: tr },
];

export const english = locales[0];

export function localeFor(path: string | undefined): Locale {
    return locales.find((l) => l.path === (path ?? "")) ?? english;
}

/** Root-relative URL of a page in a locale ("/de/" + page). */
export function href(locale: Locale, page = ""): string {
    const prefix = locale.path ? `/${locale.path}/` : "/";
    return prefix + page;
}
