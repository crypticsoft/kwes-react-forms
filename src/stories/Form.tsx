import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form';

// base style
import '../assets/css/index.scss';


/**
 * Primary Form UI component
 */
export const FormComponent = ({ id, data, ...props }: FormProps) => (
  <Form
    id={id}
    data={data}
    {...props}
  />
);

FormComponent.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  id: PropTypes.string.isRequired,
  /**
   * Field and form data
   */
  data: PropTypes.object.isRequired,
  action: PropTypes.string,
  handler: PropTypes.func,
};

FormComponent.defaultProps = {
  id: '',
  // action: '',
  // handler: () => { console.log('Form submitted!') },
  data: {
    id: '',
    title: '',
    subTitle: '',
    disclaimer: '',
    fields: [],
    submission: {
      button: '',
      title: '',
      subTitle: '',
    },  
  },
};
