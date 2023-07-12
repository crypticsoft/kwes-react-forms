import React, { useRef, FC } from 'react';
import Field from '../Field';
import useErrorObserver from '../../hooks/useErrorObserver';

interface TextAreaControlProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type: string;
  label: string;
  rules?: string;
  help?: string;
  className?: string;
}

const TextAreaControl: FC<TextAreaControlProps> = ({ rules, label, help, className, ...props }) => {
  const [value, setValue] = React.useState(props.defaultValue || '');
  const controlRef = useRef<HTMLTextAreaElement>(null);

  const error = useErrorObserver(controlRef);
  // can't use aria-invalid here
  const ariaProps = {
    'aria-describedby': `field-error-${props.name}`,
  };

  const labelClassName = rules?.includes('required') ? 'label required' : 'label';
  const defaultClassName = 'textarea';

  return (
    <Field help={help} label={label}>
      {props.type !== 'hidden' && (
        <label className={labelClassName} htmlFor={`${props.name}-input`}>
          {label}
        </label>
      )}
      <textarea
        ref={controlRef}
        id={`${props.name}-textarea`}
        data-testid={`${props.name}-textarea`}
        name={props.name}
        className={[defaultClassName, props.type, className].join(' ')}
        onChange={(event) => setValue(event.currentTarget.value)}
        {...(rules ? { rules } : {})}
        {...(error ? {...ariaProps} : {})}
        placeholder={props.placeholder}
        value={value || ''}
      />
    </Field>
  );
};

export default TextAreaControl;
