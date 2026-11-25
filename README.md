# Yash Baxi — Personal Portfolio

A responsive personal portfolio built with **HTML, CSS and a small amount of vanilla JavaScript**. It includes the supplied piano performance video and achievement/certificate visuals from the supplied PDF.

## Run locally

1. Download and unzip the portfolio folder.
2. Open `index.html` in a modern browser, or open the folder in VS Code and use Live Server.
3. Keep `styles.css`, `script.js` and the `assets` folder next to `index.html`.

For a local development server, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included

- `index.html` — page content and layout
- `styles.css` — responsive styling and larger, more readable typography
- `script.js` — interactive weekday calculator and country-capital lookup demo
- `assets/` — record and certificate images, piano video, and video poster

## Personalise it

- Add your preferred email and social profile links in the contact/closing section before publishing.
- The capital lookup is a small sample list for the interactive demonstration; extend the `capitals` object in `script.js` to add more countries.
- Replace the piano video or images by replacing the matching files in `assets/` (keep the same filenames, or update their paths in `index.html`).
- The typefaces load from Google Fonts; system fallbacks are included for offline use.
