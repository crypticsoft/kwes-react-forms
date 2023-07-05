// write a unit test for the CheckboxGroupControl component

import React from 'react';
import { render } from '@testing-library/react';
import CheckboxControl from '../CheckboxControl';

describe('CheckboxControl', () => {
  it('renders the checkbox control with label', () => {
    const { getByLabelText } = render(
      <CheckboxControl
        label="Check this box"
        name="checkbox"
        checked={false}
        // onChange={() => {}}
      />
    );

    const checkboxControl = getByLabelText('Check this box');
    expect(checkboxControl).toBeInTheDocument();
  });

});
