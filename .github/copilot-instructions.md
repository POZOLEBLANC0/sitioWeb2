**Project Overview**
- **Type**: Static single-page website (no backend). Entry point is `index.html` at the repository root.
- **Primary folders**: `CSS/` contains styles, `JS/` contains JavaScript. Note the repository uses uppercase folder names.

# AI Agent Instructions — sitioWeb2

Short, practical guidance for AI contributors working on this repo.

Project overview
- Type: static single-page website (no backend). Single entry: `index.html` at repository root.
- Main folders: `CSS/` (styles), `JS/` (scripts), `images/` (static assets). Folder names use uppercase; preserve this casing.

How to preview & debug
- Serve the repo root (absolute `/` paths require an HTTP server). Quick options:

```bash
python -m http.server 8000
# or use VS Code Live Server extension
```

- Open `http://localhost:8000` and use browser DevTools for console/Network errors. Common issue: 404s when files are requested with leading `/` but server not started.
- Note: deployment environments may be case-sensitive; keep `CSS/` and `JS/` capitalization consistent.

Architecture & data flow (what to know)
- Single HTML page (`index.html`) links `CSS/style.css` and `/JS/function.js`. There is no framework or router.
- All dynamic behavior is DOM-based: `JS/function.js` exposes global functions that HTML calls via inline attributes (e.g., `onclick="mostrarAlerta()"`). Communication between components is via the DOM and these globals.
- No build step, bundler, or backend services. Adding those is allowed only after coordinating and documenting changes in `README.md`.

Project-specific conventions
- Keep CSS in `CSS/` and JS in `JS/`. Do not introduce duplicate directories or change the root-based paths in `index.html` unless confirmed with the repo owner.
- CSS style: ID and element selectors are used (e.g., `#encabezado`, `p`, `h1`). Keep styles minimal and centralized in `CSS/style.css`.
- JS pattern: global functions in `JS/function.js` called from HTML. If you refactor to modules or event listeners, update `index.html` script tags and inline attributes accordingly.

Key files to inspect
- `index.html` — single entry, includes links to `/CSS/style.css` and `/JS/function.js` and contains visible copy (Spanish in places).
- `CSS/style.css` — central stylesheet using ID selectors.
- `JS/function.js` — global helper functions like `mostrarAlerta()`.

Development rules & PR guidance
- Make small, focused changes (one logical change per commit/PR).
- If you add tooling (formatter, linter, bundler, CI), update `README.md` with commands and rationale and ask the repo owner before changing root paths or folder casing.
- Preserve visible copy language unless the owner requests an internationalization change.

When to ask the human
- Any change that modifies user-facing text (Spanish ↔ English).
- Introducing package management, build steps, or CI.
- Changing the repository structure or root-based paths (for example, moving `/CSS/` to `assets/css/`).

Notes & limitations discovered
- No tests or CI exist. There are no external integrations or APIs in the current codebase.
- Hosting may be case-sensitive; test on a real server if you change file or folder names.

If anything here is unclear or you want stricter rules (naming conventions, CSS architecture like BEM, or adding a formatter/CI), tell me which direction and I will update this file.
