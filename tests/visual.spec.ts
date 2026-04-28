import { test, expect } from '@playwright/test';

const ORIGINAL_URL = 'https://www.alwaysbecreative.ca/';

test.describe('Responsive Comparison (Local vs Original)', () => {
  
  test('Desktop View', async ({ page, viewport }) => {
    test.skip(viewport.width < 1024, 'Skipping Desktop test on non-desktop viewport');
    
    // Check Original
    await page.goto(ORIGINAL_URL);
    const originalTitle = await page.title();
    const burgerMobileOrig = page.locator('.header-display-mobile .header-burger').first();
    await expect(burgerMobileOrig).not.toBeVisible();

    // Check Local (baseURL)
    await page.goto('/');
    await expect(page).toHaveTitle(originalTitle);
    const burgerMobileLocal = page.locator('.header-display-mobile .header-burger').first();
    await expect(burgerMobileLocal).not.toBeVisible();
  });

  test('Tablet View', async ({ page, viewport }) => {
    test.skip(viewport.width >= 1024 || viewport.width < 768, 'Skipping Tablet test on non-tablet viewport');
    
    // Check Original
    await page.goto(ORIGINAL_URL);
    const burgerMobileOrig = page.locator('.header-display-mobile .header-burger').first();
    const isVisibleOrig = await burgerMobileOrig.isVisible();

    // Check Local
    await page.goto('/');
    const burgerMobileLocal = page.locator('.header-display-mobile .header-burger').first();
    expect(await burgerMobileLocal.isVisible()).toBe(isVisibleOrig);
  });

  test('Mobile View', async ({ page, viewport }) => {
    test.skip(viewport.width >= 768, 'Skipping Mobile test on non-mobile viewport');
    
    // Check Original
    await page.goto(ORIGINAL_URL);
    const burgerMobileOrig = page.locator('.header-display-mobile .header-burger').first();
    await expect(burgerMobileOrig).toBeVisible();

    // Check Local
    await page.goto('/');
    const burgerMobileLocal = page.locator('.header-display-mobile .header-burger').first();
    await expect(burgerMobileLocal).toBeVisible();
  });
});
