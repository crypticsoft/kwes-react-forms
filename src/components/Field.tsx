import * as React from 'react';
import clsx from 'clsx';

const Field = ({ name, help, className, controlClassName, children }) => (
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