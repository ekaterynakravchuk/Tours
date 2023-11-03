import { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour-item">
      <div className="tour-img">
        <img src={image} alt={name} />
      </div>
      <div className="tour-content">
        <h3 className="tour-name">{name}</h3>
        <p className="tour-info">
          {readMore ? info : `${info.substring(0, 200)}...`}
        </p>
        <button type="button" onClick={() => setReadMore(!readMore)}>
          {readMore ? "read less" : "read more"}
        </button>
        <span className="tour-price">${price}</span>
        <button
          className="deleteBtn"
          type="button"
          onClick={() => deleteTour(id)}
        >
          not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
