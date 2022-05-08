import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleManageInventory = () => {
    navigate(`/manage-inventory`);
  };
  return (
    <section className="banner">
      <div className="banner-inner container">
        <div className="inner-content-left">
          <p>Welcome to inventory of sports Zone.</p>
          <h1>
            Sports equipments inventory management
            <br /> for <span>Sports Zone</span>.
          </h1>
          <button className="btn btn-lg" onClick={handleManageInventory}>
            Manage Inventories
          </button>
        </div>
        <div className="inner-content-right">
          <div>
            <span>
              <IoCheckmarkOutline className="icon" /> Product Traceabillity
            </span>
            <span>
              <IoCheckmarkOutline className="icon" /> Barcoding & Barcode
              Scanning
            </span>
            <span>
              <IoCheckmarkOutline className="icon" /> Humidity Control
              Environment{" "}
            </span>
            <span>
              <IoCheckmarkOutline className="icon" /> 24/7 Monitoring System
            </span>
            <span>
              <IoCheckmarkOutline className="icon" /> Disaster Recovery Plans
            </span>
            <span>
              <IoCheckmarkOutline className="icon" /> Reverse Logistics
            </span>
            <span>
              <IoCheckmarkOutline className="icon" /> Dedicated Tranport
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
