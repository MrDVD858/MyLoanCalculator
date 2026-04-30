
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://myloancalcs.com';

const routes = [
  // Main and Calculator Pages (Priority 0.9, weekly)
  { path: '/', priority: '0.9', changefreq: 'weekly' },
  { path: '/mortgage-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/auto-loan-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/personal-loan-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/student-loan-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/refinance-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/early-payoff-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/debt-consolidation-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/heloc-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/bi-weekly-payment-calculator', priority: '0.9', changefreq: 'weekly' },
  { path: '/loan-comparison-calculator', priority: '0.9', changefreq: 'weekly' },
  
  // Educational Pages (Priority 0.7, weekly)
  { path: '/what-is-apr', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-amortization', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-a-mortgage', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-interest-rate', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-a-down-payment', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-pmi', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-debt-to-income-ratio', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-refinancing', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-a-fixed-rate-loan', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-compound-interest', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-a-loan-term', priority: '0.7', changefreq: 'weekly' },
  { path: '/what-is-a-cosigner', priority: '0.7', changefreq: 'weekly' },
  
  // Utility Pages (Priority 0.6, monthly)
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.6', changefreq: 'monthly' },
  { path: '/terms', priority: '0.6', changefreq: 'monthly' }
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, 'public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap.xml
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent);
  
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
};

generateSitemap();
