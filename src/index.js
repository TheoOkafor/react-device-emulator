
import React from 'react';
import ReactDOM from 'react-dom';

import DeviceEmulator from '../index';
import '../lib/styles/style.css';

const App = () => {
  return (
    <div>
      <DeviceEmulator
        withDeviceSwitch
        withRotator
        url="http://www.worksfair.com">
        <div>Welcome to React Device Emulator</div>
      </DeviceEmulator>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
