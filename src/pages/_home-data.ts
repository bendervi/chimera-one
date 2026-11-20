// Structured data for the home page (SoftwareApplication + FAQPage).
import type { Locale } from "../i18n";
import { appStoreID } from "../site";

export function homeJSONLD(locale: Locale): object[] {
    const t = locale.strings;
    return [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Chimera",
            description: t.meta.description,
            applicationCategory: "EntertainmentApplication",
            operatingSystem: "iOS, iPadOS, macOS, tvOS",
            url: "https://getchimera.app/",
            downloadUrl: `https://apps.apple.com/app/id${appStoreID}`,
            inLanguage: locale.tag,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: locale.tag,
            mainEntity: t.faq.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
        },
    ];
}
