# Implementation Task: Static Mirror of Always Be Creative

## Objective
Rewrite the website found in `www/` as a completely static, self-hosted version in `www2/`. All assets (images, fonts, scripts) must be hosted locally to ensure zero dependency on Squarespace or external CDNs (except for the Kit.com integration).

## Reference Materials
- **Design Spec:** `spec/DESIGN.md` (Contains grid, colors, fonts, and component details).
- **Existing Site:** `www/index.html` and `www/menu/index.html`.
- **Network Data:** `www.alwaysbecreative.ca.har` (Use this to extract any missing CSS or asset URLs).

## Content to Mirror
### 1. Text Content
- **Main Heading:** "Always Be Creative" (Font: Gloock).
- **Core Pillars:**
  - "reconnect with your creativity."
  - "unplug with analog play."
  - "meet inspiring creatives."
- **About Us Section:** The story of Carrie and the mission of the club.
- **Newsletter Footer:** "subscribe to our newsletter" and "Be the first to know about our next event!".

### 2. Assets (Mirror to `www2/img/` or `www2/assets/`)
- **Logo:** `https://images.squarespace-cdn.com/content/v1/69dd3882460ac267f1328340/13f0e1f8-2766-4bfc-8a0b-85433d377bd9/logo-sm.jpg`
- **Social Icons:** Instagram and TikTok (Extract SVG paths from `www.alwaysbecreative.ca.har` or `www/index.html`).
- **Wavy Lines:** All SVG dividers and marquee components.
- **Videos:** Handle the hosted videos (`video.squarespace-cdn.com`) by either mirroring or providing a robust placeholder if file sizes are prohibitive for Git.

## Technical Requirements
1.  **Directory Structure:** Build everything inside `www2/`.
2.  **Clean HTML/CSS:** Do not copy-paste Squarespace's generated markup. Write clean, semantic HTML and modern CSS based on the tokens in `spec/DESIGN.md`.
3.  **Local Fonts:** Download and serve `Gloock`, `Inter`, and `Palanquin` from `www2/fonts/`.
4.  **Marquee Implementation:** Create a lightweight Vanilla JS scrolling marquee for the "〰" lines.
5.  **Kit.com Integration:** Maintain the functional newsletter script: `https://always-be-creative.kit.com/54bc09f294/index.js`.
6.  **Responsive Design:** Implement the 24-column (desktop) / 8-column (mobile) grid precisely as specified.

## Final Step
Once implemented, verify the site's appearance using visual tests or by opening `www2/index.html` in a browser.
