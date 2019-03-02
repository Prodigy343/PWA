self.addEventListener('install', event => {

    const cachePromise = caches.open('cache-1')
        .then(cache => {
            return cache.addAll([
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                '/js/app.js'
            ]);
        });

    event.waitUntil(cachePromise);

});