import React from 'react';

import { FormComponent } from './Form';
import { CheckboxComponent } from './CheckboxControl';
import CheckboxGroupControl from '@/components/fields/CheckboxGroupControl.jsx';
import InputControl from '@/components/fields/InputControl.jsx';
import RadioGroupControl from '@/components/fields/RadioGroupControl';
import SelectControl from '@/components/fields/SelectControl';
import { DatePickerControl, DateControl, DateTimePickerControl, FileControl, TelephoneControl, RangeControl, NumberControl } from '@/components/fields';

// import '../assets/css/index.scss';

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
  action: '',
  // handler: (e) => { e.preventDefault(); console.log('Form submitted!') },
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

const CheckboxTemplate = (args) => <CheckboxComponent {...args} />;

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

const DateTimePickerTemplate = (args) => <DateTimePickerControl {...args} />;

export const DateTimePicker = DateTimePickerTemplate.bind({});

DateTimePicker.args = {
  name: 'schedule',
  rules: 'required',
  label: 'Schedule a time:',
  help: '* Required field',
  min: '2023-07-12T00:00',
  max: '2023-12-31T00:00',
};
//

const DatePickerTemplate = (args) => <DatePickerControl {...args} />;

export const DatePicker = DatePickerTemplate.bind({});

DatePicker.args = {
  name: 'schedule',
  rules: 'required',
  label: 'Book a date (renders component when kwesforms is initialized)',
  help: '* Required field',
};
//

const DateControlTemplate = (args) => <DateControl {...args} />;

export const DateControlComponent = DateControlTemplate.bind({});

DateControlComponent.args = {
  name: 'schedule_date',
  rules: 'required',
  label: 'Book a date:',
  help: '* Required field',
};
//

const FileTemplate = (args) => <FileControl {...args} />;

export const FileControlComponent = FileTemplate.bind({});

FileControlComponent.args = {
  name: 'schedule_date',
  rules: 'required',
  label: 'Upload a file',
  help: '* Required field',
};
//

const TelTemplate = (args) => <TelephoneControl {...args} />;

export const TelControlComponent = TelTemplate.bind({});

TelControlComponent.args = {
  name: 'schedule_date',
  rules: 'required',
  label: 'Enter your main phone number here so we can spam it non-stop like a robot does',
  help: 'Format: 123-456-7890',
  pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
  placeholder: '123-456-7890',
};
//

const RangeTemplate = (args) => <RangeControl {...args} />;

export const RangeControlComponent = RangeTemplate.bind({});

RangeControlComponent.args = {
  name: 'range_selection',
  rules: 'required',
  label: 'Range Selector',
  type: 'range',
  min: 0,
  max: 100,
};
//

const NumberTemplate = (args) => <NumberControl {...args} />;

export const NumControlComponent = NumberTemplate.bind({});

NumControlComponent.args = {
  name: 'num_selection',
  rules: 'required',
  label: 'Select a number please',
  min: 0,
  max: 100,
};
//