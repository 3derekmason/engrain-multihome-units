import "./styles/modal.css";

const UnitCard = ({ open, close, unit }) => {
  return (
    <div style={open} onClick={close} className="modal">
      <h2>Unit {unit.unit_number}</h2>
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
