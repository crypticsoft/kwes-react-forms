  interface Field {
    type: 'select' | 'text' | 'hidden' | 'checkbox' | 'checkboxGroup' | 'radio' | 'email' | 'textarea' | 'password' | 'date' | 'datepicker' | 'file' | 'datetime-local' | 'time' | 'tel' | 'range' | 'number';
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
  }

  interface TextAreaControlProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    type: string;
    label: string;
    rules?: string;
    help?: string;
    className?: string;
    rows?: number;
  }

  interface TelProps extends React.InputHTMLAttributes<HTMLInputElement> {
    rules?: string;
    help?: string;
  }

  interface InputControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    rules?: string;
    help?: string;
  }

  interface SelectControlProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    label: string;
    rules?: string;
    help?: string;
  }

  interface SelectField extends React.InputHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    rules?: string | undefined;
    defaultOption?: object | undefined; // { [key: string]: [value: string] }
    help?: string | undefined;
    options: object; //
    multiple?: boolean | undefined;
    size?: number | undefined;
    className?: string | undefined;
    ref: React.RefObject<HTMLSelectElement>;
  }

  interface FieldControlProps {
    name: string;
    label: string;
    min?: number;
    max?: number;
    step?: number;
    help?: string;
    rules?: string;
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
