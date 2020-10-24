module.exports = {
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
          exclude: [/\.map$/, /_redirects/],
          // ...other Workbox options...
        }
    }
}