const path = require('path'); // used for path resolution
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier',
    ],

    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: {
        react: { version: '18.2' },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
            //  Used to give aliases to absolute paths and resolve them
            alias: [
                ['~', path.resolve(__dirname, './src')],
                ['views', path.resolve(__dirname, './src/views')],
            ],
        },
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
