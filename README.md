# React Device Emulator
A lightweight device emulator for ReactJS web applications. It enables you to visualize websites (using the URL), React components and/or full React apps in mobile and tab devices.

[![npm version](https://badge.fury.io/js/react-device-emulator.svg)](https://badge.fury.io/js/react-device-emulator)
[![Build Status](https://travis-ci.com/TheoOkafor/react-device-emulator.svg?branch=master)](https://travis-ci.com/TheoOkafor/react-device-emulator)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f5e1e4175ae54c391775/test_coverage)](https://codeclimate.com/github/TheoOkafor/react-device-emulator/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/f5e1e4175ae54c391775/maintainability)](https://codeclimate.com/github/TheoOkafor/react-device-emulator/maintainability)


### Installing as a package
`npm install react-device-emulator --save`

### Usage

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import DeviceEmulator from 'react-device-emulator';
import 'react-device-emulator/lib/styles/style.css';

const App = () => {
  return (
    <div>
      <DeviceEmulator type="tab" withDeviceSwitch withRotator>
        <h1>Welcome to React Device Emulator</h1>
      </DeviceEmulator>
      <DeviceEmulator type="mobile" withDeviceSwitch withRotator url="www.worksfair.com">
      <DeviceEmulator type="tab" withoutChrome url="www.worksfair.com">
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
// Remember to include the css in your file

// Using webpack
// import 'react-device-emulator/lib/styles/style.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-device-emulator/styles/style.css" />

```

=====================
#### 1. Mobile device with switch button and rotator
<img width="331" alt="Screenshot 2019-09-26 at 5 47 20 PM" src="https://user-images.githubusercontent.com/31534129/65704651-366f9580-e087-11e9-9320-060483bb7486.png">

#### 2. Tab device with Rotator only.
<img width="493" alt="Screenshot 2019-09-26 at 5 46 43 PM" src="https://user-images.githubusercontent.com/31534129/65704648-366f9580-e087-11e9-8745-550bd80ba59d.png">

#### 3. Tab device without the chrome
<img width="432" alt="Screenshot 2019-09-26 at 5 47 46 PM" src="https://user-images.githubusercontent.com/31534129/65704654-37082c00-e087-11e9-8039-edeea6bd3a07.png">

=====================

| Attributes            | Type          | Default | Description |
| :---------            | :--:          | :-----: | :----------- |
| withoutChrome            | `boolean`     | `false` | removes the device chrome and shows only the frame for the display |
| type            | `string`     | `mobile` | the type of device. It can be `mobile` or `tab` |
| withDeviceSwitch        | `boolean`     | `false` | show device switches for switching between device types |
| withRotator            | `boolean`     | `false` | show the rotate button for rotating the device |
| url            | `string`      | `''` | for specifying the url of the website to be displayed in the emulator |
| isRotated            | `boolean`      | `false` | used to initialize the emulator in a rotated state |
| children            | `object`      | `null` | the children to the emulator component. Typically the app or component you want to show on the emulator |

NB: When both `url` and `children` are provided, `url` will used and `children` ignored.

=====================

### Setting up development environment
- `git clone https://github.com/TheoOkafor/react-device-emulator.git`
- `yarn`
- `yarn start`
- Open `localhost:8080` on your favorite browser

#### Running tests
- `yarn test`

### Raising issues
When raising an issue, please add as much details as possible. Screenshots, video recordings, or anything else that can make it easier to reproduce the bug you are reporting will be appreciated.
You can also suggest the features you want included in the subsequent versions.

### Demo
![react-device-emulator (1)](https://user-images.githubusercontent.com/31534129/65742850-3d7fbd80-e0f2-11e9-8a68-5783a1c3dad7.gif)

