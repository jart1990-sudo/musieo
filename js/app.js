(function () {
  "use strict";

  const SITE_NAME = "Musieo";
  const appEl = document.getElementById("app");
  const filterBar = document.getElementById("filterBar");
  const searchInput = document.getElementById("searchInput");
  const genreFilter = document.getElementById("genreFilter");
  const shuffleToggle = document.getElementById("shuffleToggle");

  let filterState = { text: "", genre: "" };

  // ---------- Shuffle mode persistence ----------

  function isShuffleOn() {
    return localStorage.getItem("musieo_shuffle") === "1";
  }

  function setShuffleOn(on) {
    localStorage.setItem("musieo_shuffle", on ? "1" : "0");
  }

  shuffleToggle.checked = isShuffleOn();
  shuffleToggle.addEventListener("change", () => {
    setShuffleOn(shuffleToggle.checked);
  });

  // ---------- Helpers ----------

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function findArtist(slug) {
    return ARTISTS.find((a) => a.slug === slug);
  }

  function findSong(artist, songId) {
    return artist ? artist.songs.find((s) => s.id === songId) : null;
  }

  function allGenres() {
    const set = new Set();
    ARTISTS.forEach((a) => (a.genres || []).forEach((g) => set.add(g)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "es"));
  }

  function allSongsFlat() {
    const list = [];
    ARTISTS.forEach((a) => {
      a.songs.forEach((s) => {
        list.push({ artistSlug: a.slug, artistName: a.name, song: s });
      });
    });
    return list;
  }

  const ACCENT_MAP = { Á: "A", É: "E", Í: "I", Ó: "O", Ú: "U", Ü: "U", Ñ: "Ñ" };
  const LEADING_ARTICLE = /^(el|la|los|las|the)\s+/i;

  // Strips a leading Spanish article so e.g. "La Renga" alphabetizes as "Renga".
  function sortableName(name) {
    return name.replace(LEADING_ARTICLE, "");
  }

  function letterOf(name) {
    const c = sortableName(name).trim().charAt(0).toUpperCase();
    const plain = ACCENT_MAP[c] || c;
    return /[A-ZÑ]/.test(plain) ? plain : "#";
  }

  // ---------- Router ----------

  function parseHash() {
    const hash = location.hash.replace(/^#\/?/, "");
    const parts = hash.split("/").filter(Boolean).map(decodeURIComponent);
    return parts;
  }

  function navigate(path) {
    location.hash = path;
  }

  function render() {
    destroyPlayer();
    const parts = parseHash();

    if (parts.length === 0) {
      filterBar.hidden = false;
      renderHome();
    } else if (parts[0] === "artist" && parts[1]) {
      filterBar.hidden = true;
      renderArtist(parts[1]);
    } else if (parts[0] === "song" && parts[1] && parts[2]) {
      filterBar.hidden = true;
      renderSong(parts[1], parts[2]);
    } else {
      filterBar.hidden = false;
      renderHome();
    }
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", () => {
    populateGenreFilter();
    render();
  });

  // ---------- Home ----------

  function populateGenreFilter() {
    genreFilter.innerHTML = '<option value="">Todos los géneros</option>';
    allGenres().forEach((g) => {
      const opt = document.createElement("option");
      opt.value = g;
      opt.textContent = g;
      genreFilter.appendChild(opt);
    });
  }

  searchInput.addEventListener("input", () => {
    filterState.text = searchInput.value.trim().toLowerCase();
    renderArtistListOnly();
  });

  genreFilter.addEventListener("change", () => {
    filterState.genre = genreFilter.value;
    renderArtistListOnly();
  });

  function getFilteredArtists() {
    return ARTISTS.filter((a) => {
      const matchesText = !filterState.text || a.name.toLowerCase().includes(filterState.text);
      const matchesGenre = !filterState.genre || (a.genres || []).includes(filterState.genre);
      return matchesText && matchesGenre;
    }).sort((a, b) => sortableName(a.name).localeCompare(sortableName(b.name), "es"));
  }

  function renderHome() {
    filterState = { text: "", genre: "" };
    searchInput.value = "";
    genreFilter.value = "";
    appEl.innerHTML = `<div id="artistListContainer"></div>`;
    renderArtistListOnly();
  }

  function renderArtistListOnly() {
    const container = document.getElementById("artistListContainer");
    if (!container) return;

    const artists = getFilteredArtists();

    if (artists.length === 0) {
      container.innerHTML = `<div class="empty-state">No se encontraron artistas.</div>`;
      return;
    }

    const groups = new Map();
    artists.forEach((a) => {
      const letter = letterOf(a.name);
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter).push(a);
    });

    const letters = Array.from(groups.keys()).sort();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let html = `<nav class="alpha-nav">`;
    alphabet.forEach((l) => {
      if (groups.has(l)) {
        html += `<a href="#letter-${l}">${l}</a>`;
      } else {
        html += `<span>${l}</span>`;
      }
    });
    html += `</nav>`;

    letters.forEach((letter) => {
      html += `<section class="letter-group" id="letter-${letter}">`;
      html += `<h2 class="letter-heading">${letter}</h2>`;
      html += `<ul class="artist-list">`;
      groups.get(letter).forEach((a) => {
        const tags = (a.genres || [])
          .map((g) => `<span class="tag">${escapeHtml(g)}</span>`)
          .join("");
        html += `<li>
          <a class="artist-link" href="#/artist/${encodeURIComponent(a.slug)}">
            <span>${escapeHtml(a.name)}</span>
            <span class="genre-tags">${tags}</span>
          </a>
        </li>`;
      });
      html += `</ul></section>`;
    });

    container.innerHTML = html;
  }

  // ---------- Artist page ----------

  function renderArtist(slug) {
    const artist = findArtist(slug);
    if (!artist) {
      appEl.innerHTML = `<a class="back-link" href="#/">&larr; Volver</a><div class="empty-state">Artista no encontrado.</div>`;
      return;
    }

    const tags = (artist.genres || [])
      .map((g) => `<span class="tag">${escapeHtml(g)}</span>`)
      .join("");

    const songsHtml = artist.songs
      .map(
        (s) => `<li>
          <a href="#/song/${encodeURIComponent(artist.slug)}/${encodeURIComponent(s.id)}">
            <span>${escapeHtml(s.title)}</span>
            <span class="song-year">${s.year || ""}</span>
          </a>
        </li>`
      )
      .join("");

    appEl.innerHTML = `
      <a class="back-link" href="#/">&larr; Volver a la biblioteca</a>
      <div class="artist-header">
        <h1>${escapeHtml(artist.name)}</h1>
        <div class="artist-genres">${tags}</div>
      </div>
      <p class="artist-bio">${artist.bio || ""}</p>
      <ul class="song-list">${songsHtml}</ul>
    `;
  }

  // ---------- Song page ----------

  let ytPlayer = null;
  let ytApiLoading = false;
  const ytApiCallbacks = [];

  function ensureYouTubeApi(callback) {
    if (window.YT && window.YT.Player) {
      callback();
      return;
    }
    ytApiCallbacks.push(callback);
    if (ytApiLoading) return;
    ytApiLoading = true;
    window.onYouTubeIframeAPIReady = function () {
      ytApiCallbacks.forEach((cb) => cb());
      ytApiCallbacks.length = 0;
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }

  function destroyPlayer() {
    if (ytPlayer) {
      try {
        ytPlayer.destroy();
      } catch (e) {
        /* ignore */
      }
      ytPlayer = null;
    }
  }

  function renderSong(artistSlug, songId) {
    const artist = findArtist(artistSlug);
    const song = findSong(artist, songId);

    if (!artist || !song) {
      appEl.innerHTML = `<a class="back-link" href="#/">&larr; Volver</a><div class="empty-state">Canción no encontrada.</div>`;
      return;
    }

    appEl.innerHTML = `
      <a class="back-link" href="#/artist/${encodeURIComponent(artist.slug)}">&larr; Volver a ${escapeHtml(artist.name)}</a>
      <h1 class="song-title">${escapeHtml(song.title)} (${song.year || "?"})</h1>
      <a class="song-artist-link" href="#/artist/${encodeURIComponent(artist.slug)}">${escapeHtml(artist.name)}</a>
      <div class="video-wrap"><div id="ytPlayer"></div></div>
      <p class="next-hint">${
        isShuffleOn()
          ? "Al terminar, se reproducirá un video aleatorio de un artista con género en común."
          : "Al terminar, se reproducirá la siguiente canción de " + escapeHtml(artist.name) + "."
      }</p>
    `;

    ensureYouTubeApi(() => {
      // Verify we're still on this song's page (user may have navigated away quickly)
      const current = parseHash();
      if (current[1] !== artistSlug || current[2] !== songId) return;

      ytPlayer = new YT.Player("ytPlayer", {
        videoId: song.youtubeId,
        playerVars: { autoplay: 1, rel: 0 },
        events: {
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.ENDED) {
              goToNextSong(artist, song);
            }
          }
        }
      });
    });
  }

  function goToNextSong(artist, currentSong) {
    if (isShuffleOn()) {
      const currentGenres = artist.genres || [];
      let pool = allSongsFlat().filter((item) => {
        if (item.artistSlug === artist.slug && item.song.id === currentSong.id) return false;
        const otherArtist = findArtist(item.artistSlug);
        const otherGenres = (otherArtist && otherArtist.genres) || [];
        return currentGenres.some((g) => otherGenres.includes(g));
      });
      // Fallback: if no other song shares a genre, pick from the whole library.
      if (pool.length === 0) {
        pool = allSongsFlat().filter(
          (item) => !(item.artistSlug === artist.slug && item.song.id === currentSong.id)
        );
      }
      if (pool.length === 0) return;
      const pick = pool[Math.floor(Math.random() * pool.length)];
      navigate(`/song/${encodeURIComponent(pick.artistSlug)}/${encodeURIComponent(pick.song.id)}`);
    } else {
      const idx = artist.songs.findIndex((s) => s.id === currentSong.id);
      const next = artist.songs[(idx + 1) % artist.songs.length];
      navigate(`/song/${encodeURIComponent(artist.slug)}/${encodeURIComponent(next.id)}`);
    }
  }
})();
