# UrbanFlow Agent API

- `GET /api/intersections/{id}/agents`
- `GET /api/agents/{agentId}`
- `GET /api/intersections/{id}/agents/states`
- `GET /api/intersections/{id}/project-manager`

Returns Lane Agent observations, demand, waiting/service history and Project Manager state.

The API exposes agent state for monitoring. It does not allow a client to bypass the controller safety layer.
