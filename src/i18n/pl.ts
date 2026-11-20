import type { Strings } from "./en";

const pl: Strings = {
    meta: {
        title: "Chimera — odtwarzacz IPTV i multimediów na iPhone’a, iPada, Maca i Apple TV",
        description:
            "Telewizja na żywo, filmy, seriale i muzyka z Twoich playlist IPTV, Plex, Jellyfin i Emby — w jednym odtwarzaczu na iPhone’a, iPada, Maca i Apple TV.",
    },
    nav: {
        features: "Funkcje",
        selfhost: "Własny serwer",
        pro: "Pro",
        support: "Pomoc",
        download: "Pobierz",
        language: "Język",
        menu: "Menu",
    },
    badges: {
        ios: "Pobierz z App Store",
        mac: "Download on the Mac App Store",
    },
    hero: {
        eyebrow: "Na iPhone’a, iPada, Maca i Apple TV",
        title: "Wszystkie Twoje media.\nJeden piękny odtwarzacz.",
        subtitle:
            "Telewizja na żywo, filmy, seriale, muzyka, zdjęcia i książki z Twoich playlist IPTV i Twojego serwera Plex, Jellyfin, Emby, Navidrome lub Immich — razem w jednej aplikacji stworzonej dla urządzeń Apple.",
        note: "Bezpłatne pobieranie. Chimera nie zawiera treści — korzystasz z własnych źródeł.",
    },
    devices: {
        title: "Jedna aplikacja na każdym ekranie Apple.",
        body: "Ulubione, postęp oglądania i Twoje źródła synchronizują się przez iCloud, więc to, co zaczniesz na jednym urządzeniu, czeka na następnym.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "TV na żywo",
        title: "Skakanie po kanałach bez wysiłku.",
        body: "Przeglądaj kanały według kategorii, sprawdzaj, co leci teraz i później, i przełączaj kanał jednym stuknięciem.",
        points: [
            "Pełny przewodnik TV z tym, co leci teraz i później",
            "Kategorie, ulubione i szybkie przełączanie kanałów",
            "Catch-up na kanałach, które go obsługują",
            "Dzisiejsze mecze i kanały, które je pokazują",
        ],
    },
    library: {
        eyebrow: "Filmy i seriale",
        title: "Twoja biblioteka wreszcie u siebie.",
        body: "Szczegółowe strony, sezony i odcinki oraz Oglądaj dalej, które pamięta dokładnie, gdzie skończyłeś.",
        points: [
            "Okładki, obsada i szczegóły każdego tytułu",
            "Oglądaj dalej i historia",
            "Pobieranie do oglądania offline",
            "Wyszukiwanie w całej bibliotece",
        ],
    },
    player: {
        eyebrow: "Odtwarzacz",
        title: "Stworzony dla formatów, które naprawdę masz.",
        body: "Chimera zaczyna od natywnego odtwarzacza Apple i sama przełącza się na wbudowany silnik zapasowy dla formatów takich jak MKV, HEVC i AC-3.",
        points: [
            "Wiele ścieżek dźwiękowych i napisów",
            "Regulowany styl i synchronizacja napisów",
            "Obraz w obrazie",
            "Chromecast na iPhonie, iPadzie i Macu",
        ],
    },
    selfhost: {
        eyebrow: "Dla właścicieli własnych serwerów",
        title: "Twój serwer zasługuje na piękną aplikację.",
        body: "Połącz Chimerę z serwerami, które już masz. Łączy się z nimi bezpośrednio — bez konta, bez pośredników, bez chmury po drodze — i zamienia je w jedną natywną bibliotekę na każdym urządzeniu Apple.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Filmy i seriale",
            body: "Cała Twoja biblioteka z okładkami, sezonami i odcinkami oraz Oglądaj dalej, które towarzyszy Ci od iPhone’a po Apple TV.",
            points: ["MKV, HEVC i AC-3 odtwarza automatyczny silnik zapasowy", "Pobieranie do oglądania offline", "Napisy i ścieżki dźwiękowe w Twoim stylu"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Muzyka",
            body: "Aplikacja muzyczna godna Twojej kolekcji: albumy, wykonawcy, playlisty i teksty, z Teraz odtwarzane na ekranie blokady.",
            points: ["Pobieraj oryginalne pliki do słuchania offline", "Playlisty i ulubione", "Tekst odtwarzanego utworu"],
        },
        photos: {
            servers: "Immich",
            title: "Zdjęcia",
            body: "Twoja biblioteka Immich według roku, miesiąca lub albumu, w szybkiej pełnoekranowej galerii na iPhonie, iPadzie, Macu i Apple TV.",
            points: ["Lata, miesiące i albumy", "Widok pełnoekranowy", "Zapisuj zdjęcia na urządzeniu"],
        },
        books: {
            servers: "Komga · Katalogi OPDS · Project Gutenberg",
            title: "Książki",
            body: "Połącz katalog OPDS, np. Komga, i czytaj książki EPUB i PDF w czytniku stworzonym dla każdego urządzenia.",
            points: ["Zapamiętane miejsce lektury", "Pobieraj książki do czytania offline", "Darmowa klasyka z Project Gutenberg"],
        },
        direct: [
            { title: "Prosto do Twojego serwera", body: "Nic nie przechodzi przez serwer Chimery — takiego nie ma." },
            { title: "Wszystkie serwery, jedna aplikacja", body: "Dodaj kilka serwerów, nadaj każdemu nazwę i kolor i przełączaj jednym stuknięciem." },
            { title: "Jedna biblioteka", body: "Z Chimera Pro muzyka i zdjęcia ze wszystkich serwerów są w jednym miejscu." },
            { title: "Hasła zostają na miejscu", body: "Dane logowania do serwerów są w pęku kluczy urządzenia." },
        ],
    },
    sources: {
        eyebrow: "Twoje źródła",
        title: "Korzystaj z tego, co już masz.",
        body: "Chimera to tylko odtwarzacz — nie zawiera kanałów, filmów ani muzyki. Połącz usługi, z których korzystasz, i nadaj każdemu źródłu nazwę i kolor.",
        list: [
            "Xtream Codes",
            "Playlisty M3U",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome i Subsonic",
            "Immich",
            "Katalogi OPDS",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Korzystaj tylko ze źródeł, które należą do Ciebie lub do których masz uprawnienia.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Zacznij za darmo. Pro, gdy chcesz więcej.",
        body: "Chimera jest bezpłatna. Chimera Pro to subskrypcja miesięczna lub roczna albo jednorazowy zakup, udostępniany rodzinie przez Chmurę rodzinną.",
        features: [
            { title: "Bez limitu źródeł", body: "Wersja bezpłatna obejmuje dwa." },
            { title: "Multiview", body: "Oglądaj kilka kanałów naraz." },
            { title: "Jedna biblioteka", body: "Muzyka, zdjęcia i Główna ze wszystkich źródeł." },
            { title: "Twoja Główna", body: "Wybierz i uporządkuj widoczne sekcje." },
            { title: "Bez reklam", body: "Bezpłatna aplikacja na iPhone’a i iPada czasem pokazuje reklamę." },
        ],
    },
    privacy: {
        eyebrow: "Prywatność",
        title: "Prywatność od podstaw.",
        points: [
            { title: "Bez konta", body: "Otwórz aplikację i dodaj źródło. To wszystko." },
            { title: "Bez śledzenia", body: "Chimera Cię nie śledzi, a deweloper nigdy nie otrzymuje Twoich danych." },
            { title: "Pęk kluczy", body: "Hasła zostają w pęku kluczy urządzenia i nigdy nie są synchronizowane." },
        ],
        link: "Przeczytaj politykę prywatności (po angielsku)",
    },
    faq: {
        title: "Pytania",
        items: [
            {
                q: "Czy Chimera zawiera kanały lub filmy?",
                a: "Nie. Chimera to tylko odtwarzacz. Dodajesz własne źródła: subskrypcję IPTV, z której masz prawo korzystać, własny serwer Plex, Jellyfin lub Emby albo własną chmurę.",
            },
            {
                q: "Czy działa z moim serwerem Plex, Jellyfin lub Emby?",
                a: "Tak. Dodaj serwer jako źródło, a Chimera pokaże jego filmy, seriale i muzykę. Plex loguje się kontem Plex; Jellyfin i Emby używają adresu serwera, nazwy użytkownika i hasła.",
            },
            {
                q: "Jakie źródła mogę dodać?",
                a: "Playlisty Xtream Codes i M3U, serwery Plex, Jellyfin i Emby, Navidrome lub Subsonic dla muzyki, Immich dla zdjęć, katalogi książek OPDS oraz Dropbox lub MEGA.",
            },
            {
                q: "Czy Chimera jest bezpłatna?",
                a: "Tak. Chimera jest bezpłatna i obsługuje do dwóch źródeł. Chimera Pro dodaje nieograniczoną liczbę źródeł, Multiview, jedną bibliotekę ze wszystkich źródeł i więcej, a także usuwa reklamy.",
            },
            {
                q: "Czy moje wideo się odtworzy?",
                a: "Chimera używa natywnego odtwarzacza Apple i automatycznie przełącza się na wbudowany silnik zapasowy dla formatów, których ten odtwarzacz nie dekoduje, np. wielu plików MKV i dźwięku AC-3.",
            },
            {
                q: "Na jakich urządzeniach działa?",
                a: "iPhone, iPad, Mac i Apple TV. Ulubione, postęp oglądania i lista źródeł synchronizują się między nimi przez iCloud.",
            },
        ],
        more: "Więcej odpowiedzi na stronie pomocy (po angielsku)",
    },
    cta: {
        title: "Twoje media czekają.",
        body: "Pobierz Chimerę i dodaj pierwsze źródło.",
    },
    footer: {
        support: "Pomoc",
        privacy: "Polityka prywatności",
        terms: "Warunki korzystania",
        trademarks:
            "Apple, logo Apple, iPhone, iPad, Mac, Apple TV i AirPlay są znakami towarowymi Apple Inc., zastrzeżonymi w USA i innych krajach. App Store i Mac App Store są znakami usługowymi Apple Inc.",
    },
    alt: {
        homeIPhone: "Ekran główny Chimery na iPhonie z wyróżnionym serialem i rzędem nowych filmów",
        macGuide: "Pełny przewodnik TV w Chimerze na Maca",
        ipadPlayer: "Wideo odtwarzane w Chimerze na iPadzie",
        tvLive: "TV na żywo na Apple TV z listą kanałów i podglądem",
        liveIPhone: "Lista kanałów na żywo na iPhonie z bieżącym programem",
        liveIPad: "TV na żywo na iPadzie z Oglądaj dalej, przewodnikiem i wszystkimi kanałami",
        detail: "Strona filmu na iPhonie",
        ipadHome: "Ekran główny Chimery na iPadzie",
        player: "Kanał na żywo w odtwarzaczu Chimery",
        music: "Teraz odtwarzane: album Chopina",
        books: "Strona książki",
        photos: "Biblioteka zdjęć kosmosu",
        sources: "Dodawanie źródła w Chimerze: Xtream, M3U, Plex, Jellyfin i inne",
        macBook: "Strona książki w Chimerze na Maca",
        tvPhoto: "Zdjęcie Jowisza na Apple TV",
        detailDark: "Strona filmu z serwera multimediów z przyciskami Odtwórz i Pobierz",
        musicAlbum: "Album Chopina z utworami, Odtwórz i Losowo",
        photoViewer: "Zdjęcie Jowisza na pełnym ekranie",
        reader: "Strona „Przygód Sherlocka Holmesa” w czytniku",
    },
};

export default pl;
