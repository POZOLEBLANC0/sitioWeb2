**Project Overview**
- **Type**: Static single-page website (no backend). Entry point is `index.html` at the repository root.
- **Primary folders**: `CSS/` contains styles, `JS/` contains JavaScript. Note the repository uses uppercase folder names.

**How To Preview**
- **Local HTTP server**: This project uses absolute paths in `index.html` (e.g. `/CSS/style.css` and `/JS/function.js`). Serve the repo root with a simple HTTP server instead of opening the file directly, for example:

```
python -m http.server 8000
```

Then open `http://localhost:8000`.
- **VS Code**: Use the Live Server extension to preview; it serves from project root and resolves the leading `/` paths.

**Key Files & Patterns**
- **`index.html`**: Single entry HTML — contains links to styles and scripts (uses `/CSS/style.css` and `/JS/function.js`). Text content is Spanish in places; preserve language unless asked to internationalize.
- **`CSS/style.css`**: Global styles. Selectors use IDs (e.g. `#encabezado`) and element selectors (`p`, `h1`). Keep rules minimal and centralized here.
- **`JS/function.js`**: Small script with global functions (example: `mostrarAlerta()`); scripts are included with a `<script src="/JS/function.js"></script>` tag at the bottom of `index.html`.

**Editing & Implementation Conventions (discoverable)**
- Keep CSS in `CSS/` and JS in `JS/` — do not create contradictory directories.
- Paths in `index.html` use leading `/`. Make changes knowing these are root-based URLs when served.
- JavaScript uses global functions called from inline attributes (e.g. `onclick="mostrarAlerta()"`). If you refactor to event listeners, update `index.html` accordingly.
- The repo contains no build, test, or package manager files. Add them only if introducing a new workflow, and document the change in the README.

**Examples from this codebase**
- Link to stylesheet (in `index.html`): `<link rel="stylesheet" href="/CSS/style.css">`
- Example JS function (in `JS/function.js`):

```javascript
function mostrarAlerta() {
  alert("¡Bienvenido a mi sitio web!");
}
```
- Example CSS pattern: `#encabezado` is centered and set to `width: 50%` in `CSS/style.css`.

**PR & Commit Guidance for AI agents**
- Make small, focused changes. One logical change per commit/PR.
- When adding tooling (e.g. formatter, linter, or build), include a short README section describing commands and why the tool was chosen.

**When to Ask the Human**
- Language changes (Spanish ⇄ English) or changes to visible copy.
- Any addition of build tooling or dependency management (npm, pip, etc.).
- Structural changes that alter expected root paths (e.g., changing `/CSS/` to `assets/css/`).

**What I could not infer**
- No test or CI configuration exists. If you add CI, include commands to run preview and a minimal smoke test.

If anything here is unclear or you want more strict rules (naming conventions, CSS architecture like BEM, or adding a formatter/CI), tell me which direction and I will update this file accordingly.
