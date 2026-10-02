# UrbanFlow Firebase Storage

## Storage Use

Firebase Storage may hold:
- uploaded traffic videos;
- experiment artifacts;
- model metadata;
- exported reports;
- dashboard assets.

## Suggested structure

```text
traffic-videos/{intersectionId}/{sessionId}/...
experiments/{experimentId}/...
models/{modelVersion}/...
reports/{experimentId}/...
```

## Rules
- Store metadata separately from binary files.
- Use authenticated upload/download.
- Validate file type and size.
- Do not expose private traffic footage publicly.
- Use retention policies for large video files.
- Store model version and checksum with deployable artifacts.
