# UrbanFlow User API

- `GET /api/users/me` - current profile.
- `PUT /api/users/me` - update permitted profile fields.
- `GET /api/users` - administrator-only user list.
- `PUT /api/users/{id}/role` - administrator-only role change.

Role changes are audited.
