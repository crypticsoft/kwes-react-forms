import React, { useState } from 'react';
import Field from './Field';

/**
 * CheckboxControl
 * @param { name, label, rules } props 
 * @returns 
 * todo: disabled, defaultValue
 */
 const CheckboxControl = (props) => {
  const [value, setValue] = useState('')

  return (<Field name={props.name} help={props.help} className={props.name}>
    <label className="checkbox">
      <input
        type="checkbox"
        name={props.name}
        rules={props.rules} // eslint-disable-line react/no-unknown-property
        onChange={(event) => setValue(event.currentTarget.checked)}
        checked={value ?? 'checked'}
      />
      {props.label}
    </label>
  </Field>);
}

export default CheckboxControl;
