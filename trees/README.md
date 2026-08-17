# Nepal Vegetation Grammars

The upgraded Vegetation module contains 410 deterministic assets: 250 individual trees, 50 tree groups, 50 shrubs and hedges, 30 architectural symbols, and 30 ground-vegetation elements.

Ecology and representation remain separate. Geographic context and ecological family determine what forms are plausible; crown form, drawing grammar, trunk architecture, texture, asymmetry, negative space, and LOD determine how the asset is drawn. Twenty distinct drawing grammars range from minimal outlines to fragmented, scribbled, hatched, branch-dominant, conifer, palm, and detailed architectural constructions.

The interface filters by asset type, style family, detail, context, and form. Individual trees expose editable metadata, ecology/style/crown/trunk locks, selective randomization, layered SVG export, and transparent high-resolution PNG export.

Run static output generation with:

```sh
cd trees
npm run render
```

Mandatory validation outputs are written to `outputs/`, including the 64-tree grammar sheet, same-ecology/eight-style sheet, foreground-to-symbol LOD sheet, style sheets, and complete 410-asset poster.
