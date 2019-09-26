
import React from 'react';
import ReactDOM from 'react-dom';

import './emulator/style.css';
import DeviceEmulator from './emulator';

const App = () => {
  return (
    <div className="house">
      <DeviceEmulator type="mobile" withDeviceSwitch withRotator>
        <div>Welcome to React Device Emulator</div>
      </DeviceEmulator>
      <DeviceEmulator
        url="http://ideosynergy.worksfair.com"
        type="tab"
        withRotator
      />
      <DeviceEmulator type="mobile" withDeviceSwitch>
        <div>Welcome to React Device Emulator</div>
      </DeviceEmulator>
      <DeviceEmulator type="tab" withoutChrome>
        <div>Welcome to React Device Emulator</div>
      </DeviceEmulator>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
