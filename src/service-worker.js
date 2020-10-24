self.addEventListener('message', (event) => {

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
self.precaching.precacheAndRoute(self.__precacheManifest, {});