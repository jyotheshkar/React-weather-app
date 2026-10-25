# Local Weather Demo: API Key Handling

This browser-only React learning demo requires the person running it to enter their own OpenWeatherMap API key. The key is held in component memory for the current tab and is sent directly to OpenWeatherMap over HTTPS when a location is submitted. It is not saved in browser storage or logged by the app.

A password field only masks the display. Browser requests and client-side code are observable. Bundling a key through a frontend environment variable would also expose it and is not a secret-management solution.

Use this source for local learning with a key you control. Do not distribute a shared provider key in a public frontend. A server-side proxy with authentication, limits and server-held credentials is a future architecture change and has not been implemented.

## Configuration and Scope

Enter the key, enter a location and press Enter in the location field. Missing inputs make no request. Request failures show a generic message without logging request objects or credentials.

The repository currently stores source files at its root and lacks a complete Create React App src/public scaffold. This change does not establish that a clean build or a live deployment works.

## Historical Exposure

Removing the current hardcoded value does not revoke it or remove it from Git history, existing deployments, forks, caches, logs or artifacts. The credential owner must revoke/rotate the exposed value and review provider usage separately. No credential was validated, rotated or revoked, and no history rewrite or deployment was performed by this change.
