#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from the same data sources used by the Angular routes.
 * Runs as a `prebuild` step so the sitemap is always in sync with routes/data.
 *
 * Reads slugs by regex from the .ts data files — avoids needing a TypeScript runtime.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SITE = 'https://www.silviovalentt.pt';
const today = new Date().toISOString().slice(0, 10);

function extractSlugs(filePath) {
  const text = readFileSync(filePath, 'utf8');
  // Match: slug: 'foo-bar' or slug: "foo-bar"
  const re = /slug:\s*['"]([a-z0-9-]+)['"]/g;
  const slugs = [];
  let m;
  while ((m = re.exec(text)) !== null) slugs.push(m[1]);
  return [...new Set(slugs)];
}

const portfolioSlugs = extractSlugs(join(root, 'src/app/services/portfolio.service.ts'));
const serviceSlugs = extractSlugs(join(root, 'src/app/services/services-data.ts'));

const urls = [
  { loc: '/',                          changefreq: 'monthly', priority: '1.0' },
  { loc: '/portfolio',                 changefreq: 'monthly', priority: '0.8' },
  ...portfolioSlugs.map(s => ({ loc: `/portfolio/${s}`, changefreq: 'yearly', priority: '0.6' })),
  ...serviceSlugs.map(s => ({ loc: `/servicos/${s}`,  changefreq: 'monthly', priority: '0.8' })),
  { loc: '/termos',                    changefreq: 'yearly',  priority: '0.3' },
  { loc: '/politica-privacidade',      changefreq: 'yearly',  priority: '0.3' }
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <xhtml:link rel="alternate" hreflang="pt-pt" href="${SITE}${u.loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${u.loc}"/>
  </url>`).join('\n')}
</urlset>
`;

const outPath = join(root, 'public/sitemap.xml');
writeFileSync(outPath, xml);

console.log(`✓ sitemap.xml — ${urls.length} URLs (${portfolioSlugs.length} portfolio, ${serviceSlugs.length} services)`);
