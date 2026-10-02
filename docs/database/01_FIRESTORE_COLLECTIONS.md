# UrbanFlow Firestore Collections

## Purpose
Defines operational and configuration collections for UrbanFlow.

## Collections
- users
- intersections
- lanes
- traffic_observations
- agent_states
- signal_decisions
- experiments
- experiment_results
- system_logs
- notifications

## Principle
Firestore stores configuration, users, summaries and operational records. High-frequency telemetry should use suitable time-series/file storage rather than creating an unbounded Firestore write stream.
