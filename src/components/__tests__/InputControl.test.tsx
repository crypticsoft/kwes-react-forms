import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputControl from '../fields/InputControl';

// stub out kwesforms
// jest.mock('kwesforms', () => ({
//   init: () => 'You have called a mocked method 1!'
// }));

describe('When an InputControl is passed field data', () => {
  test('renders the InputControl field', () => {
    const field = {
      type: 'text',
      name: 'name',
      rules: 'required',
      label: 'Your Name',
      placeholder: 'Enter your full name'
    };

    const { getByTestId } = render(<InputControl {...field} key={field.name} />);

    // const inputElement = getByLabelText(/Your Name/i);
    const inputElement = getByTestId(`${field.name}-input`);

    // input
    // expect(inputElement).toHaveAttribute('aria-invalid');
    // expect(inputElement).toHaveAttribute('aria-describedby');
    expect(inputElement).toHaveAttribute('rules', 'required');
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('placeholder', 'Enter your full name');

    // validate the field - submit the form
    userEvent.type(inputElement, 'Joe Shmoe');
    expect(inputElement.validity.valid).toBeTruthy();
  });
});
