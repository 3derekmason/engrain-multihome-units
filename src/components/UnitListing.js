import { useState } from "react";
import "./styles/listing.css";

import UnitCard from "./UnitCard";

const UnitListing = ({ unit }) => {
  const [open, toggleOpen] = useState({ display: "none" });
  const openInfo = () => {
    toggleOpen({ display: "flex" });
  };
  const closeInfo = () => {
    toggleOpen({ display: "none" });
  };
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
