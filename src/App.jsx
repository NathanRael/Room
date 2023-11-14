import '../css/custom.css';//bootsrtap sass

import { popularMovie } from "./components/data";

import Hero from './components/hero';
import SearchBar from './components/searchBar';
import Navbar from './components/navBar';

export default function App() {

  return (
    <>
      <SearchBar/>
      <Navbar/>
      <Hero
        image = {popularMovie.srcImage}
        title = {popularMovie.title}
        rate = {popularMovie.rate}
        sinopsis = {popularMovie.sinopsis}
      />
    </>

  );
}

