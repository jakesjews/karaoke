# Stage Queue: Karaoke Playlist Builder

Small static web app for building a karaoke playlist and getting song suggestions based on your queue.

## Features

- Browse a built-in karaoke song library.
- Includes a massive 18,000+ song catalog for broad song options.
- Search/filter songs by title, artist, genre, and vocal range.
- Build your playlist with add/remove/reorder controls.
- Get recommendation cards from a style-based matching engine.
- Suggestion list uses incremental "show more" pagination (10 at a time).
- Save playlist state in `localStorage`.
- Mobile-friendly layout tuned for touch controls.
- Mobile tab switcher and incremental "show more" loading for large lists.

## Regenerate Catalog

The catalog is generated from iTunes metadata and kept in a single bundled file.

```bash
node /Users/jacob/dev/karaoke/scripts/generate-song-catalog.mjs --target-total 18200
```

Notes:
- The raw `song-catalog.js` file can be multiple megabytes after expansion.
- Vercel serves compressed responses (gzip/brotli), so transfer size is much smaller.
- Recommendation and ranking logic in `app.js` is unchanged by regeneration.

## Run locally

Open `index.html` in a browser, or run a static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
