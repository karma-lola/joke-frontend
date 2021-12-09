import { useState, useEffect } from "react";
const Popular = () => {
  const [popularJoke, setPopularJoke] = useState([]);

  useEffect(() => {
    fetch("https://joke-backend-karma.herokuapp.com/popular")
      .then((response) => response.json())
      .then((joke) => {
        console.log(joke);
        setPopularJoke(joke);
      })

      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <h2>Popular Jokes </h2>
      <div className="popular-wrapper">
        {popularJoke.map((joke)=>{
        return(
          <h2>{joke}</h2>
        )})}
      </div>
    </div>
  );
};

export default Popular;
