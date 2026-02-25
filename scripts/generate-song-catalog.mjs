#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const ITUNES_SEARCH_URL = "https://itunes.apple.com/search";

const DEFAULT_TARGET_TOTAL = 18200;
const DEFAULT_MAX_PER_TERM = 200;
const DEFAULT_CONCURRENCY = 4;
const MAX_RETRIES = 4;

const GENRE_BASE_ENERGY = {
  "Classic Pop": 4,
  Classical: 2,
  Country: 3,
  Dance: 5,
  Disco: 5,
  Funk: 4,
  Gospel: 4,
  "Hip-Hop": 4,
  Indie: 3,
  Jazz: 2,
  Latin: 4,
  Pop: 4,
  "R&B": 3,
  Rock: 4,
  Soul: 3,
};

const GENRE_BASE_TAGS = {
  "Classic Pop": ["throwback", "singalong"],
  Classical: ["dramatic", "showpiece"],
  Country: ["story", "singalong"],
  Dance: ["dance", "high-energy"],
  Disco: ["dance", "crowd"],
  Funk: ["groove", "dance"],
  Gospel: ["uplift", "crowd"],
  "Hip-Hop": ["rap", "high-energy"],
  Indie: ["chill", "late-night"],
  Jazz: ["chill", "groove"],
  Latin: ["dance", "crowd"],
  Pop: ["crowd", "singalong"],
  "R&B": ["groove", "chill"],
  Rock: ["anthem", "crowd"],
  Soul: ["groove", "crowd"],
};

const BLOCKED_PATTERNS = [
  /\bkidz bop\b/i,
  /\bmother goose\b/i,
  /\blullab(y|ye)\b/i,
  /\bworkout\b/i,
  /\bcrossfit\b/i,
  /\bmeditation\b/i,
  /\bsleep sounds?\b/i,
  /\bsleep music\b/i,
  /\bwhite noise\b/i,
  /\brain sounds?\b/i,
  /\bnature sounds?\b/i,
  /\bbacking track\b/i,
  /\binstrumentals?\b/i,
  /\bpodcast\b/i,
  /\baudiobook\b/i,
  /\bnursery\b/i,
  /\btoddler\b/i,
  /\bpreschool\b/i,
];

const BLOCKED_ARTIST_PATTERNS = [
  /pinkfong/i,
  /cocomelon/i,
  /the kiboomers/i,
  /little baby bum/i,
  /super simple songs/i,
  /mother goose club/i,
  /the wiggles/i,
  /doggyland/i,
  /the sharksons/i,
  /nursery rhymes/i,
  /\blullab(?:y|ies)\b/i,
  /\bsleep music\b/i,
  /\brelaxing music\b/i,
];

const PRIORITY_TERMS = [
  "karaoke",
  "sing along",
  "party songs",
  "wedding songs",
  "duet",
  "dance",
  "anthem",
  "crowd favorite",
  "road trip songs",
  "girls night songs",
  "throwback hits",
  "pop hits",
  "rock hits",
  "country hits",
  "hip hop hits",
  "r&b hits",
  "latin hits",
  "indie hits",
  "classic pop",
  "disco hits",
  "funk hits",
  "gospel hits",
  "jazz standards",
  "90s hits",
  "80s hits",
  "70s hits",
  "2000s hits",
  "2010s hits",
  "2020s hits",
  "love songs",
  "breakup songs",
  "power ballad",
  "acoustic pop",
  "new wave",
  "alt rock",
  "emo",
  "punk rock",
  "southern rock",
  "motown",
  "soul classics",
  "boogie",
  "afrobeats",
  "reggaeton",
  "salsa",
  "bachata",
  "corridos",
  "bolero",
  "dancehall",
  "edm",
  "house music",
  "techno",
  "trance",
  "bruno mars",
  "taylor swift",
  "beyonce",
  "rihanna",
  "drake",
  "adele",
  "ed sheeran",
  "the weeknd",
  "dua lipa",
  "lady gaga",
  "billie eilish",
  "kanye west",
  "kendrick lamar",
  "travis scott",
  "future",
  "post malone",
  "chris brown",
  "justin bieber",
  "ariana grande",
  "olivia rodrigo",
  "morgan wallen",
  "luke combs",
  "zach bryan",
  "carrie underwood",
  "shania twain",
  "garth brooks",
  "fleetwood mac",
  "queen",
  "journey",
  "bon jovi",
  "u2",
  "coldplay",
  "oasis",
  "the killers",
  "green day",
  "blink 182",
  "linkin park",
  "metallica",
  "red hot chili peppers",
  "nirvana",
  "foo fighters",
  "the beatles",
  "michael jackson",
  "madonna",
  "prince",
  "whitney houston",
  "aretha franklin",
  "stevie wonder",
  "marvin gaye",
  "frank sinatra",
  "elvis presley",
  "abba",
  "celine dion",
  "amy winehouse",
  "mariah carey",
  "shakira",
  "bad bunny",
  "karol g",
  "romeo santos",
  "selena",
  "mana",
  "avicii",
  "calvin harris",
  "daft punk",
  "david guetta",
  "tiesto",
  "pitbull",
  "usher",
  "ne yo",
  "alicia keys",
  "john legend",
  "sza",
  "miguel",
  "khalid",
  "fugees",
  "outkast",
  "eminem",
  "jay z",
  "nicki minaj",
  "doja cat",
  "megan thee stallion",
  "lizzo",
  "sam smith",
  "lewis capaldi",
];

