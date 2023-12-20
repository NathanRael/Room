import { ButtonText } from "./Buttons";
import "./Popup.css";
import DataContext from "../context/DataContext";
import { useContext } from "react";
export default function InfoPopup({}) {
  const {popupInfo, hidePopupInfo} = useContext(DataContext);

  document.body.style.overflow = !popupInfo.isPopupVisible ? "auto" : "hidden";
  return (
    <>
      <div className={`_fade ${popupInfo.isPopupVisible ? "_popupVisible" : ""}`}></div>
      <div
        className={`card position-fixed bg-secondary _shadow rounded-3 _popup p-24 ${
          popupInfo.isPopupVisible ? "_popupVisible" : ""
        }`}
      >
        <i
          className={`bi ${
            popupInfo.success ? "bi-check-circle-fill" : "bi-exclamation-triangle-fill"
          } text-${popupInfo.success ? "success" : "warning"} _signIcon`}
        ></i>
        <div className="card-body text-light text-center _lead">
          {popupInfo.success ? "Success" : "Warning"}
        </div>
        <div className="card-body text-altlight">
          <h3 className="_body text-center">{popupInfo.popupText}</h3>
        </div>
        <div className="card-footer d-flex justify-content-center  ">
          <ButtonText name="Ok" handleclick={hidePopupInfo} />
        </div>
      </div>
    </>
  );
}
