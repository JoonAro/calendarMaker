import PropTypes from 'prop-types';

const ButtonComponent = ({ children }) => {

  return (
    <button
      type="submit"
      className="w-36 border border-transparent bg-mainBackground-light p-2 rounded-lg hover:bg-accentColor-light text-fontDark hover:text-white"
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonComponent;