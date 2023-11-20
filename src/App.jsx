import '../css/custom.css';//bootsrtap sass

import { popularMovie } from './data';

import Hero from './components/hero';
import SearchBar from './components/searchBar';
import Navbar from './components/navBar';
import MovieCardContainer from './components/movieCardContainer';

export default function App() {

  return (
    <>
      <SearchBar is_fixed={false}/>
      <Navbar/>
      <Hero
        image = {popularMovie.srcImage}
        title = {popularMovie.title}
        rate = {popularMovie.rate}
        sinopsis = {popularMovie.sinopsis}
      />
      <MovieCardContainer/>
    </>

  );
}

