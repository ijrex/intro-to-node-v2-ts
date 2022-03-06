import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testPathIgnorePatterns: ['./lib.spec.ts'],
}

export default config
