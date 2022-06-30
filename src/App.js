import { useState } from "react";

import Appbar from "./components/Appbar";
import Loading from "./components/Loading";
import UnitList from "./components/UnitList";
import Welcome from "./components/Welcome";

import "./App.css";

function App() {
  // Fetch units from api endpoint and set to global app state
  const [units, setUnits] = useState();
  const getUnits = () => {
    fetch("http://localhost:8000/PHP/server.php")
      .then((res) => res.json())
      .then((data) => {
        setUnits(data);
      });
  };
  getUnits();
  return units ? (
    <main>
      <div className="App">
        <Appbar />
        <Welcome />
        <p className="caption">Browse Multi-family Units:</p>
        <UnitList units={units.data} />
      </div>
    </main>
  ) : (
    // Display loading message until fetch is complete
    <main>
      <Appbar />
      <Welcome />
      <Loading />
    </main>
  );
}

export default App;
