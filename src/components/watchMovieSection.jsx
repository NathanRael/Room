import { VideoScreen } from "./videoScreen";
import PlayList from "./playList";
import {ShortButton} from './buttons';

export default function WatchMovieSection(){
    return (
        <section className="container-fluid d-flex justify-content-between ps-156 pe-32 pt-128 text-light">
            <ShortButton
                icon='bi bi-arrow-left'
                size='32px'
            />
            <VideoScreen/>
            <PlayList/>
        </section>
    )
}