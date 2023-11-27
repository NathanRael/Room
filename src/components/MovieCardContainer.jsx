import MovieFilter from "./MoviFilter";
import Card from "./Card";
const colStyle = {
    width : 'max-content'
}
export default function MovieCardContainer({animeList}){
    
    const movies = animeList.data.map( movie => 
        <div className="col-3" style={colStyle}>
            <Card
             key={movie.id}
             id={movie.id}
             srcImage={movie.attributes.posterImage.large}
             title={movie.attributes.canonicalTitle}
             sinopsis={movie.attributes.description}
             date={movie.attributes.createdAt.slice(0,4)}
             rate={movie.attributes.averageRating}
            />
        </div>

    )
    return (
        <section className="container-fluid px-0 bg-secondary pt-40">
            <div className="container-fluid mt-24  ps-lg-156 pe-32">
                <div className="row  justify-content-center align-item-center gap-24">
                    {movies}
                </div>
            </div>
        </section>
    )
}