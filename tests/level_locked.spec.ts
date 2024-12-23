import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/hub");
  await page.getByRole("img", { name: "Pin2" }).click();

  await page.waitForTimeout(1000);
  await expect(page).toHaveURL("/hub");
});
