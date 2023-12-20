import { useContext } from "react";
import DataContext from "../context/DataContext";
import Load from "../components/Load";
import SearchBar from "../components/SearchBar";
import addToWatchList from "../functions/AddToWatchList";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonMd, Button, NavButton } from "../components/Buttons";
import Hero from "../components/Hero";
import { Status } from "../components/details";
import { fetchJSON } from "../context/DataContext";
import Rate from "../components/Rate";

export default function MovieInfo({}) {
  const navigate = useNavigate();
  const { name, id } = useParams();
  const [animeInfo, setAnimeInfo] = useState(null);
  const [error, setError] = useState(null);
  const { animeWatchList, renderPopupInfo } = useContext(DataContext);
  const [load, setLoad] = useState(true);
  const [addedToWatchList, setAddedToWatchList] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetchJSON(`?filter[text]=${name}`)
      .then((datas) => {
        const animes = datas?.data;
        const filteredAnime = animes?.filter((anime) => anime.id === id);
        setAnimeInfo(filteredAnime[0]);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoad(false));
  }, [id, name]);

  return (
    <>
      <SearchBar is_fixed={false} showSearchBar={false} title="Movie Details" />
      {!load && !error ? (
        <section className="bg-secondary container-fluid p-0 w-100">
          <div className=" _movieInfoBackBtn bg-secondary rounded-5">
            <NavButton
              icon="bi bi-arrow-left"
              link="/Movie"
              handleClick={() => navigate(-1)}
            />
          </div>
          <MovieDetails
            key={animeInfo.id}
            id={animeInfo.id}
            srcImage={animeInfo.attributes.coverImage ? animeInfo.attributes.coverImage.original : animeInfo.attributes.posterImage.original}
            date={animeInfo.attributes.createdAt}
            status={animeInfo.attributes.status}
            episode={animeInfo.attributes.episodeCount}
            title={animeInfo.attributes.canonicalTitle}
            rate={animeInfo.attributes.averageRating}
            sinopsis={animeInfo.attributes.description}
            addToWatchList={() => {
              addToWatchList(animeInfo, animeWatchList, renderPopupInfo);

              setAddedToWatchList(true);
            }}
            animeWatchList={animeWatchList}
            addedToWatchList={addedToWatchList}
            onWatch={() => {
              navigate(`/Watch/${animeInfo.attributes.slug}/${animeInfo.id}`);
            }}
          />
        </section>
      ) : (
        <div className=" position-fixed top-50 start-50 translate-middle">
          <Load />
        </div>
      )}
      
      {error && <h1 className="text-danger text-center _lead">{error}</h1>}
    </>
  );
}

function MovieDetails({
  id,
  srcImage,
  title,
  sinopsis,
  episode,
  rate,
  addToWatchList,
  onWatch,
  animeWatchList,
  status,
  date,
}) {
  const container = {
    width: "fit-content",
    rowGap: "25px",
  };

  const exists = animeWatchList?.some((anime) => anime.id === id);

  return (
    <div className="container-fluid p-0 d-flex flex-column w-100   pt-156 pt-sm-40 gap-24 ">
      <img
        src={srcImage}
        className="border-3"
        alt=""
        style={{ objectFit: "cover", height: '70vh', objectPosition : 'top' }}
      />
      <div className="container-fluid d-flex flex-column gap-32 pb-16">
        <h1 className="_title-2 text-light text-center text-sm-start">
          {title}
        </h1>
        <div className="card-body d-flex flex-sm-row flex-column align-items-center justify-content-start gap-32 text-light _body">
          <div className="card-text  text-altlight">
            <span className="_lead text-light">Release Date : </span>
            {date?.slice(0, 4)}
          </div>
          <div className="d-flex align-items-center  gap-8">
            <span className="_lead text-light">Rate : </span>
            <Rate
              rate={rate}
              heartColor="text-warning"
              isFill={true}
              fontSize="_body"
            />
          </div>
          <div className="card-text  text-altlight">
            <span className="_lead text-light">Episode Number : </span>{" "}
            {episode}
          </div>
          <div className="d-flex align-items-center gap-8">
            <span className="_lead text-light">Status : </span>
            <Status status={status} fontSize="_body"></Status>
          </div>
        </div>
        <div className="d-flex flex-column gap-16">
          <h1 className="_lead text-light text-center text-sm-start">
            Synopsis
          </h1>
          <div className="_body text-altlight">{sinopsis}</div>
        </div>
        <div className="d-flex  justify-content-center justify-content-sm-between row-gap-24 flex-column flex-sm-row _heroBtnContainer ">
          <ButtonMd
            name="Watch"
            icon="bi bi-play"
            color="btn-primary"
            handleclick={onWatch}
          />

          <ButtonMd
            name={!exists ? "See later" : "In watch list"}
            icon="bi bi-bookmark"
            color="btn-tertiary"
            handleclick={addToWatchList}
          />
        </div>
      </div>
    </div>
  );
}
