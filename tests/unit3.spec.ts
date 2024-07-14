import { test, expect } from '@playwright/test';

// happy path test

test('unit3_test', async ({ page }) => {

  await page.goto('http://localhost:3000/frameone/unit3/step1');

  await page.getByText('Gruppenchat').click();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByText('Nein, darf er nicht.').click();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByText('Nein es ist gefälscht.').click();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByText('Eltern Bescheid geben').click();
  await page.getByText('Meiner Lehrerin Bescheid geben').click();
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByText('Meine Kontakte').nth(2).click();
  await page.getByText('Meine Kontakte, außer...').nth(1).click();
  await page.getByRole('button', { name: 'Level beenden' }).click();

  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('img', { name: 'ClosedBox' }).click();

  await expect(page.getByRole('button', { name: 'Schau dir deine Ergebnisse an!' })).toHaveCount(1);

});