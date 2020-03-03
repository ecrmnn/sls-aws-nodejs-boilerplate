module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'script',
  },
  plugins: [
    'import',
  ],
  rules: {
    'curly': 'error',
    'newline-before-return': 'error',
    'no-console': 'error',
    'no-ternary': 'error',
    // Disable comma-dangle for functions because this causes syntax error in Node.js
    'comma-dangle': [
      'error',
      'always-multiline',
      '{functions: never}',
    ],
  },
  env: {
    node: true,
  },
};