import { VideoScreen } from "../components/VideoScreen";
import {NavButton, ShortButton} from '../components/Buttons';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WatchMovie(){
    let currentMovieId;
    const navigate = useNavigate();
    useEffect(() =>{
        currentMovieId = localStorage.getItem('currentMoviePlayed') || null;
    }, [])
    const id = 'qig4KOK2R2g'
    const youtubeVideo = `https://www.youtube.com/watch?v=${id}`;
    return(
        <section className="container-fluid d-flex justify-content-between ps-md-156 pe-md-32 pt-128 text-light">
            <div className="position-fixed top-0 left-0">
                <NavButton
                    icon='bi bi-arrow-left'
                    link='/Movie'
                    handleClick={ () => navigate(-1)}
                />
            </div>
            <div className="container-fluid d-flex justify-content-center ">
                <VideoScreen/>
            </div>
        </section>
    )
}