import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aiadventure.game-host.org/',
  integrations: [
    sitemap(),
  ],
});