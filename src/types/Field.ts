  interface Field {
    type: 'select' | 'text' | 'hidden' | 'checkbox' | 'checkboxGroup' | 'radio' | 'email' | 'textarea' | 'password' | 'date' | 'datepicker' | 'file' | 'datetime-local' | 'time' | 'tel' | 'range';
    name: string;
    label: string;
    placeholder?: string;
    help?: string;
    rules?: string;
    options?: object;
    defaultOption?: object;
    className?: string;
    controlClassName?: string;
    children?: React.ReactNode;
    rows?: number;
  }

  interface FieldControlProps {
    name: string;
    label: string;
    rules?: string;
    help?: string;
    className?: string;
    children?: React.ReactNode;
  }

  interface Group {
    group: { field: Field; size?: number }[];
  }
  
  interface FormData {
    id: string;
    title?: string;
    subTitle?: string;
    fields: (Field | Group)[];
    disclaimer?: string;
    submission?: { button?: string, success?: string, error?: string };
  }
  
  interface FormProps {
    id: string;
    data: FormData;
    action?: string;
    handler?: () => void;
  }

  /**
 * Record Types (Fields)

type Field = {
  name: string;
  type: 'select' | 'text' | 'hidden' | 'checkbox' | 'checkboxGroup' | 'radio' | 'email';
  label: string;
  placeholder?: string;
  help?: string;
  rules?: string;
  options?: object;
  defaultOption?: object;
  className?: string;
  controlClassName?: string;
};
*/

type ControlProps = {
  [key in Field['type']]: Field & { type: key };
};

type ControlType = keyof ControlProps;

type ControlFactory = {
  [key in ControlType]: (props: ControlProps[key]) => JSX.Element;
};
/* End Record Types */
