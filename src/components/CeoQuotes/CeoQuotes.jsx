import React from "react";
import ceoImg from "../../images/banner/ceo.jpg";
import "./CeoQuotes.css";
const CeoQuotes = () => {
  return (
    <section className="ceo-quotes">
      <div className="container ceo-quotes-inner">
        <div className="heading">
          <p>Thoughts from our ceo</p>
          <h2>What our ceo says</h2>
        </div>
        <div className="quotes-details">
          <figure>
            <blockquote>
              Managing a successful sports business is about how you organize,
              store your equipments. There’s a lot that goes on behind the
              scenes, particularly when it comes to managing equipment. If
              you’re still using antiquated processes to keep track of your
              sports equipment, it’s time to consider moving into the digital
              age with a state-of-the-art system. We are providing you that.
            </blockquote>
            <p>
              <span className="ceo-name">Marc Spector</span>
              <span className="designation">
                CEO - <span>Sports Inventory</span>
              </span>
            </p>
          </figure>
          <div className="img-box">
            <img src={ceoImg} alt="ceo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoQuotes;
