import React from "react";
import "./ConfirmationBox.css";

const ConfirmationBox = ({ setOpen, setProceed }) => {
  const handleOkay = () => {
    setOpen(false);
    setProceed(true);
  };
  return (
    <div className="cb-background">
      <div className="cb-container">
        <div className="cb-close-btn">
          <button onClick={() => setOpen(false)}>X</button>
        </div>
        <div className="cb-title">
          <h3>Are you sure you want to delete this item?</h3>
        </div>
        <div className="cb-footer">
          <button className="btn btn-sm" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="btn btn-sm" onClick={handleOkay}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
