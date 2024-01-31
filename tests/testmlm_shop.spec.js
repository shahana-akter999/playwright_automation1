import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://maxi26.store/hellomolly/collection/mens-fashion');
  await page.getByRole('link', { name: 'shoes $' }).click();
  await page.getByText('+').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('12345678');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Shipping Address').click();
  await page.getByPlaceholder('Shipping Address').fill('dhaka');
  await page.getByPlaceholder('Enter City').click();
  await page.getByPlaceholder('Enter City').fill('dhaka');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.goto('https://maxi26.store/hellomolly/customer/checkout');
});