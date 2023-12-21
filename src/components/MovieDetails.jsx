import Rate from "./Rate";
import { ButtonMd, IconButton } from "./Buttons";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { Status } from "./details";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cardVariant } from "../animation/variants";

export default function MovieDetails({
  id,
  srcImage,
  title,
  sinopsis,
  date,
  rate,
  episode,
  status,
  addToWatchList,
  onWatch,
  onNavigate,
  index,
}) {
  const navigate = useNavigate();
  const { animeWatchList } = useContext(DataContext);
  const exists = animeWatchList?.some((anime) => anime.id === id);
  const [addedToWatchList, setAddedToWatchList] = useState(
    exists ? true : false
  );

  function handleAddToWatchListClick() {
    addToWatchList();
    setAddedToWatchList(true);
  }

  const maxChar = 650;

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 * index }}
      className="card align-self-center  bg-secondary rounded-4 text-light  border border-dark _movieCard shadow-sm"
    >
      <div className="row  g-0">
        <div className="col-12 col-lg-4">
          <img
            type="button"
            src={srcImage}
            className="img-fluid  h-100 w-100  _MovieCardImage"
            onClick={onNavigate}
          />
        </div>
        <div className="col-12 col-lg-8">
          <div className="card-body text-light">
            <a
              className="card-title _subtitle"
              type="button"
              onClick={onNavigate}
            >
              {title}
            </a>
            <p className="card-text text-altlight _body">
              {" "}
              {sinopsis.length > maxChar
                ? sinopsis.slice(0, maxChar) + " . . ."
                : sinopsis}
            </p>
          </div>
          <div className="card-body d-flex align-items-center justify-content-center justify-content-sm-start   gap-32 text-light">
            <div className="card-text _link text-light">{date.slice(0, 4)}</div>
            <Rate rate={rate} heartColor="text-warning" isFill={true} />
            <div className="card-text _link text-light">{episode} episode</div>
            <Status status={status}></Status>
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
    </motion.div>
  );
}
