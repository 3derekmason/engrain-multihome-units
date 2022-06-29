import { useState } from "react";

import UnitListing from "./UnitListing";

import "./styles/unitList.css";

const UnitList = ({ units }) => {
  // Filter units by area
  const areaOfOne = units.filter((unit) => unit.area === 1);
  const areaAboveOne = units.filter((unit) => unit.area > 1);
  const [currentView, toggleView] = useState(areaOfOne);

  return (
    <div className="unitList">
      <div className="filter">
        <p>Click any listing to view more details</p>
        <button
          disabled={JSON.stringify(currentView) === JSON.stringify(areaOfOne)}
          onClick={() => {
            toggleView(areaOfOne);
          }}
        >
          Tiny Units
        </button>
        <button
          disabled={
            JSON.stringify(currentView) === JSON.stringify(areaAboveOne)
          }
          onClick={() => {
            toggleView(areaAboveOne);
          }}
        >
          Larger Units
        </button>
      </div>
      <div className="unitContainer">
        {currentView.map((unit, i) => (
          <UnitListing key={i} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default UnitList;
