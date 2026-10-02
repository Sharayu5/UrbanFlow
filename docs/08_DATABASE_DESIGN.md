# UrbanFlow - Database Design
Main entities:
- Users
- Intersections
- Lanes
- Traffic Observations
- Agent States
- Signal Decisions
- Experiments
- Experiment Results
- Notifications
- System Logs

High-frequency telemetry should be stored in a suitable time-series/file system rather than as unbounded Firestore documents.
