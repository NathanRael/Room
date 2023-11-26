import { Button } from "./Buttons";
import Rate from "./Rate";

export default function Hero({ srcImage, title, sinopsis, rate, addToWatchList, onWatch}) {
  const container = {
    paddingTop: "172px",
    width: "fit-content",
    rowGap: "25px",
  };
  const heroStyle = {
    background: `linear-gradient(rgba(19, 24, 52,0.8), rgba(19, 24, 52,0.8)),  url(${srcImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="container-fluid d-flex flex-column w-100    pt-32  ps-sm-24 ps-md-128 ps-lg-156 pe-md-128 pb-40 _hero"
      style={heroStyle}
    >
      <div className="d-flex flex-column" style={container}>
        <h1 className="_title text-light">{title}</h1>
        <p className="_lead text-altlight">{sinopsis}</p>
      </div>
      <Rate rate={rate} heartColor="text-warning" isFill={true} />
      <div className="d-flex  justify-content-center justify-content-sm-between row-gap-24 flex-column flex-sm-row _heroBtnContainer ">
        <Button
          name="Watch"
          icon="bi bi-play"
          color="btn-primary"
          handleClick={onWatch}
        />
        <Button
          name="See later"
          icon="bi bi-collection-play"
          color="btn-secondary"
          handleClick={addToWatchList}
        />
      </div>
    </div>
  );
}