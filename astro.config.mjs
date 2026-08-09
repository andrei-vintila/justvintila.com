// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    // static resume site — no runtime images or sessions, skip those bindings
    imageService: 'compile',
  })
});