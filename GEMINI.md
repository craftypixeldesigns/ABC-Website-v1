# Gemini Instructions for ABC Website

This is a simple static website intended for hosting on GitHub Pages.

## Project Overview
A minimal static site consisting of HTML and a few images.

## Core Mandates
- **Simplicity:** Use vanilla HTML, CSS, and JavaScript. Avoid heavy frameworks or build steps unless explicitly requested.
- **Assets:** Store all images in the `www/img/` directory. These are tracked using **Git LFS** (Large File Storage) to keep the repository lightweight.
- **Paths:** Use relative paths for all internal links and assets to ensure compatibility with GitHub Pages (e.g., `./img/logo.png`).

## Design Fidelity
- **Design Spec:** Always maintain `spec/DESIGN.md` as the source of truth for design tokens, components, and layout logic.
- **Post-Alteration Update:** Whenever you alter the site's structure, styles, or assets, you MUST update `spec/DESIGN.md` to reflect these changes (e.g., new paths, updated colors, or modified components).

## Maintenance
- When adding new pages, ensure they follow the same minimal style.
- Keep the `index.html` clean and well-structured.

## Testing Strategy
- **Local Web Server:** Tests are run against a locally hosted version of the `www/` directory (served at `http://127.0.0.1:8080`) to ensure 1:1 replication before deployment.
- **Non-Interactive Execution:** Always invoke Playwright tests non-interactively to avoid terminal prompts. Use:
  `CI=true npx playwright test`
