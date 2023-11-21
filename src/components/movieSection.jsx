import MovieDetails from "./movieDetails";

export default function MovieSection(){
    return (
        <section className="container-fluid d-flex flex-column row-gap-32 justify-content-center bg-secondary text-light ps-156 pe-32 py-128">
            <MovieDetails/>
            <MovieDetails/>
            <MovieDetails/>
        </section>
    )
}