# Geometry and rendering contract

Roads and Scenes now share one world-space street model.

1. Cross-section bands produce cumulative X coordinates in metres.
2. Y is distance along the street and Z is height above `groundHeight(x, y)`.
3. `cameraFor()` creates restrained street-level and elevated camera presets.
4. `projectPoint()` is the canonical pinhole projection and returns screen X/Y, camera depth, and visibility. Axonometric and cross-section modes are explicit alternatives.
5. Buildings are projected façade shells grounded by their base edges. Floors, doors, windows, and awnings are generated inside those shells according to distance.
6. People use feet positions and 1.72 m body scaffolds. Portrait-only assets are never inserted into a scene.
7. Trees, poles, vehicles, curbs, drains, crossings, and façades use the same camera and ground plane.
8. Hand-drawn jitter is applied only after projection and remains below ordinary structural line weight.

The default `npm run render` produces only the controlled regression suite in `tests/`. The mass catalogue is deliberately excluded from the acceptance loop and remains available as `npm run render:catalogue` only after the milestone scenes are approved.

Perspective validation checks that road width decreases with depth, projected object scale decreases, and repeated spacing compresses toward the vanishing region.
