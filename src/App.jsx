import "../css/custom.css"; //bootsrtap sass

//images
import chainsawMan from './assets/chainsawMan.jfif';
import demonSlayer from './assets/demonSlayer.jfif';
import jujutsu from './assets/jujutsu.jfif';
import mashle from './assets/mashle.webp';
import spyxfamily from './assets/spyxfamily.webp';

import { animeList } from './data.js';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import WatchLists from "./pages/WatchLists";
import WatchMovie from "./pages/WatchMovie";
import NoPage from "./pages/NoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadMovie, saveMovie } from "./components/Functions.js";
import { useEffect, useState } from "react";

export default function App() {
  const [selectedCategorie, setSelectedCategorie] = useState('Shonen');

  function handleCategorieSelected(e){
    setSelectedCategorie(e.target.value);
  }
  useEffect(() => { 
    async function getSelectedAnime() {
      const API_URL = `https://kitsu.io/api/edge/anime?filter[categories]=${selectedCategorie}`;
      const requestOption = {
        method : 'GET',
        headers : {
          'Accept' : 'application/vnd.api+json',
          'Content-Type' : 'application/vnd.api+json'
        }
      }
      const response = await fetch(API_URL, requestOption);

      const anime = await response.json();
      console.log(anime);
    }

    getSelectedAnime();
  }, [selectedCategorie])
  let animeWatchList = loadMovie('watchList') || [];
  //Pages
  const HomePage = <Home 
    animeWatchList={animeWatchList} 
    animeList={animeList} 
    handleCategorie={handleCategorieSelected}
    selectedCategorie={selectedCategorie}
  />;
  const MoviePage = <Movies  animeWatchList={animeWatchList}/>;
  const WatchListPage = <WatchLists  animeWatchList={animeWatchList}/>;
  const WatchMoviePage = <WatchMovie  animeList={animeList}/>;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/Movie" element={MoviePage} />
          <Route path="/WatchList" element={WatchListPage}></Route>
          <Route path="/Watch" element={WatchMoviePage}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
