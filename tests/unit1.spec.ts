import { test, expect } from '@playwright/test';

test('unit1_test', async ({ page }) => {
  await page.goto('/hub');
  await page.getByRole('img', { name: 'Pin1' }).click();
  await page.getByPlaceholder('Name').fill('Julian');

  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByText('Puzzlestar').click();

  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByText('kYh5&0!mlta').click();

  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByText('Privat', { exact: true }).click();

  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('img', { name: 'Bildbeschreibung' }).first().click();

  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByText('Fußballliebhaber ⚽ Künstlerin').click();

  await page.getByRole('button', { name: 'Level beenden' }).click();
  await page.getByRole('img', { name: 'ClosedBox' }).click();
  
  await expect(page.getByRole('button', { name: 'Schau dir deine Ergebnisse an!' })).toHaveCount(1);
  

});