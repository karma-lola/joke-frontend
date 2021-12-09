import { useState, useEffect } from "react";
import "./ByCategory.css";

const ByCategory = () => {
  const [jokeTags, setJokeTags] = useState([]);
  const [typeJoke, setTypeJoke] = useState("");

  useEffect(() => {
    fetch(`https://joke-backend-karma.herokuapp.com/categories`)
      .then((response) => response.json())
      .then((type) => {
        console.log(type);
        setJokeTags(type);
      })

      .catch((error) => console.log("error", error));
  }, []);

  function click(tag) {
    fetch(
      `https://joke-backend-karma.herokuapp.com/by-category?name=${encodeURIComponent(
        tag
      )}`
    )
      .then((response) => response.json())
      .then((joke) => {
        console.log(joke);
        setTypeJoke(joke);
      })

      .catch((error) => console.log("error", error));
  }

  return (
    <div className="category-wrapper">
      <h2> Jokes Genre </h2>
      <div className="joketags-wrapper">
        {jokeTags.map((tag) => {
          return <button onClick={() => click(tag)}>{tag}</button>;
        })}
      </div>
      <h3>{typeJoke}</h3>
    </div>
  );
};

export default ByCategory;
