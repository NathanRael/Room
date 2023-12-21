import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const buttonVariant = {
  initial: {
    scale: 1,
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

export function Button({
  name = "button",
  icon = "bi-circle",
  color = "btn-primary",
  handleClick,
}) {
  return (
    <motion.button
      variants={buttonVariant}
      initial="intial"
      whileTap="tap"
      className={`btn  d-inline-flex text-light align-items-center  justify-content-center justify-content-md-start btn-md-lg _button  px-sm-32 py-sm-16 _shadow ${color}`}
      onClick={handleClick}
    >
      <i className={`${icon} me-2`} style={{ fontSize: "24px" }}></i>
      {name}
    </motion.button>
  );
}
export function ButtonMd({
  name = "button",
  icon = "bi-circle",
  color = "btn-primary",
  isIconLeft = true,
  handleclick,
}) {
  return (
    <motion.button
      variants={buttonVariant}
      initial="intial"
      whileTap="tap"
      className={`btn  px-16  d-flex text-light align-items-center justify-content-center justify-content-md-start   _body _shadow ${color}`}
      onClick={handleclick}
    >
      {!isIconLeft ? name : ""}
      <i className={`${icon} mx-2`}></i>
      {isIconLeft ? name : ""}
    </motion.button>
  );
}

export function ButtonText({
  name = "button",
  color = "btn-primary",
  handleclick,
}) {
  return (
    <motion.button
      variants={buttonVariant}
      initial="intial"
      whileTap="tap"
      className={`btn  px-48  d-flex text-light align-items-center justify-content-center justify-content-md-start   _body _shadow ${color}`}
      onClick={handleclick}
    >
      {name}
    </motion.button>
  );
}

export function NavButton({ icon, active, handleClick, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <i
        className={`btn  rounded-5 p-8 d-flex justify-content-center align-items-center _transColor  ${
          active ? ` btn-primary ${icon}-fill ` : `${icon} text-light`
        } `}
        style={{ width: "52px", height: "52px", fontSize: "24px" }}
        onClick={handleClick}
      ></i>
    </Link>
  );
}
export function IconButton({
  icon,
  active,
  handleClick,
  color = "text-primary",
  setActive,
}) {
  return (
    <motion.i
      variants={buttonVariant}
      initial="intial"
      whileTap="tap"
      className={`btn  rounded-5 p-8 d-flex justify-content-center align-items-center text-primary _transColor ${color} ${icon}${
        active ? "-fill" : ""
      } `}
      style={{ fontSize: "24px" }}
      onClick={handleClick}
    ></motion.i>
  );
}

export function ShortButton({ icon, color, size = "24px" }) {
  return (
    <motion.i
      variants={buttonVariant}
      initial="intial"
      whileTap="tap"
      className={`btn text-light rounded-5 p-8 d-flex justify-content-center align-items-center ${color} ${icon}`}
      style={{ width: "40px", height: "40px", fontSize: `${size}` }}
    ></motion.i>
  );
}
