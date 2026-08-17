# Nepal Sketch Library

**Website:** [apilkc.github.io/faces](https://apilkc.github.io/faces/)

Open the website above to run the interactive generator—no installation is required.

A dependency-free Nepal Visual Generator powered by one shared Nepal Sketch Engine. The working system includes People, a 410-asset Vegetation grammar library, Buildings, Roads + Streetscape, Mobility, and an adaptive Scenes composer.

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Inspiration

This project was inspired by Mannay 🌹’s coding-doodles post, [“You can just draw faces with javascript”](https://x.com/mannay/status/2087522034351796728), and developed into an original generative study of fictional Nepali characters. The implementation and generated portraits do not trace or reproduce individual source faces.

## Architecture

`src/drawing-engine.js` owns the shared seeded randomness, `roughLine()`, `roughPath()`, rough ellipses, SVG primitives, paper texture, and export helpers. Domain renderers layer their morphology on top:

```text
NEPAL SKETCH ENGINE
├── PEOPLE
├── VEGETATION
├── BUILDINGS
├── ROADS + STREETSCAPE
├── MOBILITY
└── SCENES
```

`src/library-registry.js` records the complete module taxonomy and availability. Every asset library uses the shared engine; Scenes orchestrates those libraries through adapters. Open the adaptive composer at `scenes/`.

The same seed reproduces the same metadata and drawing. Domain-aware similarity rejection keeps each catalogue varied. Individual studies and complete sheets can be exported as SVG or high-resolution PNG; the Roads viewer also exposes named SVG layers for downstream editing.

## Visual principles

Character over polish; variation over symmetry; drawing over vector geometry; observation over stereotype. See `STYLE_ANALYSIS.md` for the reference-derived grammar.
