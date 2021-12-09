import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchJoke, setSearchJoke] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function submit(e) {
    e.preventDefault();
    fetch(
      `https://joke-backend-karma.herokuapp.com/search?text=${encodeURIComponent(
        searchInput
      )}`
    )
      .then((response) => response.json())
      .then((joke) => {
        console.log(joke);
        setSearchJoke(joke);
      })

      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      <form onSubmit={submit}>
        <h2>Search Jokes</h2>
        <label>Search:</label>
        <input
          type="text"
          placeholder="search jokes"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
      <div>
        {searchJoke.map((joke) => {
          return <h2>{joke}</h2>;
        })}
      </div>
    </div>
  );
};

export default Search;
