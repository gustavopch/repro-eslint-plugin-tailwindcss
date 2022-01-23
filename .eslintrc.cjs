module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ['svelte3', 'tailwindcss'],
  extends: ['plugin:tailwindcss/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: require.resolve("@angular-eslint/template-parser"),
    }
  ],
  rules: {
    'no-unused-vars': ['warn', { args: 'none' }],
  },
};
