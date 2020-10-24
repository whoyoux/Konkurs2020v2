module.exports = {
    pwa: {
      workboxOptions: {
        workboxPluginMode: "InjectManifest",
        // swSrc is required in InjectManifest mode.
        swSrc: 'registerServiceWorker.js',
        // ...other Workbox options...
        exclude: [/\.map$/, /_redirects/],
      }
    }
}