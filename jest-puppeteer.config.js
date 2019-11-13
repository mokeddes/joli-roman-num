module.exports = {
  launch: {
    dumpio: true,
    headless: false,
    devtools: true,
  },
  browserContext: 'default',
  server: {
    command: 'node ./dist-back/src/index.js',
    launchTimeout: 100000,
  },

  slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
  devtools: true,
};
