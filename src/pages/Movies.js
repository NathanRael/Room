import { animeList } from "../data";
import MovieDetails from "../components/MovieDetails";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function Movies() {
  return (
    <section className="container-fluid p-0 bg-secondary text-light ">
      <SearchBar is_fixed={true} />
      <div className=" container-fluid d-flex flex-column row-gap-32 justify-content-center ps-md-156 pe-md-32 py-256 py-sm-128">
        <MovieDetails
          srcImage={animeList[3].srcImage}
          title={animeList[1].title}
          sinopsis={animeList[1].sinopsis}
          rate={animeList[1].rate}
          date={animeList[1].date}
          episode={animeList[1].episode}
        />
      </div>
      <Footer></Footer>
    </section>
  );
}
