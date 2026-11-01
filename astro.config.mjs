import { defineConfig } from 'astro/config';

// El sitemap se genera en src/pages/sitemap.xml.ts (una sola fuente: src/data/pages.ts)
export default defineConfig({
  site: 'https://floweb.com.co',
  trailingSlash: 'always',
});
