import { VideoScreen } from "../components/VideoScreen";
import { NavButton, ShortButton } from "../components/Buttons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadMovie } from "../functions/saveInfo";

export default function WatchMovie() {
  const currentMoviePlayed = loadMovie("currentMoviePlayed");
  const navigate = useNavigate();
  const youtubeVideoId = currentMoviePlayed.attributes.youtubeVideoId || "";
  const youtubeVideo = `https://www.youtube.com/embed/${youtubeVideoId}`;
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
        <p className="_subtitle text-light  mb-0">
          {currentMoviePlayed.attributes.canonicalTitle}
        </p>
        <VideoScreen youtubeVideoSrc={youtubeVideo} />
        <div className="container-fluid mt-16 bg-tertiary rounded-2 p-32">
        <h1 className="_lead mb-24">Synopsis : </h1>
          <p className="_body">{currentMoviePlayed.attributes.synopsis}</p>
        </div>
      </div>
    </section>
    </>
  );
}
