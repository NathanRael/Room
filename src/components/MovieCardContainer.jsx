import MovieFilter from "./MoviFilter";
import DataContext from "../context/DataContext";
import Card from "./Card";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const colStyle = {
    width : 'max-content'
}
export default function MovieCardContainer({animeFilterList, handleclick}){
    const navigate = useNavigate();
    const movies = animeFilterList.data.map( movie => 
        <div className="col-auto" style={colStyle}>
            <Card
             key={movie.id}
             id={movie.id}
             srcImage={movie.attributes.posterImage.large}
             title={movie.attributes.canonicalTitle}
             sinopsis={movie.attributes.description}
             date={movie.attributes.createdAt.slice(0,4)}
             rate={movie.attributes.averageRating}
             status={movie.attributes.status}
             handleclick={() => {navigate(`/MovieInfo/${movie.attributes.slug}/${movie.id}`) }}
            //  handleclick={() => {navigate('/Movie');handleclick(movie.attributes.canonicalTitle); }}
            />
        </div>

    )
    return (
        <section className="container-fluid px-0 bg-secondary pt-40 mb-32 ps-sm-128 ps-lg-156 pe-sm-32">
            <div className="container-fluid mt-24 ">
                <div className="row justify-content-center align-item-center gap-32">
                    {movies}
                </div>
            </div>
        </section>
    )
}