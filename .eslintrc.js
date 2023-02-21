module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/jsx-runtime',
        'standard-with-typescript'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': [2, 4]
    },
    globals: {
        IS_DEV: true
    }
}
