import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchJoke, setSearchJoke] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [noJokes, setNoJokes] = useState(false);

  function submit(e) {
    e.preventDefault();
    setNoJokes(true);
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
      <h2>Search Jokes</h2>
      <form className="search-box" onSubmit={submit}>
        <label>Search:</label>
        <input
          type="text"
          placeholder="search jokes"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>

      <div className="search-joke">
        {searchJoke.length === 0 && noJokes ? (
          <h3>
            No Jokes with this <span>{searchInput}</span>
          </h3>
        ) : (
          searchJoke.map((joke) => {
            return <h3>{joke}</h3>;
          })
        )}
      </div>
    </div>
  );
};

export default Search;
