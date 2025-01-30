module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/**.ts', '**/?(*.)+(spec|test).ts'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  collectCoverage: true,
  collectCoverageFrom:['./src/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'json', 'clover']
};
