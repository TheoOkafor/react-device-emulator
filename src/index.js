import React from 'react';
import { createRoot } from 'react-dom/client';

import DeviceEmulator from '../index';
import '../lib/styles/style.css';

const App = () => {
  return (
    <div>
      <DeviceEmulator
        withDeviceSwitch
        withRotator
        isRotated
        url="http://www.worksfair.com"
      >
        <div>Welcome to React Device Emulator</div>
      </DeviceEmulator>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
