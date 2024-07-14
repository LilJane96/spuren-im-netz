import { test, expect } from '@playwright/test';

test('unit4_test', async ({ page }) => {
  await page.goto('http://localhost:3000/frameone/unit4/step1');

  await page.getByText('Werbung').nth(2).click();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByText('Naike').nth(1).click();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByText('Schlechte Bewertungen', { exact: true }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByText('Eine Handyhülle', { exact: true }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByText('1 Euro').click();
  await page.getByRole('button', { name: 'Level beenden' }).click();

  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('img', { name: 'ClosedBox' }).click();

  await expect(page.getByRole('button', { name: 'Schau dir deine Ergebnisse an!' })).toHaveCount(1);
  
});