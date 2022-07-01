import "./styles/modal.css";

const UnitCard = ({ open, close, unit }) => {
  const imgSrc =
    unit?.area === 1
      ? "https://source.unsplash.com/FfyzbVvl0tQ"
      : "https://source.unsplash.com/jn7uVeCdf6U";
  return (
    // Began as a modal but transitioned into a "pop in" modal
    <div style={open} onClick={close} className="modal">
      <img src={imgSrc} alt="unit view" height="108" />
      <ul>
        <li>Building Id: {unit.building_id}</li>
        <li>Floor Id: {unit.floor_id}</li>
        <li>Floor Plan Id: {unit.floor_plan_id}</li>
        <li>Map Id: {unit.map_id}</li>
      </ul>
      <ul>
        <li style={{ fontSize: "14px" }}>
          Created:<p> {new Date(unit.created_at).toLocaleDateString()}</p>
        </li>
      </ul>
      <ul>
        <li style={{ fontSize: "14px" }}>
          Last updated:<p> {new Date(unit.updated_at).toLocaleDateString()}</p>
        </li>
      </ul>
    </div>
  );
};
export default UnitCard;
