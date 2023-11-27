import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import MovieCardContainer from "../components/MovieCardContainer";
import Footer from "../components/Footer";
import addToWatchList from "../components/AddToWatchList";
import { useEffect, useState } from "react";
import { saveMovie } from "../components/Functions";
import { useNavigate } from "react-router-dom";
import MovieFilter from "../components/MoviFilter";
export default function Home({ animeWatchList, animeList, handleCategorie, selectedCategorie }) {
  const [randomAnime, setRandomeAnime] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="container-fluid p-0 w-100">
      <SearchBar is_fixed={false} />
      
      <Hero
        key={animeList.data[randomAnime].id}
        id={animeList.data[randomAnime].id}
        srcImage={animeList.data[randomAnime].attributes.posterImage.medium}
        title={animeList.data[randomAnime].attributes.canonicalTitle}
        rate={animeList.data[randomAnime].attributes.averageRating}
        sinopsis={animeList.data[randomAnime].attributes.description}
        addToWatchList={() =>
          addToWatchList(animeList.data[randomAnime], animeWatchList)
        }
        onWatch={() => {
          saveMovie("currentMoviePlayed", randomAnime);
          navigate('/Watch');
        }}
      />
      <MovieFilter 
      handleCategorie={handleCategorie}
      selectedCategorie={selectedCategorie}
      />
      <MovieCardContainer animeList={animeList} />
      <Footer></Footer>
    </section>
  );
}
