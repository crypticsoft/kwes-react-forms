# KWES Forms

[![Generic badge](https://img.shields.io/badge/development-v0.2.0-<COLOR>.svg)](https://shields.io/)

### What is KWES React Forms?
This is a dynamic form library that extends the [kwesforms.com](https://kwesforms.com/docs/v2/form-components) form components. Allowing you to use a simple data object or JSON configuration to render field groups and columns.

### Why use this library?
_You can go ahead and generate static forms manually but who wants to do that?_
_You can also spend time looking at the dozen of JS libraries that handle all of the validation and rendering aspects, but have fun with that too._

Or you can just let `Kwesforms`` handle the typical form validation and respones. That's what inspired this library is to create forms without the validation hassle. The library has since been extended to allow for a custom form action and submit handler (function) so it can be used more generically and fallback to built-in browser validation.

[Kwesforms](https://kwesforms.com/pricing) does have some additional customization features with their paid plan(s) for showing / hiding fields. This library really is focused on common use-cases and might be best served for those or as a starting point to generate forms you can extend further, if you needed to with their paid plans.

![Screenshot](./screenshot.png?raw=true 'Form Demo')

@TODO items:
[] Minify steps for css assets to reduce bundle size
[] MSW mocks with `setupTests` (restore when ready)
[] Instructions for how to embed form(s) using React

## Features

[x] Title and Sub-title\
[x] API configuration support (JSON endpoint)\
[x] Hidden fields\
[x] Field Columns / Groups\
[x] Preset values\
[x] Multiple form support\

### "Starter Plan" features (TBD)
[] [Multi-step forms](https://kwesforms.com/docs/v2/multistep-forms)\
[] Submission message\
[] [Field Type: Date picker](https://kwesforms.com/docs/v2/datepicker)

## Form Setup

- In development, use `test` mode and set your local env file.
- The form `id` from the form configuration is what will set the form action.
- `No-Validate` - kwes has built-in field validation, this disables native

## Dynamic Fields

- Hidden fields can be dynamically added to the form and set by using the `data-presets` attribute\
- Form configuration (JSON Endpoint) is defined by using the `data-location` attribute
- _Supported field types_:

  - `text`
  - `textArea`
  - `select`
  - `checkbox`
  - `checkboxGroup`
  - `password`
  - `radio`
  - `email`
  - `hidden`
  - `date` - simple generic
  - `datetime-local` - better for date+time scheduling and allows for `min` / `max` dateLocale strings
  - `datepicker` - renders a styled calendar when `kwesforms` is initialized
  - `file` (req's Starter Plan for file uploads)
  - `cc-number` _(TBD: Starter Plan : Credit card fields)_

- **[💡Tip:]** _You can create a custom field type, then just include it with the interface `Field` type(s) ([see `./src/types/Field.ts`](./src/types/Field.ts))

```HTML
<div
  id="app"
  data-form-id="L6C4A1tTGJgxfefI6vtX"
  data-location="/form01.json"
  data-presets='[{"name": "Tester"},{"lname": "Jim"}]'
></div>
```
** please note ** The `data-form-id` and `data-location` attributes are required. You can simply add multiple div instances to embed multiple forms on the page.

## JSON Configuration
* "Starter Plan" * is needed for the Success & Error Messaging and add'l features.

- Basic Example:

```JSON
{
  "id": "SWXrdEPodyOKj9vXYmwU",
  "title": "Welcome!",
  "subTitle": "Please fill out the form below:",
  "disclaimer": "When you agree to these terms, you agree to allow us to contact you via email.",

  "submission": {
    "button": "Submit",
    "success": "Your form has been submitted successfully.",
    "error": "Opps! Your form has errors. Please check the form and try again."
  },

  "fields": [
    {
      "type": "text",
      "name": "first_name",
      "rules": "required",
      "label": "First Name"
    },
    {
      "type": "select",
      "name": "city",
      "rules": "required",
      "label": "Your City",
      "defaultOption": { "Select One": "" },
      "options": { "Buckeye": "Buckeye", "Avondale": "Avondale" }
    },
    {
      "type": "checkbox",
      "name": "terms",
      "rules": "accepted",
      "label": "I agree to the terms and conditions."
    }
  ]
}
```

## Field Groups

In order to use responsive columns, you can wrap the fields with a `group` array and specify a `size`. These can be interchangeably used with standard `field` definitions.

With the example below, replace `{column-size}` with the column number you want to use. ([see the bulma 12-column grid system](https://bulma.io/documentation/columns/sizes/#12-columns-system))

```JSON
{
  ...
  "fields": [
    "group": [
        {
          "size": {column-size},
          "field": {...}
        },
        ...
    ]
  ]
{
```

**[ 💡 Tip: ]** Try and include your form configurations (JSON) files locally and serve them from the same domain. (see `dist/public paths`)


## Form Examples

`./public` ~ Here are some form examples to get you started.
