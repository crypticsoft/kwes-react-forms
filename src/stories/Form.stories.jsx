import kwesforms from 'kwesforms';
import FormComponent from '@/components/Form';
import { useEffect } from 'react';

const formId = 'NmlqfgtJ8pVbQHvuZdg3';
const formFields = [
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
];

const FormComposed = (props) => {
  useEffect(() => {
    kwesforms.init();
  });

  return (<div className="container is-max-desktop">
    <div className="column is-6" style={{ margin: '0 auto' }}>
      <FormComponent {...props} />
    </div>
  </div>);
};

const meta = {
  component: FormComposed,
  title: 'Form Example',
};

export default meta;

export const FormControl = {
  args: {
    id: formId,
    data: {
      id: formId,
      title: 'Welcome!',
      subTitle: 'Please fill out the form below:',
      disclaimer:
      'When you agree to these terms, you agree to allow us to contact you via email.',
      fields: formFields,
    },
    // action: '',
    // handler: undefined,
    // handler: (e) => { e.preventDefault(); console.log('Form submitted!') },
  }
};
