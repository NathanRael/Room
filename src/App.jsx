import '../css/custom.css';//bootsrtap sass

import { popularMovie } from './data';

import Hero from './components/hero';
import SearchBar from './components/searchBar';
import Navbar from './components/navBar';
import MovieCardContainer from './components/movieCardContainer';
import MovieSection from './components/movieSection';
import WatchListSection from './components/watchListSection';
import WatchMovieSection from './components/watchMovieSection';

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
      <MovieSection/>
      <WatchListSection/>
      <WatchMovieSection/>
    </> 

  );
}

