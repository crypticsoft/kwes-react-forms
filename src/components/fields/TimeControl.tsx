import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * Time Control
 * ** Not recommended ** This isn't really an ideal solution for selecting a time. 
 * 
 * 1) Firefox doesn't really give good support for the time input as other browsers do.
 * 2) It forces the user to scroll through a long list and on mobile, that's not a good experience.
 * 3) In most cases, there are a set range or available "time slots" which makes this useless.
 * 
 * For a better user-experience, the `select` type with options in 30-minute increments
 * would be better for only showing the time range(s) that are available for the user.
 * 
 * Requirements: 
 *  - field type: "time"
 */
interface TimeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
  min?: string;
  max?: string;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const TimeField: FC<TimeProps> = ({ min, max, value, rules, name, checked, ...props }) => (
  <input
    name={name}
    type="time"
    className="input timepicker"
    value={value}
    min={min}
    max={max}
    rules={rules}
    {...((min && max) && { title: `Time should be between ${new Date(`${new Date().toLocaleString().split(',').shift()} ${min}`).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })} and ${new Date(`${new Date().toLocaleString().split(',').shift()} ${max}`).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}` })}
    {...props}
  />);

const TimeControl: FC<FieldControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={[className, 'kw-timepicker-wrapper'].join(' ')}>
      <TimeField name={name} rules={rules} {...props} />
  </FieldControl>;

export default TimeControl;