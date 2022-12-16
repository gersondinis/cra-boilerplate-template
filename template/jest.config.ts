/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export const config = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  modulePathIgnorePatterns: ['<rootDir>/.history/'],
  rootDir: 'src',
  moduleDirectories: ['node_modules', '<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  }
};

export default config;
