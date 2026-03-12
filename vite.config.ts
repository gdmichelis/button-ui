import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
    libInjectCss(),
  ],

  build: {
    //Library entry point and output configuration
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "button-ui",
      fileName: "button-ui",
    },

    //Externalize dependencies to avoid bundling them into the library
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
