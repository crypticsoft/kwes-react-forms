import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * Date Control
 * Requirements: 
 *  - field type: "date"
 */
interface DateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
  min?: string;
  max?: string;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const DateField: FC<DateProps> = ({ min, max, value, rules, name, checked, ...props }) => (
  <input
    name={name}
    type="date"
    className="input"
    value={value}
    min={min}
    max={max}
    rules={rules}
    {...props}
  />);

const DateControl: FC<FieldControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={[className, 'kw-datepicker-wrapper'].join(' ')}>
      <DateField name={name} rules={rules} {...props} />
  </FieldControl>;

export default DateControl;
