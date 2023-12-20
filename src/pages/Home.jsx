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
import Navbar from "../components/Navbar";

export default function Home({}) {
  const {
    animeWatchList,
    renderPopupInfo,
    animeFilterList,
    page,
    filterAnimeLoading,
    error,
    toogleSeeMore,
    searchMovieSelected,
  } = useContext(DataContext);

  const [randomAnime, setRandomeAnime] = useState(0);
  const [addedToWatchList, setAddedToWatchList] = useState(false);
  // const anime = animeFilterList.data[randomAnime];
  const navigate = useNavigate();

  return (
    <>
      <Navbar/>
      {!filterAnimeLoading && !error ? (
        <section className="bg-secondary container-fluid p-0 w-100">
          <SearchBar is_fixed={false} showSearchBar={false} />
          <Hero
            key={animeFilterList.data[randomAnime].id}
            id={animeFilterList.data[randomAnime].id}
            srcImage={
              animeFilterList.data[randomAnime].attributes.coverImage.original
            }
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
            animeWatchList={animeWatchList}
            addedToWatchList={addedToWatchList}
            onWatch={() => {
              // saveMovie("currentMoviePlayed", animeFilterList.data[randomAnime]);
              navigate(
                `/Watch/${animeFilterList.data[randomAnime].attributes.slug}/${animeFilterList.data[randomAnime].id}`
              );
            }}
          />
          <MovieFilter />
          <MovieCardContainer
            animeFilterList={animeFilterList}
            handleclick={searchMovieSelected}
          />
          <div className="container-fluid ps-lg-156 d-flex justify-content-center align-items-center mb-64">
            <ButtonMd
              name={!page.pageChanged ? "Show more" : "Reduce"}
              icon={!page.pageChanged ? "bi bi-caret-down" : "bi bi-caret-up"}
              isIconLeft={false}
              handleclick={toogleSeeMore}
            />
          </div>
          <Footer></Footer>
        </section>
      ) : (
        <div className=" position-fixed top-50 start-50 translate-middle">
          <Load />
        </div>
      )}
    </>
  );
}
