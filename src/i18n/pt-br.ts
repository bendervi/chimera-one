import type { Strings } from "./en";

const ptBR: Strings = {
    meta: {
        title: "Chimera — Player de IPTV e mídia para iPhone, iPad, Mac e Apple TV",
        description:
            "TV ao vivo, filmes, séries e música das suas listas IPTV, Plex, Jellyfin e Emby — em um só player para iPhone, iPad, Mac e Apple TV.",
    },
    nav: {
        features: "Recursos",
        selfhost: "Self-hosting",
        pro: "Pro",
        support: "Suporte",
        download: "Baixar",
        language: "Idioma",
        menu: "Menu",
    },
    badges: {
        ios: "Baixar na App Store",
        mac: "Baixar na Mac App Store",
    },
    hero: {
        eyebrow: "Para iPhone, iPad, Mac e Apple TV",
        title: "Toda a sua mídia.\nUm player lindo.",
        subtitle:
            "TV ao vivo, filmes, séries, música, fotos e livros das suas listas IPTV e do seu próprio servidor Plex, Jellyfin, Emby, Navidrome ou Immich — juntos em um app feito para dispositivos Apple.",
        note: "Download gratuito. O Chimera não inclui conteúdo — você usa suas próprias fontes.",
    },
    devices: {
        title: "Um app em cada tela Apple.",
        body: "Favoritos, progresso e suas fontes são sincronizados pelo iCloud, então o que você começa em um dispositivo está esperando no próximo.",
        iphone: "iPhone",
        ipad: "iPad",
        mac: "Mac",
        tv: "Apple TV",
    },
    live: {
        eyebrow: "TV ao Vivo",
        title: "Zapear sem esforço.",
        body: "Navegue pelos canais por categoria, veja o que passa agora e a seguir, e troque de canal com um toque.",
        points: [
            "Um guia de TV completo com o que passa agora e a seguir",
            "Categorias, favoritos e troca rápida de canal",
            "Catch-up nos canais que oferecem",
            "Os jogos de hoje e os canais que os transmitem",
        ],
    },
    library: {
        eyebrow: "Filmes e séries",
        title: "Sua biblioteca, finalmente em casa.",
        body: "Páginas de detalhes completas, temporadas e episódios, e Continuar Assistindo, que lembra exatamente onde você parou.",
        points: [
            "Capas, elenco e detalhes de cada título",
            "Continuar Assistindo e histórico",
            "Downloads para assistir offline",
            "Busca em toda a sua biblioteca",
        ],
    },
    player: {
        eyebrow: "O player",
        title: "Feito para os formatos que você realmente tem.",
        body: "O Chimera começa no player nativo da Apple e muda sozinho para um mecanismo alternativo integrado em formatos como MKV, HEVC e AC-3.",
        points: [
            "Várias faixas de áudio e legendas",
            "Estilo e sincronia das legendas ajustáveis",
            "Picture in Picture",
            "Chromecast no iPhone, iPad e Mac",
        ],
    },
    selfhost: {
        eyebrow: "Para quem tem servidor próprio",
        title: "Seu servidor merece um app lindo.",
        body: "Conecte o Chimera aos servidores que você já mantém. Ele fala direto com eles — sem conta, sem intermediário, sem nuvem no meio — e os transforma em uma só biblioteca nativa em cada dispositivo Apple.",
        servers: ["Plex", "Jellyfin", "Emby", "Navidrome", "Subsonic", "Immich", "Komga", "OPDS"],
        video: {
            servers: "Plex · Jellyfin · Emby",
            title: "Filmes e séries",
            body: "Sua biblioteca inteira com capas, temporadas e episódios, e Continuar Assistindo que acompanha você do iPhone à Apple TV.",
            points: ["MKV, HEVC e AC-3 tocam pelo mecanismo alternativo automático", "Downloads para assistir offline", "Legendas e faixas de áudio do seu jeito"],
        },
        music: {
            servers: "Navidrome · Subsonic · Plex · Jellyfin · Emby",
            title: "Música",
            body: "Um app de música à altura da sua coleção: álbuns, artistas, playlists e letras, com Tocando Agora na Tela Bloqueada.",
            points: ["Baixe seus arquivos originais para ouvir offline", "Playlists e favoritos", "A letra da música que está tocando"],
        },
        photos: {
            servers: "Immich",
            title: "Fotos",
            body: "Sua biblioteca do Immich por ano, mês ou álbum, numa galeria rápida em tela cheia no iPhone, iPad, Mac e Apple TV.",
            points: ["Anos, meses e álbuns", "Visualização em tela cheia", "Salve fotos no dispositivo"],
        },
        books: {
            servers: "Komga · Catálogos OPDS · Project Gutenberg",
            title: "Livros",
            body: "Conecte um catálogo OPDS como o Komga e leia livros EPUB e PDF num leitor feito para cada dispositivo.",
            points: ["Sua posição de leitura, lembrada", "Baixe livros para ler offline", "Clássicos gratuitos do Project Gutenberg"],
        },
        direct: [
            { title: "Direto para o seu servidor", body: "Nada passa por um servidor do Chimera — não existe nenhum." },
            { title: "Todos os servidores, um app", body: "Adicione vários servidores, dê a cada um nome e cor, e troque com um toque." },
            { title: "Uma só biblioteca", body: "Com o Chimera Pro, músicas e fotos de todos os seus servidores ficam juntas." },
            { title: "As senhas ficam onde estão", body: "As credenciais dos servidores ficam nas Chaves do seu dispositivo." },
        ],
    },
    sources: {
        eyebrow: "Suas fontes",
        title: "Use o que você já tem.",
        body: "O Chimera é apenas um player — não inclui canais, filmes nem músicas. Conecte os serviços que você usa e dê a cada fonte um nome e uma cor.",
        list: [
            "Xtream Codes",
            "Listas M3U",
            "Plex",
            "Jellyfin",
            "Emby",
            "Navidrome e Subsonic",
            "Immich",
            "Catálogos OPDS",
            "Dropbox",
            "MEGA",
        ],
        disclaimer: "Use apenas fontes que sejam suas ou que você tenha autorização para usar.",
    },
    pro: {
        eyebrow: "Chimera Pro",
        title: "Grátis para começar. Pro quando quiser mais.",
        body: "O Chimera é gratuito. O Chimera Pro é uma assinatura mensal ou anual, ou uma compra única, compartilhada com sua família pelo Compartilhamento Familiar.",
        features: [
            { title: "Fontes ilimitadas", body: "A versão gratuita inclui duas." },
            { title: "Multiview", body: "Assista a vários canais ao mesmo tempo." },
            { title: "Uma só biblioteca", body: "Música, fotos e Início de todas as suas fontes." },
            { title: "Seu Início", body: "Escolha e ordene as seções que você vê." },
            { title: "Sem anúncios", body: "O app gratuito para iPhone e iPad mostra um anúncio de vez em quando." },
        ],
    },
    privacy: {
        eyebrow: "Privacidade",
        title: "Privado por natureza.",
        points: [
            { title: "Sem conta", body: "Abra o app e adicione uma fonte. Só isso." },
            { title: "Sem rastreamento", body: "O Chimera não rastreia você, e o desenvolvedor nunca recebe seus dados." },
            { title: "Chaves", body: "As senhas ficam nas Chaves do seu dispositivo e nunca são sincronizadas." },
        ],
        link: "Ler a Política de Privacidade (em inglês)",
    },
    faq: {
        title: "Perguntas",
        items: [
            {
                q: "O Chimera vem com canais ou filmes?",
                a: "Não. O Chimera é apenas um player. Você adiciona suas próprias fontes: uma assinatura IPTV que você tem autorização para usar, seu próprio servidor Plex, Jellyfin ou Emby, ou seu próprio armazenamento em nuvem.",
            },
            {
                q: "Funciona com meu servidor Plex, Jellyfin ou Emby?",
                a: "Sim. Adicione seu servidor como fonte e o Chimera mostra os filmes, séries e músicas dele. O Plex entra com sua conta Plex; Jellyfin e Emby usam o endereço do servidor, seu usuário e senha.",
            },
            {
                q: "Quais fontes posso adicionar?",
                a: "Listas Xtream Codes e M3U, servidores Plex, Jellyfin e Emby, Navidrome ou Subsonic para música, Immich para fotos, catálogos de livros OPDS, e Dropbox ou MEGA.",
            },
            {
                q: "O Chimera é grátis?",
                a: "Sim. O Chimera é gratuito e aceita até duas fontes. O Chimera Pro adiciona fontes ilimitadas, Multiview, uma só biblioteca com todas as suas fontes e mais, e remove os anúncios.",
            },
            {
                q: "Meu vídeo vai tocar?",
                a: "O Chimera usa o player nativo da Apple e muda automaticamente para o mecanismo alternativo integrado nos formatos que esse player não consegue decodificar, como muitos arquivos MKV e áudio AC-3.",
            },
            {
                q: "Em quais dispositivos funciona?",
                a: "iPhone, iPad, Mac e Apple TV. Favoritos, progresso e sua lista de fontes são sincronizados entre eles pelo iCloud.",
            },
        ],
        more: "Mais respostas na página de suporte (em inglês)",
    },
    cta: {
        title: "Sua mídia está esperando.",
        body: "Baixe o Chimera e adicione sua primeira fonte.",
    },
    footer: {
        support: "Suporte",
        privacy: "Privacidade",
        terms: "Termos de Uso",
        trademarks:
            "Apple, o logotipo da Apple, iPhone, iPad, Mac, Apple TV e AirPlay são marcas comerciais da Apple Inc., registradas nos EUA e em outros países. App Store e Mac App Store são marcas de serviço da Apple Inc.",
    },
    alt: {
        homeIPhone: "O Início do Chimera no iPhone, com uma série em destaque e uma fileira de filmes novos",
        macGuide: "O guia de TV completo no Chimera para Mac",
        ipadPlayer: "Um vídeo tocando no Chimera no iPad",
        tvLive: "TV ao vivo na Apple TV, com a lista de canais e uma prévia",
        liveIPhone: "A lista de canais ao vivo no iPhone, com o que passa agora",
        liveIPad: "TV ao vivo no iPad, com Continuar Assistindo, o guia e todos os canais",
        detail: "A página de um filme no iPhone",
        ipadHome: "O Início do Chimera no iPad",
        player: "Um canal ao vivo no player do Chimera",
        music: "Tocando agora: um álbum de Chopin",
        books: "A página de um livro",
        photos: "Uma fototeca de imagens do espaço",
        sources: "Adicionar uma fonte no Chimera: Xtream, M3U, Plex, Jellyfin e mais",
        macBook: "A página de um livro no Chimera para Mac",
        tvPhoto: "Uma foto de Júpiter na Apple TV",
        detailDark: "A página de um filme de um servidor de mídia, com Reproduzir e Baixar",
        musicAlbum: "Um álbum de Chopin com as faixas, Reproduzir e Aleatório",
        photoViewer: "Uma foto de Júpiter em tela cheia",
        reader: "Uma página de As Aventuras de Sherlock Holmes no leitor",
    },
};

export default ptBR;
