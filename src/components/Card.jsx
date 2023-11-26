import { useState } from "react";
import demonSlayer from "../assets/demonSlayer.jfif";
import Rate from "./Rate";

const cardImageStyle = {
  height: "224px",
  objectFit: "cover",
};

export default function Card({ srcImage, title, sinopsis, date, rate }) {
  const [favorite, setFavorite] = useState(false);

  function toggleFavorite() {
    setFavorite((prevFav) => !prevFav);
  }

  let splitedSinopsis = sinopsis.length > 180 ? sinopsis.slice(0,180) + ' . . .' : sinopsis;

  return (
    <div
      className="card rounded-4 bg-tertiary m-0 _shadow"
      style={{ width: "280px" }}
    >
      <img
        src={srcImage}
        alt=""
        className="img-top rounded-top-4"
        style={cardImageStyle}
      />
      <div className="card-body  p-16 text-light">
        <h1 className="card-title _lead " type="button">
          {title}
        </h1>
        <h2 className="card-text _link text-altlight">{splitedSinopsis}</h2>
      </div>
      <div className="card-footer border-0  d-flex justify-content-between align-item-center text-light _link p-16 pt-0">
        <p>{date}</p>
        <Rate
          rate={rate}
          isFill={favorite}
          toggleFavorite={toggleFavorite}
          heartColor="text-primary"
          type="button"
        />
      </div>
    </div>
  );
}