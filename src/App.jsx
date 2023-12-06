import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import WatchLists from "./pages/WatchLists";
import WatchMovie from "./pages/WatchMovie";
import NoPage from "./pages/NoPage";
import InfoPopup from "./components/Popups.jsx";
import Load from "./components/Load.jsx";
import { DataProvider } from "./context/DataContext";
import { loadMovie, saveMovie } from "./functions/saveInfo.js";

const baseUrl = "https://kitsu.io/api/edge/anime?";

export default function App() {
  const [page, setPage] = useState({
    pageLimit: 10,
    pageChanged: false,
  });
  const [popupInfo, setPopupInfo] = useState({
    success: true,
    isPopupVisible: false,
    popupText: "Text",
  });
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const [search, setSearch] = useState("");
  const [animeWatchList, setAnimeWatchList] = useState([]);
  const [animeSearchList, setAnimeSearchList] = useState([]);
  const [animeFilterList, setAnimeFilterList] = useState([]);
  const [filterAnimeLoading, setFilterAnimeLoading] = useState(true);
  const [animeSearchListLoading, setAnimeSearchListLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSelectedCategorie(loadMovie("selected"));
    searchAnime(loadMovie("lastSearch") || search);
    setAnimeWatchList(loadMovie("watchList") || []);
  }, []);

  useEffect(() => {
    async function filterAnime() {
      try {
        setFilterAnimeLoading(true);
        setError(null);
        const API_URL = `${baseUrl}filter[categories]=${selectedCategorie}&page[limit]=${page.pageLimit}`;
        const requestOptions = {
          method: "GET",
        };

        const anime = await fetchJSON(API_URL, requestOptions);
        setAnimeFilterList(anime);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching anime data:", error);
      } finally {
        setFilterAnimeLoading(false);
      }
    }

    filterAnime();
  }, [selectedCategorie, page.pageLimit]);

  async function fetchJSON(apiUrl, requestOption = {}) {
    const headers = {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      ...requestOption.headers
    }

    requestOption = { headers, ...requestOption };
    const response = await fetch(apiUrl, requestOption);

    if (!response.ok) {
      throw new Error('Failed to fetch the data')
    }
    return response.json();
  }

  async function searchAnime(searchKey) {
    try {
      setAnimeSearchListLoading(true);
      setError(null);
      const API_URL = `${baseUrl}filter[text]=${searchKey}`;
      const requestOptions = {
        method: "GET",
      };
      const anime = await fetchJSON(API_URL, requestOptions);
      setAnimeSearchList(anime);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching anime data:", error);
    } finally {
      setAnimeSearchListLoading(false);
    }
  }

  function handleCategorieSelected(category) {
    setSelectedCategorie(category);
    saveMovie("selected", category);
  }

  function handleSearch() {
    if (search !== "" && search !== null) {
      searchAnime(search);
      saveMovie("lastSearch", search);
      setSearch("");
    }
  }

  function searchMovieSelected(searchKey) {
    if (searchKey !== "" && searchKey !== null) {
      searchAnime(searchKey);
      saveMovie("lastSearch", searchKey);
      setSearch("");
    }
  }

  function toogleSeeMore() {
    setPage((prevPage) => ({
      pageLimit: prevPage.pageLimit === 10 ? 20 : 10,
      pageChanged: !prevPage.pageChanged,
    }));
  }

  function renderPopupInfo(text, success = true) {
    setPopupInfo({
      isPopupVisible: true,
      success: success,
      popupText: text,
    });
  }

  function hidePopupInfo() {
    setPopupInfo((item) => ({ ...item, isPopupVisible: false }));
  }

  return (
    <Router>
      <DataProvider>
        <Navbar />
        <InfoPopup
          text={popupInfo.popupText}
          success={popupInfo.success}
          isPopupVisible={popupInfo.isPopupVisible}
          setIsPopupIsVisible={hidePopupInfo}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                animeWatchList={animeWatchList}
                animeFilterList={animeFilterList}
                handleCategorie={handleCategorieSelected}
                selectedCategorie={selectedCategorie}
                handleCardClick={searchMovieSelected}
                handleSeeMore={toogleSeeMore}
                pageChanged={page.pageChanged}
                renderPopupInfo={renderPopupInfo}
                filterAnimeLoading={filterAnimeLoading}
                error={error}
              />
            }
          />
          <Route
            path="/Movie"
            element={
              <Movies
                animeSearchList={animeSearchList}
                handleClick={handleSearch}
                searchValue={search}
                setSearchValue={setSearch}
                animeWatchList={animeWatchList}
                renderPopupInfo={renderPopupInfo}
                animeSearchListLoading={animeSearchListLoading}
                error={error}
              />
            }
          />
          <Route path="/WatchList" element={<WatchLists animeWatchList={animeWatchList} setAnimeWatchList={setAnimeWatchList} />} />
          <Route path="/Watch" element={<WatchMovie />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}
