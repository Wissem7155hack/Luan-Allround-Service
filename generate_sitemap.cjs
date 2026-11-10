const fs = require('fs');

const BASE_URL = 'https://luan-allround-service.de';
const TODAY = new Date().toISOString().split('T')[0]; // 2026-09-16

// Core Pages
const corePages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/zaun-konfigurator', changefreq: 'daily', priority: '1.0' },
  { url: '/leistungen', changefreq: 'weekly', priority: '0.9' },
  { url: '/projekte', changefreq: 'weekly', priority: '0.8' },
  { url: '/galerie', changefreq: 'weekly', priority: '0.8' },
  { url: '/blog', changefreq: 'weekly', priority: '0.8' },
  { url: '/ueber-uns', changefreq: 'monthly', priority: '0.8' },
  { url: '/kontakt', changefreq: 'monthly', priority: '0.9' },
  { url: '/impressum', changefreq: 'yearly', priority: '0.3' },
  { url: '/datenschutz', changefreq: 'yearly', priority: '0.3' }
];

// Standorte Pages
const locations = ['kuppenheim', 'rastatt', 'baden-baden', 'karlsruhe', 'gaggenau', 'bischweier', 'waldbronn', 'landau'];
const locationPages = locations.map(loc => ({
  url: `/standorte/${loc}`,
  changefreq: 'weekly',
  priority: loc === 'kuppenheim' || loc === 'rastatt' ? '0.9' : '0.8'
}));

// Service x City Pages (50 combinations)
const services = [
  'zaunbau',
  'rasenpflege',
  'gartenpflege',
  'rollrasen',
  'heckenschnitt',
  'pflasterarbeiten',
  'terrassenbau',
  'sichtschutz',
  'gabionen',
  'baumpflege'
];

const servicePages = [];
services.forEach(service => {
  locations.forEach(city => {
    const isPriorityTarget = (city === 'kuppenheim' || city === 'rastatt') &&
      (service === 'zaunbau' || service === 'pflasterarbeiten' || service === 'gartenpflege' || service === 'terrassenbau');
    servicePages.push({
      url: `/${service}-${city}`,
      changefreq: 'weekly',
      priority: isPriorityTarget ? '0.9' : '0.8'
    });
  });
});

// Blog Posts
const blogPosts = [
  'zaunbau-kuppenheim-ratgeber',
  'gartenpflege-landschaftsbau-jahresplan',
  'pflasterarbeiten-terrassenbau-baden',
  'sichtschutz-und-privatsphaere',
  'farbe-form-funktionalitaet-kuppenheim',
  'sportanlage-stadion-zaun'
].map(slug => ({
  url: `/blog/${slug}`,
  changefreq: 'monthly',
  priority: '0.7'
}));

const allUrls = [...corePages, ...locationPages, ...servicePages, ...blogPosts];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

allUrls.forEach(item => {
  xml += '  <url>\n';
  xml += `    <loc>${BASE_URL}${item.url}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
  xml += `    <priority>${item.priority}</priority>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>';

// Write to public/sitemap.xml and root sitemap.xml
fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
fs.writeFileSync('sitemap.xml', xml, 'utf8');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://luan-allround-service.de/sitemap.xml
`;

fs.writeFileSync('public/robots.txt', robotsTxt, 'utf8');
fs.writeFileSync('robots.txt', robotsTxt, 'utf8');

console.log(`Successfully generated sitemap.xml with ${allUrls.length} URLs (with <lastmod> and <changefreq>) and updated robots.txt!`);
