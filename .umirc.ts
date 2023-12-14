import { defineConfig } from "umi";

export default defineConfig({
  base: "/code-game",
  publicPath: "/",
  title: "打字练习",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
