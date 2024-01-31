import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://maxi26.com/');
  await page.getByPlaceholder('user@gmail.com').click();
  await page.getByPlaceholder('user@gmail.com').fill('shop@gmail.com');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('12345678');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'My Bank Info' }).click();
  await page.getByRole('link', { name: 'Monthly Transactions' }).click();
  await page.getByRole('link', { name: 'My All Reference' }).click();
  await page.getByRole('link', { name: 'My DownLine' }).click();
  await page.getByRole('link', { name: 'Sent Message' }).click();
  await page.getByRole('link', { name: 'Commission Transactions' }).click();
  await page.getByRole('link', { name: 'Subscription Transactions' }).click();
  await page.getByRole('link', { name: 'Sent Message' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();

  
});