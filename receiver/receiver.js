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

  ui 2 (LOAD customData.ui = 2, Chimera builds from Nov 2026 on; older
  senders keep the first UI): an AVPlayer-style transport, paused details,
  captions in the app's subtitle style, track confirmations, Up Next and
  quick channel switches. customData v2 (all optional):
    { locale, ui: 2,
      details: { eyebrow, line, overview },
      live: { channel, logo, programme: { title, start, end }, next: { title, start } },
      subtitleStyle: { scale, weight, color, background, edge, position } }
  (times in Unix seconds). Messages on the custom channel:
    scrub {seconds} · scrubEnd · subtitleStyle {style} · live {live}
    upNext {title, art, seconds, window, countdown} · upNext {hidden: true} · showInfo
*/
(() => {
    "use strict";

    const NAMESPACE = "urn:x-cast:app.chimera";
    const LOCALE_KEY = "chimera.locale";

    const STRINGS = {
        "en":    { ready: "Ready to play", live: "LIVE", loading: "Loading…", errorTitle: "Can't play this", errorBody: "This TV couldn't open the stream.", upNext: "Up Next", subtitlesOn: "Subtitles: %@", subtitlesOff: "Subtitles Off", audio: "Audio: %@", next: "Next: %@", track: "Track %@" },
        "ar":    { ready: "جاهز للتشغيل", live: "مباشر", loading: "جارٍ التحميل…", errorTitle: "تعذّر التشغيل", errorBody: "تعذّر على هذا التلفزيون فتح البث.", upNext: "التالي", subtitlesOn: "الترجمة: %@", subtitlesOff: "الترجمة متوقفة", audio: "الصوت: %@", next: "التالي: %@", track: "المسار %@" },
        "de":    { ready: "Bereit zur Wiedergabe", live: "LIVE", loading: "Laden …", errorTitle: "Wiedergabe nicht möglich", errorBody: "Dieser Fernseher konnte den Stream nicht öffnen.", upNext: "Als Nächstes", subtitlesOn: "Untertitel: %@", subtitlesOff: "Untertitel aus", audio: "Audio: %@", next: "Danach: %@", track: "Spur %@" },
        "es":    { ready: "Listo para reproducir", live: "EN VIVO", loading: "Cargando…", errorTitle: "No se puede reproducir", errorBody: "Este televisor no pudo abrir la transmisión.", upNext: "A continuación", subtitlesOn: "Subtítulos: %@", subtitlesOff: "Subtítulos desactivados", audio: "Audio: %@", next: "Después: %@", track: "Pista %@" },
        "fr":    { ready: "Prêt pour la lecture", live: "DIRECT", loading: "Chargement…", errorTitle: "Lecture impossible", errorBody: "Ce téléviseur n'a pas pu ouvrir le flux.", upNext: "À suivre", subtitlesOn: "Sous-titres : %@", subtitlesOff: "Sous-titres désactivés", audio: "Audio : %@", next: "Ensuite : %@", track: "Piste %@" },
        "hr":    { ready: "Spremno za reprodukciju", live: "UŽIVO", loading: "Učitavanje…", errorTitle: "Reprodukcija nije moguća", errorBody: "Ovaj televizor nije mogao otvoriti stream.", upNext: "Sljedeće", subtitlesOn: "Titlovi: %@", subtitlesOff: "Titlovi isključeni", audio: "Zvuk: %@", next: "Zatim: %@", track: "Zapis %@" },
        "it":    { ready: "Pronto per la riproduzione", live: "LIVE", loading: "Caricamento…", errorTitle: "Impossibile riprodurre", errorBody: "Questo televisore non è riuscito ad aprire lo stream.", upNext: "Prossimo", subtitlesOn: "Sottotitoli: %@", subtitlesOff: "Sottotitoli disattivati", audio: "Audio: %@", next: "Dopo: %@", track: "Traccia %@" },
        "nl":    { ready: "Klaar om af te spelen", live: "LIVE", loading: "Laden…", errorTitle: "Kan niet afspelen", errorBody: "Deze tv kon de stream niet openen.", upNext: "Hierna", subtitlesOn: "Ondertitels: %@", subtitlesOff: "Ondertitels uit", audio: "Audio: %@", next: "Hierna: %@", track: "Spoor %@" },
        "pl":    { ready: "Gotowe do odtwarzania", live: "NA ŻYWO", loading: "Wczytywanie…", errorTitle: "Nie można odtworzyć", errorBody: "Ten telewizor nie mógł otworzyć strumienia.", upNext: "Następny", subtitlesOn: "Napisy: %@", subtitlesOff: "Napisy wyłączone", audio: "Dźwięk: %@", next: "Następnie: %@", track: "Ścieżka %@" },
        "pt-BR": { ready: "Pronto para reproduzir", live: "AO VIVO", loading: "Carregando…", errorTitle: "Não é possível reproduzir", errorBody: "Esta TV não conseguiu abrir a transmissão.", upNext: "A seguir", subtitlesOn: "Legendas: %@", subtitlesOff: "Legendas desativadas", audio: "Áudio: %@", next: "Depois: %@", track: "Faixa %@" },
        "tr":    { ready: "Oynatmaya hazır", live: "CANLI", loading: "Yükleniyor…", errorTitle: "Oynatılamıyor", errorBody: "Bu TV yayını açamadı.", upNext: "Sıradaki", subtitlesOn: "Altyazı: %@", subtitlesOff: "Altyazı kapalı", audio: "Ses: %@", next: "Sonra: %@", track: "Parça %@" }
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

    let language = "en";

    function t(key, value) {
        const text = (STRINGS[language] || STRINGS.en)[key] || STRINGS.en[key] || "";
        return value === undefined ? text : text.replace("%@", value);
    }

    function applyLanguage(tag, remember) {
        language = resolveLanguage(tag);
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
    /// 1: the first UI (senders without `ui`); 2: the AVPlayer-style UI.
    let ui = 1;
    /// customData v2 of the current item: { details, live }.
    let extra = {};
    let current = { title: "", subtitle: "" };

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
        current = details;
        body.dataset.kind = kind;
        $$("[data-bind='title']").forEach(element => { element.textContent = details.title; });
        $$("[data-bind='subtitle']").forEach(element => { element.textContent = details.subtitle; });
        ["#loading-art", "#info-art", "#music-art"].forEach(id => setArtwork($(id), details.art));
        setBackdrop(details.art);
        $("#loading").classList.toggle("no-art", !details.art);
        $("#music").classList.toggle("no-art", !details.art);
        position = { current: 0, duration: 0 };
        updateProgress(0, 0);
        body.classList.remove("photo-visible");
        if (kind === "photo") {
            photo.onload = () => body.classList.add("photo-visible");
            photo.src = details.url;
            setBackdrop(details.art || details.url);
        }
        renderHead();
    }

    function setUI(customData) {
        ui = customData.ui >= 2 ? 2 : 1;
        body.dataset.ui = String(ui);
        extra = {
            details: customData.details || null,
            live: customData.live || null
        };
        if (ui === 2) applyCueStyle(customData.subtitleStyle || cueStyle);
    }

    // ---------- State ----------

    let state = "idle";
    let errorTimer = null;
    /// A live channel replacing another: the old frame stays, dimmed, under
    /// the new channel's transport until the new one plays (ui 2).
    let zapping = false;

    function setState(next) {
        state = next;
        body.dataset.state = next;
        const isMedia = next === "playing" || next === "paused" || next === "buffering";
        const isVideo = kind === "video" || kind === "live";
        $("#idle").classList.toggle("shown", next === "idle");
        $("#loading").classList.toggle("shown", next === "loading" && kind !== "photo" && !zapping);
        $("#music").classList.toggle("shown", isMedia && kind === "music");
        $("#error").classList.toggle("shown", next === "error");
        $("#buffering").classList.toggle("shown", (next === "buffering" && kind !== "music") || (next === "loading" && zapping));
        body.classList.toggle("video-visible", isMedia && isVideo);
        if (!isMedia || !isVideo) {
            if (!(next === "loading" && zapping)) hideInfo();
        }
        if (next === "idle" || next === "error") hideUpNext();
    }

    function endZap() {
        if (!zapping) return;
        zapping = false;
        body.classList.remove("zapping");
    }

    function goIdle() {
        clearTimeout(errorTimer);
        endZap();
        hideInfo();
        setState("idle");
    }

    function showError() {
        endZap();
        setState("error");
        clearTimeout(errorTimer);
        errorTimer = setTimeout(goIdle, 8000);
    }

    // ---------- Info bar (ui 1) / transport (ui 2) ----------

    let infoTimer = null;

    function overlay() {
        return ui === 2 ? $("#transport") : $("#infobar");
    }

    function showInfo(milliseconds) {
        if (kind !== "video" && kind !== "live") return;
        overlay().classList.add("shown");
        if (ui === 2) {
            body.classList.add("transport-shown");
            renderBar();
            liftCues();
        }
        clearTimeout(infoTimer);
        if (milliseconds) infoTimer = setTimeout(() => { if (state !== "paused" && !scrubbing) hideInfo(); }, milliseconds);
    }

    function hideInfo() {
        clearTimeout(infoTimer);
        $("#infobar").classList.remove("shown");
        $("#transport").classList.remove("shown");
        body.classList.remove("transport-shown");
        liftCues();
    }

    // ---------- Progress ----------

    let position = { current: 0, duration: 0 };
    /// While the phone's scrubber is dragged: the time it points at (ui 2).
    let scrubbing = false;
    let scrubTarget = null;
    let scrubTimer = null;

    function formatTime(seconds) {
        const total = Math.max(0, Math.floor(seconds || 0));
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const secs = String(total % 60).padStart(2, "0");
        return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${secs}` : `${minutes}:${secs}`;
    }

    function formatClock(unixSeconds) {
        try {
            return new Date(unixSeconds * 1000).toLocaleTimeString(language, { hour: "numeric", minute: "2-digit" });
        } catch (_) {
            const date = new Date(unixSeconds * 1000);
            return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
        }
    }

    function updateProgress(currentSeconds, duration) {
        position = { current: currentSeconds, duration: duration };
        const known = duration > 0 && isFinite(duration);
        const fraction = known ? Math.min(1, Math.max(0, currentSeconds / duration)) : 0;
        $$(".fill").forEach(element => { element.style.transform = `scaleX(${fraction})`; });
        $$(".time.elapsed").forEach(element => { element.textContent = formatTime(currentSeconds); });
        $$(".time.remaining").forEach(element => { element.textContent = known ? "−" + formatTime(duration - currentSeconds) : ""; });
        if (ui === 2 && $("#transport").classList.contains("shown")) renderBar();
    }

    // ---------- Transport (ui 2) ----------

    function programme() {
        const live = extra.live;
        const item = live && live.programme;
        return item && item.end > item.start ? item : null;
    }

    function renderHead() {
        const details = extra.details || {};
        const live = extra.live || {};
        const now = programme();
        let eyebrow = "", title = current.title, line = current.subtitle, overview = details.overview || "";
        if (kind === "live") {
            eyebrow = live.channel || (now ? current.title : "");
            if (now) {
                title = now.title || current.title;
                line = `${formatClock(now.start)} – ${formatClock(now.end)}`;
                if (live.next && live.next.title) line += "  ·  " + t("next", live.next.title);
            }
        } else {
            eyebrow = details.eyebrow || "";
            line = details.line || current.subtitle;
        }
        const eyebrowElement = $(".t-eyebrow");
        $(".t-eyebrow-text").textContent = eyebrow;
        eyebrowElement.classList.toggle("empty", !eyebrow && kind !== "live");
        $(".t-title").textContent = title;
        $(".t-line").textContent = line || "";
        $(".t-overview").textContent = overview;
        setArtwork($("#t-logo"), kind === "live" ? (live.logo || current.art) : "");
        renderBar();
    }

    function renderBar() {
        if (ui !== 2) return;
        const bar = $(".bar");
        const elapsed = $(".t-elapsed"), remaining = $(".t-remaining");
        let fraction, elapsedText, remainingText, followsHead;
        const now = programme();
        if (kind === "live") {
            if (!now) { bar.classList.add("hidden"); return; }
            fraction = (Date.now() / 1000 - now.start) / (now.end - now.start);
            elapsedText = formatClock(now.start);
            remainingText = formatClock(now.end);
            followsHead = false;
        } else {
            const duration = position.duration;
            if (!(duration > 0 && isFinite(duration))) { bar.classList.add("hidden"); return; }
            const at = scrubTarget !== null ? scrubTarget : position.current;
            fraction = at / duration;
            elapsedText = formatTime(at);
            remainingText = "−" + formatTime(duration - at);
            followsHead = true;
        }
        bar.classList.remove("hidden");
        fraction = Math.min(1, Math.max(0, fraction || 0));
        $(".bar-fill").style.transform = `scaleX(${fraction})`;
        const width = $(".bar-track").offsetWidth;
        $(".bar-head").style.setProperty("--head-x", `${fraction * width}px`);
        elapsed.textContent = elapsedText;
        remaining.textContent = remainingText;
        if (followsHead) {
            const elapsedWidth = elapsed.offsetWidth;
            const remainingWidth = remaining.offsetWidth;
            const left = Math.min(Math.max(fraction * width - elapsedWidth / 2, 0), width - elapsedWidth);
            elapsed.style.transform = `translateX(${left}px)`;
            // Like tvOS: the remaining time gives way when the playhead's time reaches it.
            remaining.style.opacity = left + elapsedWidth > width - remainingWidth - 24 ? "0" : "1";
        } else {
            elapsed.style.transform = "none";
            remaining.style.opacity = "1";
        }
    }

    // A live programme's bar moves with the clock, not the stream.
    setInterval(() => {
        if (ui === 2 && kind === "live" && $("#transport").classList.contains("shown")) renderBar();
    }, 15000);

    function beginScrub(seconds) {
        if (ui !== 2 || kind !== "video") return;
        scrubbing = true;
        scrubTarget = Math.max(0, Number(seconds) || 0);
        body.classList.add("scrubbing");
        showInfo(0);
        renderBar();
        clearTimeout(scrubTimer);
        // The phone stops sending if it's closed mid-drag.
        scrubTimer = setTimeout(() => endScrub(true), 4000);
    }

    function endScrub(abandoned) {
        clearTimeout(scrubTimer);
        if (!scrubbing) return;
        scrubbing = false;
        body.classList.remove("scrubbing");
        if (abandoned) scrubTarget = null;
        // Otherwise the target stays on the bar until the SEEK lands.
        clearTimeout(scrubTimer);
        scrubTimer = setTimeout(() => { scrubTarget = null; renderBar(); }, 2500);
        showInfo(4000);
    }

    // ---------- Captions (ui 2) ----------
    //
    // Chrome's own caption rendering can't be fully restyled (its box stays,
    // and a larger font moves the line), so ui 2 draws the active track's
    // cues itself: a track CAF turns on ("showing") is switched to "hidden"
    // — still loaded, still firing cuechange — and rendered into #captions.

    const defaultCueStyle = { scale: 1, weight: 600, color: "#FFFFFF", background: "", edge: "dropShadow", position: "bottom" };
    let cueStyle = defaultCueStyle;
    const activeTracks = new Set();

    /// The app's subtitle style (SubtitleStyleStore), sent by the phone.
    function applyCueStyle(style) {
        cueStyle = Object.assign({}, defaultCueStyle, style || {});
        const size = (4.4 * Math.min(Math.max(Number(cueStyle.scale) || 1, 0.5), 2)).toFixed(2);
        const shadows = {
            none: "none",
            dropShadow: "0 0.05em 0.18em rgba(0,0,0,0.9), 0 0 0.5em rgba(0,0,0,0.35)",
            outline: "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000, 0 0.06em 0.12em rgba(0,0,0,0.6)",
            raised: "0.04em 0.04em 0 rgba(0,0,0,0.9), 0.08em 0.08em 0.06em rgba(0,0,0,0.5)"
        };
        const hasBox = !!cueStyle.background;
        let element = $("#cue-style");
        if (!element) {
            element = document.createElement("style");
            element.id = "cue-style";
            document.head.appendChild(element);
        }
        element.textContent = `#captions .cue {
            font-size: ${size}vh;
            font-weight: ${Number(cueStyle.weight) || 600};
            color: ${cueStyle.color || "#FFFFFF"};
            background: ${hasBox ? cueStyle.background : "transparent"};
            padding: ${hasBox ? "0.06em 0.4em" : "0"};
            text-shadow: ${hasBox ? "none" : (shadows[cueStyle.edge] || shadows.dropShadow)};
        }`;
        $("#captions").classList.toggle("top", cueStyle.position === "top");
        liftCues();
    }

    function adoptTracks() {
        if (ui !== 2) return;
        for (const track of Array.from(video.textTracks)) {
            if (track.kind !== "subtitles" && track.kind !== "captions") continue;
            if (track.mode === "showing") {
                activeTracks.add(track);
                track.mode = "hidden";
            } else if (track.mode === "disabled") {
                activeTracks.delete(track);
            }
        }
        renderCaptions();
    }

    function renderCaptions() {
        const box = $("#captions");
        box.textContent = "";
        if (ui !== 2) return;
        for (const track of activeTracks) {
            if (track.mode === "disabled" || !track.activeCues) continue;
            for (const cue of Array.from(track.activeCues)) {
                const line = document.createElement("span");
                line.className = "cue";
                try { line.appendChild(cue.getCueAsHTML()); } catch (_) { line.textContent = cue.text || ""; }
                box.appendChild(line);
            }
        }
    }

    /// Lifts the captions above the transport while it shows.
    function liftCues() {
        const box = $("#captions");
        if (ui !== 2 || cueStyle.position === "top" || !$("#transport").classList.contains("shown")) {
            box.style.transform = "none";
            return;
        }
        const head = $(".t-head").getBoundingClientRect();
        if (!head.top) return;
        const captionsBottom = window.innerHeight * 0.93;
        const target = head.top - window.innerHeight * 0.03;
        box.style.transform = `translateY(${Math.min(0, target - captionsBottom)}px)`;
    }

    video.textTracks.addEventListener("change", adoptTracks);
    video.textTracks.addEventListener("addtrack", event => {
        event.track.addEventListener("cuechange", renderCaptions);
        adoptTracks();
    });
    video.textTracks.addEventListener("removetrack", event => {
        activeTracks.delete(event.track);
        renderCaptions();
    });
    window.addEventListener("resize", liftCues);

    // ---------- Track confirmation (ui 2) ----------

    let toastTimer = null;
    let activeText = null, activeAudio = null, tracksKnown = false;

    function showToast(text) {
        if (ui !== 2 || !text) return;
        const toast = $("#toast");
        toast.textContent = text;
        toast.classList.add("shown");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("shown"), 2500);
    }

    function trackName(track, position) {
        if (track.name && String(track.name).trim()) return track.name;
        if (track.language) {
            try {
                const names = new Intl.DisplayNames([language], { type: "language" });
                return names.of(track.language) || track.language;
            } catch (_) { return track.language; }
        }
        return t("track", String(position + 1));
    }

    function mediaTracks(player) {
        const media = player.getMediaInformation && player.getMediaInformation();
        return (media && media.tracks) || [];
    }

    function rememberActiveTracks(player, ids) {
        const tracks = mediaTracks(player);
        const active = new Set(ids || []);
        const text = tracks.find(track => track.type === "TEXT" && active.has(track.trackId));
        const audio = tracks.find(track => track.type === "AUDIO" && active.has(track.trackId));
        return { text: text ? text.trackId : null, audio: audio ? audio.trackId : null, tracks };
    }

    function announceTracks(player, ids) {
        const next = rememberActiveTracks(player, ids);
        if (tracksKnown) {
            const texts = next.tracks.filter(track => track.type === "TEXT");
            const audios = next.tracks.filter(track => track.type === "AUDIO");
            if (next.text !== activeText) {
                const track = texts.find(item => item.trackId === next.text);
                showToast(track ? t("subtitlesOn", trackName(track, texts.indexOf(track))) : t("subtitlesOff"));
            } else if (next.audio !== activeAudio && next.audio !== null) {
                const track = audios.find(item => item.trackId === next.audio);
                if (track) showToast(t("audio", trackName(track, audios.indexOf(track))));
            }
        }
        activeText = next.text;
        activeAudio = next.audio;
        tracksKnown = true;
        showInfo(3000);
    }

    // ---------- Up Next (ui 2) ----------

    let upNextTimer = null;
    let upNext = null;

    function showUpNext(message) {
        if (ui !== 2 || kind !== "video") return;
        const card = $("#upnext");
        const isNew = !upNext || upNext.title !== message.title;
        upNext = {
            title: message.title || "",
            seconds: Math.max(0, Math.round(Number(message.seconds) || 0)),
            window: Math.max(1, Number(message.window) || 10),
            countdown: message.countdown !== false
        };
        if (isNew) {
            $(".u-title").textContent = upNext.title;
            setArtwork($("#u-art"), message.art || "");
        }
        renderUpNext();
        card.classList.add("shown");
        // The phone updates it every second; in between (or if the phone
        // goes quiet) the TV counts on by itself.
        clearInterval(upNextTimer);
        upNextTimer = setInterval(() => {
            if (!upNext || state !== "playing") return;
            upNext.seconds = Math.max(0, upNext.seconds - 1);
            renderUpNext();
        }, 1000);
    }

    function renderUpNext() {
        if (!upNext) return;
        const ring = $(".u-ring");
        ring.classList.toggle("hidden", !upNext.countdown);
        $(".u-seconds").textContent = String(upNext.seconds);
        const fraction = Math.min(1, upNext.seconds / upNext.window);
        $(".u-ring-fill").style.strokeDashoffset = String(106.8 * (1 - fraction));
    }

    function hideUpNext() {
        clearInterval(upNextTimer);
        upNext = null;
        $("#upnext").classList.remove("shown");
    }

    // ---------- Channel switch (ui 2) ----------

    /// Keeps the channel being left on screen, dimmed: its last frame,
    /// drawn once (reading pixels isn't needed, so a cross-origin stream is fine).
    function freezeFrame() {
        const canvas = $("#freeze");
        const width = video.videoWidth, height = video.videoHeight;
        if (!width || !height) return;
        canvas.width = width;
        canvas.height = height;
        try { canvas.getContext("2d").drawImage(video, 0, 0, width, height); } catch (_) { /* no frame: black */ }
    }

    // ---------- Cast ----------

    function startReceiver() {
        const context = cast.framework.CastReceiverContext.getInstance();
        const player = context.getPlayerManager();
        const events = cast.framework.events.EventType;
        const messages = cast.framework.messages.MessageType;
        player.setMediaElement(video);

        player.setMessageInterceptor(messages.LOAD, request => {
            const media = request.media || {};
            const customData = request.customData || media.customData || {};
            if (customData.locale) applyLanguage(customData.locale, true);
            clearTimeout(errorTimer);
            const wasPlayingLive = kind === "live" && (state === "playing" || state === "paused" || state === "buffering");
            setUI(customData);
            const details = detailsOf(media);
            hideUpNext();
            endScrub(true);
            scrubTarget = null;
            tracksKnown = false;
            zapping = ui === 2 && wasPlayingLive && details.kind === "live";
            if (zapping) {
                freezeFrame();
                body.classList.add("zapping");
            }
            showDetails(details);
            setState("loading");
            if (zapping) showInfo(0);
            return request;
        });

        player.setMessageInterceptor(messages.EDIT_TRACKS_INFO, request => {
            if (ui === 2 && request.activeTrackIds) {
                const ids = request.activeTrackIds.slice();
                setTimeout(() => announceTracks(player, ids), 0);
            }
            return request;
        });

        player.addEventListener(events.PLAYER_LOAD_COMPLETE, () => {
            endZap();
            setState(video.paused && kind !== "photo" ? "paused" : "playing");
            showInfo(ui === 2 ? 5000 : 6000);
            try {
                const remembered = rememberActiveTracks(player, player.getActiveTrackIds ? player.getActiveTrackIds() : []);
                activeText = remembered.text;
                activeAudio = remembered.audio;
                tracksKnown = true;
            } catch (_) { /* tracks not known yet */ }
        });
        player.addEventListener(events.PLAYING, () => {
            const wasPaused = state === "paused";
            endZap();
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
        player.addEventListener(events.SEEKED, () => {
            if (!scrubbing) scrubTarget = null;
            showInfo(4000);
        });
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
            handleMessage(event.data || {});
        });

        const options = new cast.framework.CastReceiverOptions();
        options.statusText = "Chimera";
        context.start(options);
    }

    /// Messages on the custom channel (see the header).
    function handleMessage(message) {
        switch (message.type) {
        case "debug": {
            const logger = cast.debug.CastDebugLogger.getInstance();
            logger.setEnabled(!!message.enabled);
            logger.showDebugLogs(!!message.enabled);
            break;
        }
        case "scrub": beginScrub(message.seconds); break;
        case "scrubEnd": endScrub(false); break;
        case "subtitleStyle": applyCueStyle(message.style); break;
        case "live":
            extra.live = message.live || null;
            renderHead();
            break;
        case "upNext":
            if (message.hidden) hideUpNext(); else showUpNext(message);
            break;
        case "showInfo": showInfo(5000); break;
        default: break;
        }
    }

    // ---------- Local preview (no Cast device): ?demo=<state>&lang=<code>[&video=<url>] ----------

    function svgData(width, height, from, to, label) {
        const text = label ? `<text x="50%" y="54%" font-family="Inter,Arial" font-size="${height / 9}" font-weight="700" fill="rgba(255,255,255,.85)" text-anchor="middle">${label}</text>` : "";
        return "data:image/svg+xml," + encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/>${text}</svg>`);
    }

    function runDemo(name, language, videoURL) {
        applyLanguage(language || "en", false);
        const samples = {
            video: { kind: "video", title: "The Long Way North", subtitle: "2024 · Drama · 1 h 52 min", art: svgData(400, 600, "#3a2d6b", "#c2577a", "NORTH") },
            live:  { kind: "live", title: "Channel One HD", subtitle: "Evening News · 20:00–20:45", art: svgData(400, 400, "#0a3d91", "#1fa2ff", "ONE") },
            music: { kind: "music", title: "Northern Lights", subtitle: "Aurora Fields — Midnight Sessions", art: svgData(600, 600, "#0f5257", "#e0a458", "") },
            photo: { kind: "photo", title: "", subtitle: "", art: "", url: svgData(1600, 1000, "#203a43", "#c9d6ff", "") }
        };
        const frame = svgData(1920, 1080, "#16222a", "#3a6073", "");
        if (name.startsWith("v2-")) { runDemoV2(name.slice(3), samples, frame, videoURL); return; }
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

    function runDemoV2(name, samples, frame, videoURL) {
        const now = Math.floor(Date.now() / 1000);
        const isLive = name === "live" || name === "zap";
        setUI({
            ui: 2,
            details: isLive ? null : {
                eyebrow: "Northern Shores · S1 E3",
                line: "2024 · Drama · 52 min",
                overview: "As the ice closes in, Mara has to choose between the expedition and the crew who followed her north — while a message from home changes everything she thought she knew."
            },
            live: isLive ? {
                channel: "Channel One HD", logo: samples.live.art,
                programme: { title: "Evening News", start: now - 1500, end: now + 1200 },
                next: { title: "Weather and Sport", start: now + 1200 }
            } : null,
            subtitleStyle: name === "subtitles" ? { scale: 1, weight: 600, color: "#FFFFFF", edge: "dropShadow" } : null
        });
        const sample = isLive ? samples.live : Object.assign({}, samples.video, { title: "The Ice Road", subtitle: "Northern Shores" });
        showDetails(sample);
        video.poster = frame;
        if (videoURL) {
            video.muted = true;
            video.loop = true;
            video.src = videoURL;
            video.play().catch(() => {});
        }
        const showsSubtitles = name === "subtitles" || name === "toast";
        if (showsSubtitles) {
            const track = video.addTextTrack("subtitles", "English", "en");
            track.addEventListener("cuechange", renderCaptions);
            track.mode = "showing";
            track.addCue(new VTTCue(0, 100000, "We can't go back the way we came.\nThe ice won't hold."));
        }
        if (name === "loading") { setState("loading"); return; }
        if (name === "error") { setState("error"); return; }
        updateProgress(1840, 3120);
        if (name === "zap") {
            zapping = true;
            body.classList.add("zapping");
            setState("loading");
            showInfo(0);
            return;
        }
        setState(name === "paused" ? "paused" : "playing");
        if (name === "scrub") { beginScrub(2410); return; }
        if (name === "toast") { showToast(t("subtitlesOn", "English")); showInfo(0); return; }
        if (name === "up-next") {
            updateProgress(3108, 3120);
            showUpNext({ title: "S1 E4 · The Long Dark", art: svgData(640, 360, "#2b4162", "#12100e", "E4"), seconds: 8, window: 10 });
            if (new URLSearchParams(location.search).has("transport")) showInfo(0);
            return;
        }
        if (name === "subtitles") return;
        showInfo(0);
    }

    const params = new URLSearchParams(location.search);
    applyLanguage(storedLanguage() || navigator.language, false);
    if (params.has("demo")) {
        runDemo(params.get("demo"), params.get("lang"), params.get("video"));
    } else {
        setState("idle");
        startReceiver();
    }
})();
