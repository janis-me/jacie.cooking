// @ts-check
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import scriptEmbed from '@brandonaaron/astro-script-embed';
import webmanifest from 'astro-webmanifest';
import { defineConfig, passthroughImageService } from 'astro/config';
import surimi from 'vite-plugin-surimi';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://jacie.cooking',

  integrations: [
    sitemap(),
    webmanifest({
      name: 'jacie.cooking',

      /**
       * optional
       **/
      short_name: 'jacie.cooking',
      description: 'Food blog and recipes by Jacie',
      start_url: '/',
      theme_color: '#212529',
      background_color: '#212529',
      display: 'standalone',
    }),
    scriptEmbed(),
  ],

  vite: {
    plugins: [surimi()],
  },
});
