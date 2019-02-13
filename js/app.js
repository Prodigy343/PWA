if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw-lifecycle.js');
}

fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(console.log);