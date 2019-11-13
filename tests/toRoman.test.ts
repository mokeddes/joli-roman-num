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

/**
 *
 * convertToRoman(83) should return "LXXXIII"
convertToRoman(3) should return "III".
Passed
convertToRoman(4) should return "IV".
Passed
convertToRoman(5) should return "V".
Passed
convertToRoman(9) should return "IX".
Passed
convertToRoman(12) should return "XII".
Passed
convertToRoman(16) should return "XVI".
Passed
convertToRoman(29) should return "XXIX".
Passed
convertToRoman(44) should return "XLIV".
Passed
convertToRoman(45) should return "XLV"
Passed
convertToRoman(68) should return "LXVIII"
Passed
convertToRoman(83) should return "LXXXIII"
Passed
Passed
convertToRoman(99) should return "XCIX"
Passed
convertToRoman(400) should return "CD"
Passed
convertToRoman(500) should return "D"
Passed
convertToRoman(501) should return "DI"
Passed
convertToRoman(649) should return "DCXLIX"
Passed
convertToRoman(798) should return "DCCXCVIII"
Passed
convertToRoman(891) should return "DCCCXCI"
Passed
convertToRoman(1000) should return "M"
Passed
convertToRoman(1004) should return "MIV"
Passed
convertToRoman(1006) should return "MVI"
Passed
convertToRoman(1023) should return "MXXIII"
Passed
convertToRoman(2014) should return "MMXIV"
Passed
convertToRoman(3999) should return "MMMCMXCIX"
 */
