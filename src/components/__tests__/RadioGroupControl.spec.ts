// write a unit test for the RadioGroupControl component

import React from 'react';
import { render } from '@testing-library/react';
import RadioGroupControl from '../RadioGroupControl';

const field = {
  type: 'radioGroup',
  name: 'terms',
  rules: 'accepted',
  label: 'Pick a favorite fruit:',
  help: '* Required field',
  options: { Apple: 'Apple', Banana: 'Banana', Grape: 'Grape' }
};

describe('RadioGroupControl', () => {
  it('renders the radio group control with options', () => {
    const { getByLabelText } = render(
      <RadioGroupControl
        {...field}
        key={field.name}
      />
    );
    expect(getByLabelText('Apple')).toBeInTheDocument();
    expect(getByLabelText('Banana')).toBeInTheDocument();
    expect(getByLabelText('Grape')).toBeInTheDocument();
  });

});
