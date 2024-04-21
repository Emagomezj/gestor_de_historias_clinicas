import { PropTypes } from "prop-types";

const AlertMiniature = ({ alert }) => {
  const color = () => {
    if (alert.priority === 1) {
      return "red";
    } else if (alert.priority === 2) {
      return "yellow";
    } else {
      return "green";
    }
  };
  const alertColor = color();
  const textStyle = {
    color: alertColor,
  };
  return <p style={textStyle}>{alert.preview}</p>;
};

AlertMiniature.propTypes = {
  alert: PropTypes.object.isRequired,
};

export default AlertMiniature;
