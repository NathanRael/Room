import { VideoScreen } from "../components/VideoScreen";
import { NavButton, ShortButton } from "../components/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import Load from "../components/Load";
import { fetchJSON } from "../context/DataContext";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { IconButton } from "../components/Buttons";

export default function WatchMovie() {
  const { name, id } = useParams();
  const [currentAnime, setCurrentAnime] = useState(null);
  const [suggestedAnime, setSuggestedAnime] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoad(true);
    fetchJSON(`?filter[text]=${name}`)
      .then((datas) => {
        const animes = datas?.data;
        const filteredAnime = animes.filter((anime) => anime.id === id);
        setCurrentAnime(filteredAnime[0]);
        setSuggestedAnime(animes.filter((anime) => anime.id != id));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoad(false));
  }, [id, name]);

  return (
    <>
      <div className=" _backBtn">
        <NavButton
          icon="bi bi-arrow-left"
          link="/Movie"
          handleClick={() => navigate(-1)}
        />
      </div>
      <section className="container-fluid  d-flex justify-content-between flex-column p-0  pt-64 text-light pb-128 row-gap-64">
        {!load && !error && (
          <>
            <div className="container-fluid  d-flex justify-content-center align-items-center flex-column row-gap-24">
              <p className="_subtitle text-light  mb-0 text-center text-sm-start">
                {currentAnime?.attributes?.canonicalTitle}
              </p>
              <VideoScreen
                youtubeVideoSrc={currentAnime?.attributes?.youtubeVideoId}
              />
            </div>

            {suggestedAnime.length > 0 && (
              <div className="container-fluid p-0 m-0 row align-items-center justify-content-center gap-32">
                <div className="container-fluid p-0 d-flex gap-8 align-items-center justify-content-center">
                  <h1 className="_subtitle text-light text-center text-sm-start ">
                    Suggested animes
                  </h1>
                  <IconButton
                    icon="bi bi-lightbulb"
                    active={false}
                    color="text-warning"
                  />
                </div>
                <SuggestedAnime suggestedAnime={suggestedAnime} />
              </div>
            )}
          </>
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

const SuggestedAnime = ({ suggestedAnime }) => {
  const navigate = useNavigate();
  const animeElement = suggestedAnime.map((anime) => (
    <div className="col-auto" style={{ width: "max-content" }}>
      <Card
        key={anime.id}
        id={anime.id}
        srcImage={anime.attributes.posterImage.large}
        title={anime.attributes.canonicalTitle}
        sinopsis={anime.attributes.description}
        date={anime.attributes.createdAt.slice(0, 4)}
        rate={anime.attributes.averageRating}
        status={anime.attributes.status}
        handleclick={() =>
          navigate(`/Watch/${anime.attributes.slug}/${anime.id}`)
        }
      />
    </div>
  ));
  return (
    <div className="contaibner-fluid p-0 row justify-content-center align-items-center gap-32">
      {animeElement}
    </div>
  );
};
