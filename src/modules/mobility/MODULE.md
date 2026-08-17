# Mobility module

Mobility represents Nepal’s distinctive mixture of people, vehicles, goods and transport behavior. It must generate recognizable transport situations, not isolated generic vehicle icons.

## Asset families

- Walking: pedestrians, school groups, passengers, porters and mobility aids.
- Light mobility: bicycles, motorcycles and scooters, including riders, passengers, helmets, loads and parking.
- Private and hired vehicles: cars, taxis and pickups.
- Public transport: tempos / three-wheelers, microbuses, buses and school transport.
- Work and service vehicles: trucks, tractors, construction vehicles, ambulances and other emergency vehicles.
- Contextual systems: rural mobility, freight and goods movement, and cable cars or ropeways where geographically relevant.

## Composition families

The generator should model curbside parking, informal stopping, boarding and alighting, roof or rear loads where contextually accurate, passenger clustering, overtaking, mixed speeds, lane ambiguity, pedestrian interaction, queues and traffic compositions.

## Dependency boundary

Mobility may import the shared drawing engine and People assets. It may receive road or junction geometry as scene context, but it must not generate the fixed street substrate. Roads + Streetscape owns that responsibility.
