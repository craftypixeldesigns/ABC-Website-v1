---
name: skill-management
description: Manage the lifecycle of Gemini CLI skills, including creation, packaging, and installation (workspace or user scope). Use this when tasked with building or updating agent skills.
---

# Skill Management

This skill automates the creation and maintenance of Gemini CLI skills.

## Core Workflows

### Create a New Skill
1. **Initialize:** 
   ```bash
   node /opt/homebrew/lib/node_modules/@google/gemini-cli/bundle/builtin/skill-creator/scripts/init_skill.cjs <skill-name> --path .
   ```
2. **Develop:** Edit `SKILL.md` and add resources to `scripts/`, `references/`, or `assets/`.
3. **Clean:** Remove unused template files in the generated skill folder.

### Package and Install (Workspace)
To share a skill within a repository:
1. **Package:**
   ```bash
   node /opt/homebrew/lib/node_modules/@google/gemini-cli/bundle/builtin/skill-creator/scripts/package_skill.cjs <skill-folder>
   ```
2. **Install to Workspace:**
   ```bash
   gemini skills install <skill-name>.skill --scope workspace
   ```
3. **Commit:** Add `.gemini/skills/<skill-name>` to Git.

### Update an Existing Skill
1. Edit the source files in `<skill-folder>`.
2. Re-package and re-install as described above.
3. Prompt the user to run `/skills reload`.

## Best Practices
- **Scope:** Prefer `--scope workspace` for project-specific tools to ensure they travel with the code.
- **Naming:** Use kebab-case (e.g., `my-cool-skill`).
- **Description:** Keep the frontmatter description concise as it affects triggering.
