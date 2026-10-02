# UrbanFlow UI State Management

## State groups

### Authentication
session, user, role.

### Intersection
selected intersection, live phase, lane states.

### Analytics
time range, selected metrics, filters.

### Experiments
selected experiment, run status, results.

### UI
loading, errors, dialogs, notifications.

## Principle
Keep server state separate from local presentation state. Do not duplicate safety-critical control state as an independently editable UI state.
