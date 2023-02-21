module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/jsx-runtime',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react',
        'i18next'
    ],
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': [2, 4],
        'i18next/no-literal-string': ['error', { markupOnly: true }]
    },
    globals: {
        IS_DEV: true
    }
}
