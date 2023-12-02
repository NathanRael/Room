import "../css/custom.css"; //bootsrtap sass

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
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animeWatchList, setAnimeWatchList] = useState(loadMovie('watchList') || []); 

  function handleCategorieSelected(category){
    setSelectedCategorie(category);
    saveMovie('selected', category );
  }

  function handleSearch(){
    if (search != '' && search != null){
      searchAnime(search);
      saveMovie('lastSearch', search);
      setSearch('');
    }
  }

  function Search(searchKey){
    if (searchKey != '' && searchKey != null){
      searchAnime(searchKey);
      saveMovie('lastSearch', searchKey);
      setSearch('');
    }
  }

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

  async function searchAnime(searchKey){
    try {
      setLoading(true);
      setError(null);
      const API_URL = `https://kitsu.io/api/edge/anime?filter[text]=${searchKey}`;
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
      setSearchList(anime);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching anime data:', error);
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setSelectedCategorie(loadMovie('selected') || []);
    setAnimeWatchList(loadMovie('watchList') || []);
    const lastSearch = loadMovie('lastSearch');
    searchAnime(lastSearch);
    getSelectedAnime();
  }, [])

  useEffect(() => {
    getSelectedAnime();
  }, [selectedCategorie]);


  //Pages
  const HomePage = (
    <>
      {loading && (
        <div className="text-light text-center position-absolute top-50 start-50 _loader">
          <p>Loading...</p>
        </div>
      )}
      {!loading && !error && (
        <Home 
          animeWatchList={animeWatchList} 
          animeList={filteredAnimeList} 
          handleCategorie={handleCategorieSelected}
          selectedCategorie={selectedCategorie}
          handleCardClick={Search}
        />
      )}
      {error && (
        <div className="text-danger text-center position-absolute top-50 start-50">
          <p>{error}</p>
        </div>
      )}
    </>
  );
  
  const MoviePage = (
    <>
      {loading && (
        <div className="text-light text-center position-absolute top-50 start-50 _loader">
          <p>Loading...</p>
        </div>
      )}
      {!loading && !error && (
        <Movies
        animeSearchList={searchList}
        handleClick={handleSearch}
        searchValue={search}
        setSearchValue={setSearch}
        animeWatchList={animeWatchList}
        />
      )}
      {error && (
        <div className="text-danger text-center position-absolute top-50 start-50">
          <p>{error}</p>
        </div>
      )}
    </>
  );
  
  const WatchListPage = (
    <>
      {loading && (
        <div className="text-light text-center position-absolute top-50 start-50 _loader">
          <p>Loading...</p>
        </div>
      )}
      {!loading && !error && (
        <WatchLists animeWatchList={animeWatchList} />
      )}
      {error && (
        <div className="text-danger text-center position-absolute top-50 start-50">
          <p>{error}</p>
        </div>
      )}
    </>
  );
  
  const WatchMoviePage = (
    <>
      {loading && (
        <div className="text-light text-center position-absolute top-50 start-50 _loader">
          <p>Loading...</p>
        </div>
      )}
      {!loading && !error && (
        <WatchMovie animeList={filteredAnimeList} />
      )}
      {error && (
        <div className="text-danger text-center position-absolute top-50 start-50">
          <p>{error}</p>
        </div>
      )}
    </>
  );
  
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
