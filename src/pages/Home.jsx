import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import MovieCardContainer from "../components/MovieCardContainer";
import Footer from "../components/Footer";
import addToWatchList from "../components/AddToWatchList";
import { useEffect, useState } from "react";
import redirect from "../components/SaveMovieInfo";
import saveMovieInfo from "../components/SaveMovieInfo";
import { useNavigate } from "react-router-dom";
export default function Home({ animeWatchList, animeList }) {
  const [randomAnime, setRandomeAnime] = useState(4);
  const navigate = useNavigate();
  // useEffect(()=>{
  //   setRandomeAnime(Math.floor( Math.random() * animeList.length -1));
  // }, []);

  return (
    <section className="container-fluid p-0 w-100">
      <SearchBar is_fixed={false} />
      <Hero
        key={animeList[randomAnime].id}
        srcImage={animeList[randomAnime].srcImage}
        title={animeList[randomAnime].title}
        rate={animeList[randomAnime].rate}
        sinopsis={animeList[randomAnime].sinopsis}
        addToWatchList={() =>
          addToWatchList(animeList[randomAnime], animeWatchList)
        }
        onWatch={() => {
          saveMovieInfo(animeList[randomAnime].id)
          navigate('/Watch');
        }}
      />
      <MovieCardContainer animeList={animeList} />
      <Footer></Footer>
    </section>
  );
}
