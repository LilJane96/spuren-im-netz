import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Spuren im Netz/);
});

test('game start', async ({ page }) => {
  await page.goto('/');

  // Click the start button
  await page.getByRole('button', { name: 'SPIEL STARTEN' }).click();

  // Expects page to have the string "Willkommen bei 'Spuren-im-Netz'!".
  await expect(page.getByText(/Willkommen bei 'Spuren-im-Netz'!/)).toHaveCount(1);
});



