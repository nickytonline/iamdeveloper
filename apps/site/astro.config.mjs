import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/site',
  integrations: [mdx(), sitemap()],
  // TODO: Change this to https://iamdeveloper.com when before the site goes live
  site: isProduction ? 'https://iamdeveloper-dot-com-beta.netlify.app' : 'http://localhost:3000',
});