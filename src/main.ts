/**
 * @file src main.ts
 * @description 应用入口文件
 * @since 1.0.0
 */

import "./assets/css/index.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app") as HTMLElement,
});

export default app;
