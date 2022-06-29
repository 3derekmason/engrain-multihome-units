import { useState } from "react";

import Appbar from "./components/Appbar";
import Welcome from "./components/Welcome";
import UnitList from "./components/UnitList";
import "./App.css";

function App() {
  const [units, setUnits] = useState();
  const getUnits = () => {
    fetch("http://localhost:8000/PHP/server.php")
      .then((res) => res.json())
      .then((data) => {
        setUnits(data);
      });
  };
  getUnits();
  return (
    <div className="App">
      <Appbar />
      <Welcome />
      <p className="caption">Browse Family Units:</p>
      <UnitList />
    </div>
  );
}

export default App;
