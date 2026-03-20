import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'NurseCare AI',
        short_name: 'NurseCare',
        description: 'AI-powered nursing care plans, drug reference & lab guide — NANDA-I evidence-based',
        theme_color: '#2c5f6a',
        background_color: '#2c5f6a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        shortcuts: [
          {
            name: 'Drug Search',
            short_name: 'Drugs',
            description: 'Search drugs by name, brand or condition',
            url: '/',
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
          {
            name: 'Care Plan',
            short_name: 'Care Plan',
            description: 'Generate AI nursing care plans',
            url: '/plan',
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
          {
            name: 'Lab Guide',
            short_name: 'Labs',
            description: 'Laboratory reference guide',
            url: '/labs',
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
        ],
      },
      workbox: {
        // Cache all app shell files
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // Cache strategies
        runtimeCaching: [
          {
            // Cache Firebase API calls — network first, fall back to cache
            urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'firebase-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
            },
          },
          {
            // Cache Anthropic AI calls — network only (never cache AI responses)
            urlPattern: /^https:\/\/api\.anthropic\.com\/.*/i,
            handler: 'NetworkOnly',
          },
          {
            // Cache Google Fonts
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
        // Don't cache firebase config or env files
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
      },
      devOptions: {
        enabled: false, // set to true to test PWA in dev
      },
    }),
  ],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/database'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'labs-data': ['./src/data/labsData.js'],
          'drug-data': ['./src/data/drugClasses.js'],
        },
      },
    },
  },
});
