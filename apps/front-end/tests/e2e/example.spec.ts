import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Vite + React + TS");
});

// test('check h1, h3', async ({ page }) => {
//     await page.goto('/');
//     // Check if there is an h1 element
//     const h1 = page.locator('h1');
//     // await expect(h1).toHaveCount(1);  // Ensure there's at least one h1 tag
    
//     // Optionally check the content of the h1 tag
//     await expect(h1).toHaveText("Killer Resume - Development");

//     // Check if there is an h1 element
//     const h3 = page.locator('h3');
//     // await expect(h3).toHaveCount(1);  // Ensure there's at least one h1 tag
//     await expect(h1).toHaveText("Hello From Killer-resume-api123");
//   });

test('check h1 and h3 content', async ({ page }) => {
    // Navigate to your React app
    await page.goto('/');
  
    // Check the content of the h1 tag
    const h1 = page.locator('h1');
    await expect(h1).toHaveText('Killer Resume - Development');
  
    // Check the content of the h3 tag
    const h3 = page.locator('h3');
    await expect(h3).toHaveText('Hello From Killer-resume-api123');
  });