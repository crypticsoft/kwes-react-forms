import React, { FC } from 'react';
import FieldControl from '../FieldControl';
import InputField from './InputControl';

// CSS base: https://github.com/darlanrod/input-range-scss
import '../../assets/css/fields/inputrange.scss';

/**
 * Range Control
 * 
 * Requirements: 
 *  - field type: "range"
 */
interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
  min?: string;
  max?: string;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const RangeField: FC<RangeProps> = ({ min, max, step, rules, name, checked, ...props }) => {
    const [value, setValue] = React.useState('');
    return (
        <>
          <input
            name={name}
            className='range-input'
            type='range'
            value={value}
            rules={rules}
            {...(min && { min: Number(min) })}
            {...(max && { max: Number(max) })}
            {...(step && { step: Number(step) })}
            onChange={(event) => setValue(event.currentTarget.value)}
            {...props}
          />
          <InputField
            // ref={controlRef}
            // readOnly={true}
            onChange={(event) => setValue(event.currentTarget.value)}
            {...props}
            id={`${name}-input`}
            type='text'
            data-testid={`${name}-input`}
            value={value}
            rules={rules}
            required={rules?.includes('required') ? true : false}
          />
        </>
    )};

const RangeControl: FC<FieldControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={[className, 'kw-tel-wrapper'].join(' ')}>
    <RangeField name={name} rules={rules} {...props} />
  </FieldControl>;

export default RangeControl;