function parseArgs(argv) {
  const options = {
    targetTotal: DEFAULT_TARGET_TOTAL,
    maxPerTerm: DEFAULT_MAX_PER_TERM,
    concurrency: DEFAULT_CONCURRENCY,
    seedFile: null,
  };

  const readValue = (name, index, inlineValue) => {
    if (inlineValue !== undefined) return inlineValue;
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for ${name}`);
    }
    return next;
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }

    if (!arg.startsWith("--")) {
      throw new Error(`Unknown argument: ${arg}`);
    }

    const [name, inlineValue] = arg.split("=", 2);

    if (name === "--target-total") {
      const value = Number(readValue(name, i, inlineValue));
      if (!Number.isFinite(value) || value < 1) {
        throw new Error("--target-total must be a positive integer");
      }
      options.targetTotal = Math.floor(value);
      if (inlineValue === undefined) i += 1;
      continue;
    }

    if (name === "--max-per-term") {
      const value = Number(readValue(name, i, inlineValue));
      if (!Number.isFinite(value) || value < 1 || value > 200) {
        throw new Error("--max-per-term must be between 1 and 200");
      }
      options.maxPerTerm = Math.floor(value);
      if (inlineValue === undefined) i += 1;
      continue;
    }

    if (name === "--concurrency") {
      const value = Number(readValue(name, i, inlineValue));
      if (!Number.isFinite(value) || value < 1 || value > 20) {
        throw new Error("--concurrency must be between 1 and 20");
      }
      options.concurrency = Math.floor(value);
      if (inlineValue === undefined) i += 1;
      continue;
    }

    if (name === "--seed-file") {
      options.seedFile = readValue(name, i, inlineValue);
      if (inlineValue === undefined) i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${name}`);
  }

  return options;
}

function printHelp() {
  console.log(`Usage:\n  node scripts/generate-song-catalog.mjs [options]\n\nOptions:\n  --target-total <n>   Target number of catalog entries (default: ${DEFAULT_TARGET_TOTAL})\n  --max-per-term <n>   iTunes results per term, max 200 (default: ${DEFAULT_MAX_PER_TERM})\n  --concurrency <n>    Concurrent iTunes requests (default: ${DEFAULT_CONCURRENCY})\n  --seed-file <path>   Optional file with custom seed terms (JSON array or newline text)\n  --help               Show help\n`);
}

async function loadSeedTerms(seedFilePath) {
  const raw = await readFile(seedFilePath, "utf8");
  const trimmed = raw.trim();

  if (!trimmed) return [];

  if (trimmed.startsWith("[")) {
    const parsed = JSON.parse(trimmed);
    if (!Array.isArray(parsed)) {
      throw new Error("Seed JSON file must be an array of strings");
    }
    return parsed.map((item) => String(item || "").trim()).filter(Boolean);
  }

  return trimmed
    .split(/\r?\n/)
    .map((line) => line.replace(/#.*/, "").trim())
    .filter(Boolean);
}

function buildDefaultSeedTerms() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const bigrams = [];

  for (const first of letters) {
    for (const second of letters) {
      bigrams.push(`${first}${second}`);
    }
  }

  return dedupeTerms([...PRIORITY_TERMS, ...letters, ...bigrams]);
}

function dedupeTerms(items) {
  const seen = new Set();
  const terms = [];

  for (const raw of items) {
    const term = String(raw || "").trim().toLowerCase();
    if (!term || seen.has(term)) continue;
    seen.add(term);
    terms.push(term);
  }

  return terms;
}

async function fetchTermResults(term, limit) {
  const params = new URLSearchParams({
    media: "music",
    entity: "song",
    term,
    limit: String(limit),
  });

  const url = `${ITUNES_SEARCH_URL}?${params.toString()}`;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          "user-agent": "karaoke-catalog-generator/1.0",
        },
      });

      if (!response.ok) {
        if ((response.status === 429 || response.status >= 500) && attempt < MAX_RETRIES - 1) {
          await sleep(300 * Math.pow(2, attempt));
          continue;
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      if (!payload || !Array.isArray(payload.results)) return [];
      return payload.results;
    } catch (error) {
      if (attempt >= MAX_RETRIES - 1) {
        throw error;
      }
      await sleep(300 * Math.pow(2, attempt));
    }
  }

  return [];
}

