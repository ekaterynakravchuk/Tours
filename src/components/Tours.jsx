import Tour from "./Tour";

const Tours = ({ tours, deleteTour }) => {
  return (
    <div className="tour-list">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
      })}
    </div>
  );
};

export default Tours;
