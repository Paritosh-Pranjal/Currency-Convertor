import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Slider from '.';
import { ThemeProvider } from '@emotion/react';
import '@testing-library/jest-dom';

describe('Slider Component', () => {
  it('it should render the Slider component with default values', () => {
    const { container } = render(
        <Slider onChange={() => {}} />
    );
    expect(container).toBeInTheDocument();
  });

  test('it should calls onChange prop correctly', () => {
    const onChangeMock = jest.fn();
    render(
        <Slider onChange={onChangeMock} />
    );
    const sliderElement = screen.getByRole('slider');
    fireEvent.click(sliderElement);
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });
});