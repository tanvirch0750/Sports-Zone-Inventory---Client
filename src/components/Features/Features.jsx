import React from "react";
import featureImgTwo from "../../images/banner/reserve-equipments.jpg";
import featureImgOne from "../../images/banner/sports-scanning.jpg";
import featureImgThree from "../../images/banner/timely-maintainennce.jpg";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="container feature-inner">
        <div className="heading">
          <p>Our Strength & Commitment</p>
          <h2>Key features of Sports Zone Inventory </h2>
        </div>
        <div className="features-items">
          <div className="feature-item">
            <div className="feature-content-box">
              <h3>Generate customized barcodes</h3>
              <p>
                Sports equipment can comprise of several small items like tennis
                balls and racquets. If not properly tracked, you run the risk of
                losing them due to employee carelessness or theft. This is why
                knowing what is moving in and out of your inventory is critical.
                Efficient barcode can help to resolve this problem. With this
                you can label your product more efficent way.
              </p>

              <p>
                Labeling equipment is very important in ensuring that everything
                is accounted for. Intuitive labels will allow you to streamline
                check-ins and checkouts, trace equipment custody, and easily
                identify cases of equipment misplacement or theft.
              </p>
            </div>
            <div className="feature-img-box">
              <img src={featureImgOne} alt="featuredimage" />
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-img-box">
              <img src={featureImgTwo} alt="featuredimage" />
            </div>
            <div className="feature-content-box">
              <h3>Reserve equipment in advance</h3>
              <p>
                An efficient way to adhere to deadlines is to book all your
                equipment in advance. This helps ensure that there are no
                conflicts at the delivery time. An availability calendar allows
                you to see which goods are taken out for maintenance or are
                temporarily unavailable during a certain time period. While
                making reservations, you can also see alternate options so you
                never have to cancel an sell due to the lack of gear. For that
                we also have excelent warehouse facility.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-content-box">
              <h3>Schedule timely maintenance</h3>
              <p>
                To keep all sports equipment available all the time, it is
                critical to run routine maintenance sessions. Unexpected
                breakdowns can be dangerous and inflict serious damge of your
                business. So we do, scheduling repair and service events for
                each active item, so your equipment is always safe ready to be
                delivered.
              </p>
            </div>
            <div className="feature-img-box">
              <img src={featureImgThree} alt="featuredimage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
