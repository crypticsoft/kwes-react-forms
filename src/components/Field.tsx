import * as React from 'react';
import clsx from 'clsx';

type FieldProps = {
  name: string;
  help: string;
  className: string;
  controlClassName: string;
  children: React.ReactNode;
}

const Field = ({ name, help, className, controlClassName, children }: FieldProps) => (
  <div 
    className={clsx('field', className)}
    key={name}
  >
    <div className={clsx('control', controlClassName)}>
      {children}
    </div>
    {help && <p className="help">
      {help}
    </p>}
  </div>
);

export default Field;