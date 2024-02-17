import { defineConfig } from 'vitest/config';
import configuration from './vite.config';

export default defineConfig({
  ...configuration,
  test: {
    include: ['**/*.test.ts'],
  },
});
