import { VideoScreen } from "../components/VideoScreen";
import {NavButton, ShortButton} from '../components/Buttons';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadMovie } from "../components/Functions";

export default function WatchMovie({ animeList }) {
    const currentMoviePlayed = loadMovie("currentMoviePlayed");
    const navigate = useNavigate();
    const youtubeVideoId = currentMoviePlayed.attributes.youtubeVideoId || '';
    const youtubeVideo = `https://www.youtube.com/embed/${youtubeVideoId}`;
    return(
        <section className="container-fluid  d-flex justify-content-between p-0 ps-md-156 pe-md-32 pt-128 text-light">
            <div className="position-fixed top-0 left-0">
                <NavButton
                    icon='bi bi-arrow-left'
                    link='/Movie'
                    handleClick={ () => navigate(-1)}
                />
            </div>
            <div className="container-fluid p-0 d-flex justify-content-center align-items-center flex-column row-gap-24">
                <VideoScreen
                    youtubeVideoSrc={youtubeVideo}
                 />
                <p className="_lead text-light">{currentMoviePlayed.attributes.canonicalTitle}</p>
                {/* <p className="_lead text-light">Youtube id : {youtubeVideoId}</p> */}
            </div>
        </section>
    )
}