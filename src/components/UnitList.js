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
          Other Units
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
