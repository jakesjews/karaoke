const CORE_SONG_LIBRARY = [
  {
    id: "sweet-caroline",
    title: "Sweet Caroline",
    artist: "Neil Diamond",
    genre: "Classic Pop",
    decade: "1960s",
    energy: 4,
    range: "Mid",
    durationMin: 3,
    tags: ["crowd", "singalong"],
  },
  {
    id: "dont-stop-believin",
    title: "Don't Stop Believin'",
    artist: "Journey",
    genre: "Rock",
    decade: "1980s",
    energy: 5,
    range: "High",
    durationMin: 4,
    tags: ["anthem", "crowd"],
  },
  {
    id: "mr-brightside",
    title: "Mr. Brightside",
    artist: "The Killers",
    genre: "Rock",
    decade: "2000s",
    energy: 5,
    range: "High",
    durationMin: 4,
    tags: ["anthem", "late-night"],
  },
  {
    id: "dancing-queen",
    title: "Dancing Queen",
    artist: "ABBA",
    genre: "Disco",
    decade: "1970s",
    energy: 4,
    range: "Mid",
    durationMin: 4,
    tags: ["dance", "crowd"],
  },
  {
    id: "wannabe",
    title: "Wannabe",
    artist: "Spice Girls",
    genre: "Pop",
    decade: "1990s",
    energy: 5,
    range: "Mid",
    durationMin: 3,
    tags: ["dance", "group"],
  },
  {
    id: "i-will-survive",
    title: "I Will Survive",
    artist: "Gloria Gaynor",
    genre: "Disco",
    decade: "1970s",
    energy: 4,
    range: "Mid",
    durationMin: 4,
    tags: ["empowerment", "crowd"],
  },
  {
    id: "valerie",
    title: "Valerie",
    artist: "Amy Winehouse",
    genre: "Soul",
    decade: "2000s",
    energy: 3,
    range: "Mid",
    durationMin: 4,
    tags: ["groove", "chill"],
  },
  {
    id: "shallow",
    title: "Shallow",
    artist: "Lady Gaga & Bradley Cooper",
    genre: "Pop",
    decade: "2010s",
    energy: 4,
    range: "High",
    durationMin: 4,
    tags: ["duet", "power-ballad"],
  },
  {
    id: "before-he-cheats",
    title: "Before He Cheats",
    artist: "Carrie Underwood",
    genre: "Country",
    decade: "2000s",
    energy: 4,
    range: "High",
    durationMin: 3,
    tags: ["anthem", "story"],
  },
  {
    id: "friends-in-low-places",
    title: "Friends in Low Places",
    artist: "Garth Brooks",
    genre: "Country",
    decade: "1990s",
    energy: 4,
    range: "Low",
    durationMin: 4,
    tags: ["crowd", "singalong"],
  },
  {
    id: "take-on-me",
    title: "Take On Me",
    artist: "a-ha",
    genre: "Pop",
    decade: "1980s",
    energy: 5,
    range: "High",
    durationMin: 4,
    tags: ["anthem", "throwback"],
  },
  {
    id: "waterfalls",
    title: "Waterfalls",
    artist: "TLC",
    genre: "R&B",
    decade: "1990s",
    energy: 2,
    range: "Mid",
    durationMin: 4,
    tags: ["chill", "story"],
  },
  {
    id: "no-scrubs",
    title: "No Scrubs",
    artist: "TLC",
    genre: "R&B",
    decade: "1990s",
    energy: 3,
    range: "Mid",
    durationMin: 4,
    tags: ["groove", "singalong"],
  },
  {
    id: "hey-ya",
    title: "Hey Ya!",
    artist: "Outkast",
    genre: "Hip-Hop",
    decade: "2000s",
    energy: 5,
    range: "Mid",
    durationMin: 4,
    tags: ["dance", "crowd"],
  },
  {
    id: "lose-yourself",
    title: "Lose Yourself",
    artist: "Eminem",
    genre: "Hip-Hop",
    decade: "2000s",
    energy: 5,
    range: "Mid",
    durationMin: 5,
    tags: ["rap", "high-energy"],
  },
  {
    id: "rolling-in-the-deep",
    title: "Rolling in the Deep",
    artist: "Adele",
    genre: "Pop",
    decade: "2010s",
    energy: 4,
    range: "Mid",
    durationMin: 4,
    tags: ["power-ballad", "crowd"],
  },
  {
    id: "since-u-been-gone",
    title: "Since U Been Gone",
    artist: "Kelly Clarkson",
    genre: "Pop",
    decade: "2000s",
    energy: 5,
    range: "High",
    durationMin: 3,
    tags: ["anthem", "high-energy"],
  },
  {
    id: "man-i-feel-like-a-woman",
    title: "Man! I Feel Like a Woman!",
    artist: "Shania Twain",
    genre: "Country",
    decade: "1990s",
    energy: 4,
    range: "Mid",
    durationMin: 4,
    tags: ["crowd", "dance"],
  },
  {
    id: "bohemian-rhapsody",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
    decade: "1970s",
    energy: 5,
    range: "High",
    durationMin: 6,
    tags: ["epic", "crowd"],
  },
  {
    id: "livin-on-a-prayer",
    title: "Livin' on a Prayer",
    artist: "Bon Jovi",
    genre: "Rock",
    decade: "1980s",
    energy: 5,
    range: "High",
    durationMin: 4,
    tags: ["anthem", "crowd"],
  },
  {
    id: "my-heart-will-go-on",
    title: "My Heart Will Go On",
    artist: "Celine Dion",
    genre: "Pop",
    decade: "1990s",
    energy: 2,
    range: "High",
    durationMin: 5,
    tags: ["ballad", "dramatic"],
  },
  {
    id: "cant-help-falling-in-love",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    genre: "Classic Pop",
    decade: "1960s",
    energy: 2,
    range: "Low",
    durationMin: 3,
    tags: ["ballad", "classic"],
  },
  {
    id: "jolene",
    title: "Jolene",
    artist: "Dolly Parton",
    genre: "Country",
    decade: "1970s",
    energy: 3,
    range: "Mid",
    durationMin: 3,
    tags: ["story", "classic"],
  },
  {
    id: "uptown-funk",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    genre: "Funk",
    decade: "2010s",
    energy: 5,
    range: "Mid",
    durationMin: 4,
    tags: ["dance", "crowd"],
  },
  {
    id: "treasure",
    title: "Treasure",
    artist: "Bruno Mars",
    genre: "Funk",
    decade: "2010s",
    energy: 4,
    range: "Mid",
    durationMin: 3,
    tags: ["dance", "groove"],
  },
  {
    id: "party-in-the-usa",
    title: "Party in the U.S.A.",
    artist: "Miley Cyrus",
    genre: "Pop",
    decade: "2000s",
    energy: 4,
    range: "Mid",
    durationMin: 3,
    tags: ["singalong", "crowd"],
  },
  {
    id: "hollaback-girl",
    title: "Hollaback Girl",
    artist: "Gwen Stefani",
    genre: "Pop",
    decade: "2000s",
    energy: 4,
    range: "Mid",
    durationMin: 3,
    tags: ["dance", "high-energy"],
  },
  {
    id: "someone-like-you",
    title: "Someone Like You",
    artist: "Adele",
    genre: "Pop",
    decade: "2010s",
    energy: 2,
    range: "Mid",
    durationMin: 5,
    tags: ["ballad", "emotional"],
  },
  {
    id: "torn",
    title: "Torn",
    artist: "Natalie Imbruglia",
    genre: "Pop",
    decade: "1990s",
    energy: 3,
    range: "Mid",
    durationMin: 4,
    tags: ["throwback", "singalong"],
  },
  {
    id: "all-star",
    title: "All Star",
    artist: "Smash Mouth",
    genre: "Rock",
    decade: "1990s",
    energy: 4,
    range: "Mid",
    durationMin: 3,
    tags: ["fun", "crowd"],
  },
  {
    id: "tears-dry-on-their-own",
    title: "Tears Dry on Their Own",
    artist: "Amy Winehouse",
    genre: "Soul",
    decade: "2000s",
    energy: 3,
    range: "Mid",
    durationMin: 3,
    tags: ["groove", "throwback"],
  },
  {
    id: "zombie",
    title: "Zombie",
    artist: "The Cranberries",
    genre: "Rock",
    decade: "1990s",
    energy: 4,
    range: "Mid",
    durationMin: 4,
    tags: ["anthem", "throwback"],
  },
  {
    id: "ring-of-fire",
    title: "Ring of Fire",
    artist: "Johnny Cash",
    genre: "Country",
    decade: "1960s",
    energy: 3,
    range: "Low",
    durationMin: 3,
    tags: ["classic", "singalong"],
  },
  {
    id: "stacys-mom",
    title: "Stacy's Mom",
    artist: "Fountains of Wayne",
    genre: "Rock",
    decade: "2000s",
    energy: 4,
    range: "Mid",
    durationMin: 3,
    tags: ["fun", "crowd"],
  },
];

