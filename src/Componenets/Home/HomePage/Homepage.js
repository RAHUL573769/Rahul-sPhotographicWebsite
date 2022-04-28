import React from "react";
import Me from "../../AboutMe/Me";
import Banner from "../Banner/Banner";
import Services from "../ServicesFolder/Services";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>

      <Services></Services>
      <Me></Me>
    </div>
  );
};

export default Homepage;
