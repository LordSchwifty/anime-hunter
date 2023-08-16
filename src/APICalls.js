function getTopMovies() {
    return fetch('https://api.jikan.moe/v4/top/anime')
    .then(response => response.json())
}

export default getTopMovies;