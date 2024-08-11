import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/hub");
  await page.getByRole("img", { name: "Fox" }).click();
  await expect(page.getByText("Detektiv für Soziale Medien")).toHaveCount(1);
  await page
    .getByRole("img", { name: "Gleich gehts los, Riesenrad wollte ich schon immer mal fahren!" })
    .click();
  await page.getByText("Puuuh, endlich geschafft! Wir haben den Gipfel erreicht!").click();
  await expect(page.getByText("Detektiv für Soziale Medien")).toHaveCount(0);
  await page.getByTestId("ArrowBackIcon").click();
  await expect(page.getByText("Detektiv für Soziale Medien")).toHaveCount(1);
  await page.getByRole("button").nth(1).click();
});
