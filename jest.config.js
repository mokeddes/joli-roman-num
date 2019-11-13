module.exports = {
  roots: ["<rootDir>"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
    "tests/**/*.+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  modulePathIgnorePatterns: ["<rootDir>/tests/e2e/"],
  globals: {
    URL: "http://localhost:6893"
  },
  verbose: true
};
