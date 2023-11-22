import MovieDetails from "../components/MovieDetails";
import SearchBar from '../components/SearchBar';

export default function Movies(){
    return(
        <section className="container-fluid p-0 bg-secondary text-light ">
            <SearchBar is_fixed={true}/>
            <div className="d-flex flex-column row-gap-32 justify-content-center ps-156 pe-32 py-128">
                <MovieDetails/>
                <MovieDetails/>
                <MovieDetails/>
            </div>
        </section>
    )
}