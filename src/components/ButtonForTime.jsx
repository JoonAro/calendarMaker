import PropTypes from 'prop-types';

const ButtonForTime = ({ children, handleDatePick }) => {

  return (
    <button onClick={handleDatePick}
      type="submit"
      className="w-36 border border-transparent bg-mainBackground-light p-2 rounded-lg hover:bg-accentColor-light text-fontDark hover:text-white"
      style={{ marginBottom: "unset" }}>
      {children}
    </button>
  );
};

ButtonForTime.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonForTime;