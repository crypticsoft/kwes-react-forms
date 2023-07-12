import React from 'react';
import PropTypes from 'prop-types';
import CheckboxControl from '@/components/fields/Checkbox';

// base style
// import '../assets/css/index.css';

/**
 * CheckboxControl component
 */
export const CheckboxComponent = ({ ...props }) => (
  <CheckboxControl name={props.name} label={props.label} {...props} />
);

CheckboxComponent.propTypes = {
  /**
   * Field and form data
   */
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.string,
  type: PropTypes.string
};

CheckboxComponent.defaultProps = {
  label: '',
  name: '',
  rules: 'accepted',
  type: 'checkbox'
};
