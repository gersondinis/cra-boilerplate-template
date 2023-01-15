/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  test: {
    root: 'src',
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
      ],
    },
  }
})
