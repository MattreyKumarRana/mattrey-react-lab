const Star = ({ star, color, rating, hover, ratingClick, hoverState }) => {
  return (
    <span
      key={star}
      style={{ color: `${star <= (hover || rating) ? color : "#ccc"}` }}
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverState(star)}
      onMouseLeave={() => hoverState(0)}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
