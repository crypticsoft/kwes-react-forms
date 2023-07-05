import React from 'react';
import PropTypes from 'prop-types';
import CheckboxControl from '../components/CheckboxControl';

// base style
import '../assets/css/index.css';

/**
 * CheckboxControl component
 */
export const CheckboxControlComponent = ({ ...props }) => (
  <CheckboxControl {...props} />
);

CheckboxControlComponent.propTypes = {
  /**
   * Field and form data
   */
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.string,
  type: PropTypes.string
};

CheckboxControlComponent.defaultProps = {
  label: '',
  name: '',
  rules: 'accepted',
  type: 'checkbox'
};
