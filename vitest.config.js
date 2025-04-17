import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // enables `test`, `expect`, etc. globally
    environment: 'jsdom', // sets up browser-like environment for React testing
    setupFiles: './src/setupTests.js', // optional, for custom setups
  },
});
