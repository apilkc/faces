# Generator modules

Modules own subject knowledge; `../drawing-engine.js` owns the shared visual handwriting.

- `people/` — men, women, age, and occupations. Faces are currently available.
- `vegetation/` — trees, shrubs, and crops. Trees are currently available.
- `buildings/` — urban, semi-urban, and rural architecture.
- `roads-streetscape/` — the fixed public-realm substrate: roads, footpaths, drainage, sidewalks, retaining walls, utilities, street furniture, construction, street edges, and junction geometry.
- `mobility/` — Nepal’s moving transport ecology: walking, cycling, motorcycles, scooters, public transport, private and service vehicles, freight, rural mobility, parking and traffic compositions.
- `scenes/` — composed settlements, bazaars, corridors, and roads.

Planned modules contain manifests only. They become generators when they implement the domain contract documented in `../../ILLUSTRATION_SYSTEM.md`.
