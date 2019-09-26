import Emulator from '../emulator';

describe('Emulator.jsx methods', () => {
  describe('Emulator without chrome', () => {
    const emulator = new Emulator({
      withoutChrome: true,
      withDeviceSwitch: true,
      withRotator: true,
    });
    test('that the set class methods functions as expected', () => {
      const chromeClassName = emulator.setChromeClassName();
      const frameClassName = emulator.setFrameClassName();

      expect(chromeClassName).toEqual('mobile-chrome without-chrome ');
      expect(frameClassName).toEqual('mobile-frame ');
    });
    test('that the set rotate class name works expected', () => {
      const rotateClassName = emulator.rotateChrome(true, 'tab');

      expect(rotateClassName).toEqual('chrome-rotate tab-reposition--without-chrome');
    });
  });
  describe('Emulator with chrome', () => {
    const emulator = new Emulator({
      type: 'tab',
      withDeviceSwitch: true,
      withRotator: true,
    });
    test('that the set class methods functions as expected', () => {
      const chromeClassName = emulator.setChromeClassName();
      const frameClassName = emulator.setFrameClassName();

      expect(chromeClassName).toEqual('tab-chrome  ');
      expect(frameClassName).toEqual('tab-frame ');
    });
    test('that the set rotate class name works expected', () => {
      const rotateClassName = emulator.rotateChrome(true, 'tab');

      expect(rotateClassName).toEqual('chrome-rotate tab-reposition');
    });
  });
});
