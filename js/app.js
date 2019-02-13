if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw-lifecycle.js')
        .then(reg => {
            setTimeout(() => {
                reg.sync.register('posteo-gatitos');
            }, 3000);
        });

}

/*fetch('https://reqres.in/api/users')
    .then(resp => resp.text())
    .then(console.log);*/