import arabicDecimalToRoman from '../server/src/services/toRoman';

test('arabicDecimalToRoman(1) should return I', () => {
  expect(arabicDecimalToRoman(1)).toBe('I');
});

test('arabicDecimalToRoman(2) should return II', () => {
  expect(arabicDecimalToRoman(2)).toBe('II');
});

test('arabicDecimalToRoman(5) should return V', () => {
  expect(arabicDecimalToRoman(5)).toBe('V');
});

test('arabicDecimalToRoman(6) should return IV 6', () => {
  expect(arabicDecimalToRoman(6)).toBe('VI');
});

test('arabicDecimalToRoman(4) should return IV', () => {
  expect(arabicDecimalToRoman(4)).toBe('IV');
});

test('arabicDecimalToRoman(3) should return "III"', () => {
  expect(arabicDecimalToRoman(3)).toBe('III');
});

test('arabicDecimalToRoman(4) should return "IV"', () => {
  expect(arabicDecimalToRoman(4)).toBe('IV');
});

test('300 toRoman gives Nombre impossible `a ´ecrire en chiffres romains.', () => {
  expect(arabicDecimalToRoman(83)).toBe('LXXXIII');
});

test('arabicDecimalToRoman(97) should return "XCVII"', () => {
  expect(arabicDecimalToRoman(97)).toBe('XCVII');
});

test('arabicDecimalToRoman(3497) should return "MMMCDXCVII"', () => {
  expect(arabicDecimalToRoman(3497)).toBe('MMMCDXCVII');
});

test('4000 toRoman gives Nombre impossible `a ´ecrire en chiffres romains.', () => {
  expect(arabicDecimalToRoman(4000)).toBe('M?');
});
