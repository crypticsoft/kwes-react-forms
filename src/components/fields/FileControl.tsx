import React, { FC } from 'react';
import FieldControl from '../FieldControl';

/**
 * File Control
 * Requirements: 
 *  - <form> needs to have the accompanied `enctype="multipart/form-data"` (TBD)
 *  - "Starter Plan" or higher
 */
interface FileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rules?: string;
}

/**
 * expected Validation Rule / Attribute: rules="file"
 * @param rules (string)
 * @returns 
 */
const File: FC<FileProps> = ({ value, rules, name, checked, ...props }) => (
  <input
    name={name}
    type="file"
    className="input"
    value={value}
    rules={rules}
    {...props}
  />);

  
const FileControl: FC<FieldControlProps> = ({ name, label, rules, help, className, ...props }) => 
  <FieldControl name={name} label={label} rules={rules} help={help} className={className}>
      <File name={name} rules={rules} {...props} />
  </FieldControl>;

export default FileControl;
