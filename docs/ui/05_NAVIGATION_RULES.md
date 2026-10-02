# UrbanFlow Navigation Rules

## Rules
1. Show only screens allowed for the user's role.
2. Preserve the selected intersection while navigating monitoring pages.
3. Preserve experiment context when moving between configuration and results.
4. Require confirmation before destructive configuration changes.
5. Never treat a browser navigation event as a signal-control command.
6. Return users to a stable screen after session expiry.

## Deep navigation
Every important monitoring and experiment screen should have a stable route.
