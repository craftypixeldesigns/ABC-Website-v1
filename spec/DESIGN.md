# Design Specification: Always Be Creative

This document details the design elements and architectural requirements for the static rewrite of the Always Be Creative website. The goal is to preserve all existing design aesthetics while migrating to a static hosting environment on GitHub.

## 1. Global Design Tokens

### 1.1 Color Scheme (HSL Design Tokens)
- **Cream (Light):** `hsla(22, 100%, 99%, 1)` - `--white-hsl`. Primary background.
- **Purple (Black/Dark):** `hsla(277, 58%, 44%, 1)` - `--black-hsl`. Primary text and dark sections.
- **Magenta (Accent):** `hsla(330, 53%, 47%, 1)` - `--accent-hsl`. Interactive elements and highlights.
- **Sky Blue (Light Accent):** `hsla(198, 92%, 79%, 1)` - `--lightAccent-hsl`. Block backgrounds and borders.
- **Yellow (Dark Accent):** `hsla(51, 84%, 55%, 1)` - `--darkAccent-hsl`. Overlays and emphasis.

### 1.2 Typography
- **Headings (H1, H2, H3):** `"Gloock"` (Serif).
- **Body Text:** `"Inter"` (Sans-Serif).
- **Accents/UI:** `"Palanquin"` (Sans-Serif).
- **Utility/Video UI:** `"Clarkson"`, `"Helvetica Neue"`, `Arial`, `sans-serif`.
- **Fallback:** `serif`, `sans-serif`.
- **Font Sizes:**
  - Hero Titles: `4.5rem`.
  - About Titles: `8rem`.
  - Pillar Items: `2.75rem`.
  - Newsletter Titles: `3rem`.
  - Marquee: `2rem`.
  - Standard Body: `1.125rem`.
  - Large Body: `1.25rem`.

### 1.3 Spacing & Grid System (Fluid Engine)
- **Desktop Grid:** 24-column fluid engine grid.
  - **Grid Columns:** `grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(24, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr);`
  - **Grid Gutter:** `11px`.
  - **Row Height:** Calculated using `--row-height-scaling-factor: 0.0215`.
- **Mobile Grid:** 8-column fluid engine grid.
  - **Grid Columns:** `grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(8, minmax(0, 1fr)) minmax(var(--grid-gutter), 1fr);`
- **Section Padding:**
  - Standard Vertical: `7rem`.
- **Blend Modes:** Often set to `normal` or `overlay`.

---

## 2. Components & UI Elements

### 2.1 Buttons
- **Style:** Square or slightly rounded (border-radius: `0px` or `8px`).
- **Standard Classes:** `.btn`.
- **Hover Effects:** `opacity: 0.8`.
- **Dark Mode:** In dark sections (`.bg-dark`), buttons flip colors (white background, black text).

### 2.2 Wavy Lines & Marquee
- **Marquee:** Horizontal scrolling marquee.
  - **Animation Speed:** `40s` (base keyframe loop).
  - **Character:** `〰` (U+3030).
  - **Text Size:** `2rem`.
- **Wavy Divider:** Slow scrolling SVG wavy line used as a section divider.
  - **Animation Speed:** `20s` (base keyframe loop).
  - **Implementation:** Animates `background-position-x` of a repeating SVG background. Spans full width (`max-width: 100%`).
  - **SVG Path:** `M-25 12 Q -12.5 22, 0 12 T 25 12 T 50 12 T 75 12 T 100 12 T 125 12` (Ensures seamless repeat by bleeding path beyond 0-100 viewBox).
- **Testimonial Marquee:** Contains the following quotes:
  - `"that was like therapy"`
  - `"good vibes"`
  - `"we all really loved bouncing ideas off of each other"`
  - `"It really was so fun"`
  - `"It was amazing to just be creating with a group with no technology involved"`

### 2.3 Shapes (About Section)
- **Geometry:** Organic, hand-drawn feel SVG shapes.
- **Path Example:** `M75.9957 152C74.4393 152 72.7717 151.047 72.5493 148.904...` (Organic vertical shape used in the about section).
- **Style:** Translucent (`opacity: 36%` or `hsla(..., 0.36)`).

### 2.4 Panning Hero Image
- **Effect:** A slow, continuous pan from the bottom right to the top left within its container.
- **Implementation:**
  - **Class:** `.panning-image`
  - **Animation:** `pan-hero` (10s, ease-in-out, infinite alternate).
  - **Properties:** Uses `transform: scale(1.1)` to zoom in and `translate` from `(-4%, -4%)` (bottom right) to `(4%, 4%)` (top left).
  - **Container:** `.hero-image-container` with `overflow: hidden`, `aspect-ratio: 16/9`, and `border: 1.5px solid var(--black)`.

