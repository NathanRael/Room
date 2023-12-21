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
    const animes = animeFilterList.data.map( (anime, index) => 
        <div className="col-auto" style={colStyle}>
            <Card
             key={anime.id}
             id={anime.id}
             index={index}
             srcImage={anime.attributes.posterImage.large}
             title={anime.attributes.canonicalTitle}
             sinopsis={anime.attributes.description}
             date={anime.attributes.createdAt.slice(0,4)}
             rate={anime.attributes.averageRating}
             status={anime.attributes.status}
             handleclick={() =>  navigate(`/MovieInfo/${encodeURIComponent(anime.attributes.canonicalTitle)}/${anime.id}`)}
            //  handleclick={() => {navigate('/Movie');handleclick(anime.attributes.canonicalTitle); }}
            />
        </div>

    )
    return (
        <section className="container-fluid px-0 bg-secondary pt-40 mb-32 ps-sm-128 ps-lg-156 pe-sm-32">
            <div className="container-fluid mt-24 ">
                <div className="row justify-content-center align-item-center gap-32">
                    {animes}
                </div>
            </div>
        </section>
    )
}