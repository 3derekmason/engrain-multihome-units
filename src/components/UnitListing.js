import { useState } from "react";

import UnitCard from "./UnitCard";

import "./styles/listing.css";

const UnitListing = ({ unit }) => {
  // Display or don't display additional info for listing
  const [open, toggleOpen] = useState({ display: "none" });
  const openInfo = () => {
    toggleOpen({ display: "flex" });
  };
  const closeInfo = () => {
    toggleOpen({ display: "none" });
  };

  // Set options for date string params
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <div
        className="listing"
        onClick={() => {
          return JSON.stringify(open) === JSON.stringify({ display: "none" })
            ? openInfo()
            : closeInfo();
        }}
      >
        <p className="caption">Unit number:</p>
        <p>{unit.unit_number}</p>
        <p>{unit.area} sqFt</p>
        <p className="caption">Last updated:</p>
        <p>
          {new Date(unit.updated_at).toLocaleDateString(undefined, options)}
        </p>
      </div>
      <UnitCard open={open} close={closeInfo} unit={unit} />
    </>
  );
};
export default UnitListing;
