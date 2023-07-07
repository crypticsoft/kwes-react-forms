import React, { useState, FC } from 'react';
import Field from '../Field';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
};

interface CheckboxControlProps {
  name: string;
  label: string;
  rules?: string;
  help?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * CheckboxControl
 * @param { label, help } props 
 * @returns 
 * todo: disabled, defaultValue
 */
const FieldControl: FC<CheckboxControlProps> = ({ className, help, label, ...props }) => {
  return (<Field help={help} label={label}>
    <label className={className}>
      {props.children} &nbsp;
      {label}
    </label>
  </Field>);
}

/**
 * 
 * @param rules (string)
 * @returns 
 */
const Checkbox: FC<CheckboxProps> = ({ value, rules, name, ...props }) => {
  const [checked, setChecked] = useState(false);
  return (
    <input
      name={name}
      type="checkbox"
      {...props}
      rules={rules}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      checked={checked}
      value={value}
    />);
}

interface CheckboxControlProps {
  name: string;
  label: string;
  rules?: string;
  help?: string;
  className?: string;
}

const CheckboxControl: FC<CheckboxControlProps> = ({ name, label, rules, help, className }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={className}>
      <Checkbox name={name} rules={rules} />
  </FieldControl>;

export default CheckboxControl;
