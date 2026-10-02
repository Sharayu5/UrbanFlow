# UrbanFlow Deep Links

## Supported deep links

```text
/intersections/:id/live
/intersections/:id/analytics
/experiments/:id
/experiments/:id/results
/agents/:id
```

## Behavior
- Authenticate before opening protected routes.
- Resolve required resources before rendering.
- Show a useful not-found state for deleted resources.
- Preserve query parameters used for filters and time ranges.
