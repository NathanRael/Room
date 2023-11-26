import Rate from './Rate';
import { ButtonMd, IconButton } from './Buttons';
import { useState } from 'react';
import redirect from './Redirect';

export default function MovieDetails ({id, srcImage, title, sinopsis, date, rate, episode, addToWatchList}){
    const [addedToWatchList, setAddedToWatchList] = useState(false);

    function handleButtonClick(){
        addToWatchList();
        setAddedToWatchList(true);
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
                        <div className="col-md-6" style={{width : 'max-content'}}>
                            
                            <ButtonMd
                                name="Watch"
                                icon="bi bi-play"
                                color="bg-primary"
                                handleclick={ () => redirect(id)}
                            />
                        </div>
                        {/* <div className="col-md-4" style={{width : 'max-content'}}>
                            <ButtonMd
                                name="Download all"
                                icon="bi bi-cloud-download"
                                color="bg-secondary" 
                            />
                        </div> */}
                        <div className="col-md-6" style={{width : 'max-content'}}>
                            <IconButton
                                icon='bi bi-collection-play'
                                active={addedToWatchList}
                                handleClick={handleButtonClick}
                            />
                        </div>


 
                    </div>
                </div>
            </div>

        </div>
    )
}