import { useContext } from "react";
import DataContext from "../context/DataContext";

import SearchBar from "../components/SearchBar";
import addToWatchList from "../functions/AddToWatchList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonMd, Button } from "../components/Buttons";

export default function MovieInfo({}) {
  const {
    animeWatchList,
    renderPopupInfo,
    animeFilterList,
    page,
    filterAnimeLoading,
    error,
    toogleSeeMore,
    searchMovieSelected,
  } = useContext(DataContext);

  const [randomAnime, setRandomeAnime] = useState(0);
  const [addedToWatchList, setAddedToWatchList] = useState(false);
  // const anime = animeFilterList.data[randomAnime];
  const navigate = useNavigate();

  return (
    <>
      <SearchBar is_fixed={false} showSearchBar={false} title="Movie Details" />
      <p className="text-warning text-center  _subtitle pt-256">This page is under developement, please return later</p>
      {/* {!filterAnimeLoading && !error ? (
        <section className="bg-secondary container-fluid p-0 w-100">
          <SearchBar is_fixed={false} showSearchBar={false} title='Movie Details' />
          <MovieDetails/>
        </section>
      ) : (
        <div className=" position-fixed top-50 start-50 translate-middle">
          <Load />
        </div>
      )} */}
    </>
  );
}

function MovieDetails () {
  return (
    <div
      className="container-fluid d-flex flex-column w-100   pt-32  ps-sm-24 ps-md-128 ps-lg-156 pe-md-128 pb-64 _hero"
      style={''}
    >
      <div className="d-flex flex-column pt-256 pt-md-128" style={''}>
        <h1 className="_title text-light">{title}</h1>
        <p className="_lead text-altlight">{sinopsis.slice(0, 400) + " ..."}</p>
      </div>
      <Rate rate={rate} heartColor="text-warning" isFill={true} />
      <div className="d-flex  justify-content-center justify-content-sm-between row-gap-24 flex-column flex-sm-row _heroBtnContainer ">
        <Button
          name="Watch"
          icon="bi bi-play"
          color="btn-primary"
          handleClick={onWatch}
        />

        <Button
          name={!exists ? "See later" : "In watch list"}
          icon="bi bi-bookmark"
          color="btn-secondary"
          handleClick={addToWatchList}
        />
      </div>
    </div>
  );
};
