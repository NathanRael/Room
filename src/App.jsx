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

export default function App() {
  let animeWatchList = [{
    id: 0,
    title: "Spy X Family",
    sinopsis:
      "The series follows master spy Twilight, who must disguise himself as psychiatrist Loid Forger and build a mock family in order to investigate political leader Donovan Desmond",
    rate: "+16,000",
    srcImage: chainsawMan,
    date: "2023",
    episode: "1-12",
  },
  {
    id: 3,
    title: "One Punch Man",
    sinopsis:
      "Saitama, a hero who can defeat any opponent with a single punch, seeks to find a worthy challenge and join the Hero Association to gain recognition.",
    rate: "+18,000",
    srcImage: mashle,
    date: "2015",
    episode: "1-12",
  }]

  //Pages
  const HomePage = <Home animeWatchList={animeWatchList} animeList={animeList} />;
  const MoviePage = <Movies  animeWatchList={animeWatchList}/>;
  const WatchListPage = <WatchLists  animeWatchList={animeWatchList}/>;
  const WatchMoviePage = <WatchMovie />;

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
