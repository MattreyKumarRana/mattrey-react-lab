import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating-container">
      <h2>Rate your experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => {
              console.log("mouseenter on star:", star);
              setHover(star);
            }}
            onMouseLeave={() => {
              console.log("mouseleave");
              setHover(0);
            }}
            className="star"
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
