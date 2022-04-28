import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Single.css";

const SingleService = ({ service }) => {
  const { id, name, description, price, image } = service; // Using Destructuring

  const navigate = useNavigate();

  const navigateService = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className="image-container">
      <img src={image} alt="" />
      <h1>Name:{name}</h1>
      <p>Price:{price}</p>
      <p> Description:{description}</p>

      <button onClick={() => navigateService(id)} className="btn btn-primary">
        Click Here Only After Login
      </button>
    </div>
  );
};

export default SingleService;
