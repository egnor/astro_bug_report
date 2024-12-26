import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  base: 'site_base/',
  build: { format: 'file' },
  site: 'https://site.domain',
  integrations: [sitemap()],
});
