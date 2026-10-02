# UrbanFlow Common API Responses

## Success

```json
{
  "success": true,
  "data": {},
  "request_id": "..."
}
```

## Error

```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Resource not found"
  },
  "request_id": "..."
}
```

All API responses should be predictable and versionable.
