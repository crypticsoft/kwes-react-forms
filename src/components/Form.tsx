import React, { useRef, useEffect } from 'react';
import kwesforms from 'kwesforms';
import InputControl from './InputControl';
import CheckboxControl from './CheckboxControl';
import SelectControl from './SelectControl';
import RadioGroupControl from './RadioGroupControl';
import CheckboxGroupControl from './CheckboxGroupControl';
import TextAreaControl from './TextAreaControl';

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Control Factory
 * Add a new key when a new field type is added
 * [key]: Field['type']
 */
const controlFactory: ControlFactory = {
  select: (props) => <SelectControl {...props} />,
  text: (props) => <InputControl {...props} />,
  textarea: (props) => <TextAreaControl {...props} />,
  password: (props) => <InputControl {...props} />,
  email: (props) => <InputControl {...props} />,
  hidden: (props) => <InputControl {...props} />,
  checkbox: (props) => <CheckboxControl {...props} />,
  checkboxGroup: (props) => <CheckboxGroupControl {...props} />,
  radio: (props) => <RadioGroupControl {...props} />,
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
          : ['column', `is-6`]; // 50% by default, unless specified
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
        <div className="is-12 column">{createControl(field as Field)}</div>
      </div>
    ) : (
      createControl(field as Field)
    );
  });

/**
 * Form Component
 * @param id { string }
 * @param data { FormData }
 * @returns JSX.Element
 */
const Form: React.FC<FormProps> = ({ id, data }) => {
  const innerRef = useRef<HTMLFormElement>(null);
  const formAction = `https://kwes.io/api/foreign/forms/${id}`;
  const disclaimer = data.disclaimer;
  const submitButton = data.submission?.button || 'Submit';
  const successMessage = data.submission?.success || null;
  const errorMessage = data.submission?.error || null;

  useEffect(() => {
    if (innerRef.current) {
      try {
        kwesforms.init();
      } catch(error) {
        console.error(error);
      }
    }
  }, [innerRef]);
  /**
   * KWES Form
   * todo: consider adding error messages around required fields. ie form "id"
   */
  return (
    <form
      className="kwes-form"
      noValidate
      acceptCharset="utf-8"
      ref={innerRef}
      action={formAction}
      {...(isDev && { mode: 'test' })}
      {...(!formAction && { style: { display: 'none' } })}
      {...(successMessage && { "success-message": successMessage })}
      {...(errorMessage && { "error-message": errorMessage })}
      // no-reload="true"
    >
      {data && (
        <fieldset>
          {/* Form Title & Sub-Title */}
          {data.title && (
            <legend>
              <h2>{data.title}</h2>
              {data.subTitle && <p>{data.subTitle}</p>}
            </legend>
          )}

          {/* Generate Field(s) */}
          {data.fields && generateFields(data.fields)}

          {/* Disclaimer */}
          {disclaimer && (
            <p className="disclaimer">
              <small>{disclaimer}</small>
            </p>
          )}
          <p className="submit">
            <button
              // onClick={handleSubmit}
              data-testid="submit-button"
              className="button is-normal is-primary is-fullwidth"
              type="submit"
            >
              {submitButton}
            </button>
          </p>
        </fieldset>
      )}
    </form>
  );
};

export default Form;