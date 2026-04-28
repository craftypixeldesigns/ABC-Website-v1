---
name: configure-custom-domain
description: Configures GitHub Pages with a custom domain (www.alwaysbecreative.ca) after DNS setup is complete. Use this when the user confirms their DNS records are ready.
---

# Configure Custom Domain for ABC Website

This skill automates the final steps of mapping `www.alwaysbecreative.ca` to this GitHub Pages site.

## Workflow

### 1. Create CNAME File
Since this project deploys from the `www/` directory via GitHub Actions, the `CNAME` file must be placed inside `www/`.

```bash
echo "www.alwaysbecreative.ca" > www/CNAME
```

### 2. Update GitHub Pages Configuration
Use the GitHub CLI to set the custom domain in the repository settings.

```bash
gh api repos/craftypixeldesigns/ABC-Website-v1/pages --method PATCH -f cname='www.alwaysbecreative.ca'
```

### 3. Verify & Enforce HTTPS
Instruct the user that:
- It may take up to 24 hours for the SSL certificate to be issued.
- They should visit the repository settings (Settings > Pages) to ensure "Enforce HTTPS" is checked once the certificate is ready.
