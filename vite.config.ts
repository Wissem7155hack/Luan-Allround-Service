import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // Use a relative base so the built `dist` works on root or subpath hosts.
  // This avoids absolute `/RepoName/` URLs which can 404 on custom domains.
  return {
    base: '/', // Custom domain - no subdirectory needed
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://luan-allround-service.de',
        outDir: 'dist', // Ensure sitemap is in dist folder
        dynamicRoutes: (() => {
          // Generate all 50 Service × City combinations
          const services = ['zaunbau', 'rasenpflege', 'gartenpflege', 'rollrasen', 'heckenschnitt', 'pflasterarbeiten', 'terrassenbau', 'sichtschutz', 'gabionen', 'baumpflege'];
          const cities = ['kuppenheim', 'rastatt', 'baden-baden', 'karlsruhe', 'gaggenau'];

          const serviceRoutes = services.flatMap(service =>
            cities.map(city => `/${service}-${city}`)
          );

          const locationRoutes = cities.map(city => `/standorte/${city}`);

          const blogRoutes = [
            'zaunbau-kuppenheim-ratgeber',
            'gartenpflege-landschaftsbau-jahresplan',
            'pflasterarbeiten-terrassenbau-baden',
            'sichtschutz-und-privatsphaere',
            'farbe-form-funktionalitaet-kuppenheim',
            'sportanlage-stadion-zaun'
          ].map(slug => `/blog/${slug}`);

          // Add static routes
          const staticRoutes = [
            '/',
            '/leistungen',
            '/services',
            '/projekte',
            '/projects',
            '/galerie',
            '/gallery',
            '/blog',
            '/ueber-uns',
            '/about',
            '/kontakt',
            '/contact',
            '/impressum',
            '/datenschutz'
          ];

          return [...staticRoutes, ...locationRoutes, ...serviceRoutes, ...blogRoutes];
        })()
      })
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      sourcemap: false
    }
  };
});