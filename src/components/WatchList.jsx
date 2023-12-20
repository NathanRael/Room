import { ButtonMd } from "./Buttons";
import Rate from "./Rate";
import { Status } from "./details";

export default function WatchList({

  srcImage,
  title,
  date,
  rate,
  status,
  handleclick,
  onWatch,
}) {

  return (
    <div
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
      </div>
      <div className="card-footer border-0  d-flex justify-content-between align-items-center text-light _link p-0 pb-8">
        <div>{date}</div>
        <Rate rate={rate} isFill={true} heartColor="text-warning" />
        <Status status={status} />
      </div>
      <div className="Card-footer d-grid">
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
          handleclick={handleclick}
        />
      </div>
    </div>
  );
}

// export default function WatchList({ srcImage, title, handleclick, onWatch }) {
//   return (
//     <div className="card bg-secondary border border-dark rounded-4 text-light  _movieCard ">
//       <div className="row g-0">
//         <div className="col-auto d-none d-lg-block">
//           <img
//             src={srcImage}
//             className="img-fluid  rounded-start-4 _MovieCardImage"
//             style={{ height: "150px" }}
//           />
//         </div>
//         <div className="col-12 col-lg-8">
//           <div className="card-body text-light">
//             <h5 className="card-title _lead text-center text-md-start">
//               {title}
//             </h5>
//           </div>
//           <div className="card-body d-flex flex-column flex-md-row gap-16 gap-md-64">
// <ButtonMd name="Watch" icon="bi bi-play" color="btn-primary" handleclick={onWatch} />
// <ButtonMd
//   name="Remove"
//   icon="bi bi-bookmark-dash"
//   color="btn-primary"
//   handleclick={handleclick}
// />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
