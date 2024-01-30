import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://maxi26.com/');
  await page.getByRole('banner').getByRole('link', { name: 'Register' }).click();
  await page.locator('input[name="fname"]').click();
  await page.locator('input[name="fname"]').fill('jhon');
  await page.locator('input[name="lname"]').click();
  await page.locator('input[name="lname"]').press('CapsLock');
  await page.locator('input[name="lname"]').fill('D');
  await page.locator('input[name="lname"]').press('CapsLock');
  await page.locator('input[name="lname"]').fill('Davida');
  await page.getByPlaceholder('address-1').click();
  await page.getByPlaceholder('address-1').fill('dhaka');
  await page.locator('input[name="lname"]').click();
  await page.getByPlaceholder('address-2').click();
  await page.getByPlaceholder('address-2').fill('dhaka');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('dhaka');
  await page.getByPlaceholder('State').click();
  await page.getByPlaceholder('State').fill('dhanmondi');
  await page.getByPlaceholder('3423', { exact: true }).click();
  await page.getByPlaceholder('3423', { exact: true }).fill('1216');
  await page.getByPlaceholder('+').click();
  await page.getByPlaceholder('+').fill('01678465372');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('jhorna');
  await page.getByPlaceholder('user@gmail.com').click();
  await page.getByPlaceholder('user@gmail.com').fill('jhon@gmail.com');
  await page.getByPlaceholder('password', { exact: true }).click();
  await page.getByPlaceholder('password', { exact: true }).fill('12345678');
  await page.getByPlaceholder('Confirm password').click();
  await page.getByPlaceholder('Confirm password').fill('12345678');
  await page.getByRole('button', { name: 'Register' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy url' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
});