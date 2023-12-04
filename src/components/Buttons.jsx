import { Link } from "react-router-dom";

export function Button({ name = 'button', icon = 'bi-circle', color='bg-primary', handleClick }) {
  return (
      <button
        className={`btn  d-inline-flex text-light align-items-center  justify-content-center justify-content-md-start btn-md-lg _button  px-sm-32 py-sm-16 _shadow ${color}`}
        onClick={handleClick}
      >
        <i className={`${icon} me-2`} style={{ fontSize: "24px" }}></i>
        {name}
      </button>
  );
}
export function ButtonMd({ name = 'button', icon = 'bi-circle', color='bg-primary', isIconLeft = true , handleclick }) {
  return (
      <button
        className={`btn  px-16  d-flex text-light align-items-center justify-content-center justify-content-md-start   _body _shadow ${color}`}
        onClick={handleclick}
      >
        {!isIconLeft ? name : '' }
        <i className={`${icon} mx-2`}></i>
        { isIconLeft ? name : ''}
      </button>
  );
}

export function ButtonText({name = 'button', color='bg-primary', handleclick }){
  return (
  <button
      className={`btn  px-48  d-flex text-light align-items-center justify-content-center justify-content-md-start   _body _shadow ${color}`}
      onClick={handleclick}
  >
        {name}
  </button>
  );
}

export function NavButton({ icon, active, handleClick, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <i
        className={`btn text-light rounded-5 p-8 d-flex justify-content-center align-items-center ${
          active ? "btn-primary" : ""
        } ${icon}`}
        style={{ width: "52px", height: "52px", fontSize: "24px" }}
        onClick={handleClick}
      ></i>
    </Link>
  );
}
export function IconButton({ icon, active, handleClick, setActive }) {
  return (
    <i
      className={`btn  rounded-5 p-8 d-flex justify-content-center align-items-center text-primary ${icon}${
        active ? "-fill" : ""
      } `}
      style={{ fontSize: "24px" }}
      onClick={handleClick}
    ></i>
  );
}

export function ShortButton({ icon, color, size = "24px" }) {
  return (
    <i
      className={`btn text-light rounded-5 p-8 d-flex justify-content-center align-items-center ${color} ${icon}`}
      style={{ width: "40px", height: "40px", fontSize: `${size}` }}
    ></i>
  );
}
