import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Rate from "./Rate";

const cardImageStyle = {
  height: "224px",
  objectFit: "cover",
};

export default function Card({ id, srcImage, title, sinopsis, date, rate, handleclick }) {
  const navigate = useNavigate();

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
        <Link 
        to='/Movie'  
        className="card-title _lead"
        onClick={handleclick}
        >
          {title}
        </Link>
        <h2 className="card-text _link text-altlight mt-16">{splitedSinopsis}</h2>
      </div>
      <div className="card-footer border-0  d-flex justify-content-between align-item-center text-light _link p-16 pt-0">
        <p>{date}</p>
        <Rate
          rate={rate}
          isFill={true}
          heartColor="text-warning"
          type="button"
        />
      </div>
    </div>
  );
}
