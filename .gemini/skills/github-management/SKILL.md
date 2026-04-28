---
name: github-management
description: Efficiently manage GitHub repositories, including creation, configuration (e.g., Pages), and API interactions using gh CLI and GitHub REST API.
---

# GitHub Management Skill

This skill provides specialized workflows for managing GitHub repositories using the `gh` CLI and GitHub REST API.

## Common Workflows

### Initialize and Create a Repository
To create a repository from a local directory:
1. `git init`
2. `git add . && git commit -m "Initial commit"`
3. `gh repo create <repo-name> --public --source=. --push`

### Enable GitHub Pages (Modern Workflow)
GitHub Pages is best managed via GitHub Actions to allow deploying from any directory (e.g., `./www` or `./dist`).

1. **Create Workflow File:** Create `.github/workflows/static.yml` (using `actions/upload-pages-artifact` and `actions/deploy-pages`).
2. **Switch to Workflow Build:**
   ```bash
   gh api repos/:owner/:repo/pages --method PATCH -f build_type='workflow'
   ```
   *Note: If the PATCH fails with 404, verify the repo name and that Pages is already enabled.*

**Legacy Method (Branch-based):**
```bash
echo '{"source":{"branch":"main","path":"/"}}' | gh api repos/:owner/:repo/pages --method POST --input -
```

### Repository Configuration
- **Rename:** `gh repo rename <new-name>`
- **Delete (with confirmation):** `gh repo delete <owner/repo>`
- **Toggle Features:** `gh repo edit --enable-issues=false --enable-wiki=true`

## API Tips
- Always use `gh api` for features missing from the CLI.
- Ensure JSON payloads are correctly formatted.
- Use `--input -` with piped `echo` for reliable JSON handling in different shells.

## References
- [GitHub API Pages Documentation](https://docs.github.com/rest/pages/pages#create-a-github-pages-site)
- [gh CLI Reference](https://cli.github.com/manual/)
