import { defineConfig } from 'vite';
import postcss from './postcss.config.cjs';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  server: {
    csp: {
      'script-src': ['self', 'https://clerk.accounts.dev', 'https://.clerk.com', 'https://.sentry-cdn.com'],
      'connect-src': ['self', 'https://clerk.accounts.dev', 'https://.clerk.com', 'https://.sentry-cdn.com', 'https://*.ingest.sentry.io'],
    },
  },
});