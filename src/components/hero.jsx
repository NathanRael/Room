import {Button} from  './buttons';
import Rate from './rate';


export default function Hero(props){
    const heroStyle = {
        paddingTop : '172px',
        width : 'fit-content',
        rowGap : '25px',
    }
    const imageStyle = {
        background : `linear-gradient(rgba(19, 24, 52,0.8), rgba(19, 24, 52,0.8)),  url(${props.image})`,
        backgroundSize : 'cover',
        backgroundPosition : '80px -80px',
        width : '100%',
        height : '90vh',
        paddingRight : '128px',
        paddingBottom : '40px',
        rowGap : '40px',
    }
    return (
        <div className="hero d-flex flex-column ps-156" style={imageStyle}>
            <div className="d-flex flex-column" style={heroStyle}>
                <h1 className="_title text-light">{props.title}</h1>
                <p className="_lead text-altlight">{props.sinopsis}</p>
            </div>
            <Rate rate={props.rate} heartColor='text-warning' isFill={true}/>
            <div className="d-flex justify-content-between" style={{width : '446px'}}>
                <Button name="Watch" icon="bi bi-play" color="btn-primary"/>  
                <Button name="Add to watch list" icon="bi bi-collection-play" color="btn-secondary"/>  
            </div>
        </div>
    );
}