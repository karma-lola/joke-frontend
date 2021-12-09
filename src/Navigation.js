import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <header>
        <h1>JOKE APP</h1>
      </header>
      <nav>
        <Link className="navbar" to="/">
          Random
        </Link>
        <Link className="navbar" to="/ByCategory">
          ByCategory
        </Link>
        <Link className="navbar" to="/Popular">
          Popular
        </Link>
        <Link className="navbar" to="/Search">
          Search
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
