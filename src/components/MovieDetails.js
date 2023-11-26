import Rate from './Rate.js';
import { ButtonMd, IconButton } from './Buttons.jsx';
import { useState } from 'react';

export default function MovieDetails ({srcImage, title, sinopsis, date, rate, episode}){
    const [clickedIcon, setClickedIcon] = useState({
        isFavorite : false,
        watchedList : false
    })

    function toggleFavorite(){
        setClickedIcon((prevIcon) =>{
            return {
                isFavorite : !prevIcon.isFavorite,
                watchedList : prevIcon.watchedList
            }
        })
    }
    function addWatchedList(){
        setClickedIcon((prevIcon) =>{
            return {
                isFavorite : prevIcon.isFavorite,
                watchedList : true
            }
        })
    }
    return (
        <div className="card bg-tertiary rounded-4 text-light  _movieCard _shadow">
            <div className="row  g-0">
                <div className="col-12 col-lg-4">
                    <img src={srcImage} className="img-fluid  h-100 w-100  _MovieCardImage"  />
                </div>
                <div className="col-12 col-lg-8">
                    <div className="card-body text-light">
                      <h5 className="card-title _subtitle">{title}</h5>
                      <p className="card-text text-altlight _body">{sinopsis}</p>
                    </div>
                    <div className="card-body d-flex gap-32 text-light">
                        <p className="card-text _link text-light">{date}</p>
                        <Rate
                            rate={rate}
                            heartColor="text-warning"
                            isFill={true}
                        />
                        <p className="card-text _link text-light">Episode {episode}</p>
                    </div>
                    <div className="card-body row  align-items-center justify-content-evenly justify-content-lg-start row-gap-24 pb-24">
                        <div className="col-md-4" style={{width : 'max-content'}}>
                            <IconButton 
                                icon="bi bi-heart"
                                active={clickedIcon.isFavorite}
                                handleClick={toggleFavorite}
                            />
                        </div>
                        <div className="col-md-4" style={{width : 'max-content'}}>
                            
                            <ButtonMd
                                name="Watch"
                                icon="bi bi-play"
                                color="bg-primary"
                            />
                        </div>
                        <div className="col-md-4" style={{width : 'max-content'}}>
                            <ButtonMd
                                name="Download all"
                                icon="bi bi-cloud-download"
                                color="bg-secondary" 
                            />
                        </div>
                        <div className="col-md-4" style={{width : 'max-content'}}>
                            {/* <ButtonMd
                                name="Watchlist"
                                icon="bi bi-collection-play"
                                color="bg-secondary" 
                            /> */}
                            <IconButton
                                icon='bi bi-collection-play'
                                active={clickedIcon.watchedList}
                                handleClick={addWatchedList}
                            />
                        </div>


 
                    </div>
                </div>
            </div>

        </div>
    )
}