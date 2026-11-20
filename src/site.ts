// Site-wide constants.

export const appStoreID = "6811187145";

/**
 * App Store Connect provider token for campaign links (App Analytics ›
 * Campaigns). Empty until the owner copies it from App Store Connect; without
 * it the links still work, they just aren't attributed.
 */
export const providerToken = "129446816";

/** App Store link tagged with an App Analytics campaign (`ct`). */
export function storeURL(campaign: string, mac = false): string {
    const params = new URLSearchParams();
    if (providerToken) params.set("pt", providerToken);
    params.set("ct", campaign);
    params.set("mt", mac ? "12" : "8");
    return `https://apps.apple.com/app/id${appStoreID}?${params}`;
}

/**
 * Support address — Cloudflare Email Routing forwards it to the owner's inbox
 * (receive-only; replies go out from the owner's own address).
 */
export const supportEmail = "support@getchimera.app";

export const termsURL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export const copyright = "© 2026 Benjamin Dervisevic";
