import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await fetch("https://course-api.com/react-tours-project");
      const data = await result.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <section className="tours">
        <h1>no tours left</h1>
        <button type="button" onClick={getData}>
          refresh
        </button>
      </section>
    );
  }
  return (
    <section className="tours">
      <h1>our tours</h1>
      <Tours tours={tours} deleteTour={deleteTour} />
    </section>
  );
}

export default App;
