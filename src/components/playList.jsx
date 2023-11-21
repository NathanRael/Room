import {ShortButton} from './buttons';

export default function PlayList(){
    return(
        <div className="container-fluid p-0 text-light bg-tertiary _playList" >
            
            <div className="container-fluid p-16 pt-32 text-left _shadow _lead mb-32">
                <div className="d-flex justify-content-start align-items-center column-gap-8">
                    <i className="bi bi-list-ol" style={{fontSize : '32px'}}></i>
                    Play list
                </div>
            </div>
            <div className="container-fluid p-0 d-flex flex-column text-light _movieListContainer">
                <Movie active={true}/>
                <Movie/>
                <Movie/>
                <Movie/>
            </div>
        </div>
    )
}

function Movie({active}){
    return (
        <div className={`container-fluid d-flex justify-content-between align-items-center p-16 pe-32 _movieLine ${active ? 'bg-primary opacity-100' : ''}`}>
            <div className='_body'>Spy x Family S1 : episode 01</div>
            <ShortButton
                icon='bi bi-cloud-download'
                color='bg-primary'
                size='16px'
            />
            <ShortButton
                icon='bi bi-play'
                size='32px'
            />

        </div>
    )
}



