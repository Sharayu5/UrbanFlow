# UrbanFlow Signal Control API

- `GET /api/intersections/{id}/signal/state`
- `GET /api/intersections/{id}/signal/phase`
- `GET /api/intersections/{id}/signal/decisions/latest`
- `POST /api/intersections/{id}/signal/request`

A signal request is validated by the safety controller before execution.

The client cannot directly set an arbitrary physical signal state.
