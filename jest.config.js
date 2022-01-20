const config = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    // '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.tsx?$': 'ts-jest',
    // '.(css|scss)$': '<rootDir>/src/tests/mocks/cssStub.ts',
  },

  testEnvironment: 'jsdom',

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // Test spec file resolution pattern
  // Matches parent folder `tests` and filename
  // should contain `test` or `spec`.
  // testRegex: '(src/tests/.*|(\\.|/))\\spec.tsx?$',
  testRegex: 'src/tests/(.*).spec.tsx$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
}

export default config
