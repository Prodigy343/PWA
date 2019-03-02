if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');

}

/*
if (window.caches) {
    caches.open('cache-v1.0')
        .then(cache => {

            cache.addAll([
                '/index.html',
                '/css/style.css',
                '/img/main.jpg'
            ]).then(() => {

                //testing cache deleting file
                cache.delete('/css/style.css');


                //here as we see we put any raw text in the specified file, so
                //we can update here that file with the last version in the server
                //querying it to the server
                cache.put('index.html', new Response('hola mundo'))
            });

            cache.match('/index.html')
            .then(res => {

            });

            //printing the key names of the cache files at the cache storage
            caches.keys().then(console.log);

        });
}
*/