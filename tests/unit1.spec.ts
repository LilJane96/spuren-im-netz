import { test, expect } from "@playwright/test";

test("unit1_test", async ({ page }) => {
  await page.goto("http://localhost:3000/hub");
  await page.getByRole("img", { name: "Pin1" }).click();
  await page.getByPlaceholder("Name").fill("Julian");

  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByText("Puzzlestar").click();

  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByText("kYh5&0!mlta").click();

  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByText("Privat", { exact: true }).click();

  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("img", { name: "Bildbeschreibung" }).first().click();

  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByText("Fußballliebhaber ⚽ Künstlerin").click();

  await page.getByRole("button", { name: "Level beenden" }).click();
  await page.getByRole("img", { name: "ClosedBox" }).click();

  await expect(
    page.getByRole("button", { name: "Schau dir deine Ergebnisse an!" })
  ).toHaveCount(1);
});

// wrong answer test
// button has attribute disabled if answer is wrong otherwise not

test("unit1_test_wrong_answer", async ({ page }) => {
  await page.goto("http://localhost:3000/frameone/unit1/step1");
  const continueButton = await page.getByRole("button", { name: "Weiter" });

  await page.getByText("Name von meinem Opa").click();
  await expect(continueButton).toHaveAttribute("disabled");

  await page.goto("http://localhost:3000/frameone/unit1/step2");

  await page.getByText("Passwort", { exact: true }).click();
  await expect(continueButton).toHaveAttribute("disabled");

  await page.goto("http://localhost:3000/frameone/unit1/step3");

  await page.getByText("Öffentlich", { exact: true }).click();
  await expect(continueButton).toHaveAttribute("disabled");

  await page.goto("http://localhost:3000/frameone/unit1/step4");

  await page.getByRole("img", { name: "Bildbeschreibung" }).nth(2).click();
  await expect(continueButton).toHaveAttribute("disabled");

  await page.goto("http://localhost:3000/frameone/unit1/step5");

  await page.getByText("Alter und Adresse von meiner").click();
  const endUnit = await page.getByRole("button", { name: "Level beenden" });
  await expect(endUnit).toHaveAttribute("disabled");
});

// button enabled - disabled test

test("unit1_test_wrong_answer_button", async ({ page }) => {
  await page.goto("http://localhost:3000/frameone/unit1/step1");
  const continueButton = await page.getByRole("button", { name: "Weiter" });

  await page.getByText("Name von meinem Opa").click();
  await expect(continueButton).toHaveAttribute("disabled");
  await page.getByText("Puzzlestar").click();
  await expect(continueButton).not.toHaveAttribute("disabled");

  await page.goto("http://localhost:3000/frameone/unit1/step2");

  await page.getByText("Passwort", { exact: true }).click();
  await expect(continueButton).toHaveAttribute("disabled");
  await page.getByText("kYh5&0!mlta").click();
  await expect(continueButton).not.toHaveAttribute("disabled");

  await page.goto("http://localhost:3000/frameone/unit1/step3");

  await page.getByText("Öffentlich", { exact: true }).click();
  await expect(continueButton).toHaveAttribute("disabled");
  await page.getByText("Privat", { exact: true }).click();
  await expect(continueButton).not.toHaveAttribute("disabled");

  await page.goto("http://localhost:3000/frameone/unit1/step4");

  await page.getByRole("img", { name: "Bildbeschreibung" }).nth(2).click();
  await expect(continueButton).toHaveAttribute("disabled");
  await page.getByRole("img", { name: "Bildbeschreibung" }).first().click();
  await expect(continueButton).not.toHaveAttribute("disabled");

  await page.goto("http://localhost:3000/frameone/unit1/step5");
  await page.getByText("Alter und Adresse von meiner").click();
  const endUnit = await page.getByRole("button", { name: "Level beenden" });
  await expect(endUnit).toHaveAttribute("disabled");
});
