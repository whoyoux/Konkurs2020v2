module.exports = {
    pwa: {
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'service-worker.js',
        // ...other Workbox options...
        exclude: [/\.map$/, /_redirects/],
      }
    }
}