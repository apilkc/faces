# Vegetation visual grammar

Generation follows silhouette → trunk → major branches → crown masses → negative space → foliage marks → selective hatching → ground marks.

## Independent dimensions

- Ecology: Terai, Inner Terai, Siwalik/Chure, Mid-Hill, High-Hill, Mountain, urban planted, rural agricultural, river corridor, and institutional landscapes.
- Crown form: round, oval, wide-spreading, upright, columnar, conical, umbrella, irregular, multi-crown, drooping, and sparse.
- Drawing grammar: 20 structurally distinct styles; these are geometry generators rather than filters.
- LOD: 0 symbol, 1 diagram, 2 sketch, and 3 detailed sketch.
- Texture: none, scallop, loop, hook, short curve, broken line, loose scribble, hatch, light cross-hatch, or mixed.

Similarity rejection prioritizes crown silhouette and drawing grammar, followed by branch/trunk architecture, texture, proportions, and ground treatment. Scene adapters may request ecology and LOD without knowing how a tree constructs its marks.
