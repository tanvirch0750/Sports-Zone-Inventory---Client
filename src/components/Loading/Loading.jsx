import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Loading.css";

const Loading = ({ loadData }) => {
  return (
    <div className="loader">
      <ClipLoader color="#64ffda" loading={loadData} size={100} />
    </div>
  );
};

export default Loading;
