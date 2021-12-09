import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Random from "./Random";
import ByCategory from "./ByCategory";
import Popular from "./Popular";
import Search from "./Search";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Random />} />
        <Route path="/byCategory" element={<ByCategory />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
