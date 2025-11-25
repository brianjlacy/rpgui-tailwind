import { test, expect } from '@playwright/test';

test.describe('RPGUI Tailwind', () => {
  test('development server loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/RPGUI Tailwind/);
  });
});
