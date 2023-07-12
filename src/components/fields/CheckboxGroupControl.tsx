import * as React from 'react';
import Field from '../Field';
import Checkbox from './Checkbox';

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

  const labelClassName = props?.rules?.includes('required') ? 'label required' : 'label';

  return (<Field label={props.label} help={props.help}>
    <fieldset
      data-kw-group
      className="kw-checkbox-group"
      rules={props.rules} // eslint-disable-line react/no-unknown-property
    >
      <legend className={labelClassName}>{props.label}</legend>

      {props.options && Object.entries(props.options).map(([k, v], index) => 
        <Checkbox
          name={props.name}
          value={v}
          label={k}
          key={`${props.name}-${index}`}
        />
      )}
    </fieldset>
  </Field>);
}

export default CheckboxGroupControl;