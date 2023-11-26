import MovieFilter from "./MoviFilter";
import Card from "./Card";
const colStyle = {
    width : 'max-content'
}
export default function MovieCardContainer({animeList}){
    
    const movies = animeList.map( movie => 
        <div className="col-3" style={colStyle}>
            <Card
                key={movie.id}
                id={movie.id}
                srcImage={movie.srcImage}
                title={movie.title}
                sinopsis={movie.sinopsis}
                date={movie.date}
                rate={movie.rate}
            />
        </div>

    )
    return (
        <section className="container-fluid px-0 bg-secondary pt-40">
            <MovieFilter/>
            <div className="container-fluid mt-24  ps-lg-156 pe-32">
                <div className="row  justify-content-center align-item-center gap-24">
                    {movies}
                </div>
            </div>
        </section>
    )
}