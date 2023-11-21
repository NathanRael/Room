
import { useState } from 'react';
import demonSlayer from '../assets/demonSlayer.jfif';
import Rate from './rate';

const cardImageStyle = {
    height : '224px',
    objectFit: 'cover',
}

export default function Card({srcImage,title, sinopsis, date, rate}){
    const [favorite, setFavorite] = useState(false);

    function toggleFavorite(){
        setFavorite(prevFav => !prevFav);
    }

    return (
        <div className="card rounded-4 bg-tertiary m-0 _shadow" style={{width : '280px'}}>
            <img src={demonSlayer} alt=""  className='img-top rounded-top-4' style={cardImageStyle} />
            <div className="card-body  p-16 text-light">
                <h1 className="card-title _lead " type="button">{title}</h1>
                <h2 className="card-text _link text-altlight">{sinopsis}</h2>
            </div>
            <div className="card-footer border-0  d-flex justify-content-between align-item-center text-light _link p-16 pt-0">
                <p>{date}</p>
                <Rate rate={rate} isFill={favorite} toggleFavorite={toggleFavorite} heartColor='text-primary' type="button"/>
            </div>
        </div>
    )
}