import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const PUBLISHED_SITE = "https://rezwanbinmizan.github.io/";

function resolvePages() {
  const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
  if (!owner || !repo) {
    return { base: "/", siteUrl: "" };
  }
  if (repo.endsWith(".github.io")) {
    return { base: "/", siteUrl: `https://${repo}/` };
  }
  return {
    base: `/${repo}/`,
    siteUrl: `https://${owner}.github.io/${repo}/`,
  };
}

function githubPagesPlugin(siteUrl: string, outDir: string): Plugin {
  return {
    name: "github-pages",
    transformIndexHtml(html) {
      if (!siteUrl) return html;
      return html.replaceAll(PUBLISHED_SITE, siteUrl);
    },
    closeBundle() {
      if (!siteUrl || !fs.existsSync(outDir)) return;
      const indexPath = path.join(outDir, "index.html");
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, path.join(outDir, "404.html"));
      }
      fs.writeFileSync(
        path.join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      );
      fs.writeFileSync(
        path.join(outDir, "robots.txt"),
        `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
      );
    },
  };
}

const pages = resolvePages();
const outDir = path.resolve(import.meta.dirname, "dist/public");

export default defineConfig({
  base: pages.base,
  plugins: [
    react(),
    githubPagesPlugin(pages.siteUrl, outDir),
    ...(process.env.NODE_ENV !== "production" ? [runtimeErrorOverlay()] : []),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
