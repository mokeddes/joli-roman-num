const introducedValueArabic = document.querySelector('#introducedValueArabic');
const convertToRoman = document.querySelector('#convertToRoman');
const resultRoman = document.querySelector('#resultRoman');

const introducedValueRoman = document.querySelector('#introducedValueRoman');
const convertToArabic = document.querySelector('#convertToArabic');
const resultArabic = document.querySelector('#resultArabic');

convertToRoman.addEventListener('click', async () => {
  const responseCallConvertToRoman = await fetch(
    `http://localhost:${process.env.PORT}/to-roman`,
    {
      method: 'POST',
      body: JSON.stringify({
        arabicNumber: Number(introducedValueArabic.value),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const myNumberConverted = await responseCallConvertToRoman.json();

  const { romanSymbols } = myNumberConverted;
  resultRoman.value = romanSymbols;
});

convertToArabic.addEventListener('click', async () => {
  const responseCallConvertToArabic = await fetch(
    `http://localhost:${process.env.PORT}/to-arabic`,
    {
      method: 'POST',
      body: JSON.stringify({
        romanSymbols: introducedValueRoman.value.toUpperCase(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const myNumberConverted = await responseCallConvertToArabic.json();

  const { arabicNumber } = myNumberConverted;
  resultArabic.value = arabicNumber;
});

// {
//   method: 'post',
//   headers: {
//     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//   },
//   body: 'foo=bar&lorem=ipsum'
// }
