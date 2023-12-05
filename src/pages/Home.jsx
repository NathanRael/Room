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

export default function Home({
  animeWatchList,
  animeList,
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
    <section className="bg-secondary container-fluid p-0 w-100">
      <SearchBar is_fixed={false} showSearchBar={false} />
      <Hero
        key={animeList.data[randomAnime].id}
        id={animeList.data[randomAnime].id}
        srcImage={animeList.data[randomAnime].attributes.posterImage.medium}
        title={animeList.data[randomAnime].attributes.canonicalTitle}
        rate={animeList.data[randomAnime].attributes.averageRating}
        sinopsis={animeList.data[randomAnime].attributes.description}
        addToWatchList={() => {
          addToWatchList(
            animeList.data[randomAnime],
            animeWatchList,
            renderPopupInfo
          );
          setAddedToWatchList(true);
        }}
        addedToWatchList={addedToWatchList}
        onWatch={() => {
          saveMovie("currentMoviePlayed", animeList.data[randomAnime]);
          navigate("/Watch");
        }}
      />
      <MovieFilter
        handleCategorie={handleCategorie}
        selectedCategorie={selectedCategorie}
      />
      <MovieCardContainer animeList={animeList} handleclick={handleCardClick} />
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
  );
}
