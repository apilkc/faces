# Nepali Faces

**Website:** [apilkc.github.io/faces](https://apilkc.github.io/faces/)

Open the website above to run the interactive generator—no installation is required.

A dependency-free browser application that creates 144 deterministic, fictional hand-drawn character portraits. Open `index.html` through a local web server (ES modules require HTTP), for example:

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Inspiration

This project was inspired by Mannay 🌹’s coding-doodles post, [“You can just draw faces with javascript”](https://x.com/mannay/status/2087522034351796728), and developed into an original generative study of fictional Nepali characters. The implementation and generated portraits do not trace or reproduce individual source faces.

## Architecture

`src/app.js` contains the seeded PRNG, population metadata generator, similarity rejection, irregular SVG path construction, portrait renderer, editor, filtering, and SVG/PNG export. `src/styles.css` provides the responsive paper-studio interface. No uncontrolled randomness is used in portrait drawing.

The same seed reproduces the same metadata and drawing. Population generation rejects candidates with more than 80% feature similarity to an accepted character. Every portrait can be edited, regenerated, exported as SVG, or rasterized to a transparent PNG. The full 12 × 12 population exports as one SVG poster.

## Visual principles

Character over polish; variation over symmetry; drawing over vector geometry; observation over stereotype. See `STYLE_ANALYSIS.md` for the reference-derived grammar.
