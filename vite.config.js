import { defineConfig } from "vite";

const config = defineConfig({
  root: "src",
  base: "/WB_LVL_2_music/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});

export default config;
