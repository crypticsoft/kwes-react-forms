import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * Telephone Control
 * 
 * Requirements: 
 *  - field type: "tel"
 */

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const TelField: FC<TelProps> = ({ help, value, name, pattern, checked, ...props }) => (
  <input
    name={name}
    type="tel"
    className={['input input-tel', props?.className].join(' ').trim()}
    value={value}
    pattern={pattern}
    aria-label={help}
    {...props}
  />);

const TelControl: FC<FieldControlProps> = ({ name, rules, label, help, className, ...props }) => 
  <FieldControl name={name} label={label} help={help} className={[className, 'kw-tel-wrapper', (rules?.includes('required') ? 'required' : '')].join(' ')}>
      <TelField name={name} help={help} {...props} />
  </FieldControl>;

export default TelControl;