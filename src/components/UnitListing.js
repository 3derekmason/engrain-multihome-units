import "./styles/listing.css";

const UnitListing = ({ unit }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="listing">
      <p className="caption">Unit number:</p>
      <p>{unit.unit_number}</p>
      <p className="caption">Last updated:</p>
      <p>{new Date(unit.updated_at).toLocaleDateString(undefined, options)}</p>
    </div>
  );
};
export default UnitListing;
