import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-inner container">
        <p>
          Welcome to sports inventory. We tackle your sports equipments
          inventory problem best possible way!
        </p>
        <h1>
          Sports equipments inventory management for organized sporting
          business.
        </h1>
        <button className="btn btn-lg">Manage Inventory</button>
      </div>
    </section>
  );
};

export default Banner;
