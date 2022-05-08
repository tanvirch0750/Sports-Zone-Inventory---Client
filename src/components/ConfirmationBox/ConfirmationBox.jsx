import React from "react";
import "./ConfirmationBox.css";

const ConfirmationBox = ({
  setOpen,
  deleteFunction,
  delivered,
  stockOut,
  confirmation,
  addSuccess,
  deliveredMessage,
}) => {
  const handleCancel = () => {
    setOpen(false);
  };
  const handleOkay = () => {
    setOpen(false);
  };
  const handleContinue = () => {
    setOpen(false);
    deleteFunction();
  };
  return (
    <div className="cb-background">
      <div className="cb-container">
        {/* <div className="cb-close-btn">
          <button onClick={() => setOpen(false)}>X</button>
        </div> */}
        {delivered && (
          <div className="cb-title">
            <h3>
              {deliveredMessage
                ? "Item restock successfully"
                : "Your Item Delivered Successfully"}
            </h3>
          </div>
        )}
        {stockOut && (
          <div className="cb-title">
            <h3>
              You delivered your last stock item. For delivered again please
              restore item.
            </h3>
          </div>
        )}

        {addSuccess && (
          <div className="cb-title">
            <h3>Inventory Item added successfully.</h3>
          </div>
        )}
        {confirmation && (
          <div className="cb-title">
            <h3>Are you sure you want to delete this item?</h3>
          </div>
        )}
        {delivered && (
          <div className="cb-footer">
            <button className="btn btn-sm" onClick={handleOkay}>
              Okay
            </button>
          </div>
        )}
        {stockOut && (
          <div className="cb-footer">
            <button className="btn btn-sm" onClick={handleOkay}>
              Okay
            </button>
          </div>
        )}

        {addSuccess && (
          <div className="cb-footer">
            <button className="btn btn-sm" onClick={handleOkay}>
              Okay
            </button>
          </div>
        )}
        {confirmation && (
          <div className="cb-footer">
            <button className="btn btn-sm" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn btn-sm" onClick={handleContinue}>
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationBox;
