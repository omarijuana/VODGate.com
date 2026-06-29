import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vodgate.com',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
});
