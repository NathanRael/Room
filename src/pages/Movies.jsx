import { animeList } from "../data";
import MovieDetails from "../components/MovieDetails";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import addToWatchList from "../components/AddToWatchList";
import { useNavigate } from "react-router-dom";
import { saveMovie } from '../components/Functions';


export default function Movies({ animeSearchList, setSearchValue, searchValue }) {
  const navigate = useNavigate();
  const animePos = 0;
  return (
    <section className="container-fluid p-0 bg-secondary text-light ">
      <SearchBar 
        is_fixed={true} 
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className=" container-fluid d-flex flex-column row-gap-32 justify-content-center ps-md-156 pe-md-32 py-256 py-sm-128">
        <MovieDetails

          id={animeSearchList.data[animePos].id}
          key={animeSearchList.data[animePos].id}
          srcImage={animeSearchList.data[animePos].attributes.posterImage.medium}
          title={animeSearchList.data[animePos].attributes.canonicalTitle}
          sinopsis={animeSearchList.data[animePos].attributes.description}
          rate={animeSearchList.data[animePos].attributes.averageRating}
          date={animeSearchList.data[animePos].attributes.createdAt}
          episode={animeSearchList.data[animePos].episodeCount}
          addToWatchList={() => { addToWatchList(animeList.data[animePos], animeSearchList) }}
          onWatch={() => {
            saveMovie(animeSearchList.data[animePos]);
            navigate('/Watch');
          }}
        />
      </div>
      <Footer></Footer>
    </section>
  );
}
