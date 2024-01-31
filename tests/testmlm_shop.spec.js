import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://maxi26.store/Hellomolly');
  await page.locator('.header__action__item').first().click();
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('testing.test1070+090@gmail.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('12345678');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Shop' }).click();
  await page.getByRole('link', { name: 'bag $' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByPlaceholder('Shipping Address').fill('dhaka');
  await page.getByPlaceholder('Enter City').click();
  await page.getByPlaceholder('Enter City').fill('dhaka');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.goto('https://maxi26.store/Hellomolly/customer/checkout');
});