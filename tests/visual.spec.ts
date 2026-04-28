import { test, expect } from '@playwright/test';

const BASE_URL = 'http://127.0.0.1:8080/';

test.describe('Static Site Verification', () => {
  
  test('Homepage Content Check', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle('Always Be Creative');
    
    // Check for Main Heading
    const heading = await page.textContent('h1');
    expect(heading).toContain('Anyone can be creative.');
  });

  test('About Page Check', async ({ page }) => {
    await page.goto(`${BASE_URL}about/index.html`);
    const heading = await page.locator('h1').first().textContent();
    expect(heading?.toLowerCase()).toContain('about us');
  });

  test('Responsive Grid Check', async ({ page, viewport }) => {
    await page.goto(BASE_URL);
    const grid = page.locator('.grid-container').first();
    const gridStyle = await grid.evaluate((el) => window.getComputedStyle(el).gridTemplateColumns);
    
    if (viewport && viewport.width < 768) {
      // Should have 8 columns + 2 gutters = 10 parts
      expect(gridStyle.split(' ').length).toBeGreaterThanOrEqual(10); 
    } else {
      // Should have 24 columns + 2 gutters = 26 parts
      expect(gridStyle.split(' ').length).toBeGreaterThanOrEqual(26);
    }
  });
});
