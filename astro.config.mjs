import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [svelte()]
});