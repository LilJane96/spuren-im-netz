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

    // wrong answer test
    // button has attribute disabled if answer is wrong otherwise not

    test('unit4_test_wrong_answer', async ({ page }) => {

        await page.goto('http://localhost:3000/frameone/unit4/step1');
        const continueButton = await page.getByRole('button', { name: 'Weiter' });

        await page.getByText('Stundenplan').click();
        await expect(continueButton).toHaveAttribute('disabled');

        await page.goto('http://localhost:3000/frameone/unit4/step2');

        await page.getByText('Fortnite').click();
        await expect(continueButton).toHaveAttribute('disabled');

        await page.goto('http://localhost:3000/frameone/unit4/step3');

        await page.getByText('Gute Bewertungen').click();
        await expect(continueButton).toHaveAttribute('disabled');

        await page.goto('http://localhost:3000/frameone/unit4/step4');

        await page.getByText('Ein neues Handy', { exact: true }).click();
        await expect(continueButton).toHaveAttribute('disabled');

        await page.goto('http://localhost:3000/frameone/unit4/step5');

        await page.getByText('1,99 Euro').click();
        const endUnit = await page.getByRole('button', { name: 'Level beenden' });
        await expect(endUnit).toHaveAttribute('disabled');
  
    });
  
    // button enabled - disabled test

    test('unit4_test_wrong_answer_button', async ({ page }) => {

        await page.goto('http://localhost:3000/frameone/unit4/step1');
        const continueButton = await page.getByRole('button', { name: 'Weiter' });

        await page.getByText('Stundenplan').click();
        await expect(continueButton).toHaveAttribute('disabled');
        await page.locator('div').filter({ hasText: /^Werbung$/ }).nth(2).click();
        await expect(continueButton).not.toHaveAttribute('disabled');

        await page.goto('http://localhost:3000/frameone/unit4/step2');

        await page.getByText('Fortnite').click();
        await expect(continueButton).toHaveAttribute('disabled');
        await page.locator('div').filter({ hasText: /^Naike$/ }).nth(1).click();
        await expect(continueButton).not.toHaveAttribute('disabled');

        await page.goto('http://localhost:3000/frameone/unit4/step3');

        await page.getByText('Gute Bewertungen').click();
        await expect(continueButton).toHaveAttribute('disabled');
        await page.getByText('Schlechte Bewertungen').click();
        await expect(continueButton).not.toHaveAttribute('disabled');

        await page.goto('http://localhost:3000/frameone/unit4/step4');

        await page.getByText('Ein neues Handy', { exact: true }).click();
        await expect(continueButton).toHaveAttribute('disabled');
        await page.getByText('Eine Handyhülle', { exact: true }).click();
        await expect(continueButton).not.toHaveAttribute('disabled');

        await page.goto('http://localhost:3000/frameone/unit4/step5');

        await page.getByText('1,99 Euro').click();
        const endUnit = await page.getByRole('button', { name: 'Level beenden' });
        await expect(endUnit).toHaveAttribute('disabled');
        await page.getByText('1 Euro').click();
        await expect(endUnit).not.toHaveAttribute('disabled');
        
        });