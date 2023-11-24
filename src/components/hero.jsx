import { Button } from "./Buttons";
import Rate from "./Rate";

export default function Hero(props) {
  const container = {
    paddingTop: "172px",
    width: "fit-content",
    rowGap: "25px",
  };
  const heroStyle = {
    background: `linear-gradient(rgba(19, 24, 52,0.8), rgba(19, 24, 52,0.8)),  url(${props.image})`,
    backgroundSize: "cover",
  };
  return (
    <div
      className="container-fluid d-flex flex-column w-100    pt-32  ps-sm-24 ps-md-128 ps-lg-156 pe-md-128 pb-40 _hero"
      style={heroStyle}
    >
      <div className="d-flex flex-column" style={container}>
        <h1 className="_title text-light">{props.title}</h1>
        <p className="_lead text-altlight">{props.sinopsis}</p>
      </div>
      <Rate rate={props.rate} heartColor="text-warning" isFill={true} />
      <div className="d-flex  justify-content-center justify-content-sm-between row-gap-24 flex-column flex-sm-row _heroBtnContainer ">
        <Button name="Watch" icon="bi bi-play" color="btn-primary" />
        <Button
          name="Add to watch list"
          icon="bi bi-collection-play"
          color="btn-secondary"
        />
      </div>
    </div>
  );
}
