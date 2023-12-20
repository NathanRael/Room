import MovieDetails from "../components/MovieDetails";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import addToWatchList from "../functions/AddToWatchList";
import { useNavigate } from "react-router-dom";
import { loadMovie, saveMovie } from "../functions/saveInfo";
import Load from "../components/Load";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import Navbar from "../components/Navbar";

export default function Movies({}) {
  const {
    error,
    animeSearchList,
    animeSearchListLoading,
    animeWatchList,
    search,
    setSearch,
    handleSearch,
    renderPopupInfo,
  } = useContext(DataContext);

  const navigate = useNavigate();
  let animeSearchListItem;
  if (animeSearchList?.data && animeSearchList?.data?.length > 0) {
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
        status={anime.attributes.status}
        addToWatchList={() =>
          addToWatchList(anime, animeWatchList, renderPopupInfo)
        }
        onWatch={() => {
          // saveMovie("currentMoviePlayed", anime);
          navigate(`/Watch/${anime.attributes.slug}/${anime.id}`);
        }}
        onNavigate={ () => navigate(`/MovieInfo/${encodeURIComponent(anime.attributes.canonicalTitle)}/${anime.id}`)}
        animeWatchList={animeWatchList}
      />
    ));
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <SearchBar
          is_fixed={true}
          setSearchValue={setSearch}
          searchValue={search}
          handleSearch={handleSearch}
          removeSearchValue={() => setSearch("")}
        />
      </div>
      <section className="container-fluid p-0 bg-secondary text-light mb-32 ps-md-80 pe-md-16 pt-256 pb-16 pt-sm-128 ">
        <div className=" container-fluid d-flex flex-column row-gap-32 justify-content-center align-items-center ">
          {animeSearchList.data && animeSearchList.data.length > 0 ? (
            !animeSearchListLoading && !error ? (
              [animeSearchListItem]
            ) : (
              <div className="container-fluid d-flex justify-content-center align-items-center w-100">
                <Load />
              </div>
            )
          ) : (
            <p className="_lead text-primary text-center">No anime found</p>
          )}
        </div>
        <div className="container-fluid mt-32">
          <Footer></Footer>
        </div>
      </section>
    </>
  );
}
