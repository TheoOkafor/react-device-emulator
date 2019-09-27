
import React from 'react';
import ReactDOM from 'react-dom';

import DeviceEmulator from './emulator';
import './styles/style.css';

const App = () => {
  return (
    <div>
      <DeviceEmulator
        type="tab"
        withDeviceSwitch
        withRotator
        url="http://www.worksfair.com">
        <div>Welcome to React Device Emulator</div>
      </DeviceEmulator>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
