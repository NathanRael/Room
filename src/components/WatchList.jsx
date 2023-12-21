import { ButtonMd } from "./Buttons";
import Rate from "./Rate";
import { Status } from "./details";
import { motion, AnimatePresence } from "framer-motion";
import { cardVariant } from "../animation/variants";
import { useState } from "react";

const cardImageStyle = {
  maxHeight: "324px",
  objectFit: "cover",
};

export default function WatchList({
  srcImage,
  title,
  date,
  rate,
  status,
  handleclick,
  onWatch,
  index,
  onNavigate
}) {
  const [isRemoved, setIsRemoved] = useState(false);

  return (
    <>
      <motion.div
        custom={index}
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        className="card m-0 shadow-none bg-secondary border-0 p-0  "
        style={{ width: "280px" }}
      >
        <img
          src={srcImage}
          alt=""
          className="img-top rounded-3"
          style={cardImageStyle}
        />
        <div className="card-body px-0 py-8  text-light ">
          <a  onClick={onNavigate} href='#' className="card-title _lead">{title}</a>
        </div>
        <div className="card-footer border-0  d-flex justify-content-between align-items-center text-light _link p-0 pb-8">
          <div>{date}</div>
          <Rate rate={rate} isFill={true} heartColor="text-warning" />
          <Status status={status} />
        </div>
        <div className="Card-footer d-flex justify-content-between mt-8">
          <ButtonMd
            name="Watch"
            icon="bi bi-play"
            color="btn-primary"
            handleclick={onWatch}
          />
          <ButtonMd
            name="Remove"
            icon="bi bi-bookmark-dash"
            color="btn-primary"
            handleclick={() => {
              handleclick();
              setIsRemoved(true);
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
