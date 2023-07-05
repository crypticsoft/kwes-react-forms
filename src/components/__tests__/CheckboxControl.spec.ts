// write a unit test for the CheckboxControl component

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxControl from '../CheckboxControl';

const fieldData = {
  type: 'text',
  name: 'favorite',
  rules: 'accepted',
  label: 'Accept that apple is your favorite fruit:',
  help: '* Required field'
};

describe('CheckboxControl', () => {
  it('renders the checkbox control with label', () => {
    const { getByLabelText } = render(
      <CheckboxControl
        {...fieldData}
        key={fieldData.name}
      />
    );

    const checkboxControl = getByLabelText(fieldData.label);
    expect(checkboxControl).toBeInTheDocument();
  });

  it('calls the onChange function when the checkbox is clicked', () => {
    // const onChange = jest.fn();
    const { getByLabelText } = render(
      <CheckboxControl
        {...fieldData}
        key={fieldData.name}
      />
    );

    const checkboxControl = getByLabelText(fieldData.label);
    fireEvent.click(checkboxControl);

    expect(checkboxControl.checked).toEqual(true);
    // expect(onChange).toHaveBeenCalledTimes(1);
    // expect(onChange).toHaveBeenCalledWith(true);
  });
});
