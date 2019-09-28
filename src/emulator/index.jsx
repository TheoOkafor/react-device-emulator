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

class Emulator extends Component {
  constructor(props) {
    super(props);
    this.renderIFrame = this.renderIFrame.bind(this);
    this.renderFrames = this.renderFrames.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleRotate = this.handleRotate.bind(this);
    this.rotateChrome = this.rotateChrome.bind(this);
    this.setFrameClassName = this.setFrameClassName.bind(this);
    this.setChromeClassName = this.setChromeClassName.bind(this);
    this.renderRotateButton = this.renderRotateButton.bind(this);
    this.renderSwitchButtons = this.renderSwitchButtons.bind(this);
    this.renderFrameComponent = this.renderFrameComponent.bind(this);

    this.state = {
      withoutChrome: this.props.withoutChrome,
      type: this.checkType(this.props.type) || MOBILE,
      rotate: false,
    };

    this.buttonProps = [
      {
        imageClass: '',
        name: MOBILE,
        icon: mobileIcon,
        handleClick: () => this.handleSwitch(MOBILE)
      },
      {
        imageClass: '',
        name: TAB,
        icon: tabIcon,
        handleClick: () => this.handleSwitch(TAB)
      },
    ];
  }

  setChromeClassName() {
    const { type, rotate } = this.state;
    const withoutChromeClass = this.state.withoutChrome ? 'without-chrome' : '';
    const rotateChromeClass = this.rotateChrome(rotate, type) || '';
    return `${type}-chrome ${withoutChromeClass} ${rotateChromeClass}`;
  }

  setFrameClassName() {
    const { type } = this.state;
    const rotateFrameClass = this.rotateFrame(type, this.state.rotate) || '';
    return `${type}-frame ${rotateFrameClass}`;
  }

  checkType(type) {
    if (type === MOBILE || type === TAB) {
      return type;
    }
  }

  rotateChrome(rotate, type) {
    if (rotate) {
      return this.state.withoutChrome
        ? `chrome-rotate ${type}-reposition--without-chrome`
        : `chrome-rotate ${type}-reposition`;
    }
  }

  rotateFrame(type, rotate) {
    if (rotate) {
      return `${type}-frame-rotate`;
    }
  }

  renderFrameComponent({ children }) {
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

  renderIFrame({ url }) {
    return (
      <div className={this.setChromeClassName()}>
        <iframe src={url} className={`frame ${this.setFrameClassName()}`} />
      </div>
    );
  }

  renderFrames() {
    return !this.props.url
      ? this.renderFrameComponent(this.props)
      : this.renderIFrame(this.props);
  }

  handleSwitch(type) {
    this.setState({
      type,
    });
  }

  handleRotate() {
    this.setState({
      rotate: !this.state.rotate,
    });
  }

  renderSwitchButtons() {
    return this.buttonProps.map((item) => {
      return (<Button key={item.name} {...item} />);
    });
  }

  renderRotateButton() {
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

Emulator.propTypes = {
  url: PropTypes.string,
  children: PropTypes.element,
  withoutChrome: PropTypes.bool,
  type: PropTypes.string,
  withDeviceSwitch: PropTypes.bool,
  withRotator: PropTypes.bool,
};

export default Emulator;
