import React from 'react';

export interface DeviceEmulatorProps {
    withDeviceSwitch?: boolean;
    withRotator?: boolean;
    isRotated?: boolean;
    url?: string;
}

declare const DeviceEmulator: React.FC<React.PropsWithChildren<DeviceEmulatorProps>>

export default DeviceEmulator