### 2.5 Vertical Scrolling Community Art
- **Effect:** A slow, continuous vertical pan (top to bottom) traversing the entire length of the image within its container.
- **Implementation:**
  - **Class:** `.panning-scroll`
  - **Animation:** `pan-scroll` (10s, linear, infinite alternate).
  - **Properties:** Uses `object-fit: cover` and animates `object-position` from `center top` to `center bottom`.
  - **Container:** `.community-art-container` with `overflow: hidden`, `aspect-ratio: 0.75`, and `border: 1.5px solid var(--black)`. Grid span increased to 6 columns.
- **Responsive Handling:**
  - Uses `srcset` and `sizes` for aggressive delivery optimization.
  - Extra-small (`_xs`), small (`_sm`), and original versions are provided to the browser.
  - Browser automatically selects the most efficient image based on viewport width and device pixel density (DPI).
  - Breakpoints include `767px` for mobile and `1200px` for tablets/small desktops.

---

## 3. Responsive Behavior

### 3.1 Breakpoints
- **Desktop:** >= 1025px (24-column grid)
- **Tablet:** 768px - 1024px (12-column grid)
- **Mobile:** <= 767px (8-column grid)

### 3.2 Mobile Layout Implementation (<= 767px)
- **Header:** Logo height reduced to 24px; added a two-line hamburger menu toggle (`.menu-toggle`).
- **Stacking:** All major components (`.hero-content`, `.hero-video`, `.pillars-image`, `.pillars-text`, `.white-box`, `.newsletter-content`) span the full 8-column mobile grid.
- **Typography Scaling:**
    - Hero Titles: `3.5rem`.
    - About Titles: `4rem`.
    - Pillar Items: `2.125rem`.
    - Newsletter Titles: `2.5rem`.
    - Body Text: `1rem` in white-box.
- **Buttons:** Scaled to full width (`width: 100%`) with `50px` border-radius for better touch targets.
- **Reordering:** In the Pillars section, the "View community art" button is moved above the pillar text items using `order: -1` in the flex container.
- **Spacing:** Section padding reduced to `4rem 0`.

### 3.3 Navigation
- **Home:** Links to `index.html`.
- **About:** Links to `about/index.html`.
- **Menu Toggle:** Visible only on mobile; currently a visual placeholder for the navigation menu.

---

## 4. Analytics & Tracking

### 4.1 Google Analytics
- **Integration Type:** Google tag (gtag.js)
- **Tracking ID:** `G-F59K8P678P`
- **Location:** In the `<head>` of all HTML pages.
- **Privacy:** standard default gtag implementation.

---

## 5. Specific Sections

### 5.1 Home Page
- **Main Heading:** "Always Be Creative" (Font: Gloock).
- **Hero Visual:** A panning static image (`img/abc_sign.png`) replaces the video placeholder, using the `.panning-image` class.
- **Community Art Visual:** A vertically scrolling image (`img/community_art.png`) using the `.panning-scroll` class.
- **Core Pillars:** 
  - "reconnect with your creativity."
  - "unplug with analog play."
  - "meet inspiring creatives."
- **Newsletter:** "subscribe to our newsletter" (H3, Gloock).
- **Kit.com Integration:**
  - **Script:** `https://f.convertkit.com/ckjs/ck.5.js`
  - **Form:** Full HTML `seva-form formkit-form` with inline styles and `data-uid="54bc09f294"`.
  - **Action URL:** `https://app.kit.com/forms/9328038/subscriptions`
- **Social Media Icons:**
  - **Style:** Circle border, SVG symbols (`instagram-unauth-icon`, `tiktok-unauth-icon`).

### 5.2 About Page (formerly Menu)
- **Typography:** H1 for "about us" (Gloock).
- **URL Path:** `/about/index.html`.

---

## 6. Technical Constraints for Static Hosting
- **Asset Localisation:** 
  - All images must be hosted in `img/`.
  - Fonts (`Gloock`, `Inter`, `Palanquin`) must be served from `fonts/`.
- **CSS Architecture:** 
  - `style.css` contains all design tokens and grid logic.
- **JavaScript:** 
  - `js/main.js` handles marquee cloning for seamless loops.
- **Icons:** SVG symbols are embedded at the bottom of the HTML files to ensure local availability.
