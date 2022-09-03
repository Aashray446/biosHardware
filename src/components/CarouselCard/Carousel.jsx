import React, { useState } from "react";
import "../../scss/carousel-card.scss";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";

const Carousel = ({ children, maxVisibility = 3, height, width }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  const heightWidth = {
    height: height,
    width: width,
  };

  return (
    <div className="carousel" style={heightWidth}>
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= maxVisibility ? "0" : "1",
            display: Math.abs(active - i) > maxVisibility ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export default Carousel;
