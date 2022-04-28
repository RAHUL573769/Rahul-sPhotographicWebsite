import React, { useEffect, useState } from "react";
import SingleService from "../HomePage/SingleService/SingleService";

import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((info) => setServices(info));
  }, []);
  return (
    <div>
      <div id="services">
        <h1 className="text-center"> My Services</h1>
        <div className="row">
          <div className="service-container">
            {services.map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
