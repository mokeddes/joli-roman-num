// Code Explanation
// * Retreive all digits (units, dizaines, centaines, milliers) in the number.
// * Call soustractionReplacement with the digits and associate params
// * soustractionReplacement take 4 params (digits, smallerValuesOfDigitsPossible, mediumValuesOfDigitsPossible, maximumValuesOfDigitsPossible)
// *  Exemple:
// * if(units) soustractionReplacement(units, 'I', 'V', 'X')
// * using Switch Case to push the representation Roman Numerals of digits.
// * call soustractionReplacement for all digits and concatenate all result starting from milliers

/**
 * This function used to return a representation of an digits number
 * @param digitUnitValue number
 * @param smallerValuesOfDigitsPossiblenumber
 * @param mediumValuesOfDigitsPossible string
 * @param maximumValuesOfDigitsPossible string
 * @return string
 */
function soustractionReplacement(
  digitUnitValue: number,
  smallerValuesOfDigitsPossible: string,
  mediumValuesOfDigitsPossible: string,
  maximumValuesOfDigitsPossible: string,
) {
  let s = '';
  switch (digitUnitValue) {
    case 0:
      s = '';
      break;
    case 1:
      s = `${smallerValuesOfDigitsPossible}`;
      break;
    case 2:
      s = `${smallerValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}`;
      break;
    case 3:
      s = `${smallerValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}`;
      break;
    case 4:
      s = `${smallerValuesOfDigitsPossible}${mediumValuesOfDigitsPossible}`;
      break;
    case 5:
      s = `${mediumValuesOfDigitsPossible}`;
      break;
    case 6:
      s = `${mediumValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}`;
      break;
    case 7:
      s = `${mediumValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}`;
      break;
    case 8:
      s = `${mediumValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}${smallerValuesOfDigitsPossible}`;
      break;
    case 9:
      s = `${smallerValuesOfDigitsPossible}${maximumValuesOfDigitsPossible}`;
      break;
    default:
      s = '???';
  }
  return s;
}

/**
 * This function convert an arabic numbers to Roman symbols
 * @param n number
 * @return string
 */
export default function arabicDecimalToRoman(n: number): string {
  // limit number

  if (n >= 1 && n <= 4000) {
    const units = n % 10; // Get a units part of number
    const dizaines = Math.trunc(n / 10) % 10;
    const centaines = Math.trunc(n / 100) % 10;
    const milliers = Math.trunc(n / 1000) % 1000;

    return units + dizaines + centaines + milliers === 0
      ? ''
      : `${soustractionReplacement(
        milliers,
        'M',
        '?',
        '?',
      )}${soustractionReplacement(
        centaines,
        'C',
        'D',
        'M',
      )}${soustractionReplacement(
        dizaines,
        'X',
        'L',
        'C',
      )}${soustractionReplacement(units, 'I', 'V', 'X')}`;
  }
  return 'Nombre impossible à écrire en chiffres romains.';
}
