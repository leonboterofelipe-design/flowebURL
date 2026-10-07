import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://floweb.com.co',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
