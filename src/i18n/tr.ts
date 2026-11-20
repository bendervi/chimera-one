import type { Strings } from "./en";

const tr: Strings = {
    meta: {
        title: "Chimera — iPhone, iPad, Mac ve Apple TV için IPTV ve Medya Oynatıcı",
        description:
            "IPTV listelerinizden, Plex, Jellyfin ve Emby’den canlı TV, film, dizi ve müzik; iPhone, iPad, Mac ve Apple TV için tek bir oynatıcıda.",
    },
    nav: {
        features: "Özellikler",
        selfhost: "Kendi sunucunuz",
        pro: "Pro",
        support: "Destek",
        download: "İndir",
        language: "Dil",
        menu: "Menü",
    },
    badges: {
        ios: "App Store’dan indirin",
        mac: "Mac App Store’dan indirin",
    },
    hero: {
        eyebrow: "iPhone, iPad, Mac ve Apple TV için",
        title: "Tüm medyanız\ntek bir uygulamada.",
        subtitle:
            "IPTV listelerinizden ve kendi Plex, Jellyfin, Emby, Navidrome ya da Immich sunucunuzdan canlı TV, film, dizi, müzik, fotoğraf ve kitap. iPhone, iPad, Mac ve Apple TV için yapıldı.",
        note: "Ücretsiz indirin. Chimera içerik sunmaz; kendi kaynaklarınızı eklersiniz.",
    },
    devices: {
        title: "Bir ekranda başlayın. Diğerinde bitirin.",
        body: "Favoriler, izleme ilerlemesi ve kaynaklarınız iCloud ile eşzamanlanır.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "Canlı TV",
        title: "Gerçek bir rehberle canlı TV.",
        body: "Kanallara kategoriye göre göz atın, şimdi ve sonra ne olduğunu görün, tek dokunuşla kanal değiştirin.",
        points: [
            "Şimdi ve sonra yayınlananları gösteren tam bir TV rehberi",
            "Kategoriler, favoriler ve hızlı kanal geçişi",
            "Destekleyen kanallarda geri izleme",
            "Bugünkü maçlar ve onları yayınlayan kanallar",
        ],
    },
    library: {
        eyebrow: "Filmler ve Diziler",
        title: "Kaldığınız yerden devam eder.",
        body: "Kapak ve oyuncu bilgili ayrıntı sayfaları, tüm sezonlar ve bölümler, ve tüm aygıtlarınızda İzlemeye Devam Et.",
        points: [
            "Her içerik için kapak, oyuncular ve ayrıntılar",
            "İzlemeye Devam Et ve geçmiş",
            "Çevrimdışı izlemek için indirmeler",
            "Tüm arşivinizde arama",
        ],
    },
    player: {
        eyebrow: "Oynatıcı",
        title: "Gerçekten sahip olduğunuz formatlar için.",
        body: "Chimera, Apple’ın yerel oynatıcısıyla başlar ve MKV, HEVC ve AC-3 gibi formatlar için kendiliğinden yerleşik yedek motora geçer.",
        points: [
            "Birden çok ses parçası ve altyazı",
            "Ayarlanabilir altyazı stili ve zamanlaması",
            "Resim İçinde Resim",
            "iPhone, iPad ve Mac’te Chromecast",
        ],
    },
    selfhost: {
        eyebrow: "Kendi sunucunuz",
        title: "Kendi sunucunuz için yapıldı.",
        body: "Zaten çalıştırdığınız sunucuları ekleyin. Chimera onlara doğrudan bağlanır, hesap ve aracı olmadan, ve her şeyi her Apple aygıtınızda tek bir arşiv olarak gösterir.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Filmler ve diziler",
            body: "Kapaklar, sezonlar ve bölümlerle tüm arşiviniz; iPhone’dan Apple TV’ye sizi takip eden İzlemeye Devam Et.",
            points: ["MKV, HEVC ve AC-3 otomatik yedek motorla oynar", "Çevrimdışı izlemek için indirmeler", "Altyazılar ve ses parçaları, istediğiniz gibi"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Müzik",
            body: "Albümler, sanatçılar, çalma listeleri ve şarkı sözleri; kilitli ekranda Şimdi Çalıyor.",
            points: ["Çevrimdışı dinlemek için orijinal dosyalarınızı indirin", "Çalma listeleri ve favoriler", "Çalan şarkının sözleri"],
        },
        photos: {
            servers: "Immich",
            title: "Fotoğraflar",
            body: "Immich arşiviniz yıla, aya veya albüme göre; iPhone, iPad, Mac ve Apple TV’de tam ekran.",
            points: ["Yıllar, aylar ve albümler", "Tam ekran görüntüleme", "Fotoğrafları aygıtınıza kaydedin"],
        },
        books: {
            servers: "Komga · OPDS katalogları · Project Gutenberg",
            title: "Kitaplar",
            body: "Komga gibi bir OPDS kataloğu bağlayın ve EPUB ile PDF kitapları her aygıt için yapılmış bir okuyucuda okuyun.",
            points: ["Okuma konumunuz hatırlanır", "Çevrimdışı okumak için kitap indirin", "Project Gutenberg’den ücretsiz klasikler"],
        },
        direct: [
            { title: "Doğrudan sunucunuza", body: "Chimera’nın kendi sunucusu yok, dolayısıyla hiçbir şey bir sunucudan geçmez." },
            { title: "Tüm sunucular, tek uygulama", body: "Birden çok sunucu ekleyin, her birine ad ve renk verin, tek dokunuşla geçiş yapın." },
            { title: "Tek arşiv", body: "Chimera Pro ile tüm sunucularınızdaki müzik ve fotoğraflar bir araya gelir." },
            { title: "Parolalar yerinde kalır", body: "Sunucu bilgileri aygıtınızın Anahtar Zinciri’nde durur." },
        ],
    },
    sources: {
        eyebrow: "Kaynaklarınız",
        title: "Zaten sahip olduklarınızı getirin.",
        body: "Chimera bir oynatıcıdır. Kanal, film ya da müzik içermez. Kullandığınız servisleri bağlayın ve her kaynağa bir ad ve renk verin.",
        list: [
            "Xtream Codes",
            "M3U listeleri",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome ve Subsonic",
            "Immich",
            "OPDS katalogları",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Yalnızca size ait olan veya kullanma yetkiniz bulunan kaynakları kullanın.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Ücretsiz başlayın. Daha fazlası için Pro.",
        body: "Chimera ücretsizdir. Chimera Pro aylık ya da yıllık abonelik veya tek seferlik satın alma olarak sunulur ve Aile Paylaşımı ile ailenizle paylaşılır.",
        features: [
            { title: "Sınırsız kaynak", body: "Ücretsiz sürüm iki kaynak içerir." },
            { title: "Multiview", body: "Birden çok kanalı aynı anda izleyin." },
            { title: "Tek arşiv", body: "Tüm kaynaklarınızdan müzik, fotoğraflar ve Ana Sayfa." },
            { title: "Sizin Ana Sayfanız", body: "Gördüğünüz bölümleri seçin ve sıralayın." },
            { title: "Reklamsız", body: "Ücretsiz iPhone ve iPad uygulaması ara sıra reklam gösterir." },
        ],
    },
    privacy: {
        eyebrow: "Gizlilik",
        title: "Hesap yok. Takip yok.",
        points: [
            { title: "Kayıt gerekmez", body: "Uygulamayı açın ve bir kaynak ekleyin." },
            { title: "Hiçbir şey takip edilmez", body: "Chimera sizi takip etmez ve geliştirici verilerinizi asla almaz." },
            { title: "Parolalar aygıtta kalır", body: "Anahtar Zinciri’nde durur ve asla eşzamanlanmaz." },
        ],
        link: "Gizlilik Politikası’nı okuyun (İngilizce)",
    },
    faq: {
        title: "Sorular",
        items: [
            {
                q: "Chimera kanal ya da film içeriyor mu?",
                a: "Hayır. Chimera yalnızca bir oynatıcıdır. Kendi kaynaklarınızı eklersiniz: kullanma yetkiniz olan bir IPTV aboneliği, kendi Plex, Jellyfin veya Emby sunucunuz ya da kendi bulut depolamanız.",
            },
            {
                q: "Plex, Jellyfin veya Emby sunucumla çalışır mı?",
                a: "Evet. Sunucunuzu kaynak olarak ekleyin; Chimera filmlerini, dizilerini ve müziğini gösterir. Plex, Plex hesabınızla giriş yapar; Jellyfin ve Emby sunucu adresini, kullanıcı adınızı ve parolanızı kullanır.",
            },
            {
                q: "Hangi kaynakları ekleyebilirim?",
                a: "Xtream Codes ve M3U listeleri, Plex, Jellyfin ve Emby sunucuları, müzik için Navidrome veya Subsonic, fotoğraflar için Immich, OPDS kitap katalogları ve Dropbox ya da MEGA.",
            },
            {
                q: "Chimera ücretsiz mi?",
                a: "Evet. Chimera ücretsizdir ve en fazla iki kaynağı destekler. Chimera Pro sınırsız kaynak, Multiview, tüm kaynaklarınız için tek arşiv ve daha fazlasını ekler, reklamları kaldırır.",
            },
            {
                q: "Videom oynar mı?",
                a: "Chimera, Apple’ın yerel oynatıcısını kullanır ve bu oynatıcının çözemediği formatlarda (birçok MKV dosyası ve AC-3 ses gibi) otomatik olarak yerleşik yedek motora geçer.",
            },
            {
                q: "Hangi aygıtlarda çalışır?",
                a: "iPhone, iPad, Mac ve Apple TV. Favoriler, izleme ilerlemesi ve kaynak listeniz iCloud ile aralarında eşzamanlanır.",
            },
        ],
        more: "Destek sayfasında daha fazla yanıt (İngilizce)",
    },
    cta: {
        title: "Chimera’yı indirin.",
        body: "iPhone, iPad, Mac ve Apple TV’de ücretsiz.",
    },
    footer: {
        support: "Destek",
        privacy: "Gizlilik Politikası",
        terms: "Kullanım Koşulları",
        trademarks:
            "Apple, Apple logosu, iPhone, iPad, Mac, Apple TV ve AirPlay, Apple Inc.’in ABD’de ve diğer ülkelerde tescilli ticari markalarıdır. App Store ve Mac App Store, Apple Inc.’in hizmet markalarıdır.",
    },
    alt: {
        homeIPhone: "iPhone’da Chimera Ana Sayfası; öne çıkan bir dizi ve yeni filmler",
        macGuide: "Mac için Chimera’da tam TV rehberi",
        ipadPlayer: "iPad’de Chimera’da oynatılan bir video",
        tvLive: "Apple TV’de kanal listesi ve önizlemeyle Canlı TV",
        liveIPhone: "iPhone’da şu anki yayınlarla canlı kanal listesi",
        liveIPad: "iPad’de İzlemeye Devam Et, rehber ve tüm kanallarla Canlı TV",
        detail: "iPhone’da bir filmin ayrıntı sayfası",
        ipadHome: "iPad’de Chimera Ana Sayfası",
        player: "Chimera oynatıcısında canlı bir kanal",
        music: "Şimdi çalıyor: bir Chopin albümü",
        books: "Bir kitabın ayrıntı sayfası",
        photos: "Uzay görüntülerinden oluşan bir fotoğraf arşivi",
        sources: "Chimera’da kaynak ekleme: Xtream, M3U, Plex, Jellyfin ve daha fazlası",
        macBook: "Mac için Chimera’da bir kitabın ayrıntı sayfası",
        tvPhoto: "Apple TV’de Jüpiter’in bir fotoğrafı",
        detailDark: "Bir medya sunucusundaki filmin ayrıntı sayfası; Oynat ve İndir",
        musicAlbum: "Şarkılarıyla bir Chopin albümü; Oynat ve Karıştır",
        photoViewer: "Tam ekranda Jüpiter fotoğrafı",
        reader: "Okuyucuda Sherlock Holmes’un Maceraları’ndan bir sayfa",
    },
};

export default tr;
