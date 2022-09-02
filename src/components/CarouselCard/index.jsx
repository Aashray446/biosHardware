import { useEffect, useState } from "react";
import Card from "./Card";
import Carousel from "./Carousel";

const CarouselCard = ({ contentList, maxVisibility, width }) => {
  const maxFinder = () => {
    let max = 0;
    for (const content of contentList) {
      if (content.content.length > max) {
        max = content.content.length;
      }
    }
    return max;
  };

  const heightHandler = (max, divisor, additional = 0) => {
    return max / divisor + additional + "rem";
  };

  const max = maxFinder();

  const [height, setHeight] = useState(heightHandler(max, 10));
  useEffect(() => {
    if (width < 470) {
      setHeight(heightHandler(max, 6, 5));
      return;
    }
    if (width < 500) setHeight(heightHandler(max, 7));
  }, [width]);

  const widthHandler = () => {
    if (width <= 768) {
      return width / 50 + "rem";
    }
  };

  return (
    <section>
      <div className="">
        <Carousel
          maxVisibility={maxVisibility}
          height={height}
          width={widthHandler()}
        >
          {contentList.map((item) => (
            <Card title={item.title} content={item.content} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselCard;
