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
- Adding show more button in the Home section down in the card, and in the movieSearch section both in the card and outside
- implementing a dynamic popup that shows some information like whether the anime is in the watchList or not
*/

export default function App() {
  const baseUrl = 'https://kitsu.io/api/edge/anime?';
  const [page, setPage] = useState({
    pageLimit : 10,
    pageChanged : false

  });

  const [selectedCategorie, setSelectedCategorie] = useState(loadMovie('selected') || 'Shonen');
  const [animeWatchList, setAnimeWatchList] = useState(loadMovie('watchList') || []); 
  const [animeSearchList, setAnimeSearchList] = useState([]);
  const [animeFilterList, setAnimeFilterList] = useState([]);
  const [filterAnimeLoading, setFilterAnimeLoading] = useState(true);
  const [animeSearchListLoading, setAnimeSearchListLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

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

  function toogleSeeMore(){
    setPage((prevPage) => ({
      pageLimit: prevPage.pageLimit === 10 ? 20 : 10,
      pageChanged: !prevPage.pageChanged
    }));
    // saveMovie('page', [ {pageLimit : page.pageLimit, pageChanged : page.pageChanged}]);
  }

  async function searchAnime(searchKey){
    try {
      setAnimeSearchListLoading(true);
      setError(null);
      const API_URL = `${baseUrl}filter[text]=${searchKey}`;
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
      setAnimeSearchList(anime)
    } catch (error) {
      setError(error.message);
      console.error('Error fetching anime data:', error);
    }finally {
      setAnimeSearchListLoading(false);
    }
  }

  useEffect(() => {
    async function filterAnime(){
      try {
        setFilterAnimeLoading(true);
        setError(null);
        const API_URL = `${baseUrl}filter[categories]=${selectedCategorie}&page[limit]=${page.pageLimit}`;
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
        setAnimeFilterList(anime);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching anime data:', error);
      }finally {
        setFilterAnimeLoading(false);
      }
    }

    filterAnime();
  }, [selectedCategorie, page.pageLimit]);
  
  useEffect(() =>{
    setSelectedCategorie(loadMovie('selected') || 'Shonen');
    searchAnime(loadMovie('lastSearch') || search);
  }, [])


  

  //Pages
  const HomePage = (
    <>
      {filterAnimeLoading && (
        <div className="text-light text-center position-absolute top-50 start-50 _loader">
          <p>Loading...</p>
        </div>
      )}
      {!filterAnimeLoading && !error && (
        <Home 
          animeWatchList={animeWatchList} 
          animeList={animeFilterList} 
          handleCategorie={handleCategorieSelected}
          selectedCategorie={selectedCategorie}
          handleCardClick={searchMovieSelected}
          handleSeeMore={toogleSeeMore}
          pageChanged={page.pageChanged}
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
    {animeSearchListLoading && (
      <div className="text-light text-center position-absolute top-50 start-50 _loader">
        <p>Loading...</p>
      </div>
    )}
    {!animeSearchListLoading && !error && (
    <Movies
    animeSearchList={animeSearchList}
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
      <WatchMovie/>
    </>
  );
  
  return (
    <>
      <Router>
        <Navbar/>
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
