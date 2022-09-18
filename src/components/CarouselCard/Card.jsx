import React from "react";
import "../../scss/carousel-card.scss";


const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p className="p-2 text-lg">{content}</p>
  </div>
);

export default Card;
