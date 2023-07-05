// import React from 'react';

import { FormComponent } from './Form';
import { CheckboxControlComponent } from './CheckboxControl';
import CheckboxGroupControl from '../components/CheckboxGroupControl.jsx';
import InputControl from '../components/InputControl.jsx';
import RadioGroupControl from '../components/RadioGroupControl';
import SelectControl from '../components/SelectControl';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Form',
  component: FormComponent
  // subcomponents: { CheckboxControlComponent, CheckboxGroupControl }
};

const Template = (args) => <FormComponent {...args} />;

export const FormExample = Template.bind({});
FormExample.args = {
  id: 'SWXrdEPodyOKj9vXYmwU',
  data: {
    id: 'SWXrdEPodyOKj9vXYmwU',
    title: 'Welcome!',
    subTitle: 'Please fill out the form below:',
    disclaimer:
      'When you agree to these terms, you agree to allow us to contact you via email.',
    fields: [
      {
        group: [
          {
            size: 6,
            field: {
              type: 'text',
              name: 'first_name',
              rules: 'required',
              label: 'First Name'
            }
          },
          {
            size: 6,
            field: {
              type: 'text',
              name: 'last_name',
              rules: 'required',
              label: 'Last Name'
            }
          }
        ]
      },
      {
        type: 'email',
        name: 'email',
        rules: 'required',
        label: 'Email'
      },
      {
        group: [
          {
            size: 6,
            field: {
              type: 'text',
              name: 'city',
              rules: 'required',
              label: 'Your City'
            }
          },
          {
            size: 6,
            field: {
              type: 'select',
              name: 'state',
              rules: 'required',
              label: 'Your State',
              defaultOption: { 'Select One': '' },
              options: { Arizona: 'AZ' }
            }
          }
        ]
      },
      {
        type: 'checkbox',
        name: 'terms',
        rules: 'accepted',
        label: 'I agree to the terms and conditions.'
      }
    ]
  }
};
//

const CheckboxTemplate = (args) => <CheckboxControlComponent {...args} />;

export const Checkbox = CheckboxTemplate.bind({});
Checkbox.title = 'Example/Form/Fields/Checkbox';

Checkbox.args = {
  type: 'checkbox',
  name: 'terms',
  rules: 'accepted',
  label: 'I agree to the terms and conditions.'
};

//
const CheckboxGroupTemplate = (args) => <CheckboxGroupControl {...args} />;

export const CheckboxGroup = CheckboxGroupTemplate.bind({});

// _control.storyName = 'Checkbox Group';
CheckboxGroup.args = {
  type: 'checkboxGroup',
  name: 'terms',
  rules: 'accepted',
  label: 'Pick a favorite fruit:',
  help: '* Required field',
  options: { Apple: 'Apple', Banana: 'Banana', Grape: 'Grape' }
};

//

const InputTemplate = (args) => <InputControl {...args} />;

export const Input = InputTemplate.bind({});

// _control.storyName = 'Checkbox Group';
Input.args = {
  type: 'text',
  name: 'favorite',
  rules: 'accepted',
  label: 'Tells us your favorite fruit:',
  help: '* Required field'
};
//

const RadioGroupTemplate = (args) => <RadioGroupControl {...args} />;

export const RadioGroup = RadioGroupTemplate.bind({});

// _control.storyName = 'Checkbox Group';
RadioGroup.args = {
  type: 'radioGroup',
  name: 'terms',
  rules: 'accepted',
  label: 'Pick a favorite fruit:',
  help: '* Required field',
  options: { Apple: 'Apple', Banana: 'Banana', Grape: 'Grape' }
};
//

const SelectTemplate = (args) => <SelectControl {...args} />;

export const Select = SelectTemplate.bind({});

// _control.storyName = 'Checkbox Group';
Select.args = {
  type: 'select',
  name: 'terms',
  rules: 'accepted',
  label: 'Pick a favorite fruit:',
  help: '* Required field',
  options: { Apple: 'Apple', Banana: 'Banana', Grape: 'Grape' }
};
//
