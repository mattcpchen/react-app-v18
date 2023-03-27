import React from 'react';
import Component_01 from './Component_01';
import { render } from '@testing-library/react';

describe('App', () => {
  test('getByText', () => {
    const { getByText } = render(<Component_01 />);
    expect(getByText("Import CSS Module")).toBeTruthy();
    expect(getByText("css-module")).toBeTruthy();
    expect(getByText("styled-components")).toBeTruthy();
  })
});