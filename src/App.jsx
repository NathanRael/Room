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
import { useEffect } from "react";

export default function App() {
  
  let animeWatchList = loadMovie('watchList') || [];
  //Pages
  const HomePage = <Home animeWatchList={animeWatchList} animeList={animeList} />;
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
