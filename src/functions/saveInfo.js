export function saveMovie(movieName, movie) {
    localStorage.setItem(movieName, JSON.stringify(movie));
}

export function loadMovie(movieName) {
    return JSON.parse(localStorage.getItem(movieName));
}
