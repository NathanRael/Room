import WatchList from "./watchList"
export default function WatchListSection(){
    return (
        <div className="container-fluid  d-flex flex-column gap-32 ps-156 pe-32 mt-128 bg-secondary text-light">
            <h1 className="text-center">WatchList</h1>
            <WatchList/>
            <WatchList/>
            <WatchList/>
        </div>
    )
}