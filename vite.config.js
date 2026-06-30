import { defineConfig } from "vite";
import { resolve } from "path";
import { readdirSync, existsSync } from "fs";

const blogDir = resolve(__dirname, "blog/posts");
const input = { main: resolve(__dirname, "index.html") };

if (existsSync(resolve(__dirname, "blog/index.html"))) {
  input.blog = resolve(__dirname, "blog/index.html");
}

if (existsSync(blogDir)) {
  for (const file of readdirSync(blogDir)) {
    if (file.endsWith(".html")) {
      const slug = file.replace(".html", "");
      input[`blog-${slug}`] = resolve(blogDir, file);
    }
  }
}

export default defineConfig({
  build: {
    rollupOptions: { input },
  },
});
