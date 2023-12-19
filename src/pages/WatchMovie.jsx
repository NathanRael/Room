import { VideoScreen } from "../components/VideoScreen";
import { NavButton, ShortButton } from "../components/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import { loadMovie } from "../functions/saveInfo";
import { fetchJSON } from "../context/DataContext";
import { useEffect, useState } from "react";

export default function WatchMovie() {
  const {name, id} = useParams();
  const [currentAnime, setCurrentAnime] = useState(null);

  useEffect(() => {
    fetchJSON(`?filter[text]=${name}`).then((datas) => {
      const animes = datas.data;
      setCurrentAnime(animes.filter(anime => anime.id === id))
    });
  }, [])
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
    <section className="container-fluid  d-flex justify-content-between p-0 ps-md-156 pe-md-32 pt-128 text-light pb-128">
      <div className="container-fluid p-0 d-flex justify-content-center align-items-center flex-column row-gap-24">
        <p className="_subtitle text-primary  mb-0">
          This content is under update
          {/* {currentAnime.attributes.canonicalTitle} */}
        </p>
        {/* <VideoScreen youtubeVideoSrc={youtubeVideo} /> */}
        {/* <div className="container-fluid mt-16 bg-tertiary rounded-2 p-32">
        <h1 className="_lead mb-24">Synopsis : </h1>
          <p className="_body">{currentAnime.attributes.synopsis}</p>
        </div> */}
      </div>
    </section>
    </>
  );
}