const MOBILE_MEDIA_QUERY = "(max-width: 900px)";
const LIBRARY_INITIAL_COUNT_DESKTOP = 180;
const LIBRARY_INITIAL_COUNT_MOBILE = 45;
const LIBRARY_BATCH_SIZE_DESKTOP = 120;
const LIBRARY_BATCH_SIZE_MOBILE = 35;
const SUGGESTION_LIMIT = 10;

const SONG_LIBRARY = buildSongLibrary();

const STORAGE_KEY = "stage-queue-playlist-v1";

const state = {
  search: "",
  genre: "",
  range: "",
  playlistIds: [],
  activePanel: "library",
  libraryVisibleCount: getLibraryInitialCount(),
};

const songById = new Map(SONG_LIBRARY.map((song) => [song.id, song]));

const mobilePanelNav = document.querySelector("#mobilePanelNav");
const mobilePanelButtons = Array.from(
  document.querySelectorAll("[data-panel-target]")
);
const panels = Array.from(document.querySelectorAll(".panel[data-panel]"));
const searchInput = document.querySelector("#searchInput");
const genreFilter = document.querySelector("#genreFilter");
const rangeFilter = document.querySelector("#rangeFilter");
const catalogMeta = document.querySelector("#catalogMeta");
const libraryList = document.querySelector("#libraryList");
const playlistList = document.querySelector("#playlistList");
const suggestionList = document.querySelector("#suggestionList");
const clearPlaylistBtn = document.querySelector("#clearPlaylistBtn");
const tryTopPickBtn = document.querySelector("#tryTopPickBtn");
const songCount = document.querySelector("#songCount");
const totalMinutes = document.querySelector("#totalMinutes");
const dominantGenre = document.querySelector("#dominantGenre");
const emptyPlaylistTemplate = document.querySelector("#emptyPlaylistTemplate");
const emptySuggestionsTemplate = document.querySelector(
  "#emptySuggestionsTemplate"
);

