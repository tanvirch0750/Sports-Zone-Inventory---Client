import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-inner container">
        <p>Welcome to sports inventory.</p>
        <h1>
          Sports equipments inventory management for organized sporting
          business.
        </h1>

        <p className="banner-text">
          We solve your inventory problem best possible way!
        </p>
        <button className="btn btn-lg">Manage Inventory</button>
      </div>
    </section>
  );
};

export default Banner;
