# UrbanFlow API Authentication

## Authentication
Protected endpoints require an authenticated access token.

## Authorization
Endpoints verify the user's role before privileged operations.

## Protected operations
- user administration;
- intersection configuration;
- controller configuration;
- experiment execution;
- operational signal requests.

## Security principle
A valid API token never grants permission to bypass signal safety validation.

## Audit
Privileged API requests should record user, timestamp, endpoint, resource and result.