function normalizeItunesSong(rawSong) {
  if (!rawSong || typeof rawSong !== "object") return null;

  const trackId = Number(rawSong.trackId);
  if (!Number.isFinite(trackId)) return null;

  const title = String(rawSong.trackName || "").trim();
  const artist = String(rawSong.artistName || "").trim();

  if (!title || !artist) return null;
  if (!isLikelyKaraokeOption(title, artist)) return null;

  const durationMs = Number(rawSong.trackTimeMillis);
  if (!Number.isFinite(durationMs) || durationMs < 90_000 || durationMs > 480_000) {
    return null;
  }

  const decade = getDecade(rawSong.releaseDate);
  const genre = mapGenre(rawSong.primaryGenreName, decade);
  const durationMin = clampNumber(Math.round(durationMs / 60_000), 2, 7);

  const id = `itunes-${trackId}`;
  const hashKey = `${id}:${title}:${artist}`;
  const range = getRangeFromHash(hashKey);
  const energy = getEnergyFromHeuristics({ genre, title, hashKey });
  const tags = deriveTags({ genre, title, decade, energy, durationMin });

  return {
    id,
    title,
    artist,
    genre,
    decade,
    energy,
    range,
    durationMin,
    tags,
  };
}

function mapGenre(primaryGenreName, decade) {
  const genre = String(primaryGenreName || "").toLowerCase();

  if (!genre) return "Pop";
  if (hasAny(genre, ["hip-hop", "hip hop", "rap"])) return "Hip-Hop";
  if (hasAny(genre, ["disco"])) return "Disco";
  if (hasAny(genre, ["funk"])) return "Funk";
  if (hasAny(genre, ["gospel", "christian"])) return "Gospel";
  if (hasAny(genre, ["jazz", "blues", "big band", "swing"])) return "Jazz";
  if (hasAny(genre, ["latin", "reggaeton", "salsa", "bachata", "regional", "corrido"])) {
    return "Latin";
  }
  if (hasAny(genre, ["country", "americana", "bluegrass"])) return "Country";
  if (hasAny(genre, ["classical", "opera", "orchestral", "baroque"])) return "Classical";
  if (hasAny(genre, ["r&b", "rnb"])) return "R&B";
  if (hasAny(genre, ["soul", "motown"])) return "Soul";
  if (hasAny(genre, ["dance", "electronic", "house", "edm", "trance", "techno"])) {
    return "Dance";
  }
  if (hasAny(genre, ["indie", "singer/songwriter", "singer-songwriter", "folk"])) {
    return "Indie";
  }
  if (hasAny(genre, ["rock", "metal", "punk", "grunge", "alternative"])) return "Rock";
  if (hasAny(genre, ["pop", "adult contemporary", "vocal"])) {
    if (["1950s", "1960s", "1970s", "1980s"].includes(decade)) {
      return "Classic Pop";
    }
    return "Pop";
  }

  return "Pop";
}

function hasAny(text, needles) {
  return needles.some((needle) => text.includes(needle));
}

function getDecade(releaseDate) {
  const year = Number.parseInt(String(releaseDate || "").slice(0, 4), 10);
  if (!Number.isFinite(year) || year < 1900 || year > 2099) return "2000s";
  return `${Math.floor(year / 10) * 10}s`;
}

function getRangeFromHash(value) {
  const bucket = stableHash(value) % 3;
  if (bucket === 0) return "Low";
  if (bucket === 1) return "Mid";
  return "High";
}

function getEnergyFromHeuristics({ genre, title, hashKey }) {
  const titleLower = title.toLowerCase();
  let score = GENRE_BASE_ENERGY[genre] ?? 3;

  if (/\b(dance|party|club|remix|rock)\b/.test(titleLower)) score += 1;
  if (/\b(ballad|acoustic|slow|lullaby)\b/.test(titleLower)) score -= 1;

  const jitter = (stableHash(`${hashKey}:energy`) % 3) - 1;
  score += jitter;

  return clampNumber(score, 1, 5);
}

