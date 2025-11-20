import { siteConfig } from "@/lib/siteConfig";

const trailingSlashRegex = /\/$/;

export function GET() {
  const sitemapUrl = `${siteConfig.url.replace(trailingSlashRegex, "")}/sitemap.xml`;
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
