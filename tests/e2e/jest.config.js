module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  globals: {
    URL: 'http://localhost:6893',
  },
};
