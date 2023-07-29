import React, { Fragment, useRef, forwardRef, ForwardedRef, FC } from 'react';
import useErrorObserver from '../../hooks/useErrorObserver';
import Field from './../Field';

export const SelectField: FC<SelectControlProps> = forwardRef((props, ref: ForwardedRef<HTMLSelectElement>)  => {
  // const [value, setValue] = useState(props.defaultValue || '');
  // const controlRef = useRef<HTMLInputElement>(null);

  return (
    <select
      ref={ref}
      id={`${props.name}-select`}
      data-testid={`${props.name}-select`}
      className={['select', props.className ? props.className : ''].join(' ').trim()}
      {...props}
    >
      {props.children}
    </select>  
  );
});

SelectField.displayName = 'SelectField';

/**
 * SelectControl
 * @param { name, className, label, multiple, size, (object) defaultOption, (object) options, rules, help } props
 * @returns
 * TODO: disabled, defaultValue, predetermined lists? (https://kwes.io/docs/v2/predetermined-lists)
 */
const SelectControl = ({ name, className, type, label, rules, defaultOption, multiple, size, help, options }: SelectField) => {
  const [value, setValue] = React.useState(defaultOption || '');
  const controlRef = useRef<HTMLSelectElement>(null);

  const error = useErrorObserver(controlRef);
  const ariaProps = {
    'aria-describedby': `field-error-${name}`,
    'aria-invalid': error ? error : ''
  };
  const labelClassName = rules?.includes('required') ? 'label required' : 'label';

  return (
    <Field label={label} help={help}>
      <Fragment>
        {type !== 'hidden' && (
          <label className={labelClassName} htmlFor={`${name}-input`}>
            {label}
          </label>
        )}
        {/* todo: clean up how classNames can be merged */}
        <div className={`control is-fullwidth select ${multiple ? 'is-multiple' : ''} ${error ? 'has-error is-danger' : ''} ${className ? className : ''}`}>
          <SelectField
            ref={controlRef}
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
                  <option value={(Object.values(defaultOption)[0] as {key: string, value: string}).value} selected>
                    {Object.keys(defaultOption)[0]}
                  </option>
              )}
            {Object.entries(options).map(([key, optionValue]) => (
              <option key={key} value={(optionValue as {key: string, value: string}).value}>
                {key}
              </option>
            ))}
          </SelectField>
        </div>
      </Fragment>
    </Field>
    )};

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
