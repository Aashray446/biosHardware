import React, { useState, useEffect } from "react";

const findScreenWidth = (initialWidth = window.innerWidth) => {
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return width;
};

export default findScreenWidth;
