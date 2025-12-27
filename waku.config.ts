import { defineConfig } from 'waku/config';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '#app': resolve(rootDir, 'src'),
      },
    },
  },
});
