import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ imageClass, icon, handleClick }) => {
  return (
    <button className="icon-button" >
      <img src={icon} className={imageClass} onClick={handleClick} />
    </button>
  );
};

Button.propTypes = {
  imageClass: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
