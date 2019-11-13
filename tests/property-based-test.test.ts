import * as fc from 'fast-check';

import arabicDecimalToRoman from '../server/src/services/toRoman';
import romanToDecimalArabic from '../server/src/services/toArabic';

// test('here is a jest test using fast-check imported as fc', () => {
//   fc.assert(
//     fc.property(fc.nat(3900), (a) => expect(arabicDecimalToRoman(a)).toEqual(
//         romanToDecimalArabic(arabicDecimalToRoman(a)),
//       ),),
//   );
// });

test('here is a jest test using fast-check imported as fc', () => {
  fc.assert(
    fc.property(fc.nat(3000), (arabicRandomNumber) => {
      if (arabicRandomNumber > 0) {
        const roman = arabicDecimalToRoman(arabicRandomNumber);
        const arabicFromRoman = romanToDecimalArabic(`${roman}`);

        // console.log(
        //   'arabicRandomNumber :',
        //   arabicRandomNumber,
        //   roman,
        //   arabicFromRoman
        // );
        // arabicFromRoman = romanToDecimalArabic(roman);
        expect(arabicFromRoman).toBe(arabicRandomNumber);

        //        return arabicFromRoman === arabicRandomNumber;
      }
    }),
    { verbose: true },
  );
});

// // Code under test
// const contains = (text, pattern) => text.indexOf(pattern) >= 0;

// // Properties
// test('properties', () => {
//   // string text always contains itself
//   describe('should always contain itself', () => {
//     fc.assert(fc.property(fc.string(), (text) => contains(text, text)));
//   });
//   // string a + b + c always contains b, whatever the values of a, b and c
//   describe('should always contain its substrings', () => {
//     fc.assert(
//       fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => contains(a + b + c, b),),
//     );
//   });
// });
