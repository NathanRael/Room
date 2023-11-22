import WatchList from "../components/WatchList";
import SearchBar from '../components/SearchBar';

export default function WatchLists(){
    return(
        <div className="container-fluid p-0">
                <SearchBar is_fixed={true} showSearchBar={false} title='WatchList' />
            <div className="d-flex flex-column row-gap-32 justify-content-center ps-156 pe-32 py-128">
                <WatchList/>
                <WatchList/>
                <WatchList/>
            </div>
        </div>

    )
}