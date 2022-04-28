import React from "react";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <section className="section footer bg-dark text-white my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6>My Information</h6>
            <hr />
            <p>
              I am a Professional Photographer.I take photographs.My Hobby is
              Photography.
            </p>
          </div>

          <div className="col-md-6">
            <h6>Contact Information</h6>
            <div className="text-white mb-1">
              #45,Dhanmondhi Road,Dhaka,Bangladesh
            </div>
            <div className="text-white mb-1">+9123242422</div>
            <div className="text-white mb-1">+880163732838</div>
            <div className="text-white mb-1">email@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footers;
