import * as React from 'react';
/**
 * RadioGroupControl
 * @param { name, (object) options, rules, help } props
 * @returns
 * todo: disabled, defaultValue
 */
const Option = (props) =>
  Object.entries(props.options).map(([k, v]) => (
    <label key={k}>
      <input
        onChange={props.onChange}
        type="radio"
        name={props.name}
        value={v}
        // checked={props.defaultOption === v || props.value === v ? true : false}
      />{' '}
      {k}
    </label>
  ));

const RadioGroupControl = (props) => {
  return (
    <div className="field">
      <div className="control radio-control">
        <fieldset
          data-kw-group
          rules={props.rules} // eslint-disable-line react/no-unknown-property
        >
          <legend>{props.label}</legend>
          <Option
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            options={props.options}
            defaultOption={props.defaultOption}
          />
        </fieldset>
      </div>
      {props.help && <p className="help">{props.help}</p>}
    </div>
  );
};

export default RadioGroupControl;
