const SONG_LIBRARY = [
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

const STORAGE_KEY = "stage-queue-playlist-v1";

const state = {
  search: "",
  genre: "",
  range: "",
  playlistIds: [],
};

const songById = new Map(SONG_LIBRARY.map((song) => [song.id, song]));

const searchInput = document.querySelector("#searchInput");
const genreFilter = document.querySelector("#genreFilter");
const rangeFilter = document.querySelector("#rangeFilter");
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

function init() {
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
    renderLibrary();
  });

  genreFilter.addEventListener("change", (event) => {
    state.genre = event.target.value;
    renderLibrary();
  });

  rangeFilter.addEventListener("change", (event) => {
    state.range = event.target.value;
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
}

function renderLibrary() {
  const songs = getFilteredLibrary();
  libraryList.innerHTML = "";

  if (!songs.length) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "No matching songs. Try removing one filter.";
    libraryList.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  songs.forEach((song) => {
    const inPlaylist = state.playlistIds.includes(song.id);
    const item = createSongItem(song, {
      actionLabel: inPlaylist ? "Added" : "Add",
      actionDisabled: inPlaylist,
      onAction: () => addToPlaylist(song.id),
    });
    fragment.append(item);
  });

  libraryList.append(fragment);
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
      .sort((a, b) => b.energy - a.energy)
      .slice(0, 6)
      .map((song) => ({ ...song, reason: "Strong crowd reaction pick" }));
  }

  const genreCounts = countBy(playlistSongs, "genre");
  const decadeCounts = countBy(playlistSongs, "decade");
  const artists = new Set(playlistSongs.map((song) => song.artist));
  const averageEnergy =
    playlistSongs.reduce((sum, song) => sum + song.energy, 0) / playlistSongs.length;

  const topGenre = getTopEntry(genreCounts)?.key;
  const topDecade = getTopEntry(decadeCounts)?.key;

  return candidates
    .map((candidate) => {
      let score = 0;
      const reasons = [];

      if (topGenre && candidate.genre === topGenre) {
        score += 3;
        reasons.push(`Matches your ${topGenre} streak`);
      } else if (playlistSongs.length >= 3) {
        score += 1.4;
        reasons.push("Adds style variety");
      }

      const energyDistance = Math.abs(candidate.energy - averageEnergy);
      if (energyDistance <= 1) {
        score += 2.1;
        reasons.push("Fits your current energy level");
      } else if (energyDistance <= 2) {
        score += 0.8;
      }

      if (topDecade && candidate.decade === topDecade) {
        score += 1.1;
        reasons.push(`Keeps the ${topDecade} vibe`);
      }

      if (artists.has(candidate.artist)) {
        score -= 1.2;
      } else {
        score += 1;
        reasons.push("Brings in a fresh artist");
      }

      if (candidate.tags.includes("crowd")) {
        score += 0.9;
      }
      if (candidate.tags.includes("duet")) {
        score += 0.4;
      }

      return {
        ...candidate,
        score,
        reason: reasons.slice(0, 2).join(" | ") || "Good fit for this set",
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
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
