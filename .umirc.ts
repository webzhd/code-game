import { defineConfig } from "umi";

export default defineConfig({
  base: "/",
  publicPath: "/code-game/",
  title: "打字练习",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
