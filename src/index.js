
import React from 'react';
import ReactDOM from 'react-dom';

import './emulator/style.css';
import DeviceEmulator from './emulator';

const App = () => {
  return (
    <div>
      <DeviceEmulator>
        <div>Welcome to React Device Emulator</div>
      </DeviceEmulator>
      <DeviceEmulator url="http://ideosynergy.worksfair.com" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
