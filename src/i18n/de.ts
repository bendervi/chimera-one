import type { Strings } from "./en";

const de: Strings = {
    meta: {
        title: "Chimera — IPTV- und Mediaplayer für iPhone, iPad, Mac und Apple TV",
        description:
            "Live-TV, Filme, Serien und Musik aus deinen IPTV-Playlists, Plex, Jellyfin und Emby — in einem Player für iPhone, iPad, Mac und Apple TV.",
    },
    nav: {
        features: "Funktionen",
        selfhost: "Self-Hosting",
        pro: "Pro",
        support: "Support",
        download: "Laden",
        language: "Sprache",
        menu: "Menü",
    },
    badges: {
        ios: "Laden im App Store",
        mac: "Laden im Mac App Store",
    },
    hero: {
        eyebrow: "Für iPhone, iPad, Mac und Apple TV",
        title: "Alle deine Medien.\nEin schöner Player.",
        subtitle:
            "Live-TV, Filme, Serien, Musik, Fotos und Bücher aus deinen IPTV-Playlists und deinem eigenen Plex-, Jellyfin-, Emby-, Navidrome- oder Immich-Server — vereint in einer App, gemacht für Apple-Geräte.",
        note: "Kostenloser Download. Chimera enthält keine Inhalte — du bringst deine eigenen Quellen mit.",
    },
    devices: {
        title: "Eine App auf jedem Apple-Bildschirm.",
        body: "Favoriten, Wiedergabefortschritt und deine Quellen werden über iCloud synchronisiert — was du auf einem Gerät beginnst, wartet auf dem nächsten.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "Live-TV",
        title: "Zappen, das sich mühelos anfühlt.",
        body: "Durchsuche Sender nach Kategorie, sieh, was jetzt und danach läuft, und wechsle den Sender mit einem Tippen.",
        points: [
            "Ein vollständiger TV-Guide mit dem, was jetzt und danach läuft",
            "Kategorien, Favoriten und schnelles Umschalten",
            "Catch-up bei Sendern, die es unterstützen",
            "Die Spiele des Tages und die Sender, die sie zeigen",
        ],
    },
    library: {
        eyebrow: "Filme & Serien",
        title: "Deine Mediathek, endlich zu Hause.",
        body: "Ausführliche Detailseiten, Staffeln und Folgen und „Weiterschauen“, das sich genau merkt, wo du aufgehört hast.",
        points: [
            "Artwork, Besetzung und Details zu jedem Titel",
            "Weiterschauen und Verlauf",
            "Downloads zum Offline-Ansehen",
            "Suche in deiner gesamten Mediathek",
        ],
    },
    player: {
        eyebrow: "Der Player",
        title: "Gemacht für die Formate, die du wirklich hast.",
        body: "Chimera startet mit Apples nativem Player und wechselt von selbst zu einer integrierten Ausweich-Engine für Formate wie MKV, HEVC und AC-3.",
        points: [
            "Mehrere Tonspuren und Untertitel",
            "Untertitel-Stil und -Timing anpassbar",
            "Bild-in-Bild",
            "Chromecast auf iPhone, iPad und Mac",
        ],
    },
    selfhost: {
        eyebrow: "Für Self-Hoster",
        title: "Dein Server verdient eine schöne App.",
        body: "Verbinde Chimera mit den Servern, die du schon betreibst. Es spricht direkt mit ihnen — ohne Konto, ohne Relay, ohne Cloud dazwischen — und macht daraus eine native Mediathek auf jedem Apple-Gerät.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Filme und Serien",
            body: "Deine ganze Mediathek mit Artwork, Staffeln und Folgen und „Weiterschauen“, das dich vom iPhone bis zum Apple TV begleitet.",
            points: ["MKV, HEVC und AC-3 laufen über die automatische Ausweich-Engine", "Downloads zum Offline-Ansehen", "Untertitel und Tonspuren, ganz nach deinem Stil"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Musik",
            body: "Eine Musik-App, die deiner Sammlung gerecht wird: Alben, Künstler, Playlists und Liedtexte, mit „Jetzt läuft“ auf dem Sperrbildschirm.",
            points: ["Lade deine Originaldateien zum Offline-Hören", "Playlists und Favoriten", "Liedtexte zum laufenden Song"],
        },
        photos: {
            servers: "Immich",
            title: "Fotos",
            body: "Deine Immich-Mediathek nach Jahr, Monat oder Album, in einer schnellen Vollbild-Galerie auf iPhone, iPad, Mac und Apple TV.",
            points: ["Jahre, Monate und Alben", "Vollbildansicht", "Fotos auf dem Gerät sichern"],
        },
        books: {
            servers: "Komga · OPDS-Kataloge · Project Gutenberg",
            title: "Bücher",
            body: "Verbinde einen OPDS-Katalog wie Komga und lies EPUB- und PDF-Bücher in einem Reader, der für jedes Gerät gemacht ist.",
            points: ["Deine Leseposition wird gemerkt", "Bücher zum Offline-Lesen laden", "Kostenlose Klassiker von Project Gutenberg"],
        },
        direct: [
            { title: "Direkt zu deinem Server", body: "Nichts läuft über einen Chimera-Server — es gibt keinen." },
            { title: "Jeder Server, eine App", body: "Füge mehrere Server hinzu, gib jedem einen Namen und eine Farbe und wechsle mit einem Tippen." },
            { title: "Eine Mediathek", body: "Mit Chimera Pro kommen Musik und Fotos all deiner Server zusammen." },
            { title: "Passwörter bleiben, wo sie sind", body: "Server-Zugangsdaten liegen im Schlüsselbund deines Geräts." },
        ],
    },
    sources: {
        eyebrow: "Deine Quellen",
        title: "Bring mit, was du schon hast.",
        body: "Chimera ist nur ein Player — es enthält keine Sender, Filme oder Musik. Verbinde die Dienste, die du nutzt, und gib jeder Quelle einen Namen und eine Farbe.",
        list: [
            "Xtream Codes",
            "M3U-Playlists",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome & Subsonic",
            "Immich",
            "OPDS-Kataloge",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Nutze nur Quellen, die dir gehören oder für die du berechtigt bist.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Kostenlos starten. Pro, wenn du mehr willst.",
        body: "Chimera ist kostenlos. Chimera Pro gibt es als Monats- oder Jahresabo oder als einmaligen Kauf — per Familienfreigabe mit deiner Familie geteilt.",
        features: [
            { title: "Unbegrenzt Quellen", body: "Die kostenlose Version enthält zwei." },
            { title: "Multiview", body: "Mehrere Sender gleichzeitig ansehen." },
            { title: "Eine Mediathek", body: "Musik, Fotos und Home über alle deine Quellen." },
            { title: "Dein Home", body: "Wähle und ordne die Bereiche, die du siehst." },
            { title: "Keine Werbung", body: "Die kostenlose App für iPhone und iPad zeigt gelegentlich Werbung." },
        ],
    },
    privacy: {
        eyebrow: "Datenschutz",
        title: "Privat von Grund auf.",
        points: [
            { title: "Kein Konto", body: "App öffnen, Quelle hinzufügen. Fertig." },
            { title: "Kein Tracking", body: "Chimera verfolgt dich nicht, und der Entwickler erhält nie deine Daten." },
            { title: "Schlüsselbund", body: "Passwörter bleiben im Schlüsselbund deines Geräts und werden nie synchronisiert." },
        ],
        link: "Datenschutzrichtlinie lesen (Englisch)",
    },
    faq: {
        title: "Fragen",
        items: [
            {
                q: "Enthält Chimera Sender oder Filme?",
                a: "Nein. Chimera ist nur ein Player. Du fügst deine eigenen Quellen hinzu: ein IPTV-Abo, für das du berechtigt bist, deinen eigenen Plex-, Jellyfin- oder Emby-Server oder deinen eigenen Cloud-Speicher.",
            },
            {
                q: "Funktioniert es mit meinem Plex-, Jellyfin- oder Emby-Server?",
                a: "Ja. Füge deinen Server als Quelle hinzu, und Chimera zeigt seine Filme, Serien und Musik. Plex meldet sich mit deinem Plex-Konto an; Jellyfin und Emby nutzen Serveradresse, Benutzername und Passwort.",
            },
            {
                q: "Welche Quellen kann ich hinzufügen?",
                a: "Xtream-Codes- und M3U-Playlists, Plex-, Jellyfin- und Emby-Server, Navidrome oder Subsonic für Musik, Immich für Fotos, OPDS-Buchkataloge sowie Dropbox oder MEGA.",
            },
            {
                q: "Ist Chimera kostenlos?",
                a: "Ja. Chimera ist kostenlos und unterstützt bis zu zwei Quellen. Chimera Pro bringt unbegrenzt viele Quellen, Multiview, eine Mediathek über alle deine Quellen und mehr — und entfernt die Werbung.",
            },
            {
                q: "Wird mein Video abgespielt?",
                a: "Chimera nutzt Apples nativen Player und wechselt automatisch zur integrierten Ausweich-Engine für Formate, die dieser nicht dekodieren kann, etwa viele MKV-Dateien und AC-3-Ton.",
            },
            {
                q: "Auf welchen Geräten läuft es?",
                a: "iPhone, iPad, Mac und Apple TV. Favoriten, Wiedergabefortschritt und deine Quellenliste werden über iCloud zwischen ihnen synchronisiert.",
            },
        ],
        more: "Weitere Antworten auf der Support-Seite (Englisch)",
    },
    cta: {
        title: "Deine Medien warten.",
        body: "Lade Chimera und füge deine erste Quelle hinzu.",
    },
    footer: {
        support: "Support",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
        trademarks:
            "Apple, das Apple Logo, iPhone, iPad, Mac, Apple TV und AirPlay sind Marken der Apple Inc., die in den USA und weiteren Ländern eingetragen sind. App Store und Mac App Store sind Dienstleistungsmarken der Apple Inc.",
    },
    alt: {
        homeIPhone: "Chimeras Home auf dem iPhone mit einer hervorgehobenen Serie und einer Reihe neuer Filme",
        macGuide: "Der vollständige TV-Guide in Chimera für Mac",
        ipadPlayer: "Ein Video in Chimera auf dem iPad",
        tvLive: "Live-TV auf Apple TV mit Senderliste und Vorschau",
        liveIPhone: "Die Live-TV-Senderliste auf dem iPhone mit dem aktuellen Programm",
        liveIPad: "Live-TV auf dem iPad mit Weiterschauen, Programm und allen Sendern",
        detail: "Die Detailseite eines Films auf dem iPhone",
        ipadHome: "Chimeras Home auf dem iPad",
        player: "Ein Live-Sender im Player von Chimera",
        music: "Jetzt läuft mit einem Chopin-Album",
        books: "Die Detailseite eines Buchs",
        photos: "Eine Fotomediathek mit Weltraumbildern",
        sources: "Eine Quelle in Chimera hinzufügen: Xtream, M3U, Plex, Jellyfin und mehr",
        macBook: "Die Detailseite eines Buchs in Chimera für Mac",
        tvPhoto: "Ein Foto von Jupiter auf Apple TV",
        detailDark: "Die Detailseite eines Films von einem Medienserver, mit Abspielen und Laden",
        musicAlbum: "Ein Chopin-Album mit seinen Titeln, Abspielen und Zufällig",
        photoViewer: "Ein Foto von Jupiter in der Vollbildansicht",
        reader: "Eine Seite aus „Die Abenteuer des Sherlock Holmes“ im Reader",
    },
};

export default de;
