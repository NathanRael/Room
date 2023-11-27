import { VideoScreen } from "../components/VideoScreen";
import {NavButton, ShortButton} from '../components/Buttons';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadMovie } from "../components/Functions";

export default function WatchMovie({ animeList }) {
    const [currentMovieId, setCurrentMovieId] = useState(0)
    const navigate = useNavigate();
    useEffect(() =>{
        setCurrentMovieId(loadMovie("currentMoviePlayed"));
    }, [])
    const id = 'qig4KOK2R2g'
    const youtubeVideo = `https://www.youtube.com/watch?v=${id}`;
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
                <VideoScreen />
                <p className="_lead text-light">{animeList.data[currentMovieId].attributes.canonicalTitle}</p>
            </div>
        </section>
    )
}