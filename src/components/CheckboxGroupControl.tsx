import * as React from 'react';
import Field from './Field';

/**
 * CheckboxGroupControl
 * @param { name, (object) options, rules, help } props 
 * @returns 
 * todo: disabled, defaultValue
 */
 const CheckboxGroupControl = (props) => {
  const [checkedState, setCheckedState] = React.useState(
    new Array(Object.entries(props.options).length).fill(false)
  );

  const handleOnChange = (event, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (<Field controlClassName='checkbox-control' help={props.help}>
    <fieldset
      data-kw-group
      className="kw-checkbox-group"
      rules={props.rules}
    >
      <legend>{props.label}</legend>

      {props.options && Object.entries(props.options).map(( [k, v], index) => <label key={index}>
        <input
          type="checkbox"
          checked={checkedState[index]}
          onChange={(e) => handleOnChange(e, index)}
          name={props.name}
          value={v}
        /> {k}
      </label>)}
    </fieldset>
  </Field>);
}

export default CheckboxGroupControl;