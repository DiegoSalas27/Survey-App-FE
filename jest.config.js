module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts,tsx)'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    // '@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '@data/(.*)$': '<rootDir>/src/data/$1',
    '@domain/(.*)$': '<rootDir>/src/domain/$1'
    // '@main/(.*)$': '<rootDir>/src/main/$1',
    // '@validation/(.*)$': '<rootDir>/src/validation/$1'
  },
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
