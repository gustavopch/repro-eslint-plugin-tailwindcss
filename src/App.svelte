<script>
  // ESLint understands the Svelte syntax and can detect this rule violation
  const x = "";
</script>

<!-- ESLint should detect a violation of "tailwindcss/no-contradicting-classname" here, but it doesn't -->
<h1 class="p-2 p-4">Hello, World!</h1>
