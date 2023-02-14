
export const config = {
    transform: { '^.+\\.(ts|tsx|cts|mts)$': [ 'ts-jest' ] },
    roots: [ '<rootDir>/src' ],
    transformIgnorePatterns: [],
    extensionsToTreatAsEsm: [ '.ts', '.tsx', '.mts' ],
    testMatch: [ '**/*.test.(js|jsx|ts|tsx)' ],
    resetMocks: true,
    watchPlugins: []
}

console.log('config: ', config)

export default config