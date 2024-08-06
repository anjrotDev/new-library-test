import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode }) => {
  // Verifica si estamos construyendo para Storybook
  const isStorybookBuild = process.env.STORYBOOK_BUILD === "true";

  return {
    plugins: [
      react(),
      // Condicionalmente aplica vite-plugin-dts
      !isStorybookBuild &&
        dts({
          tsconfigPath: "./tsconfig.json",
          rollupTypes: true
        })
    ].filter(Boolean), // Filtra plugins para eliminar los undefined
    build: {
      lib: {
        entry: resolve(__dirname, "src/main.ts"),
        name: "anjrot-library",
        fileName: "anjrot-library"
      },
      rollupOptions: {
        external: ["react", "react-dom", "react/jsx-runtime"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDom",
            "react/jsx-runtime": "react/jsx-runtime"
          }
        }
      }
    }
  };
});
