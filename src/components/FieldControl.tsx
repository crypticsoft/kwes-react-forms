import React, { FC } from 'react';
import Field from './Field';

const FieldControl: FC<FieldControlProps> = ({ className, help, label, ...props }) => {
 return (<Field help={help} label={label}>
   <label className={[className, 'label'].join(' ')} htmlFor={props.name}>
     {label}
   </label>
   <div>
    {props.children}
   </div>
 </Field>);
}

export default FieldControl;
