# Nepal Mobility Generator

The Mobility module preserves the existing 120-item seeded library, Nepal-specific taxonomy, filters, metadata, exports, and Scene adapter while replacing the old symbolic renderer with mechanical geometry.

## Geometry pipeline

`type → dimensions → axles and contact points → frame/body envelope → view → projection → low-roughness line rendering`

`src/mobility-engine.js` contains the dimension library, family generators, wheel primitives, view renderers, validation, prototype population, and SVG output. Mechanical jitter is deliberately lower than vegetation or portrait jitter.

Every asset exposes dimensions, axle positions, wheel radius, footprint, heading, movement, passenger and cargo state, context weights, and LOD. Scene rendering places the footprint on a lane center and derives screen height from the shared Roads/Scenes camera rather than a type-specific scale hack.

## Development sheets

Run `npm run render` to generate only the controlled geometry sheets in `output/`:

- Exactly 42 category-balanced prototypes
- True real-world scale comparison
- Wheel geometry comparison
- Axle/body/ground debug construction
- Shared-camera depth test
- Validation report

The ordinary library cards normalize assets to fit their card. The true-scale sheet does not.
