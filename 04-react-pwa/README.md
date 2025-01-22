# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Make it PWA

To convert your React app created in Vite into a Progressive Web App, follow these steps:

### 1. Install the PWA Vite Plugin

```bash
npm install -D vite-plugin-pwa
```

### 2. Configure `vite.config.js` to Support PWA

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate'
    })
  ]
})
```

### 3. Configure the Service Worker for Caching

To start caching assets and other files, modify your service worker configuration in `vite.config.js`:

```js
// vite.config.js
VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}']
  }
})
```

This ensures that all relevant assets like JavaScript, CSS, HTML, and images are cached for offline use.

### 4. Configure the Web App Manifest

The PWA requires a Web App Manifest to provide essential details about the app (like name, icons, theme color, etc.). You can configure it as follows:

1. Generate the necessary images and manifest files using a tool like [Favicon InBrowser.App](https://favicon.inbrowser.app/tools/favicon-generator).

2. Update the `<head>` section of your HTML (usually `index.html`) to include the following:

```html
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>My Awesome PWA</title>
    <meta name="description" content="PWA app with React + Vite">
    <link rel="icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
    <link rel="mask-icon" href="/pwa-maskable-192x192.png" color="#E0EBAF">
    <meta name="theme-color" content="#71D94E">
  </head>
```

4. Add the minimal required web app manifest in `vite.config.js`:

```js
export default defineConfig({
  plugins: [
    VitePWA({
      // ...other configs
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

### 5. Test Your PWA

Once the above steps are completed, build and serve your app using the following commands:

```bash
npm run build
npm run preview
```

Now you can test your app as a PWAp by opening it in a browser, checking the app's behavior offline, and verifying the manifest and service worker functionality.