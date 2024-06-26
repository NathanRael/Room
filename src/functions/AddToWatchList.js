import { saveMovie } from "./saveInfo";

import { useContext } from "react";
export default function addToWatchList(newAnime, animeWatchList, renderPopupInfo) {
  const exists = animeWatchList?.some(anime => anime.id === newAnime.id);

  if (!exists) {
    newAnime = {
      ...newAnime,
      addedToWatchList : true
    }
    animeWatchList.push(newAnime);
    saveMovie('watchList', animeWatchList);
    renderPopupInfo('Anime added to watchList');
  } else {
    renderPopupInfo('This anime is already in the watch list', false);
  }

  }
  
  