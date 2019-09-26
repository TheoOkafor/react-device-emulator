import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
  handleClickEvent = (event) => {
    event.preventDefault();
    this.props.handleClick();
  };

  render() {
    const { imageClass, icon } = this.props;

    return (
      <button className="icon-button" onClick={this.handleClickEvent}>
        <img src={icon} className={imageClass}/>
      </button>
    );
  }
}

Button.propTypes = {
  imageClass: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
