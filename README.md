# Repro for `eslint-plugin-tailwindcss`

The plugin doesn't support Svelte.

- Open `src/App.svelte` and read its comments
- Run `yarn lint` and observe that ESLint doesn't complain about `tailwindcss/no-contradicting-classname` (it should!)
