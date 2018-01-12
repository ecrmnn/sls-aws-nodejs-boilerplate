module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    node: true,
  },
  plugins: [
    'import',
  ],
  rules: {
    'require-yield': 0,
  }
};
