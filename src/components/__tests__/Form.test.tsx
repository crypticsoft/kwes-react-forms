import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
// import { getByRole, fireEvent } from '@testing-library/dom';

// import { jest } from '@jest/globals';
// jest.disableAutomock();

import Form from '../Form.jsx';
import InputControl from '../fields/InputControl.jsx';

// stub out kwesforms
// jest.mock('kwesforms', () => ({
//   init: () => 'You have called a mocked method 1!'
// }));

describe('Matching Snapshot(s)', () => {
  test.skip('renders correctly InputControl component', () => {
    const InputControlComponent = renderer
      .create(
        <InputControl
          {...{
            type: 'text',
            name: 'first_name',
            rules: 'required',
            label: 'First Name'
          }}
        />
      )
      .toJSON();
    expect(InputControlComponent).toMatchSnapshot();
  });
});

describe('When a Form is passed dynamic field(s) data', () => {
  test('renders the InputControl field', () => {
    const { container, getByTestId, getByText, getByLabelText } = render(
      <Form
        id="yourFormKeyGoesHere"
        data={{
          title: 'Welcome!',
          subTitle: 'Please fill out the form below:',

          fields: [
            {
              type: 'text',
              name: 'name',
              rules: 'required',
              label: 'Your Name'
            }
          ]
        }}
      />
    );

    const onSubmitSpy = vi.fn(() => 0);
    const labelElement = getByText(/Your Name/i);
    const inputElement = getByLabelText(/Your Name/i);
    const buttonElement = getByTestId('submit-button');
    const formElement = container.querySelector('form');
    formElement.onsubmit = onSubmitSpy;

    // titles
    expect(getByText(/Welcome!/i)).toBeInTheDocument();
    expect(getByText(/Please fill out the form below:/i)).toBeInTheDocument();

    // label, button
    expect(labelElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');

    // input
    // expect(inputElement).toHaveAttribute('aria-invalid', 'false');
    expect(inputElement).toHaveAttribute('rules', 'required');
    expect(inputElement).toHaveAttribute('type', 'text');

    // form
    expect(formElement).toBeInTheDocument();
    expect(formElement).toHaveAttribute('mode', 'test');
    expect(formElement).toHaveAttribute('novalidate');

    // validate the field
    userEvent.type(inputElement, 'Joe Shmoe');
    expect(inputElement.validity.valid).toBeTruthy();
    // expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  test('renders the SelectControl component', () => {
    const { container, getByLabelText } = render(
      <Form
        id="yourFormKeyGoesHere"
        data={{
          fields: [
            {
              type: 'select',
              name: 'state',
              rules: 'required',
              label: 'Your State',
              defaultOption: { 'Select One': '' },
              options: { Arizona: 'AZ' }
            }
          ]
        }}
      />
    );
    const onSubmitSpy = vi.fn(() => 0);
    
    const formElement = container.querySelector('form');
    formElement.onsubmit = onSubmitSpy;

    const selectElement = getByLabelText(/Your State/i);
    const secondOption = selectElement.options[1];

    expect(selectElement.options.length).toBe(2);
    expect(selectElement.value).toBe('');
    expect(secondOption.value).toBe('AZ');
    expect(secondOption.textContent).toBe('Arizona');
  });

  test('renders multiple field components', () => {
    const { container, getByLabelText } = render(
      <Form
        id="yourFormKeyGoesHere"
        data={{
          fields: [
            {
              type: 'text',
              name: 'first_name',
              rules: 'required',
              label: 'First Name'
            },
            {
              type: 'text',
              name: 'last_name',
              rules: 'required',
              label: 'Last Name'
            }
          ]
        }}
      />
    );
    const onSubmitSpy = vi.fn(() => 0);
    const formElement = container.querySelector('form');
    formElement.onsubmit = onSubmitSpy;

    const firstElement = getByLabelText(/First Name/i);
    const secondElement = getByLabelText(/Last Name/i);

    expect(firstElement).toBeInTheDocument();
    expect(secondElement).toBeInTheDocument();
  });
});
