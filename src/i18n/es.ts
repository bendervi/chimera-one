import type { Strings } from "./en";

const es: Strings = {
    meta: {
        title: "Chimera — Reproductor IPTV y multimedia para iPhone, iPad, Mac y Apple TV",
        description:
            "TV en vivo, películas, series y música de tus listas IPTV, Plex, Jellyfin y Emby, en un solo reproductor para iPhone, iPad, Mac y Apple TV.",
    },
    nav: {
        features: "Funciones",
        selfhost: "Autoalojamiento",
        pro: "Pro",
        support: "Soporte",
        download: "Descargar",
        language: "Idioma",
        menu: "Menú",
    },
    badges: {
        ios: "Descargar en el App Store",
        mac: "Descargar en el Mac App Store",
    },
    hero: {
        eyebrow: "Para iPhone, iPad, Mac y Apple TV",
        title: "Todo tu contenido.\nUn reproductor precioso.",
        subtitle:
            "TV en vivo, películas, series, música, fotos y libros de tus listas IPTV y de tu propio servidor Plex, Jellyfin, Emby, Navidrome o Immich, juntos en una app hecha para dispositivos Apple.",
        note: "Descarga gratuita. Chimera no incluye contenido: tú aportas tus propias fuentes.",
    },
    devices: {
        title: "Una app en cada pantalla Apple.",
        body: "Tus favoritos, tu progreso y tus fuentes se sincronizan con iCloud, así que lo que empiezas en un dispositivo te espera en el siguiente.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "TV en vivo",
        title: "Hacer zapping, sin esfuerzo.",
        body: "Explora los canales por categoría, mira qué dan ahora y después, y cambia de canal con un toque.",
        points: [
            "Una guía de TV completa con lo que dan ahora y después",
            "Categorías, favoritos y cambio rápido de canal",
            "Catch-up en los canales que lo admiten",
            "Los partidos de hoy y los canales que los emiten",
        ],
    },
    library: {
        eyebrow: "Películas y series",
        title: "Tu biblioteca, por fin en casa.",
        body: "Fichas detalladas, temporadas y episodios, y Seguir viendo, que recuerda exactamente dónde lo dejaste.",
        points: [
            "Carátulas, reparto y detalles de cada título",
            "Seguir viendo e historial",
            "Descargas para ver sin conexión",
            "Búsqueda en toda tu biblioteca",
        ],
    },
    player: {
        eyebrow: "El reproductor",
        title: "Hecho para los formatos que de verdad tienes.",
        body: "Chimera empieza con el reproductor nativo de Apple y cambia solo a un motor alternativo integrado para formatos como MKV, HEVC y AC-3.",
        points: [
            "Varias pistas de audio y subtítulos",
            "Estilo y sincronización de subtítulos ajustables",
            "Imagen dentro de imagen",
            "Chromecast en iPhone, iPad y Mac",
        ],
    },
    selfhost: {
        eyebrow: "Para quien tiene su propio servidor",
        title: "Tu servidor merece una app preciosa.",
        body: "Conecta Chimera a los servidores que ya tienes. Habla directamente con ellos —sin cuenta, sin intermediarios, sin nube de por medio— y los convierte en una sola biblioteca nativa en cada dispositivo Apple.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Películas y series",
            body: "Toda tu biblioteca con carátulas, temporadas y episodios, y Seguir viendo, que te acompaña del iPhone al Apple TV.",
            points: ["MKV, HEVC y AC-3 se reproducen con el motor alternativo automático", "Descargas para ver sin conexión", "Subtítulos y pistas de audio a tu gusto"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Música",
            body: "Una app de música a la altura de tu colección: álbumes, artistas, listas y letras, con Ahora suena en la pantalla bloqueada.",
            points: ["Descarga tus archivos originales para escuchar sin conexión", "Listas y favoritos", "La letra de la canción que suena"],
        },
        photos: {
            servers: "Immich",
            title: "Fotos",
            body: "Tu biblioteca de Immich por año, mes o álbum, en una galería rápida a pantalla completa en iPhone, iPad, Mac y Apple TV.",
            points: ["Años, meses y álbumes", "Vista a pantalla completa", "Guarda fotos en tu dispositivo"],
        },
        books: {
            servers: "Komga · Catálogos OPDS · Project Gutenberg",
            title: "Libros",
            body: "Conecta un catálogo OPDS como Komga y lee libros EPUB y PDF en un lector pensado para cada dispositivo.",
            points: ["Recuerda dónde te quedaste leyendo", "Descarga libros para leer sin conexión", "Clásicos gratuitos de Project Gutenberg"],
        },
        direct: [
            { title: "Directo a tu servidor", body: "Nada pasa por un servidor de Chimera: no existe ninguno." },
            { title: "Todos tus servidores, una app", body: "Añade varios servidores, dale a cada uno un nombre y un color, y cambia con un toque." },
            { title: "Una sola biblioteca", body: "Con Chimera Pro, la música y las fotos de todos tus servidores se unen." },
            { title: "Las contraseñas no se mueven", body: "Las credenciales de tus servidores viven en el llavero de tu dispositivo." },
        ],
    },
    sources: {
        eyebrow: "Tus fuentes",
        title: "Trae lo que ya tienes.",
        body: "Chimera es solo un reproductor: no incluye canales, películas ni música. Conecta los servicios que usas y dale a cada fuente un nombre y un color.",
        list: [
            "Xtream Codes",
            "Listas M3U",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome y Subsonic",
            "Immich",
            "Catálogos OPDS",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Usa solo fuentes que sean tuyas o que tengas autorización para usar.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Gratis para empezar. Pro cuando quieras más.",
        body: "Chimera se descarga gratis. Chimera Pro es una suscripción mensual o anual, o una compra única, que se comparte con tu familia mediante En familia.",
        features: [
            { title: "Fuentes ilimitadas", body: "La versión gratuita incluye dos." },
            { title: "Multiview", body: "Mira varios canales a la vez." },
            { title: "Una sola biblioteca", body: "Música, fotos e Inicio de todas tus fuentes." },
            { title: "Tu Inicio", body: "Elige y ordena las secciones que ves." },
            { title: "Sin anuncios", body: "La app gratuita para iPhone y iPad muestra algún anuncio ocasional." },
        ],
    },
    privacy: {
        eyebrow: "Privacidad",
        title: "Privado por diseño.",
        points: [
            { title: "Sin cuenta", body: "Abre la app y añade una fuente. Eso es todo." },
            { title: "Sin rastreo", body: "Chimera no te rastrea, y el desarrollador nunca recibe tus datos." },
            { title: "Llavero", body: "Las contraseñas se quedan en el llavero de tu dispositivo y nunca se sincronizan." },
        ],
        link: "Leer la política de privacidad (en inglés)",
    },
    faq: {
        title: "Preguntas",
        items: [
            {
                q: "¿Chimera incluye canales o películas?",
                a: "No. Chimera es solo un reproductor. Tú añades tus propias fuentes: una suscripción IPTV que tengas autorización para usar, tu propio servidor Plex, Jellyfin o Emby, o tu propio almacenamiento en la nube.",
            },
            {
                q: "¿Funciona con mi servidor Plex, Jellyfin o Emby?",
                a: "Sí. Añade tu servidor como fuente y Chimera muestra sus películas, series y música. Plex inicia sesión con tu cuenta de Plex; Jellyfin y Emby usan la dirección del servidor, tu usuario y tu contraseña.",
            },
            {
                q: "¿Qué fuentes puedo añadir?",
                a: "Listas Xtream Codes y M3U, servidores Plex, Jellyfin y Emby, Navidrome o Subsonic para música, Immich para fotos, catálogos de libros OPDS, y Dropbox o MEGA.",
            },
            {
                q: "¿Chimera es gratis?",
                a: "Sí. Chimera se descarga gratis y admite hasta dos fuentes. Chimera Pro añade fuentes ilimitadas, Multiview, una sola biblioteca con todas tus fuentes y más, y quita los anuncios.",
            },
            {
                q: "¿Se reproducirá mi vídeo?",
                a: "Chimera usa el reproductor nativo de Apple y cambia automáticamente a su motor alternativo integrado para los formatos que ese reproductor no puede decodificar, como muchos archivos MKV y el audio AC-3.",
            },
            {
                q: "¿En qué dispositivos funciona?",
                a: "iPhone, iPad, Mac y Apple TV. Tus favoritos, tu progreso y tu lista de fuentes se sincronizan entre ellos con iCloud.",
            },
        ],
        more: "Más respuestas en la página de soporte (en inglés)",
    },
    cta: {
        title: "Tu contenido te espera.",
        body: "Descarga Chimera y añade tu primera fuente.",
    },
    footer: {
        support: "Soporte",
        privacy: "Privacidad",
        terms: "Condiciones de uso",
        trademarks:
            "Apple, el logotipo de Apple, iPhone, iPad, Mac, Apple TV y AirPlay son marcas comerciales de Apple Inc., registradas en EE. UU. y en otros países. App Store y Mac App Store son marcas de servicio de Apple Inc.",
    },
    alt: {
        homeIPhone: "El Inicio de Chimera en el iPhone, con una serie destacada y una fila de películas nuevas",
        macGuide: "La guía de TV completa en Chimera para Mac",
        ipadPlayer: "Un vídeo reproduciéndose en Chimera en el iPad",
        tvLive: "TV en vivo en el Apple TV, con la lista de canales y una vista previa",
        liveIPhone: "La lista de canales en vivo en el iPhone, con lo que dan ahora",
        liveIPad: "TV en vivo en el iPad, con Seguir viendo, la guía y todos los canales",
        detail: "La ficha de una película en el iPhone",
        ipadHome: "El Inicio de Chimera en el iPad",
        player: "Un canal en vivo en el reproductor de Chimera",
        music: "Reproduciendo un álbum de Chopin",
        books: "La ficha de un libro",
        photos: "Una fototeca de imágenes del espacio",
        sources: "Añadir una fuente en Chimera: Xtream, M3U, Plex, Jellyfin y más",
        macBook: "La ficha de un libro en Chimera para Mac",
        tvPhoto: "Una foto de Júpiter en el Apple TV",
        detailDark: "La ficha de una película de un servidor multimedia, con Reproducir y Descargar",
        musicAlbum: "Un álbum de Chopin con sus canciones, Reproducir y Aleatorio",
        photoViewer: "Una foto de Júpiter a pantalla completa",
        reader: "Una página de Las aventuras de Sherlock Holmes en el lector",
    },
};

export default es;
