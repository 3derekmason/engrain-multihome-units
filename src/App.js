import { useState } from "react";

import logo from "./logo.svg";
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
  console.log(units);
  return (
    <div className="App">
      <p>{JSON.stringify(units.data)}</p>
    </div>
  );
}

export default App;
