import type { Strings } from "./en";

const fr: Strings = {
    meta: {
        title: "Chimera — Lecteur IPTV et multimédia pour iPhone, iPad, Mac et Apple TV",
        description:
            "TV en direct, films, séries et musique depuis vos playlists IPTV, Plex, Jellyfin et Emby, dans un seul lecteur pour iPhone, iPad, Mac et Apple TV.",
    },
    nav: {
        features: "Fonctionnalités",
        selfhost: "Auto-hébergement",
        pro: "Pro",
        support: "Assistance",
        download: "Télécharger",
        language: "Langue",
        menu: "Menu",
    },
    badges: {
        ios: "Télécharger dans l’App Store",
        mac: "Télécharger dans le Mac App Store",
    },
    hero: {
        eyebrow: "Pour iPhone, iPad, Mac et Apple TV",
        title: "Tous vos médias,\ndans une seule app.",
        subtitle:
            "TV en direct, films, séries, musique, photos et livres depuis vos playlists IPTV et votre propre serveur Plex, Jellyfin, Emby, Navidrome ou Immich. Conçu pour iPhone, iPad, Mac et Apple TV.",
        note: "Téléchargement gratuit. Chimera n’inclut aucun contenu : vous ajoutez vos propres sources.",
    },
    devices: {
        title: "Commencez sur un écran. Terminez sur un autre.",
        body: "Vos favoris, votre progression et vos sources se synchronisent via iCloud.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "TV en direct",
        title: "La TV en direct, avec un vrai guide.",
        body: "Parcourez les chaînes par catégorie, voyez ce qui passe maintenant et ensuite, et changez de chaîne d’un toucher.",
        points: [
            "Un guide TV complet avec les programmes en cours et à suivre",
            "Catégories, favoris et zapping rapide",
            "Le replay sur les chaînes qui le proposent",
            "Les matchs du jour et les chaînes qui les diffusent",
        ],
    },
    library: {
        eyebrow: "Films et séries",
        title: "Reprend là où vous vous êtes arrêté.",
        body: "Des fiches avec illustrations et distribution, toutes les saisons et tous les épisodes, et Reprendre sur tous vos appareils.",
        points: [
            "Illustrations, distribution et détails pour chaque titre",
            "Reprendre et historique",
            "Téléchargements pour regarder hors ligne",
            "Recherche dans toute votre bibliothèque",
        ],
    },
    player: {
        eyebrow: "Le lecteur",
        title: "Conçu pour les formats que vous avez vraiment.",
        body: "Chimera démarre sur le lecteur natif d’Apple et bascule automatiquement vers un moteur de secours intégré pour des formats comme MKV, HEVC et AC-3.",
        points: [
            "Plusieurs pistes audio et sous-titres",
            "Style et synchronisation des sous-titres réglables",
            "Image dans l’image",
            "Chromecast sur iPhone, iPad et Mac",
        ],
    },
    selfhost: {
        eyebrow: "Auto-hébergement",
        title: "Conçu pour votre propre serveur.",
        body: "Ajoutez les serveurs que vous faites déjà tourner. Chimera s’y connecte directement, sans compte ni intermédiaire, et affiche tout comme une seule bibliothèque sur chacun de vos appareils Apple.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Films et séries",
            body: "Toute votre bibliothèque avec illustrations, saisons et épisodes, et Reprendre qui vous suit de l’iPhone à l’Apple TV.",
            points: ["MKV, HEVC et AC-3 passent par le moteur de secours automatique", "Téléchargements pour regarder hors ligne", "Sous-titres et pistes audio, à votre style"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Musique",
            body: "Albums, artistes, playlists et paroles, avec À l’écoute sur l’écran verrouillé.",
            points: ["Téléchargez vos fichiers originaux pour écouter hors ligne", "Playlists et favoris", "Les paroles du morceau en cours"],
        },
        photos: {
            servers: "Immich",
            title: "Photos",
            body: "Votre bibliothèque Immich par année, mois ou album, en plein écran sur iPhone, iPad, Mac et Apple TV.",
            points: ["Années, mois et albums", "Affichage plein écran", "Enregistrez des photos sur votre appareil"],
        },
        books: {
            servers: "Komga · Catalogues OPDS · Project Gutenberg",
            title: "Livres",
            body: "Connectez un catalogue OPDS comme Komga et lisez des livres EPUB et PDF dans un lecteur pensé pour chaque appareil.",
            points: ["Votre position de lecture, mémorisée", "Téléchargez des livres pour lire hors ligne", "Des classiques gratuits du Project Gutenberg"],
        },
        direct: [
            { title: "Direct vers votre serveur", body: "Chimera n’a pas de serveur, donc rien ne passe par un serveur à nous." },
            { title: "Tous vos serveurs, une app", body: "Ajoutez plusieurs serveurs, donnez à chacun un nom et une couleur, et passez de l’un à l’autre d’un toucher." },
            { title: "Une seule bibliothèque", body: "Avec Chimera Pro, la musique et les photos de tous vos serveurs sont réunies." },
            { title: "Les mots de passe restent chez vous", body: "Les identifiants des serveurs sont dans le trousseau de votre appareil." },
        ],
    },
    sources: {
        eyebrow: "Vos sources",
        title: "Apportez ce que vous avez déjà.",
        body: "Chimera est un lecteur. Il n’inclut ni chaînes, ni films, ni musique. Connectez les services que vous utilisez et donnez à chaque source un nom et une couleur.",
        list: [
            "Xtream Codes",
            "Playlists M3U",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome et Subsonic",
            "Immich",
            "Catalogues OPDS",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Utilisez uniquement des sources qui vous appartiennent ou que vous êtes autorisé à utiliser.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Gratuit pour commencer. Pro quand vous voulez plus.",
        body: "Chimera se télécharge gratuitement. Chimera Pro est un abonnement mensuel ou annuel, ou un achat unique, partagé avec votre famille grâce au Partage familial.",
        features: [
            { title: "Sources illimitées", body: "La version gratuite en inclut deux." },
            { title: "Multiview", body: "Regardez plusieurs chaînes à la fois." },
            { title: "Une seule bibliothèque", body: "Musique, photos et Accueil pour toutes vos sources." },
            { title: "Votre Accueil", body: "Choisissez et ordonnez les sections affichées." },
            { title: "Sans publicité", body: "L’app gratuite pour iPhone et iPad affiche parfois une publicité." },
        ],
    },
    privacy: {
        eyebrow: "Confidentialité",
        title: "Pas de compte. Pas de suivi.",
        points: [
            { title: "Aucune inscription", body: "Ouvrez l’app et ajoutez une source." },
            { title: "Rien n’est suivi", body: "Chimera ne vous suit pas, et le développeur ne reçoit jamais vos données." },
            { title: "Les mots de passe restent sur l’appareil", body: "Ils sont dans le trousseau et ne sont jamais synchronisés." },
        ],
        link: "Lire la politique de confidentialité (en anglais)",
    },
    faq: {
        title: "Questions",
        items: [
            {
                q: "Chimera inclut-il des chaînes ou des films ?",
                a: "Non. Chimera est uniquement un lecteur. Vous ajoutez vos propres sources : un abonnement IPTV que vous êtes autorisé à utiliser, votre propre serveur Plex, Jellyfin ou Emby, ou votre propre stockage en ligne.",
            },
            {
                q: "Fonctionne-t-il avec mon serveur Plex, Jellyfin ou Emby ?",
                a: "Oui. Ajoutez votre serveur comme source et Chimera affiche ses films, séries et musique. Plex se connecte avec votre compte Plex ; Jellyfin et Emby utilisent l’adresse du serveur, votre nom d’utilisateur et votre mot de passe.",
            },
            {
                q: "Quelles sources puis-je ajouter ?",
                a: "Les playlists Xtream Codes et M3U, les serveurs Plex, Jellyfin et Emby, Navidrome ou Subsonic pour la musique, Immich pour les photos, les catalogues de livres OPDS, ainsi que Dropbox ou MEGA.",
            },
            {
                q: "Chimera est-il gratuit ?",
                a: "Oui. Chimera se télécharge gratuitement, avec jusqu’à deux sources. Chimera Pro ajoute les sources illimitées, Multiview, une bibliothèque unique pour toutes vos sources et plus encore, et supprime la publicité.",
            },
            {
                q: "Ma vidéo sera-t-elle lue ?",
                a: "Chimera utilise le lecteur natif d’Apple et bascule automatiquement vers son moteur de secours intégré pour les formats que ce lecteur ne sait pas décoder, comme de nombreux fichiers MKV et l’audio AC-3.",
            },
            {
                q: "Sur quels appareils fonctionne-t-il ?",
                a: "iPhone, iPad, Mac et Apple TV. Vos favoris, votre progression et votre liste de sources se synchronisent entre eux via iCloud.",
            },
        ],
        more: "Plus de réponses sur la page d’assistance (en anglais)",
    },
    cta: {
        title: "Téléchargez Chimera.",
        body: "Gratuit sur iPhone, iPad, Mac et Apple TV.",
    },
    footer: {
        support: "Assistance",
        privacy: "Confidentialité",
        terms: "Conditions d’utilisation",
        trademarks:
            "Apple, le logo Apple, iPhone, iPad, Mac, Apple TV et AirPlay sont des marques d’Apple Inc., déposées aux États-Unis et dans d’autres pays. App Store et Mac App Store sont des marques de service d’Apple Inc.",
    },
    alt: {
        homeIPhone: "L’Accueil de Chimera sur iPhone, avec une série en vedette et une rangée de nouveaux films",
        macGuide: "Le guide TV complet dans Chimera pour Mac",
        ipadPlayer: "Une vidéo en lecture dans Chimera sur iPad",
        tvLive: "La TV en direct sur Apple TV, avec une liste de chaînes et un aperçu",
        liveIPhone: "La liste des chaînes en direct sur iPhone, avec les programmes en cours",
        liveIPad: "La TV en direct sur iPad, avec Reprendre, le guide et toutes les chaînes",
        detail: "La fiche d’un film sur iPhone",
        ipadHome: "L’Accueil de Chimera sur iPad",
        player: "Une chaîne en direct dans le lecteur de Chimera",
        music: "À l’écoute, avec un album de Chopin",
        books: "La fiche d’un livre",
        photos: "Une photothèque d’images de l’espace",
        sources: "Ajouter une source dans Chimera : Xtream, M3U, Plex, Jellyfin et plus",
        macBook: "La fiche d’un livre dans Chimera pour Mac",
        tvPhoto: "Une photo de Jupiter sur Apple TV",
        detailDark: "La fiche d’un film provenant d’un serveur multimédia, avec Lire et Télécharger",
        musicAlbum: "Un album de Chopin avec ses morceaux, Lire et Aléatoire",
        photoViewer: "Une photo de Jupiter en plein écran",
        reader: "Une page des Aventures de Sherlock Holmes dans le lecteur",
    },
};

export default fr;
