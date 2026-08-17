# Scene Rules

- Buildings face and cluster along the road; dense contexts reduce gaps while rural and peri-urban contexts retain open parcels.
- Building context is selected through an adapter and remains probabilistic: rural scenes may contain contemporary construction and semi-urban scenes may retain older structures.
- Trees occupy edge and setback zones rather than the road center.
- Mobility assets follow the road band. People cluster within walkable edge and frontage bands.
- Poles are generated before wires; wires connect adjacent poles. Drains remain continuous along road edges.
- Objects carry a depth value that reduces scale, opacity, and visible detail.
- Hard collisions among building masses are repaired by shifting parcels. Tree canopy, people, vehicles, and wires may overlap softly.
- The complexity budget is controlled by density, activity, vegetation, and mobility sliders rather than a single object-count switch.
- Research emphasis changes layer opacity without destroying scene state.
