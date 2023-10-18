module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**', '!**/vendor/**'],
  coverageDirectory: 'coverage',
};
