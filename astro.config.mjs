import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import icon from "astro-icon";

import min from "astro-min";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  prefetch: {
    prefetchAll: true
  },
  build: {
    format: "file"
  },
  integrations: [tailwind(), icon({
    iconDir: "src/icons"
  }), pagefind()],
  
});