import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(0);
  const setHoverHandler = (value) => {
    setHover(value);
    setStar(value);
  };
  const onMouseEnterHandler = (value) => {
    setHover(value);
  };
  const onMouseLeaveHandler = () => {
    setHover(star);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            className={index <= (hover || star) ? "active" : "inactive"}
            onClick={() => setHoverHandler(index)}
            onMouseEnter={() => onMouseEnterHandler(index)}
            onMouseLeave={() => onMouseLeaveHandler(index)}
            size={50}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
