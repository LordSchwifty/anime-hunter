function getTopMovies() {
    return fetch('https://api.jikan.moe/v4/top/anime')
    .then(response => response.json())
}

function searchMovies(query) {
    return fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`)
    .then(response => response.json())
}

export default getTopMovies;