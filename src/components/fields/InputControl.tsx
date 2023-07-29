import React, { Fragment, useRef, forwardRef, ForwardedRef, FC } from 'react';
import Field from './../Field';
import useErrorObserver from '../../hooks/useErrorObserver';

//TODO: Should I add forwardRefs for all Field controls?

export const InputField: FC<InputControlProps> = forwardRef((props, ref: ForwardedRef<HTMLInputElement>)  => {
  // const [value, setValue] = useState(props.defaultValue || '');
  // const controlRef = useRef<HTMLInputElement>(null);

  return (
    <input
      ref={ref}
      id={`${props.name}-input`}
      data-testid={`${props.name}-input`}
      className={['input', props.className ? props.className : ''].join(' ').trim()}
      // onChange={(event) => setValue(event.currentTarget.value)}
      {...props}
    />
  );
});

InputField.displayName = 'InputField';

const InputControl = (props) => {
  // const [value, setValue] = useState(props.defaultValue || '');
  const controlRef = useRef<HTMLInputElement>(null);
  const error = useErrorObserver(controlRef);
  const ariaProps = {
    'aria-describedby': `field-error-${props.name}`,
    'aria-invalid': error ? error : ''
  };
  const labelClassName = props?.rules?.includes('required') ? 'label required' : 'label';

  return (
    <Field label={props.label} help={props.help}>
      <Fragment>
        {props.type !== 'hidden' && (
          <label className={labelClassName} htmlFor={`${props.name}-input`}>
            {props.label}
          </label>
        )}
        <InputField
          ref={controlRef}
          id={`${props.name}-input`}
          data-testid={`${props.name}-input`}
          rules={props.rules}
          {...((props.type !== 'hidden' && error) && {...ariaProps})}
          {...props}
          className={['input', props.className].join(' ').trim()}
          required={props?.rules?.includes('required') ? true : false}
        />
      </Fragment>
    </Field>
  );
};

export default InputControl;
