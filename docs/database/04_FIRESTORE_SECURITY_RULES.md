# UrbanFlow Firestore Security Rules

## Access model

### Viewer
Read approved monitoring and result data.

### Researcher
Read data and create/run research experiments.

### Operator
Read live state and perform approved operational actions.

### Administrator
Manage users, intersections, configurations and security-sensitive settings.

## Security principles
- Deny access by default.
- Verify authentication before protected access.
- Verify role before privileged writes.
- Validate intersection ownership/access.
- Never allow a client to write an approved signal decision directly.
- Treat model output as untrusted until validated by the control layer.

## Audit
Configuration changes and privileged operations should generate audit records.
