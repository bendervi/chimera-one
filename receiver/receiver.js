/*
  Chimera Cast receiver — behavior.

  CAF's PlayerManager plays into our own <video>; everything on screen is ours.
  States (body[data-state]): idle · loading · playing · paused · buffering · error.
  Kinds  (body[data-kind]):  video · live · music · photo — from the LOAD's
  metadataType / streamType / contentType, as Chimera's senders set them.

  Language: the sender's `customData.locale` on LOAD (remembered for the next
  launch), else the TV's own. Same 10 languages as the app; Arabic is RTL, the
  progress row stays left-to-right.

  Custom channel `urn:x-cast:app.chimera`: {"type":"debug","enabled":true} shows
  CAF's on-screen log (Cast built-in TVs may have no remote debugging).
*/
(() => {
    "use strict";

    const NAMESPACE = "urn:x-cast:app.chimera";
    const LOCALE_KEY = "chimera.locale";

    const STRINGS = {
        "en":    { ready: "Ready to play", live: "LIVE", loading: "Loading…", errorTitle: "Can't play this", errorBody: "This TV couldn't open the stream." },
        "ar":    { ready: "جاهز للتشغيل", live: "مباشر", loading: "جارٍ التحميل…", errorTitle: "تعذّر التشغيل", errorBody: "تعذّر على هذا التلفزيون فتح البث." },
        "de":    { ready: "Bereit zur Wiedergabe", live: "LIVE", loading: "Laden …", errorTitle: "Wiedergabe nicht möglich", errorBody: "Dieser Fernseher konnte den Stream nicht öffnen." },
        "es":    { ready: "Listo para reproducir", live: "EN VIVO", loading: "Cargando…", errorTitle: "No se puede reproducir", errorBody: "Este televisor no pudo abrir la transmisión." },
        "fr":    { ready: "Prêt pour la lecture", live: "DIRECT", loading: "Chargement…", errorTitle: "Lecture impossible", errorBody: "Ce téléviseur n'a pas pu ouvrir le flux." },
        "hr":    { ready: "Spremno za reprodukciju", live: "UŽIVO", loading: "Učitavanje…", errorTitle: "Reprodukcija nije moguća", errorBody: "Ovaj televizor nije mogao otvoriti stream." },
        "it":    { ready: "Pronto per la riproduzione", live: "LIVE", loading: "Caricamento…", errorTitle: "Impossibile riprodurre", errorBody: "Questo televisore non è riuscito ad aprire lo stream." },
        "nl":    { ready: "Klaar om af te spelen", live: "LIVE", loading: "Laden…", errorTitle: "Kan niet afspelen", errorBody: "Deze tv kon de stream niet openen." },
        "pl":    { ready: "Gotowe do odtwarzania", live: "NA ŻYWO", loading: "Wczytywanie…", errorTitle: "Nie można odtworzyć", errorBody: "Ten telewizor nie mógł otworzyć strumienia." },
        "pt-BR": { ready: "Pronto para reproduzir", live: "AO VIVO", loading: "Carregando…", errorTitle: "Não é possível reproduzir", errorBody: "Esta TV não conseguiu abrir a transmissão." },
        "tr":    { ready: "Oynatmaya hazır", live: "CANLI", loading: "Yükleniyor…", errorTitle: "Oynatılamıyor", errorBody: "Bu TV yayını açamadı." }
    };

    const $ = selector => document.querySelector(selector);
    const $$ = selector => document.querySelectorAll(selector);
    const body = document.body;
    const video = $("#video");
    const photo = $("#photo");

    // ---------- Language ----------

    function resolveLanguage(tag) {
        const lower = String(tag || "").replace("_", "-").toLowerCase();
        const base = lower.split("-")[0];
        if (base === "pt") return "pt-BR";
        return Object.keys(STRINGS).find(key => key.toLowerCase() === base) || "en";
    }

    function applyLanguage(tag, remember) {
        const language = resolveLanguage(tag);
        const strings = STRINGS[language];
        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        $$("[data-i18n]").forEach(element => { element.textContent = strings[element.dataset.i18n] || ""; });
        if (remember) {
            try { localStorage.setItem(LOCALE_KEY, language); } catch (_) { /* storage may be unavailable */ }
        }
    }

    function storedLanguage() {
        try { return localStorage.getItem(LOCALE_KEY); } catch (_) { return null; }
    }

    // ---------- Media details ----------

    let kind = "video";

    function kindOf(media) {
        const metadataType = media.metadata && media.metadata.metadataType;
        const contentType = String(media.contentType || "");
        if (metadataType === 4 || contentType.startsWith("image/")) return "photo";
        if (metadataType === 3 || contentType.startsWith("audio/")) return "music";
        if (media.streamType === "LIVE") return "live";
        return "video";
    }

    function detailsOf(media) {
        const metadata = media.metadata || {};
        const images = metadata.images || [];
        return {
            kind: kindOf(media),
            title: metadata.title || "",
            subtitle: metadata.subtitle || metadata.artist || metadata.albumName || "",
            art: images.length ? images[0].url : "",
            url: media.contentUrl || media.contentId || ""
        };
    }

    function setArtwork(image, url) {
        image.classList.remove("has-art");
        image.onload = () => image.classList.add("has-art");
        image.onerror = () => image.classList.remove("has-art");
        if (url) image.src = url; else image.removeAttribute("src");
    }

    // Draws the art into the tiny backdrop canvas; the browser's scaling blurs it.
    // A cross-origin image only taints the canvas, which is fine — it's never read.
    function setBackdrop(url) {
        const canvas = $("#ambient-art");
        canvas.classList.remove("has-art");
        if (!url) return;
        const image = new Image();
        image.onload = () => {
            if (backdropURL !== url) return;
            const context = canvas.getContext("2d");
            const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
            const width = image.width * scale, height = image.height * scale;
            context.filter = "saturate(1.5)";
            context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
            canvas.classList.add("has-art");
        };
        backdropURL = url;
        image.src = url;
    }
    let backdropURL = "";

    function showDetails(details) {
        kind = details.kind;
        body.dataset.kind = kind;
        $$("[data-bind='title']").forEach(element => { element.textContent = details.title; });
        $$("[data-bind='subtitle']").forEach(element => { element.textContent = details.subtitle; });
        ["#loading-art", "#info-art", "#music-art"].forEach(id => setArtwork($(id), details.art));
        setBackdrop(details.art);
        $("#loading").classList.toggle("no-art", !details.art);
        $("#music").classList.toggle("no-art", !details.art);
        updateProgress(0, 0);
        body.classList.remove("photo-visible");
        if (kind === "photo") {
            photo.onload = () => body.classList.add("photo-visible");
            photo.src = details.url;
            setBackdrop(details.art || details.url);
        }
    }

    // ---------- State ----------

    let state = "idle";
    let errorTimer = null;

    function setState(next) {
        state = next;
        body.dataset.state = next;
        const isMedia = next === "playing" || next === "paused" || next === "buffering";
        const isVideo = kind === "video" || kind === "live";
        $("#idle").classList.toggle("shown", next === "idle");
        $("#loading").classList.toggle("shown", next === "loading" && kind !== "photo");
        $("#music").classList.toggle("shown", isMedia && kind === "music");
        $("#error").classList.toggle("shown", next === "error");
        $("#buffering").classList.toggle("shown", next === "buffering" && kind !== "music");
        body.classList.toggle("video-visible", isMedia && isVideo);
        if (!isMedia || !isVideo) hideInfo();
    }

    function goIdle() {
        clearTimeout(errorTimer);
        hideInfo();
        setState("idle");
    }

    function showError() {
        setState("error");
        clearTimeout(errorTimer);
        errorTimer = setTimeout(goIdle, 8000);
    }

    // ---------- Info bar (video) ----------

    let infoTimer = null;

    function showInfo(milliseconds) {
        if (kind !== "video" && kind !== "live") return;
        $("#infobar").classList.add("shown");
        clearTimeout(infoTimer);
        if (milliseconds) infoTimer = setTimeout(() => { if (state !== "paused") hideInfo(); }, milliseconds);
    }

    function hideInfo() {
        clearTimeout(infoTimer);
        $("#infobar").classList.remove("shown");
    }

    // ---------- Progress ----------

    function formatTime(seconds) {
        const total = Math.max(0, Math.floor(seconds || 0));
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const secs = String(total % 60).padStart(2, "0");
        return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${secs}` : `${minutes}:${secs}`;
    }

    function updateProgress(current, duration) {
        const known = duration > 0 && isFinite(duration);
        const fraction = known ? Math.min(1, Math.max(0, current / duration)) : 0;
        $$(".fill").forEach(element => { element.style.transform = `scaleX(${fraction})`; });
        $$(".time.elapsed").forEach(element => { element.textContent = formatTime(current); });
        $$(".time.remaining").forEach(element => { element.textContent = known ? "−" + formatTime(duration - current) : ""; });
    }

    // ---------- Cast ----------

    function startReceiver() {
        const context = cast.framework.CastReceiverContext.getInstance();
        const player = context.getPlayerManager();
        const events = cast.framework.events.EventType;
        player.setMediaElement(video);

        player.setMessageInterceptor(cast.framework.messages.MessageType.LOAD, request => {
            const media = request.media || {};
            const customData = request.customData || media.customData || {};
            if (customData.locale) applyLanguage(customData.locale, true);
            clearTimeout(errorTimer);
            showDetails(detailsOf(media));
            setState("loading");
            return request;
        });

        player.addEventListener(events.PLAYER_LOAD_COMPLETE, () => {
            setState(video.paused && kind !== "photo" ? "paused" : "playing");
            showInfo(6000);
        });
        player.addEventListener(events.PLAYING, () => {
            const wasPaused = state === "paused";
            if (state !== "idle" && state !== "error") setState("playing");
            if (wasPaused) showInfo(3000);
        });
        player.addEventListener(events.PAUSE, () => {
            if (state === "idle" || state === "error" || state === "loading") return;
            setState("paused");
            showInfo(0);
        });
        player.addEventListener(events.BUFFERING, event => {
            if (event.isBuffering && state === "playing") setState("buffering");
            else if (!event.isBuffering && state === "buffering") setState("playing");
        });
        player.addEventListener(events.SEEKED, () => showInfo(4000));
        player.addEventListener(events.TIME_UPDATE, event => {
            updateProgress(event.currentMediaTime, player.getDurationSec());
        });
        player.addEventListener(events.MEDIA_FINISHED, event => {
            // A new LOAD (zapping, next song) interrupts the old item — not an ending.
            const reason = event.endedReason;
            if (reason === "INTERRUPTED" || reason === "SKIPPED" || reason === "BREAK_SWITCH") return;
            if (reason === "ERROR") showError(); else goIdle();
        });
        player.addEventListener(events.ERROR, event => {
            const severity = cast.framework.events.ErrorSeverity;
            if (severity && event.severity === severity.WARNING) return;
            if (kind === "photo" && body.classList.contains("photo-visible")) return;
            if (state === "loading" || state === "buffering" || state === "playing") showError();
        });

        context.addCustomMessageListener(NAMESPACE, event => {
            const message = event.data || {};
            if (message.type === "debug") {
                const logger = cast.debug.CastDebugLogger.getInstance();
                logger.setEnabled(!!message.enabled);
                logger.showDebugLogs(!!message.enabled);
            }
        });

        const options = new cast.framework.CastReceiverOptions();
        options.statusText = "Chimera";
        context.start(options);
    }

    // ---------- Local preview (no Cast device): ?demo=<state>&lang=<code> ----------

    function svgData(width, height, from, to, label) {
        const text = label ? `<text x="50%" y="54%" font-family="Inter,Arial" font-size="${height / 9}" font-weight="700" fill="rgba(255,255,255,.85)" text-anchor="middle">${label}</text>` : "";
        return "data:image/svg+xml," + encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/>${text}</svg>`);
    }

    function runDemo(name, language) {
        applyLanguage(language || "en", false);
        const samples = {
            video: { kind: "video", title: "The Long Way North", subtitle: "2024 · Drama · 1 h 52 min", art: svgData(400, 600, "#3a2d6b", "#c2577a", "NORTH") },
            live:  { kind: "live", title: "Channel One HD", subtitle: "Evening News · 20:00–20:45", art: svgData(400, 400, "#0a3d91", "#1fa2ff", "ONE") },
            music: { kind: "music", title: "Northern Lights", subtitle: "Aurora Fields — Midnight Sessions", art: svgData(600, 600, "#0f5257", "#e0a458", "") },
            photo: { kind: "photo", title: "", subtitle: "", art: "", url: svgData(1600, 1000, "#203a43", "#c9d6ff", "") }
        };
        const frame = svgData(1920, 1080, "#16222a", "#3a6073", "");
        const pick = { idle: null, error: "video", loading: "video", paused: "video" }[name] !== undefined
            ? { idle: null, error: "video", loading: "video", paused: "video" }[name] : name;
        if (pick && samples[pick]) showDetails(samples[pick]);
        if (name === "live" || name === "video" || name === "paused") video.poster = frame;
        if (name === "loading-live") { showDetails(samples.live); setState("loading"); return; }
        if (name === "idle" || !pick) { setState("idle"); return; }
        if (name === "loading") { setState("loading"); return; }
        if (name === "error") { setState("error"); return; }
        updateProgress(1840, 6720);
        setState(name === "paused" ? "paused" : "playing");
        showInfo(0);
    }

    const params = new URLSearchParams(location.search);
    applyLanguage(storedLanguage() || navigator.language, false);
    if (params.has("demo")) {
        runDemo(params.get("demo"), params.get("lang"));
    } else {
        setState("idle");
        startReceiver();
    }
})();
