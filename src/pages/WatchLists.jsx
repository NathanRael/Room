import WatchList from "../components/WatchList";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { saveMovie } from "../components/Functions";
import { useNavigate } from "react-router-dom";

export default function WatchLists({ animeWatchList }) {
  const [watchedList, setWatchedList] = useState(animeWatchList);
  const navigate = useNavigate();

  function removeList(id) {
    setWatchedList((prevWatchedList) => {
      let newWatchedList = prevWatchedList.filter((movie) => id != movie.id);
      saveMovie("watchList", newWatchedList);
      return newWatchedList;
    });
  }
  
  let animeWatchListItem = watchedList.map((anime) => (
    <WatchList
      key={anime.id}
      srcImage={anime.srcImage}
      title={anime.title}
      handleclick={() => removeList(anime.id)}
      onWatch={() => {
        saveMovie(anime.id);
        navigate("/Watch");
      }}
    />
  ));
  return (
    <div className="container-fluid p-0">
      <SearchBar is_fixed={false} showSearchBar={false} title="WatchList" />
      <div className="d-flex flex-column row-gap-32 justify-content-center ps-md-156 pe-md-32 pt-256 pb-128 py-md-128">
        {watchedList.length > 0 ? (
          [animeWatchListItem]
        ) : (
          <p className="_lead  text-primary text-center me-md-128">Empty watch list</p>
        )}
      </div>
      <Footer></Footer> 
    </div>
  );
}
