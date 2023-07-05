export const defaultProps = (props, defaultValue, error) => {
  let args = {};
  const getA11yErrorMessage = (name, error) => {
    if (error && name) {
      return {
        'aria-describedby': `field-error-${name}`,
        'aria-invalid': error ? error : ''
      };
    }
  };

  // "text" input
  if (props.type === 'text' || props.type === 'hidden' || props.type === 'email') {
    args = {
      id: `${props.name}-input`,
      className: 'input',
      'data-testid': `${props.name}-input`
    };

    if (defaultValue) {
      args.value = defaultValue;
    }

    if (props.placeholder) {
      args.placeholder = props.placeholder;
    }
  }

  // select
  if (props.type === 'select') {
    args = {
      id: `${props.name}-select`
    };
    if (defaultValue) {
      args.value = defaultValue;
    }
  }

  // optional field "rules"
  if (props.rules) {
    args.rules = props.rules;
  }

  // error state
  if (error) {
    Object.assign(args, getA11yErrorMessage(props.name, error));
  }

  return {
    name: props.name,
    type: props.type,
    ...args
  };
};

// export const defaultProps = {
//   ...commonDefaultProps
// };
