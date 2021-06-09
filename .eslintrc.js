module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
  },
};
