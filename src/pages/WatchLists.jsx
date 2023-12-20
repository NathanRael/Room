import WatchList from "../components/WatchList";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { loadMovie, saveMovie } from "../functions/saveInfo";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import Navbar from "../components/Navbar";

export default function WatchLists() {
  const { animeWatchList, setAnimeWatchList } = useContext(DataContext);
  const [watchedList, setWatchedList] = useState(animeWatchList);
  const navigate = useNavigate();
  
  let animeWatchListItem;
  if (watchedList.length > 0) {
    animeWatchListItem = watchedList.map((anime) => (
      <WatchList
        key={anime.id}
        srcImage={anime.attributes.posterImage.large}
        title={anime.attributes.canonicalTitle}
        handleclick={() => {
          removeList(anime.id);
          setAnimeWatchList(loadMovie("watchList") || []);
        }}
        onWatch={() => {
          // saveMovie("currentMoviePlayed", anime);
          navigate(`/Watch/${anime.attributes.slug}/${anime.id}`);
        }}
      />
    ));
  }

  function removeList(id) {
    setWatchedList((prevWatchedList) => {
      let newWatchedList = prevWatchedList.filter((movie) => id != movie.id);
      saveMovie("watchList", newWatchedList);
      return newWatchedList;
    });
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <SearchBar is_fixed={false} showSearchBar={false} title="Watch List" />
      </div>
      <div className="bg-secondary container-fluid p-0 ps-md-156 pe-md-16">
        <div className="d-flex flex-column row-gap-32 justify-content-center   pt-256 pb-128 py-md-128">
          {watchedList.length > 0 ? (
              [animeWatchListItem]
          ) : (
            <p className="_lead  text-primary text-center me-md-128">
              Empty watch list
            </p>
          )}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
