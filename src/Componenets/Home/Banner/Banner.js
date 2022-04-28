import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../../Images/banner-1.jpg";
import image2 from "../../../Images/banner-2.jpg";
import image3 from "../../../Images/banner-3.jpg";
import image4 from "../../../Images/banner-4.jpg";
import image5 from "../../../Images/banner-5.jpg";
import image6 from "../../../Images/banner-6.jpg";
import image7 from "../../../Images/banner-7.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <h1 className="text-center text-primary">My Sample Photographs</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 " src={image1} alt="noimage" />
          <Carousel.Caption>
            <h3>First Photography</h3>
            <p>This is My Photography 1.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={image7} alt="noimage" />

          <Carousel.Caption>
            <h3>Second Photography</h3>
            <p>This is My Photography 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={image2} alt="noimage" />

          <Carousel.Caption>
            <h3>Third Photography</h3>
            <p>This is My Photography 3</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>4th Photography</h3>
            <p>This is My Photography 4</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={image4} alt="Third slide" />

          <Carousel.Caption>
            <h3>5th Photographt</h3>
            <p>This is My Photography 5.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={image5} alt="Third slide" />

          <Carousel.Caption>
            <h3>6th Photography</h3>
            <p>This is My Photography 6</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={image6} alt="Third slide" />

          <Carousel.Caption>
            <h3>Seventh Photography</h3>
            <p>This is My Photography 7</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
