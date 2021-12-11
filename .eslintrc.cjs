module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ['svelte3', "tailwindcss"],
  extends: ['plugin:tailwindcss/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    }
  ],
  rules: {
    'no-unused-vars': ['warn', { args: 'none' }],
  },
};
