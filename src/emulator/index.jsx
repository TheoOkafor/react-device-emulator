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
    withDeviceSwitch: PropTypes.bool,
    withRotator: PropTypes.bool,
  }

  state = {
    withoutChrome: this.props.withoutChrome,
    type: this.props.type || 'mobile',
    rotate: false,
  }

  buttonProps = [
    {
      imageClass: '',
      name: 'mobile',
      icon: mobileIcon,
      handleClick: () => this.handleSwitch('mobile')
    },
    {
      imageClass: '',
      name: 'tab',
      icon: tabIcon,
      handleClick: () => this.handleSwitch('tab')
    },
  ];

  setChromeClassName = () => {
    const { type, rotate } = this.state;
    const withoutChromeClass = this.state.withoutChrome ? 'without-chrome' : '';
    const rotateChromeClass = this.rotateChrome(rotate, type) || '';
    return `${type}-chrome ${withoutChromeClass} ${rotateChromeClass}`;
  };

  setFrameClassName = () => {
    const { type } = this.state;
    const rotateFrameClass = this.rotateFrame(type, this.state.rotate) || '';
    return `${type}-frame ${rotateFrameClass}`;
  };

  rotateChrome = (rotate, type) => {
    if (rotate) {
      return this.state.withoutChrome
        ? `chrome-rotate ${type}-reposition--without-chrome`
        : `chrome-rotate ${type}-reposition`;
    }
  }

  rotateFrame = (type, rotate) => {
    if (rotate) {
      return `${type}-frame-rotate`;
    }
  }

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

  handleRotate = () => {
    this.setState({
      rotate: !this.state.rotate,
    });
  }

  renderSwitchButtons = () => {
    return this.buttonProps.map((item) => {
      return (<Button key={item.name} {...item} />);
    });
  }

  renderRotateButton = () => {
    return (<Button
      imageClass="rotate"
      name="rotate"
      icon={rotateIcon}
      handleClick={this.handleRotate}
    />);
  }

  render() {
    const { withDeviceSwitch, withRotator } = this.props;
    return (
      <div className="container">
        <div className="button-group">
          {withDeviceSwitch && this.renderSwitchButtons()}
          {withRotator && this.renderRotateButton()}
        </div>
        {this.renderFrames()}
      </div>
    );
  }
}

export default Emulator;