function buildSongLibrary() {
  const massiveCatalog =
    typeof MASSIVE_SONG_LIBRARY === "undefined" ? [] : MASSIVE_SONG_LIBRARY;

  const merged = [...CORE_SONG_LIBRARY, ...massiveCatalog];
  const deduped = new Map();

  merged.forEach((rawSong, index) => {
    const song = normalizeSong(rawSong, index);
    if (!song) return;

    const dedupeKey = `${canonicalizeTitle(song.title)}::${song.artist.toLowerCase()}`;
    if (!deduped.has(dedupeKey)) {
      deduped.set(dedupeKey, song);
    }
  });

  return [...deduped.values()].sort((a, b) => {
    const titleCompare = a.title.localeCompare(b.title);
    if (titleCompare !== 0) return titleCompare;
    return a.artist.localeCompare(b.artist);
  });
}

function normalizeSong(song, index) {
  if (!song || typeof song !== "object") return null;

  const title = String(song.title || "").trim();
  const artist = String(song.artist || "").trim();
  if (!title || !artist) return null;
  if (!isLikelyKaraokeOption(title, artist)) return null;

  const normalizedTags = Array.isArray(song.tags)
    ? song.tags
        .map((tag) => String(tag || "").trim().toLowerCase())
        .filter(Boolean)
    : [];

  const energy = clampNumber(Number(song.energy) || 3, 1, 5);
  const durationMin = clampNumber(Number(song.durationMin) || 3, 2, 7);

  return {
    id: String(song.id || createSongId(`${title}-${artist}-${index}`)),
    title,
    artist,
    genre: String(song.genre || "Pop"),
    decade: String(song.decade || "2000s"),
    energy,
    range: normalizeRange(song.range),
    durationMin,
    tags: normalizedTags.length ? [...new Set(normalizedTags)].slice(0, 6) : ["crowd"],
  };
}

