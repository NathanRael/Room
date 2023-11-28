import { animeList } from "../data";
import MovieDetails from "../components/MovieDetails";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import addToWatchList from "../components/AddToWatchList";
import { useNavigate } from "react-router-dom";
import { loadMovie, saveMovie } from '../components/Functions';
import { useEffect } from "react";


export default function Movies({ animeSearchList, setSearchValue, searchValue, handleclick }) {
  const navigate = useNavigate();
  let animeSearchListItem;
  if (animeSearchList.data && animeSearchList.data.length > 0){
    
    animeSearchListItem = animeSearchList.data.
    map( anime =>
     <MovieDetails
      id={anime.id}
      key={anime.id}
      srcImage={anime.attributes.posterImage.small}
      title={anime.attributes.canonicalTitle}
      sinopsis={anime.attributes.description}
      rate={anime.attributes.averageRating}
      date={anime.attributes.createdAt}
      episode={anime.attributes.episodeCount}
      addToWatchList={() => { addToWatchList(anime, loadMovie('watchList') || []) }}
      onWatch={() => {
        saveMovie('currentMoviePlayed', anime);
        navigate('/Watch');
      }}
      
    />
      )
  }
      return (
    <section className="container-fluid p-0 bg-secondary text-light ">
      <SearchBar 
        is_fixed={true} 
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        handleClick={handleclick}
      />
      <div className=" container-fluid d-flex flex-column row-gap-32 justify-content-center ps-md-156 pe-md-32 py-256 py-sm-128">
        { animeSearchList.data && animeSearchList.data.length > 0 ? (
          [animeSearchListItem]
        ) : (
          <p className="_lead text-primary text-center">No anime match</p>
        )}
      </div>
      <Footer></Footer>
    </section>
  );
}
