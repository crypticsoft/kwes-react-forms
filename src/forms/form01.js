// form01
const formData = {
  id: 'SWXrdEPodyOKj9vXYmwU',
  title: 'Welcome!',
  subTitle: 'Please fill out the form below:',
  fields: [
    {
      type: 'text',
      name: 'first_name',
      rules: 'required',
      label: 'First Name'
      // defaultValue: 'Joe'
    },
    {
      type: 'text',
      name: 'last_name',
      rules: 'required',
      label: 'Last Name'
    },
    {
      type: 'select',
      name: 'city',
      rules: 'required',
      label: 'Your City',
      defaultOption: { 'Select One': '' },
      options: { Buckeye: 'Buckeye', Avondale: 'Avondale' }
    },
    {
      type: 'select',
      name: 'state',
      rules: 'required',
      label: 'Your State',
      defaultOption: { 'Select One': '' },
      options: { Arizona: 'AZ' }
    },
    {
      type: 'checkbox',
      name: 'terms',
      rules: 'accepted',
      label: 'I agree to the terms and conditions.'
    }
  ]
};

export default formData;
