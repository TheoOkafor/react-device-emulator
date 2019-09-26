import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../emulator/Button';

describe('Button.jsx', () => {
  const handleClick = jest.fn();

  test('Button Renders Correctly', () => {
    const component = render(
      <Button
        handleClick={handleClick}
        icon={{}}
        imageClass="has-text-info"
        name="button" />
    );
    expect(component).toMatchSnapshot();
  });
  test('That the click function works as expected', () => {
    const component = render(
      <Button
        handleClick={handleClick}
        icon={{}}
        imageClass="has-text-info"
        name="button" />
    );
    const button = component.getByTestId('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
