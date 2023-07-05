import * as React from 'react';
import useErrorObserver from '../hooks/useErrorObserver';
/**
 * SelectControl
 * @param { name, label, (object) defaultOption, (object) options, rules, help } props
 * @returns
 * todo: disabled, defaultValue, predetermined lists? (https://kwes.io/docs/v2/predetermined-lists)
 */
const SelectControl = (props) => {
  const [value, setValue] = React.useState(props.defaultOption || '');
  const ref = React.useRef(0);
  const defaultOption = { 'Select One': '' };
  const error = useErrorObserver(ref);
  const ariaProps = {
    'aria-describedby': `field-error-${props.name}`,
    'aria-invalid': error ? error : ''
  };

  return (
    <div className="field">
      <label className="label" htmlFor={`${props.name}-select`}>
        {props.label}
      </label>
      <div className={`control is-fullwidth select ${error ? 'has-error' : ''}`}>
        <select
          ref={ref}
          id={`${props.name}-select`}
          name={props.name}
          value={value}
          rules={props.rules} // eslint-disable-line react/no-unknown-property
          onChange={(event) => setValue(event.currentTarget.value)}
          {...ariaProps}
        >
          {!props.defaultOption && <Option {...defaultOption} />}
          {props.defaultOption !== undefined &&
            typeof props.defaultOption === 'object' && (
              <Option {...props.defaultOption} />
            )}
          <Option {...props.options} />
        </select>
      </div>
      {props.help && <p className="help">{props.help}</p>}
    </div>
  );
};

// option (object map)
const Option = (obj) =>
  Object.entries(obj).map(([k, v]) => (
    <option key={k} value={v}>
      {k}
    </option>
  ));

export default SelectControl;
