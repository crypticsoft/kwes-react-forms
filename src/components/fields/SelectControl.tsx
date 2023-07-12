import * as React from 'react';
import useErrorObserver from '../../hooks/useErrorObserver';

/**
 * SelectControl
 * @param { name, label, (object) defaultOption, (object) options, rules, help } props
 * @returns
 * TODO: disabled, defaultValue, predetermined lists? (https://kwes.io/docs/v2/predetermined-lists)
 */
const SelectControl = ({ name, label, rules, defaultOption, help, options }: Field) => {
  const [value, setValue] = React.useState(defaultOption || '');
  const ref = React.useRef(0);
  // const defaultOption = { 'Select One': '' };
  const error = useErrorObserver(ref);
  const ariaProps = {
    'aria-describedby': `field-error-${name}`,
    'aria-invalid': error ? error : ''
  };
  const labelClassName = rules?.includes('required') ? 'label required' : 'label';

  return (
    <div className="field">
      <label className={labelClassName} htmlFor={`${name}-select`}>
        {label}
      </label>
      <div className={`control is-fullwidth select ${error ? 'has-error is-danger' : ''}`}>
        <select
          ref={ref}
          id={`${name}-select`}
          name={name}
          value={value}
          rules={rules} // eslint-disable-line react/no-unknown-property
          onChange={(event) => setValue(event.currentTarget.value)}
          {...ariaProps}
        >
          {!defaultOption && <option value=''>Select One</option>}
          {defaultOption !== undefined &&
            typeof defaultOption === 'object' && (
                <option value={(Object.values(defaultOption)[0] as {key: string, value: string}).value}>{Object.keys(defaultOption)[0]}</option>
            )}
          {Object.entries(options).map(([key, optionValue]) => (
            <option key={key} value={(optionValue as {key: string, value: string}).value}>
              {key}
            </option>
          ))}
        </select>
      </div>
      {help && <p className="help">{help}</p>}
    </div>
  );
};

/**
interface SelectControlProps {
  name: string;
  label: string;
  rules?: string;
  defaultOption: { key: string, value: string }[];
  help?: string;
  options: { key: string, value: string }[];
}
 */
export default SelectControl;
