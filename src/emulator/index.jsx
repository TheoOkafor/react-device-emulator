import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Frame from 'react-frame-component';

import mobileIcon from '../assets/mobile.svg';
import tabIcon from '../assets/tablet.svg';
import rotateIcon from '../assets/rotate.svg';
import Button from './Button';

const initialContent = `
<!DOCTYPE html>
<html>
  <head>${document.head.innerHTML}</head>
  <body>
    <div class="root"></div>
  </body>
</html>
`;

class Emulator extends Component {
  static propTypes = {
    url: PropTypes.string,
    children: PropTypes.element,
    withoutChrome: PropTypes.bool,
    type: PropTypes.string,
  }

  state = {
    withoutChrome: this.props.withoutChrome,
    type: this.props.type,
  }

  buttonProps = [
    {
      imageClass: '',
      icon: mobileIcon,
      handleClick: () => this.handleSwitch('mobile')
    },
    {
      imageClass: '',
      icon: tabIcon,
      handleClick: () => this.handleSwitch('tab')
    },
  ];

  setChromeClassName = () => {
    let { type } = this.state;
    type = type || 'mobile';
    return `${type}-chrome ${this.state.withoutChrome && 'without-chrome'}`;
  };

  setFrameClassName = () => {
    let { type } = this.state;
    type = type || 'mobile';
    return `${type}-frame`;
  };

  renderFrameComponent = ({ children }) => {
    return (
      <div className={this.setChromeClassName()}>
        <Frame
          className={`frame ${this.setFrameClassName()}`}
          initialContent={initialContent}>
          {children}
        </Frame>
      </div>
    );
  }

  renderIFrame = ({ url }) => {
    return (
      <div className={this.setChromeClassName()}>
        <iframe src={url} className={`frame ${this.setFrameClassName()}`} />
      </div>
    );
  }

  renderFrames = () => {
    return !this.props.url
      ? this.renderFrameComponent(this.props)
      : this.renderIFrame(this.props);
  }

  handleSwitch = (type) => {
    this.setState({
      type,
    });
  }

  renderSwitchButtons = () => {
    return this.buttonProps.map((item) => {
      return (<Button key={item.icon} {...item} />);
    });
  }

  renderRotateButton = () => {
    return (<Button imageClass="rotate" icon={rotateIcon} />);
  }

  render() {
    return (
      <div className="container">
        <div className="button-group">
          {this.renderSwitchButtons()}
          {this.renderRotateButton()}
        </div>
        {this.renderFrames()}
      </div>
    );
  }
}

export default Emulator;
