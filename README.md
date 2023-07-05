# KWES Forms

[![Generic badge](https://img.shields.io/badge/development-v0.2.0-<COLOR>.svg)](https://shields.io/)

This is a dynamic form library that extends the [kwes.io](https://kwesforms.com/docs/v2/form-components) form components. Allowing you to use a JSON configuration with support for field groups and columns.

![Screenshot](./screenshot.png?raw=true 'Form Demo')

## Features

[x] Title and Sub-title\
[x] API configuration support (JSON endpoint)\
[x] Hidden fields\
[x] Field Columns / Groups\
[x] Preset values\
[] Submission message\
[] Multi-Form support\
[] [Field Type: Date picker](https://kwesforms.com/docs/v2/datepicker)

## Form Setup

- In development, use `test` mode
- Pull in the `id` from the form configuration to set the form action
- NoValidate - kwes has built-in field validation, this disables native

## Dynamic Fields

- Hidden fields can be dynamically added to the form and set by using the `data-presets` attribute\
- Form configuration (JSON Endpoint) is defined by using the `data-location` attribute
- _Supported field types_:

  - `text`
  - `select`
  - `checkbox`
  - `checkboxGroup`
  - `radio`
  - `email`
  - `hidden`
  - `date` _(TBD)_

- **[ 💡 Tip: ]** _You can pass in another field type, say for a native `<input>` element. The component will fallback to using the standard `<input>` (InputControl)._

```HTML
<div
  id="app"
  data-formId="L6C4A1tTGJgxfefI6vtX"
  data-location="/form01.json"
  data-presets='[{"name": "Tester"},{"lname": "Jim"}]'
></div>
```

## JSON Configuration

- Basic Example:

```JSON
{
  "id": "SWXrdEPodyOKj9vXYmwU",
  "title": "Welcome!",
  "subTitle": "Please fill out the form below:",
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

**[ 💡 Tip: ]** Here's a quick way to run Browsersync locally:

```shell
npx browser-sync start --server 'src/forms' --files 'form01.json' --cors true
```
