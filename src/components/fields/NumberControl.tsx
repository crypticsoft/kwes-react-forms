import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * Number Control
 * 
 * Requirements: 
 *  - type: "number"
 *  - value: number
 */
interface NumProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
  min: string;
  max: string;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const NumberField: FC<NumProps> = ({ min, max, value, rules, name, pattern, checked, ...props }) => (
  <input
    name={name}
    type="number"
    className="input"
    value={value}
    rules={rules}
    min={min}
    max={max}
    {...props}
  />);

const NumberControl: FC<FieldControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={[className, 'kw-tel-wrapper'].join(' ')}>
      <NumberField name={name} rules={rules} {...props} />
  </FieldControl>;

export default NumberControl;
