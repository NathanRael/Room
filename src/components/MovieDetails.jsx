import Rate from "./Rate";
import { ButtonMd, IconButton } from "./Buttons";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

export default function MovieDetails({
  id,
  srcImage,
  title,
  sinopsis,
  date,
  rate,
  episode,
  addToWatchList,
  onWatch,
}) {

  const {animeWatchList} = useContext(DataContext);
  const exists = animeWatchList?.some(anime => anime.id === id);
  const [addedToWatchList, setAddedToWatchList] = useState(exists ? true : false);
  
  function handleAddToWatchListClick() {
    addToWatchList();
    setAddedToWatchList(true);
  }

  const maxChar = 650;

  return (
    <div className="card bg-secondary rounded-4 text-light  border border-dark _movieCard shadow-sm">
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
            <p className="card-text text-altlight _body">
              {" "}
              {sinopsis.length > maxChar
                ? sinopsis.slice(0, maxChar) + " . . ."
                : sinopsis}
            </p>
          </div>
          <div className="card-body d-flex gap-32 text-light">
            <p className="card-text _link text-light">{date.slice(0, 4)}</p>
            <Rate rate={rate} heartColor="text-warning" isFill={true} />
            <p className="card-text _link text-light">
              Episode number {episode}
            </p>
          </div>
          <div className="card-body row  align-items-center justify-content-evenly justify-content-lg-start row-gap-24 pb-24">
            <div className="col-md-6" style={{ width: "max-content" }}>
              <ButtonMd
                name="Watch"
                icon="bi bi-play"
                color="btn-primary"
                handleclick={onWatch}
              />
            </div>
            <div className="col-md-6" style={{ width: "max-content" }}>
              <IconButton
                icon="bi bi-bookmark"
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
