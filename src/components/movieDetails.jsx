import {movieData} from '../data.js';
import Rate from './rate.jsx';
import { ButtonMd, NavButton } from './buttons.jsx';

export default function MovieDetails (){
    return (
        <div className="card bg-tertiary rounded-4 text-light  _movieCard _shadow">
            <div className="row g-0">
                <div className="col-4">
                    <img src={movieData[0].srcImage} className="img-fluid h-100 rounded-start-4 _MovieCardImage"  />
                </div>
                <div class="col-md-8">
                    <div class="card-body text-light">
                      <h5 class="card-title _subtitle">Card title</h5>
                      <p class="card-text text-altlight _body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-body d-flex gap-32 text-light">
                        <p className="card-text _link text-light">2016</p>
                        <Rate
                            rate="+ 16, 000"
                            heartColor="text-warning"
                            isFill={true}
                        />
                        <p className="card-text _link text-light">Episode 1-12</p>
                    </div>
                    <div className="card-body d-flex align-items-center gap-64">
                        <NavButton icon="bi bi-heart"/>
                        <ButtonMd
                            name="Watch"
                            icon="bi bi-play"
                            color="bg-primary"
                        />
                        <ButtonMd
                            name="Download all"
                            icon="bi bi-cloud-download"
                            color="bg-secondary" 
                        />
                        <ButtonMd
                            name="Watchlist"
                            icon="bi bi-collection-play"
                            color="bg-secondary" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}