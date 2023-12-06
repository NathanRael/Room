import { useContext } from "react";
import DataContext from "../context/DataContext";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import MovieCardContainer from "../components/MovieCardContainer";
import Footer from "../components/Footer";
import addToWatchList from "../functions/AddToWatchList";
import { useState } from "react";
import { saveMovie } from "../functions/saveInfo";
import { useNavigate } from "react-router-dom";
import MovieFilter from "../components/MoviFilter";
import { ButtonMd } from "../components/Buttons";
import Load from "../components/Load";

export default function Home({
  filterAnimeLoading,
  error,
  animeWatchList,
  animeFilterList,
  handleCategorie,
  selectedCategorie,
  handleCardClick,
  handleSeeMore,
  pageChanged,
  renderPopupInfo,
}) {
  const [randomAnime, setRandomeAnime] = useState(0);
  const [addedToWatchList, setAddedToWatchList] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    {
      !filterAnimeLoading && !error ? (
        <section className="bg-secondary container-fluid p-0 w-100">
          <SearchBar is_fixed={false} showSearchBar={false} />
          <Hero
            key={animeFilterList.data[randomAnime].id}
            id={animeFilterList.data[randomAnime].id}
            srcImage={animeFilterList.data[randomAnime].attributes.posterImage.medium}
            title={animeFilterList.data[randomAnime].attributes.canonicalTitle}
            rate={animeFilterList.data[randomAnime].attributes.averageRating}
            sinopsis={animeFilterList.data[randomAnime].attributes.description}
            addToWatchList={() => {
              addToWatchList(
                animeFilterList.data[randomAnime],
                animeWatchList,
                renderPopupInfo
              );
              setAddedToWatchList(true);
            }}
            addedToWatchList={addedToWatchList}
            onWatch={() => {
              saveMovie("currentMoviePlayed", animeFilterList.data[randomAnime]);
              navigate("/Watch");
            }}
          />
          <MovieFilter
            handleCategorie={handleCategorie}
            selectedCategorie={selectedCategorie}
          />
          <MovieCardContainer animeFilterList={animeFilterList} handleclick={handleCardClick} />
          <div className="container-fluid ps-lg-156 d-flex justify-content-center align-items-center mb-64">
            <ButtonMd
              name={!pageChanged ? "Show more" : "Reduce"}
              icon={!pageChanged ? "bi bi-caret-down" : "bi bi-caret-up"}
              isIconLeft={false}
              handleclick={handleSeeMore}
            />
          </div>
          <Footer></Footer>
        </section>
      ) : (
        <div className="container-fluid position-fixed top-50 start-50">
          <Load/>
        </div>
      )
    }
    </>
  );
}
