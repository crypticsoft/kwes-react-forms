import React, { FC } from 'react';

interface FieldProps {
  label: string;
  help?: string;
  children: React.ReactNode;
}


const Field: FC<FieldProps> = ({ help, children }) => (
  <div className='field'>
    <div className='control'>
      {children}
    </div>
    {help && <p className="help">{help}</p>}
  </div>
);

export default Field;
