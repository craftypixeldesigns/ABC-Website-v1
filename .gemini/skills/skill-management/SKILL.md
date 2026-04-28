---
name: skill-management
description: Manage the lifecycle of Gemini CLI skills, including creation, packaging, and installation (workspace or user scope). Use this when tasked with building or updating agent skills.
---

# Skill Management

This skill automates the creation and maintenance of Gemini CLI skills directly within the workspace.

## Core Workflows

### Create a New Workspace Skill
1. **Initialize Temporarily:** 
   ```bash
   node /opt/homebrew/lib/node_modules/@google/gemini-cli/bundle/builtin/skill-creator/scripts/init_skill.cjs <skill-name> --path /tmp
   ```
2. **Move to Workspace:**
   ```bash
   mv /tmp/<skill-name> .gemini/skills/
   ```
3. **Clean Up:** Remove unused template files in `.gemini/skills/<skill-name>/`.

### Update an Existing Skill
Since skills are stored in `.gemini/skills/`, you can edit them directly:
1. Modify files in `.gemini/skills/<skill-name>/`.
2. Commit the changes to the repository.
3. Prompt the user to run `/skills reload`.

## Best Practices
- **Scope:** Prefer `--scope workspace` for project-specific tools to ensure they travel with the code.
- **Naming:** Use kebab-case (e.g., `my-cool-skill`).
- **Description:** Keep the frontmatter description concise as it affects triggering.
