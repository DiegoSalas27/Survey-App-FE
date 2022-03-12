module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/presentation/components/router/**/*',
    '!**/*d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '@data/(.*)$': '<rootDir>/src/data/$1',
    '@domain/(.*)$': '<rootDir>/src/domain/$1',
    '@main/(.*)$': '<rootDir>/src/main/$1',
    '\\.scss$': 'identity-obj-proxy',
    '@validation/(.*)$': '<rootDir>/src/validation/$1'
  },
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  }
}
