import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * Date Control : DateField Picker
 * Requirements: 
 *  - field type: "datepicker"
 *  - "Starter Plan" or higher
 */
interface DateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const DateField: FC<DateProps> = ({ value, rules, name, checked, ...props }) => (
  <div className='kw-datepicker-wrapper'>
    <input
      name={name}
      type="datepicker"
      value={value}
      className="input pl-2"
      rules={rules}
      {...props}
    />
  </div>);

const DatePickerControl: FC<FieldControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={className}>
      <DateField name={name} rules={rules} {...props} />
  </FieldControl>;

export default DatePickerControl;
