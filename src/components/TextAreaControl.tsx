import * as React from 'react';
import Field from './Field';
import useErrorObserver from '../hooks/useErrorObserver';

const TextAreaControl = (props) => {
  const [value, setValue] = React.useState(props.defaultValue || '');
  const controlRef = React.useRef(0);
  const error = useErrorObserver(controlRef);
  const ariaProps = {
    'aria-describedby': `field-error-${props.name}`,
    'aria-invalid': error ? error : ''
  };

  return (
    <Field className='' name={props.name} help={props.help}>
      {props.type !== 'hidden' && (
        <label className="label" htmlFor={`${props.name}-input`}>
          {props.label}
        </label>
      )}
      <textarea
        ref={controlRef}
        id={`${props.name}-textarea`}
        data-testid={`${props.name}-textarea`}
        name={props.name}
        className={[props.type, props.className].join(' ')}
        onChange={(event) => setValue(event.currentTarget.value)}
        rules={props.rules} // eslint-disable-line react/no-unknown-property
        placeholder={props.placeholder}
        rows={props?.rows}
        {...ariaProps}
        value={value || ''}
      />
    </Field>
  );
};

export default TextAreaControl;
