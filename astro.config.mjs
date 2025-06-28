import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://ozasnidev-astro-blog.netlify.app/",
  integrations: [preact()]
});