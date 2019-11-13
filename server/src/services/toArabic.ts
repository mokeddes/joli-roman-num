// Code Explanation
// * Create an array of Roman Numerals (romans) and associated arabic value.
// * Create a Map from the array
// * Create a function mapObjectOfvalueOfRomanCharsArray that returns value of a Roman symbol with get method from the Map
// * Create principal function romanToDecimalArabic that convert roman numerals to arabic decimal
// * Initialise res to 0 and loop over the romanString
// * Getting value of symbol s[i] and comparing with value of s[i+1] if Value of s[i] symbol is greater or equal to the next symbol res +=  s[i] else res += s[i+1]-  s[i] and move index
// *  Repeate Until the end of loop
// return value

// An array of available roman elementary value
const valueOfRomanCharsArray: [string, number][] = [
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
];
// Create a Map of elementary roman symbol and associated value
const mapObjectOfvalueOfRomanCharsArray = new Map(valueOfRomanCharsArray);

/**
 * This function returns value of a Roman symbol
 * @param  romanChar string
 * @return number
 */

function numberValueCorrespandanceOfRomanCharMap(
  romanChar: string,
): number | undefined {
  return mapObjectOfvalueOfRomanCharsArray.get(romanChar);
}

/**
 * This function decimal value of roman numaral
 * @param romanString String
 * @return number
 */
//
export default function romanToDecimalArabic(romanString: string): number {
  // Initialize result
  let res = 0;

  // Traverse given input
  for (let i = 0; i < romanString.length; i++) {
    // Getting value of symbol s[i]
    const s1 = numberValueCorrespandanceOfRomanCharMap(romanString[i]);

    if (i + 1 < romanString.length) {
      // Getting value of symbol s[i+1]
      const s2 = numberValueCorrespandanceOfRomanCharMap(romanString[i + 1]);

      // Comparing both values
      if (s1 >= s2) {
        // Value of current symbol is greater or equal to the next symbol
        res += s1;
      } else {
        res = res + s2 - s1;
        i += 1; // Value of current symbol is
        // less than the next symbol
      }
    } else {
      res += s1;
    }
  }
  return res;
}
