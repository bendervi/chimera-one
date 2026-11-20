import type { Strings } from "./en";

const nl: Strings = {
    meta: {
        title: "Chimera — IPTV- en mediaspeler voor iPhone, iPad, Mac en Apple TV",
        description:
            "Live-tv, films, series en muziek uit je IPTV-playlists, Plex, Jellyfin en Emby, in één speler voor iPhone, iPad, Mac en Apple TV.",
    },
    nav: {
        features: "Functies",
        selfhost: "Selfhosting",
        pro: "Pro",
        support: "Support",
        download: "Download",
        language: "Taal",
        menu: "Menu",
    },
    badges: {
        ios: "Download in de App Store",
        mac: "Download in de Mac App Store",
    },
    hero: {
        eyebrow: "Voor iPhone, iPad, Mac en Apple TV",
        title: "Al je media,\nin één app.",
        subtitle:
            "Live-tv, films, series, muziek, foto’s en boeken uit je IPTV-playlists en je eigen Plex-, Jellyfin-, Emby-, Navidrome- of Immich-server. Gemaakt voor iPhone, iPad, Mac en Apple TV.",
        note: "Gratis te downloaden. Chimera bevat geen content; je voegt je eigen bronnen toe.",
    },
    devices: {
        title: "Begin op het ene scherm. Kijk verder op het andere.",
        body: "Favorieten, kijkvoortgang en je bronnen synchroniseren via iCloud.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "Live-tv",
        title: "Live-tv met een echte gids.",
        body: "Blader door zenders per categorie, zie wat er nu en straks op is en wissel van zender met één tik.",
        points: [
            "Een volledige tv-gids met wat er nu en straks op is",
            "Categorieën, favorieten en snel zappen",
            "Terugkijken op zenders die het ondersteunen",
            "De wedstrijden van vandaag en de zenders die ze uitzenden",
        ],
    },
    library: {
        eyebrow: "Films & series",
        title: "Gaat verder waar je stopte.",
        body: "Detailpagina’s met artwork en cast, alle seizoenen en afleveringen, en Verder kijken op al je apparaten.",
        points: [
            "Artwork, cast en details bij elke titel",
            "Verder kijken en geschiedenis",
            "Downloads om offline te kijken",
            "Zoeken in je hele bibliotheek",
        ],
    },
    player: {
        eyebrow: "De speler",
        title: "Gemaakt voor de formaten die je echt hebt.",
        body: "Chimera start met de eigen speler van Apple en schakelt vanzelf over op een ingebouwde reserve-engine voor formaten als MKV, HEVC en AC-3.",
        points: [
            "Meerdere audiosporen en ondertitels",
            "Stijl en timing van ondertitels aanpasbaar",
            "Beeld-in-beeld",
            "Chromecast op iPhone, iPad en Mac",
        ],
    },
    selfhost: {
        eyebrow: "Selfhosting",
        title: "Gemaakt voor je eigen server.",
        body: "Voeg de servers toe die je al draait. Chimera maakt er rechtstreeks verbinding mee, zonder account en zonder tussenstation, en toont alles als één bibliotheek op elk Apple-apparaat.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Films en series",
            body: "Je hele bibliotheek met artwork, seizoenen en afleveringen, en Verder kijken dat je volgt van iPhone tot Apple TV.",
            points: ["MKV, HEVC en AC-3 spelen via de automatische reserve-engine", "Downloads om offline te kijken", "Ondertitels en audiosporen zoals jij ze wilt"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Muziek",
            body: "Albums, artiesten, afspeellijsten en songteksten, met Nu aan het spelen op het toegangsscherm.",
            points: ["Download je originele bestanden om offline te luisteren", "Afspeellijsten en favorieten", "Songteksten bij het nummer dat speelt"],
        },
        photos: {
            servers: "Immich",
            title: "Foto’s",
            body: "Je Immich-bibliotheek per jaar, maand of album, schermvullend op iPhone, iPad, Mac en Apple TV.",
            points: ["Jaren, maanden en albums", "Schermvullend bekijken", "Foto’s bewaren op je apparaat"],
        },
        books: {
            servers: "Komga · OPDS-catalogi · Project Gutenberg",
            title: "Boeken",
            body: "Koppel een OPDS-catalogus zoals Komga en lees EPUB- en PDF-boeken in een lezer gemaakt voor elk apparaat.",
            points: ["Je leespositie wordt onthouden", "Download boeken om offline te lezen", "Gratis klassiekers van Project Gutenberg"],
        },
        direct: [
            { title: "Rechtstreeks naar je server", body: "Chimera heeft zelf geen server, dus er gaat ook niets doorheen." },
            { title: "Al je servers, één app", body: "Voeg meerdere servers toe, geef elk een naam en kleur en wissel met één tik." },
            { title: "Eén bibliotheek", body: "Met Chimera Pro komen muziek en foto’s van al je servers samen." },
            { title: "Wachtwoorden blijven waar ze zijn", body: "Serverinloggegevens staan in de sleutelhanger van je apparaat." },
        ],
    },
    sources: {
        eyebrow: "Je bronnen",
        title: "Gebruik wat je al hebt.",
        body: "Chimera is een speler. Er zitten geen zenders, films of muziek in. Koppel de diensten die je gebruikt en geef elke bron een naam en een kleur.",
        list: [
            "Xtream Codes",
            "M3U-playlists",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome & Subsonic",
            "Immich",
            "OPDS-catalogi",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Gebruik alleen bronnen die van jou zijn of die je mag gebruiken.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Gratis beginnen. Pro als je meer wilt.",
        body: "Chimera is gratis te downloaden. Chimera Pro is een maand- of jaarabonnement of een eenmalige aankoop, gedeeld met je gezin via Delen met gezin.",
        features: [
            { title: "Onbeperkt bronnen", body: "De gratis versie heeft er twee." },
            { title: "Multiview", body: "Kijk naar meerdere zenders tegelijk." },
            { title: "Eén bibliotheek", body: "Muziek, foto’s en Thuis over al je bronnen." },
            { title: "Jouw Thuis", body: "Kies en orden de onderdelen die je ziet." },
            { title: "Geen advertenties", body: "De gratis app voor iPhone en iPad toont af en toe een advertentie." },
        ],
    },
    privacy: {
        eyebrow: "Privacy",
        title: "Geen account. Geen tracking.",
        points: [
            { title: "Niets om je voor aan te melden", body: "Open de app en voeg een bron toe." },
            { title: "Niets wordt gevolgd", body: "Chimera volgt je niet, en de ontwikkelaar ontvangt nooit je gegevens." },
            { title: "Wachtwoorden blijven op het apparaat", body: "Ze staan in de sleutelhanger en worden nooit gesynchroniseerd." },
        ],
        link: "Lees het privacybeleid (Engels)",
    },
    faq: {
        title: "Vragen",
        items: [
            {
                q: "Zitten er zenders of films in Chimera?",
                a: "Nee. Chimera is alleen een speler. Je voegt je eigen bronnen toe: een IPTV-abonnement dat je mag gebruiken, je eigen Plex-, Jellyfin- of Emby-server, of je eigen cloudopslag.",
            },
            {
                q: "Werkt het met mijn Plex-, Jellyfin- of Emby-server?",
                a: "Ja. Voeg je server toe als bron en Chimera toont de films, series en muziek. Plex logt in met je Plex-account; Jellyfin en Emby gebruiken het serveradres, je gebruikersnaam en wachtwoord.",
            },
            {
                q: "Welke bronnen kan ik toevoegen?",
                a: "Xtream Codes- en M3U-playlists, Plex-, Jellyfin- en Emby-servers, Navidrome of Subsonic voor muziek, Immich voor foto’s, OPDS-boekcatalogi, en Dropbox of MEGA.",
            },
            {
                q: "Is Chimera gratis?",
                a: "Ja. Chimera is gratis te downloaden en werkt met maximaal twee bronnen. Chimera Pro voegt onbeperkt bronnen, Multiview, één bibliotheek over al je bronnen en meer toe, en haalt de advertenties weg.",
            },
            {
                q: "Speelt mijn video af?",
                a: "Chimera gebruikt de eigen speler van Apple en schakelt automatisch over op de ingebouwde reserve-engine voor formaten die die speler niet kan decoderen, zoals veel MKV-bestanden en AC-3-audio.",
            },
            {
                q: "Op welke apparaten werkt het?",
                a: "iPhone, iPad, Mac en Apple TV. Favorieten, kijkvoortgang en je lijst met bronnen synchroniseren via iCloud.",
            },
        ],
        more: "Meer antwoorden op de supportpagina (Engels)",
    },
    cta: {
        title: "Download Chimera.",
        body: "Gratis voor iPhone, iPad, Mac en Apple TV.",
    },
    footer: {
        support: "Support",
        privacy: "Privacybeleid",
        terms: "Gebruiksvoorwaarden",
        trademarks:
            "Apple, het Apple-logo, iPhone, iPad, Mac, Apple TV en AirPlay zijn handelsmerken van Apple Inc., gedeponeerd in de VS en andere landen. App Store en Mac App Store zijn dienstmerken van Apple Inc.",
    },
    alt: {
        homeIPhone: "Thuis in Chimera op de iPhone, met een uitgelichte serie en een rij nieuwe films",
        macGuide: "De volledige tv-gids in Chimera voor Mac",
        ipadPlayer: "Een video die afspeelt in Chimera op de iPad",
        tvLive: "Live-tv op Apple TV, met een zenderlijst en een voorvertoning",
        liveIPhone: "De lijst met live zenders op de iPhone, met wat er nu op is",
        liveIPad: "Live-tv op de iPad, met Verder kijken, de gids en alle zenders",
        detail: "De detailpagina van een film op de iPhone",
        ipadHome: "Thuis in Chimera op de iPad",
        player: "Een live zender in de speler van Chimera",
        music: "Nu aan het spelen: een album van Chopin",
        books: "De detailpagina van een boek",
        photos: "Een fotobibliotheek met ruimtebeelden",
        sources: "Een bron toevoegen in Chimera: Xtream, M3U, Plex, Jellyfin en meer",
        macBook: "De detailpagina van een boek in Chimera voor Mac",
        tvPhoto: "Een foto van Jupiter op Apple TV",
        detailDark: "De detailpagina van een film van een mediaserver, met Speel af en Download",
        musicAlbum: "Een album van Chopin met de nummers, Speel af en Shuffle",
        photoViewer: "Een foto van Jupiter schermvullend",
        reader: "Een pagina uit De avonturen van Sherlock Holmes in de lezer",
    },
};

export default nl;
