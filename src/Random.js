import { useState, useEffect } from "react";
import "./Random.css";

const Random = () => {
  const [randomJoke, setRandomJoke] = useState([]);

  useEffect(() => {
    fetch("https://joke-backend-karma.herokuapp.com/random")
      .then((response) => response.json())
      .then((joke) => {
        console.log(joke);
        setRandomJoke(joke);
      })

      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="random-box">
      <h2>Random Jokes </h2>
      <div className="random-wrapper">
        <h3>{randomJoke}</h3>
      </div>
    </div>
  );
};

export default Random;
