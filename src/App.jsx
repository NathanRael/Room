import "../css/custom.css"; //bootsrtap sass

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
  const [selectedCategorie, setSelectedCategorie] = useState( loadMovie('selected') || 'Shonen');
  const [filteredAnimeList, setfilteredAnimeList ]= useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  function handleCategorieSelected(category){
    setSelectedCategorie(category);
    saveMovie('selected', category );
  }

  useEffect(() => {
    async function getSelectedAnime() {
      try {
        setLoading(true);
        setError(null);
        const API_URL = `https://kitsu.io/api/edge/anime?filter[categories]=${selectedCategorie}`;
        const requestOptions = {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
          }
        };

        const response = await fetch(API_URL, requestOptions);

        if (!response.ok) {
          throw new Error(`Failed to fetch anime data. Status: ${response.status}`);
        }

        const anime = await response.json();
        setfilteredAnimeList(anime);

      } catch (error) {
        setError(error.message);
        console.error('Error fetching anime data:', error);
      }finally {
        setLoading(false);
      }
    }

    getSelectedAnime();
  }, [selectedCategorie]);

  let animeWatchList = loadMovie('watchList') || [];

  //Pages
  const HomePage = (
    <>
      {loading && <p className="text-light _lead text-center position-absolute top-50 start-50 _loader">Loading...</p>}
      {!loading && !error && (
        <Home 
          animeWatchList={animeWatchList} 
          animeList={filteredAnimeList} 
          handleCategorie={handleCategorieSelected}
          selectedCategorie={selectedCategorie}
        />
      )}
      {error && <p className="text-danger text-center">{error}</p>}
    </>
  );
  const MoviePage = <Movies  animeWatchList={animeWatchList}/>;
  const WatchListPage = <WatchLists  animeWatchList={filteredAnimeList}/>;
  const WatchMoviePage = <WatchMovie  animeList={filteredAnimeList}/>;

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
