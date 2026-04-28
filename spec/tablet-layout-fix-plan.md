# Tablet Layout Implementation Plan (1024px Breakpoint)

This plan outlines the steps to fix the "janky" layout on tablet devices (specifically around the 1020px-1024px range) by correctly mapping elements to the 12-column grid and aligning with the approved `tablet.png` mockup.

## 1. HTML Modifications
To match the layout in `tablet.png`, the "View community art" button must be moved so it appears under the scrolling art container rather than the text block.

- **Move Component:** Relocate the `<div class="pillars-btn-container">` (and its contained button) from inside `.pillars-text` to the end of `.pillars-image`.

## 2. CSS Modifications
Update the `@media (max-width: 1024px)` block in `www/css/style.css` with the following grid assignments and styling adjustments:

### Hero Section
- `.hero-content`: `grid-column: 2 / span 6;` (Ensures text has sufficient width to avoid awkward wrapping).
- `.hero-video`: `grid-column: 8 / span 6;` (Aligns video container to the right margin).

### Pillars Section (Reconnect with Creativity)
- `.pillars-image`: `grid-column: 2 / span 5;` (Scrolling art container and relocated button).
- `.pillars-text`: `grid-column: 7 / span 7;` (Headings block; spans 7 columns for better text flow).
- `.pillars-btn-container`: Add `margin-top: 2.5rem;` and ensure the button is centered or appropriately aligned under the image.

### About Us Section
- `.about-title-container`: `grid-column: 2 / span 12;` (Centered heading).
- `.white-box`: `grid-column: 3 / span 10;` (10-column centered box with 1-column side margins).
- `.white-box`: Reduce `padding` to `3rem` for better fit.

### Newsletter Section
- `.newsletter-content`: `grid-column: 3 / span 10;` (10-column centered container).

## 3. Documentation Update
Update `spec/DESIGN.md` under section `3.4 Tablet Layout Implementation` to reflect these final grid spans and the structural change to the Pillars button location.

## 4. Verification
- Use a browser inspector to set the viewport width to `1024px`.
- Verify the following:
  - Hero text and video are balanced with minimal gap (adjacent grid lines).
  - "View community art" button appears centered below the art image.
  - Pillar text headings fit on single lines where possible.
  - "About Us" and Newsletter containers are horizontally centered.
