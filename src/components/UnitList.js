import "./styles/unitList.css";

const UnitList = ({ units }) => {
  return (
    <div className="unitList">
      {units.map((unit) => (
        <p>{JSON.stringify(unit)}</p>
      ))}
    </div>
  );
};

export default UnitList;
