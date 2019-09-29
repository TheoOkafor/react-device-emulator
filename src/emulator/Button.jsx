import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
  static propTypes = {
    imageClass: PropTypes.string,
    icon: PropTypes.string,
    handleClick: PropTypes.func,
    name: PropTypes.string,
  }

  handleClickEvent = (event) => {
    event.preventDefault();
    this.props.handleClick();
  }

  render() {
    const { imageClass, icon, name } = this.props;

    return (
      <button
        data-testid={name}
        className="icon-button"
        onClick={this.handleClickEvent}>
        <img src={icon} className={imageClass}/>
      </button>
    );
  }
}

export default Button;
