import "./styles/modal.css";

const UnitCard = ({ open, close }) => {
  return <div style={open} onClick={close} className="modal"></div>;
};
export default UnitCard;
