import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Emulator from '../emulator';

describe('Emulator.jsx', () => {
  test('Emulator Renders Correctly without chrome and all buttons', () => {
    const component = render(
      <Emulator
        withoutChrome
        withDeviceSwitch
        withRotator />
    );
    expect(component).toMatchSnapshot();
  });
  test('Emulator Renders Correctly with chrome and all buttons', () => {
    const component = render(
      <Emulator
        type="mobile"
        withDeviceSwitch
        withRotator />
    );
    expect(component).toMatchSnapshot();
  });
  test('Emulator Renders Correctly with chrome and only switch buttons', () => {
    const component = render(
      <Emulator
        withDeviceSwitch
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('Emulator Renders iFrame with url correctly with chrome and only switch buttons', () => {
    const component = render(
      <Emulator
        url="http://www.google.com"
        type="tab"
        withDeviceSwitch
        withRotator
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('that emulator switch buttons function', () => {
    const { getByTestId } = render(
      <Emulator
        withDeviceSwitch
        withRotator />
    );
    const switchToTabButton = getByTestId('tab');
    const switchToMobileButton = getByTestId('mobile');
    fireEvent.click(switchToTabButton);
    fireEvent.click(switchToMobileButton);
  });
  test('that emulator rotate button functions', () => {
    const { getByTestId } = render(
      <Emulator
        withDeviceSwitch
        withRotator />
    );
    const rotateButton = getByTestId('rotate');
    fireEvent.click(rotateButton);
  });
  test('that emulator rotate button functions for without chrome ', () => {
    const { getByTestId } = render(
      <Emulator
        withoutChrome
        withRotator />
    );
    const rotateButton = getByTestId('rotate');
    fireEvent.click(rotateButton);
  });
});
