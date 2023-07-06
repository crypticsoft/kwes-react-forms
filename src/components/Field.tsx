import * as React from 'react';

type FieldProps = {
  name: string;
  help: string;
  className: string;
  controlClassName?: string;
  children: React.ReactNode;
}

const Field = ({ name, help, className, controlClassName, children }: FieldProps) => (
  <div 
    className={['field', className].join(' ')}
    key={name}
  >
    <div className={['control', controlClassName].join(' ')}>
      {children}
    </div>
    {help && <p className="help">
      {help}
    </p>}
  </div>
);

export default Field;