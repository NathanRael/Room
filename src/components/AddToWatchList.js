import { saveMovie } from "./Functions";
function addToWatchList(newAnime, animeWatchList) {
    const exists = animeWatchList  ?  animeWatchList.some(anime => anime.id === newAnime.id) : false;
  
    if (!exists) {
      newAnime = {
        ...newAnime,
        addedToWatchList : true
      }
      animeWatchList.push(newAnime);
      saveMovie('watchList', animeWatchList);
      alert('Anime added to watch list');
    } else {
      alert('Anime already in the watch list');
    }
  }
  
export default addToWatchList;
  