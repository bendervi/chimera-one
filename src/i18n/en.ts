// English strings — the source every other locale mirrors key for key.
// Truth rules (Chimera/docs/plans/app-store-assets.md): claim only what ships
// and has been verified; no "best", no "plays everything"; say that Chimera
// includes no content.

const en = {
    meta: {
        title: "Chimera — IPTV & Media Player for iPhone, iPad, Mac and Apple TV",
        description:
            "Live TV, movies, series and music from your IPTV playlists, Plex, Jellyfin and Emby — in one player made for iPhone, iPad, Mac and Apple TV.",
    },
    nav: {
        features: "Features",
        selfhost: "Self-hosting",
        pro: "Pro",
        support: "Support",
        download: "Download",
        language: "Language",
        menu: "Menu",
    },
    badges: {
        ios: "Download on the App Store",
        mac: "Download on the Mac App Store",
    },
    hero: {
        eyebrow: "For iPhone, iPad, Mac and Apple TV",
        title: "All your media.\nOne beautiful player.",
        subtitle:
            "Live TV, movies, series, music, photos and books from your IPTV playlists and your own Plex, Jellyfin, Emby, Navidrome or Immich server — together in one app made for Apple devices.",
        note: "Free download. Chimera includes no content — bring your own sources.",
    },
    devices: {
        title: "One app on every Apple screen.",
        body: "Favorites, watch progress and your sources sync through iCloud, so what you start on one device is waiting on the next.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "Live TV",
        title: "Channel surfing that feels effortless.",
        body: "Browse channels by category, see what's on now and next, and switch channels in a tap.",
        points: [
            "A full TV guide with what's on now and next",
            "Categories, favorites and quick channel zapping",
            "Catch-up on channels that support it",
            "Today's matches, and the channels showing them",
        ],
    },
    library: {
        eyebrow: "Movies & Series",
        title: "Your library, finally at home.",
        body: "Rich detail pages, seasons and episodes, and Continue Watching that remembers exactly where you stopped.",
        points: [
            "Artwork, cast and details for every title",
            "Continue Watching and history",
            "Downloads for watching offline",
            "Search across your whole library",
        ],
    },
    player: {
        eyebrow: "The player",
        title: "Made for the formats you actually have.",
        body: "Chimera starts on Apple's native player and switches on its own to a built-in fallback engine for formats like MKV, HEVC and AC-3.",
        points: [
            "Multiple audio tracks and subtitles",
            "Subtitle style and timing you can adjust",
            "Picture in Picture",
            "Chromecast on iPhone, iPad and Mac",
        ],
    },
    selfhost: {
        eyebrow: "For self-hosters",
        title: "Your server deserves a beautiful app.",
        body: "Point Chimera at the servers you already run. It connects straight to them — no account, no relay, no cloud in between — and turns them into one native library on every Apple device.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Movies and shows",
            body: "Your whole library with artwork, seasons and episodes, and Continue Watching that follows you from iPhone to Apple TV.",
            points: [
                "MKV, HEVC and AC-3 play through the automatic fallback engine",
                "Downloads for watching offline",
                "Subtitles and audio tracks, styled your way",
            ],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Music",
            body: "A music app worthy of your collection: albums, artists, playlists and lyrics, with Now Playing on the Lock Screen.",
            points: [
                "Download your original files for offline listening",
                "Playlists and favorites",
                "Lyrics for the song that's playing",
            ],
        },
        photos: {
            servers: "Immich",
            title: "Photos",
            body: "Your Immich library by year, month or album, in a fast, full-screen gallery on iPhone, iPad, Mac and Apple TV.",
            points: ["Years, months and albums", "Full-screen viewing", "Save photos to your device"],
        },
        books: {
            servers: "Komga · OPDS catalogs · Project Gutenberg",
            title: "Books",
            body: "Connect an OPDS catalog such as Komga and read EPUB and PDF books in a reader made for each device.",
            points: ["Your reading position, remembered", "Download books to read offline", "Free classics from Project Gutenberg"],
        },
        direct: [
            { title: "Straight to your server", body: "Nothing passes through a Chimera server — there isn't one." },
            { title: "Every server, one app", body: "Add several servers, give each a name and a color, and switch in a tap." },
            { title: "One library", body: "With Chimera Pro, music and photos from all your servers come together." },
            { title: "Passwords stay put", body: "Server credentials live in your device's Keychain." },
        ],
    },
    sources: {
        eyebrow: "Your sources",
        title: "Bring what you already have.",
        body: "Chimera is a player only — it doesn't include channels, movies or music. Connect the services you use and give each source a name and a color.",
        list: [
            "Xtream Codes",
            "M3U playlists",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome & Subsonic",
            "Immich",
            "OPDS catalogs",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Use only sources you own or are authorized to use.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Free to start. Pro when you want more.",
        body: "Chimera is free to download. Chimera Pro is a monthly or yearly subscription or a one-time purchase, shared with your family through Family Sharing.",
        features: [
            { title: "Unlimited sources", body: "The free version includes two." },
            { title: "Multiview", body: "Watch several channels at once." },
            { title: "One library", body: "Music, photos and Home across all your sources." },
            { title: "Your Home", body: "Choose and order the sections you see." },
            { title: "No ads", body: "The free iPhone and iPad app shows an occasional ad." },
        ],
    },
    privacy: {
        eyebrow: "Privacy",
        title: "Private by design.",
        points: [
            { title: "No account", body: "Open the app and add a source. That's it." },
            { title: "No tracking", body: "Chimera doesn't track you, and the developer never receives your data." },
            { title: "Keychain", body: "Passwords stay in your device's Keychain and are never synced." },
        ],
        link: "Read the Privacy Policy",
    },
    faq: {
        title: "Questions",
        items: [
            {
                q: "Does Chimera come with channels or movies?",
                a: "No. Chimera is a player only. You add your own sources: an IPTV subscription you are authorized to use, your own Plex, Jellyfin or Emby server, or your own cloud storage.",
            },
            {
                q: "Does it work with my Plex, Jellyfin or Emby server?",
                a: "Yes. Add your server as a source and Chimera shows its movies, series and music. Plex signs in with your Plex account; Jellyfin and Emby use your server's address, user name and password.",
            },
            {
                q: "Which sources can I add?",
                a: "Xtream Codes and M3U playlists, Plex, Jellyfin and Emby servers, Navidrome or Subsonic for music, Immich for photos, OPDS book catalogs, and Dropbox or MEGA.",
            },
            {
                q: "Is Chimera free?",
                a: "Yes. Chimera is free to download with up to two sources. Chimera Pro adds unlimited sources, Multiview, one library across all your sources and more, and removes ads.",
            },
            {
                q: "Will my video play?",
                a: "Chimera uses Apple's native player and switches automatically to its built-in fallback engine for formats that player can't decode, such as many MKV files and AC-3 audio.",
            },
            {
                q: "Which devices does it run on?",
                a: "iPhone, iPad, Mac and Apple TV. Favorites, watch progress and your list of sources sync between them through iCloud.",
            },
        ],
        more: "More answers on the Support page",
    },
    cta: {
        title: "Your media is waiting.",
        body: "Download Chimera and add your first source.",
    },
    footer: {
        support: "Support",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        trademarks:
            "Apple, the Apple logo, iPhone, iPad, Mac, Apple TV and AirPlay are trademarks of Apple Inc., registered in the U.S. and other countries. App Store and Mac App Store are service marks of Apple Inc.",
    },
    alt: {
        homeIPhone: "Chimera's Home on iPhone, with a featured series and a row of new movies",
        macGuide: "The full TV guide in Chimera for Mac",
        ipadPlayer: "A video playing in Chimera on iPad",
        tvLive: "Live TV on Apple TV, with a channel list and a preview",
        liveIPhone: "The Live TV channel list on iPhone, with what's on now",
        liveIPad: "Live TV on iPad, with Continue Watching, the guide and all channels",
        detail: "A movie's detail page on iPhone",
        ipadHome: "Chimera's Home on iPad",
        player: "A live channel playing in Chimera's player",
        music: "Now Playing with a Chopin album",
        books: "The detail page of a book",
        photos: "A photo library of space images",
        sources: "Adding a source in Chimera: Xtream, M3U, Plex, Jellyfin and more",
        macBook: "A book's detail page in Chimera for Mac",
        tvPhoto: "A photo of Jupiter on Apple TV",
        detailDark: "A movie's detail page from a media server, with Play and Download",
        musicAlbum: "A Chopin album with its tracks, Play and Shuffle",
        photoViewer: "A photo of Jupiter in the full-screen viewer",
        reader: "A page of The Adventures of Sherlock Holmes in the reader",
    },
} as const;

/** Every locale has exactly this shape. */
export type Strings = {
    [K in keyof typeof en]: Widen<(typeof en)[K]>;
};
type Widen<T> = T extends string
    ? string
    : T extends readonly (infer U)[]
      ? readonly Widen<U>[]
      : { [K in keyof T]: Widen<T[K]> };

export default en as Strings;
