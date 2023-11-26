import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import MovieCardContainer from "../components/MovieCardContainer";
import Footer from "../components/Footer";
import addToWatchList from "../components/AddToWatchList";
import { useEffect, useState } from "react";
import redirect from "../components/Redirect";
export default function Home({animeWatchList, animeList}) {
  const [randomAnime, setRandomeAnime] = useState(4);


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
        addToWatchList={ () => addToWatchList(animeList[randomAnime], animeWatchList)}
        onWatch={() => redirect(animeList[randomAnime].id)}
      />
      <MovieCardContainer animeList={animeList} />
      <Footer></Footer>
    </section>
  );
}
