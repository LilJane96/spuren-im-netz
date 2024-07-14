import { test, expect } from '@playwright/test';


test('unit2_test', async ({ page }) => {

    await page.goto('http://localhost:3000/frameone/unit2/step1');

    await page.locator('p').filter({ hasText: /^Ablehnen$/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();

    await page.getByText('Felix').nth(4).click();
    await page.getByRole('button', { name: 'Weiter' }).click();

    await page.getByText('Reutlingen', { exact: true }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();

    await page.getByText('39', { exact: true }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();

    await page.getByText('Dieb').click();
    await page.getByRole('button', { name: 'Level beenden' }).click();

    await page.goto('http://localhost:3000/finishedGame/step2');

    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('img', { name: 'ClosedBox' }).click();
    
    await expect(page.getByRole('button', { name: 'Schau dir deine Ergebnisse an!' })).toHaveCount(1);


  });