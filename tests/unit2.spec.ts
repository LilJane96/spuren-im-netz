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

    // wrong answer test
    // button has attribute disabled if answer is wrong otherwise not

  test('unit2_test_wrong_answer', async ({ page }) => {

    await page.goto('http://localhost:3000/frameone/unit2/step1');
    const continueButton = await page.getByRole('button', { name: 'Weiter' });

    await page.getByText('Annehmen').click();
    await expect(continueButton).toHaveAttribute('disabled');

    await page.goto('http://localhost:3000/frameone/unit2/step2');

    await page.getByText('Felicia29').nth(1).click();
    await expect(continueButton).toHaveAttribute('disabled');

    await page.goto('http://localhost:3000/frameone/unit2/step3');

    await page.getByText('Berlin', { exact: true }).click();
    await expect(continueButton).toHaveAttribute('disabled');

    await page.goto('http://localhost:3000/frameone/unit2/step4');

    await page.getByText('19').click();
    await expect(continueButton).toHaveAttribute('disabled');

    await page.goto('http://localhost:3000/frameone/unit2/step5');

    await page.getByText('Lehrerin').click();
    const endUnit = await page.getByRole('button', { name: 'Level beenden' });
    await expect(endUnit).toHaveAttribute('disabled');

});


// button enabled - disabled test

test('unit2_test_wrong_answer_button', async ({ page }) => {

    await page.goto('http://localhost:3000/frameone/unit2/step1');
    const continueButton = await page.getByRole('button', { name: 'Weiter' });
    
    await page.getByText('Annehmen').click();
    await expect(continueButton).toHaveAttribute('disabled');
    
    await page.locator('div').filter({ hasText: /^Ablehnen$/ }).nth(1).click();
    await expect(continueButton).not.toHaveAttribute('disabled');
    
    
    await page.goto('http://localhost:3000/frameone/unit2/step2');

    await page.getByText('Felicia29').nth(1).click();
    await expect(continueButton).toHaveAttribute('disabled');
    await page.getByText('Felix').nth(4).click();
    await expect(continueButton).not.toHaveAttribute('disabled');

    await page.goto('http://localhost:3000/frameone/unit2/step3');

    await page.getByText('Berlin', { exact: true }).click();
    await expect(continueButton).toHaveAttribute('disabled');
    await page.getByText('Reutlingen', { exact: true }).click();
    await expect(continueButton).not.toHaveAttribute('disabled');

    await page.goto('http://localhost:3000/frameone/unit2/step4');

    await page.getByText('19').click();
    await expect(continueButton).toHaveAttribute('disabled');
    await page.locator('div').filter({ hasText: /^39$/ }).nth(1).click();
    await expect(continueButton).not.toHaveAttribute('disabled');

    await page.goto('http://localhost:3000/frameone/unit2/step5');

    await page.getByText('Lehrerin').click();
    const endUnit = await page.getByRole('button', { name: 'Level beenden' });
    await expect(endUnit).toHaveAttribute('disabled');
    await page.getByText('Dieb').click();
    await expect(endUnit).not.toHaveAttribute('disabled');

    });