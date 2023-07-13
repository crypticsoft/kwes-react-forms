import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * Telephone Control
 * 
 * Requirements: 
 *  - field type: "tel"
 */
interface TelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const TelField: FC<TelProps> = ({ help, value, rules, name, pattern, checked, ...props }) => (
  <input
    name={name}
    type="tel"
    className="input input-tel"
    value={value}
    rules={rules}
    pattern={pattern}
    aria-label={help}
    {...props}
  />);

const TelControl: FC<FieldControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={[className, 'kw-tel-wrapper'].join(' ')}>
      <TelField name={name} rules={rules} help={help} {...props} />
  </FieldControl>;

export default TelControl;