# Stage Queue: Karaoke Playlist Builder

Small static web app for building a karaoke playlist and getting song suggestions based on your queue.

## Features

- Browse a built-in karaoke song library.
- Includes a massive 3,200-song catalog for broad song options.
- Search/filter songs by title, artist, genre, and vocal range.
- Build your playlist with add/remove/reorder controls.
- Get recommendation cards from a style-based matching engine.
- Suggestion list uses incremental "show more" pagination (10 at a time).
- Save playlist state in `localStorage`.
- Mobile-friendly layout tuned for touch controls.
- Mobile tab switcher and incremental "show more" loading for large lists.

## Run locally

Open `index.html` in a browser, or run a static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
