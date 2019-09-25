
import React from 'react';
import ReactDOM from 'react-dom';

import './emulator/style.css';
import DeviceEmulator from './emulator';

const App = () => {
  return (
    <div className="house">
      <DeviceEmulator type="mobile">
        <div>Welcome to React Device Emulator</div>
      </DeviceEmulator>
      <DeviceEmulator
        url="http://ideosynergy.worksfair.com"
        type="tab"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
