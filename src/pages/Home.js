import { animeList } from "../data";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import MovieCardContainer from "../components/MovieCardContainer";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [randomAnime, setRandomeAnime] = useState(4);

  // useEffect(()=>{
  //   setRandomeAnime(Math.floor( Math.random() * animeList.length -1));
  // }, []);

  return (
    <section className="container-fluid p-0 w-100">
      <SearchBar is_fixed={false} />
      <Hero
        key={animeList[randomAnime].id}
        image={animeList[randomAnime].srcImage}
        title={animeList[randomAnime].title}
        rate={animeList[randomAnime].rate}
        sinopsis={animeList[randomAnime].sinopsis}
      />
      <MovieCardContainer />
      <Footer></Footer>
    </section>
  );
}
