// addToWatchList.js
function addToWatchList(newAnime, animeWatchList) {
    const exists = animeWatchList.some(anime => anime.id === newAnime.id);
  
    if (!exists) {
      animeWatchList.push(newAnime);
      alert('Anime added to watch list');
    } else {
      alert('Anime already in the watch list');
    }
  }
  
export default addToWatchList;
  