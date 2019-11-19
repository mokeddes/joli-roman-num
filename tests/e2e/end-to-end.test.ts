/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import * as dotenv from 'dotenv';

dotenv.config();
let PORT!: string;

describe('Convert from arabic to roman', () => {
  beforeAll(async () => {
    PORT = process.env.PORT;

    await page.goto(`http://localhost:${PORT}/front/`, {
      waitUntil: 'load',
    });
    await page.waitFor('#convertToRoman');
    await page.waitFor('#resultRoman');
    await page.waitFor('#introducedValueArabic');
  });

  beforeEach(async () => {
    jest.setTimeout(15000);
  });

  it('should match a button with a "convertToRomanValue" text inside', async () => {
    await expect(page).toMatchElement('#convertToRoman', {
      text: 'convertToRomanValue',
    });
  });

  it('should convert arabic 2 to II and show value in input', async () => {
    // clear input
    await page.$eval(
      '#introducedValueArabic',
      (el: HTMLInputElement) => (el.value = ''),
    );
    await page.type('#introducedValueArabic', '2');
    await page.click('#convertToRoman');
    const firstResponse = await page.waitForResponse(
      `http://localhost:${PORT}/to-roman`,
      { timeout: 30000 },
    );
    const arabicToRoman = await page.$eval(
      '#resultRoman',
      (arabicToRomanResult: HTMLInputElement) => arabicToRomanResult.value,
    );

    await expect(arabicToRoman).toBe('II');
    await page.waitFor(1000);

    // await expect(page).toMatch("React");
  });

  it('should convert arabic 1 to I and show value in input', async () => {
    await page.$eval(
      '#introducedValueArabic',
      (el: HTMLInputElement) => (el.value = ''),
    );
    await page.type('#introducedValueArabic', '1');
    await page.click('#convertToRoman');
    const firstResponse = await page.waitForResponse(
      `http://localhost:${PORT}/to-roman`,
      { timeout: 30000 },
    );
    const arabicToRoman = await page.$eval(
      '#resultRoman',
      (arabicToRomanResult: HTMLInputElement) => arabicToRomanResult.value,
    );

    // await jestPuppeteer.debug();
    await page.waitFor(200);
    await expect(arabicToRoman).toBe('I');
  });

  it('should convert arabic 10 to X and show value in input', async () => {
    // eslint-disable-next-line no-return-assign
    await page.$eval(
      '#introducedValueArabic',
      (el: HTMLInputElement) => (el.value = ''),
    );
    await page.type('#introducedValueArabic', '10');
    await page.click('#convertToRoman');
    const firstResponse = await page.waitForResponse(
      `http://localhost:${PORT}/to-roman`,
      { timeout: 30000 },
    );
    const arabicToRoman = await page.$eval(
      '#resultRoman',
      (arabicToRomanResult: HTMLInputElement) => arabicToRomanResult.value,
    );
    await page.waitFor(200);
    await expect(arabicToRoman).toBe('X');
  });

  it('should convert roman III to 3 and show value in input', async () => {
    // eslint-disable-next-line no-return-assign
    await page.$eval(
      '#introducedValueRoman',
      (el: HTMLInputElement) => (el.value = ''),
    );
    await page.type('#introducedValueRoman', 'III');
    await page.click('#convertToArabic');
    const firstResponse = await page.waitForResponse(
      `http://localhost:${PORT}/to-arabic`,
      { timeout: 30000 },
    );
    const romanToArabic = await page.$eval(
      '#resultArabic',
      (romanToArabicResult: HTMLInputElement) => romanToArabicResult.value,
    );
    await page.waitFor(200);
    await expect(romanToArabic).toBe('3');
  });

  it('should convert roman II to 2 and show value in input', async () => {
    // eslint-disable-next-line no-return-assign
    await page.$eval(
      '#introducedValueRoman',
      (el: HTMLInputElement) => (el.value = ''),
    );
    await page.type('#introducedValueRoman', 'II');
    await page.click('#convertToArabic');
    const firstResponse = await page.waitForResponse(
      `http://localhost:${PORT}/to-arabic`,
      { timeout: 30000 },
    );
    const romanToArabic = await page.$eval(
      '#resultArabic',
      (romanToArabicResult: HTMLInputElement) => romanToArabicResult.value,
    );
    await page.waitFor(200);

    await expect(romanToArabic).toBe('2');
  });

  it('should convert roman X to 10 and show value in input', async () => {
    // eslint-disable-next-line no-return-assign
    await page.$eval(
      '#introducedValueRoman',
      (el: HTMLInputElement) => (el.value = ''),
    );
    await page.type('#introducedValueRoman', 'X');
    await page.click('#convertToArabic');
    const firstResponse = await page.waitForResponse(
      `http://localhost:${PORT}/to-arabic`,
      { timeout: 30000 },
    );
    const romanToArabic = await page.$eval(
      '#resultArabic',
      (romanToArabicResult: HTMLInputElement) => romanToArabicResult.value,
    );
    await page.waitFor(200);

    await expect(romanToArabic).toBe('10');
  });
});
