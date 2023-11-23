import { popularMovie } from '../data';

import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import MovieCardContainer from '../components/MovieCardContainer';

export default function Home(){
    return(
        <section  className="container-fluid p-0 w-100">
            <SearchBar is_fixed={false}/>
            <Hero
                image = {popularMovie.srcImage}
                title = {popularMovie.title}
                rate = {popularMovie.rate}
                sinopsis = {popularMovie.sinopsis}
            />
            <MovieCardContainer/>
        </section>
    )
}