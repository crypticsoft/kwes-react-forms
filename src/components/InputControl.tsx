import * as React from 'react';
import Field from './Field';
import useErrorObserver from '../hooks/useErrorObserver';

const InputControl = (props) => {
  const [value, setValue] = React.useState(props.defaultValue || '');
  const controlRef = React.useRef(0);
  const error = useErrorObserver(controlRef);
  const ariaProps = {
    'aria-describedby': `field-error-${props.name}`,
    'aria-invalid': error ? error : ''
  };

  return (
    <Field className={props.type} name={props.name} help={props.help}>
      {props.type !== 'hidden' && (
        <label className="label" htmlFor={`${props.name}-input`}>
          {props.label}
        </label>
      )}
      <input
        ref={controlRef}
        id={`${props.name}-input`}
        data-testid={`${props.name}-input`}
        name={props.name}
        type={props.type}
        className="input"
        onChange={(event) => setValue(event.currentTarget.value)}
        rules={props.rules} // eslint-disable-line react/no-unknown-property
        placeholder={props.placeholder}
        value={value}
        {...ariaProps}
      />
    </Field>
  );
};

export default InputControl;
