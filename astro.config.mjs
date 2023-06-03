import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://kodahead.netlify.app",
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker"
    }
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), alpinejs(), partytown(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx()]
});