function normalizeRange(rangeValue) {
  const value = String(rangeValue || "").toLowerCase();
  if (value === "low") return "Low";
  if (value === "high") return "High";
  return "Mid";
}

function canonicalizeTitle(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/\(([^)]*(version|remaster|remastered|mono|stereo|edit|mix|live)[^)]*)\)/gi, "")
    .replace(/\[([^\]]*(version|remaster|remastered|mono|stereo|edit|mix|live)[^\]]*)\]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isLikelyKaraokeOption(title, artist) {
  const text = `${title} ${artist}`.toLowerCase();
  const blockedPatterns = [
    /\bkidz bop\b/,
    /\bmother goose\b/,
    /\blullaby\b/,
    /\bworkout\b/,
    /\bcrossfit\b/,
    /\bmeditation\b/,
    /\bsleep sounds?\b/,
    /\binstrumental\b/,
    /\bbacking track\b/,
  ];

  if (artist.toLowerCase() === "various artists") return false;

  return !blockedPatterns.some((pattern) => pattern.test(text));
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, Math.round(value)));
}

function createSongId(input) {
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function isMobileView() {
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
}

function getLibraryInitialCount() {
  return isMobileView() ? LIBRARY_INITIAL_COUNT_MOBILE : LIBRARY_INITIAL_COUNT_DESKTOP;
}

function getLibraryBatchSize() {
  return isMobileView() ? LIBRARY_BATCH_SIZE_MOBILE : LIBRARY_BATCH_SIZE_DESKTOP;
}

function resetLibraryWindow() {
  state.libraryVisibleCount = getLibraryInitialCount();
}

function init() {
  resetLibraryWindow();
  hydratePlaylist();
  populateGenreFilter();
  bindEvents();
  render();
}

function hydratePlaylist() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return;

  try {
    const ids = JSON.parse(stored);
    if (Array.isArray(ids)) {
      state.playlistIds = ids.filter((id) => songById.has(id));
    }
  } catch {
    state.playlistIds = [];
  }
}

function persistPlaylist() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.playlistIds));
}

function bindEvents() {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    resetLibraryWindow();
    renderLibrary();
  });

  genreFilter.addEventListener("change", (event) => {
    state.genre = event.target.value;
    resetLibraryWindow();
    renderLibrary();
  });

  rangeFilter.addEventListener("change", (event) => {
    state.range = event.target.value;
    resetLibraryWindow();
    renderLibrary();
  });

  clearPlaylistBtn.addEventListener("click", () => {
    state.playlistIds = [];
    persistPlaylist();
    render();
  });

  tryTopPickBtn.addEventListener("click", () => {
    const topPick = getSuggestions()[0];
    if (!topPick) return;
    addToPlaylist(topPick.id);
  });

  mobilePanelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activePanel = button.dataset.panelTarget;
      renderPanelVisibility();
    });
  });

  const mediaQueryList = window.matchMedia(MOBILE_MEDIA_QUERY);
  const onViewportChange = () => {
    resetLibraryWindow();
    render();
  };

  if (typeof mediaQueryList.addEventListener === "function") {
    mediaQueryList.addEventListener("change", onViewportChange);
  } else if (typeof mediaQueryList.addListener === "function") {
    mediaQueryList.addListener(onViewportChange);
  }
}

function populateGenreFilter() {
  const genres = [...new Set(SONG_LIBRARY.map((song) => song.genre))].sort();
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.append(option);
  });
}

function render() {
  renderLibrary();
  renderPlaylist();
  renderSuggestions();
  renderSummary();
  renderPanelVisibility();
}

