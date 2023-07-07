import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form';

// base style
import '../assets/css/index.css';

/**
 * Primary Form UI component
 */
export const FormComponent = ({ id, data, ...props }) => (
  <Form id={id} data={data} {...props} />
);

FormComponent.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  id: PropTypes.string,
  /**
   * Field and form data
   */
  data: PropTypes.object
};

FormComponent.defaultProps = {
  id: '',
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
