import { ButtonMd } from "./Buttons";

export default function WatchList({ srcImage, title, handleclick }) {
  return (
    <div className="card bg-tertiary rounded-4 text-light  _movieCard _shadow">
      <div className="row g-0">
        <div className="col-auto d-none d-lg-block">
          <img
            src={srcImage}
            className="img-fluid  rounded-start-4 _MovieCardImage"
            style={{ height: "150px" }}
          />
        </div>
        <div className="col-12 col-lg-8">
          <div className="card-body text-light">
            <h5 className="card-title _subtitle text-center text-md-start">
              {title}
            </h5>
          </div>
          <div className="card-body d-flex flex-column flex-md-row gap-16 gap-md-64">
            <ButtonMd name="Watch" icon="bi bi-play" color="bg-primary" />
            {/* <ButtonMd
              name="Download all"
              icon="bi bi-cloud-download"
              color="bg-secondary"
            /> */}
            <ButtonMd
              name="Remove"
              icon="bi bi-trash"
              color="bg-primary"
              handleclick={handleclick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
