if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(() => {
            console.log('Service Worker Registered');
        });
    });
}

function fetchJoke() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?type=single';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('joke').innerHTML = "Sorry, we couldn't fetch a joke at this time.";
            } else {
                document.getElementById('joke').innerHTML = data.joke;
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('joke').innerHTML = "An error occurred. Please try again.";
        });
}

window.onload = fetchJoke;
