import React, { useEffect, useRef } from 'react';
import kwesforms from 'kwesforms';
import clsx from 'clsx';
import InputControl from './InputControl';
import CheckboxControl from './CheckboxControl';
import SelectControl from './SelectControl';
import RadioGroupControl from './RadioGroupControl';
import CheckboxGroupControl from './CheckboxGroupControl';

const isDev = process.env.NODE_ENV !== 'production';

const parseField = (field: Field) => {
  switch (field.type) {
    case 'select':
      return <SelectControl {...field} key={field.name} />;

    case 'text':
    case 'hidden':
      return <InputControl {...field} key={field.name} />;

    case 'checkbox':
      return <CheckboxControl {...field} key={field.name} />;

    case 'checkboxGroup':
      return <CheckboxGroupControl {...field} key={field.name} />;

    case 'radio':
      return <RadioGroupControl {...field} key={field.name} />;

    default:
      return <InputControl {...field} key={field.name} />;
  }
};

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
            <div key={`group-${index}`} className={clsx(columnClasses)}>
              {parseField(f.field)}
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
        <div className="is-12 column">{parseField(field as Field)}</div>
      </div>
    ) : (
      parseField(field as Field)
    );
  });

const Form: React.FC<FormProps> = ({ id, data }) => {
  useEffect(() => {
    // init kwesforms
    if (id) kwesforms.init();
  }, [id]);

  const innerRef = useRef<HTMLFormElement>(null);
  const formAction = id ? `https://kwes.io/api/foreign/forms/${id}` : '';
  const disclaimer = data.disclaimer;
  const submitButton = data.submission?.button || 'Submit';
  /**
   * KWES Form
   * todo: consider adding error messages around required fields. ie form "id"
   */
  return (
    <form
      className="kwes-form"
      ref={innerRef}
      action={formAction}
      {...(isDev && { mode: 'test' })}
      {...(!formAction && { style: { display: 'none' } })}
      noValidate
      acceptCharset="utf-8"
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