import React from 'react';

import { FormComponent } from './Form';

const FormExampleArgs = {
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

const meta = {
  component: FormComponent,
  title: 'Form',
};

export default meta;

export const Form = {
  args: {
    ...FormExampleArgs,
  }
};

