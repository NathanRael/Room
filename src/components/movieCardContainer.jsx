import MovieFilter from "./moviFilter";
import Card from "./card";
import { movieData } from "../data";
import { useEffect } from "react";
const colStyle = {
    width : 'max-content'
}
export default function MovieCardContainer(){
    
    const movies = movieData.map( movie => 
        <div className="col-3" style={colStyle}>
            <Card
                key={movie}
                title={movie.title}
                sinopsis={movie.sinopsis}
                date={movie.date}
                rate={movie.rate}
            />
        </div>

    )
    return (
        <section className="container-fluid ps-156 pe-32 bg-secondary pt-40">
            <MovieFilter/>
            <div className="container-fluid p-16">
                <div className="row  justify-content-center align-item-center gap-24">
                    {movies}
                </div>
                
            </div>
        </section>
    )
}