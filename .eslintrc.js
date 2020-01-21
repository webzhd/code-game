module.exports = {
    parser: '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": 6,//也就是ES6语法支持的意思
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "project": "./tsconfig.json"
      },
    plugins: ['@typescript-eslint'],
    rules: {
        "comma-spacing": ["error"],
        quotes: ["error", "single"],
        "indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-double"],
        'no-var': "error",
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ]
    }
}