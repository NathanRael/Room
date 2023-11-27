import Rate from "./Rate";
import { ButtonMd, IconButton } from "./Buttons";
import { useState } from "react";

export default function MovieDetails({
  srcImage,
  title,
  sinopsis,
  date,
  rate,
  episode,
  addToWatchList,
  onWatch,
}) {
  const [addedToWatchList, setAddedToWatchList] = useState(false);

  function handleAddToWatchListClick() {
    addToWatchList();
    setAddedToWatchList(true);
  }


  return (
    <div className="card bg-tertiary rounded-4 text-light  _movieCard _shadow">
      <div className="row  g-0">
        <div className="col-12 col-lg-4">
          <img
            src={srcImage}
            className="img-fluid  h-100 w-100  _MovieCardImage"
          />
        </div>
        <div className="col-12 col-lg-8">
          <div className="card-body text-light">
            <h5 className="card-title _subtitle">{title}</h5>
            <p className="card-text text-altlight _body">{sinopsis}</p>
          </div>
          <div className="card-body d-flex gap-32 text-light">
            <p className="card-text _link text-light">{date.slice(0,4)}</p>
            <Rate rate={rate} heartColor="text-warning" isFill={true} />
            <p className="card-text _link text-light">Episode {episode}</p>
          </div>
          <div className="card-body row  align-items-center justify-content-evenly justify-content-lg-start row-gap-24 pb-24">
            <div className="col-md-6" style={{ width: "max-content" }}>
              <ButtonMd
                name="Watch"
                icon="bi bi-play"
                color="bg-primary"
                handleclick={onWatch}
              />
            </div>
            <div className="col-md-6" style={{ width: "max-content" }}>
              <IconButton
                icon="bi bi-collection-play"
                active={addedToWatchList}
                handleClick={handleAddToWatchListClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
