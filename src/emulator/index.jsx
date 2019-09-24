import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Frame from 'react-frame-component';

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
  }

  render() {
    const { url, children } = this.props;

    return (
      !url
        ? <div className="chrome-container without-chrome">
          <Frame
            className="frame"
            initialContent={initialContent}>
            {children}
          </Frame>
        </div>
        : <div className="chrome-container">
          <iframe src={url} className="frame" />
        </div>
    );
  }
}

export default Emulator;
