import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./IPhone13ProMax4.css";
const IPhone13ProMax4 = () => {
  const navigate = useNavigate();

  const onBackToHome1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="iphone-13-pro-max-4">
      <b className="your-reservation-id">Your Reservation ID</b>
      <b className="reservation-complete">Reservation Complete!</b>
      <div className="a89692001">A89692001</div>
      <div className="we-will-notify">
        We will notify you two days in advance.
      </div>
      <b className="for-more-information">{`For more information : `}</b>
      <div className="little-lemongmailcom">little-lemon@gmail.com</div>
      <div className="xxx-xxxx">(310) XXX XXXX</div>
      <div className="hope-to-see">Hope to see you soon !</div>
      <div className="back-to-home" onClick={onBackToHome1Click}>
        <div className="back-to-home1">Back to Home</div>
      </div>
      <img
        className="iphone-13-pro-max-4-child"
        alt=""
        src="/ellipse-14@2x.png"
      />
      <img
        className="iphone-13-pro-max-4-item"
        alt=""
        src="/ellipse-15@2x.png"
      />
      <img className="logo-icon" alt="" src="/logo@2x.png" />
      <div className="iphone-13-pro-max-4-inner" />
    </div>
  );
};

export default IPhone13ProMax4;
