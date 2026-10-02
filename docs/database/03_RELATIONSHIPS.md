# UrbanFlow Database Relationships

```text
User
  |
  +---- Experiment
  |
  +---- System Logs

Intersection
  |
  +---- Lanes
  +---- Traffic Observations
  +---- Agent States
  +---- Signal Decisions
  |
  +---- Experiments

Experiment
  |
  +---- Experiment Results
```

## Key relationships
- One intersection has multiple lanes.
- One intersection produces many traffic observations.
- One lane has repeated agent states over time.
- One intersection produces many signal decisions.
- One experiment belongs to a selected controller and scenario.
- One experiment has one or more result summaries.
