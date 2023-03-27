import React from 'react';
import Component_02 from './Component_02';
import { render, fireEvent, act, waitFor, waitForNextUpdate } from '@testing-library/react';

describe('App', () => {
  test('getByText', () => {
    const { getByText, debug } = render(<Component_02 />);
    expect(getByText('This is COMPONENT 02')).toBeTruthy();
  });
  test('getByText', async () => {
    const { getByTestId, queryByTestId, debug } = render(<Component_02 />);
    expect(getByTestId(`SVG_IMG_0`)).toBeTruthy();
    const svgImage = getByTestId(`SVG_IMG_0`);

    // click one
    let svgBtn0, svgBtn1, svgBtn2, svgBtn3;
    fireEvent.click(svgImage);
    svgBtn0 = await queryByTestId(`SVG_IMG_0`);
    svgBtn1 = await queryByTestId(`SVG_IMG_1`);
    svgBtn2 = await queryByTestId(`SVG_IMG_2`);
    svgBtn3 = await queryByTestId(`SVG_IMG_3`);
    expect(svgBtn0).toBeNull();
    expect(svgBtn1).not.toBeNull();
    expect(svgBtn2).toBeNull();
    expect(svgBtn3).toBeNull();

    // click again
    fireEvent.click(svgImage);
    svgBtn0 = await queryByTestId(`SVG_IMG_0`);
    svgBtn1 = await queryByTestId(`SVG_IMG_1`);
    svgBtn2 = await queryByTestId(`SVG_IMG_2`);
    svgBtn3 = await queryByTestId(`SVG_IMG_3`);
    expect(svgBtn0).toBeNull();
    expect(svgBtn1).toBeNull();
    expect(svgBtn2).not.toBeNull();
    expect(svgBtn3).toBeNull();

    // click again && again
    fireEvent.click(svgImage);
    fireEvent.click(svgImage);
    svgBtn0 = await queryByTestId(`SVG_IMG_0`);
    svgBtn1 = await queryByTestId(`SVG_IMG_1`);
    svgBtn2 = await queryByTestId(`SVG_IMG_2`);
    svgBtn3 = await queryByTestId(`SVG_IMG_3`);
    expect(svgBtn0).not.toBeNull();
    expect(svgBtn1).toBeNull();
    expect(svgBtn2).toBeNull();
    expect(svgBtn3).toBeNull();
  });
});