function deriveTags({ genre, title, decade, energy, durationMin }) {
  const tags = new Set(GENRE_BASE_TAGS[genre] || ["crowd"]);
  const titleLower = title.toLowerCase();

  if (/\b(feat\.?|duet|with)\b/.test(titleLower)) tags.add("duet");
  if (/\b(love|heart|kiss|baby|forever)\b/.test(titleLower)) tags.add("singalong");
  if (/\b(night|party|dance|club|friday|saturday)\b/.test(titleLower)) tags.add("dance");
  if (/\b(remix|mix|edit)\b/.test(titleLower)) tags.add("high-energy");
  if (/\b(live|anthem|hero|victory)\b/.test(titleLower)) tags.add("anthem");
  if (/\b(chill|dream|moon|midnight)\b/.test(titleLower)) tags.add("chill");

  if (["1950s", "1960s", "1970s", "1980s", "1990s"].includes(decade)) tags.add("throwback");
  if (energy >= 4) tags.add("high-energy");
  if (durationMin >= 5) tags.add("epic");

  if (!tags.has("crowd") && !tags.has("chill")) {
    tags.add("crowd");
  }

  return [...tags].slice(0, 6);
}

function isLikelyKaraokeOption(title, artist) {
  const artistLower = artist.toLowerCase();
  if (artistLower === "various artists") return false;
  if (BLOCKED_ARTIST_PATTERNS.some((pattern) => pattern.test(artistLower))) return false;

  const text = `${title} ${artist}`.toLowerCase();
  return !BLOCKED_PATTERNS.some((pattern) => pattern.test(text));
}

function canonicalizeTitle(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/\(([^)]*(version|remaster|remastered|mono|stereo|edit|mix|live)[^)]*)\)/gi, "")
    .replace(/\[([^\]]*(version|remaster|remastered|mono|stereo|edit|mix|live)[^\]]*)\]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, Math.round(value)));
}

function stableHash(value) {
  let hash = 2166136261;
  const text = String(value);

  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function serializeCatalog(entries) {
  return [
    "// Auto-generated karaoke song options from iTunes Search API.",
    "// Regenerate with scripts/generate-song-catalog.mjs.",
    "const MASSIVE_SONG_LIBRARY = [",
    entries
      .map((entry) => JSON.stringify(entry, null, 2).split("\n").map((line) => `  ${line}`).join("\n"))
      .join(",\n"),
    "];",
    "",
  ].join("\n");
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const projectRoot = path.resolve(scriptDir, "..");
  const outputPath = path.join(projectRoot, "song-catalog.js");

  const seedTerms = options.seedFile
    ? dedupeTerms(await loadSeedTerms(options.seedFile))
    : buildDefaultSeedTerms();

  if (!seedTerms.length) {
    throw new Error("No seed terms available. Provide --seed-file with one term per line.");
  }

  console.log(`Using ${seedTerms.length.toLocaleString()} seed terms.`);
  console.log(`Targeting at least ${options.targetTotal.toLocaleString()} songs.`);

  const dedupedSongs = new Map();
  const dedupeKeyToId = new Map();

  let nextIndex = 0;
  let completed = 0;
  let stopRequested = false;
  let requestFailures = 0;

  const worker = async () => {
    while (true) {
      if (stopRequested) return;
      const currentIndex = nextIndex;
      nextIndex += 1;

      if (currentIndex >= seedTerms.length) return;

      const term = seedTerms[currentIndex];

      let results = [];
      try {
        results = await fetchTermResults(term, options.maxPerTerm);
      } catch {
        requestFailures += 1;
      }

      for (const rawSong of results) {
        const normalized = normalizeItunesSong(rawSong);
        if (!normalized) continue;

        const dedupeKey = `${canonicalizeTitle(normalized.title)}::${normalized.artist.toLowerCase()}`;
        const existingId = dedupeKeyToId.get(dedupeKey);
        if (existingId) continue;

        dedupeKeyToId.set(dedupeKey, normalized.id);
        dedupedSongs.set(normalized.id, normalized);
      }

      completed += 1;
      if (completed % 25 === 0 || dedupedSongs.size >= options.targetTotal) {
        console.log(
          `Processed ${completed.toLocaleString()}/${seedTerms.length.toLocaleString()} terms; ` +
            `catalog=${dedupedSongs.size.toLocaleString()} songs`
        );
      }

      if (dedupedSongs.size >= options.targetTotal) {
        stopRequested = true;
      }
    }
  };

  await Promise.all(Array.from({ length: options.concurrency }, () => worker()));

  const sortedSongs = [...dedupedSongs.values()].sort((a, b) => {
    const titleCompare = a.title.localeCompare(b.title);
    if (titleCompare !== 0) return titleCompare;
    return a.artist.localeCompare(b.artist);
  });

  const output = serializeCatalog(sortedSongs);
  await writeFile(outputPath, output, "utf8");

  console.log(`Wrote ${sortedSongs.length.toLocaleString()} songs to ${outputPath}`);
  if (requestFailures > 0) {
    console.log(`Warnings: ${requestFailures.toLocaleString()} term request(s) failed and were skipped.`);
  }

  if (sortedSongs.length < options.targetTotal) {
    console.log(
      `Warning: produced ${sortedSongs.length.toLocaleString()} songs, below target ${options.targetTotal.toLocaleString()}.`
    );
    process.exitCode = 2;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
