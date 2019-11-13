import romanToDecimalArabic from "../server/src/services/toArabic";

test("romanToDecimalArabic(1) should return I", () => {
  expect(romanToDecimalArabic("I")).toBe(1);
});

test("romanToDecimalArabic(2) should return II", () => {
  expect(romanToDecimalArabic("II")).toBe(2);
});

test("romanToDecimalArabic(5) should return V", () => {
  expect(romanToDecimalArabic("V")).toBe(5);
});

test("romanToDecimalArabic(X) should return 10", () => {
  expect(romanToDecimalArabic("X")).toBe(10);
});
// test('romanToDecimalArabic(6) should return IV 6', () => {
//   expect(romanToDecimalArabic('IV')).toBe(6);
// });
