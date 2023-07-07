import React, { useState, FC } from 'react';
import Field from '../Field';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
  value?: string;
}

interface CheckboxControlProps {
  name: string;
  label: string;
  rules?: string;
  help?: string;
  className?: string;
  children?: React.ReactNode;
}

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
const Checkbox: FC<CheckboxProps> = ({ value, rules, name, checked, ...props }) => (
  <input
    name={name}
    type="checkbox"
    checked={checked}
    value={value}
    {...props}
  />);

const CheckboxControl: FC<CheckboxControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={className}>
      <Checkbox name={name} {...props} />
  </FieldControl>;

export default CheckboxControl;
