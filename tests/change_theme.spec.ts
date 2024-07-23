import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/hub");
  await page.getByRole("button").click();
  await page
    .locator("div")
    .filter({ hasText: /^Wähle deine Lieblingsfarbe!$/ })
    .locator("div")
    .nth(1)
    .click();
  await page.getByRole("button").click();
  await page.locator(".hub").click();

  const backgroundColor = await page.evaluate(
    () => window.getComputedStyle(document.body).backgroundColor
  );
  expect(backgroundColor).toBe("rgb(174, 221, 255)");
});
