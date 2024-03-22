import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import icon from "astro-icon";

import compress from "astro-compress";

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
  }), pagefind(), compress()]
});