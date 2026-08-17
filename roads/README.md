# Roads + Streetscape

The roads module is a geometry-first street illustration system for the Nepal Sketch Library. It models an approximate three-dimensional world (`x` across the street, `y` along it, `z` in height) and only roughens paths after projection.

## Pipeline

`typology → cross-section → metric widths → edges and infrastructure → frontage → alignment → camera projection → vegetation, people and mobility → rough rendering`

`src/street-engine.js` owns geometry, cameras, projection, validation, transformations and SVG rendering. `src/app.js` owns the browser gallery and editor.

## Street model

Each seeded street contains a parameter recipe, ordered cross-section bands with metre widths, a shared camera, a presentation mode and component locks. `projectToScreen()` is the single projection function used by road bands, curbs, drainage, crossings, buildings, trees, people, vehicles and utilities.

## Transformations

`transformStreet(existing, interventions)` clones the existing street and preserves its seed, alignment, camera and frontage identity. It then modifies only the cross-section and design systems. This powers credible existing/proposed comparisons.

## Views and presentation

Views: street level, elevated, axonometric, cross-section and section-perspective.

Presentation: sketch, urban design, diagram and before/after. Accent colour and annotations are optional and never required by the underlying geometry.

## Prototype gate

The output folder contains exactly twelve primary typology prototypes plus perspective, transformation and scale-validation sheets. The 120-scene library is retained as a test catalogue; prototype quality remains the acceptance gate for future expansion.

Run `npm run render` from this directory to rebuild SVG output sheets.

During renderer development this command builds only the staged perspective regression tests. See `RENDERER_CONTRACT.md` for the shared Roads/Scenes geometry rules.
