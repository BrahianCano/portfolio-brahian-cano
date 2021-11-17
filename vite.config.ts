import { defineConfig } from "vite";
import { resolve } from "path";
import { minifyHtml, injectHtml } from 'vite-plugin-html'

export default defineConfig({
  build: {
    lib: {
      entry: "src/my-element.ts",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins:[
    minifyHtml()
  ]
});