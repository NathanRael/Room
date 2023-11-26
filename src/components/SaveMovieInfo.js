
export default function saveMovieInfo(animeId) {//to know what movie to play inside the watchMovie
    localStorage.setItem('currentMoviePlayed', animeId);
}