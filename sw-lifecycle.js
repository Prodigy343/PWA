//Installing SW

self.addEventListener('install', event => {

    //Descargar assets
    //Create cache
    console.log("SW: installing service worker");

    const installing = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);
    });

    event.waitUntil(installing);

});

self.addEventListener('activate', event => {

    //Borrar cache viejo
    console.log('SW2: Activo y listo para controlar la app');

});

self.addEventListener('fetch', event => {

    console.log(" SW-FETCH: ", event.request.url);

    if (event.request.url.includes('https://reqres.in')) {

        const resp = new Response(`{ ok: false, mensaje: 'jajaja' }`);
        let r = JSON.stringify({ ok: false, mensaje: 'jajaja' });

        event.respondWith(resp);
    }

});