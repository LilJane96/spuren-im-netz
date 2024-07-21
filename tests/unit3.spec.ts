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

// wrong answer test
// button has attribute disabled if answer is wrong otherwise not

test('unit3_test_wrong_answer', async ({ page }) => {

    await page.goto('http://localhost:3000/frameone/unit3/step1');
    const continueButton = await page.getByRole('button', { name: 'Weiter' });

    await page.getByText('Einzelchat').click();
    await expect(continueButton).toHaveAttribute('disabled');
    

    await page.goto('http://localhost:3000/frameone/unit3/step2');

    await page.getByText('Ja, darf er.').click();
    await expect(continueButton).toHaveAttribute('disabled');
    

    await page.goto('http://localhost:3000/frameone/unit3/step3');

    await page.getByText('Ja, es ist echt.').click();
    await expect(continueButton).toHaveAttribute('disabled');

    await page.goto('http://localhost:3000/frameone/unit3/step4');

    await page.getByText('In der Gruppe bleiben').click();
    await expect(continueButton).toHaveAttribute('disabled');

});

// button enabled - disabled test

test('unit3_test_wrong_answer_button', async ({ page }) => {

await page.goto('http://localhost:3000/frameone/unit3/step1');

await page.getByText('Einzelchat').click();
const continueButton = await page.getByRole('button', { name: 'Weiter' });
await expect(continueButton).toHaveAttribute('disabled');

await page.locator('div').filter({ hasText: /^Gruppenchat$/ }).nth(1).click();
await expect(continueButton).not.toHaveAttribute('disabled');


await page.goto('http://localhost:3000/frameone/unit3/step2');

await page.getByText('Ja, darf er.').click();
await expect(continueButton).toHaveAttribute('disabled');
await page.getByText('Nein, darf er nicht.').click();
await expect(continueButton).not.toHaveAttribute('disabled');

await page.goto('http://localhost:3000/frameone/unit3/step3');

await page.getByText('Ja, es ist echt.').click();
await expect(continueButton).toHaveAttribute('disabled');
await page.getByText('Nein es ist gefälscht.').click();
await expect(continueButton).not.toHaveAttribute('disabled');

await page.goto('http://localhost:3000/frameone/unit3/step4');

await page.getByText('In der Gruppe bleiben').click();
await expect(continueButton).toHaveAttribute('disabled');
await page.getByText('Eltern Bescheid geben').click();
await expect(continueButton).not.toHaveAttribute('disabled');

});