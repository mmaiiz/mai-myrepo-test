import { test, expect } from '@playwright/test';

test('testcase01-createtest', async ({ page }) => {
 await page.goto('https://www.google.co/th');
 await page.goto('https://www.google.co.th/');
  await page.getByLabel('ค้นหา', { exact: true }).click();
  await page.getByLabel('ค้นหา', { exact: true }).fill('ทดสอบใช้งาน playwright');
  await page.getByLabel('ค้นหา', { exact: true }).click();
  await page.getByRole('link', { name: 'มาใช้ Playwright เขียน e2e' }).click();
 await page.getByRole('button', { name: 'Okay' }).click();
});

/*test('test', async ({ page }) => {
  await page.goto('https://www.google.co.th/');
  await page.getByLabel('ค้นหา', { exact: true }).click();
  await page.getByLabel('ค้นหา', { exact: true }).fill('ทดสอบพิมพ์และenter');
  await page.getByRole('link', { name: 'บทเรียนการพิมพ์สัมผัสออนไลน์ - แป้น ใหม่: แป้น เหย้า Touch Typing Practice' }).click();
}); */