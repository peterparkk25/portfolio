import React from "react";
import "./services.css";
import Services_Data from "./services_data";

function Services() {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src="" alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src="" alt=""></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
