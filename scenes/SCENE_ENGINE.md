# Adaptive Scene Engine

Scenes orchestrate the five existing asset systems through adapters. A scene is reproducible from its seed and parameter object; it stores child assets, positions, depth, scale, orientation, layer locks, style, and coherence checks.

Generation order is terrain → road → parcels and buildings → drainage → vegetation → utility network → mobility → people → commercial activity → details. Scene-wide parameters influence every stage. Density changes frontage and open space as well as object count. Topography changes terrain, road alignment, drainage, and building placement. Context determines compatible Building and Mobility families probabilistically.

Adapters live in `src/adapters.js`. They expose a small generate/render contract and keep the scene engine independent from library-specific UI. Imported SVGs are stripped of their standalone paper rectangle, scaled by depth, and composed into named scene layers.

Scene state is structured for future temporal transformation: seed, parameters, assets, layout, locks, and style remain separate from the final SVG.
