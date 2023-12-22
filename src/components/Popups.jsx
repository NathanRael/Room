import { ButtonText } from "./Buttons";
import "./Popup.css";
import DataContext from "../context/DataContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

export default function InfoPopup({}) {
  const { popupInfo, hidePopupInfo } = useContext(DataContext);
    document.body.style.overflow = popupInfo.isPopupVisible ? "hidden" : "auto";

  return (
    <>
      <motion.div
        className={`_fade ${popupInfo.isPopupVisible ? "_popupVisible" : ""}`}
      ></motion.div>
      <motion.div
        initial = {{x : "-50%", y : "-50%"}}
        animate={{
          scale: popupInfo.isPopupVisible ? 1 : 0.5,
          opacity: popupInfo.isPopupVisible ? 1 : 0,
          visibility : popupInfo.isPopupVisible ? "visible" : "hidden",

        }}
        transition={{ duration: 0.3, type : 'spring' }}
        className={`card  bg-secondary _shadow rounded-3 _popup p-24 position-fixed top-50 start-50 `}
      >
        <motion.i
          className={`bi ${
            popupInfo.success
              ? "bi-check-circle-fill"
              : "bi-exclamation-triangle-fill"
          } text-${popupInfo.success ? "success" : "warning"} _signIcon`}
        ></motion.i>
        <div className="card-body text-light text-center _lead">
          {popupInfo.success ? "Success" : "Warning"}
        </div>
        <div className="card-body text-altlight">
          <h3 className="_body text-center">{popupInfo.popupText}</h3>
        </div>
        <div className="card-footer d-flex justify-content-center  ">
          <ButtonText name="Ok" handleclick={hidePopupInfo} />
        </div>
      </motion.div>
    </>
  );
}
