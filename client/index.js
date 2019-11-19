const introducedValueArabic = document.querySelector('#introducedValueArabic');
const convertToRoman = document.querySelector('#convertToRoman');
const resultRoman = document.querySelector('#resultRoman');

const introducedValueRoman = document.querySelector('#introducedValueRoman');
const convertToArabic = document.querySelector('#convertToArabic');
const resultArabic = document.querySelector('#resultArabic');
if (window.EventSource) {
  convertToRoman.addEventListener('click', async () => {
    await fetch(`http://localhost:${process.env.PORT}/to-roman`, {
      method: 'POST',
      body: JSON.stringify({
        arabicNumber: Number(introducedValueArabic.value),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  convertToArabic.addEventListener('click', async () => {
    await fetch(`http://localhost:${process.env.PORT}/to-arabic`, {
      method: 'POST',
      body: JSON.stringify({
        romanSymbols: introducedValueRoman.value.toUpperCase(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
}

function log(msg) {
  document.querySelector('#logElem').innerHTML += `Event: ${msg}<br>`;
}

if (!window.EventSource) {
  // IE or an old browser
  alert("The browser doesn't support EventSource.");
} else {
  const eventSource = new EventSource(
    `http://localhost:${process.env.PORT}/event-stream`,
  );

  eventSource.onopen = () => {
    log('Event: open');
  };

  eventSource.onerror = () => {
    log('Event: error');
    if (this.readyState == EventSource.CONNECTING) {
      log(`Reconnecting (readyState=${this.readyState})...`);
    } else {
      log('Error has occured.');
    }
  };

  eventSource.addEventListener(
    'update-resultArabic',
    (evt) => {
      log('Event: new data update-resultArabic');
      const data = JSON.parse(evt.data);
      const { arabicNumber } = data;
      resultArabic.value = arabicNumber;
      // Use data here
    },
    false,
  );
  eventSource.addEventListener(
    'update-resultRoman',
    (evt) => {
      log('Event: new data update-resultRoman');
      const data = JSON.parse(evt.data);
      const { romanSymbols } = data;
      resultRoman.value = romanSymbols;
      // Use data here
    },
    false,
  );
}
