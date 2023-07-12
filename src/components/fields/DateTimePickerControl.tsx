import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * Date Time Picker Control
 * Requirements: 
 *  - Field type: "datetime" (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#browser_compatibility)
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
const DateTimeField: FC<DateProps> = ({ min, max, name, ...props }) => {
  const [value, setValue] = React.useState(null);
  return (
    <input
      type="datetime-local"
      className="input"
      name={name}
      value={value || ''}
      min={min}
      max={max}
      onChange={(event) => setValue(event.currentTarget.value)}
      {...props}
      />)
  };

interface DateTimePickerControlProps extends FieldControlProps {
  min?: string;
  max?: string;
}
const DateTimePickerControl: FC<DateTimePickerControlProps> = ({ name, min, max, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={[className, 'kw-datepicker-wrapper'].join(' ')}>
      <DateTimeField name={name} min={min} max={max} {...props} />
  </FieldControl>;

export default DateTimePickerControl;
