import React from "react";
import "./Social.css";

const Social = ({ text }) => {
  return (
    <div className="social">
      <div className="or-separator">
        <div></div>
        <span>or</span>
        <div></div>
      </div>
      <button className="btn social-btn">{text} with Google</button>
    </div>
  );
};

export default Social;
