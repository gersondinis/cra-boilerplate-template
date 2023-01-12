/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: 'src',
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        // 'src/setupTests.ts',
      ],
    },
  }
})
