# UrbanFlow App Lifecycle

## Startup

```text
Initialize
 -> Load configuration
 -> Restore authentication
 -> Establish API connection
 -> Load dashboard
```

## Background/Resume
On resume:
- refresh authentication state;
- revalidate live connection;
- refresh intersection state;
- identify stale data.

## Shutdown
Close live subscriptions and pending UI requests cleanly.