function renderPanelVisibility() {
  const mobile = isMobileView();

  if (!mobilePanelNav) return;

  mobilePanelNav.hidden = !mobile;

  panels.forEach((panel) => {
    const shouldShow = !mobile || panel.dataset.panel === state.activePanel;
    panel.classList.toggle("is-mobile-hidden", !shouldShow);
  });

  mobilePanelButtons.forEach((button) => {
    const isActive = button.dataset.panelTarget === state.activePanel;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderLibrary() {
  const songs = getFilteredLibrary();
  const visibleSongs = songs.slice(0, state.libraryVisibleCount);
  libraryList.innerHTML = "";
  catalogMeta.textContent = `${songs.length.toLocaleString()} matches • ${SONG_LIBRARY.length.toLocaleString()} total options`;

  if (!visibleSongs.length) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "No matching songs. Try removing one filter.";
    libraryList.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  visibleSongs.forEach((song) => {
    const inPlaylist = state.playlistIds.includes(song.id);
    const item = createSongItem(song, {
      actionLabel: inPlaylist ? "Added" : "Add",
      actionDisabled: inPlaylist,
      onAction: () => addToPlaylist(song.id),
    });
    fragment.append(item);
  });

  libraryList.append(fragment);

  if (songs.length > state.libraryVisibleCount) {
    const remainingCount = songs.length - state.libraryVisibleCount;
    const loadCount = Math.min(remainingCount, getLibraryBatchSize());

    const loadMoreItem = document.createElement("li");
    loadMoreItem.className = "load-more-item";

    const loadMoreButton = document.createElement("button");
    loadMoreButton.type = "button";
    loadMoreButton.className = "btn accent load-more-btn";
    loadMoreButton.textContent = `Show ${loadCount.toLocaleString()} more songs`;
    loadMoreButton.addEventListener("click", () => {
      state.libraryVisibleCount += getLibraryBatchSize();
      renderLibrary();
    });

    loadMoreItem.append(loadMoreButton);
    libraryList.append(loadMoreItem);

    const limited = document.createElement("li");
    limited.className = "empty-state";
    limited.textContent = `Showing ${state.libraryVisibleCount.toLocaleString()} of ${songs.length.toLocaleString()} matches.`;
    libraryList.append(limited);
  }
}

function renderPlaylist() {
  playlistList.innerHTML = "";

  if (!state.playlistIds.length) {
    playlistList.append(emptyPlaylistTemplate.content.cloneNode(true));
    return;
  }

  const fragment = document.createDocumentFragment();
  state.playlistIds.forEach((songId, index) => {
    const song = songById.get(songId);
    const item = createSongItem(song, {
      actionLabel: "Remove",
      onAction: () => removeFromPlaylist(songId),
      customControls: buildPlaylistControls(index),
    });
    fragment.append(item);
  });

  playlistList.append(fragment);
}

function renderSuggestions() {
  suggestionList.innerHTML = "";
  const suggestions = getSuggestions();
  tryTopPickBtn.disabled = suggestions.length === 0;

  if (!suggestions.length) {
    suggestionList.append(emptySuggestionsTemplate.content.cloneNode(true));
    return;
  }

  const fragment = document.createDocumentFragment();
  suggestions.forEach((suggestion) => {
    const item = createSongItem(suggestion, {
      actionLabel: "Add",
      actionDisabled: state.playlistIds.includes(suggestion.id),
      onAction: () => addToPlaylist(suggestion.id),
      subtitle: suggestion.reason,
    });
    fragment.append(item);
  });
  suggestionList.append(fragment);
}

function renderSummary() {
  const playlistSongs = getPlaylistSongs();
  songCount.textContent = String(playlistSongs.length);

  const duration = playlistSongs.reduce((sum, song) => sum + song.durationMin, 0);
  totalMinutes.textContent = `${duration} min`;

  if (!playlistSongs.length) {
    dominantGenre.textContent = "Pick your first song";
    return;
  }

  const genreCounts = countBy(playlistSongs, "genre");
  const topGenre = getTopEntry(genreCounts);
  dominantGenre.textContent = topGenre
    ? `${topGenre.key} set`
    : "Mixed playlist";
}

function getFilteredLibrary() {
  return SONG_LIBRARY.filter((song) => {
    if (state.genre && song.genre !== state.genre) return false;
    if (state.range && song.range !== state.range) return false;

    if (state.search) {
      const haystack = `${song.title} ${song.artist} ${song.genre} ${song.tags.join(
        " "
      )}`.toLowerCase();
      if (!haystack.includes(state.search)) return false;
    }
    return true;
  });
}

function getPlaylistSongs() {
  return state.playlistIds.map((id) => songById.get(id)).filter(Boolean);
}

function getSuggestions() {
  const playlistSongs = getPlaylistSongs();
  const candidates = SONG_LIBRARY.filter((song) => !state.playlistIds.includes(song.id));

  if (!playlistSongs.length) {
    return candidates
      .slice()
      .sort((a, b) => getSeedSuggestionScore(b) - getSeedSuggestionScore(a))
      .slice(0, SUGGESTION_LIMIT)
      .map((song) => ({ ...song, reason: "Crowd-friendly opener" }));
  }

  const artists = new Set(playlistSongs.map((song) => song.artist));
  const genreAffinity = buildAffinityMap(playlistSongs, "genre");
  const decadeAffinity = buildAffinityMap(playlistSongs, "decade");
  const rangeAffinity = buildAffinityMap(playlistSongs, "range");
  const tagAffinity = buildTagAffinity(playlistSongs);
  const averageEnergy =
    playlistSongs.reduce((sum, song) => sum + song.energy, 0) / playlistSongs.length;
  const averageDuration =
    playlistSongs.reduce((sum, song) => sum + song.durationMin, 0) / playlistSongs.length;

  return candidates
    .map((candidate) => {
      const nearestMatches = playlistSongs
        .map((song) => ({
          song,
          similarity: calculateSongSimilarity(candidate, song),
        }))
        .sort((a, b) => b.similarity - a.similarity);

      const closestMatch = nearestMatches[0];
      const neighborhoodScore =
        nearestMatches
          .slice(0, Math.min(3, nearestMatches.length))
          .reduce((sum, match) => sum + match.similarity, 0) /
        Math.max(1, Math.min(3, nearestMatches.length));

      const genreScore = genreAffinity.get(candidate.genre) || 0;
      const decadeScore = decadeAffinity.get(candidate.decade) || 0;
      const rangeScore = rangeAffinity.get(candidate.range) || 0;
      const tagScore = getTagMatchScore(candidate.tags, tagAffinity);
      const energyScore = 1 - Math.min(Math.abs(candidate.energy - averageEnergy), 4) / 4;
      const durationScore =
        1 - Math.min(Math.abs(candidate.durationMin - averageDuration), 4) / 4;
      const noveltyScore = artists.has(candidate.artist) ? -0.45 : 0.5;
      const crowdBoost = candidate.tags.includes("crowd") ? 0.14 : 0;

      const score =
        neighborhoodScore * 4.3 +
        genreScore * 2.1 +
        decadeScore * 0.8 +
        rangeScore * 0.9 +
        tagScore * 1.8 +
        energyScore * 1.6 +
        durationScore * 0.55 +
        noveltyScore +
        crowdBoost;

      return {
        ...candidate,
        score,
        reason: buildRecommendationReason({
          candidate,
          closestMatch,
          genreScore,
          tagScore,
          energyScore,
          noveltyScore,
        }),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, SUGGESTION_LIMIT);
}

function getSeedSuggestionScore(song) {
  let score = song.energy * 0.75;
  if (song.tags.includes("crowd")) score += 1.2;
  if (song.tags.includes("singalong")) score += 1;
  if (song.tags.includes("dance")) score += 0.7;
  if (song.tags.includes("anthem")) score += 0.8;
  return score;
}

function buildAffinityMap(items, key) {
  const counts = countBy(items, key);
  const map = new Map();
  counts.forEach((count, value) => {
    map.set(value, count / items.length);
  });
  return map;
}

function buildTagAffinity(items) {
  const counts = new Map();
  items.forEach((item) => {
    item.tags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    });
  });

  const affinity = new Map();
  counts.forEach((count, tag) => {
    affinity.set(tag, count / items.length);
  });
  return affinity;
}

function getTagMatchScore(tags, tagAffinity) {
  if (!tags.length) return 0;
  return tags.reduce((sum, tag) => sum + (tagAffinity.get(tag) || 0), 0) / tags.length;
}

function calculateSongSimilarity(songA, songB) {
  const genreScore = songA.genre === songB.genre ? 1 : 0;
  const decadeScore = songA.decade === songB.decade ? 1 : 0;
  const rangeScore = songA.range === songB.range ? 1 : 0;
  const energyScore = 1 - Math.min(Math.abs(songA.energy - songB.energy), 4) / 4;
  const durationScore =
    1 - Math.min(Math.abs(songA.durationMin - songB.durationMin), 4) / 4;
  const tagScore = getJaccardScore(songA.tags, songB.tags);

  return (
    genreScore * 0.32 +
    decadeScore * 0.12 +
    rangeScore * 0.1 +
    energyScore * 0.2 +
    durationScore * 0.08 +
    tagScore * 0.18
  );
}

function getJaccardScore(tagsA, tagsB) {
  const setA = new Set(tagsA);
  const setB = new Set(tagsB);
  const union = new Set([...setA, ...setB]);
  if (!union.size) return 0;

  let shared = 0;
  setA.forEach((tag) => {
    if (setB.has(tag)) shared += 1;
  });

  return shared / union.size;
}

function buildRecommendationReason({
  candidate,
  closestMatch,
  genreScore,
  tagScore,
  energyScore,
  noveltyScore,
}) {
  const reasons = [];

  if (closestMatch && closestMatch.similarity >= 0.74) {
    reasons.push(`Similar style to "${closestMatch.song.title}"`);
  }
  if (genreScore >= 0.34) {
    reasons.push(`Strong ${candidate.genre} match`);
  }
  if (tagScore >= 0.28) {
    reasons.push("Mood and tempo line up");
  }
  if (energyScore >= 0.8) {
    reasons.push("Energy fits your current queue");
  }
  if (noveltyScore > 0) {
    reasons.push("Adds artist variety");
  }

  return reasons.slice(0, 2).join(" | ") || "Style-compatible recommendation";
}

function countBy(items, key) {
  const counts = new Map();
  items.forEach((item) => {
    const value = item[key];
    counts.set(value, (counts.get(value) || 0) + 1);
  });
  return counts;
}

function getTopEntry(map) {
  let topEntry = null;
  map.forEach((count, key) => {
    if (!topEntry || count > topEntry.count) {
      topEntry = { key, count };
    }
  });
  return topEntry;
}

function addToPlaylist(songId) {
  if (state.playlistIds.includes(songId)) return;
  state.playlistIds.push(songId);
  persistPlaylist();
  render();
}

function removeFromPlaylist(songId) {
  state.playlistIds = state.playlistIds.filter((id) => id !== songId);
  persistPlaylist();
  render();
}

function moveInPlaylist(index, direction) {
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= state.playlistIds.length) return;
  [state.playlistIds[index], state.playlistIds[nextIndex]] = [
    state.playlistIds[nextIndex],
    state.playlistIds[index],
  ];
  persistPlaylist();
  render();
}

function buildPlaylistControls(index) {
  const wrap = document.createElement("div");
  wrap.className = "playlist-controls";

  const up = document.createElement("button");
  up.type = "button";
  up.className = "btn";
  up.textContent = "Up";
  up.disabled = index === 0;
  up.addEventListener("click", () => moveInPlaylist(index, -1));

  const down = document.createElement("button");
  down.type = "button";
  down.className = "btn";
  down.textContent = "Down";
  down.disabled = index === state.playlistIds.length - 1;
  down.addEventListener("click", () => moveInPlaylist(index, 1));

  wrap.append(up, down);
  return wrap;
}

function createSongItem(
  song,
  { actionLabel, onAction, actionDisabled = false, customControls, subtitle = "" }
) {
  const li = document.createElement("li");
  li.className = "song-item";

  const songMain = document.createElement("div");
  songMain.className = "song-main";

  const textWrap = document.createElement("div");
  const title = document.createElement("p");
  title.className = "song-title";
  title.textContent = song.title;
  const artist = document.createElement("p");
  artist.className = "song-artist";
  artist.textContent = song.artist;
  textWrap.append(title, artist);

  const controlsWrap = document.createElement("div");
  if (customControls) controlsWrap.append(customControls);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn";
  button.textContent = actionLabel;
  button.disabled = actionDisabled;
  button.addEventListener("click", onAction);
  controlsWrap.append(button);

  songMain.append(textWrap, controlsWrap);

  const meta = document.createElement("div");
  meta.className = "meta";
  [song.genre, song.decade, `${song.range} range`, `${song.durationMin} min`].forEach(
    (label) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = label;
      meta.append(chip);
    }
  );

  li.append(songMain, meta);

  if (subtitle) {
    const reason = document.createElement("p");
    reason.className = "reason";
    reason.textContent = subtitle;
    li.append(reason);
  }

  return li;
}

init();
