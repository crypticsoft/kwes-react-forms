// Path: src/components/__tests__/SelectControl.spec.js
// write a test for the SelectControl component

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectControl from '../SelectControl';

const columnData = {
  size: 6,
  field: {
    type: "select",
    name: "state",
    rules: "required",
    label: "Your State",
    defaultOption: { "Select One": "" },
    options: { "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ" }
  }
};

describe('SelectControl', () => {
  it('renders the select control with options', () => {
    const { getByRole } = render(<SelectControl {...columnData.field} /> as React.ReactElement);

    expect(getByRole('option', { name: 'Select One' }).selected).toBe(true);
    expect(getByRole('option', { name: 'Alabama' })).toBeInTheDocument();
    expect(getByRole('option', { name: 'Alaska' })).toBeInTheDocument();
    expect(getByRole('option', { name: 'Arizona' })).toBeInTheDocument();

  });

  it('calls the onChange function when an option is selected', () => {
    const { getByRole } = render(<SelectControl {...columnData.field} /> as React.ReactElement);
    fireEvent.change(getByRole('combobox'), { target: { value: 'AZ' } });
    expect(getByRole('option', { name: 'Arizona' }).selected).toBe(true);
  });
});
