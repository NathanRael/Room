import { ButtonText } from "./Buttons";
import '../Popup.css';
export default function InfoPopup({text, success = true, isPopupVisible, setIsPopupIsVisible}) {
  document.body.style.overflow = !isPopupVisible ? 'auto' : 'hidden';
  return (
    <>
      <div className={`_fade ${isPopupVisible ? '_popupVisible' : ''}`}></div>
      <div className={`card bg-tertiary _shadow rounded-3 _popup p-24 ${isPopupVisible ? '_popupVisible' : ''}`}>
          <i className={`bi ${  success ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} text-${success ? 'success' : 'warning'} _signIcon`}></i>
        <div className="card-body text-light text-center _lead">{success ? 'Success' : 'Warning' }</div>  
        <div className="card-body text-altlight">
            <h3 className="_body text-center">
                {text}
            </h3>
        </div>
        <div className="card-footer d-flex justify-content-center  ">
            <ButtonText
             name="Ok"
             handleclick={setIsPopupIsVisible}
            />
        </div>
      </div>
    </>
  );
}
