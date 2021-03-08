import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Frame from 'react-frame-component';

import Button from './Button';
import tabIcon from '../assets/tablet.svg';
import mobileIcon from '../assets/mobile.svg';
import rotateIcon from '../assets/rotate.svg';

const initialContent = `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div class="mount"></div>
  </body>
</html>
`;

const MOBILE = 'mobile';
const TAB = 'tab';

const checkType = (type) => {
  if (type === MOBILE || type === TAB) {
    return type;
  }
  return MOBILE;
};

class Emulator extends Component {
  static propTypes = {
    url: PropTypes.string,
    children: PropTypes.element,
    withoutChrome: PropTypes.bool,
    type: PropTypes.string,
    withDeviceSwitch: PropTypes.bool,
    withRotator: PropTypes.bool,
    isRotated: PropTypes.bool,
  };

  static defaultProps = {
    url: '',
    withoutChrome: false,
    children: null,
    type: MOBILE,
    withDeviceSwitch: true,
    withRotator: true,
    isRotated: false,
  };

  state = {
    withoutChrome: this.props.withoutChrome,
    type: checkType(this.props.type),
    rotate: this.props.isRotated,
  };

  buttonProps = [
    {
      imageClass: '',
      name: MOBILE,
      icon: mobileIcon,
      handleClick: () => this.handleSwitch(MOBILE),
    },
    {
      imageClass: '',
      name: TAB,
      icon: tabIcon,
      handleClick: () => this.handleSwitch(TAB),
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
  };

  rotateFrame = (type, rotate) => {
    if (rotate) {
      return `${type}-frame-rotate`;
    }
    return '';
  };

  renderFrameComponent = ({ children }) => {
    return (
      <div className={this.setChromeClassName()}>
        <Frame
          className={`frame ${this.setFrameClassName()}`}
          initialContent={initialContent}
        >
          {children}
        </Frame>
      </div>
    );
  };

  renderIFrame = ({ url }) => {
    return (
      <div className={this.setChromeClassName()}>
        <iframe src={url} className={`frame ${this.setFrameClassName()}`} />
      </div>
    );
  };

  renderFrames = () => {
    return !this.props.url
      ? this.renderFrameComponent(this.props)
      : this.renderIFrame(this.props);
  };

  handleSwitch = (type) => {
    this.setState({
      type,
    });
  };

  handleRotate = () => {
    this.setState(({ rotate }) => ({ rotate: !rotate }));
  };

  renderSwitchButtons = () => {
    return this.buttonProps.map((item) => {
      return <Button key={item.name} {...item} />;
    });
  };

  renderRotateButton = () => {
    return (
      <Button
        imageClass="rotate"
        name="rotate"
        icon={rotateIcon}
        handleClick={this.handleRotate}
      />
    );
  };

  render() {
    const { withDeviceSwitch, withRotator } = this.props;
    return (
      <div className="device-emulator-container">
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
