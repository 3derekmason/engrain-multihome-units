import { useState } from "react";
import "./styles/unitList.css";

import UnitListing from "./UnitListing";

const UnitList = ({ units }) => {
  const areaOfOne = units.filter((unit) => unit.area === 1);
  const areaAboveOne = units.filter((unit) => unit.area > 1);
  const [currentView, toggleView] = useState(areaOfOne);

  return (
    <div className="unitList">
      <div className="filter">
        <button
          disabled={currentView === areaOfOne}
          onClick={() => {
            toggleView(areaOfOne);
          }}
        >
          Area = 1
        </button>
        <button
          disabled={currentView === areaAboveOne}
          onClick={() => {
            toggleView(areaAboveOne);
          }}
        >
          Area > 1
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
