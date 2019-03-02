self.addEventListener('fetch', event => {

    const offlineHTML = fetch('pages/offline.html')
        .then(resp => resp.text());

    const offlineResp = new Response('pages/offline.html', {
        headers: {
            'Content': 'text/html'
        }
    });

    const resp = fetch(event.request)
        .catch(() => {
            return offlineResp;
        });

    event.respondWith(resp);

});