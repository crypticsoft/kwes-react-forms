import React, { FC } from 'react';

interface OptionProps {
  name: string;
  // options: Record<string, string>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // defaultOption?: Record<string, string>;
  value?: string;
  label: string;
}

/**
 * RadioGroupControl
 * @param { name, (object) options, rules, help } props
 * @returns
 * todo: disabled, defaultValue
 */
const Option: FC<OptionProps> = ({ name, label, onChange, value }) => (
  <div className="control">
    <label key={label}>
      <input
        onChange={onChange}
        type="radio"
        name={name}
        value={value}
        // checked={Object.values(defaultOption ?? {})[0] === value || value === value}
      />{' '}
      {label}
    </label>
  </div>
);

interface RadioGroupControlProps {
  name: string;
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options?: object; // { [key: string]: string }
  defaultOption?: object;
  rules?: string;
  help?: string;
}

const RadioGroupControl = (props: RadioGroupControlProps) => {
  const labelClassName = props?.rules?.includes('required') ? 'label required' : 'label';
  return (
    <div className="field">
      <div className="control radio-control">
        <fieldset
          data-kw-group
          {...(props.rules && { rules: props.rules })}
        >
          <legend className={labelClassName}>{props.label}</legend>
          {props.options && Object.entries(props.options).map(([k, v]) => (
            <div key={k} className="field">
              <Option
                label={k}
                name={props.name} /* same name for all radios in a group */
                value={v}
                onChange={props.onChange}
                // {...(props.defaultOption ? { defaultOption={props.defaultOption} } : {})}
              />
            </div>
          ))}

        </fieldset>
      </div>
      {props.help && <p className="help">{props.help}</p>}
    </div>
  );
};

export default RadioGroupControl;
