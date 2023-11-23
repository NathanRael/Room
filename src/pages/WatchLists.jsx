import WatchList from "../components/WatchList";
import SearchBar from '../components/SearchBar';

export default function WatchLists(){
    return(
        <div className="container-fluid p-0">
                <SearchBar is_fixed={false} showSearchBar={false} title='WatchList' />
            <div className="d-flex flex-column row-gap-32 justify-content-center ps-md-156 pe-md-32 pt-256 pb-128 py-md-128">
                <WatchList/>
                <WatchList/>
                <WatchList/>
            </div>
        </div>

    )
}