import React, { useRef } from 'react';
/**
 * @todo: Items to consider for future releases:
 * (no-reload="true") "Starter Plan" (TBD) ~ use a custom action/handler for now
 * - submit button className(s) as props
 */

import {
  InputControl,
  CheckboxControl,
  SelectControl,
  RadioGroupControl,
  CheckboxGroupControl,
  TextareaControl,
  FileControl,
  DateControl,
  DatePickerControl,
  DateTimePickerControl,
  TimeControl,
  TelephoneControl,
  RangeControl,
  NumberControl,
} from './fields';

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Control Factory
 * Add a new key when a new field type is added
 * [key]: Field['type']
 */
const controlFactory: ControlFactory = {
  select: (props) => <SelectControl {...props} />,
  text: (props) => <InputControl {...props} />,
  textarea: (props) => <TextareaControl {...props} />,
  password: (props) => <InputControl {...props} />,
  email: (props) => <InputControl {...props} />,
  file: (props) => <FileControl {...props} />,
  date: (props) => <DateControl {...props} />,
  datepicker: (props) => <DatePickerControl {...props} />,
  hidden: (props) => <InputControl {...props} />,
  checkbox: (props) => <CheckboxControl {...props} />,
  checkboxGroup: (props) => <CheckboxGroupControl {...props} />,
  radio: (props) => <RadioGroupControl {...props} />,
  time: (props) => <TimeControl {...props} />,
  'datetime-local': (props) => <DateTimePickerControl {...props} />,
  tel: (props) => <TelephoneControl {...props} />,
  range: (props) => <RangeControl {...props} />,
  number: (props) => <NumberControl {...props} />,
};

/**
 * createControl: Input Control Factory
 * @param { Field } field
 */
function createControl(field: Field): JSX.Element {
  const control = controlFactory[field.type as ControlType];
  return control({ ...field, key: field.name });
}

const generateFields = (fields: (Field | Group)[]) =>
  fields.map((field, idx) => {
    const hasGroup = Object.keys(field)[0] === 'group';
    const isHidden = (field as Field).type === 'hidden';
    let fieldName;
    const fields: React.ReactElement[] = [];

    // has a group of fields
    if (hasGroup) {
      (field as Group).group.forEach((f, index) => {
        fieldName = f.field.name;
        const columnClasses = f?.size
          ? ['column', `is-${f.size}`]
          : ['column'];
        fields.push(
            <div key={`group-${index}`} className={columnClasses.join(' ')}>
              {createControl(f.field)}
            </div>
        );
      });

      return (
        <div className="columns" key={`group-column-${fieldName}`}>
          {fields && fields.map((f) => f)}
        </div>
      );
    }

    // has a single field
    return isHidden === false && hasGroup === false ? (
      <div className="columns" key={`group-${idx}`}>
        <div className="column">
          {createControl(field as Field)}
        </div>
      </div>
    ) : (
      <div className='hidden' key={`field-${idx}`}>
        {createControl(field as Field)}
      </div>
    );
  });

/**
 * Form Component
 * @param id { string }
 * @param data { FormData }
 * @returns JSX.Element
 */
const Form: React.FC<FormProps> = ({ id, data, action, handler, method = 'POST' }) => {
  const innerRef = useRef<HTMLFormElement>(null);
  const formAction = action ?? `https://kwes.io/api/foreign/forms/${id}`; // allows for custom form action but default to kwesforms
  const disclaimer = data.disclaimer;
  const submitButton = data.submission?.button || 'Submit';
  const successMessage = data.submission?.success || null;
  const errorMessage = data.submission?.error || null;

  /**
   * KWESForm
   * Note: Kwesforms will handle the validation and method handling but for custom actions/handlers,
          they will use a 'POST' action and fallback to built-in field validation
          No data, we assume it has a custom action/handler; bypasses kwesforms entirely.
   */
  return (
    <form
      className="kwes-form"
      {...(!data ? { method } : null)}
      {...(!action ? { noValidate: true } : null)}
      acceptCharset="utf-8"
      ref={innerRef}
      action={formAction}
      {...(handler && { onSubmit: handler })}
      {...(isDev && { mode: 'test' })}
      {...(successMessage && { "success-message": successMessage })}
      {...(errorMessage && { "error-message": errorMessage })}
    >
      {data && (
        <fieldset className="container">
          {/* Form Title & Sub-Title */}
          {data.title && (
            <div className="columns">
              <div className="column">
                <span className="h2">{data.title}</span><br />
                {data.subTitle && <span>{data.subTitle}</span>}
              </div>
            </div>
          )}

          {/* Generate Field(s) */}
          {data.fields && generateFields(data.fields)}

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <button
                // onClick={handleSubmit}
                data-testid="submit-button"
                className="button is-info is-primary is-fullwidth submit-button is-normal"
                type="submit"
              >
                {submitButton}
              </button>
            </p>
          </div>

          {/* Disclaimer */}
          {disclaimer && (
            <div className="columns">
              <div className="column">
                <p className="disclaimer" dangerouslySetInnerHTML={{__html: disclaimer}} />
              </div>
            </div>                
          )}
        </fieldset>
      )}
    </form>
  );
};

export default Form;
