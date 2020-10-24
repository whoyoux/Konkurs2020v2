module.exports = {
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'registerServiceWorker.js',
            // ...other Workbox options...
            exclude: [/_redirects/],
        }
    }
}