import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svg from "@neodx/svg/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svg({
      root: "src/shared/assets/icons/",
      output: "public/sprites",
      group: true,
      fileName: "{name}.{hash:8}.svg",
      metadata: {
        path: "src/shared/ui/icons/sprite.gen.ts",
        runtime: {
          size: true,
          viewBox: true,
        },
      },
    }),
  ]
});
