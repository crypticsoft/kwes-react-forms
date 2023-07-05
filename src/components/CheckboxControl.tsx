import * as React from 'react';
import Field from './Field';

/**
 * CheckboxControl
 * @param { name, label, rules } props 
 * @returns 
 * todo: disabled, defaultValue
 */
 const CheckboxControl = (props) => {
  const [value, setValue] = React.useState('')

  return (<Field name={props.name} help={props.help} className={props.name}>
    <label className="checkbox">
      <input
        type="checkbox"
        name={props.name}
        rules={props.rules}
        onChange={(event) => setValue(event.currentTarget.checked)}
        checked={value}
      />
      {props.label}
    </label>
  </Field>);
}

export default CheckboxControl;
