import * as React from 'react';
/**
 * Set Default Props for Input | Select Controls
 * @param {object} props
 * @param {String} defaultValue
 * @param {Boolean} error
 */
export default function useDefaultProps(props, error) {
  const [defaults, setDefaults] = React.useState({});

  React.useEffect(() => {
    const args = { id: '', rules: '', className: '', 'data-testid': '', placeholder: ''};
    // "text" input
    if (props.type === 'text' || props.type === 'hidden' || props.type === 'email') {
      Object.assign(args, {
        id: `${props.name}-input`,
        className: 'input',
        'data-testid': `${props.name}-input`,
        placeholder: props.placeholder ? props.placeholder : null,
      });
    }

    // select
    if (props.type === 'select') {
      args.id = `${props.name}-select`;
    }

    // optional field "rules"
    if (props.rules) {
      args.rules = props.rules;
    }

    // error state
    if (error && props.type !== 'hidden') {
      Object.assign(args, {
        'aria-describedby': `field-error-${props.name}`,
        'aria-invalid': error ? error : ''
      });
    }

    setDefaults(args);
  }, [props, error]);

  return defaults;
}
