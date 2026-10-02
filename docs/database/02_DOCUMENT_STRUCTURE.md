# UrbanFlow Firestore Document Structure

## Intersection

```text
intersections/{intersectionId}
  name
  status
  location
  phase_configuration
  safety_configuration
  created_at
  updated_at
```

## Lane

```text
intersections/{intersectionId}/lanes/{laneId}
  approach
  movement
  geometry
  enabled
```

## Experiment

```text
experiments/{experimentId}
  controller
  scenario
  seed
  configuration
  status
  started_at
  completed_at
```

## Design rule
Documents should contain stable configuration and summary data. Large arrays of frame-by-frame telemetry should not be embedded in operational documents.
