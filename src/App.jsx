import "../css/custom.css"; //bootsrtap sass

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import WatchLists from "./pages/WatchLists";
import WatchMovie from "./pages/WatchMovie";
import NoPage from "./pages/NoPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { loadMovie, saveMovie } from "./components/Functions.js";
import { useEffect, useState } from "react";

/*
1. Refactor the fetch API
2. Adding show more button in the Home section down in the card, and in the movieSearch section both in the card and outside
3. implementing a dynamic popup that shows some information like whether the anime is in the watchList or not
*/

export default function App() {
  const location = useLocation;
  const pathName = location.pathname;  
  const baseUrl = 'https://kitsu.io/api/edge/anime?';
  const [data, setData] = useState([]);
  const [fetchType, setFetchType] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState(loadMovie('selected') || 'Shonen');
  const [animeWatchList, setAnimeWatchList] = useState(loadMovie('watchList') || []); 
  // const [animeSearchList, setAnimeSearchList] = useState([]);
  // const [animeFilterList, setAnimeFilterList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  function searchMovieSelected(searchKey){
    if (searchKey != '' && searchKey != null){
      searchAnime(searchKey);
      saveMovie('lastSearch', searchKey);
      setSearch('');
    }
  }

  function loadComponents(){
    setSelectedCategorie(loadMovie('selected') || 'Shonen');
  }

  function searchAnime(searchKey){
    setFetchType(`filter[text]=${searchKey}`);
  }

  function filterAnime(category){
    setFetchType(`filter[categories]=${category}`)
  }

  useEffect(() => {
    async function fetchApi(){
      try {
        setLoading(true);
        setError(null);
        const API_URL = `${baseUrl}${fetchType}`;
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
        setData(anime);
        console.log(anime);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching anime data:', error);
      }finally {
        setLoading(false);
      }
    }

    fetchApi();
  }, [fetchType]);

  useEffect(() =>{
    loadComponents();
  }, [])


  useEffect(() => {
    filterAnime(selectedCategorie);
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
          animeList={data} 
          handleCategorie={handleCategorieSelected}
          selectedCategorie={selectedCategorie}
          handleCardClick={searchMovieSelected}
        />
      )}
      {error && (
        <div className="text-danger text-center position-absolute top-50 start-50 _loader">
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
    animeSearchList={data}
    handleClick={handleSearch}
    searchValue={search}
    setSearchValue={setSearch}
    animeWatchList={animeWatchList}
    />
    )}
      {error && (
        <div className="text-danger text-center position-absolute top-50 start-50 _loader">
          <p>{error}</p>
        </div>
      )}
    </>
  );
  
  const WatchListPage = (
    <WatchLists 
      animeWatchList={animeWatchList}
      setAnimeWatchList={setAnimeWatchList} 
    />
  );
  
  const WatchMoviePage = (
    <>
      {loading && (
        <div className="text-light text-center position-absolute top-50 start-50 _loader">
          <p>Loading...</p>
        </div>
      )}
      {!loading && !error && (
        <WatchMovie animeList={data} />
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
        <Navbar
          filterAnime={ () => filterAnime(selectedCategorie)}
          searchAnime={() => searchAnime(loadMovie('lastSearch') || search)}
         />
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
