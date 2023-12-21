import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Rate from "./Rate";
import { Status } from "./details";
import { cardVariant } from "../animation/variants";
const cardImageStyle = {
  maxHeight: "324px",
  objectFit: "cover",
};



export default function Card({
  id,
  srcImage,
  title,
  sinopsis,
  date,
  rate,
  status,
  handleclick,
  index,
}) {
  return (
    <motion.div
    custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      whileHover='hover'
      type="button"
      onClick={() => {
        handleclick();
      }}
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
        <p className="card-title _lead">{title}</p>
        {/* <h2 className="card-text _link text-altlight mt-16">
          {splitedSinopsis}
        </h2> */}
      </div>
      <div className="card-footer border-0  d-flex justify-content-between align-items-center text-light _link p-0 pb-8">
        <div>{date}</div>
        <Rate rate={rate} isFill={true} heartColor="text-warning" />
        <Status status={status} />
      </div>
    </motion.div>
  );
}
