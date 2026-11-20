import type { Strings } from "./en";

const it: Strings = {
    meta: {
        title: "Chimera — Player IPTV e multimediale per iPhone, iPad, Mac e Apple TV",
        description:
            "TV in diretta, film, serie e musica dalle tue playlist IPTV, Plex, Jellyfin ed Emby, in un unico player per iPhone, iPad, Mac e Apple TV.",
    },
    nav: {
        features: "Funzioni",
        selfhost: "Self-hosting",
        pro: "Pro",
        support: "Supporto",
        download: "Scarica",
        language: "Lingua",
        menu: "Menu",
    },
    badges: {
        ios: "Scarica su App Store",
        mac: "Scarica su Mac App Store",
    },
    hero: {
        eyebrow: "Per iPhone, iPad, Mac e Apple TV",
        title: "Tutti i tuoi contenuti.\nUn unico, splendido player.",
        subtitle:
            "TV in diretta, film, serie, musica, foto e libri dalle tue playlist IPTV e dal tuo server Plex, Jellyfin, Emby, Navidrome o Immich, riuniti in un’app pensata per i dispositivi Apple.",
        note: "Download gratuito. Chimera non include contenuti: porti tu le tue sorgenti.",
    },
    devices: {
        title: "Un’app su ogni schermo Apple.",
        body: "Preferiti, avanzamento e sorgenti si sincronizzano con iCloud: quello che inizi su un dispositivo ti aspetta sul successivo.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "TV in diretta",
        title: "Fare zapping, senza fatica.",
        body: "Sfoglia i canali per categoria, guarda cosa va in onda ora e dopo, e cambia canale con un tocco.",
        points: [
            "Una guida TV completa con i programmi in onda ora e dopo",
            "Categorie, preferiti e cambio canale rapido",
            "Catch-up sui canali che lo supportano",
            "Le partite di oggi e i canali che le trasmettono",
        ],
    },
    library: {
        eyebrow: "Film e serie",
        title: "La tua libreria, finalmente a casa.",
        body: "Schede dettagliate, stagioni ed episodi, e Continua a guardare, che ricorda esattamente dove ti eri fermato.",
        points: [
            "Copertine, cast e dettagli per ogni titolo",
            "Continua a guardare e cronologia",
            "Download per guardare offline",
            "Ricerca in tutta la libreria",
        ],
    },
    player: {
        eyebrow: "Il player",
        title: "Pensato per i formati che hai davvero.",
        body: "Chimera parte con il player nativo di Apple e passa da solo a un motore alternativo integrato per formati come MKV, HEVC e AC-3.",
        points: [
            "Più tracce audio e sottotitoli",
            "Stile e sincronizzazione dei sottotitoli regolabili",
            "Picture in Picture",
            "Chromecast su iPhone, iPad e Mac",
        ],
    },
    selfhost: {
        eyebrow: "Per chi ha il proprio server",
        title: "Il tuo server merita un’app splendida.",
        body: "Collega Chimera ai server che già usi. Parla direttamente con loro — senza account, senza relay, senza cloud in mezzo — e li trasforma in un’unica libreria nativa su ogni dispositivo Apple.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Film e serie",
            body: "Tutta la tua libreria con copertine, stagioni ed episodi, e Continua a guardare che ti segue dall’iPhone ad Apple TV.",
            points: ["MKV, HEVC e AC-3 passano dal motore alternativo automatico", "Download per guardare offline", "Sottotitoli e tracce audio, nel tuo stile"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Musica",
            body: "Un’app musicale all’altezza della tua collezione: album, artisti, playlist e testi, con In riproduzione sulla schermata di blocco.",
            points: ["Scarica i file originali per ascoltare offline", "Playlist e preferiti", "Il testo del brano in riproduzione"],
        },
        photos: {
            servers: "Immich",
            title: "Foto",
            body: "La tua libreria Immich per anno, mese o album, in una galleria rapida a schermo intero su iPhone, iPad, Mac e Apple TV.",
            points: ["Anni, mesi e album", "Visualizzazione a schermo intero", "Salva le foto sul dispositivo"],
        },
        books: {
            servers: "Komga · Cataloghi OPDS · Project Gutenberg",
            title: "Libri",
            body: "Collega un catalogo OPDS come Komga e leggi libri EPUB e PDF in un lettore pensato per ogni dispositivo.",
            points: ["Ricorda dove eri arrivato", "Scarica i libri per leggerli offline", "Classici gratuiti da Project Gutenberg"],
        },
        direct: [
            { title: "Dritto al tuo server", body: "Niente passa da un server di Chimera: non ne esiste uno." },
            { title: "Tutti i server, un’app", body: "Aggiungi più server, dai a ciascuno un nome e un colore e passa dall’uno all’altro con un tocco." },
            { title: "Un’unica libreria", body: "Con Chimera Pro, musica e foto di tutti i tuoi server si riuniscono." },
            { title: "Le password restano lì", body: "Le credenziali dei server restano nel portachiavi del dispositivo." },
        ],
    },
    sources: {
        eyebrow: "Le tue sorgenti",
        title: "Porta quello che hai già.",
        body: "Chimera è solo un player: non include canali, film né musica. Collega i servizi che usi e assegna a ogni sorgente un nome e un colore.",
        list: [
            "Xtream Codes",
            "Playlist M3U",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome e Subsonic",
            "Immich",
            "Cataloghi OPDS",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Usa solo sorgenti di tua proprietà o che sei autorizzato a usare.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Gratis per iniziare. Pro quando vuoi di più.",
        body: "Chimera si scarica gratis. Chimera Pro è un abbonamento mensile o annuale, oppure un acquisto una tantum, condiviso con la tua famiglia tramite In famiglia.",
        features: [
            { title: "Sorgenti illimitate", body: "La versione gratuita ne include due." },
            { title: "Multiview", body: "Guarda più canali contemporaneamente." },
            { title: "Un’unica libreria", body: "Musica, foto e Home da tutte le tue sorgenti." },
            { title: "La tua Home", body: "Scegli e ordina le sezioni che vedi." },
            { title: "Niente pubblicità", body: "L’app gratuita per iPhone e iPad mostra di tanto in tanto un annuncio." },
        ],
    },
    privacy: {
        eyebrow: "Privacy",
        title: "Privato per natura.",
        points: [
            { title: "Nessun account", body: "Apri l’app e aggiungi una sorgente. Tutto qui." },
            { title: "Nessun tracciamento", body: "Chimera non ti traccia e lo sviluppatore non riceve mai i tuoi dati." },
            { title: "Portachiavi", body: "Le password restano nel portachiavi del dispositivo e non vengono mai sincronizzate." },
        ],
        link: "Leggi l’informativa sulla privacy (in inglese)",
    },
    faq: {
        title: "Domande",
        items: [
            {
                q: "Chimera include canali o film?",
                a: "No. Chimera è solo un player. Aggiungi le tue sorgenti: un abbonamento IPTV che sei autorizzato a usare, il tuo server Plex, Jellyfin o Emby, oppure il tuo spazio di archiviazione cloud.",
            },
            {
                q: "Funziona con il mio server Plex, Jellyfin o Emby?",
                a: "Sì. Aggiungi il tuo server come sorgente e Chimera mostra i suoi film, serie e musica. Plex accede con il tuo account Plex; Jellyfin ed Emby usano indirizzo del server, nome utente e password.",
            },
            {
                q: "Quali sorgenti posso aggiungere?",
                a: "Playlist Xtream Codes e M3U, server Plex, Jellyfin ed Emby, Navidrome o Subsonic per la musica, Immich per le foto, cataloghi di libri OPDS, e Dropbox o MEGA.",
            },
            {
                q: "Chimera è gratis?",
                a: "Sì. Chimera si scarica gratis e supporta fino a due sorgenti. Chimera Pro aggiunge sorgenti illimitate, Multiview, un’unica libreria per tutte le tue sorgenti e altro ancora, e rimuove la pubblicità.",
            },
            {
                q: "Il mio video verrà riprodotto?",
                a: "Chimera usa il player nativo di Apple e passa automaticamente al suo motore alternativo integrato per i formati che quel player non sa decodificare, come molti file MKV e l’audio AC-3.",
            },
            {
                q: "Su quali dispositivi funziona?",
                a: "iPhone, iPad, Mac e Apple TV. Preferiti, avanzamento e l’elenco delle sorgenti si sincronizzano tra loro con iCloud.",
            },
        ],
        more: "Altre risposte nella pagina di supporto (in inglese)",
    },
    cta: {
        title: "I tuoi contenuti ti aspettano.",
        body: "Scarica Chimera e aggiungi la tua prima sorgente.",
    },
    footer: {
        support: "Supporto",
        privacy: "Privacy",
        terms: "Condizioni d’uso",
        trademarks:
            "Apple, il logo Apple, iPhone, iPad, Mac, Apple TV e AirPlay sono marchi di Apple Inc., registrati negli Stati Uniti e in altri Paesi. App Store e Mac App Store sono marchi di servizio di Apple Inc.",
    },
    alt: {
        homeIPhone: "La Home di Chimera su iPhone, con una serie in evidenza e una fila di nuovi film",
        macGuide: "La guida TV completa in Chimera per Mac",
        ipadPlayer: "Un video in riproduzione in Chimera su iPad",
        tvLive: "TV in diretta su Apple TV, con l’elenco dei canali e un’anteprima",
        liveIPhone: "L’elenco dei canali in diretta su iPhone, con i programmi in onda",
        liveIPad: "TV in diretta su iPad, con Continua a guardare, la guida e tutti i canali",
        detail: "La scheda di un film su iPhone",
        ipadHome: "La Home di Chimera su iPad",
        player: "Un canale in diretta nel player di Chimera",
        music: "In riproduzione un album di Chopin",
        books: "La scheda di un libro",
        photos: "Una libreria di foto dello spazio",
        sources: "Aggiungere una sorgente in Chimera: Xtream, M3U, Plex, Jellyfin e altro",
        macBook: "La scheda di un libro in Chimera per Mac",
        tvPhoto: "Una foto di Giove su Apple TV",
        detailDark: "La scheda di un film da un server multimediale, con Riproduci e Scarica",
        musicAlbum: "Un album di Chopin con i brani, Riproduci e Casuale",
        photoViewer: "Una foto di Giove a schermo intero",
        reader: "Una pagina de Le avventure di Sherlock Holmes nel lettore",
    },
};

export default it;
