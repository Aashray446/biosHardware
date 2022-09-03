import React from "react";
import "../../scss/carousel-card.scss";

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content, max, width }) => (
  <div className="card">
    <h2>{title}</h2>
    <p className="p-4">{content}</p>
  </div>
);

export default Card;
