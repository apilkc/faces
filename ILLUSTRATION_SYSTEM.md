# Nepal Sketch Engine architecture

The Nepal Sketch Library is one deterministic visual system powered by the Nepal Sketch Engine—not a collection of unrelated generators.

## Shared engine

`src/drawing-engine.js` owns the visual handwriting: seed hashing, reproducible random numbers, rough lines, rough paths, rough ellipses, SVG attributes, paper grain, and browser downloads. A seed and the same options must always produce the same geometry.

## Domain contract

Each domain supplies three concepts:

1. A seeded metadata generator, such as `character(seed)` or `tree(seed)`.
2. A renderer that converts metadata into SVG using shared engine primitives.
3. A population function with domain-aware similarity rejection.

The canonical module taxonomy is:

```text
NEPAL SKETCH ENGINE
├── PEOPLE — men, women, age, occupations
├── VEGETATION — trees, shrubs, crops
├── BUILDINGS — urban, semi-urban, rural
├── ROADS + STREETSCAPE — roads, footpaths, drainage, sidewalks,
│                         retaining walls, utilities, furniture,
│                         construction, street edges, junction geometry
├── MOBILITY — walking, bicycles, motorcycles + scooters, cars + taxis,
│              tempos, microbuses, buses, school transport, trucks,
│              pickups, tractors, construction and emergency vehicles,
│              rural mobility, freight, traffic compositions
└── SCENES — urban neighborhood, peri-urban corridor, bazaar,
             rural settlement, mountain road, Terai settlement
```

People, Vegetation, Buildings, Roads + Streetscape, Mobility, and Scenes are working modules. Scenes consumes every preceding module through adapters; lower-level modules never import Scenes. Roads may compose small Building assets, while Buildings remains independent of Roads.

## Roads versus mobility

Roads + Streetscape generates the stationary physical setting: carriageways, paths, drainage, edges, walls, poles, lights, signs, furniture, stalls, works and junction geometry.

Mobility generates the actors and behavior moving through that setting. It is a Nepal-specific transport system—not a generic vehicle icon set. Besides vehicle morphology, it owns pedestrians, porters, mobility aids, parking arrangements, passenger behavior, traffic behavior, goods movement, mixed traffic compositions and contextually relevant cable-car or ropeway elements.

Mobility may consume People assets for riders, drivers, conductors and passengers. Scenes may compose Roads + Streetscape and Mobility together. Mobility must not own road geometry, drainage or fixed street furniture.

`src/library-registry.js` is the machine-readable source of truth for labels, routes, collection membership, and availability.

## Compatibility rule

Refactors to shared primitives must preserve existing seeded Faces output. Domain-specific visual decisions stay inside their renderer; only reusable drawing behavior moves into the engine.
