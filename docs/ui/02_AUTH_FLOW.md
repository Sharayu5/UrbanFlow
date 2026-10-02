# UrbanFlow UI Authentication Flow

```text
Launch
 -> Authentication Check
 -> Login
 -> Credential Validation
 -> Role Resolution
 -> Dashboard
```

## States
- signed out
- authenticating
- authenticated
- authentication error
- session expired

## Protected areas
Configuration, controller management and administrative functions require authorization.
