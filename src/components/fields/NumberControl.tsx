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
  min?: number;
  max?: number;
  step?: number;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
export const NumberField: FC<NumProps> = ({ defaultValue, min, max, value, rules, name, pattern, ...props }) => (
  <input
    name={name}
    type="number"
    className={['input', props?.className].join(' ').trim()}
    value={value ?? defaultValue}
    rules={rules}
    min={min}
    max={max}
    {...props}
  />);

const NumberControl: FC<FieldControlProps> = ({ min, max, step, name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={[className, 'kw-tel-wrapper'].join(' ')}>
      <NumberField min={min} max={max} step={step} name={name} rules={rules} {...props} />
  </FieldControl>;

export default NumberControl;
