import * as React from 'react';
import useErrorObserver from '../../hooks/useErrorObserver';

/**
 * SelectControl
 * @param { name, className, label, multiple, size, (object) defaultOption, (object) options, rules, help } props
 * @returns
 * TODO: disabled, defaultValue, predetermined lists? (https://kwes.io/docs/v2/predetermined-lists)
 */
const SelectControl = ({ name, className, label, rules, defaultOption, multiple, size, help, options }: SelectField) => {
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
      {/* todo: clean up how classNames can be merged */}
      <div className={`control is-fullwidth select ${multiple ? 'is-multiple' : ''} ${error ? 'has-error is-danger' : ''} ${className ? className : ''}`}>
        <select
          ref={ref}
          id={`${name}-select`}
          name={name}
          rules={rules} // eslint-disable-line react/no-unknown-property
          onChange={(event) => setValue(event.currentTarget.value)}
          {...(value && (!multiple && !defaultOption) && { value })}
          {...(multiple && { multiple })}
          {...(multiple && size && { size })}
          {...ariaProps}
        >
          {!defaultOption && <option value=''>Select One</option>}
          {defaultOption !== undefined &&
            typeof defaultOption === 'object' && (
                <option value={(Object.values(defaultOption)[0] as {key: string, value: string}).value} selected>{Object.keys(defaultOption)[0]}</option>
            )}
          {Object.entries(options).map(([key, optionValue]) => (
            <option key={key} value={(optionValue as {key: string, value: string}).value}>
              {key}
            </option>
          ))}
        </select>
      </div>
      {help || value && <p className="help">
        <>
        {help ? help : ''}
        {value ? <p>{JSON.stringify(value)}</p> : ''}
        </>
        </p>}
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
