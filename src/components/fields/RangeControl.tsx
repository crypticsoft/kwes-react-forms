import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * Range Control
 * 
 * Requirements: 
 *  - field type: "range"
 */
interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
  min?: string;
  max?: string;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const RangeField: FC<RangeProps> = ({ min, max, rules, name, checked, ...props }) => {
    const [value, setValue] = React.useState(null);
    return (
        <input
            name={name}
            type="range"
            value={value}
            rules={rules}
            min={min}
            max={max}
            onChange={(event) => setValue(event.currentTarget.value)}
            {...props}
        />
    )};

const RangeControl: FC<FieldControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={[className, 'kw-tel-wrapper'].join(' ')}>
    <RangeField name={name} rules={rules} {...props} />
  </FieldControl>;

export default RangeControl;
