import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({ heading = "Rate your experience", color = "gold" }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setRating(0);
    setSubmitted(false);
  };

  return (
    <>
      <div className="rating-container">
        <h2>{heading}</h2>
        <div className="stars">
          {stars.map((star) => (
            <Star
              star={star}
              key={star}
              rating={rating}
              hover={hover}
              hoverState={setHover}
              color={color}
              ratingClick={setRating}
            />
          ))}
        </div>

        {rating > 0 && (
          <p className="feedback">{feedbackMessages[rating - 1]}</p>
        )}

        {/* <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Submit
        </button> */}
        <Button
          className="submit-btn"
          disabled={rating === 0}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>

      <Modal isOpen={submitted} rating={rating} closeModal={closeModal} />
    </>
  );
};

export default Rating;
