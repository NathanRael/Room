import { VideoScreen } from "../components/VideoScreen";
import { NavButton, ShortButton } from "../components/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import Load from "../components/Load";
import { fetchJSON } from "../context/DataContext";
import { useEffect, useState } from "react";

export default function WatchMovie() {
  const { name, id } = useParams();
  const [currentAnime, setCurrentAnime] = useState(null);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(null);

  useEffect(() => {
    setLoad(true);
    fetchJSON(`?filter[text]=${name}`)
      .then((datas) => {
        const animes = datas?.data;
        const filteredAnime = animes.filter((anime) => anime.id === id)
        setCurrentAnime(filteredAnime[0]);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoad(false));
  }, [id, name]);
  const navigate = useNavigate();

  return (
    <>
      <div className=" _backBtn">
        <NavButton
          icon="bi bi-arrow-left"
          link="/Movie"
          handleClick={() => navigate(-1)}
        />
      </div>
      <section className="container-fluid  d-flex justify-content-between p-0  pt-64 text-light pb-128">
        {!load && !error && (
          <div className="container-fluid p-0 d-flex justify-content-center align-items-center flex-column row-gap-24">
            <p className="_subtitle text-light  mb-0">
              {currentAnime?.attributes?.canonicalTitle}
            </p>
            <VideoScreen
              youtubeVideoSrc={currentAnime?.attributes?.youtubeVideoId}
            />
            <div className="container-fluid  bg-tertiary rounded-2 p-16 m-16 mt-16">
              <h1 className="_lead mb-24">Synopsis : </h1>
              <p className="_body">{currentAnime?.attributes?.synopsis}</p>
            </div>
          </div>
        )}

        {load && !error && (
          <div className="position-fixed top-50 start-50 translate-middle">
            <Load></Load>
          </div>
        )}

        {error && (
          <div className="position-fixed top-50 start-50 translate-middle text-primary _lead">
            {error}
          </div>
        )}
      </section>
    </>
  );
}
