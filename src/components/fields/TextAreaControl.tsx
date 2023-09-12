import React, { useRef, FC } from 'react';
import Field from '../Field';
import useErrorObserver from '../../hooks/useErrorObserver';

const TextAreaControl: FC<TextAreaControlProps> = ({ name, rules, label, help, className, ...props }) => {
  const [value, setValue] = React.useState(props.defaultValue || '');
  const controlRef = useRef<HTMLTextAreaElement>(null);

  const error = useErrorObserver(controlRef);
  // can't use aria-invalid here
  const ariaProps = {
    'aria-describedby': `field-error-${name}`,
  };

  const labelClassName = rules?.includes('required') ? 'label required' : 'label';
  const defaultClassName = 'textarea';

  return (
    <Field help={help} label={label}>
      {props.type !== 'hidden' && (
        <label className={labelClassName} htmlFor={`${name}-input`}>
          {label}
        </label>
      )}
      <textarea
        ref={controlRef}
        id={`${name}-textarea`}
        data-testid={`${name}-textarea`}
        name={name}
        className={[defaultClassName, props.type, className, 'pl-2'].join(' ')}
        onChange={(event) => setValue(event.currentTarget.value)}
        {...(rules ? { rules } : {})}
        {...(error ? {...ariaProps} : {})}
        placeholder={props.placeholder}
        rows={props.rows || undefined}
        value={value || ''}
      />
    </Field>
  );
};

export default TextAreaControl;
