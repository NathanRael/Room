export default function redirect(animeId){//to know what movie to play inside the watchMovie
    localStorage.setItem('currentMoviePlayed', animeId);
    window.location.pathname =  '/Watch';
}