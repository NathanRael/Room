import { VideoScreen } from "../components/VideoScreen";
import PlayList from "../components/PlayList";
import {ShortButton} from '../components/Buttons';

export default function WatchMovie(){
    return(
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