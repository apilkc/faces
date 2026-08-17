# Spatial model and validation

- Traffic lanes use approximately 2.75–3.5 m.
- Sidewalks, cycle lanes, buffers, drains, parking and medians are explicit ordered bands.
- A person is 1.72 m; trees and vehicles use the same world coordinate scale.
- Repeated objects are projected from world positions, producing natural distance compression.
- Curbs, drains, crossings and cycle facilities are continuous bands rather than screen-space decoration.
- Existing streets may remain incremental and irregular; proposed transformations may organize them without replacing their context.

`validateStreet()` checks lane range and continuity of sidewalks, cycle facilities and crossings. Rendering keeps geometry separate from the rough-line overlay so a clean geometric underlay remains credible.
