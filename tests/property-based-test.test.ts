import * as fc from 'fast-check';

import arabicDecimalToRoman from '../server/src/services/toRoman';
import romanToDecimalArabic from '../server/src/services/toArabic';

test('Proprty based testing ', () => {
  fc.assert(
    fc.property(fc.nat(3000), (arabicRandomNumber) => {
      if (arabicRandomNumber > 0) {
        const roman = arabicDecimalToRoman(arabicRandomNumber);
        const arabicFromRoman = romanToDecimalArabic(`${roman}`);

        expect(arabicFromRoman).toBe(arabicRandomNumber);
      }
    }),
    { verbose: true },
  );
});
