
import { createContext, useState, useEffect } from "react";
import { loadMovie, saveMovie } from "../functions/saveInfo";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
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
    searchAnime(loadMovie("lastSearch").trim() || search.trim());
    setAnimeWatchList(loadMovie("watchList") || []);
  }, []);

  useEffect(() => {
    async function filterAnime() {
      try {
        setFilterAnimeLoading(true);
        setError(null);
        // const API_URL = `${baseUrl}filter[categories]=${selectedCategorie}&page[limit]=${page.pageLimit}`;
        const anime = await fetchJSON(`?filter[categories]=${selectedCategorie}&page[limit]=${page.pageLimit}`);
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

  async function searchAnime(searchKey) {
    try {
      setAnimeSearchListLoading(true);
      setError(null);
      // const API_URL = `${baseUrl}filter[text]=${searchKey}`;

      const anime = await fetchJSON(`?filter[text]=${searchKey}`);
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
      // setSearch("");
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
    <DataContext.Provider value={{
      animeWatchList, animeFilterList, animeSearchList, selectedCategorie,
      filterAnimeLoading, animeSearchListLoading,popupInfo, search, error, page,
      handleCategorieSelected, renderPopupInfo, searchMovieSelected,
      toogleSeeMore, setSearch, handleSearch, setAnimeWatchList, hidePopupInfo,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;

export async function fetchJSON(apiUrl, requestOption = { method : 'GET'}) {
  const baseUrl = "https://kitsu.io/api/edge/anime";
  const headers = {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    ...requestOption.headers
  }

  requestOption = { headers, ...requestOption };
  const response = await fetch(`${baseUrl}${apiUrl}`, requestOption);

  if (!response.ok) {
    throw new Error('Failed to fetch the data');
  }
  return response.json();
}