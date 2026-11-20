import type { Strings } from "./en";

const hr: Strings = {
    meta: {
        title: "Chimera — IPTV i medijski player za iPhone, iPad, Mac i Apple TV",
        description:
            "TV uživo, filmovi, serije i glazba s tvojih IPTV popisa, Plexa, Jellyfina i Embyja — u jednom playeru za iPhone, iPad, Mac i Apple TV.",
    },
    nav: {
        features: "Značajke",
        selfhost: "Vlastiti poslužitelj",
        pro: "Pro",
        support: "Podrška",
        download: "Preuzmi",
        language: "Jezik",
        menu: "Izbornik",
    },
    badges: {
        ios: "Preuzmi na App Storeu",
        mac: "Preuzmi na Mac App Storeu",
    },
    hero: {
        eyebrow: "Za iPhone, iPad, Mac i Apple TV",
        title: "Svi tvoji mediji.\nJedan prekrasan player.",
        subtitle:
            "TV uživo, filmovi, serije, glazba, fotografije i knjige s tvojih IPTV popisa i vlastitog Plex, Jellyfin, Emby, Navidrome ili Immich poslužitelja — zajedno u jednoj aplikaciji stvorenoj za Apple uređaje.",
        note: "Besplatno preuzimanje. Chimera ne sadrži sadržaj — koristiš vlastite izvore.",
    },
    devices: {
        title: "Jedna aplikacija na svakom Apple zaslonu.",
        body: "Favoriti, napredak gledanja i tvoji izvori sinkroniziraju se putem iClouda, pa te ono što započneš na jednom uređaju čeka na sljedećem.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "TV uživo",
        title: "Prebacivanje kanala bez napora.",
        body: "Pregledavaj kanale po kategorijama, vidi što je sada i sljedeće na programu i promijeni kanal jednim dodirom.",
        points: [
            "Potpuni TV vodič s onim što je sada i sljedeće",
            "Kategorije, favoriti i brzo prebacivanje kanala",
            "Catch-up na kanalima koji ga podržavaju",
            "Današnje utakmice i kanali koji ih prenose",
        ],
    },
    library: {
        eyebrow: "Filmovi i serije",
        title: "Tvoja zbirka, napokon kod kuće.",
        body: "Bogate stranice s detaljima, sezone i epizode te Nastavi gledati, koji točno pamti gdje si stao.",
        points: [
            "Naslovnice, glumci i detalji za svaki naslov",
            "Nastavi gledati i povijest",
            "Preuzimanja za gledanje izvan mreže",
            "Pretraživanje cijele zbirke",
        ],
    },
    player: {
        eyebrow: "Player",
        title: "Stvoren za formate koje stvarno imaš.",
        body: "Chimera počinje s Appleovim izvornim playerom i sama prelazi na ugrađeni rezervni mehanizam za formate poput MKV-a, HEVC-a i AC-3.",
        points: [
            "Više audiozapisa i titlova",
            "Prilagodljiv stil i vremensko usklađivanje titlova",
            "Slika u slici",
            "Chromecast na iPhoneu, iPadu i Macu",
        ],
    },
    selfhost: {
        eyebrow: "Za one s vlastitim poslužiteljem",
        title: "Tvoj poslužitelj zaslužuje prekrasnu aplikaciju.",
        body: "Poveži Chimeru s poslužiteljima koje već imaš. Razgovara s njima izravno — bez računa, bez posrednika, bez oblaka između — i pretvara ih u jednu izvornu zbirku na svakom Apple uređaju.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Filmovi i serije",
            body: "Cijela tvoja zbirka s naslovnicama, sezonama i epizodama te Nastavi gledati, koji te prati od iPhonea do Apple TV-a.",
            points: ["MKV, HEVC i AC-3 reproducira automatski rezervni mehanizam", "Preuzimanja za gledanje izvan mreže", "Titlovi i audiozapisi po tvom ukusu"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Glazba",
            body: "Glazbena aplikacija dostojna tvoje kolekcije: albumi, izvođači, popisi za reprodukciju i tekstovi, uz Upravo svira na zaključanom zaslonu.",
            points: ["Preuzmi izvorne datoteke za slušanje izvan mreže", "Popisi za reprodukciju i favoriti", "Tekst pjesme koja svira"],
        },
        photos: {
            servers: "Immich",
            title: "Fotografije",
            body: "Tvoja Immich zbirka po godini, mjesecu ili albumu, u brzoj galeriji preko cijelog zaslona na iPhoneu, iPadu, Macu i Apple TV-u.",
            points: ["Godine, mjeseci i albumi", "Prikaz preko cijelog zaslona", "Spremi fotografije na uređaj"],
        },
        books: {
            servers: "Komga · OPDS katalozi · Project Gutenberg",
            title: "Knjige",
            body: "Poveži OPDS katalog poput Komge i čitaj EPUB i PDF knjige u čitaču stvorenom za svaki uređaj.",
            points: ["Pamti gdje si stao s čitanjem", "Preuzmi knjige za čitanje izvan mreže", "Besplatni klasici s Project Gutenberga"],
        },
        direct: [
            { title: "Izravno do tvog poslužitelja", body: "Ništa ne prolazi kroz Chimerin poslužitelj — takav ne postoji." },
            { title: "Svi poslužitelji, jedna aplikacija", body: "Dodaj više poslužitelja, svakom daj ime i boju i prebacuj se jednim dodirom." },
            { title: "Jedna zbirka", body: "Uz Chimera Pro glazba i fotografije sa svih tvojih poslužitelja su na jednom mjestu." },
            { title: "Lozinke ostaju na mjestu", body: "Podaci za prijavu na poslužitelje čuvaju se u privjesku ključeva uređaja." },
        ],
    },
    sources: {
        eyebrow: "Tvoji izvori",
        title: "Donesi ono što već imaš.",
        body: "Chimera je samo player — ne sadrži kanale, filmove ni glazbu. Poveži usluge koje koristiš i svakom izvoru daj ime i boju.",
        list: [
            "Xtream Codes",
            "M3U popisi",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome i Subsonic",
            "Immich",
            "OPDS katalozi",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Koristi samo izvore koji su tvoji ili za koje imaš ovlaštenje.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Besplatno za početak. Pro kad želiš više.",
        body: "Chimera se preuzima besplatno. Chimera Pro je mjesečna ili godišnja pretplata ili jednokratna kupnja, koju putem Obiteljskog dijeljenja dijeliš s obitelji.",
        features: [
            { title: "Neograničeno izvora", body: "Besplatna verzija uključuje dva." },
            { title: "Multiview", body: "Gledaj više kanala odjednom." },
            { title: "Jedna zbirka", body: "Glazba, fotografije i Početna iz svih tvojih izvora." },
            { title: "Tvoja Početna", body: "Odaberi i poredaj odjeljke koje vidiš." },
            { title: "Bez oglasa", body: "Besplatna aplikacija za iPhone i iPad povremeno prikazuje oglas." },
        ],
    },
    privacy: {
        eyebrow: "Privatnost",
        title: "Privatnost od samog početka.",
        points: [
            { title: "Bez računa", body: "Otvori aplikaciju i dodaj izvor. To je sve." },
            { title: "Bez praćenja", body: "Chimera te ne prati, a razvojni programer nikad ne prima tvoje podatke." },
            { title: "Privjesak ključeva", body: "Lozinke ostaju u privjesku ključeva tvog uređaja i nikad se ne sinkroniziraju." },
        ],
        link: "Pročitaj Pravila privatnosti (na engleskom)",
    },
    faq: {
        title: "Pitanja",
        items: [
            {
                q: "Dolazi li Chimera s kanalima ili filmovima?",
                a: "Ne. Chimera je samo player. Dodaješ vlastite izvore: IPTV pretplatu za koju imaš ovlaštenje, vlastiti Plex, Jellyfin ili Emby poslužitelj ili vlastitu pohranu u oblaku.",
            },
            {
                q: "Radi li s mojim Plex, Jellyfin ili Emby poslužiteljem?",
                a: "Da. Dodaj poslužitelj kao izvor i Chimera prikazuje njegove filmove, serije i glazbu. Plex se prijavljuje tvojim Plex računom; Jellyfin i Emby koriste adresu poslužitelja, korisničko ime i lozinku.",
            },
            {
                q: "Koje izvore mogu dodati?",
                a: "Xtream Codes i M3U popise, Plex, Jellyfin i Emby poslužitelje, Navidrome ili Subsonic za glazbu, Immich za fotografije, OPDS kataloge knjiga te Dropbox ili MEGA.",
            },
            {
                q: "Je li Chimera besplatna?",
                a: "Da. Chimera se preuzima besplatno i podržava do dva izvora. Chimera Pro dodaje neograničeno izvora, Multiview, jednu zbirku iz svih tvojih izvora i više te uklanja oglase.",
            },
            {
                q: "Hoće li se moj video reproducirati?",
                a: "Chimera koristi Appleov izvorni player i automatski prelazi na ugrađeni rezervni mehanizam za formate koje taj player ne može dekodirati, poput mnogih MKV datoteka i AC-3 zvuka.",
            },
            {
                q: "Na kojim uređajima radi?",
                a: "iPhone, iPad, Mac i Apple TV. Favoriti, napredak gledanja i popis izvora sinkroniziraju se među njima putem iClouda.",
            },
        ],
        more: "Više odgovora na stranici podrške (na engleskom)",
    },
    cta: {
        title: "Tvoji mediji te čekaju.",
        body: "Preuzmi Chimeru i dodaj svoj prvi izvor.",
    },
    footer: {
        support: "Podrška",
        privacy: "Pravila privatnosti",
        terms: "Uvjeti korištenja",
        trademarks:
            "Apple, Apple logotip, iPhone, iPad, Mac, Apple TV i AirPlay zaštitni su znakovi tvrtke Apple Inc. registrirani u SAD-u i drugim državama. App Store i Mac App Store uslužni su znakovi tvrtke Apple Inc.",
    },
    alt: {
        homeIPhone: "Početna u Chimeri na iPhoneu, s istaknutom serijom i nizom novih filmova",
        macGuide: "Potpuni TV vodič u Chimeri za Mac",
        ipadPlayer: "Video koji se reproducira u Chimeri na iPadu",
        tvLive: "TV uživo na Apple TV-u s popisom kanala i pregledom",
        liveIPhone: "Popis kanala uživo na iPhoneu s trenutnim programom",
        liveIPad: "TV uživo na iPadu s Nastavi gledati, vodičem i svim kanalima",
        detail: "Stranica filma na iPhoneu",
        ipadHome: "Početna u Chimeri na iPadu",
        player: "Kanal uživo u Chimerinom playeru",
        music: "Upravo svira: Chopinov album",
        books: "Stranica knjige",
        photos: "Zbirka fotografija svemira",
        sources: "Dodavanje izvora u Chimeri: Xtream, M3U, Plex, Jellyfin i drugi",
        macBook: "Stranica knjige u Chimeri za Mac",
        tvPhoto: "Fotografija Jupitera na Apple TV-u",
        detailDark: "Stranica filma s medijskog poslužitelja, s Reproduciraj i Preuzmi",
        musicAlbum: "Chopinov album sa skladbama, Reproduciraj i Nasumično",
        photoViewer: "Fotografija Jupitera preko cijelog zaslona",
        reader: "Stranica iz Pustolovina Sherlocka Holmesa u čitaču",
    },
};

export default hr;
