import { test, expect } from "@playwright/test";

test("results_unit1_test", async ({ page }) => {
  //Click through Unit 1, make some Mistakes and check if the results are displayed correctly
  await page.goto("/hub");
  await page.getByRole("img", { name: "Pin1" }).click();
  await page.getByPlaceholder("Name").fill("TEST");
  await page.getByRole("button", { name: "Weiter" }).click();

  await page.getByText("Name von meinem Opa").click();
  await page.getByText("Puzzlestar").click();
  await page.getByRole("button", { name: "Weiter" }).click();

  await page.getByText("meinName123").click();
  await page.getByText("Passwort", { exact: true }).click();
  await page.getByText("kYh5&0!mlta").click();
  await page.getByRole("button", { name: "Weiter" }).click();

  await page.getByText("Privat", { exact: true }).click();
  await page.getByRole("button", { name: "Weiter" }).click();

  await page.getByRole("img", { name: "Bildbeschreibung" }).first().click();
  await page.getByRole("button", { name: "Weiter" }).click();

  await page.getByText("Fußballliebhaber ⚽ Künstlerin").click();
  await page.getByRole("button", { name: "Level beenden" }).click();

  await page.getByRole("img", { name: "ClosedBox" }).click();
  await page
    .getByRole("button", { name: "Schau dir deine Ergebnisse an!" })
    .click();

  //1 Mistake = Yellow
  const backgroundColorElm1 = await page
    .locator("li")
    .filter({ hasText: "Profilname" })
    .evaluate((element) => {
      return window.getComputedStyle(element).backgroundColor;
    });
  await expect(backgroundColorElm1).toBe("rgb(255, 216, 115)");

  //2 Mistakes = Red
  const backgroundColorElm2 = await page
    .locator("li")
    .filter({ hasText: "Passwort" })
    .evaluate((element) => {
      return window.getComputedStyle(element).backgroundColor;
    });
  await expect(backgroundColorElm2).toBe("rgb(255, 116, 73)");

  //0 Mistakes = Green
  const backgroundColorElm3 = await page
    .locator("li")
    .filter({ hasText: "Öffentlich oder Privat" })
    .evaluate((element) => {
      return window.getComputedStyle(element).backgroundColor;
    });
  await expect(backgroundColorElm3).toBe("rgb(0, 213, 141)");

  //0 Mistakes = Green
  const backgroundColorElm4 = await page
    .locator("li")
    .filter({ hasText: "Profilbild" })
    .evaluate((element) => {
      return window.getComputedStyle(element).backgroundColor;
    });
  await expect(backgroundColorElm4).toBe("rgb(0, 213, 141)");

  //0 Mistakes = Green
  const backgroundColorElm5 = await page
    .locator("li")
    .filter({ hasText: "Informationen" })
    .evaluate((element) => {
      return window.getComputedStyle(element).backgroundColor;
    });
  await expect(backgroundColorElm5).toBe("rgb(0, 213, 141)");

  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await expect(page.getByRole("button", { name: "Weiter" })).toBeDisabled();
});
