import MovieDetails from "../components/MovieDetails";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import addToWatchList from "../functions/AddToWatchList";
import { useNavigate } from "react-router-dom";
import { loadMovie, saveMovie } from "../functions/saveInfo";

export default function Movies({
  animeSearchList,
  animeWatchList,
  setSearchValue,
  searchValue,
  handleClick,
  renderPopupInfo,
}) {
  const navigate = useNavigate();

  let animeSearchListItem;
  if (animeSearchList.data && animeSearchList.data.length > 0) {
    animeSearchListItem = animeSearchList.data.map((anime) => (
      <MovieDetails
        id={anime.id}
        key={anime.id}
        srcImage={anime.attributes.posterImage.large}
        title={anime.attributes.canonicalTitle}
        sinopsis={anime.attributes.description}
        rate={anime.attributes.averageRating}
        date={anime.attributes.createdAt}
        episode={anime.attributes.episodeCount}
        addToWatchList={() => {
          addToWatchList(anime, animeWatchList, renderPopupInfo);
        }}
        onWatch={() => {
          saveMovie("currentMoviePlayed", anime);
          navigate("/Watch");
        }}
        animeWatchList={animeWatchList}
      />
    ));
  }
  return (
    <section className="container-fluid p-0 bg-secondary text-light mb-32 ">
      <SearchBar
        is_fixed={true}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        handleClick={handleClick}
      />
      <div className=" container-fluid d-flex flex-column row-gap-32 justify-content-center ps-md-156 pe-md-32 pt-256 pb-16 pt-sm-128">
        {animeSearchList.data && animeSearchList.data.length > 0 ? (
          [animeSearchListItem]
        ) : (
          <p className="_lead text-primary text-center">No anime match</p>
        )}
      </div>
      <div className="container-fluid mt-32">
        <Footer></Footer>
      </div>
    </section>
  );
}
